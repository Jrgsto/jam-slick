<script context="module">
    const useConfig = false;

    export async function preload() {
        if (useConfig) {
            const response = await this.fetch('index.json');
            const fetchedData = await response.json();
            return {fetchedData};
        }
    }
</script>
<script>
    import {showForm} from "../stores";
    import {showDetail} from "../stores";
    import {modal} from "../stores";
    import SectionHeader from "components/Sections/SectionHeader.svelte";
    import SectionWebsite from "components/Sections/SectionWebsite.svelte";
    import HeaderBox from "components/HeaderBox.svelte";
</script>
<style type="postcss">

</style>

{#if $showForm}
    <Form/>
{:else if $showDetail}
    <div class="fixed h-screen w-screen">
        {#if $modal.component}
            <slot>
                <svelte:component this={$modal.component}/>
            </slot>
        {/if}
    </div>
{/if}
<div>
    <div class="default-spacing">
        <SectionHeader/>
        <HeaderBox>
            <h2>A website can be overwhelming...</h2>
        </HeaderBox>
        <SectionWebsite/>
    </div>
</div>
