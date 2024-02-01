import { $, component$, createContextId, useContext, useContextProvider, useSignal, useTask$, useId, PropFunction, Slot, useStore, Signal } from '@builder.io/qwik';
import { Button } from '../button/button';


export interface DropdownProps {
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error',
  placeholder: string,
  
  dropdownPosition?: 'top' | 'bottom' | 'left' | 'right' | 'end',
  dropdownId?: string,
  // closeOnOutsideClick?: boolean,
  topLabel?: string,
  bottomLabel?: string,
  topAltLabel?: string,
  bottomAltLabel?: string,
  disabled?: boolean,
  forceOpen?: boolean,
  openOnHover?: boolean,
  invalid?: boolean,
  required?: boolean,
  invalidMessage?: string
  noChevron?: boolean,
  listWidth?: 'full' | 'fit',
  // maxWidthInPixels?: string,
  removableValue?: boolean,
  onSelectionChange$?: PropFunction<(arg0: any) => void>,
  variant?: 'ghost' | 'outline' | 'normal',
  width?: 'w-52' | 'w-56' | 'w-60' | 'w-64' | 'w-72' | 'w-80' | 'w-96' | 'w-1' | 'w-2' | ''
}

// export const DropdownIdContext = createContextId<{ dropdownId: string }>('dropdownId.name.context');
export const DropdownContext = createContextId<{ dropdownValue: Signal, onSelectionChange$?: PropFunction<(arg0: any) => void> }>('dropdown.context');

export const Dropdown = component$<DropdownProps>((props) => {
  const dropdownValue = useSignal<string | null>(null)
  useContextProvider(DropdownContext, { dropdownValue: dropdownValue, onSelectionChange$: props.onSelectionChange$ });
  // useContextProvider(DropdownIdContext, { dropdownId: props.dropdownId });
  // const dropdownId = (useContext(DropdownIdContext) as { dropdownId: string }).dropdownId;

  // const dropdownContext = useContext(DropdownContext)
  // const mouseLeft = useSignal(true)
  const dropdownDetails = useSignal<any>(null)
  const focusedInDropdown = useSignal(false)
  // const onClickHandler = useSignal<any>(null)

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
        // document:onClick$={onClickHandler.value}
        class={`flex flex-col justify-center items-center h-fit  w-fit
          
        `}
        aria-disabled={props.disabled}
      >
        <div class="flex flex-row justify-between items-center content-start w-full pr-2 pl-2">
          <label class={`label-text ${props.invalid ? 'text-error' : ''}`}>{props.topLabel}</label>
          <label class={`label-text-alt ${props.invalid ? 'text-error' : ''}`}>{props.topAltLabel}</label>
        </div>

        <div class={
          `dropdown 
          dropdown-${props.dropdownPosition ? props.dropdownPosition : 'bottom'}
          ${props.forceOpen ? 'dropdown-open' : ''}
          ${props.openOnHover ? 'dropdown-hover' : ''}

          `}
          id={props.dropdownId}

          onFocusIn$={
            (event: FocusEvent, details: any) => {
              focusedInDropdown.value = true

              dropdownDetails.value = details
            }
          }

        >
          <Button tabIndex={0} variant={props.variant ? props.variant : 'normal'} color={props.invalid ? 'error' : props.color}
            As='div' role='button' disabled={props.disabled}
            class={`
            focus:!outline-2 w focus:!outline-base-content 
            ${props.width ? props.width : 'w-72'} 
            justify-between
            
             `}
          >
            <>
            <p class={`${!dropdownValue.value ? 'opacity-70' : 'opacity-100'}`} >
              {
                dropdownValue.value ? dropdownValue.value : props.placeholder
              }
              {props.required ?
              <span class="text-error font-bold ml-1">*</span>
              : null
            }
            
              </p>
              
            </>
            <div class="flex flex-row gap-1">
            {props.removableValue && dropdownValue.value ?
              <Button  tabIndex={0} color='neutral' type='button' shape='circle' variant='ghost' size='xs'  role='button'
              onClick$={
                () => {
                  dropdownValue.value = null
                  props.onSelectionChange$?.({
                    event: null,
                    item: null
                  })
                }
              }
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </Button> : null}
              {
                !dropdownValue.value && !props.noChevron ?
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
              : null
              }
              </div>
          </Button>
          <ul tabIndex={1} class={`dropdown-content  menu  shadow-lg rounded-box  !w-[max-content]
          max-w-full
          !bg-base-100
          !z-[999]
           text-sm  
           ${props.listWidth == 'fit' ? 'min-w-fit' : 'min-w-full'}
          gap-1 font-semibold
          
          `}
          >
            {/* <>
              {
                props.dropdownItems.map((item) => {
                  return (
                    <li //https://qwik.dev/docs/components/state/#using-context "Allows me to use context to handle the state of the value"

                      class={
                        `
                      ${props.variant == "ghost" || props.variant == "outline" ?
                          props.color == 'primary' ? 'hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                            props.color == 'secondary' ? 'hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                              props.color == 'accent' ? 'hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                                props.color == 'neutral' ? 'hover:!bg-base-content hover:!bg-opacity-50 hover:!text-base-200' :
                                  props.color == 'info' ? 'hover:bg-info hover:bg-opacity-70 hover:text-base-200 text-info' :
                                    props.color == 'success' ? 'hover:bg-success hover:bg-opacity-70 hover:text-base-200 text-success' :
                                      props.color == 'warning' ? 'hover:bg-warning hover:bg-opacity-70 hover:text-base-200 text-warning' :
                                        props.color == 'error' ? 'hover:bg-error hover:bg-opacity-70 hover:text-base-200 text-error' :
                                          'hover:bg-neutral hover:bg-opacity-70 ' : props.color == 'primary' ? 'hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                            props.color == 'secondary' ? 'hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                              props.color == 'accent' ? 'hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                                props.color == 'neutral' ? 'hover:!bg-base-content hover:!bg-opacity-50 hover:!text-base-200' :
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
            </> */}
            <Slot />
          </ul>
        </div>
        <div class="flex flex-row justify-between items-center content-start w-full pr-2 pl-2">
          <label class={`label-text ${props.invalid ? 'text-error' : ''}`}>{props.invalid && props.invalidMessage ? props.invalidMessage : props.bottomLabel}</label>
          <label class={`label-text-alt ${props.invalid ? 'text-error' : ''}`}>{props.bottomAltLabel}</label>
        </div>
      </div>
    </>
  );
});

