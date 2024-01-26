import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/starter/hero/hero";
// import Infobox from "../components/starter/infobox/infobox";
import Header from "~/components/starter/headers/header";
import Footer from "~/components/starter/footer/footer";

export default component$(() => {
  return (
    <>
    {/* YOU NEED TO FIX THE BUTTON LINk... ADD AS='LINK' or type='link' */}
    <Header />
    <main class="h-screen">
    <div class="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-950  to-transparent to-60%">
      <Hero />
      </div>
    </main>
    <Footer />
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
