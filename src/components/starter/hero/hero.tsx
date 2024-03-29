import { component$ } from "@builder.io/qwik";
import ImgThunder from "../../../media/thunder.png?jsx";
import ImgDaisy from '~/media/daisyui.png?jsx';
import { Button } from "~/components/daisyqwik/button/button";


export default component$(() => {
  return (
    <div class="bg-base flex flex-col justify-center align-middle items-center p-12 text-start gap-4">
      <div class="bg-base flex flex-row justify-start align-middle items-center">
        <h1><span class="text-purple-300 font-bold drop-shadow-lg">q</span><span class="text-purple-400 font-bold drop-shadow-lg">w</span><span class="text-purple-500 font-bold drop-shadow-lg">i</span><span class="text-purple-600 font-bold drop-shadow-lg">k</span><span class="text-base-content font-semibold drop-shadow-lg"> components</span></h1>
       
      </div>
      <div class="bg-base flex flex-row justify-center align-middle items-center">
        <h1 class=" text-base-content drop-shadow-lg">based on <span class="font-bold text-[#FE9A03] bg-gradient-to-tr from-[#1AD0A5] from-30% to-[#FE9A03] to-50% text-transparent bg-clip-text drop-shadow-lg">daisy</span><span class="text-[#1AD0A5] font-bold drop-shadow-lg">UI </span>
        </h1>
      </div>
      

      

      <div class="bg-base flex flex-row justify-center align-middle items-center font-bold gap-3 mt-20 flex-wrap ">
        <a href="https://qwik.builder.io" target="_blank" text="Qwik Framework Website" class="border-2 border-neutral-500 hover:border-base-content transition-all duration-200 ease-in-out  rounded-btn hover:shadow-xl hover:shadow-purple-700">
        <ImgThunder class="w-20 h-20 drop-shadow-lg" alt="Qwik JavaScript Logo" />
        </a>
        <h1 class=" text-base-content drop-shadow-lg ">+</h1>
        <a href="https://daisyui.com/" target="_blank" text="Daisy UI Website" class="border-2 border-neutral-500 hover:border-base-content transition-all duration-200 ease-in-out  rounded-btn hover:shadow-xl hover:shadow-green-700">
        <ImgDaisy class="w-20 h-20 drop-shadow-lg" alt="Daisy UI Logo" />
        </a>
        <h1 class=" text-base-content drop-shadow-lg">=</h1>
        <h1 class=" ml-4 drop-shadow-lg  bg-gradient-to-r from-purple-500   to-[#FE9A03]  text-transparent bg-clip-text ">AWESOME!</h1>
      </div>

      {/* <h3 class="mt-20  text-info-content font-semibold">Get Started!</h3> */}
      <div class="bg-base flex flex-row justify-around align-middle items-center mt-20 ">
        <Button size="lg" variant="outline" color="accent"  class="animate-bounce shadow-2xl shadow-purple-500 hover:shadow-xl hover:shadow-purple-300" As="Link" href="/docs">
          Get Started
        </Button>
      </div>
    </div>

  );
});

