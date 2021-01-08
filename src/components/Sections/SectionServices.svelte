<script>
    import ServiceCard from "../Cards/ServiceCard.svelte";
    import BorderdCard from "../Cards/BorderdCard.svelte";

    export const data = {
        content: ['Understanding', 'Ideating', 'Conceptualizing', 'Implementing', 'Finalizing'
        ],
        development: ['Fast and response websites with JAM Stack', 'Headless CMS for independent content creation', 'Serverless website that saves you costs and maintance'],
        analytics: ['Tracking & Analytics Set up', 'Website Audit & Analysis for Conversion Optimization', 'User Journey Analysis & Webflow Optimization']
    }


</script>
<style type="postcss">

    div > div {
        height:35vh;
        @apply mb-24;
    }

</style>

<div class="flex flex-col default-spacing">
    <div>
        <BorderdCard width="lg:w-full">
            <ServiceCard position="left" image="/uploads/service-content-design.svg" data="{data.content}">
                <slot>
                    <h4 class="text-primary-dark pt-0">Web Content & Design</h4>
                </slot>
            </ServiceCard>
        </BorderdCard>
    </div>
    <div class="h-full">
        <BorderdCard width="lg:w-full h-full">
            <ServiceCard position="right" image="/uploads/service-web-development.svg" data="{data.development}">
                <slot>
                    <h4 class="text-primary-dark pt-0">Web Development</h4>
                </slot>
            </ServiceCard>
        </BorderdCard>
    </div>
    <div >
        <BorderdCard width="lg:w-full">
            <ServiceCard position="left" image="/uploads/service-analytics.svg" data="{data.analytics}">
                <slot>
                    <h4 class="text-primary-dark pt-0">Web Optimization & Analytics</h4>
                </slot>
            </ServiceCard>
        </BorderdCard>
    </div>
</div>

