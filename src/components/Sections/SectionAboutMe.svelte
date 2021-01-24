<script>
    import ModalCardDetails from "../Cards/ModalCardDetails.svelte";
    import {modal, showOverlay} from "../../stores";
    import {fade} from 'svelte/transition';
    import BorderdCard from "../Cards/BorderdCard.svelte";
    import Button from "components/Buttons/Button.svelte";


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


    let activeHoverElement = "background";
    let contentToShow = data[0].text;

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


</script>
<style>

    .active-tab:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: currentColor;
    }

</style>
<div class="flex default-width justify-between mb-32 lg:mb-44">
    <div class="flex flex-col w-1/2 lg:mr-12 ">
        <div class="flex mb-12">
            <div class="w-44 h-44 rounded-full overflow-hidden shadow-lg text-center bg-purple table mr-8">
                <img src="/uploads/ich.png" alt="Joerg Stommel"
                     class="object-cover object-center w-full h-full visible group-hover:hidden"/>
            </div>
            <div class="flex flex-col">
                <h2>And well, thats me...</h2>
                <div class="mb-12 ml-4">
                    My name is Joerg and
                </div>
            </div>
        </div>
        <div class="flex lg:flex-row">
            {#each data as item}
                <div id={item.id} on:click={() => handleClick(item.id)}
                     class="cursor-pointer">
                    <div class="{activeHoverElement === item.id ? 'active-tab text-spice font-bold' : 'animated-link'} relative mr-12">
                        {item.title}
                    </div>
                </div>
            {/each}
        </div>
        {#if contentToShow}
            <div transition:fade class="hidden lg:block py-12">
                <BorderdCard containerClass="p-12 bg-white">
                    {contentToShow}
                </BorderdCard>
            </div>
        {/if}
    </div>
    <div class="flex flex-col w-96 items-center">
        <div class=" p-8 text-center text-2xl">Let's talk!</div>
        <hr class="w-1/2"/>
        <div class="p-8 bg-opacity-20 text-center">
            <a href="contact" class="relative cursor-pointer animated-link font-bold hover:font-bold pb-1">Get in
                contact</a> and let's
            see how I might help you with your project!
        </div>
        <div class="p-8">
            <Button showArrow={true} color="bg-spice text-white z-40">
                <slot>
                    Get in touch
                </slot>
            </Button>
        </div>
    </div>
</div>

