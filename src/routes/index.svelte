<script context="module">
    const useConfig = false;
    export async function preload() {
        if( useConfig) {
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
    <div class="md:h-screen default-spacing">
        <SectionHeader/>
    </div>
</div>
