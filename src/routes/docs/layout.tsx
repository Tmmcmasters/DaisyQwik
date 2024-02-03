import { component$, Slot, useStyles$, useOnDocument, $ } from "@builder.io/qwik";
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


  useOnDocument("click", $((event) => {
    const targetElement = event.target instanceof Element ? event.target : null;
    const anchor = targetElement ? targetElement.closest('a[href^="#"]') : null;
    if (!anchor) return;

    event.preventDefault();
    const href = anchor.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href) as HTMLElement;
      // if (targetElement) {
      const headerElement = document.querySelector('#docs-header') as HTMLElement;
      const scrollPosition = targetElement.offsetTop - (headerElement.clientHeight - 0 || 0);

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      // }
    }
  }));


  return (
    <>
      <main class="h-fit  min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-950  to-transparent to-60% scroll-smooth">
        <div class="drawer lg:drawer-open ">
          <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content ">
            <Docsheader />
            <div class='flex flex-col justify-start align-middle items-start gap-3 pl-10 pt-5 h-fit'>
              <Slot />
            </div>
            <div class="pt-36 pb-10">
              <Footer />
            </div>
          </div>
          <div class="drawer-side lg:z-auto z-50 ">
            <div class="navbar lg:flex lg:justify-center md:hidden lg:items-center !sticky top-0 z-50 backdrop-blur-lg ">
            <a class="btn btn-ghost rounded-md text-3xl font-bold
      bg-gradient-to-r from-purple-500   to-[#FE9A03]  text-transparent bg-clip-text drop-shadow-lg" href="/">
              qwikdaisy
            </a>
        </div>
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <Menu />
          </div>
        </div>
      </main>
    </>
  );
});
