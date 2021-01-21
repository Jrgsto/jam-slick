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
        case "bg-spice":
            color = '#ED6A5A';
            break;
        case "bg-primary-light":
            color = '#FFBC8C';
            break;
        default:
            color = 'var(--bgColor)';
    }
</script>

<div style="--color: {color}; --bgColor: {bgColor} "
     class="box1 shadow-lg {box} bg-primary-light z-30 flex items-center justify-center">
    <slot></slot>
</div>


<style>
    .box1 {
        padding: 20px;
        text-align: center;
        font-weight: 900;
        background-color: var(--color);
        position: relative;
    }


    .sb1:after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 12px solid var(--color);
        border-right: 12px solid transparent;
        border-top: 12px solid var(--color);
        border-bottom: 12px solid transparent;
        transform: rotate(45deg);
        top: -10px;
        right: 20px;
    }

    .sb2:after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 13px solid var(--color);
        border-right: 13px solid transparent;
        border-top: 13px solid var(--color);
        border-bottom: 13px solid transparent;
        transform: rotate(225deg);
        bottom: -10px;
        left: 50px;
    }

    .sb3:after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 13px solid var(--color);
        border-right: 13px solid transparent;
        border-top: 13px solid var(--color);
        border-bottom: 13px solid transparent;
        transform: rotate(-45deg);
        top: 20px;
        left: -10px;
    }

    .sb4:after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 13px solid var(--color);
        border-right: 13px solid transparent;
        border-top: 13px solid var(--color);
        border-bottom: 13px solid transparent;
        transform: rotate(130deg);
        top: 20px;
        right: -10px;
    }

</style>