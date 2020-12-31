<script>
    export let size = 'medium';
    export let color = 'bg-orange'
    export let handleClick;
    export let buttonClass = ''
    export let showArrow = false;

    let buttonSize ='text-2xl';
    if(size === "small") {
        buttonSize = 'text-sm'
    }
    buttonClass = buttonSize + ' ' + buttonClass + ' ' + color;
</script>
<style>
   svg { transition: margin-left .5s }
   button:hover svg {
      margin-left: 7px;
   }
</style>

<button  on:click|preventDefault={handleClick} type="button" class="mx-auto lg:mx-0 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow hover:shadow-2xl transition hover:scale-105 duration-300 ease-in-out {buttonClass}">
   <div class="flex items-center">
      <div class="mr-2">
         <slot></slot>
      </div>
      {#if showArrow}
      <div>
         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" clip-rule="evenodd"><path id="path1" d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
      </div>
         {/if}
   </div>
</button>