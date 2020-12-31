<script context="module">

</script>
<script>
    import ModalCardDetails from './ModalCardDetails.svelte';
    import {showDetail, modal} from "../../stores";
    export let cardId;

    async function getContentData(id) {
        const response = await self.fetch(`cards/${id}.json`);
        return response.json();
    }

    const click = async (id) => {
        $modal.component = ModalCardDetails
        $modal.content = await getContentData(id);
        $showDetail = true;

    }
</script>
<style>
    @media (min-width: 768px) {
        .custom-width {
            width: calc(33.5% - 1.5rem);
        }
    }
    .custom-width:nth-child(2) {
        @apply mx-0 my-8 lg:my-0 lg:mx-8;
    }

</style>

<div class="flex flex-col items-center custom-width p-4 rounded-lg bg-white shadow hover:bg-blue-light hover:bg-opacity-50 hover:shadow-2xl cursor-pointer" on:click={() => click(cardId)}>
    <div class="w-full flex items-center">
    </div>
        <div class="mb-2 font-bold lg:font-thin text-xl md:text-2xl px-4 text-center flex justify-end lg:justify-center">
            Das ist ein Test Title
        </div>
</div>