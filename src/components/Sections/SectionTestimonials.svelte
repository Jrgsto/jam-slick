<script>
    import ProcessCard from "../Cards/ProcessCard.svelte";
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

<div class="flex flex-col default-spacing">
    <div class="flex flex-col lg:flex-row justify-between w-full">
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