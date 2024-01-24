import { $, component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/daisyqwik/button/button';
import { Code } from '~/components/daisyqwik/code/code';
import { TabList, TabPanel, Tab } from '~/components/daisyqwik/tab/tab';
import { H1 } from '~/components/daisyqwik/typography/h1/h1';
// import lib


export default component$(() => {

  return (
    <>
      <H1 text="Button:" />
      <p class="text-warning font-bold underline underline-offset-8">Right and Left Keyboard to navigate :)</p>
      <p class="text-error  font-bold">This is currently a <span class="underline underline-offset-2">work in progress</span>...Check back soon! :)</p>
      <br></br>
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
            <Tab label='Component' />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  flex justify-start ">
                <Code
                  code={`import { Slot, component$ } from '@builder.io/qwik';
import type { ClassList, Component, PropFunction } from '@builder.io/qwik';
                  
                  export interface ButtonProps {
                    onClick$?: PropFunction<() => void>,
                    disabled?: boolean,
                    type?: 'submit' | 'reset' | 'button',
                    color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error',
                    variant?: 'link' | 'ghost' | 'outline' | 'normal',
                    size?: 'xs' | 'sm' | 'md' | 'lg' | 'wide' | 'block' | 'responsive',
                    active?: boolean,
                    shape?: 'circle' | 'square',
                    loadingStart?: boolean,
                    loadingEnd?: boolean,
                    class?: ClassList,
                    As?: 'Link' | "",
                    href?: string
                  }
                  
                  export const Button = component$<ButtonProps>((props) => {
                  
                    if (props.As === 'Link' && !props.href) {
                      throw new Error("href is required when As is set to 'Link'");
                    }
                  
                    return (
                      <button class={\`
                      btn \${props.color == 'primary' ? 'btn-primary' :
                          props.color == 'secondary' ? 'btn-secondary' :
                            props.color == 'accent' ? 'btn-accent' :
                              props.color == 'neutral' ? 'btn-neutral' :
                                props.color == 'info' ? 'btn-info' :
                                  props.color == 'success' ? 'btn-success' :
                                    props.color == 'warning' ? 'btn-warning' :
                                      props.color == 'error' ? 'btn-error' :
                                        'btn-primary'}
                      \${props.active ? 'btn-active' : ''}
                      \${props.variant == 'link' ? 'btn-link' :
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
                      \${props.shape == 'circle' ? 'btn-circle' :
                          props.shape == 'square' ? 'btn-square' :
                            ''}
                      \${props.class}
                      \${props.disabled ? 'btn-disabled' : ''}
                      \${props.As == 'Link' ? 'pr-0 pl-0' : ''}
                      \${props.size == 'xs' ? 'btn-xs' :
                          props.size == 'sm' ? 'btn-sm' :
                            props.size == 'md' ? 'btn-md' :
                              props.size == 'lg' ? 'btn-lg' :
                                props.size == 'wide' ? 'btn-wide' :
                                  props.size == 'block' ? 'btn-block' :
                                    props.size == 'responsive' ? 'btn-xs sm:btn-sm md:btn-md lg:btn-lg' :
                                      'btn-md'}
                      \`}
                        type={props.type}
                        onClick$={props.onClick$}
                        disabled={props.disabled}
                      >
                        {props.loadingStart == true ? <span class="loading loading-spinner"></span> : null}
                        {props.As == 'Link' ? <a href={props.href} class="pr-6 pl-6 h-full text-center flex align-middle justify-center items-center"><Slot /></a> : <Slot />}
                        {props.loadingEnd == true ? <span class="loading loading-spinner"></span> : null}
                      </button>
                    );
                  });
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
                <Button color='warning' type='button' variant='normal'>
                  Warning
                </Button>
                <Button color='error' type='button' variant='normal'>
                  Error
                </Button>
                <Button color='success' type='button' variant='normal'>
                  Success
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='neutral' type='button' variant='normal'>
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
<Button color='warning' type='button' variant='normal'>
  Warning
</Button>
<Button color='error' type='button' variant='normal'>
  Error
</Button>
<Button color='success' type='button' variant='normal'>
  Success
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>

        <div>
          <div id='button-outline' class="mb-2 font-bold" ><a class="opacity-50" href='#button-outline'>#</a> Outline Buttons</div>
          <TabList groupName='tab3' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='neutral' type='button' variant='outline'>
                  Neutral
                </Button>
                <Button color='accent' type='button' variant='outline'>
                  Accent
                </Button>
                <Button color='info' type='button' variant='outline'>
                  Info
                </Button>
                <Button color='primary' type='button' variant='outline'>
                  Primary
                </Button>
                <Button color='secondary' type='button' variant='outline'>
                  Secondary
                </Button>
                <Button color='warning' type='button' variant='outline'>
                  Warning
                </Button>
                <Button color='error' type='button' variant='outline'>
                  Error
                </Button>
                <Button color='success' type='button' variant='outline'>
                  Success
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='neutral' type='button' variant='outline'>
  Neutral
</Button>
<Button color='accent' type='button' variant='outline'>
  Accent
</Button>
<Button color='info' type='button' variant='outline'>
  Info
</Button>
<Button color='primary' type='button' variant='outline'>
  Primary
</Button>
<Button color='secondary' type='button' variant='outline'>
  Secondary
</Button>
<Button color='warning' type='button' variant='outline'>
  Warning
</Button>
<Button color='error' type='button' variant='outline'>
  Error
</Button>
<Button color='success' type='button' variant='outline'>
  Success
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>

        <div class="flex flex-col gap-2">
          <div id='button-ghost' class="mb-2 font-bold" ><a class="opacity-50" href='#button-ghost'>#</a> Ghost Buttons</div>
          {/* <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium "></p>
          </div> */}
          <TabList groupName='tab4' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='neutral' type='button' variant='ghost'>
                  Neutral
                </Button>
                <Button color='accent' type='button' variant='ghost'>
                  Accent
                </Button>
                <Button color='info' type='button' variant='ghost'>
                  Info
                </Button>
                <Button color='primary' type='button' variant='ghost'>
                  Primary
                </Button>
                <Button color='secondary' type='button' variant='ghost'>
                  Secondary
                </Button>
                <Button color='warning' type='button' variant='ghost'>
                  Warning
                </Button>
                <Button color='error' type='button' variant='ghost'>
                  Error
                </Button>
                <Button color='success' type='button' variant='ghost'>
                  Success
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='neutral' type='button' variant='ghost'>
  Neutral
</Button>
<Button color='accent' type='button' variant='ghost'>
  Accent
</Button>
<Button color='info' type='button' variant='ghost'>
  Info
</Button>
<Button color='primary' type='button' variant='ghost'>
  Primary
</Button>
<Button color='secondary' type='button' variant='ghost'>
  Secondary
</Button>
<Button color='warning' type='button' variant='ghost'>
  Warning
</Button>
<Button color='error' type='button' variant='ghost'>
  Error
</Button>
<Button color='success' type='button' variant='ghost'>
  Success
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>

        <div class="flex flex-col gap-2">
          <div id='button-link' class=" font-bold" ><a class="opacity-50" href='#button-link'>#</a> Button as a link</div>
          <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium drop-shadow-xl">Setting variant to <code>{`'link'`}</code> will <span class="underline">only style</span> the button as a link.<br></br>To make it a link, you must set the <code>{`href`}</code> prop and the <code>{`As`}</code> prop </p>
          </div>
          <TabList groupName='tab5' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='neutral' variant='link'>
                  Styled Link to nothing
                </Button>
                <Button variant='normal' As='Link' href='/docs/button'>
                  Normal Styling to docs/button
                </Button>
                <Button variant='link' As='Link' href='/docs/button'>
                  Styled Link to docs/button
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='neutral' variant='link'>
  Styled Link to nothing
</Button>
<Button variant='normal' As='Link' href='/docs/button'>
  Normal Styling to docs/button
</Button>
<Button variant='link' As='Link' href='/docs/button'>
  Styled Link to docs/button
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>


        <div class="flex flex-col gap-2">
          <div id='button-active' class=" font-bold" ><a class="opacity-50" href='#button-active'>#</a> Active Buttons</div>
          <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium drop-shadow-xl">Active means reducing hover/interactivity effects</p>
          </div>
          <TabList groupName='tab6' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='neutral' type='button' variant='normal' active>
                  Normal Active
                </Button>
                <Button color='accent' type='button' variant='ghost' active>
                  Ghost Active
                </Button>
                <Button color='info' type='button' variant='ghost' active>
                  Ghost Active
                </Button>
                <Button color='primary' type='button' variant='outline' active>
                  Outline Active
                </Button>
                <Button color='secondary' type='button' variant='link' active>
                  Link Active
                </Button>
                <Button color='warning' type='button' variant='normal' active>
                  Normal Active
                </Button>
                <Button color='error' type='button' variant='normal' active>
                  Normal Active
                </Button>
                <Button color='success' type='button' variant='outline' active>
                  Outline Active
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='neutral' type='button' variant='normal' active>
  Normal Active
</Button>
<Button color='accent' type='button' variant='ghost' active>
  Ghost Active
</Button>
<Button color='info' type='button' variant='ghost' active>
  Ghost Active
</Button>
<Button color='primary' type='button' variant='outline' active>
  Outline Active
</Button>
<Button color='secondary' type='button' variant='link' active>
  Link Active
</Button>
<Button color='warning' type='button' variant='normal' active>
  Normal Active
</Button>
<Button color='error' type='button' variant='normal' active>
  Normal Active
</Button>
<Button color='success' type='button' variant='outline' active>
  Outline Active
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>

        <div class="flex flex-col gap-2">
          <div id='button-sizes' class=" font-bold" ><a class="opacity-50" href='#button-sizes'>#</a> Button Sizes</div>
          {/* <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium drop-shadow-xl">Active means reducing hover/interactivity effects</p>
          </div> */}
          <TabList groupName='tab7' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='primary' type='button' variant='normal' size='xs'>
                  Extra Small
                </Button>
                <Button color='primary' type='button' variant='normal' size='sm'>
                  Small
                </Button>
                <Button color='primary' type='button' variant='normal' size='md'>
                  Medium
                </Button>
                <Button color='primary' type='button' variant='normal' size='lg'>
                  Large
                </Button>
                <Button color='primary' type='button' variant='normal' size='wide'>
                  Wide
                </Button>
                <Button color='primary' type='button' variant='normal' size='block'>
                  Block
                </Button>
                <Button color='primary' type='button' variant='normal' size='responsive'>
                  Responsive
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='primary' type='button' variant='normal' size='xs'>
  Extra Small
</Button>
<Button color='primary' type='button' variant='normal' size='sm'>
  Small
</Button>
<Button color='primary' type='button' variant='normal' size='md'>
  Medium
</Button>
<Button color='primary' type='button' variant='normal' size='lg'>
  Large
</Button>
<Button color='primary' type='button' variant='normal' size='wide'>
  Wide
</Button>
<Button color='primary' type='button' variant='normal' size='block'>
  Block
</Button>
<Button color='primary' type='button' variant='normal' size='responsive'>
  Responsive
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>

        <div class="flex flex-col gap-2">
          <div id='button-disabled' class=" font-bold" ><a class="opacity-50" href='#button-disabled'>#</a> Disabled Buttons</div>
          {/* <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium drop-shadow-xl">Active means reducing hover/interactivity effects</p>
          </div> */}
          <TabList groupName='tab8' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='primary' type='button' variant='outline' disabled>
                  I am disabled
                </Button>
                <Button color='primary' type='button' variant='normal' disabled>
                  I am disabled
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='primary' type='button' variant='outline'  disabled>
  I am disabled
</Button>
<Button color='primary' type='button' variant='normal'  disabled>
  I am disabled
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>



        <div class="flex flex-col gap-2">
          <div id='button-icons' class=" font-bold" ><a class="opacity-50" href='#button-icons'>#</a> Button Icons</div>
          <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium drop-shadow-xl">You can simply add a icon to the button before or after your child text.</p>
          </div>
          <TabList groupName='tab10' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='primary' type='button' >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  Icon Start
                </Button>
                <Button color='primary' type='button' >
                  Icon End
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='primary' type='button' >
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
Icon Start
</Button>
<Button color='primary' type='button' >
Icon End
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>

        <div class="flex flex-col gap-2">
          <div id='button-shapes' class=" font-bold" ><a class="opacity-50" href='#button-shapes'>#</a> Button Shapes</div>
          {/* <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium drop-shadow-xl">Active means reducing hover/interactivity effects</p>
          </div> */}
          <TabList groupName='tab9' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='primary' type='button' shape='circle'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </Button>
                <Button color='primary' type='button' shape='circle' variant='outline'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </Button>
                <Button color='primary' type='button' shape='square'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </Button>
                <Button color='primary' variant='outline' shape='square'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='primary' type='button' shape='circle'>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Button>
<Button color='primary' type='button' shape='circle' variant='outline'>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Button>
<Button color='primary' type='button' shape='square'>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Button>
<Button color='primary' variant='outline' shape='square'>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>

        <div class="flex flex-col gap-2">
          <div id='button-loading' class=" font-bold" ><a class="opacity-50" href='#button-loading'>#</a> Button Loading</div>
          <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium drop-shadow-xl">You can use the props for loadingStart and loadingEnd.<br></br>Or.. You can use your own loader by putting before or after your child text.</p>
          </div>
          <TabList groupName='tab11' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='primary' type='button' loadingStart >
                  Loading Start
                </Button>
                <Button color='primary' type='button' loadingEnd >
                  Loading End
                </Button>
                <Button color='primary' type='button' loadingStart shape='square'></Button>
                <Button color='primary' type='button' loadingStart shape='circle' variant='outline'></Button>
                <Button color='primary' type='button' >
                  <span class="loading loading-spinner"></span>
                  No Props
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='primary' type='button' loadingStart >
  Loading Start
</Button>
<Button color='primary' type='button' loadingEnd >
  Loading End
</Button>
<Button color='primary' type='button' loadingStart shape='square'></Button>
<Button color='primary' type='button' loadingStart shape='circle' variant='outline'></Button>
<Button color='primary' type='button' >
  <span class="loading loading-spinner"></span>
  No Props
</Button>`
                } lang="tsx" options={{ showLineNumbers: true }} />
              </div>
            </TabPanel>
          </TabList>
        </div>

        <div class="flex flex-col gap-2">
          <div id='button-class' class=" font-bold" ><a class="opacity-50" href='#button-class'>#</a> Custom Button Styles</div>
          <div class="bg-base-content bg-opacity-20 p-4 rounded-lg">
            <p class="text-base font-medium drop-shadow-xl">Class allows you to use your own custom tailwind class styles on top of the button component.<br></br>
              For example: you can add shadow and hover effects.
            </p>
          </div>
          <TabList groupName='tab12' size='md'>
            <Tab label="Preview" checked />
            <TabPanel>
              <div class="w-full flex justify-center gap-4 flex-wrap">
                <Button color='primary' type='button' variant='outline' size='lg' class='shadow-md hover:shadow-2xl shadow-primary hover:shadow-red-600 hover:scale-125 hover:bg-gradient-to-tr from-[#55074e]  to-[#FE9A03] hover:animate-none animate-pulse'>
                  Custom Tailwind Styles
                </Button>
              </div>
            </TabPanel>
            <Tab label="Code" />
            <TabPanel maxHeight='[500px]'>
              <div class="w-full  ">
                <Code code={`<Button color='primary' type='button' variant='outline' size='lg' class='shadow-md hover:shadow-2xl shadow-primary hover:shadow-red-600 hover:scale-125 hover:bg-gradient-to-tr from-[#55074e]  to-[#FE9A03] hover:animate-none animate-pulse'>
   Custom Tailwind Styles
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

export const head: DocumentHead = {
  title: "QwikDaisy Buttons",
  meta: [
    {
      name: "description",
      content: "DaisyUI Button Component for Qwik",
    },
  ],
};
