<script>
    import {onMount} from 'svelte';
    import BorderdCard from "../Cards/BorderdCard.svelte";


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
            type: 'PROCESS',
            items: [{
                title: 'Understanding you, your product & the target group',
                result: 'Collection of requirements'
            },
                {
                    title: 'Ideating and brainstorming ideas',
                    result: 'Moodboard of Ideas'
                },
                {
                    title: 'Mock and sketch the website',
                    result: 'Content & design concept'
                },
                {
                    title: 'Translating concept into code',
                    result: 'Your website'
                }],
            img: '/uploads/service-content-design.svg',
            color: '/uploads/elipse-blue.png'
        },
        {
            id: 'development',
            title: 'Web Development',
            type: 'BENEFITS',
            items: [{
                title: 'I am using a JAM Stack',
                result: 'Fast, secure and reliable website'
            },
                {
                    title: 'Option to use a headless CMS',
                    result: 'You can change website content on your own. No technical skills required.'
                },
                {
                    title: 'Serverless website',
                    result: "No server needed. You save costs and maintenance"
                }],
            img: '/uploads/service-web-development.svg',
            color: '/uploads/elipse-green.png'
        },
        {
            id: 'analytics',
            title: 'Web Optimization & Analytics',
            type: 'METHODES',
            items: [{
                title: 'Set up Tracking & Analytics',
                result: 'Starting tracking users website behaviour. '
            },
                {
                    title: 'Customer Analysis & User Journey',
                    result: "Better understand and server your customer needs."
                },
                {
                    title: 'Website Audit & Conversion Optimization',
                    result: 'Optimized website leading to more customers'
                },
            ],
            img: '/uploads/service-analytics.svg',
            color: '/uploads/elipse-yellow.png'
        }
    ]

    export let activeElement = data[0];
    export let offsetWidth = 0;
    export let offsetHeight = 0;
    let classActiveEl = "";

    const toggleStatus = (id) => {
        let element = document.getElementById(activeElement.id);
        if (element.classList.contains('text-white')) {
            element.classList.remove('text-white');
        }
        activeElement = data.filter(item => item.id === id)[0];
        element = document.getElementById(activeElement.id);
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
        let element = document.getElementById(activeElement.id);
        element.classList.add('text-white');
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

    :global(.custom-height) {
        height: 500px;

    }


    .bg-img {
        background-position: right;
        background-repeat: no-repeat;
        background-size: contain;
    }

</style>
<div class="flex flex-col mb-32 lg:mb-44 default-width">
    <div class="flex w-full">
        <div class="mr-4">
                <h2 class="mb-12 text-left">And can help you with other stuff, too...</h2>
            <div class="flex flex-col items-start justify-between relative">
            <div style="--width:{offsetWidth + padding + 'px'}; --height:{offsetHeight + padding + 'px'}"
                 class="active absolute z-10"></div>
            {#each data as item,index }
                <div bind:offsetWidth={offsetWidth} bind:offsetHeight={offsetHeight} id="{item.id}"
                     on:click="{() => toggleStatus(item.id)}"
                     class="mb-12 cursor-pointer z-20 text-center">
                    <span class="{activeElement.id !== item.id ? 'relative pb-2' : '' }">{item.title}</span>
                </div>
            {/each}
        </div>
        </div>
        <div class="flex w-3/4 relative">
            <BorderdCard containerClass="custom-height bg-white">
            {#each data as dataItem,index}
                {#if activeElement.id === dataItem.id}
                    <div class="flex flex-col p-12">
                        <div class="-ml-12 mr-auto bg-spice shadow-lg text-white py-2 px-4 mb-8">
                            {dataItem.type}
                        </div>
                        <div style="background-image:url({activeElement.img})" class="bg-img">
                            {#each dataItem.items as item}
                                <div class="text-2xl relative">{item.title}
                                </div>
                                <div class="p-2 flex">
                                    <img class="h-4 mr-2 " alt="arrow-down" src="/uploads/arrow-down-right.svg"/>
                                    <div class="mb-4">{item.result}</div>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/if}
            {/each}
            </BorderdCard>
        </div>
    </div>
</div>


