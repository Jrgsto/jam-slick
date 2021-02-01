<script>
    import Nav from '../components/includes/Nav.svelte';
    import Footer from "../components/includes/Footer.svelte";
    import { onMount } from 'svelte';

    onMount(() => {
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                    });
                }
            });
        }
    });
</script>

<svelte:head>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>
<body>
<div id="navbar">
    <Nav/>
</div>
<div class="bg-white" id="content">
    <slot></slot>
</div>
<div id="footer" class="w-full h-full p-12 ">
    <Footer></Footer>
</div>
</body>
