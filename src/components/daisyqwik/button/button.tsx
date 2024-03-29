import { Slot, component$ } from '@builder.io/qwik';
import type { ClassList, PropFunction } from '@builder.io/qwik';


export interface ButtonProps {
  onClick$?: PropFunction<(any: any) => void>,
  onFocusOut$?: PropFunction<(any: any) => void>,
  onFocusIn$?: PropFunction<(any: any) => void>,
  onTouchEnd$?: PropFunction<(any: any) => void>,
  disabled?: boolean,
  type?: 'submit' | 'reset' | 'button',
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error',
  variant?: 'link' | 'ghost' | 'outline' | 'normal',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'wide' | 'block' | 'responsive' | 'sm-full' | 'lg-full' | 'md-full' | 'xs-full',
  active?: boolean,
  shape?: 'circle' | 'square',
  loadingStart?: boolean,
  loadingEnd?: boolean,
  class?: ClassList,
  As?: 'Link' | "summary" | "div" | "",
  href?: string,
  tabIndex?: number,
  role?: "button" | string,
  fitContent?: boolean
}

export const Button = component$<ButtonProps>((props) => {

  if (props.As === 'Link' && !props.href) {
    throw new Error("href is required when As is set to 'Link'");
  }

  return (
    <>

      {
        props.As == 'summary' ? <summary
          tabIndex={props.tabIndex}
          class={`
    m-1
    btn ${props.color == 'primary' ? 'btn-primary' :
              props.color == 'secondary' ? 'btn-secondary' :
                props.color == 'accent' ? 'btn-accent' :
                  props.color == 'neutral' ? 'btn-neutral ' :
                    props.color == 'info' ? 'btn-info' :
                      props.color == 'success' ? 'btn-success' :
                        props.color == 'warning' ? 'btn-warning' :
                          props.color == 'error' ? 'btn-error' :
                            'btn-primary'}
    ${props.active ? 'btn-active' : ''}
    ${props.variant == 'link' ? 'btn-link' :
              props.variant == 'ghost' ?
                props.color == "primary" ? 'btn-ghost hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                  props.color == "secondary" ? 'btn-ghost hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                    props.color == "accent" ? 'btn-ghost hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                      props.color == "neutral" ? 'btn-ghost hover:bg-neutral hover:bg-opacity-70 ' :
                        props.color == "info" ? 'btn-ghost hover:bg-info hover:bg-opacity-70 hover:text-base-200 text-info' :
                          props.color == "success" ? 'btn-ghost hover:bg-success hover:bg-opacity-70 hover:text-base-200 text-success' :
                            props.color == "warning" ? 'btn-ghost hover:bg-warning hover:bg-opacity-70 hover:text-base-200 text-warning' :
                              props.color == "error" ? 'btn-ghost hover:bg-error hover:bg-opacity-70 hover:text-base-200 text-error' :
                                'btn-ghost hover:btn-primary hover:bg-opacity-70 text-primary hover:text-base-content'
                :
                props.variant == 'outline' ? 'btn-outline' :
                  'btn-normal'}
    ${props.shape == 'circle' ? 'btn-circle' :
              props.shape == 'square' ? 'btn-square' :
                ''}
    ${props.class}
    ${props.disabled ? 'btn-disabled' : ''}
    ${props.size == 'xs' ? 'btn-xs' :
              props.size == 'sm' ? 'btn-sm' :
                props.size == 'md' ? 'btn-md' :
                  props.size == 'lg' ? 'btn-lg' :
                    props.size == 'wide' ? 'btn-wide' :
                      props.size == 'block' ? 'btn-block' :
                        props.size == 'responsive' ? 'btn-xs sm:btn-sm md:btn-md lg:btn-lg' :
                          props.size == 'sm-full' ? 'btn-sm !w-[100%]' :
                            props.size == 'lg-full' ? 'btn-lg !w-[100%]' :
                              props.size == 'md-full' ? 'btn-md !w-[100%]' :
                                props.size == 'xs-full' ? 'btn-xs !w-[100%]' :
                            'btn-md'}
        ${props.fitContent ? 'h-fit' : ''}
    `}
          // type={props.type}
          onClick$={props.onClick$}
          onFocusOut$={props.onFocusOut$}
          onFocusIn$={props.onFocusIn$}
          onTouchEnd$={props.onTouchEnd$}
          aria-disabled={props.disabled}
          role='button'
        >
          {props.loadingStart == true ? <span class="loading loading-spinner"></span> : null}
          <Slot />
          {props.loadingEnd == true ? <span class="loading loading-spinner"></span> : null}
        </summary> : props.As == 'div' ? <div
          tabIndex={props.tabIndex}
          class={`
    m-1
    btn ${props.color == 'primary' ? 'btn-primary' :
              props.color == 'secondary' ? 'btn-secondary' :
                props.color == 'accent' ? 'btn-accent' :
                  props.color == 'neutral' ? 'btn-neutral ' :
                    props.color == 'info' ? 'btn-info' :
                      props.color == 'success' ? 'btn-success' :
                        props.color == 'warning' ? 'btn-warning' :
                          props.color == 'error' ? 'btn-error' :
                            'btn-primary'}
    ${props.active ? 'btn-active' : ''}
    ${props.variant == 'link' ? 'btn-link' :
              props.variant == 'ghost' ?
                props.color == "primary" ? 'btn-ghost hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                  props.color == "secondary" ? 'btn-ghost hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                    props.color == "accent" ? 'btn-ghost hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                      props.color == "neutral" ? 'btn-ghost hover:bg-neutral hover:bg-opacity-70 ' :
                        props.color == "info" ? 'btn-ghost hover:bg-info hover:bg-opacity-70 hover:text-base-200 text-info' :
                          props.color == "success" ? 'btn-ghost hover:bg-success hover:bg-opacity-70 hover:text-base-200 text-success' :
                            props.color == "warning" ? 'btn-ghost hover:bg-warning hover:bg-opacity-70 hover:text-base-200 text-warning' :
                              props.color == "error" ? 'btn-ghost hover:bg-error hover:bg-opacity-70 hover:text-base-200 text-error' :
                                'btn-ghost hover:btn-primary hover:bg-opacity-70 text-primary hover:text-base-content'
                :
                props.variant == 'outline' ? 'btn-outline' :
                  'btn-normal'}
    ${props.shape == 'circle' ? 'btn-circle' :
              props.shape == 'square' ? 'btn-square' :
                ''}
    ${props.class}
    ${props.disabled ? 'btn-disabled' : ''}
    ${props.size == 'xs' ? 'btn-xs' :
              props.size == 'sm' ? 'btn-sm' :
                props.size == 'md' ? 'btn-md' :
                  props.size == 'lg' ? 'btn-lg' :
                    props.size == 'wide' ? 'btn-wide' :
                      props.size == 'block' ? 'btn-block' :
                        props.size == 'responsive' ? 'btn-xs sm:btn-sm md:btn-md lg:btn-lg' :
                         props.size == 'sm-full' ? 'btn-sm !w-[100%]' :
                         props.size == 'lg-full' ? 'btn-lg !w-[100%]' :
                              props.size == 'md-full' ? 'btn-md !w-[100%]' :
                                props.size == 'xs-full' ? 'btn-xs !w-[100%]' :
                            'btn-md'}
        ${props.fitContent ? 'h-fit' : ''}
    `}
          // type={props.type}
          onClick$={props.onClick$}
          onFocusOut$={props.onFocusOut$}
          onFocusIn$={props.onFocusIn$}
          onTouchEnd$={props.onTouchEnd$}
          aria-disabled={props.disabled}
          role='button'
        >
          {props.loadingStart == true ? <span class="loading loading-spinner"></span> : null}
          <Slot />
          {props.loadingEnd == true ? <span class="loading loading-spinner"></span> : null}
        </div> :
          <button
            tabIndex={props.tabIndex}
            class={`
    
    btn ${props.color == 'primary' ? 'btn-primary' :
                props.color == 'secondary' ? 'btn-secondary' :
                  props.color == 'accent' ? 'btn-accent' :
                    props.color == 'neutral' ? 'btn-neutral' :
                      props.color == 'info' ? 'btn-info' :
                        props.color == 'success' ? 'btn-success' :
                          props.color == 'warning' ? 'btn-warning' :
                            props.color == 'error' ? 'btn-error' :
                              'btn-primary'}
    ${props.active ? 'btn-active' : ''}
    ${props.variant == 'link' ? 'btn-link' :
                props.variant == 'ghost' ?
                  props.color == "primary" ? 'btn-ghost hover:bg-primary hover:bg-opacity-70 text-primary hover:text-base-content' :
                    props.color == "secondary" ? 'btn-ghost hover:bg-secondary hover:bg-opacity-70 text-secondary hover:text-base-content' :
                      props.color == "accent" ? 'btn-ghost hover:bg-accent hover:bg-opacity-70 hover:text-base-200 text-accent' :
                        props.color == "neutral" ? 'btn-ghost hover:bg-neutral hover:bg-opacity-70 ' :
                          props.color == "info" ? 'btn-ghost hover:bg-info hover:bg-opacity-70 hover:text-base-200 text-info' :
                            props.color == "success" ? 'btn-ghost hover:bg-success hover:bg-opacity-70 hover:text-base-200 text-success' :
                              props.color == "warning" ? 'btn-ghost hover:bg-warning hover:bg-opacity-70 hover:text-base-200 text-warning' :
                                props.color == "error" ? 'btn-ghost hover:bg-error hover:bg-opacity-70 hover:text-base-200 text-error' :
                                  'btn-ghost hover:btn-primary hover:bg-opacity-70 text-primary hover:text-base-content'
                  :
                  props.variant == 'outline' ? 'btn-outline' :
                    'btn-normal'}
    ${props.shape == 'circle' ? 'btn-circle' :
                props.shape == 'square' ? 'btn-square' :
                  ''}
    ${props.class}
    ${props.disabled ? 'btn-disabled' : ''}
    ${props.As == 'Link' ? 'pr-0 pl-0' : ''}
    ${props.size == 'xs' ? 'btn-xs' :
                props.size == 'sm' ? 'btn-sm' :
                  props.size == 'md' ? 'btn-md' :
                    props.size == 'lg' ? 'btn-lg' :
                      props.size == 'wide' ? 'btn-wide' :
                        props.size == 'block' ? 'btn-block' :
                          props.size == 'responsive' ? 'btn-xs sm:btn-sm md:btn-md lg:btn-lg' :
                          props.size == 'sm-full' ? 'btn-sm !w-[100%]' :
                          props.size == 'lg-full' ? 'btn-lg !w-[100%]' :
                              props.size == 'md-full' ? 'btn-md !w-[100%]' :
                                props.size == 'xs-full' ? 'btn-xs !w-[100%]' :
                            'btn-md'}
                              ${props.fitContent ? 'h-fit' : ''}
    `}
            type={props.type}
            onClick$={props.onClick$}
            onFocusOut$={props.onFocusOut$}
            onFocusIn$={props.onFocusIn$}
            onTouchEnd$={props.onTouchEnd$}
            disabled={props.disabled}
          >
            {props.loadingStart == true ? <span class="loading loading-spinner"></span> : null}
            {props.As == 'Link' ? <a href={props.href} class="pr-6 pl-6 h-full text-center flex align-middle justify-center items-center"><Slot /></a> : <Slot />}
            {props.loadingEnd == true ? <span class="loading loading-spinner"></span> : null}
          </button>
      }
    </>
  );
});
