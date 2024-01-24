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
      // role='radio'
      class='!w-fit tab before:!hidden checked:!border-base-content !border-t-2  !border-r-2 !border-l-2 !border-b-0
    checked:!-bottom-[1px]
    text-xs md:text-sm
    '
      aria-label={props.label}
      checked={props.checked}
    />
  );
});

export interface TabPanelProps {
  maxHeight?: '[500px]' | 'none' | '[100px]' | '80',
  outline?: boolean
}

export const TabPanel = component$<TabPanelProps>((props: TabPanelProps) => {
  return (
    <div role='tabpanel' class={
      `tab-content bg-base-100 border-base-content border-2 border-t-2 rounded-box p-6 w-full 
      overflow-y-auto 
      `
    }>
      <div class={
        `
        bg-base-100
        ${props.outline ? 'outline outline-2 outline-base-content' : ''} 
        rounded-xl
        overflow-y-auto
        ${props.maxHeight == '[500px]' ? 'max-h-[500px]' : 
      props.maxHeight == '[100px]' ? 'max-h-[100px]' :
      props.maxHeight == '80' ? 'max-h-[80px]' : 'max-h-none'
    }
        `
      }>
      <Slot />
      </div>
    </div>
  )
})

export interface TabListProps {
  // type: 'lifted' | 'boxed' | 'bordered',
  size: 'sm' | 'md' | 'lg',
  groupName: string
}
export const TabList = component$<TabListProps>((props) => {
  useContextProvider(TabGroupContext, { groupName: props.groupName });
  return (
    <div  class={`tabs tabs-lifted tabs-${props.size}`}>
      <Slot />
    </div>
  );
});
