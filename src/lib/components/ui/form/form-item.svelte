<script lang="ts">
  import { getFormField } from 'formsnap';
  import type { HTMLAttributes } from 'svelte/elements';

  import { cn } from '$lib/utils';

  type $$Props = HTMLAttributes<HTMLDivElement>;
  let className: string | undefined | null = undefined;
  export { className as class };

  const { errors } = getFormField();
</script>

<div
  class={cn(
    'relative w-full border border-gray-100  rounded-sm h-14 bg-gray-50 ring-blue-100/75 focus-within:border-blue-300 focus-within:ring',
    $errors && 'border-destructive focus-within:border-destructive ring-destructive/10',
    className
  )}
  {...$$restProps}
>
  <slot />
</div>
