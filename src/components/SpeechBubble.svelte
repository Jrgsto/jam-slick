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
            transform:rotate(220deg);
            top: 20px;
            right: -10px;
        }

        .sb2:after {
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            border-left: 15px solid var(--color);
            border-right: 15px solid transparent;
            border-top: 15px solid var(--color);
            border-bottom: 15px solid transparent;
            transform:rotate(220deg);
            bottom: 20px;
            right: -10px;
        }

        .sb3:after {
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            border-left: 10px solid var(--color);
            border-right: 10px solid transparent;
            border-top: 10px solid var(--color);
            border-bottom: 10px solid transparent;
            transform:rotate(30deg);
            top: 20px;
            right: -10px;
        }

        .sb4:after {
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            border-left: 10px solid var(--color);
            border-right: 10px solid transparent;
            border-top: 10px solid var(--color);
            border-bottom: 10px solid transparent;
            bottom: 20px;
            right: -20px;
        }

</style>