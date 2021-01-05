import { writable } from 'svelte/store';

export let showForm = writable(false);

export let showOverlay = writable(false);

export let modal = writable({});
