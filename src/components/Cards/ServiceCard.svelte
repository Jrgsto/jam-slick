<script context="module">

</script>
<script>
    export let data;
    export let image;
    export let position = 'left';

</script>
<style>
    li {
        @apply my-4;
    }

    .image-right {
        background-repeat: no-repeat;
        background-position: right bottom;
        background-size: auto 50%;
        opacity:0.3;
    }

</style>

<div>
    <div style="background-image: url({image});"
         class="lg:hidden absolute h-full w-full image-right"></div>
        <div class="h-full flex lg:justify-center items-center {position === 'right' ? 'flex-row-reverse' : '' }">
            <div class="p-20 lg:flex-1 {position === 'right' ? 'lg:ml-12' : 'lg:mr-12' }">
                <slot>
                </slot>
                <div class="flex-col lg:flex-row flex flex-wrap text-black-light">
                    {#each data as item}
                            <div class=" mb-4 text-lg w-full">{item}</div>
                    {/each}
                </div>
            </div>
            <div class="hidden lg:flex lg:flex-1 relative h-full w-full justify-center items-center">
                <img class="w-full h-full" src="{image}"/>
            </div>
        </div>
</div>