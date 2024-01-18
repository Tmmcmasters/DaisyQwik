import { $, component$ } from '@builder.io/qwik';
import { Button } from '~/components/daisyqwik/button/button';
import { Code } from '~/components/daisyqwik/code/code';
import { TabList, TabPanel, Tab } from '~/components/daisyqwik/tab/tab';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';
// import lib


export default component$(() => {

  
  return (
    <>
      <H1 text="Button:" />
      <p>This is currently a work in progress...Check back soon! :)</p>

      <div class='w-11/12 max-w-[721px]'>

        <TabList groupName='tab1' size='md'>
          <Tab label="Preview"  checked/>
          <TabPanel>
            <div class="w-full flex justify-center">
              <Button
                onClick$={$(() => {
                  alert('clicked');
                })}
                color='neutral'
                type='button'
                variant='normal'
                // variant='outline'
                // size='md'
              >
                This is a button
              </Button>
            </div>
          </TabPanel>
          <Tab label="Code" />
          <TabPanel>
          <div class="w-full  flex justify-start">
<Code code={`<Button onClick$={$(() => { alert('clicked');})}
  color='neutral'
  type='button'
  variant='normal'
>
  This is a button
</Button>`
} lang="tsx" options={{showLineNumbers: true}} />
          </div>
          </TabPanel>
        </TabList>

      </div>
    </>
  );
});
