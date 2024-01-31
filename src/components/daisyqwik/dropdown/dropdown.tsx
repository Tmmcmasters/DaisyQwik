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
  dropdownPosition?: 'top' | 'bottom' | 'left' | 'right' | 'end',
  dropdownId: string,
  // closeOnOutsideClick?: boolean,
  disabled?: boolean,
  forceOpen?: boolean,
  openOnHover?: boolean,
  maxWidthInPixels?: string,
  removableValue?: boolean,
  onSelectionChange$?: PropFunction<(arg0: any) => void>,
  variant?: 'ghost' | 'outline' | 'normal',
  width?: 'w-52' | 'w-56' | 'w-60' | 'w-64' | 'w-72' | 'w-80' | 'w-96' | 'w-1' | 'w-2' | ''
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

  // useTask$(async () => {
  //   if (props.closeOnOutsideClick) {
  //     onClickHandler.value = $((event: MouseEvent) => {
  //       const dropdownElement = document.getElementById(dropdownId)
  //       if (event.target == dropdownElement || dropdownElement?.contains(event.target as Node)) {
  //       } else {
  //         if (dropdownDetails.value != null) {
  //           dropdownDetails.value.open = false
  //         }
  //       }
  //     })
  //   }
  // });

  return (
    <>
      <div
        document:onClick$={onClickHandler.value}
        class={`flex justify-center items-center h-fit  w-fit
          
        `}
      >

        <div class={
          `dropdown 
          dropdown-${props.dropdownPosition ? props.dropdownPosition : 'bottom'}
          ${props.forceOpen ? 'dropdown-open' : ''}
          ${props.openOnHover ? 'dropdown-hover' : ''}

          `}
          id={dropdownId}

          onFocusIn$={
            (event: FocusEvent, details: any) => {
              focusedInDropdown.value = true

              dropdownDetails.value = details
            }
          }

        >
          <Button tabIndex={0} variant={props.variant ? props.variant : 'normal'} color={props.color}
            As='div' role='button' disabled={props.disabled}
            class={`focus:!outline-2 w focus:!outline-base-content ${props.width ? props.width : ''} justify-between`}
          >
            <>
              {
                value.value ? value.value : props.placeholder
              }
            </>
            {props.removableValue ?
              <Button  tabIndex={0} color='neutral' type='button' shape='circle' variant='ghost' size='xs'  role='button'
              onClick$={
                () => {
                  value.value = null
                  props.onSelectionChange$?.({
                    event: null,
                    item: null
                  })
                }
              }
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </Button> : null}
          </Button>
          <ul tabIndex={1} class={`dropdown-content  menu  shadow rounded-box min-w-fit !w-[max-content]
          ${props.maxWidthInPixels ? 'w-[' + props.maxWidthInPixels + 'px]': 'max-w-[250px]'}
           text-sm  
          gap-1 font-semibold
          
          `}
          >
            <>
              {
                props.dropdownItems.map((item) => {
                  return (
                    <li

                      class={
                        `
                      ${props.variant == "ghost" || props.variant == "outline" ?
                          props.color == 'primary' ? 'hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                            props.color == 'secondary' ? 'hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                              props.color == 'accent' ? 'hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                                props.color == 'neutral' ? 'hover:!bg-base-content' :
                                  props.color == 'info' ? 'hover:bg-info hover:bg-opacity-70 hover:text-base-200 text-info' :
                                    props.color == 'success' ? 'hover:bg-success hover:bg-opacity-70 hover:text-base-200 text-success' :
                                      props.color == 'warning' ? 'hover:bg-warning hover:bg-opacity-70 hover:text-base-200 text-warning' :
                                        props.color == 'error' ? 'hover:bg-error hover:bg-opacity-70 hover:text-base-200 text-error' :
                                          'hover:bg-neutral hover:bg-opacity-70 ' : props.color == 'primary' ? 'hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                            props.color == 'secondary' ? 'hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                              props.color == 'accent' ? 'hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                                props.color == 'neutral' ? 'hover:!bg-base-content hover:!bg-opacity-50' :
                                  props.color == 'info' ? 'hover:bg-info hover:bg-opacity-70 hover:text-base-200 text-info' :
                                    props.color == 'success' ? 'hover:bg-success hover:bg-opacity-70 hover:text-base-200 text-success' :
                                      props.color == 'warning' ? 'hover:bg-warning hover:bg-opacity-70 hover:text-base-200 text-warning' :
                                        props.color == 'error' ? 'hover:bg-error hover:bg-opacity-70 hover:text-base-200 text-error' :
                                          'hover:!bg-base-content hover:!bg-opacity-50 active:!bg-base-content active:!bg-opacity-50'
                        }
                      
                      
                      rounded-btn
                      
                      min-w-fit
                      w-auto
                    `
                      }
                      key={item.key}
                      onClick$={
                        (event: PointerEvent) => {
                          if (!props.disabled) {
                            value.value = item.value
                            props.onSelectionChange$?.({
                              event: event,
                              item: item
                            })
                          }
                        }
                      }

                      onTouchEnd$={
                        (event: TouchEvent) => {
                          if (!props.disabled) {
                            value.value = item.value
                            props.onSelectionChange$?.({
                              event: event,
                              item: item,
                            })
                          }
                        }
                      }
                    >

                      <Button variant={props.variant ? props.variant : 'normal'} color={props.color} size='sm' fitContent disabled={props.disabled}>
                        {item.value}

                      </Button>

                    </li>
                  )
                })
              }
            </>
          </ul>
        </div>
      </div>
    </>
  );
});


