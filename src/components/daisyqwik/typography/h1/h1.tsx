import { Slot, component$ } from '@builder.io/qwik';



export const H1 = component$(() => {
  return (
    <h1 class="text-3xl font-bold text-base-content"><Slot /></h1>
  );
});
