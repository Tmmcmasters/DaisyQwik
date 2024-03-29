import {  component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Code } from '~/components/daisyqwik/code/code';
import { Tab, TabList, TabPanel } from '~/components/daisyqwik/tab/tab';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';

export default component$(() => {
  return (
    <>


      <div class="w-11/12 max-w-[721px] flex flex-col justify-start gap-8">

        <div class="flex flex-col justify-start items-start gap-2">
          <H1 >Helper Dropdown:</H1>
          <p class="text-error  font-bold">This is currently a <span class="underline underline-offset-2">work in progress</span>...Check back soon! :)</p>
          
        </div>

        <div >
          <div id='helper-dropdown' class="mb-2 font-bold" ><a class="opacity-50" href='#helper-dropdown' >#</a> Helper Dropdown</div>
          <TabList size='md' groupName='tab1'>
            <Tab label="Preview" checked />
            <TabPanel maxHeight='[500px]' >
              <div class="w-full flex  justify-center h-40">
                
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]' >
              <div class="w-full">
              <Code options={{ showLineNumbers: true }} lang={'tsx'} code={``} />
              </div>

            </TabPanel>
            <Tab label="Component" />
            <TabPanel>
              <div class="w-full flex justify-center ">
              </div>
            </TabPanel>
          </TabList>
        </div>
        
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "QwikDaisy Tables",
  meta: [
    {
      name: "description",
      content: "DaisyUI Table Component for Qwik",
    },
  ],
};
