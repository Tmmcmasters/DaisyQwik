import { component$ } from "@builder.io/qwik";
import ImgGithub from '~/media/github-mark-white.png?jsx';
import HeaderCss from './header.css';

export default component$(() => {
  return (
    <header class="navbar flex flex-row justify-between sticky top-0 backdrop-blur-lg    z-50 ">
      <a class="btn btn-ghost rounded-md text-3xl font-bold
      bg-gradient-to-r from-purple-500   to-[#FE9A03]  text-transparent bg-clip-text drop-shadow-lg" href="/">
        qwikdaisy
      </a>
      
      <div class='flex flex-row justify-around align-middle items-center '>
        <a class="btn btn-ghost text-lg rounded-md " href="/">
          Documentation
        </a>
        <a class="hidden sm:block btn btn-circle btn-ghost " href="https://github.com/Tmmcmasters/DaisyQwik" target="_blank">
          <ImgGithub class="w-8 h-8" />
        </a>
      </div>
    </header>
  );
});


