<script>
    import ServiceCard from "../Cards/ServiceCard.svelte";

    export const data = {
        content: ['Understanding', 'Ideating', 'Conceptualizing', 'Implementing', 'Finalizing'
        ],
        development: ['Fast and response websites with JAM Stack', 'Headless CMS for independent content creation', 'Serverless website that saves you costs and maintance'],
        analytics: ['Tracking & Analytics Set up', 'Website Audit & Analysis for Conversion Optimization', 'User Journey Analysis & Webflow Optimization']
    }


</script>
<style type="postcss">

    hr {
        border: none;
        border-top: 2px dotted #9c8e5e;
        @apply w-full h-2 my-8
    }

</style>

<div class="flex flex-col default-spacing">
    <ServiceCard position="left" image="/uploads/service-content-design.svg" data="{data.content}">
        <slot>
            <h4 class="text-primary-dark pb-2">Web Content & Design</h4>
        </slot>
    </ServiceCard>
    <hr/>
    <ServiceCard position="right" image="/uploads/service-web-development.svg" data="{data.development}">
        <slot>
            <h4 class="text-primary-dark pb-2">Web Development</h4>
        </slot>
    </ServiceCard>
    <hr/>
    <ServiceCard position="left" image="/uploads/service-analytics.svg" data="{data.analytics}">
        <slot>
            <h4 class="text-primary-dark pb-2">Web Optimization & Analytics</h4>
        </slot>
    </ServiceCard>
</div>