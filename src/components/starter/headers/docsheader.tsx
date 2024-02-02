import { component$ } from "@builder.io/qwik";
import ImgGithub from '~/media/github-mark-white.png?jsx';
// import HeaderCss from './header.css';

export default component$(() => {
  return (
    <header id="docs-header" class="navbar flex flex-row justify-between sticky top-0 backdrop-blur-lg    z-50 ">
        <div class="flex flex-row justify-start align-middle items-center ">
        <label for="my-drawer-3" class="btn btn-ghost drawer-button  lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
      <a class="btn btn-ghost rounded-md text-3xl font-bold
      bg-gradient-to-r from-purple-500   to-[#FE9A03]  text-transparent bg-clip-text drop-shadow-lg lg:hidden" href="/">
        qwikdaisy
      </a>
      </div>
      <div class='flex flex-row justify-around align-middle items-center '>
        {/* <a class="btn btn-ghost text-lg rounded-md " href="/docs">
          Documentation
        </a> */}
        <a class=" sm:flex btn btn-circle btn-accent bg-black" href="https://github.com/Tmmcmasters/DaisyQwik" target="_blank" text="Github Link">
          <ImgGithub class="w-8 h-8  " alt="Github Logo Link to DaisyQwik GitHub Page" />
        </a>
      </div>
    </header>
  );
});


