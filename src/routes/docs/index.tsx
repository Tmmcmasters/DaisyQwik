import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { H1 } from "~/components/daisyqwik/typography/h1/h1";
// import { Content } from "~/components/docs/content/content";
// import { Menu } from "~/components/docs/menu/menu";


export default component$(() => {
  return (
    <>
        <H1 >Getting Started</H1>
        <p>This is currently a work in progress...Check back soon! :)</p>
        <p>This is the root of the docs</p>
        <p class="text-warning text-2xl font-bold underline drop-shadow-lg">No To Self....Update Component Code for elements</p>
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
