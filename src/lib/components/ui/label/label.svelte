<script lang="ts">
  import { Label as LabelPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils';

  type $$Props = LabelPrimitive.Props;
  type $$Events = LabelPrimitive.Events;

  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<LabelPrimitive.Root
  class={cn(
    'absolute bottom-0 left-3 top-0 inline-flex -translate-y-1/4 cursor-text items-center text-sm font-medium text-text-secondary transition-all peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-1/4',
    className
  )}
  {...$$restProps}
  on:mousedown
>
  <slot />
</LabelPrimitive.Root>
