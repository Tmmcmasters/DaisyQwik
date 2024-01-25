import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Code } from '~/components/daisyqwik/code/code';
import { Select } from '~/components/daisyqwik/select/select';
import { Tab, TabList, TabPanel } from '~/components/daisyqwik/tab/tab';
import { Table, TableRow } from '~/components/daisyqwik/table/table';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';

export default component$(() => {
  return (
    <>


      <div class="w-11/12 max-w-[721px] flex flex-col justify-start gap-8">

        <div class="flex flex-col justify-start items-start gap-2">
          <H1 >Select:</H1>
          <p class="text-error  font-bold">This is currently a <span class="underline underline-offset-2">work in progress</span>...Check back soon! :)</p>
        </div>

        <div >
          <div id='select' class="mb-2 font-bold" ><a class="opacity-50" href='#select' >#</a> Select</div>
          <TabList size='md' groupName='tab1'>
            <Tab label="Preview" checked />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full flex justify-center  ">
                <Select placeholder='Pick one'
                options={[
                  { key: 1, value: 'Star Wars' },
                  { key: 2, value: 'Harry Potter' },
                  { key: 3, value: 'Lord of the Rings' },
                  { key: 4, value: 'Planet of the Apes' },
                  { key: 5, value: 'Star Trek' },
                ]}
                topAltLabel='Top Alt Label'
                topLabel='Pick your favorite fantasy movie'
                bottomAltSubtitle='Bottom Alt Subtitle'
                bottomSubtitle='Bottom Subtitle'
                type='normal'
                color='neutral'
                required
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
