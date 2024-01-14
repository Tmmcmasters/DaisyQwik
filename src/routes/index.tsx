import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/starter/hero/hero";
import Infobox from "../components/starter/infobox/infobox";

export default component$(() => {
  return (
    <>
    <div >
      <Hero />
      </div>
</>
  );
});

export const head: DocumentHead = {
  title: "Qwik Daisy",
  meta: [
    {
      name: "description",
      content: "Qwik components for daisyUI",
    },
  ],
};
