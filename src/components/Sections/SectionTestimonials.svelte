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
    import BorderdCard from "../Cards/BorderdCard.svelte";

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


</style>
<div class="flex flex-col default-width">
    <h2>What people say about my work...</h2>
    <div class="flex w-full h-80 w-80 lg:hidden">
        <Swipeable numScreens="2" let:current bind:progress={introProgress}>
            {#each testimonials as item,index}
                <section class:current={current == index && zoomOut}>
                    <div class="content"
                         style="right: {100 * ($introProgress - index)}%; opacity: {1 - Math.abs($introProgress - index)}"
                    >
                        <div class="lg:flex w-full justify-center">
                            <BorderdCard containerClass="bg-white">
                                <div class="p-12 flex-col">
                                    <img alt="quote image" class="mb-4 " src="/uploads/quote.svg"/>
                                    <div class="mb-4">{item.text}</div>
                                    <div class="text-spice">
                                        {item.name}
                                    </div>
                                </div>
                            </BorderdCard>
                        </div>
                    </div>
                </section>
            {/each}
        </Swipeable>
    </div>

    <div class="hidden lg:flex w-full justify-center">
        {#each testimonials as item}
            <div class="lg:mr-12">
            <BorderdCard containerClass="bg-white">
                <div class="p-12 flex-col">
                    <img alt="quote image" class="mb-4 " src="/uploads/quote.svg"/>
                    <div class="mb-4">{item.text}</div>
                    <div class="text-spice">
                        {item.name}
                    </div>
                </div>
            </BorderdCard>
            </div>
        {/each}
    </div>

</div>
<div class="flex justify-center mt-12 ">
    <Button showArrow={true} color="mt-24 bg-spice text-white z-30">
        <slot>
            Get in touch
        </slot>
    </Button>
</div>
