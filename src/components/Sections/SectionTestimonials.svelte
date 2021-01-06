<script>
    import { Swipe, SwipeItem } from "svelte-swipe";

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
    .swipe-holder{
        height: 30vh;
        width: 100%;
    }
    img{
        max-width: 100%;
        height: auto;
    }
</style>
<div class="flex flex-col default-spacing">
    <div class="flex flex-col lg:flex-row justify-between w-full">
        <div class="swipe-holder">
            <Swipe {...swipeConfig}>
                <SwipeItem>
                    <img src="./images/1.jpg" alt="">
                </SwipeItem>

                <SwipeItem>
                    <img src="./images/2.jpg" alt="">
                </SwipeItem>

                <SwipeItem>
                    <img src="./images/3.jpg" alt="">
                </SwipeItem>

                <SwipeItem>
                    <img src="./images/4.jpg" alt="">
                </SwipeItem>
            </Swipe>
        </div>
        {#each testimonials as item}
            <div class="flex-1 w-full lg:w-1/2">
        <TestimonialCard>
            <span slot="firstname">{item.name}</span>
            <span slot="text">{item.text}</span>
        </TestimonialCard>
            </div>
            {/each}
    </div>
        <div class="flex justify-center mt-12 ">
            <div class="lg:w-20"></div>
            <Button showArrow={true} color="mt-24 bg-spice text-white z-30">
                <slot>
                    Get in touch
                </slot>
            </Button>
        </div>
</div>

