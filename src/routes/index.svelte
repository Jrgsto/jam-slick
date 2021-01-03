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
    import SectionBenefits from "components/Sections/SectionBenefits.svelte";
    import SectionServices from "components/Sections/SectionServices.svelte";
    import SectionProcess from "components/Sections/SectionProcess.svelte";
    import SectionAboutMe from "components/Sections/SectionAboutMe.svelte";
</script>
<style type="postcss">

    .bg-left-1:before {
        content: ' ';
        display: block;
        position: absolute;
        width: 100%;
        height:40vw;
        z-index: 1;
        opacity: 0.4;
        background-image: url('/uploads/background-drama-left-1.png');
        background-repeat: no-repeat;
        background-size: 40%;
        background-position: left;
    }

    .bg-left-2:before {
        content: ' ';
        display: block;
        position: absolute;
        width: 100%;
        height:40vw;
        z-index: 1;
        opacity: 0.4;
        background-image: url('/uploads/background-drama-left-2.png');
        background-repeat: no-repeat;
        background-size: 40%;
        background-position: left;
    }

    .bg-right-1:before {
        content: ' ';
        display: block;
        position: absolute;
        width: 100%;
        height:40vw;
        z-index: 1;
        opacity: 0.4;
        background-image: url('/uploads/background-drama-right.png');
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: right top;
        margin-top:-200px;
    }

    .bg-right-2:before {
        content: ' ';
        display: block;
        position: absolute;
        width: 100%;
        height:40vw;
        z-index: 1;
        opacity: 0.4;
        background-image: url('/uploads/background-drama-right-2.png');
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: right top;
        right:-10vw;
    }

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
    </div>
</div>
