<script>
    import Nav from '../components/includes/Nav.svelte';
    import Footer from "../components/includes/Footer.svelte";
</script>

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
