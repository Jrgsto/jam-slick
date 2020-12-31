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
    export let fetchedData;
</script>
<style type="postcss">

</style>

{#if $showForm}
    <Form/>
{:else if $showDetail}
    <Modal>
        {#if $modal.component}
            <slot>
                <svelte:component this={$modal.component}/>
            </slot>
        {/if}
    </Modal>
{/if}
<div class="z-20">
    <div class="md:h-screen default-spacing">
        <SectionHeader/>
    </div>
</div>
