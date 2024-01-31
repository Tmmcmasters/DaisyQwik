import {  component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Code } from '~/components/daisyqwik/code/code';
import { Dropdown } from '~/components/daisyqwik/dropdown/dropdown';
import { Tab, TabList, TabPanel } from '~/components/daisyqwik/tab/tab';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';

export default component$(() => {
  return (
    <>


      <div class="w-11/12 max-w-[721px] flex flex-col justify-start gap-8">

        <div class="flex flex-col justify-start items-start gap-2">
          <H1 >Dropdown:</H1>
          <p class="text-error  font-bold">This is currently a <span class="underline underline-offset-2">work in progress</span>...Check back soon! :)</p>
          <p class="text-warning">I need to fix focus issues where you can't tab all the way through the dropdown and also close on outside click</p>
        </div>

        <div >
          <div id='dropdown' class="mb-2 font-bold" ><a class="opacity-50" href='#dropdown' >#</a> Dropdown</div>
          <TabList size='md' groupName='tab1'>
            <Tab label="Preview" checked />
            <TabPanel maxHeight='[500px]' >
              <div class="w-full flex justify-center h-40">
                <Dropdown placeholder='Placeholder'
                dropdownItems={[
                  { key: 1, 
                    value: 'Option One',
                  },
                  { key: 2, value: 'Option Two' },
                ]}
                color='neutral'
                // closeOnOutsideClick
                dropdownId='dropdown1'
                // openOnHover
                removableValue
                width='w-52'
                // disabled
                variant='outline'
                onSelectionChange$={(event) => {console.log(event)}}
                />
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
