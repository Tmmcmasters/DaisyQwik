import { $, component$ } from '@builder.io/qwik';
import { Button } from '~/components/daisyqwik/button/button';
import { Code } from '~/components/daisyqwik/code/code';
import { TabList, TabPanel, Tab } from '~/components/daisyqwik/tab/tab';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';
// import lib


export default component$(() => {

  return (
    <>
      <H1 text="Button:" />
      <p class="text-warning">This is currently a work in progress...Check back soon! :)</p>
      <p class="text-warning">Right and Left Keyboard to navigate :)</p>
      <div class='w-11/12 max-w-[721px] flex flex-col justify-start gap-8'>
        <div>
          <div id='button' class="mb-2 font-bold" ><a class="opacity-50" href='#button' >#</a> Button</div>
          <TabList groupName='tab1' size='md'>
            <Tab label="Preview" checked />
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
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
            <Tab label='Component Code' />
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
                  options={{ showLineNumbers: true }}
                />
              </div>
            </TabPanel>
          </TabList>
        </div>
        <div>

          <div id='button-colors' class="mb-2 font-bold" ><a class="opacity-50" href='#button-colors'>#</a> Button Colors</div>
          <TabList groupName='tab2' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='neutral' type='button' variant='normal'>
                  Neutral
                </Button>
                <Button color='accent' type='button' variant='normal'>
                  Accent
                </Button>
                <Button color='info' type='button' variant='normal'>
                  Info
                </Button>
                <Button color='primary' type='button' variant='normal'>
                  Primary
                </Button>
                <Button color='secondary' type='button' variant='normal'>
                  Secondary
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='neutral' type='button' variant='normal'>
  Neutral
</Button>
<Button color='accent'type='button'variant='normal'>
  Accent
</Button>
<Button color='info' type='button' variant='normal'>
  Info
</Button>
<Button color='primary' type='button' variant='normal'>
  Primary
</Button>
<Button color='secondary' type='button' variant='normal'>
  Secondary
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>

          </TabList>
        </div>
      </div>
    </>
  );
});
