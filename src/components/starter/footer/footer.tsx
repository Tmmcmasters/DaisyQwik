import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="flex flex-row justify-center align-middle items-center   mb-2">
        <a href="https://github.com/Tmmcmasters/DaisyQwik" target="_blank" class="link link-primary ">
          <span >Made with ♡ by all those who contributed</span>
        </a>
    </footer>
  );
});
