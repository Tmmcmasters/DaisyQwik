import { component$ } from "@builder.io/qwik";
import ImgGithub from '~/media/github-mark-white.png?jsx';
export default component$(() => {
  return (
    <header class="navbar flex flex-row justify-between sticky top-0 backdrop-blur-lg    z-50 ">
      <a class="btn btn-ghost rounded-md text-3xl font-bold
      bg-gradient-to-r from-purple-500   to-[#FE9A03]  text-transparent bg-clip-text drop-shadow-lg" href="/">
        qwikdaisy
      </a>
      
      <div class='flex flex-row justify-center align-middle items-center gap-3'>
        <a class="btn btn-ghost text-lg rounded-md " href="/">
          Documentation
        </a>
        <a class="btn btn-circle btn-ghost mr-3" href="https://github.com/Tmmcmasters/DaisyQwik" target="_blank">
          <ImgGithub class="w-8 h-8" />
        </a>
      </div>
    </header>
  );
});
