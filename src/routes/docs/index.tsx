import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Content } from "~/components/docs/content/content";
import { Menu } from "~/components/docs/menu/menu";


export default component$(() => {
  return (
    <>
    <div class="flex flex-col justify-start align-middle items-start  pl-10 pt-5 gap-3">
    {/* <div class="pl-10 pt-5"> */}
        <h1 class="text-3xl font-bold">
            Getting Started!
        </h1>
        <p>This is currently a work in progress...Check back soon! :)</p>
    {/* </div> */}
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
