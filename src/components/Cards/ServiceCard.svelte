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
    img {
        max-height:300px;
        @apply h-44 lg:h-72;
    }

</style>

<div class="flex items-center justify-center lg:justify-start lg:items-start {position === 'right' ? 'flex-row-reverse' : ''} ">
    <div class="flex-1 {position === 'right' ?'lg:ml-4' : 'lg:mr-2'} z-30">
        <slot>
        </slot>
        <ul class="list-none text-complementary-dark">
            {#each data as item}
                <li class="text-lg">{item}</li>
            {/each}
        </ul>
    </div>
    <img class="opacity-20 lg:opacity-100 absolute h-48 lg:relative flex-1" src="{image}"/>
</div>