import { component$ } from '@builder.io/qwik';

export interface ButtonProps {
  text: string,
  onClick: () => void,
  disabled?: boolean,
  type?: 'submit' | 'reset' | 'button',
  color?: 'primary' | 'secondary' | 'accent',
}

export const Button = component$<ButtonProps>((props) => {
  return (
    <div>
      Button component works!
    </div>
  );
});
