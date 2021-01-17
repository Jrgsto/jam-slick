<script>
    import ServiceCard from "../Cards/ServiceCard.svelte";
    import BorderdCard from "../Cards/BorderdCard.svelte";
    import {slide} from 'svelte/transition';
    import {onMount} from 'svelte';

    const padding = 30;
    export let fromEl;
    export let toEl = {
        x: 0,
        y: 0
    };

    export let activeElement = 'web-content';
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

    const setInitialPosition = () => {
        classActiveEl.style.top = -(padding/2) + 'px';
        classActiveEl.style.left = -(padding/2) + 'px';
        classActiveEl.classList.remove('hidden');
    }
    onMount(() => {
        classActiveEl = document.getElementsByClassName('active')[0];
        setInitialPosition();

    })


    export const data = [
        {
            id: 'web-content',
            title: 'Web Content & Design',
            items: ['Understanding', 'Ideating', 'Conceptualizing', 'Implementing', 'Finalizing']
        },
        {
            id: 'development',
            title: 'Web Development',
            items: ['Fast and response websites with JAM Stack', 'Headless CMS for independent content creation', 'Serverless website that saves you costs and maintance'],
        },
        {
            id: 'analytics',
            title: 'Web Optimization & Analytics',
            items: ['Tracking & Analytics Set up', 'Website Audit & Analysis for Conversion Optimization', 'User Journey Analysis & Webflow Optimization']
        }
    ]


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

</style>

<div class="flex default-width">
    <div class="flex flex-col relative ">
        <div style="--width:{offsetWidth + padding + 'px'}; --height:{offsetHeight + padding + 'px'}" class="hidden active absolute z-10"></div>
        {#each data as item,index }
            <div bind:offsetWidth={offsetWidth} bind:offsetHeight={offsetHeight} id="{item.id}" on:click="{() => toggleStatus(item.id)}" class="{activeElement === item.id ? 'text-white' : 'text-black'} transform-color mb-12 cursor-pointer z-20">
                {item.title}
            </div>
        {/each}
    </div>
    <div class="flex flex-1">

    </div>
    <!--    <div>-->
    <!--        <BorderdCard width="lg:w-full">-->
    <!--            <ServiceCard position="left" image="/uploads/service-content-design.svg" data="{data.content}">-->
    <!--                <slot>-->
    <!--                    <h4 class="text-primary-dark pt-0">Web Content & Design</h4>-->
    <!--                </slot>-->
    <!--            </ServiceCard>-->
    <!--        </BorderdCard>-->
    <!--    </div>-->
    <!--    <div class="h-full">-->
    <!--        <BorderdCard width="lg:w-full h-full">-->
    <!--            <ServiceCard position="right" image="/uploads/service-web-development.svg" data="{data.development}">-->
    <!--                <slot>-->
    <!--                    <h4 class="text-primary-dark pt-0">Web Development</h4>-->
    <!--                </slot>-->
    <!--            </ServiceCard>-->
    <!--        </BorderdCard>-->
    <!--    </div>-->
    <!--    <div >-->
    <!--        <BorderdCard width="lg:w-full">-->
    <!--            <ServiceCard position="left" image="/uploads/service-analytics.svg" data="{data.analytics}">-->
    <!--                <slot>-->
    <!--                    <h4 class="text-primary-dark pt-0">Web Optimization & Analytics</h4>-->
    <!--                </slot>-->
    <!--            </ServiceCard>-->
    <!--        </BorderdCard>-->
    <!--    </div>-->
</div>

