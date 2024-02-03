import { component$, useContext, useSignal } from '@builder.io/qwik';
import { Dropdown, DropdownItem } from '../dropdown/dropdown';
import { ThemeContext } from '~/root';

export interface ThemeDropdownProps {
  themes: {key: number, value: string}[],
}

export const ThemeDropdown = component$<ThemeDropdownProps>((props) => {
  const themeContext = useContext(ThemeContext);
  

  return (
    <div>
    <Dropdown
    placeholder='Theme'
    dropdownPosition='bottom'
    color='neutral'
    variant='outline'
    width='w-40'
    removableValue
    onSelectionChange$={(item) => {
      console.log(item.item.value); 
      themeContext.theme.value = item.item.value
      localStorage.setItem('theme', item.item.value)
    }}
    
    >
      {
        props.themes.map((theme) => {
          return <DropdownItem
            key={theme.key}
            item={{
              key: theme.key,
              value: theme.value,
            }}
            variant='outline'
            color='neutral'
            itemSize='sm-full'
            >
              <div data-theme={theme.value} class="flex flex-row gap-1 bg-transparent">
              <div class="!h-full !w-2 !rounded-sm !bg-primary ">&nbsp;</div>
              <div class="!h-full !w-2 !rounded-sm !bg-secondary ">&nbsp;</div>
              <div class="!h-full !w-2 !rounded-sm !bg-accent ">&nbsp;</div>
              <div class="!h-full !w-2 !rounded-sm !bg-base-100 ">&nbsp;</div>
              <div class="!h-full !w-2 !rounded-sm !bg-base-content ">&nbsp;</div>
              <div class="!h-full !w-2 !rounded-sm !bg-accent ">&nbsp;</div>
              <div class="!h-full !w-2 !rounded-sm !bg-info ">&nbsp;</div>
              <div class="!h-full !w-2 !rounded-sm !bg-error ">&nbsp;</div>
              <div class="!h-full !w-2 !rounded-sm !bg-warning ">&nbsp;</div>
              </div>
              {theme.value}
            </DropdownItem>
        })
      }
    </Dropdown>
        </div>
  );
});
