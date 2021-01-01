<script>
    import Button from "components/Buttons/Button.svelte";
</script>
<style type="postcss">

    h1, h2 {
        @apply z-50;
    }
</style>

<div class="flex">
    <div class="w-full font-bold p-4 text-primary-dark">
        <h2>Focus on what matters to your business.</h2>
        <h1 class="pt-0 rounded-lg mb-24 text-spice z-50">I do your website.</h1>
            <Button showArrow={true} color="mt-24 bg-spice text-white z-50">
                <slot>
                    Jetzt mehr erfahren
                </slot>
            </Button>
            <div class="hidden lg:flex">
                <div class="absolute flex justify-end z-20">
                    <img class="bg-image lg:-mt-96 lg:w-2/3 h-auto z-20" src="/uploads/website-header-desktop.png" />
                </div>
            </div>
    </div>

</div>
