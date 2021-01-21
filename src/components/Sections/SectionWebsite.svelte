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

    p {
        @apply font-normal text-white;
    }

    @keyframes scale {
        0% {
            transform:  scale(0.0);
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
        animation: slide-in 2s forwards;
        margin-bottom: 30px;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
        }

        70% {
            transform: scale(1);
        }

        100% {
            transform: scale(0.95);
        }
    }


</style>
<div bind:offsetHeight={offsetHeight} bind:offsetWidth={offsetWidth} class="default-spacing-left flex justify-end items-end relative w-full">
        <div class="slide-animated mr-24 w-1/4 h-40">
            <SpeechBubble colorSchema="bg-spice" box=" sb3 hidden h-full">
                <p>Where do I start?
                </p>
            </SpeechBubble>
        </div>
    <div class="slide-animated mr-24 w-1/4 h-40">
        <SpeechBubble colorSchema="bg-complementary" box="w-full sb1 hidden h-full">
            <p>Whats the goal
                of my website?</p>
        </SpeechBubble>
    </div>
        <div class="slide-animated mr-24 w-1/4 h-40">
            <SpeechBubble colorSchema="bg-complementary-dark" box="sb2 hidden h-full">
                <p>What technology
                    should I use?</p>
            </SpeechBubble>
        </div>
        <div class="slide-animated mr-4 w-1/4 h-40">
            <SpeechBubble colorSchema="bg-primary-light" box="sb4 hidden h-full">
                <p>What is the right
                    structure, content
                    and design?</p>
            </SpeechBubble>
        </div>
</div>