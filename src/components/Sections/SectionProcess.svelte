<script>
    import ProcessCard from "../Cards/ProcessCard.svelte";
    import Button from "../Buttons/Button.svelte";

    export const data = [{
        name: 'Get to know each other',
        free: true,
        special: false,
        contact: true
    },
        {
            name: 'Understanding your needs',
            free: true,
            special: false,
        },
        {
            name: 'Commitments',
            free: false,
            special: true
        },
        {
            name: 'Project Definition',
            free: false,
            special: false
        },
        {
            name: 'Project Phase',
            free: false,
            special: false
        },
        {
            name: 'Follow up & Fine tuning',
            free: false,
            special: false
        }
    ]


</script>

<div class="flex flex-col default-spacing mb-32 lg:mb-44">
    <div class="flex flex-col justify-between">
        {#each data as step}
            <ProcessCard free={step.free} special={step.special} contact={step.contact ? true : false}>
                <div>{step.name}</div>
            </ProcessCard>
        {/each}
        <div class="flex justify-center mt-12">
            <div class="lg:w-20"></div>
            <Button showArrow={true} color="mt-24 bg-spice text-white z-30">
                <slot>
                    Get in touch
                </slot>
            </Button>
        </div>
    </div>
</div>