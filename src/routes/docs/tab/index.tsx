import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Tab, TabList, TabPanel } from '~/components/daisyqwik/tab/tab';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';

export default component$(() => {
  return (
    <>
      <H1 text="Tab:" />
      <p>This is currently a work in progress...Check back soon! :)</p>
      <br></br>
      

      <div class='w-11/12 max-w-[721px]'>

<TabList size="md" groupName='tab1'>
  <Tab label="Tab 1"  checked/>
  <TabPanel>
    <H1 text="Tab 1" />
  </TabPanel>
  <Tab label="Tab 2"  />
  <TabPanel>
    <H1 text="Tab 2" />
  </TabPanel>
</TabList>
<br></br>
<TabList groupName='tab2' size="sm">
  <Tab label="Big tab"  checked/>
  <TabPanel>
    <H1 text="Tab 1 of 2" />
  </TabPanel>
  <Tab label="Tab 2 of 2" />
  <TabPanel>
    <H1 text="Tab 2 of 2" />
  </TabPanel>
</TabList>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "QwikDaisy Tabs",
  meta: [
    {
      name: "description",
      content: "DaisyUI Tab Component for Qwik",
    },
  ],
};
