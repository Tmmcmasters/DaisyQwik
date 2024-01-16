import { Slot, component$ } from '@builder.io/qwik';

export interface TabProps {
  label: string,
  checked?: boolean,
  name: string
}

export const Tab = component$<TabProps>((props) => {
  return (
    <input
    type='radio'
    name={props.name}
    role='tab'
    class='tab before:!hidden checked:!border-neutral !border-t-2  !border-r-2 !border-l-2 !border-b-0
    checked:!-bottom-[1px] 
    '
    aria-label={props.label}
    checked={props.checked}
  />
  );
});

export const TabPanel = component$(() => {
  return (
    <div role='tabpanel' class='tab-content bg-base-100 border-neutral border-2 border-t-2 rounded-box p-6 w-96'><Slot /></div>
  )
})

export interface TabListProps {
  type: 'lifted' | 'boxed' | 'bordered',
  size: 'xs' | 'sm' | 'md' | 'lg'
}

export const TabList = component$<TabListProps>((props) => (
 <div role="tablist" class={`tabs tabs-${props.type} tabs-${props.size}`}>
   <Slot />
 </div>
));
