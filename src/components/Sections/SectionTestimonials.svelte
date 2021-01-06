<script>
    import {Swipe, SwipeItem} from "svelte-swipe";
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


    import Button from "../Buttons/Button.svelte";
    import TestimonialCard from "../Cards/TestimonialCard.svelte";

    export const testimonials = [{
        name: 'Max',
        text: 'I really enjoyed working with Jörg. He is super easy going and knows his shiaaaaat.'
    },
        {
            name: 'Max',
            text: 'I really enjoyed working with Jörg. He is super easy going and knows his shiaaaaat.'
        },

    ]


</script>
<style>

    section {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    section p {
        position: relative;
    }

    .content {
        padding: 20px;
        position: relative;
    }

    .dots {
        transform: translateX(-50%);
        @apply absolute bottom-5 left-1/2;
    }
    .dot {
        border-radius: 8px;
        @apply bg-complementary-dark w-4 h-4 m-2 inline-block;
    }
    .dot.active {
        position: absolute;
        @apply bg-primary
    }


</style>
<div class="flex flex-col default-spacing">
    <div class="flex w-full h-80 w-80">
        <Swipeable numScreens="2" let:current bind:progress={introProgress}>
            {#each testimonials as item,index}
                <section class:current={current == index && zoomOut}>
                    <div class="content"
                         style="right: {100 * ($introProgress - index)}%; opacity: {1 - Math.abs($introProgress - index)}"
                    >
                        <div class="lg:flex w-full justify-center">
                            <TestimonialCard>
                                <span slot="firstname">{item.name}</span>
                                <span slot="text">{item.text}</span>
                            </TestimonialCard>
                        </div>
                    </div>
                </section>
            {/each}
            <div class="hidden md :flex dots">
                <div class="dot active" style="left: {$introProgress * 2}rem"></div>
                <div class="dot"></div><div class="dot"></div>
            </div>


        </Swipeable>

        <!--{#each testimonials as item}-->
        <!--        <div class="hidden lg:flex w-full lg:w-1/2">-->
        <!--            <TestimonialCard>-->
        <!--                <span slot="firstname">{item.name}</span>-->
        <!--                <span slot="text">{item.text}</span>-->
        <!--            </TestimonialCard>-->
        <!--        </div>-->
        <!--{/each}-->
        <!--<div class=" lg:hidden swipe-holder">-->
        <!--    <Swipe {...swipeConfig}>-->
        <!--        {#each testimonials as item}-->
        <!--        <SwipeItem>-->
        <!--                <div class="h-full w-full">-->
        <!--                    <TestimonialCard>-->
        <!--                        <span slot="firstname">{item.name}</span>-->
        <!--                        <span slot="text">{item.text}</span>-->
        <!--                    </TestimonialCard>-->
        <!--                </div>-->
        <!--        </SwipeItem>-->
        <!--        {/each}-->
        <!--    </Swipe>-->
        <!--</div>-->

    </div>
    <div class="flex justify-center mt-12 ">
        <Button showArrow={true} color="mt-24 bg-spice text-white z-30">
            <slot>
                Get in touch
            </slot>
        </Button>
    </div>
</div>

