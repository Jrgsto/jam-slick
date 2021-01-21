<script context="module">

</script>
<script>
    export let free = false;
    export let color;
    export let active = false;
    export let lastActive = false;


    let colorBorder = `border-${color} `;
    let colorBg = `bg-${color} `;
    let colorText = `text-${color} `;


</script>

<style type="postcss">

    .slide-in-animated {
        animation: slide-in 2s forwards;
        transition: background-color 1s;
    }

    .slide-out-animated {
        animation: slide-out 2s forwards;

    }

    @keyframes slide-in {
        0% {
        }
        2% {
            transform: translateX(0%) scale(1.2);
        }
        100% {
            transform: translateX(-50%) scale(1.0);

        }
    }

    @keyframes slide-out {
        0% {
            transform: translateX(-50%);
        }

        100% {
        }
    }
</style>

<div class="z-30 shadow-xl py-6 px-12 font-bold w-full relative text-center  {active ? `slide-in-animated text-white ${colorBg}` : `border bg-white ${colorBorder} ${colorText}`} {lastActive ? 'slide-out-animated' : ''}">
    <div class="absolute -top-5 -left-10 flex justify-center">
        {#if free}
            <div class="bg-spice shadow-lg text-white m-auto p-2">
                FREE!
            </div>
        {/if}
    </div>
    <slot></slot>
</div>