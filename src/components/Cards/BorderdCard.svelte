<script>
    let offsetHeight;
    export let width='w-full';
    export let containerClass ='bg-tertiary';
    export let animated =false;

</script>
<style type="postcss">


    .container-process {
        height: var(--height);
    }



</style>
<div class="relative h-full {width} ">
    <div style="--height:{offsetHeight + 'px'}" class="hidden lg:block absolute -left-5 -top-3 container-process border border-spice {width} m-auto left-0 right-0"></div>
    <div bind:offsetHeight={offsetHeight} class="h-full flex-col flex z-30 font-bold lg:border border-spice  {width} {containerClass} {animated ? 'card-animated process-animated' : ''} ">
        <slot></slot>
    </div>
</div>