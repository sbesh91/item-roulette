import type { Component, ComponentProps } from 'solid-js';
import { Toaster as Sonner } from 'solid-sonner';

type ToasterProps = ComponentProps<typeof Sonner>;

const Toaster: Component<ToasterProps> = (props) => {
  return (
    <Sonner
      class="toaster group"
      toastOptions={{
        classes: {
          toast:
            'group toast border-2 backdrop-blur-sm  group-[.toaster]:bg-background/20 group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
