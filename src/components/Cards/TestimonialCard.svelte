<script>

</script>
<style>

</style>

<div class="border-complementary border-2 shadow-lg p-4 flex flex-col m-4">
    <div class="text-lg font-bold text-complementary-dark">
    <slot name="firstname"></slot>
    </div>
        <p class="text-primary italic">
            <slot name="text"></slot>
        </p>
    <div class="ml-auto text-spice flex items-center cursor-pointer">
        <div class="mr-2">See project</div>
        <svg width="50" height="18" viewBox="0 0 88 37" preserveAspectRatio="xMinYMax meet">
            <use xlink:href="/uploads/arrow.svg#arrow-black" />
        </svg>
    </div>
</div>