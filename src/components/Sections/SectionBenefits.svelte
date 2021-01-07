<script>


    let offsetHeight;

</script>
<style type="postcss">


    .container-process {
            height: var(--height);
    }

</style>
<div class="default-width relative flex justify-center my-24">
        <div style="--height:{offsetHeight + 'px'}" class="hidden lg:block absolute -left-10 -top-5 container-process border border-spice lg:w-1/2 m-auto left-0 right-0"></div>
        <div bind:offsetHeight={offsetHeight} class="p-20 flex-col relative flex z-30 font-bold bg-tertiary lg:border border-spice lg:w-1/2">
            <h2 class="pt-0">I can help you to build a website...</h2>
            <div class="flex-col flex mt-12 m-auto">
                <div class="flex mb-24 lg:mb-0">
                    <div class="flex-1 relative flex mb-12">
                        <img class="absolute -top-10 -left-5" width="20%" src="/uploads/shape1.svg"/>
                        <div class="text-2xl font-bold -mt-6">
                            1.
                        </div>
                        <div class="ml-2">
                            targets the needs of your customers and converts.
                        </div>
                    </div>
                    <div class="hidden lg:flex flex-1"></div>
                </div>
                <div class="flex mb-24 lg:mb-0">
                    <div class="hidden lg:flex flex-1">
                    </div>
                    <div class="flex-1 relative flex mb-12">
                        <img class="absolute -top-10 -left-5" width="20%" src="/uploads/shape2.svg"/>
                        <div class="text-2xl font-bold -mt-6">
                            2.
                        </div>
                        <div class="ml-2">
                            targets the needs of your customers and converts.
                        </div>
                    </div>
                </div>
                <div class="flex mb-24 lg:mb-0">
                    <div class="flex-1 relative flex mb-12">
                        <img class="absolute -top-10 -left-5" width="20%" src="/uploads/shape3.svg"/>
                        <div class="text-2xl font-bold -mt-6">
                            3.
                        </div>
                        <div class="ml-2">
                            does not require you to have any technical knowledge.
                        </div>
                    </div>
                    <div class="hidden lg:flex flex-1"></div>
                </div>
                <div class="flex mb-24 lg:mb-0">
                    <div class="hidden lg:flex flex-1">
                    </div>
                    <div class="flex-1 relative flex mb-12">
                        <img class="absolute -top-10 -left-5" width="20%" src="/uploads/shape4.svg"/>
                        <div class="text-2xl font-bold -mt-6">
                            4.
                        </div>
                        <div class="ml-2">
                            targets the needs of your customers and converts.
                        </div>
                    </div>
                </div>
        </div>
        <img class="hidden md:block bottom-0 left-12 absolute" src="/uploads/triangle.svg"/>
        <img class="hidden md:block top-10 -right-16 absolute z-20" src="/uploads/circlesborder.svg"/>
    </div>
</div>