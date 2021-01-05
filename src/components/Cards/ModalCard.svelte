
<script>
    import { fly, slide, blur } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    export let isActive = false;

</script>
<style>

</style>

<div class="bg-primary h-20 w-full z-20 hover:shadow-lg">
    <div class="absolute top-5 right-5 pl-4 bg-primary-light border-primary border flex items-center z-30 h-20 w-full relative hover:shadow-lg ">
        <slot name="teaser"></slot>
    </div>
    {#if isActive}

        <div transition:slide="{{ duration: 1000, 	easing: quintOut }}" class="hidden lg:flex cursor-default relative p-4 bg-primary border border-primary"></div>
        <div in:blur="{{ duration: 800, easing: quintOut }}" out:blur="{{ duration: 500, easing: quintOut }}" class="hidden lg:flex absolute left-0 mx-4 ">
        <div class="cursor-default p-4 bg-primary ml-4 mr-4 shadow-lg text-white"><slot name="text"></slot></div>
        </div>
    {/if}
</div>