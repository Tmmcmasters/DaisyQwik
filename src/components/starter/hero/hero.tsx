import { component$ } from "@builder.io/qwik";
import ImgThunder from "../../../media/thunder.png?jsx";
import ImgDaisy from '~/media/daisyui.png?jsx';


export default component$(() => {
  return (
    <div class="bg-base flex flex-col justify-center align-middle items-center p-12 text-start">
      <div class="bg-base flex flex-row justify-start align-middle items-center">
        <h1 class=""><span class="font-bold text-[#FE9A03] bg-gradient-to-tr from-[#1AD0A5] from-30% to-[#FE9A03] to-50% text-transparent bg-clip-text">daisy</span><span class="text-[#1AD0A5] font-bold">UI </span><span class="text-base-content">Components</span></h1>
      </div>

      <div class="bg-base flex flex-row justify-center align-middle items-center mt-3">
        <h1 class=" text-base-content">for <span class="text-purple-300 font-bold ">q</span><span class="text-purple-400 font-bold ">w</span><span class="text-purple-500 font-bold ">i</span><span class="text-purple-600 font-bold ">k</span></h1>
      </div>

      <div class="bg-base flex flex-row justify-center align-middle items-center font-bold gap-3 mt-20 flex-wrap ">
        <a href="https://qwik.builder.io" target="_blank" text="Qwik Framework Website" class="border-2 border-transparent hover:border-base-content transition-all duration-200 ease-in-out  rounded-btn hover:shadow-xl hover:shadow-purple-700">
        <ImgThunder class="w-20 h-20 mix-blend-ov" alt="Qwik JavaScript Logo" />
        </a>
        <h1 class=" text-base-content drop-shadow-lg ">+</h1>
        <a href="https://daisyui.com/" target="_blank" text="Daisy UI Website" class="border-2 border-transparent hover:border-base-content transition-all duration-200 ease-in-out  rounded-btn hover:shadow-xl hover:shadow-green-700">
        <ImgDaisy class="w-20 h-20 drop-shadow-lg" alt="Daisy UI Logo" />
        </a>
        <h1 class=" text-base-content drop-shadow-lg">=</h1>
        <h1 class=" ml-4 drop-shadow-lg  bg-gradient-to-r from-purple-500   to-[#FE9A03]  text-transparent bg-clip-text ">AWESOME!</h1>
      </div>

      {/* <h3 class="mt-20  text-info-content font-semibold">Get Started!</h3> */}
      <div class="bg-base flex flex-row justify-around align-middle items-center mt-20 ">
        <a class="btn btn-lg btn-accent  text-xl btn-outline shadow-2xl shadow-purple-500 hover:shadow-xl hover:shadow-purple-300" href="/docs">Get Started!</a>
      </div>
    </div>

  );
});

