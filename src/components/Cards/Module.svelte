<script>
    export let img;
    export let description;
    export let imgPosition = 'right';

    let flexReverse = '';
    if(imgPosition === 'left') {
        flexReverse = 'flex-row-reverse';
    }
</script>
<style>
</style>

<div class="flex {flexReverse} justify-between flex-wrap items-center w-full mb-16">
    <div class="lg:w-1/2 mb-6 lg:mb-0">
        <p class="text-black-light text-xl">{description}</p>
    </div>
    <div class="lg:w-1/2">
        <img src={img} alt="">
    </div>
</div>
