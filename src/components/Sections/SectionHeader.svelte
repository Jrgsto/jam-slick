<script>
    import Button from "components/Buttons/Button.svelte";
    import SectionWebsite from "components/Sections/SectionWebsite.svelte";
</script>
<style type="postcss">

    h1, h2 {
        @apply z-50;
    }
    .bg-image {
        background-image: url("/uploads/website-header-desktop.png");
        background-repeat: no-repeat;
        background-position: center;
    }


</style>
<div class="relative lg:h-screen flex flex-wrap bg-image">
    <div class="flex default-width mt-28">
        <div class="font-bold p-4 text-black-light flex flex-col w-2/3">
            <h2 class="z-40 text-complementary-dark text-5xl">Focus on your core business.</h2>
            <h1 class="pt-0 rounded-lg mb-24 text-spice z-40 font-extrabold">I do your website.</h1>
            <Button showArrow={true} color="bg-spice text-white z-40">
                <slot>
                    Get in touch
                </slot>
            </Button>
        </div>
    </div>
        <SectionWebsite/>
</div>



