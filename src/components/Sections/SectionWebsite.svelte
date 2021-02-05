<script>
    import SpeechBubble from "../SpeechBubble.svelte";
    import {onMount} from 'svelte';

    let offsetHeight;
    let offsetWidth;

    onMount(() => {
        let elements = document.getElementsByClassName('box1');
        for (let i = 0; i < elements.length; i++) {
            (function (ind) {
                setTimeout(function () {
                    elements[i].classList.remove('hidden');
                }, 1000 + (1000 * ind));
            })(i);
        }
    })


</script>
<style type="postcss">


    @keyframes scale {
        0% {
            transform: scale(0.0);
            opacity: 0;
        }
        100% {
            transform: scale(1.0);
            opacity: 1;
        }
    }


    @keyframes slide-in {
        0% {
            transform: translateX(100%) scale(0.5);
            opacity: 0;
        }
        100% {
            transform: translateX(0%) scale(1.0);
            opacity: 1;
        }
    }

    :global(.slide-animated .box1) {
        animation: slide-in 1s forwards;
        margin-bottom: 30px;
    }

</style>
<div bind:offsetHeight={offsetHeight} bind:offsetWidth={offsetWidth}
     class="lg:default-spacing-left flex flex-col lg:flex-row lg:justify-end lg:items-end relative w-full mb-24">
    <div class="slide-animated pb-4 lg:pb-0 lg:pr-8 lg:w-1/4 h-40">
        <SpeechBubble colorSchema="bg-primary-dark" box=" sb3 hidden h-full">
            <p slot="front">What is the goal of my website?</p>
            <p slot="back">Let's analyze your business requirements and set up the right purpose for your website.
            </p>
        </SpeechBubble>
    </div>
    <div class="slide-animated pb-4 lg:pb-0 lg:pr-8 lg:w-1/4 h-40">
        <SpeechBubble colorSchema="bg-complementary" box="w-full sb1 hidden h-full">
            <p slot="front">What is the right
                structure, content
                and design?</p>
            <p slot="back">Let's target design & content to the needs and pain points of your target audience.
            </p>
        </SpeechBubble>
    </div>
    <div class="slide-animated pb-4 lg:pb-0 lg:pr-8 lg:w-1/4 h-40">
        <SpeechBubble colorSchema="bg-complementary-dark" box="sb2 hidden h-full">
            <p slot="front">What technology should I use?</p>
            <p slot="back">We will clear up the technology jungle and find the technology that suits your needs.
            </p>
        </SpeechBubble>
    </div>
    <div class="slide-animated pb-4 lg:pb-0 lg:pr-8 lg:w-1/4 h-40">
        <SpeechBubble colorSchema="bg-spice-light" box="sb4 hidden h-full">
            <p slot="front">What else?</p>
            <p slot="back">There is a lot more to make your website a success. But I will make sure we cover it
                all.<br/>
                <a href="contact"
                   class="font-extrabold text-complementary-dark relative cursor-pointer animated-link font-bold hover:font-bold pb-1">Let
                    get in touch.</a>
            </p>
        </SpeechBubble>
    </div>
</div>