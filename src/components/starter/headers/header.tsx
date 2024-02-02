import { component$ } from "@builder.io/qwik";
import { ThemeDropdown } from "~/components/daisyqwik/ThemeDropdown/ThemeDropdown";
import ImgGithub from '~/media/github-mark-white.png?jsx';
// import HeaderCss from './header.css';

export default component$(() => {
  return (
    <header class="navbar flex flex-row justify-between sticky top-0 backdrop-blur-lg    z-50 ">
      <a class="btn btn-ghost rounded-md text-3xl font-bold
      bg-gradient-to-r from-purple-500   to-[#FE9A03]  text-transparent bg-clip-text drop-shadow-lg" href="/">
        qwikdaisy
      </a>

      <div class='flex flex-row justify-around align-middle items-center '>
        <a class="btn btn-ghost text-lg rounded-md " href="/docs">
          Documentation
        </a>
        <div class="ml-5 mr-5 hidden sm:flex">
        <ThemeDropdown
          themes={
            [
              {
                key: 1,
                value: 'darkV2'
              },
              {
                key: 2,
                value: 'light'
              },
              {
                key: 3,
                value: 'dark'
              },
              {
                key: 4,
                value: 'cupcake'
              },
              {
                key: 5,
                value: 'bumblebee'
              },
              {
                key: 6,
                value: 'emerald'
              },
              {
                key: 7,
                value: 'corporate'
              },
              {
                key: 8,
                value: 'synthwave'
              },
              {
                key: 9,
                value: 'retro'
              },
              {
                key: 10,
                value: 'cyberpunk'
              },
              {
                key: 11,
                value: 'valentine'
              },
              {
                key: 12,
                value: 'halloween'
              },
              {
                key: 13,
                value: 'garden'
              },
              {
                key: 14,
                value: 'forest'
              },
              {
                key: 15,
                value: 'aqua'
              },
              {
                key: 16,
                value: 'lofi'
              },
              {
                key: 17,
                value: 'pastel'
              },
              {
                key: 18,
                value: 'fantasy'
              },
              {
                key: 19,
                value: 'wireframe'
              },
              {
                key: 20,
                value: 'black'
              },
              {
                key: 21,
                value: 'luxury'
              },
              {
                key: 22,
                value: 'dracula'
              },
              {
                key: 23,
                value: 'cmyk'
              },
              {
                key: 24,
                value: 'autumn'
              },
              {
                key: 25,
                value: 'business'
              },
              {
                key: 26,
                value: 'acid'
              },
              {
                key: 27,
                value: 'lemonade'
              },
              {
                key: 28,
                value: 'night'
              },
              {
                key: 29,
                value: 'coffee'
              },
              {
                key: 30,
                value: 'winter'
              },
              {
                key: 31,
                value: 'dim'
              },
              {
                key: 32,
                value: 'nord'
              },
              {
                key: 33,
                value: 'sunset'
              }
            ]
          }
        />
        </div>
        <a class="hidden sm:flex btn btn-circle btn-accent bg-black" href="https://github.com/Tmmcmasters/DaisyQwik" target="_blank" text="Github Link">
          <ImgGithub class="w-8 h-8" alt="Github Logo Link to DaisyQwik GitHub Page" />
        </a>
      </div>
    </header>
  );
});