export interface DropdownItemProps {
  item: {
    key: number
    value: string
  },
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error',
  variant?: 'normal' | 'ghost' | 'outline',
  disabled?: boolean,
  active?: boolean,
  loadingStart?: boolean,
  loadingEnd?: boolean,
}


export const DropdownItem = component$<DropdownItemProps>((props) => {

  // useContextProvider(DropdownContext, { dropdownValue: null, onSelectionChange$: props.onSelectionChange$ });
  const dropdownContext = useContext(DropdownContext);
  


  return (

    <li //https://qwik.dev/docs/components/state/#using-context "Allows me to use context to handle the state of the value"

                      class={
                        `
                      ${props.variant == "ghost" || props.variant == "outline" ?
                          props.color == 'primary' ? 'hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                            props.color == 'secondary' ? 'hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                              props.color == 'accent' ? 'hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                                props.color == 'neutral' ? 'hover:!bg-base-content hover:!bg-opacity-50 hover:!text-base-200' :
                                  props.color == 'info' ? 'hover:bg-info hover:bg-opacity-70 hover:text-base-200 text-info' :
                                    props.color == 'success' ? 'hover:bg-success hover:bg-opacity-70 hover:text-base-200 text-success' :
                                      props.color == 'warning' ? 'hover:bg-warning hover:bg-opacity-70 hover:text-base-200 text-warning' :
                                        props.color == 'error' ? 'hover:bg-error hover:bg-opacity-70 hover:text-base-200 text-error' :
                                          'hover:bg-neutral hover:bg-opacity-70 ' : props.color == 'primary' ? 'hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                            props.color == 'secondary' ? 'hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                              props.color == 'accent' ? 'hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                                props.color == 'neutral' ? 'hover:!bg-base-content hover:!bg-opacity-50 hover:!text-base-200' :
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
                      key={props.item.key}
                      onClick$={
                        (event: PointerEvent) => {
                          if (!props.disabled) {
                            dropdownContext.dropdownValue.value = props.item.value
                            dropdownContext.onSelectionChange$?.({
                              event: event,
                              item: props.item,
                            })
                          }
                        }
                      }

                      onTouchEnd$={
                        (event: TouchEvent) => {
                          if (!props.disabled) {
                            dropdownContext.dropdownValue.value = props.item.value
                            dropdownContext.onSelectionChange$?.({
                              event: event,
                              item: props.item,
                            })
                          }
                        }
                      }
                    >

                      <Button variant={props.variant ? props.variant : 'normal'} color={props.color} size='sm'  fitContent disabled={props.disabled} active={props.active} loadingStart={props.loadingStart} loadingEnd={props.loadingEnd}>
                        
                        <Slot  />

                      </Button>

                    </li>
  )
});


