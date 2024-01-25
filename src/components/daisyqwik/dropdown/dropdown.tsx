import { PropFunction, Slot, component$, useSignal } from '@builder.io/qwik';
import { Button } from '../button/button';

export interface DropdownProps {
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error',
  placeholder: string,
  dropdownItems: {
    key: number,
    value: string,
    // onClick$?: PropFunction<() => void>
  }[],
}

export const Dropdown = component$<DropdownProps>((props) => {
  const value = useSignal<string | null>(null)
  const open = useSignal(false)
  const mouseLeft = useSignal(false)



  return (
    <div
      onMouseLeave$={
        () => {
          mouseLeft.value = true
        }
      }

      onMouseEnter$={
        () => {
          mouseLeft.value = false
        }
      }

      onFocusOut$={
        () => {
          if (mouseLeft.value == true) {
            open.value = false
          }
        }
      }
    >
      <div class="dropdown" >
        <Button tabIndex={0} variant="normal" color='primary'
          As='div'
          onFocusIn$={
            () => {
              open.value = true
            }
          }
        >
          <>
            {
              value.value ? value.value : props.placeholder
            }
          </>
        </Button>
        <ul tabIndex={0} class={`dropdown-content z-[1] menu  shadow rounded-box w-52 text-sm   ${open.value == true ? '' : 'hidden'}`} >
          <>
            {
              props.dropdownItems.map((item) => {
                return (
                  <li class={
                    `
                  hover:bg-primary hover:text-base-100
                  p-2 rounded-box
                  `
                  }
                    key={item.key}
                    onClick$={
                      () => {
                        value.value = item.value
                      }
                    }

                  >
                    {item.value}
                  </li>
                )
              })
            }
          </>
        </ul>
      </div>
    </div>
  );
});


