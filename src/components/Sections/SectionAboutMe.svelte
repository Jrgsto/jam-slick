<script>
    import ModalCardDetails from "../Cards/ModalCardDetails.svelte";
    import {modal, showOverlay} from "../../stores";
    import {fade} from 'svelte/transition';
    import BorderdCard from "../Cards/BorderdCard.svelte";
    import Button from "components/Buttons/Button.svelte";


    const data = [
        {
            title: 'Background',
            id: 'background',
            color: 'bg-primary'
        },
        {
            title: 'Values',
            id: 'relationship',
            color: 'bg-complementary'
        },
        {
            title: 'Personality',
            id: 'process',
            color: 'bg-complementary-dark'
        },
    ]


    let activeHoverElement = "background";
    let contentToShow = data[0].id;

    const handleClick = (id) => {
        if (activeHoverElement === id) {
            contentToShow = data.filter((item => item.id === id))[0].id;
            return;
        }
        contentToShow = data.filter((item => item.id === id))[0].id;
        activeHoverElement = id;

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
    #about-me {
        position:absolute;
        top:-200px;
    }

</style>

<div class="flex flex-col lg:flex-row default-width justify-between lg:mb-44 relative"><span id="about-me"></span>
    <div class="flex flex-col lg:w-1/2 lg:mr-12 ">
        <div class="flex flex-col lg:flex-row mb-12 justify-center items-center">
            <div class="w-44 h-44 rounded-full overflow-hidden shadow-lg text-center m-auto table mb-8 lg:mb-0 lg:mr-8">
                <img src="/uploads/ich.png" alt="Joerg Stommel"
                     class="object-cover object-center w-full h-full visible"/>
            </div>
            <div class="flex flex-col ml-4 items-center lg:items-start">
                <h2 class="mt-0 pt-0">Hi, thats me!</h2>
                <div>
                    <p class="p-0">
                    My name is Joerg and I help people to successfully run their business by building and optimizing
                    websites that converts potential in actual customers.
                    </p>
                    <p class="py-2">My attitude towards work? Work should be fun.</p>
                    <p class="p-0">I can't wait to hear from you soon!</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center lg:justify-start text-white lg:text-black bg-complementary-dark lg:bg-white px-8 pt-8 lg:p-0">

            {#each data as item}
                <div id={item.id} on:click={() => handleClick(item.id)}
                     class="cursor-pointer">
                    <div class="{activeHoverElement === item.id ? 'active-tab text-spice font-bold' : 'animated-link'} relative mx-4 lg:mr-12">
                        {item.title}
                    </div>
                </div>
            {/each}
        </div>
        <hr class="mt-8"/>
        <div transition:fade class="lg:block lg:py-8">
            <div>
                {#if contentToShow === 'background'}
                    <p class="p-0">Having worked five years as a marketer before becoming a fullstack developer I combine the best
                        out of the two areas: Designing a website based on your customer needs while using state of the
                        art technology.</p>
                    <a href="https://www.linkedin.com/in/joergstommel/" target="_blank" class="mt-4 flex text-complementary-dark cursor-pointer items-center">
                        <img src="/uploads/linkedin.png" alt="Joerg Stommel"
                         class="h-4 w-4 float-left" /><div class="ml-2 relative animated-link text-white lg:text-complementary-dark">Linkedin profile</div>
                    </a>
                {/if}
                {#if contentToShow === 'relationship'}
                    <p class="p-0">Business is a relationship between people in the first place. And I see it as such. Its important
                        to me that we both share at least a core set of values based on which we can collaborate.</p>
                    <ul class="pt-4">
                        <li class="py-2"><span class="font-bold underline">Respect & Tolerance</span><br/>Communicate your opinion in a respectful, non-judgemental personal way.</li>
                        <li class="py-2"><span class="font-bold underline">Learning & Productivity</span><br/>Keep a beginners mindset, be open and learn from each other.</li>
                        <li class="py-2"><span class="font-bold underline">Responsibility & Trust</span><br/>Be self-responsible, reliable and trust in the work of others.</li>
                        <li class="py-2"><span class="font-bold underline">Fun</span><br/>Enjoy what you do and have fun while working.</li>
                        <li></li>
                    </ul>
                {/if}
                {#if contentToShow === 'process'}
                    <p class="p-0">I keep a positive beginners mindset. I am reliable and self-responsible. I trust and respect people. I am patient. I am curious. I like to understand. I like transparency. I like to craft (code). I want to learn and grow. I like balance. I enjoy life.</p>
                {/if}
            </div>
        </div>
    </div>
    <div class="p-8 flex flex-col lg:w-96 items-center mx-auto">
        <div class="py-8 text-center text-2xl">Let's talk!</div>
        <hr class="w-1/2"/>
        <div class="py-8 bg-opacity-20 text-center">
            <a href="contact" class="relative cursor-pointer animated-link font-bold hover:font-bold pb-1">Get in
                contact</a> and let's
            see how I might help you with your project!
        </div>
        <div class="p-4">
            <Button showArrow={true} color="bg-spice text-white z-40">
                <slot>
                    Get in touch
                </slot>
            </Button>
            <div class="pt-2 flex justify-center items-center">Because I <span
                    class="text-red text-3xl pr-1">&#10084;</span> what I do
            </div>
        </div>
    </div>
</div>

