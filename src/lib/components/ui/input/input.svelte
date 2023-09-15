<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  import { cn } from '$lib/utils';
  import type { InputEvents } from '.';

  type $$Props = HTMLInputAttributes;
  type $$Events = InputEvents;

  let className: $$Props['class'] = undefined;
  export let value: $$Props['value'] = undefined;
  export { className as class };
</script>

<input
  class={cn(
    'w-full px-3 pt-6 pb-2 placeholder-transparent bg-transparent border-none peer focus:outline-none',
    className
  )}
  bind:value
  on:blur
  on:change
  on:click
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:paste
  on:input
  {...$$restProps}
  placeholder=""
/>
