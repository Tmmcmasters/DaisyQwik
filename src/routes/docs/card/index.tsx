import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';

export default component$(() => {
  return (
    <>
        <H1  >Card:</H1>
        <p>This is currently a work in progress...Check back soon! :)</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "QwikDaisy Cards",
  meta: [
    {
      name: "description",
      content: "DaisyUI Card Component for Qwik",
    },
  ],
};
