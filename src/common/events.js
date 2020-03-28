import { createEventDispatcher } from 'svelte';
const svelteDispatch = createEventDispatcher();

export const webComponentDispatch = (component, eventName, eventDetail) => {
  svelteDispatch(eventName, eventDetail);
  component.dispatchEvent &&
    component.dispatchEvent(
      new CustomEvent(eventName, { detail: eventDetail })
    );
};
