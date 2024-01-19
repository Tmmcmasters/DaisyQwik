

import { component$ } from '@builder.io/qwik';

export const Content = component$(() => {
  return <div class="flex flex-col justify-start align-middle items-start ">
    <div class="pl-12">
        <h1 class="text-3xl font-bold">
            Here is some sample text
        </h1>
    </div>
  </div>
});