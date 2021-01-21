<script>
    import {onMount} from 'svelte';
    import Button from "../Buttons/Button.svelte";
    import BorderdCard from "../Cards/BorderdCard.svelte";
    import HeaderBox from "components/HeaderBox.svelte";

    const padding = 30;
    export let fromEl;
    export let toEl = {
        x: 0,
        y: 0
    };

    export const data = [
        {
            id: 'web-content',
            title: 'Web Content & Design',
            items: ['Understanding', 'Ideating', 'Conceptualizing', 'Implementing', 'Finalizing'],
            img: '/uploads/service-content-design.svg',
            color: '/uploads/elipse-blue.png'
        },
        {
            id: 'development',
            title: 'Web Development',
            items: ['Fast and response websites with JAM Stack', 'Headless CMS for independent content creation', 'Serverless website that saves you costs and maintance'],
            img: '/uploads/service-web-development.svg',
            color: '/uploads/elipse-green.png'
        },
        {
            id: 'analytics',
            title: 'Web Optimization & Analytics',
            items: ['Tracking & Analytics Set up', 'Website Audit & Analysis for Conversion Optimization', 'User Journey Analysis & Webflow Optimization'],
            img: '/uploads/service-analytics.svg',
            color: '/uploads/elipse-yellow.png'
        }
    ]

    export let activeElement = data[0].id;
    export let offsetWidth = 0;
    export let offsetHeight = 0;
    let classActiveEl = "";

    const toggleStatus = (id) => {
        let element = document.getElementById(activeElement);
        if(element.classList.contains('text-white')) {
            element.classList.remove('text-white');
        }
        activeElement = id;
        element = document.getElementById(activeElement);
        toEl.x = element.offsetLeft;
        toEl.y = element.offsetTop;
        classActiveEl.style.transform = "translate3d(" + toEl.x + "px," + toEl.y + "px,0)";
        setTimeout(() => {
            element.classList.add('text-white');
        }, 400)
    }


    const setInitialPosition = () => {
        classActiveEl.style.top = -(padding / 2) + 'px';
        classActiveEl.style.left = -(padding / 2) + 'px';
        classActiveEl.classList.remove('hidden');
    }
    onMount(() => {
        classActiveEl = document.getElementsByClassName('active')[0];
        setInitialPosition();
    })


</script>
<style type="postcss">


    .active {
        width: var(--width);
        height: var(--height);
        transition: transform .4s ease-in;
        @apply p-4 bg-complementary-dark shadow-lg;
    }

    .custom-height {
        height: 400px;
    }

</style>
<div class="default-width flex flex-col mb-32 lg:mb-44">
        <div class="flex flex-col">
            <HeaderBox>
                <h2 class="text-left p-0">And can help you with other stuff, too...</h2>
            </HeaderBox>
            <div class="justify-center items-center flex">
                <div class="flex flex-col justify-between relative mr-24">
                    <div style="--width:{offsetWidth + padding + 'px'}; --height:{offsetHeight + padding + 'px'}"
                         class="hidden active absolute z-10"></div>
                    {#each data as item,index }
                        <div bind:offsetWidth={offsetWidth} bind:offsetHeight={offsetHeight} id="{item.id}"
                             on:click="{() => toggleStatus(item.id)}"
                             class="mb-12 cursor-pointer z-20">
                            <span class="{activeElement !== item.id ? 'animated-link relative pb-2' : '' }">{item.title}</span>
                        </div>
                    {/each}
                </div>
                <div class="flex w-3/5 relative custom-height">
                    {#each data as dataItem,index}
                        {#if activeElement === dataItem.id}
                            <div class="flex p-12">
                                <img class="mr-12" src="{dataItem.img}"/>
                                <div
                                        class="font-bold flex flex-col justify-between z-20">
                                    {#each dataItem.items as item}
                                        <div>{item}</div>
                                    {/each}
                                </div>
                            </div>

                        {/if}

                    {/each}
                </div>
            </div>
        </div>
</div>


