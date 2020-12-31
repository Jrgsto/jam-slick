<script>
    import ButtonRound from 'components/Buttons/ButtonRound.svelte';

    let height = 100;
    let y;
    let showDropdown = false;

    function changeClass(y) {
        if (y > height) {
            return "bg-complementary shadow-lg"
        }
        return "bg-white";
    }

    const toggleDropdown = () => {
        showDropdown = !showDropdown;
    }


    $: headerClass = changeClass(y);
</script>
<svelte:window bind:scrollY={y}/>
<style>
    .header-fix {
        position: fixed;
        z-index: 80;
        width: 100%;
        top: 0;
        transition: all 500ms ease;
        @apply h-20 md:h-auto;
    }
    .dropdown:hover .dropdown-menu {
        display: block;
    }
</style>

<nav id="header" class='header-fix max-w-6xl {headerClass}'>
    <div class="md:w-2/3 px-12 py-6 w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2 max-w-screen-lg">
        <div class="pl-4 flex items-center">
            <a href ="/" class="cursor-pointer text-2xl lg:text-4xl">
                <div>Logo</div>
            </a>

        </div>
        <div class="block lg:hidden pr-4">
            <button id="nav-toggle" class="flex items-center p-1 text-black">
                <svg class="fill-black h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <ul class="hidden list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
                <div class="dropdown inline-block relative">
                    <a href="about" class="py-2 px-4 rounded inline-flex items-center">
                        About me
                    </a>
                </div>
            </li>
            <li class="mr-3">
                <a class="inline-block py-2 px-4" href="contact">Kontakt</a>
            </li>
            <li>
                <ButtonRound showArrow={true} color='bg-spice text-white' size="small">
                    <slot>Get in Touch!</slot>
                </ButtonRound>
            </li>
        </ul>

    </div>
</nav>


