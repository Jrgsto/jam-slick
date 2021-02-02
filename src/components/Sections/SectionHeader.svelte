<script>
    import Button from "components/Buttons/Button.svelte";
    import SectionWebsite from "components/Sections/SectionWebsite.svelte";
</script>
<style type="postcss">

    h1, h2 {
        @apply z-50;
    }

    .bg-image {
        /*background-image: url("/uploads/website-header-desktop.png");*/
        background-repeat: no-repeat;
        background-position: right;
        background: linear-gradient(to bottom right, #ebebeb 49.8%, #fff 50%);
    }


</style>
<div class="lg:h-screen flex flex-wrap bg-image pt-24">
    <div class="flex default-width text-center lg:text-left justify-center items-center lg:justify-start lg:mt-28">
        <div class="text-black-light flex flex-col py-8 lg:py-0 lg:w-2/3">
            <h2 class="z-40 text-complementary-dark text-3xl lg:text-5xl">Focus on what matters<br/> to your business.
            </h2>
            <h1 class="pt-0 rounded-lg lg:mb-24 text-spice z-40 font-extrabold">I do your website.</h1>
            <div class="mb-12 lg:p-4">
                <Button showArrow={true} color="bg-spice text-white z-40">
                    <slot>
                        Get in touch
                    </slot>
                </Button>
                <div class="pt-2">Because I <span class="text-red text-3xl pr-1 align-middle">&#10084;</span> what I do
                </div>
            </div>
        </div>
    </div>
    <div class="default-width lg:mb-44 w-full">
        <div class="text-center lg:text-left w-full text-center lg:w-3/4 lg:ml-auto">
            <h2 class="p-4 lg:p-0 mb-12 lg:text-right lg:ml-auto lg:default-spacing-right">A website can be
                overwhelming...</h2>
            <div class="p-4 lg:p-0">
                <SectionWebsite/>
            </div>
        </div>
    </div>
</div>



