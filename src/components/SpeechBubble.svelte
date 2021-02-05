<script>
    export let box;
    export let color;
    export let colorSchema;
    const bgColor = '#FBECDB';
    switch (colorSchema) {
        case "bg-complementary":
            color = '#9BC1BC';
            break;
        case "bg-complementary-dark":
            color = '#59739B';
            break;
        case "bg-primary-dark":
            color = '#D17428';
            break;
        case "bg-spice-light":
            color = '#FFD247';
            break;
        default:
            color = 'var(--bgColor)';
    }
</script>

<div class="box1 {box} bg-primary-light z-30 flex items-center justify-center">
    <div class="flip-card-inner shadow-lg cursor-default">
        <div style="--color: {color}" class="flip-card-front flex items-center justify-center p-4">
            <slot name="front"></slot>
        </div>
        <div style="--color: {color}" class="flip-card-back flex items-center justify-center p-4">
            <slot name="back"></slot>
        </div>
    </div>
</div>


<style>
    .box1 {
        text-align: center;
        background-color:transparent;
        position: relative;
        height: 100%;
        width: 100%;
        perspective: 1000px;
    }


    /*.sb1:after {*/
    /*    content: "";*/
    /*    width: 0px;*/
    /*    height: 0px;*/
    /*    position: absolute;*/
    /*    border-left: 12px solid var(--color);*/
    /*    border-right: 12px solid transparent;*/
    /*    border-top: 12px solid var(--color);*/
    /*    border-bottom: 12px solid transparent;*/
    /*    transform: rotate(45deg);*/
    /*    top: -10px;*/
    /*    right: 20px;*/
    /*}*/

    /*.sb2:after {*/
    /*    content: "";*/
    /*    width: 0px;*/
    /*    height: 0px;*/
    /*    position: absolute;*/
    /*    border-left: 13px solid var(--color);*/
    /*    border-right: 13px solid transparent;*/
    /*    border-top: 13px solid var(--color);*/
    /*    border-bottom: 13px solid transparent;*/
    /*    transform: rotate(225deg);*/
    /*    bottom: -10px;*/
    /*    left: 50px;*/
    /*}*/

    /*.sb3:after {*/
    /*    content: "";*/
    /*    width: 0px;*/
    /*    height: 0px;*/
    /*    position: absolute;*/
    /*    border-left: 13px solid var(--color);*/
    /*    border-right: 13px solid transparent;*/
    /*    border-top: 13px solid var(--color);*/
    /*    border-bottom: 13px solid transparent;*/
    /*    transform: rotate(-45deg);*/
    /*    top: 20px;*/
    /*    left: -10px;*/
    /*}*/

    /*.sb4:after {*/
    /*    content: "";*/
    /*    width: 0px;*/
    /*    height: 0px;*/
    /*    position: absolute;*/
    /*    border-left: 13px solid var(--color);*/
    /*    border-right: 13px solid transparent;*/
    /*    border-top: 13px solid var(--color);*/
    /*    border-bottom: 13px solid transparent;*/
    /*    transform: rotate(130deg);*/
    /*    top: 20px;*/
    /*    right: -10px;*/
    /*}*/

    /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .box1:hover .flip-card-inner, .sb2:hover::after {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
        background-color: var(--color);
    }

    /* Style the back side */
    .flip-card-back {
        background-color: var(--color);
        transform: rotateY(180deg);
    }

</style>