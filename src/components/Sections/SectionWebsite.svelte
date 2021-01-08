<script>
    import SpeechBubble from "../SpeechBubble.svelte";
</script>
<style type="postcss">

    p {
        @apply font-normal text-white;
    }
</style>

<div class="flex flex-col lg:flex-row justify-between z-30 default-spacing-left mb-32 lg:mb-44">
        <SpeechBubble colorSchema="bg-complementary-dark" box="sb1">
            <p>What is the right
                structure, content
                and design?</p>
        </SpeechBubble>
        <SpeechBubble colorSchema="bg-spice" box="sb2">
            <p>Where do I start?
            </p>
        </SpeechBubble>
        <SpeechBubble colorSchema="bg-complementary" box="sb1">
            <p>Whats the goal
                of my website?</p>
        </SpeechBubble>
        <SpeechBubble colorSchema="bg-primary-light" box="sb2">
            <p>What technology
                should I use?</p>
        </SpeechBubble>
</div>