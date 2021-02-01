<script>
    import ProcessCard from "../../Cards/ProcessCard.svelte";
    import {fade} from 'svelte/transition';
    import BorderdCard from "../../Cards/BorderdCard.svelte";

    export let activeElement;
    export let data;

</script>
<style type="postcss">
</style>
<div>
    {#if activeElement === data[0].id}
        <div in:fade class="h-full flex flex-col">
            <div>
                <span class="font-bold text-xl block pb-2">“Any fool can know. The point is to understand.”</span>
                <span class="text-sm">- Albert Einstein</span>
            </div>
            <hr class="my-4"/>
            <div>
                <p class="py-2">Business are relationships between people. So let's jump on a call and get
                    to know
                    each other. Tell me about yourself, so will I.</p>
                <p class="py-2">I would also like to understand your business, your customers and your
                    current
                    challenges.</p>
                <p class="py-2">
                    Let's elaborate together if we feel the "vibe" and whether I can help you in your
                    current situation or not. You can be assured that I will tell you if not. No
                    sales-bullshit, full honesty!
                </p>
                <a href="contact"
                   class="text-complementary-dark relative cursor-pointer animated-link font-bold hover:font-bold pb-1">Let's
                    schedule a call >>> </a>
            </div>
        </div>
    {/if}
    {#if activeElement === data[1].id}
        <div in:fade class="h-full">
            <div>
                <span class="font-bold text-xl block pb-2">“If you fail to plan, you are planning to fail!”</span>
                <span class="text-sm">- Benjamin Franklin</span>
            </div>
            <hr class="my-4"/>
            <div class="mt-4">
                <p class="py-2">Great! After clarifying all open questions we both should have a pretty good
                    understanding of how we can benefit from each other and agreed to work together.</p>
                <p class="py-2">Let's have a kick-off and plan: Goals, scope, requirements and how we want
                    to work and communicate together in our common venture.</p>
                <p class="py-2">
                    Let's get that party started!
                </p>
            </div>
        </div>
    {/if}
    {#if activeElement === data[2].id}
        <div in:fade class="h-full">
            <div>
                <span class="font-bold text-xl block pb-2">“Transparency increases credibility and accountability.”</span>
                <span class="text-sm">- Park Won-soon</span>
            </div>
            <hr class="my-4"/>
            <div class="mt-4">
                <p class="py-2">We are good to go! I will start working on the project assignment and as a first step
                    will map out a more detailed plan that I will share with you.</p>
                <p class="py-2">You can expect transparency and constantly feedback loops so that we are both on the
                    same page and are happy with the results that have been delivered. Or if not, we can iterated
                    accordingly.</p>
            </div>
        </div>
    {/if}
</div>