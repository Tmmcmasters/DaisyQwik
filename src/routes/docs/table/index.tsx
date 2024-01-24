import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Code } from '~/components/daisyqwik/code/code';
import { Tab, TabList, TabPanel } from '~/components/daisyqwik/tab/tab';
import { Table, TableRow } from '~/components/daisyqwik/table/table';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';

export default component$(() => {
  return (
    <>


      <div class="w-11/12 max-w-[721px] flex flex-col justify-start gap-8">

        <div class="flex flex-col justify-start items-start gap-2">
          <H1 text="Table:" />
          <p class="text-error  font-bold">This is currently a <span class="underline underline-offset-2">work in progress</span>...Check back soon! :)</p>
        </div>

        <div >
          <div id='table' class="mb-2 font-bold" ><a class="opacity-50" href='#table' >#</a> Table</div>
          <TabList size='md' groupName='tab1'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center max-h-96 ">
                <Table
                  columnsList={[{ key: 1, value: 'Column 1' }, { key: 2, value: 'Column 2' }, { key: 3, value: 'Column 3' }]}
                  pinColumns
                  footerLabels
                >
                  <TableRow
                    rowCells={[{ key: 1, value: 'Cell 1' }, { key: 2, value: 'Cell 2' }, { key: 3, value: 'Cell 3' }]}
                    hover
                  />
                  <TableRow
                    rowCells={[{ key: 1, value: 'Cell 1' }, { key: 2, value: 'Cell 2' }, { key: 3, value: 'Cell 3' }]}
                    hover
                  />
                  <TableRow
                    rowCells={[{ key: 1, value: 'Cell 1' }, { key: 2, value: 'Cell 2' }, { key: 3, value: 'Cell 3' }]}
                    hover
                  />
                  <TableRow
                    rowCells={[{ key: 1, value: 'Cell 1' }, { key: 2, value: 'Cell 2' }, { key: 3, value: 'Cell 3' }]}
                    hover
                  />
                  <TableRow
                    rowCells={[{ key: 1, value: 'Cell 1' }, { key: 2, value: 'Cell 2' }, { key: 3, value: 'Cell 3' }]}
                    hover
                  />
                  <TableRow
                    rowCells={[{ key: 1, value: 'Cell 1' }, { key: 2, value: 'Cell 2' }, { key: 3, value: 'Cell 3' }]}
                    hover
                  /><TableRow
                    rowCells={[{ key: 1, value: 'Cell 1' }, { key: 2, value: 'Cell 2' }, { key: 3, value: 'Cell 3' }]}
                    hover
                  />
                </Table>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]' >
              <div class="w-full  ">
              <Code options={{ showLineNumbers: true }} lang={'tsx'} code={`<Table
  columnsList={[{ key: 1, value'Column 1' }, { key: 2, value'Column 2' }, { key: 3, value'Column 3' }]}
  pinColumns
  footerLabels
>
  <TableRow
    rowCells={[{ key: 1, value: '1' }, { key: 2, value: 'Cell 2' { key: 3, value: 'Cell 3' }]}
    hover
  />
  <TableRow
    rowCells={[{ key: 1, value: '1' }, { key: 2, value: 'Cell 2' { key: 3, value: 'Cell 3' }]}
    hover
  />
  <TableRow
    rowCells={[{ key: 1, value: '1' }, { key: 2, value: 'Cell 2' { key: 3, value: 'Cell 3' }]}
    hover
  />
  <TableRow
    rowCells={[{ key: 1, value: '1' }, { key: 2, value: 'Cell 2' { key: 3, value: 'Cell 3' }]}
    hover
  />
  <TableRow
    rowCells={[{ key: 1, value: '1' }, { key: 2, value: 'Cell 2' { key: 3, value: 'Cell 3' }]}
    hover
  />
  <TableRow
    rowCells={[{ key: 1, value: '1' }, { key: 2, value: 'Cell 2' { key: 3, value: 'Cell 3' }]}
    hover
  /><TableRow
    rowCells={[{ key: 1, value: '1' }, { key: 2, value: 'Cell 2' { key: 3, value: 'Cell 3' }]}
    hover
  />
</Table>`} />
              </div>

            </TabPanel>
            <Tab label="Component Code" />
            <TabPanel>
              <div class="w-full flex justify-center">
                <Table columnsList={[{ key: 1, value: 'Column 1' }, { key: 2, value: 'Column 2' }, { key: 3, value: 'Column 3' }]} />
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
