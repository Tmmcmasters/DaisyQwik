import {  Slot, component$ } from '@builder.io/qwik';
import type { Component, PropFunction } from '@builder.io/qwik';


export interface ButtonProps {
  // text: string,
  onClick$?: PropFunction<() => void>,
  startContent?: Component,
  endContent?: Component, 
  disabled?: boolean,
  type?: 'submit' | 'reset' | 'button',
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info',
  variant?: 'link' | 'ghost' | 'outline' | 'normal',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'wide' | 'block',
  active?: boolean,
  
}

export const Button = component$<ButtonProps>((props) => {
  return (
    <button class={`
    btn ${props.color == 'primary' ? 'btn-primary' : 
    props.color == 'secondary' ? 'btn-secondary' :
    props.color == 'accent' ? 'btn-accent' :
    props.color == 'neutral' ? 'btn-neutral' :
    props.color == 'info' ? 'btn-info' :
    'btn-primary'}
    ${props.active ? 'btn-active' : ''}
    ${props.variant == 'link' ? 'btn-link' :
    props.variant == 'ghost' ? 'btn-ghost' :
    props.variant == 'outline' ? 'btn-outline' :
    'btn-normal'}
  }
    ${props.disabled ? 'btn-disabled' : ''}
    ${props.size == 'xs' ? 'btn-xs' :
    props.size == 'sm' ? 'btn-sm' :
    props.size == 'md' ? 'btn-md' :
    props.size == 'lg' ? 'btn-lg' :
    props.size == 'wide' ? 'btn-wide' :
    props.size == 'block' ? 'btn-block' :
    'btn-md'}
  }
    
    `} 
    type={props.type} 
    onClick$={props.onClick$}  
    disabled={props.disabled}>
        <Slot />
    </button>
  );
});
