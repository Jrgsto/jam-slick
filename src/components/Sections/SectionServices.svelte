<script>
    import {onMount} from 'svelte';

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
        activeElement = id;
        let element = document.getElementById(id);
        toEl.x = element.offsetLeft;
        toEl.y = element.offsetTop;
        classActiveEl.style.transform = "translate3d(" + toEl.x + "px," + toEl.y + "px,0)";
    }

    const animate = (id) => {

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

    .transform-color {
        transition: color .6s ease-in-out;
    }


    .animate-in {
        animation: slide-in .6s forwards;
    }


    @keyframes slide-in {
        0% { transform: translateX(200%); }
        100% { transform: translateX(0%); }
    }

    @keyframes slide-out {
        0% { transform: translateX(0%); }
        100% { transform: translateX(200%); }
    }
</style>
<!--<img class="absolute right-0 -top-80 bg-image z-0" src="{activeElement.color}"/>-->
<div class="flex default-width justify-between">
    <div class="flex flex-col relative">
        <div style="--width:{offsetWidth + padding + 'px'}; --height:{offsetHeight + padding + 'px'}"
             class="hidden active absolute z-10"></div>
        {#each data as item,index }
            <div bind:offsetWidth={offsetWidth} bind:offsetHeight={offsetHeight} id="{item.id}"
                 on:click="{() => toggleStatus(item.id)}"
                 class="{activeElement === item.id ? 'text-white' : 'text-black'} transform-color mb-12 cursor-pointer z-20">
                {item.title}
            </div>
        {/each}
    </div>
    <div id="animated" class="flex w-3/5 relative ">
        {#each data as dataItem,index}
            {#if activeElement === dataItem.id}
                <div id="{'animate-' + dataItem.id}"class="w-full flex flex-col z-20 animate-in">
                    {#each dataItem.items as item}
                        <div class="pb-4">{item}</div>
                    {/each}
                </div>
                <div class="absolute right-0 -top-20 z-10 animate-in">
                    <img class="right-0 opacity-70" src="{dataItem.img}"/>
                </div>
            {/if}
        {/each}
    </div>
</div>

