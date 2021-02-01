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
    import { fade } from 'svelte/transition';
    import {showForm, showOverlay, modal} from "../stores";
    import SectionHeader from "components/Sections/SectionHeader.svelte";
    import SectionBenefits from "components/Sections/SectionBenefits.svelte";
    import SectionServices from "components/Sections/SectionServices.svelte";
    import SectionProcess from "components/Sections/SectionProcess/SectionProcess.svelte";
    import SectionAboutMe from "components/Sections/SectionAboutMe.svelte";
    import SectionTestimonials from "components/Sections/SectionTestimonials.svelte";
    import Form from "components/Form/Form.svelte";
</script>

{#if $showForm}
    <Form/>
{:else if $showOverlay}
    <div transition:fade class="flex lg:hidden fixed h-screen w-screen z-40 bg-primary bg-opacity-90 p-8">
        {#if $modal.component}
            <slot>
                <svelte:component this={$modal.component}/>
            </slot>
        {/if}
    </div>
{/if}
<div>
    <div>
        <SectionHeader/>
        <SectionBenefits></SectionBenefits>
        <SectionServices></SectionServices>
        <SectionProcess></SectionProcess>
        <SectionAboutMe ></SectionAboutMe>
        <SectionTestimonials></SectionTestimonials>
    </div>
</div>

<style>
    .bg-arrow {
        background-image: url("/uploads/arrow-process.svg");
        background-repeat: no-repeat;
        background-position: top 70%;
        height:100%;

    }

    /*.bg-arrow::before {*/
    /*    content:'';*/
    /*    position:absolute;*/
    /*    right:28%;*/
    /*    top:20%;*/
    /*    width:200px;*/
    /*    height:200px;*/
    /*}*/
</style>
