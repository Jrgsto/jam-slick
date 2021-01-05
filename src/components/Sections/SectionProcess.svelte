<script>
    import ProcessCard from "../Cards/ProcessCard.svelte";
    import Button from "../Buttons/Button.svelte";

    export const data = [{
        name: 'Get to know each other',
        free: true,
        special: true
    },
        {
            name: 'Understanding your needs',
            free: true,
            special: true
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

<div class="flex flex-col default-spacing">
    <div class="flex flex-col md:flex-row justify-between">
        <ProcessCard colorType="primary" free=true>
            <slot>
                <div>Get to know each other</div>
            </slot>
        </ProcessCard>
        <ProcessCard colorType="primary" free=true>
            <slot>
                <div>Understanding your needs</div>
            </slot>
        </ProcessCard>
    </div>
    <div class="flex flex-wrap justify-center default-spacing" >
            <ProcessCard colorType="complementary" special=true single=true>
                <slot>
                    <div>Commitment</div>
                </slot>
            </ProcessCard>
    </div>
    <div class="flex flex-col md:flex-row justify-between">
        <ProcessCard colorType="primary">
            <slot>
                <div>Definition of Project & Deliverables</div>
            </slot>
        </ProcessCard>
        <ProcessCard colorType="primary">
            <slot>
                <div>Project Phase</div>
            </slot>
        </ProcessCard>
    </div>
    <div class="flex flex-wrap justify-center default-spacing">
            <ProcessCard colorType="primary" single=true>
            <slot>
                <div>Follow up &
                    Fine tuning</div>
            </slot>
        </ProcessCard>
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