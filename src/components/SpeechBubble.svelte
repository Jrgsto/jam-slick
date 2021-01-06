<script>
        export let box;
        export let color;
        const bgColor = '#FBECDB';
        switch(box) {
            case "sb1":
                color = '#D17428';
                break;
            case "sb2":
                color = '#F3B114';
                break;
            case "sb3":
                color = '#58511C';
                break;
            case "sb4":
                color = '#9C8E5E';
                break;
            default:
                color='var(--bgColor)';
        }
</script>

<div style="--color: {color}; --bgColor: {bgColor} " class="box1 shadow-lg {box} bg-primary-light z-30"><slot></slot></div>


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