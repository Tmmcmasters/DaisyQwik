import { $, Signal, component$, createContextId, useContextProvider, useOnDocument, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,

  RouterOutlet,
  ServiceWorkerRegister,
  server$,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import type { RequestHandler } from "@builder.io/qwik-city";

import "./global.css";

export const ThemeContext = createContextId<{ theme: Signal }>('theme.context');

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  const theme = useSignal('darkV2')
  const themeProvider =  useContextProvider(ThemeContext, { theme: theme });

  useOnDocument('DOMContentLoaded', $(() => {
    theme.value = localStorage.getItem('theme') || 'darkV2'
    console.log(theme.value)
  }))
  



  return (
    
    <QwikCityProvider  >
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" data-theme={theme.value } 
      >
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});


