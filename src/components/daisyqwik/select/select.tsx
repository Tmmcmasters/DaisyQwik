import { component$ } from '@builder.io/qwik';

export interface SelectProps {
  options: {
    key: number,
    value: string
  }[],
  placeholder?: string,
  topAltLabel?: string,
  topLabel?: string,
  bottomSubtitle?: string,
  bottomAltSubtitle?: string,
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl',
  required?: boolean,
  invalid?: boolean,
  disabled?: boolean,
  size?: 'xs' | 'sm' | 'md' | 'lg',
  type: 'normal' | 'bordered' | 'ghost',
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error'
}

export const Select = component$<SelectProps>((props) => {
  return (
    // <label class="form-control w-full max-w-xs">
    <div class={
      `
      w-full
      ${props.maxWidth ? `max-w-${props.maxWidth}` : 'max-w-md'} 
      `
    }>
      <div class="label">
        {
          props.topLabel ? <span class="label-text">
            {props.topLabel}
            {props.required ? <span class="text-error font-bold ml-1">*</span> : null}
          </span> : null
        }

        {
          props.topAltLabel ? <span class="label-text-alt">{props.topAltLabel}{props.required ? <span class="text-error font-bold ml-1">*</span> : null}</span> : null
        }
      </div>
      <select class={`
        select  w-full 
        font-semibold
        ${props.invalid ? '!select-error' : ''}
        ${props.disabled ? 'select-disabled' : ''}
        ${props.size == 'xs' ? 'select-xs' :
          props.size == 'sm' ? 'select-sm' :
            props.size == 'md' ? 'select-md' :
              props.size == 'lg' ? 'select-lg' :
                ''
        }
        ${props.type == 'normal' ? '' :
          props.type == 'bordered' ? 'select-bordered' :
            props.type == 'ghost' ? 'select-ghost' : ''
        }
        ${props.color == 'primary' ?
          props.type == 'normal' ? 'select-primary bg-primary bg-opacity-20 text-base-content  border-opacity-20' : 
            props.type == 'ghost' ? 'select-primary bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 focus:bg-opacity-20 focus:text-primary transition-all duration-200 border-opacity-0' :
          'select-primary' :
          props.color == 'secondary' ?
            props.type == 'normal' ? 'select-secondary bg-secondary  bg-opacity-20 text-base-content border-opacity-20' : 
              props.type == 'ghost' ? 'select-secondary bg-secondary bg-opacity-10 text-secondary hover:bg-opacity-20 focus:bg-opacity-20 focus:text-secondary transition-all duration-200 border-opacity-0' :
            'select-secondary' :
            props.color == 'accent' ?
              props.type == 'normal' ? 'select-accent bg-accent text-accent-content ' : 
                props.type == 'ghost' ? 'select-accent bg-accent bg-opacity-10 text-accent hover:bg-opacity-20 focus:bg-opacity-20 focus:text-accent transition-all duration-200' :
              'select-accent' :
              props.color == 'neutral' ?
                props.type == 'normal' ? 'select-neutral bg-neutral  bg-opacity-50 text-base-content border-opacity-50' :
                  props.type == 'ghost' ? 'select-neutral bg-neutral bg-opacity-10 text-base-content hover:bg-opacity-20 focus:bg-opacity-20 focus:text-base-content transition-all duration-200' :
                    'select-neutral' :
                props.color == 'info' ?
                  props.type == 'normal' ? 'bg-opacity-20 select-info bg-info text-base-content border-opacity-20' :
                    props.type == 'ghost' ? 'bg-opacity-10 select-info bg-info text-info border-opacity-0 hover:bg-opacity-20 focus:bg-opacity-20 focus:text-info transition-all duration-200' :
                      'select-info' :
                  props.color == 'success' ?
                    props.type == 'normal' ? ' bg-opacity-20 select-success bg-success text-base-content border-opacity-20' :
                      props.type == 'ghost' ? 'bg-opacity-10 select-success bg-success text-success border-opacity-0 hover:bg-opacity-20 focus:bg-opacity-20 focus:text-success transition-all duration-200' :
                        'select-success' :
                    props.color == 'warning' ?
                      props.type == 'normal' ? ' bg-opacity-20 select-warning bg-warning text-base-content border-opacity-20' :
                        props.type == 'ghost' ? 'bg-opacity-10 select-warning bg-warning text-warning border-opacity-0 hover:bg-opacity-20 focus:bg-opacity-20 focus:text-warning transition-all duration-200' :
                          'select-warning' :
                      props.color == 'error' ?
                        props.type == 'normal' ? ' bg-opacity-20 select-error bg-error text-base-content border-opacity-20' :
                          props.type == 'ghost' ? 'bg-opacity-10 select-error bg-error text-error border-opacity-0 hover:bg-opacity-20 focus:bg-opacity-20 focus:text-error transition-all duration-200' :
                            'select-error' :
                        ''
        }
      `}
        disabled={props.disabled}
      >
        {
          props.placeholder ? <option disabled selected value=""
            class={
              `
            font-semibold 
            bg-base-200 
            `
            }
          >
            {props.placeholder}</option> : null
        }
        {
          props.options.map((option) => {
            return <option key={option.key} value={option.value}
              class={
                `
              font-semibold
              bg-base-200 
              text-base-content
              `
              }
            >{option.value}</option>
          })
        }
      </select>
      <div class="label">
        {
          props.bottomSubtitle ? <span class="label-text">{props.bottomSubtitle}</span> : null
        }
        {
          props.bottomAltSubtitle ? <span class="label-text-alt">{props.bottomAltSubtitle}</span> : null
        }
      </div>
    </div>
  );
});
