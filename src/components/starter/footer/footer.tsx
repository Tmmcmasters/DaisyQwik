import { component$ } from "@builder.io/qwik";
// import { useServerTimeLoader } from "../../../routes/layout";

export default component$(() => {
  // const serverTime = useServerTimeLoader();

  return (
    <footer class="flex flex-row justify-center align-middle items-center p-4">
        <a href="https://github.com/Tmmcmasters/DaisyQwik" target="_blank" class="link">
          <span >Made with ♡ by all those who contributed</span>
        </a>
    </footer>
  );
});
