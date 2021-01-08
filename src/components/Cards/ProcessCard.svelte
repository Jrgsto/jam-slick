<script context="module">

</script>
<script>
    export let free = false;
    export let special = false;
    export let contact = false;

    let style = special ? 'bg-complementary-dark text-white' : 'bg-white';

</script>
<style>

</style>

<div class="flex flex-col lg:flex-row items-center lg:items-start justify-center z-30">
    <div class="w-20 flex justify-center ">
        {#if free}
            <div class="bg-spice shadow-lg text-white m-auto p-2">
            FREE!
            </div>
        {/if}
    </div>
    <div class="w-56 my-4">
        <div class="{style} w-full z-30 shadow-xl p-8 font-bold">
            <slot></slot>
        </div>
        {#if contact}
            <div class="bg-complementary-dark bg-opacity-40 shadow-xl p-8">
                <span> You can</span> <a href="contact" class="animated-link hover:font-bold underline cursor-pointer font-bold"> contact me here </a><span> directly. I’ll get back to you shortly!</span>
            </div>
        {/if}
    </div>
</div>