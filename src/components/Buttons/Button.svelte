<script>
    export let size = 'large';
    export let handleClick;
    export let statusDisabled = false;
    export let buttonClass = ''
    export let buttonSize ='h-16 lg:text-2xl';
    export let showArrow = false;
    import {showForm} from "../../stores";
    if(size === "small") {
        buttonSize = 'h-12 text-base'
    }
    const openForm = () => {
        $showForm = true;
    }
</script>
<div>
<button disabled={statusDisabled} on:click|preventDefault={handleClick ? handleClick : openForm} type="button" class="relative w-auto">
      <div class="absolute -top-2 -left-2 border-2 border-spice w-full p-4 {buttonSize}"></div>
      <div class="inline-block font-bold pl-4 m-auto {buttonClass} {buttonSize} relative bg-spice flex items-center z-40 card-animated process-animated p-4">
         <div class="text-white text-center">
            <slot></slot>
         </div>
         {#if showArrow}
            <svg class="ml-2" width="{size === 'small' ? '30' : '50'}" height="{size === 'small' ? '15' : '20'}" viewBox="0 0 88 37" preserveAspectRatio="xMinYMax meet">
               <use xlink:href="/uploads/arrow.svg#arrow" />
            </svg>
         {/if}
      </div>
</button>
</div>

