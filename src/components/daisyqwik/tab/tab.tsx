import { Slot, component$, createContextId, useContext, useContextProvider } from '@builder.io/qwik';

export interface TabProps {
  label: string,
  checked?: boolean,
  // name: string
}

export const TabGroupContext = createContextId<{ groupName: string }>('tab.group.context');

export const Tab = component$<TabProps>((props) => {
const groupName = (useContext(TabGroupContext) as { groupName: string }).groupName;

  return (
    <input
    type='radio'
    name={groupName}
    role='tab'
    class='tab before:!hidden checked:!border-base-content !border-t-2  !border-r-2 !border-l-2 !border-b-0
    checked:!-bottom-[1px]
    text-xs md:text-sm
    '
    aria-label={props.label}
    checked={props.checked}
  />
  );
});

export const TabPanel = component$(() => {
  return (
    <div role='tabpanel' class='tab-content bg-base-100 border-base-content border-2 border-t-2 rounded-box p-6 w-full'><Slot /></div>
  )
})

export interface TabListProps {
  // type: 'lifted' | 'boxed' | 'bordered',
  size:  'sm' | 'md' | 'lg',
  groupName: string
}
export const TabList = component$<TabListProps>((props) => {
  useContextProvider(TabGroupContext, { groupName: props.groupName });
  return (
   <div role="tablist" class={`tabs tabs-lifted tabs-${props.size}`}>
     <Slot />
   </div>
  );
 });
