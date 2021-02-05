<script>
    import Button from "../Buttons/Button.svelte";
    import {showForm} from "../../stores";
    import {fade} from 'svelte/transition';

    let showSuccess = false;
    let isLoading = false;
    let showError = false;
    let errors = [];
    let form = {name: '', email: '', info: '', service: 1, link: ''};

    const validateForm = () => {

        if (form.name.length < 2) {
            errors.push('The name field is required (min. 2 characters).')
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (form.email.length < 2 || !re.test(String(form.email).toLowerCase())) {
            errors.push('Please provide a valid email address.')
        }
        if (form.info.length < 1) {
            errors.push('Please tell me briefly about your current business & challenges.')
        }
        if(errors.length < 1) {
            const serviceName = questions.filter(item => {
                return item.id === form.service
            })
            const submission = {...form,
                service: serviceName,
            }
            console.log("Submitting with", submission)
            return submission;
        }
        return false;

    }
    const sendForm = () => {
        isLoading = true;
        if (validateForm()) {
          // TODO -  Send form
                showSuccess = true;
                isLoading = false;
        } else {
            isLoading = false;
            showError = true;
            setTimeout(function () {
                showError = false;
                errors = [];
            }, 5000);
        }
    }
    const closeForm = (redirect = true) => {
        if (redirect) window.open("https://jam-slick.youcanbook.me", "_blank");
        $showForm = false;

    }
    let selected = 1;
    let questions = [
        {id: 1, text: `Web Content & Design`},
        {id: 2, text: `Web Development`},
        {id: 3, text: `Web Optimization & Analytics`},
        {id: 4, text: `Not sure yet`}
    ];

</script>
<style>
    .z-80 {
        z-index: 80;
    }

    .z-100 {
        z-index: 100;
    }
</style>
<div transition:fade class="fixed z-80 w-full flex justify-center items-center m-12">
    <form class="relative md:w-2/3 bg-white shadow-2xl rounded-lg p-12">
        {#if showError}
            <div transition:fade>
                {#each errors as error}
                    <div class="text-spice">{error}</div>
                {/each}
            </div>
        {/if}
        <div on:click={() => closeForm(false)} class="z-100 close cursor-pointer"></div>
        {#if showSuccess}
            <div transition:fade class="m-8 text-center">
                <div class="text-xl mb-8">Great stuff! Cant wait to get to know you :) Please choose a date for a
                    first
                    call that suits you.
                </div>
                <div>
                    <Button buttonClass="w-full md:w-auto" handleClick={closeForm}>Schedule a Call</Button>
                </div>
            </div>
        {:else}
            <div class="flex flex-wrap mb-6">
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="name">
                        Name<span class="text-spice font-bold">*</span>
                    </label>
                    <input bind:value={form.name}
                           class="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                           id="name" type="text">
                </div>
                <div class="w-full md:w-1/2 md:pl-4">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="email">
                        Email<span class="text-spice font-bold">*</span>
                    </label>
                    <input bind:value={form.email}
                           class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="email" type="email">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2">
                        Describe briefly your business & challenge<span class="text-spice font-bold">*</span>
                    </label>
                    <textarea
                            bind:value={form.info}
                            class=" no-resize appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none"
                            rows="3" id="situation"></textarea>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="px-3">
                    <label class="block uppercase tracking-wide text-xs font-bold mb-2">
                        What service are you interested in?<span class="text-spice font-bold">*</span>
                    </label>
                    <select bind:value={form.service} class="py-4 cursor-pointer bg-white border-none">
                        {#each questions as question}
                            <option value={question}>
                                {question.text}
                            </option>
                        {/each}
                    </select>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label for="musik" class="block uppercase tracking-wide text-xs font-bold mb-2">
                        Link to your website (if you have)
                    </label>
                    <input bind:value={form.link}
                           class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="musik" type="text" placeholder="www.your-website.de...">
                </div>
            </div>
            <div class="{showSuccess ? 'hidden' : 'flex justify-center w-full'}">
                <Button statusDisabled={showError} showArrow="true" buttonClass="w-full " handleClick={sendForm}>Send</Button>
            </div>
        {/if}
    </form>
</div>