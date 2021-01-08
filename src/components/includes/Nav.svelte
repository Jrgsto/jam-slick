<script>
    import Button from 'components/Buttons/Button.svelte';
    import { fade, fly } from 'svelte/transition';

    let height = 100;
    let y;
    let showDropdown = false;
    let showFixedNav = false;

    function changeClass(y) {
        if (y > height) {
            showFixedNav = true;
            return "shadow-lg"

        } else {
            showFixedNav = false;
            return "bg-tertiary";
        }

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
        top: 0;
        transition: all 500ms ease;
        @apply h-24 w-screen;
    }

    .background {
        background-image: url('/uploads/background-raster.png');
    }

    .background-blue {
        background-image: url('/uploads/background-raster-blue.png');
    }

    .dropdown:hover .dropdown-menu {
        display: flex;
    }
</style>

<nav id="header" class="header-fix p-auto {headerClass} {!showFixedNav ? 'background' : 'background-blue'}">
    <div class="flex flex-wrap justify-between items-center default-spacing w-4/5 h-24">
        <div class="pl-4 flex flex-col">
            <a href ="/" class="cursor-pointer text-2xl lg:text-3xl flex relative">
                <div>
                    <div class="text-2xl text-primary">JAM</div>
                    <div class="text-2xl text-spice font-bold">SLICK</div>
                </div>
                {#if showFixedNav }
                <div in:fly="{{ x: -100, duration: 500 }}" out:fade="{{	duration: 100}}" class="mb-auto">
                <svg width="40" height="60" preserveAspectRatio="xMinYMin meet" viewBox="0 0 55 100">
                    <use xlink:href="/uploads/brand-logo.svg#brand-vertical" />
                </svg>
                </div>
                    {/if}
            </a>
            {#if !showFixedNav}
            <svg class="-bottom-2 absolute" in:fly="{{ y: -100, duration: 500 }}" out:fade="{{	duration: 100}}" width="80" height="28" viewBox="0 0 88 37" preserveAspectRatio="xMinYMax meet">
                <use xlink:href="/uploads/brand-logo.svg#brand-horizontal" />
            </svg>
                {/if}
        </div>
        <div class="flex lg:hidden pr-4">
            <button id="nav-toggle" class="flex">
                <svg class="fill-black h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
            <ul class="hidden list-reset lg:flex justify-end flex-1 text-xl pt-2 {showFixedNav ? 'text-white' : 'text-black-light'}">
            <li class="mr-3">
                <div class="dropdown inline-block relative">
                    <a href="about" class="animated-link py-2 px-4 rounded inline-flex items-center">
                        About me
                    </a>
                </div>
            </li>
            <li class="mr-3">
                <a class="animated-link inline-block py-2 px-4 mr-4" href="contact">Projects</a>
            </li>
            <li class="mt-2">
                <Button showArrow={true} color='bg-spice text-white' size="small">
                    <slot>Get in Touch!</slot>
                </Button>
            </li>
        </ul>

    </div>
</nav>


