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
        background-position: right;
        background-size: auto 110%;
        opacity:0.7;
    }

    .image-left {
        background-repeat: no-repeat;
        background-position: left;
        background-size: auto 100%;
        opacity:0.7;
    }

</style>

<div>
    <div style="background-image: url({image});"
         class="hidden lg:block absolute h-full w-full {position === 'right' ? 'image-left' : 'image-right' }"></div>
    <div class="h-full w-full flex-col p-20 ">
        <div class="h-full flex lg:justify-center items-center {position === 'right' ? 'flex-row-reverse' : '' }">
            <div class="lg:flex-1 {position === 'right' ? 'lg:ml-12' : 'lg:mr-12' }">
                <slot>
                </slot>
                <ul class="list-none text-complementary-dark">
                    {#each data as item}
                        <li class="text-lg">{item}</li>
                    {/each}
                </ul>
            </div>
            <div class="lg:flex-1">
            </div>
        </div>
    </div>
</div>