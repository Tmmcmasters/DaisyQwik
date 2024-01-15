

import { component$ } from '@builder.io/qwik';

export const Sidebar = component$(() => {
  return (
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <details open>
                <summary><a href='/docs'>Docs</a></summary>
                <ul>
                  <li ><a href='/docs' class="flex justify-between">Install<div class="badge badge-warning gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  In Progress
</div></a></li>
                  <li ><a href='/docs' class="flex justify-between">Use<div class="badge badge-warning gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  In Progress
</div></a></li>
                </ul>
              </details>
              </li>
            <li><a href="/docs">Components</a></li>
        </ul>
      )
});