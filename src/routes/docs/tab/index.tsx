import { Slot, component$ } from '@builder.io/qwik';
import { Tab, TabList, TabPanel } from '~/components/daisyqwik/tab/tab';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';

export default component$(() => {
  return (
    <>
      <H1 text="Tab:" />
      <p>This is currently a work in progress...Check back soon! :)</p>
      <br></br>
      

    

<TabList type='lifted' size="md">
  <Tab label="Tab 1" name='tab1' checked/>
  <TabPanel>
    <H1 text="Tab 1" />
  </TabPanel>
  <Tab label="Tab 2"  name='tab1'/>
  <TabPanel>
    <H1 text="Tab 2" />
  </TabPanel>
</TabList>
<br></br>
<TabList type='lifted' size="md">
  <Tab label="Tab 1" name='tab2' checked/>
  <TabPanel>
    <H1 text="Tab 1" />
  </TabPanel>
  <Tab label="Tab 2" name='tab2'/>
  <TabPanel>
    <H1 text="Tab 2" />
  </TabPanel>
</TabList>
    </>
  );
});
