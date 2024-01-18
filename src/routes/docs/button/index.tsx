import { $, component$, useContext } from '@builder.io/qwik';
import { Button } from '~/components/daisyqwik/button/button';
import { Code } from '~/components/daisyqwik/code/code';
import { TabList, TabPanel, Tab } from '~/components/daisyqwik/tab/tab';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';
// import lib


export default component$(() => {
  
  return (
    <>
      <H1 text="Button:" />
      <p>This is currently a work in progress...Check back soon! :)</p>

      <div class='w-11/12 max-w-[721px]'>
        <TabList groupName='tab1' size='md'>
          <Tab label="Preview"  />
          <TabPanel>
            <div class="w-full flex justify-center">
              <Button
                onClick$={$(() => {
                  alert('clicked');
                })}
                color='neutral'
                type='button'
                variant='normal'
                // variant='outline'
                // size='md'
              >
                This is a button
              </Button>
            </div>
          </TabPanel>
          <Tab label="Code" />
          <TabPanel>
          <div class="w-full  ">
<Code code={`<Button onClick$={$(() => { alert('clicked');})}
  color='neutral'
  type='button'
  variant='normal'
>
  This is a button
</Button>`
} lang="tsx" options={{showLineNumbers: true}} />
          </div>
          </TabPanel>
          <Tab label='Component Code' checked/>
          <TabPanel maxHeight='[500px]'>
            <div class="w-full  flex justify-start ">
              <Code 
          code={`
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
              <button class={\`
              btn \${props.color == 'primary' ? 'btn-primary' : 
              props.color == 'secondary' ? 'btn-secondary' :
              props.color == 'accent' ? 'btn-accent' :
              props.color == 'neutral' ? 'btn-neutral' :
              props.color == 'info' ? 'btn-info' :
              'btn-primary'}
              \${props.active ? 'btn-active' : ''}
              \${props.variant == 'link' ? 'btn-link' :
              props.variant == 'ghost' ? 'btn-ghost' :
              props.variant == 'outline' ? 'btn-outline' :
              'btn-normal'}
              \${props.disabled ? 'btn-disabled' : ''}
              \${props.size == 'xs' ? 'btn-xs' :
              props.size == 'sm' ? 'btn-sm' :
              props.size == 'md' ? 'btn-md' :
              props.size == 'lg' ? 'btn-lg' :
              props.size == 'wide' ? 'btn-wide' :
              props.size == 'block' ? 'btn-block' :
              'btn-md'}
              \`} 
              type={props.type} 
              onClick$={props.onClick$}  
              disabled={props.disabled}>
                  <Slot />
              </button>
            );
          };
          `}
          lang="tsx"
          options={{showLineNumbers: true}}
          />
            </div>
          </TabPanel>
        </TabList>

      </div>
    </>
  );
});
