<script>
    export let size = 'large';
    export let handleClick;
    export let buttonClass = ''
    export let buttonSize ='h-14 text-2xl';
    export let showArrow = false;
    if(size === "small") {
        buttonSize = 'text-sm h-10'
    }
</script>
<style>
   button:hover svg {
      animation: neon4 1s ease-in-out infinite alternate;
      @apply shadow-2xl
   }


   @keyframes neon4 {
      from {
         filter: drop-shadow(0 0 20px #fff)drop-shadow( 0 0 20px #fff)
      }
      to {
         filter: drop-shadow(0 0 0px #fff)drop-shadow( 0 0 5px #fff)
      }
   }
</style>

   <button on:click|preventDefault={handleClick} type="button" class="relative w-auto hover:bg-opacity-50 ease-in-out duration-100">
      <div class="absolute -top-2 -left-2 border-2 border-spice w-full {buttonSize}"></div>
      <div class="inline-block font-bold p-4 {buttonClass} {buttonSize} bg-spice flex items-center z-40">
         <div class="mr-2 text-white">
            <slot></slot>
         </div>
         {#if showArrow}
            <svg width="{size === 'small' ? '50' : '80'}" height="{size === 'small' ? '18' : '28'}" viewBox="0 0 88 37" preserveAspectRatio="xMinYMax meet">
               <use xlink:href="/uploads/arrow.svg#arrow" />
            </svg>
         {/if}
      </div>
   </button>

