<script>
    import ModalCardDetails from "../Cards/ModalCardDetails.svelte";
    import {modal, showOverlay} from "../../stores";
    import BorderdCard from "../Cards/BorderdCard.svelte";
    import {fade} from 'svelte/transition';
    let activeHoverElement = "";
    let contentToShow = null;

    const handleClick = (id) => {
        if (activeHoverElement === id) {
            $modal.component = null
            $modal.title = ''
            $modal.text = ''
            $showOverlay = false;
            contentToShow = null;
            return activeHoverElement = "";
        }
        $modal.component = ModalCardDetails
        $modal.title = data.filter((item => item.id === id))[0].title;
        contentToShow = data.filter((item => item.id === id))[0].text;
        $modal.text = contentToShow;
        console.log("Active element", id);
        activeHoverElement = id;
        $showOverlay = true;

    }

    const data = [
        {
            title: 'My background',
            id: 'background',
            text: ' After five years working as a marketer, I followed my passion for coding and became a full stack developer with now over 2 years of experience. This unique combination helps me to conceptualize customer oriented websites that convert, while being able to code it myself afterwards.'
        },
        {
            title: 'About you and me',
            id: 'relationship',
            text: 'I love what I do and I love to help people that follow their passion, too. I see business as relationships between humans in the first place. Hence, we should share at least a core set of values based on which we can collaborate. And if we dont match, then we dont match :)'
        },
        {
            title: 'I love processes',
            id: 'process',
            text: 'You can expect great guidance and a lot of structure as well as transparency throughout the whole project. Its important for me that my client keeps an overview about where we are, whats is going on and where we are heading to.'
        },
        {
            title: 'I love lego',
            id: 'lego',
            text: 'Coding is like crafting a lego world...just a bit different. And I love crafting. So be assured that I am pushing the project forward. A plan is good, but it\'s even better to see a plan working.'
        },

    ]
</script>
<style>
    @media (min-width: 480px) {
        .custom-width {
            width: 250px;
            max-width: 250px;
        }
    }

</style>
<div class="flex flex-col default-width mb-32 lg:mb-44">
    <div class="flex flex-wrap justify-center lg:justify-start">
        <div class="w-64 h-64 flex mb-8">
            <div class="group w-full h-full rounded-full overflow-hidden shadow-lg text-center bg-purple table c">
                <img src="/uploads/ich.png" alt="Joerg Stommel"
                     class="object-cover object-center w-full h-full visible group-hover:hidden"/>
            </div>
        </div>
        <div class="ml-4">
            <h2><span class="highlight text-black lg:text-white">And well, thats me...</span></h2>
            <div class="mb-12 ml-4">
                My name is Joerg and
            </div>
        </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-center lg:justify-between flex-wrap w-full">
        {#each data as item}
            <div id={item.id} on:click={() => handleClick(item.id)}
                 class=" m-auto lg:mx-8 my-8 cursor-pointer flex-1 h-20 custom-width">
                <BorderdCard animated=true containerClass="{activeHoverElement === item.id ? 'bg-red' : 'bg-spice'} text-white p-4 relative">
                    <div class="m-auto custom-width ">
                        {item.title}
                    </div>
                </BorderdCard>
            </div>
        {/each}
        {#if contentToShow}
            <div transition:fade class="hidden mx-8 lg:block w-full bg-spice text-white p-12 w-2/3">
                {contentToShow}
            </div>
        {/if}
    </div>
</div>

