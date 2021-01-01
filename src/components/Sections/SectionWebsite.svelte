<script>
    import SpeechBubble from "../SpeechBubble.svelte";
</script>
<style type="postcss">

</style>

<div class="flex flex-col lg:flex-row justify-start">
    <div class="flex flex-col lg:block lg:mx-12">
        <SpeechBubble box="sb2">
            <p>What is the right
                structure, content
                and design?</p>
        </SpeechBubble>
        <SpeechBubble box="sb3">
            <p>Where do I start?
            </p>
        </SpeechBubble>

    </div>
    <div class="flex flex-col lg:block lg:mx-12">
        <SpeechBubble box="sb1">
            <p>Whats the goal
                of my website?</p>
        </SpeechBubble>
        <SpeechBubble box="sb4">
            <p>What technology
                should I use?</p>
        </SpeechBubble>
    </div>
</div>