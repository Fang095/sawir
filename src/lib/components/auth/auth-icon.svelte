<div class="flex flex-col items-center justify-center w-full space-x-2">
  <div class="relative w-full h-12">
    <div
      class="absolute left-0 right-0 z-10 flex items-center justify-center w-12 h-12 mx-auto text-white bg-opacity-50 border rounded-lg border-white/90 bg-green-50 bg-clip-padding backdrop-blur-md backdrop-filter"
    >
      <slot />
    </div>

    <div
      class="absolute -right-4 -top-2 left-0 mx-auto h-12 w-12 rotate-[20deg] rounded-lg bg-gradient-to-bl from-green-500 to-green-700"
    />
    <div
      class="absolute left-0 right-0 mx-auto h-[47px] w-[47px] rounded-lg bg-gradient-to-tr from-green-500 to-green-700"
    />
  </div>
</div>
