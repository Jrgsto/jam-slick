<script>
        export let box;
        export let color;
        export let hoverEffect = false;
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
                margin: 50px auto;
                border: 2px solid var(--color);
                padding: 20px;
                text-align: center;
                font-weight: 900;
                color: var(--color);
                position: relative;
        }

        /* speech bubble 5 */

        .sb1:before {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 10px solid var(--color);
                border-right: 10px solid transparent;
                border-top: 10px solid var(--color);
                border-bottom: 10px solid transparent;
                right: -21px;
                top: 6px;
        }


        .sb1:after {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 7px solid var(--bgColor);
                border-right: 7px solid transparent;
                border-top: 7px solid var(--bgColor);
                border-bottom: 7px solid transparent;
                right: -13px;
                top: 10px;
        }


        /* speech bubble 6 */

        .sb2:before {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 10px solid transparent;
                border-right: 10px solid var(--color);
                border-top: 10px solid var(--color);
                border-bottom: 10px solid transparent;
                left: -22px;
                top: 8px;
        }

        .sb2:after {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 7px solid transparent;
                border-right: 7px solid var(--bgColor);
                border-top: 7px solid var(--bgColor);
                border-bottom: 7px solid transparent;
                left: -14px;
                top: 12px;
        }


        /* speech bubble 7 */

        .sb3:before {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 10px solid var(--color);
                border-right: 10px solid transparent;
                border-top: 10px solid var(--color);
                border-bottom: 10px solid transparent;
                left: 22px;
                bottom: -20px;
        }

        .sb3:after {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 7px solid var(--bgColor);
                border-right: 7px solid transparent;
                border-top: 7px solid var(--bgColor);
                border-bottom: 7px solid transparent;
                left: 24px;
                bottom: -13px;
        }


        /* speech bubble 8 */

        .sb4:before {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 10px solid transparent;
                border-right: 10px solid ;
                border-top: 10px solid var(--color);
                border-bottom: 10px solid transparent;
                right: 21px;
                bottom: -22px;

        }

        .sb4:after {
                content: "";
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 10px solid transparent;
                border-right: 10px solid #FBECDB;
                border-top: 10px solid #FBECDB;
                border-bottom: 10px solid transparent;
                right: 23px;
                bottom: -13px;
        }
</style>