<script>
    import ButtonRound from "components/Buttons/ButtonRound.svelte";
</script>
<style type="postcss">
</style>

<div class="flex justify-between h-screen">
    <div class="w-full lg:w-2/3 font-bold p-4 text-primary">
        <h1>Erfolg im Vertrieb mit weniger Zeitaufwand!</h1>
        <p class="bg-primary-light rounded-lg p-4 text-2xl font-thin mb-12 lg:w-3/4">Mit dem richtigen Verkaufstraining zum
            Erfolg.</p>
        <ButtonRound showArrow={true} color="bg-spice text-white">
            <slot>
                Jetzt mehr erfahren
            </slot>
        </ButtonRound>
    </div>
    <div class="hidden lg:flex absolute default-spacing w-full">
    </div>
</div>
