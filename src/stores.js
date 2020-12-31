import { writable } from 'svelte/store';

export let showForm = writable(false);

export let showDetail = writable(false);

export let modal = writable({});
