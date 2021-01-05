<script>
    import ModalCard from "../Cards/ModalCard.svelte";
    import ModalCardDetails from "../Cards/ModalCardDetails.svelte";
    import {modal, showOverlay} from "../../stores";

    let activeHoverElement = "";

    const handleClick = (id) => {
        if(activeHoverElement === id) {
            $modal.component = null
            $modal.title = ''
            $modal.text = ''
            $showOverlay = false;
            return activeHoverElement ="";
        }
        $modal.component = ModalCardDetails
        $modal.title = data.filter((item => item.id === id))[0].title;
        $modal.text = data.filter((item => item.id === id))[0].text;
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
<style type="postcss">


</style>

<div class="flex flex-col default-spacing">
    <div class="flex flex-wrap justify-center lg:justify-start">
        <div class="w-64 h-64 flex mb-8">
            <div class="group w-full h-full rounded-full overflow-hidden shadow-lg text-center bg-purple table c">
                <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
                <img src="/uploads/ich.png" alt="Joerg Stommel"
                     class="object-cover object-center w-full h-full visible group-hover:hidden"/>
            </div>
        </div>
        <div class="ml-4">
           <p>
                Hello and welcome!
           </p>
            <div class="mb-12 ml-4">
                My name is Joerg and
            </div>
        </div>

    </div>
    <div class="flex flex-col lg:flex-row flex-wrap justify-center w-full relative">
        {#each data as item}
        <div id={item.id} on:click={() => handleClick(item.id)} class="m-8 cursor-pointer flex-1 w-2/3 {activeHoverElement === item.id ? 'h-40' : ''}">
            <ModalCard isActive={activeHoverElement === item.id}>
                <div class="text-primary" slot="teaser">
                    {item.title}
                </div>
                <p class="text-base" slot="text">
                    {item.text}
                </p>
            </ModalCard>
        </div>
        {/each}
    </div>


</div>

