import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Sidebar } from "~/components/docs/sidebar/sidebar";


export default component$(() => {
  return (
    <>
    <div class="drawer lg:drawer-open lg:z-auto z-50 ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
        <label for="my-drawer-3" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a href="/docs">Sidebar Item 1</a></li>
            <li><a href="/docs">Sidebar Item 2</a></li>
        </ul>
        </div>
    </div>
</>
  );
});

export const head: DocumentHead = {
  title: "QwikDaisy Docs",
  meta: [
    {
      name: "description",
      content: "Qwik components for daisyUI documentation",
    },
  ],
};
