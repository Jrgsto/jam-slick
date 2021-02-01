<script>
    import ProcessCard from "../../Cards/ProcessCard.svelte";
    import BorderdCard from "../../Cards/BorderdCard.svelte";
    import TextBox from "./TextBox.svelte";

    export const data = [{
        id: 'process-1',
        name: 'Understanding',
        free: true,
        color: 'complementary-dark'
    },
        {
            id: 'process-2',
            name: 'Commitment',
            color: 'primary-dark'
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

    // Mobile

    let offsetHeightMobile = 0;
    let offsetHeightMobileHeader = 0;
    let offSetMobil = 0;

    const toggleStatus = (id) => {

        if (activeElement[0] !== id) {
            activeElement[1] = activeElement[0];
            activeElement[0] = id;
        } else {
            activeElement[1] = 'none';
            activeElement[0] = id;
        }
    }

    const updateHeightMobile = (value) => {
        if (value > (offSetMobil - offsetHeightMobileHeader)) {
            offSetMobil = value
        }
    }

    $: offsetHeightMobile = updateHeightMobile(offsetHeightMobile)


</script>
<style type="postcss">

    .process-steps {
        height: var(--height);
    }

    .detail-container {
        height: var(--height);
        padding: var(--padding);
    }
</style>
<div class="default-width hidden lg:block">
    <h2>Interested? These are the next steps...</h2>
    <div class="flex mb-32 lg:mb-44">
        <div bind:offsetHeight={offsetHeight} style="--height:{height + 'px'};--padding:{padding + 'px'}"
             class="w-2/3 detail-container">
            <BorderdCard containerClass="bg-tertiary h-full w-full p-12">
                <TextBox activeElement="{activeElement[0]}" data="{data}"/>
            </BorderdCard>
        </div>
        <div class="flex flex-col process-steps justify-around mt-3 " style="--height:{offsetHeight -padding + 'px'}">
            {#each data as item}
                <div class="cursor-pointer" on:click="{() => toggleStatus(item.id)}">
                    <ProcessCard lastActive={activeElement[1] && activeElement[1] === item.id}
                                 active="{activeElement[0] === item.id}" color="{item.color}"
                                 free="{item.free}">{item.name}</ProcessCard>
                </div>
            {/each}
        </div>
    </div>
</div>


<!--Mobile Swiper-->
<div class="flex flex-col lg:hidden mb-32 bg-tertiary py-12">
    <h2 class="text-center lg:text-left">Interested? These are the next steps...</h2>
    <div class="flex flex-col">
        <div class="bg-complementary-dark text-white p-8 m-4 text-center shadow-lg">
            <div>1. Let's get to know each other</div>
            <div class="bg-spice shadow-lg text-white m-auto p-2 mt-4 flex justify-center">
                <div>Schedule a free call</div>
                <svg class="ml-2" width="25" height="18" viewBox="0 0 88 37" preserveAspectRatio="xMinYMax meet">
                <use xlink:href="/uploads/arrow.svg#arrow" />
            </svg>
            </div>
        </div>

        <div class="bg-primary-dark text-white p-8 m-4 text-center shadow-lg">
            2. Define the project goals, scope and requirements
        </div>
        <div class="bg-complementary text-white p-8 m-4 text-center shadow-lg ">
            3. Mapping out detailed Projectroadmap
        </div>
    </div>
</div>