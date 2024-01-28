import { $, component$, createContextId, useContext, useContextProvider, useSignal, useTask$, useId, PropFunction } from '@builder.io/qwik';
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
  closeOnOutsideClick?: boolean,
  maxWidthInPixels?: string,
  onSelectionChange$?: PropFunction<(arg0: any) => void>,
}

export const DropdownIdContext = createContextId<{ dropdownId: string }>('dropdownId.name.context');

export const Dropdown = component$<DropdownProps>((props) => {
  useContextProvider(DropdownIdContext, { dropdownId: props.dropdownId });
  const dropdownId = (useContext(DropdownIdContext) as { dropdownId: string }).dropdownId;

  const value = useSignal<string | null>(null)
  // const mouseLeft = useSignal(true)
  const dropdownDetails = useSignal<any>(null)
  const focusedInDropdown = useSignal(false)
  const onClickHandler = useSignal<any>(null)

  useTask$(async () => {
    if (props.closeOnOutsideClick) {
      onClickHandler.value = $((event: MouseEvent) => {
        const dropdownElement = document.getElementById(dropdownId)
        if (event.target == dropdownElement || dropdownElement?.contains(event.target as Node)) {
        } else {
          if (dropdownDetails.value != null) {
            dropdownDetails.value.open = false
          }
        }
      })
    }
  });

  return (
    <>
      <div
        document:onClick$={onClickHandler.value}
        class="flex justify-center items-center h-fit  w-fit"
      >

        <details class="dropdown  dropdown-bottom"
          id={dropdownId}

          onFocusIn$={
            (event: FocusEvent, details: any) => {
              focusedInDropdown.value = true

              dropdownDetails.value = details
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
          <ul tabIndex={0} class={`dropdown-content z-[1] menu  shadow rounded-box min-w-fit !w-[max-content]
          ${props.maxWidthInPixels ? props.maxWidthInPixels : 'max-w-[250px]'}
           text-sm  text-
          gap-1 font-semibold`}
              
          >
            <>
              {
                props.dropdownItems.map((item) => {
                  return (
                    <li class={
                      `
                      
                      min-w-fit
                      w-auto
                    `
                    }
                      key={item.key}
                      onClick$={
                        (event: PointerEvent) => {
                          value.value = item.value
                          props.onSelectionChange$?.({
                            event: event,
                            item: item
                          })
                        }
                      }
                      onTouchEnd$={
                        (event: TouchEvent) => {
                          value.value = item.value
                          props.onSelectionChange$?.({
                            event: event,
                            item: item,
                          })
                        }
                      }
                    >

                      <Button variant="outline" color='primary' tabIndex={1} size='fit-content' >
                        {item.value}
                      </Button>

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


