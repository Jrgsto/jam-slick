<script context="module">

</script>
<script>
    export let colorType;
    export let free = false;
    export let single = false;
    let textColor = `text-${colorType}`;
    let borderColor = `border-${colorType}`;
    let bgColor = `bg-${colorType}`;

</script>
<style>

</style>

<div class="flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-center">
        <div class="w-20">
            {#if free}
                <img src="/uploads/free-text.png"/>
            {/if}
        </div>
    <div class="w-56 relative mt-12 pb-12 h-full md:h-auto z-30">
        <div class="{bgColor} h-32 w-full z-30 shadow-xl"></div>
        <div class="absolute top-5 right-5 inline-block font-bold m-auto bg-primary-light {borderColor} border-2 flex items-center h-32 w-full shadow-xl">
            <div class="mr-2 {textColor} text-center w-full">
                <slot></slot>
            </div>
        </div>
    </div>
</div>