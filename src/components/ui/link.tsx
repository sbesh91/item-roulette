import { buttonVariants } from './button';
import { A, AnchorProps } from '@solidjs/router';
import { clsx } from 'clsx';

type LinkProps = {
  variant?: Parameters<typeof buttonVariants>['0'];
} & AnchorProps;
export function Link({
  variant = { variant: 'link' },
  children,
  class: className,
  ...props
}: LinkProps) {
  return (
    <A {...props} class={clsx(buttonVariants(variant), className)}>
      {children}
    </A>
  );
}
