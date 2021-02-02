<script>
    import {onMount} from 'svelte';
    import BorderdCard from "../Cards/BorderdCard.svelte";
    import Button from "components/Buttons/Button.svelte";
    import Swipeable from "../Swipeable.svelte";
    import {tick} from 'svelte'


    let loginProgress, loginSwipeable, introProgress, zoomOut
    tick().then(() => zoomOut = true)

    const swipeConfig = {
        autoplay: false,
        delay: 2000,
        showIndicators: true,
        transitionDuration: 1000,
        defaultIndex: 0,
    };

    const padding = 30;
    export let toEl = {
        x: 0,
        y: 0
    };

    export const data = [
        {
            id: 'web-content',
            title: 'Web Content & Design',
            type: 'FROM IDEA TO WEBSITE',
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
                    result: 'Your fully ready website'
                }],
            img: '/uploads/service-content-design.svg',
            color: '/uploads/elipse-blue.png'
        },
        {
            id: 'development',
            title: 'Web Development',
            type: 'FAST, SECURE, RELIABLE WEBSITE',
            items: [{
                title: 'I am working with JAM Stack',
                result: 'You have a blazing fast, state of the art website.'
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
            type: 'RUN A DATA-DRIVEN BUSINESS',
            items: [{
                title: 'Set up Tracking & Analytics',
                result: 'Start run your business based on data not hypothesis. '
            },
                {
                    title: 'Customer Analysis & User Journey',
                    result: "Better understand and server your customer needs."
                },
                {
                    title: 'Website Audit & Conversion Optimization',
                    result: 'Adapt design & content to convert customers.'
                },
            ],
            img: '/uploads/service-analytics.svg',
            color: '/uploads/elipse-yellow.png'
        }
    ]

    export let activeElement = data[0];

    let classActiveEl = "";


    // Desktop
    export let offsetWidth = 0;
    export let offsetHeight = 0;


    // Mobile

    let offsetHeightMobile = 0;
    let offsetHeightMobileHeader = 0;
    let offSetMobil = 0;

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

    const updateHeightMobile = (value) => {
        if (value > (offSetMobil - offsetHeightMobileHeader)) {
            offSetMobil = value
        }
    }
    onMount(() => {
        classActiveEl = document.getElementsByClassName('active')[0];
        setInitialPosition();
    })


    $: offsetHeightMobile = updateHeightMobile(offsetHeightMobile)
</script>
<style type="postcss">

    section {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    section p {
        position: relative;
    }

    .container-height {
        height: var(--height);
    }

    .content {
        padding: 20px;
        position: relative;
    }

    .active {
        width: var(--width);
        height: var(--height);
        transition: transform .4s ease-in;
        @apply p-4 bg-complementary-dark shadow-lg;
    }

    :global(.custom-height) {
    }

    .dots {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translateX(-50%);
        line-height: 0;
    }

    .dot {
        width: 10px;
        height: 10px;
        margin: 0 3px;
        border-radius: 8px;
        display: inline-block;
        @apply bg-white;
    }

    .dot.dot-active {
        position: absolute;
        @apply bg-complementary-dark;
    }


    .bg-img {
        background-position: right;
        background-repeat: no-repeat;
        background-size: contain;
    }

</style>
<div class="hidden lg:flex flex-col mb-32 lg:mb-44 bg-tertiary default-width lg:bg-white">
    <div class="flex flex-col lg:flex-row w-full">
        <div class="lg:mr-4 p-8 lg:p-0 hidden lg:block">
            <h2 class="mb-12 text-center lg:text-left">And can help you with other stuff, too...</h2>
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


        <div class="flex w-full lg:w-3/4 relative hidden lg:block">
            <BorderdCard containerClass="custom-height bg-tertiary">
                {#each data as dataItem,index}
                    {#if activeElement.id === dataItem.id}
                        <div class="flex flex-col p-12">
                            <div class="-ml-12 mr-auto bg-spice shadow-lg text-white py-2 px-4 mb-8">
                                {dataItem.type}
                            </div>
                            <div style="background-image:url({activeElement.img})" class="bg-img">
                                {#each dataItem.items as item}
                                    <div class="font-bold text-lg relative">{item.title}
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

<!--Mobile Swiper-->
<div class="flex flex-col lg:hidden bg-tertiary py-12">
    <h2 class="text-center lg:text-left p-4 lg:p-0">And can help you with other stuff, too...</h2>
    <div style="height:{offSetMobil + padding + 'px'};"
         class="container-height flex w-full justify-center bg-tertiary lg:hidden">
        <Swipeable numScreens="3" let:current bind:progress={introProgress}>
            {#each data as dataItem,index}
                <div class="dots mt-2">
                    <div class="dot dot-active" style="left: {$introProgress * 21}px"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <section class:current={current == index && zoomOut}>
                    <div bind:offsetHeight={offsetHeightMobile} class="content mt-8"
                         style="right: {100 * ($introProgress - index)}%; opacity: {1 - Math.abs($introProgress - index)}"
                    >
                        <div bind:offsetHeight={offsetHeightMobileHeader}
                             class="w-full m-0 bg-complementary-dark shadow-lg text-white px-4 py-4 mb-8">
                            {dataItem.title}
                        </div>
                        <div>
                            {#each dataItem.items as item}
                                <div class="font-bold relative mt-4">{item.title}
                                </div>
                                <div class="px-4 py-8 flex">
                                    <img class="h-6 mr-2 " alt="arrow-down" src="/uploads/arrow-down-right.svg"/>
                                    <div>{item.result}</div>
                                </div>
                                <hr/>
                            {/each}
                        </div>
                    </div>
                </section>
            {/each}
        </Swipeable>
    </div>
</div>
<div class=" lg:hidden p-8 flex flex-col lg:w-96 items-center">
    <div class="py-8 text-center text-2xl">Let's talk!</div>
    <hr class="w-1/2 m-auto"/>
    <div class="py-8 bg-opacity-20 text-center">
        <a href="contact" class="relative cursor-pointer animated-link font-bold hover:font-bold pb-1">Get in
            contact</a> and let's
        see how I might help you with your project!
    </div>
    <div class="p-4">
        <Button showArrow={true} color="bg-spice text-white z-40">
            <slot>
                Get in touch
            </slot>
        </Button>
        <div class="pt-2 flex justify-center items-center">Because I <span
                class="text-red text-3xl pr-1">&#10084;</span> what I do
        </div>
    </div>
</div>


