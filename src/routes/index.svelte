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
    import HeaderBox from "components/HeaderBox.svelte";
    import SectionBenefits from "components/Sections/SectionBenefits.svelte";
    import SectionServices from "components/Sections/SectionServices.svelte";
    import SectionProcess from "components/Sections/SectionProcess.svelte";
    import SectionAboutMe from "components/Sections/SectionAboutMe.svelte";
    import SectionTestimonials from "components/Sections/SectionTestimonials.svelte";
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
        <div class="bg-arrow">
        <SectionServices></SectionServices>
        <div class="bg-left-2 relative">
        </div>
            <div class="bg-right-2"></div>
        <HeaderBox>
            <h2>Interested? These are the next steps...</h2>
        </HeaderBox>
        <SectionProcess></SectionProcess>
        </div>

        <SectionAboutMe></SectionAboutMe>
        <HeaderBox>
            <h2>What people say about my work...</h2>
        </HeaderBox>
        <div class="bg-left-1"></div>
        <SectionTestimonials></SectionTestimonials>
    </div>
</div>

<style>
    .bg-arrow {
        background-image: url("/uploads/arrow-process.svg");
        background-repeat: no-repeat;
        background-position: 70% 60%;
        height:100%;
        position: relative;
    }

    .bg-arrow::before {
        content:'See process';
        position:absolute;
        right:28%;
        top:20%;
        width:200px;
        height:200px;
    }
</style>
