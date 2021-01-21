<script>
    import ProcessCard from "../Cards/ProcessCard.svelte";
    import Button from "../Buttons/Button.svelte";
    import BorderdCard from "../Cards/BorderdCard.svelte";


    export const data = [{
        id: 'process-1',
        name: 'Understanding',
        free: true,
        color: 'complementary-dark'
    },
        {
            id: 'process-2',
            name: 'Commitment',
            color: 'spice'
        },
        {
            id: 'process-3',
            name: 'Project',
            color: 'complementary'
        }
    ]

    let activeElement = [data[0].id];
    let offsetHeight = 0;
    let padding = 24;
    let height = 500;

    const toggleStatus = (id) => {

        if(activeElement[0] !== id) {
            activeElement[1] = activeElement[0];
            activeElement[0] = id;
        } else {
            activeElement[1] = 'none';
            activeElement[0] = id;
        }
        console.log("Thats the new acitve id", activeElement)
    }



</script>
<style type="postcss">

    .process-steps {
        height: var(--height);
    }

    .detail-container{
        height: var(--height);
        padding: var(--padding);
    }
</style>

<div class="flex default-width mb-32 lg:mb-44">
    <div bind:offsetHeight={offsetHeight} style="--height:{height + 'px'};--padding:{padding + 'px'}" class="w-1/2 detail-container">
        <BorderdCard containerClass="bg-white h-full w-full p-12">
            <div class="h-full"> Here is then the content</div>
        </BorderdCard>
    </div>
    <div class="flex flex-col process-steps justify-around mt-3" style="--height:{offsetHeight -padding + 'px'}">
        {#each data as item}
            <div class="cursor-pointer" on:click="{() => toggleStatus(item.id)}">
                <ProcessCard lastActive={activeElement[1] && activeElement[1] === item.id} active="{activeElement[0] === item.id}" color="{item.color}" free="{item.free}">{item.name}</ProcessCard>
            </div>
        {/each}

        <!--        <div class="flex justify-center mt-12">-->
        <!--            <div class="lg:w-20"></div>-->
        <!--            &lt;!&ndash;{#each data as step}&ndash;&gt;-->
        <!--            &lt;!&ndash;    <ProcessCard free={step.free} special={step.special} contact={step.contact ? true : false}>&ndash;&gt;-->
        <!--            &lt;!&ndash;        <div>{step.name}</div>&ndash;&gt;-->
        <!--            &lt;!&ndash;    </ProcessCard>&ndash;&gt;-->
        <!--            &lt;!&ndash;{/each}&ndash;&gt;-->
        <!--            <Button showArrow={true} color="mt-24 bg-spice text-white z-30">-->
        <!--                <slot>-->
        <!--                    Get in touch-->
        <!--                </slot>-->
        <!--            </Button>-->
        <!--        </div>-->
    </div>
</div>