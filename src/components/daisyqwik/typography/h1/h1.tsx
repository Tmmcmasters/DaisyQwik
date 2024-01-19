import { component$ } from '@builder.io/qwik';

export interface H1Props {
  text: string,
}

export const H1 = component$<H1Props>((props) => {
  return (
    <h1 class="text-3xl font-bold text-base-content">{props.text}</h1>
  );
});
