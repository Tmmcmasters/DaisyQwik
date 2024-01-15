import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

// import Header from "../components/starter/header/header";
// import Footer from "../components/starter/footer/footer";

import styles from "../styles.css?inline";
import Docsheader from "~/components/starter/headers/docsheader";
import Footer from "~/components/starter/footer/footer";
import { Menu } from "~/components/docs/menu/menu";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Docsheader />
      <main class="h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-950  to-transparent to-60%">
      <div class="drawer lg:drawer-open ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
        <Slot />
        </div>
        <div class="drawer-side lg:z-auto z-50 ">
          <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
          <Menu/>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
});
