<script>
    import BorderedCard from 'components/Cards/BorderdCard.svelte';
    import ProcessCard from "../Cards/ProcessCard.svelte";


</script>
<div class="default-width flex items-center justify-between">
<div class="relative flex mb-32 lg:mb-44 w-1/2">
    <BorderedCard containerClass="bg-white">
        <div class="flex-col flex p-20">
            <div class="flex mb-12">
                <div class="w-full lg:w-2/3">
                    <h2 class="pt-0">I can help you to build a website...</h2>
                </div>
                <div class="hidden lg:flex flex-1"></div>
            </div>
            <div class="flex mb-24 lg:mb-0">
                <div class="flex-1 relative flex mb-12 lg:mr-12">
                    <img alt="shape-1" class="absolute -top-10 -left-5" width="20%" src="/uploads/shape1.svg"/>
                    <div class="text-2xl font-bold -mt-6">
                        1.
                    </div>
                    <div class="ml-2">
                        targets the needs of your customers and converts.
                    </div>
                </div>
                <div class="hidden lg:flex flex-1"></div>
            </div>
            <div class="flex mb-24 lg:mb-0">
                <div class="hidden lg:flex flex-1">
                </div>
                <div class="flex-1 relative flex mb-12 lg:ml-12">
                    <img alt="shape-2" class="absolute -top-10 -left-5" width="20%" src="/uploads/shape2.svg"/>
                    <div class="text-2xl font-bold -mt-6">
                        2.
                    </div>
                    <div class="ml-2">
                        targets the needs of your customers and converts.
                    </div>
                </div>
            </div>
            <div class="flex mb-24 lg:mb-0">
                <div class="flex-1 relative flex mb-12 lg:mr-12">
                    <img alt="shape-3" class="absolute -top-10 -left-5" width="20%" src="/uploads/shape3.svg"/>
                    <div class="text-2xl font-bold -mt-6">
                        3.
                    </div>
                    <div class="ml-2">
                        does not require you to have any technical knowledge.
                    </div>
                </div>
                <div class="hidden lg:flex flex-1"></div>
            </div>
            <div class="flex mb-24 lg:mb-0">
                <div class="hidden lg:flex flex-1">
                </div>
                <div class="flex-1 relative flex mb-12 lg:ml-12">
                    <img alt="shape-4" class="absolute -top-10 -left-5" width="20%" src="/uploads/shape4.svg"/>
                    <div class="text-2xl font-bold -mt-6">
                        4.
                    </div>
                    <div class="ml-2">
                        targets the needs of your customers and converts.
                    </div>
                </div>
            </div>
        </div>
        <img class="hidden md:block bottom-0 left-12 absolute" src="/uploads/triangle.svg"/>
        <img class="hidden md:block top-10 -right-16 absolute z-20" src="/uploads/circlesborder.svg"/>
    </BorderedCard>

</div>
    <ProcessCard contact="true">
        <div>Lets get to know each other!</div>
    </ProcessCard>

</div>