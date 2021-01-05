<script>
    import {modal, showOverlay} from '../../stores';

    const closeModal = () => {
        $modal.component = null
        $modal.title = ''
        $modal.text = ''
        $showOverlay = false;
    }

    const bgImages = ['bg-right-1', 'bg-right-2', 'bg-left-1', 'bg-left-2'];
    const getImage = bgImages[Math.floor(Math.random() * bgImages.length)];
</script>
<style>
</style>

<div class="p-4 {getImage}">
    <div on:click={closeModal} class="close cursor-pointer mt-4 z-50"></div>
    <h1>{$modal.title}</h1>
    {$modal.text}
</div>