<script>
    import Button from "components/Buttons/Button.svelte";
    import SectionWebsite from "components/Sections/SectionWebsite.svelte";
    import HeaderBox from "components/HeaderBox.svelte";
</script>
<style type="postcss">

    h1, h2 {
        @apply z-50;
    }
    .bg-image {
        /*background-image: url("/uploads/website-header-desktop.png");*/
        background-repeat: no-repeat;
        background-position: right;
    }


</style>
<div class="lg:h-screen flex flex-wrap bg-image mb-36">
    <div class="flex default-width mt-28">
        <div class="font-bold text-black-light flex flex-col w-2/3">
            <h2 class="z-40 text-complementary-dark text-5xl">Focus on what matters<br/> to your business.</h2>
            <h1 class="pt-0 rounded-lg mb-24 text-spice z-40 font-extrabold">I do your website.</h1>
            <Button showArrow={true} color="bg-spice text-white z-40">
                <slot>
                    Get in touch
                </slot>
            </Button>
        </div>
    </div>
    <div class="w-full mt-14">
        <HeaderBox>
            <h2 class="pb-0">A website can be overwhelming...</h2>
        </HeaderBox>
        <SectionWebsite/>
    </div>
</div>



