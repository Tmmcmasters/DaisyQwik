import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Sidebar } from "~/components/docs/menu/menu";


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
            <Sidebar />
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
