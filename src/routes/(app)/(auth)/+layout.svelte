<script lang="ts">
  import Logo from '$lib/components/Logo.svelte';
</script>

<div class="flex items-center justify-center h-full pattern">
  <div class="flex flex-col w-full h-full max-w-screen-lg px-4 py-8 xl:px-0">
    <div class="flex items-center justify-center space-x-2">
      <Logo />
      <h1 class="text-2xl font-semibold">Sawir</h1>
    </div>

    <div class="flex flex-col w-full max-w-md mx-auto my-auto space-y-8">
      <slot />
    </div>
  </div>
</div>
