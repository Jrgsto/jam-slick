<script>
    let offsetHeight;
    let width='w-full';

</script>
<style type="postcss">


    .container-process {
        height: var(--height);
    }

</style>
<div class="relative h-full {width}">
    <div style="--height:{offsetHeight + 'px'}" class="hidden lg:block absolute -left-10 -top-5 container-process border border-spice {width} m-auto left-0 right-0"></div>
    <div bind:offsetHeight={offsetHeight} class="h-full flex-col relative flex z-30 font-bold bg-tertiary lg:border border-spice {width}">
        <slot></slot>
    </div>
</div>