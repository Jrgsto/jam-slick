<script>
    import ProcessCard from "../Cards/ProcessCard.svelte";
    import { fade } from 'svelte/transition';
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

    const toggleStatus = (id) => {

        if (activeElement[0] !== id) {
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

    .detail-container {
        height: var(--height);
        padding: var(--padding);
    }
</style>
<div class="default-width">
    <h2>Interested? These are the next steps...</h2>
<div class="flex mb-32 lg:mb-44">
    <div bind:offsetHeight={offsetHeight} style="--height:{height + 'px'};--padding:{padding + 'px'}"
         class="w-2/3 detail-container">
        <BorderdCard containerClass="bg-white h-full w-full p-12">
            {#if activeElement[0] === data[0].id}
                <div in:fade class="h-full"> Here is then the content for UNderstanding</div>
            {/if}
            {#if activeElement[0] === data[1].id}
                <div in:fade class="h-full"> Here is then the content for Commitment</div>
            {/if}
            {#if activeElement[0] === data[2].id}
                <div in:fade class="h-full"> Here is then the content for Project</div>
            {/if}
        </BorderdCard>
    </div>
    <div class="flex flex-col process-steps justify-around mt-3" style="--height:{offsetHeight -padding + 'px'}">
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