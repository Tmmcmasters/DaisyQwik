import { PropFunction, Slot, component$, createContextId, useContext, useContextProvider, useSignal } from '@builder.io/qwik';
import { Button } from '../button/button';

export interface DropdownProps {
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error',
  placeholder: string,
  dropdownItems: {
    key: number,
    value: string,
    // onClick$?: PropFunction<() => void>
  }[],
  dropdownId: string,
}

export const DropdownIdContext = createContextId<{ dropdownId: string }>('dropdownId.name.context');

export const Dropdown = component$<DropdownProps>((props) => {
  useContextProvider(DropdownIdContext, { dropdownId: props.dropdownId });
  const dropdownId = (useContext(DropdownIdContext) as { dropdownId: string }).dropdownId;

  const value = useSignal<string | null>(null)
  const mouseLeft = useSignal(false)



  return (
    <>
      <div
      onMouseOut$={
        () => {
          mouseLeft.value = true
        }
      }
      
      onMouseEnter$={
        () => {
          mouseLeft.value = false
        }
      }
      >

      
      <details class="dropdown" 
        id={dropdownId}
        
        

        onFocusOut$={
          (event: FocusEvent, details: any) => {
            if (mouseLeft.value == true) {
              setTimeout(() => {
                
                details.open = false
              }, 100);
            }
          }
        }

        onFocusIn$={
          (event: FocusEvent, details: any) => {
            setTimeout(() => {
              details.open = true
            }, 100);
          }
        }

      >
        <Button tabIndex={0} variant="normal" color='primary'
          As='summary'
          
        >
          <>
            {
              value.value ? value.value : props.placeholder
            }
          </>
        </Button>
        <ul tabIndex={0} class={`dropdown-content z-[1] menu  shadow rounded-box w-52 text-sm  
          gap-1 font-semibold`} >
          <>
            {
              props.dropdownItems.map((item) => {
                return (
                  <li class={
                    ``
                  }
                    key={item.key}
                    onClick$={
                      () => {
                        value.value = item.value
                      }
                    }
                    onTouchEnd$={
                      () => {
                        value.value = item.value
                      }
                    }
                  >
                    <a
                    href={`javascript:;`}
                    >
                    {item.value}
                    <span>
                      
                    </span>
                    </a>
                  </li>
                )
              })
            }
          </>
        </ul>
      </details>
      </div>
      </>
  );
});


