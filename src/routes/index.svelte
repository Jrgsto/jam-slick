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
    import SectionWebsite from "components/Sections/SectionWebsite.svelte";
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
            <div class="bg-left-1"></div>
            <HeaderBox>
                <h2>A website can be overwhelming...</h2>
            </HeaderBox>
            <SectionWebsite/>
        <HeaderBox>
            <h2>I can help you to build a website...</h2>
        </HeaderBox>
        <SectionBenefits></SectionBenefits>
        <div class="bg-right-1"></div>
        <HeaderBox>
            <h2>And can help you with other stuff, too...</h2>
        </HeaderBox>
        <SectionServices></SectionServices>
        <div class="bg-left-2"></div>
        <HeaderBox>
            <h2>Interested? These are the next steps...</h2>
        </HeaderBox>
        <SectionProcess></SectionProcess>
        <div class="bg-right-2"></div>
        <HeaderBox>
            <h2>And, well, that’s me...</h2>
        </HeaderBox>
        <SectionAboutMe></SectionAboutMe>
        <HeaderBox>
            <h2>What people say about my work...</h2>
        </HeaderBox>
        <SectionTestimonials></SectionTestimonials>
    </div>
</div>
