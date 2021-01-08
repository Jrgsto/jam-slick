<script>
        export let box;
        export let color;
        export let colorSchema;
        const bgColor = '#FBECDB';
        switch(colorSchema) {
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
                color='var(--bgColor)';
        }
</script>

<div style="--color: {color}; --bgColor: {bgColor} " class="box1 shadow-lg {box} bg-primary-light z-30 flex items-center justify-center"><slot></slot></div>


<style>
        .box1 {
                width: 300px;
                height: 200px;
                margin: 50px auto;
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
                border-left: 10px solid var(--color);
                border-right: 10px solid transparent;
                border-top: 10px solid var(--color);
                border-bottom: 10px solid transparent;
                bottom: -20px;
                left: 20px;
        }

        .sb2:after {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 12px solid transparent;
                border-right: 12px solid var(--color);
                border-top: 12px solid transparent;
                border-bottom: 12px solid var(--color);
                top: -20px;
                right: 20px;
        }
</style>