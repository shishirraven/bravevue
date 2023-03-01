<template>
    <div class="grid md:grid-cols-2 rounded-xl shadow-xlborder dark:border-black h-full space-y-3 ">
      <div class="grow bg-slate-900 md:rounded-l-xl pt-2 overflow-auto text-sm font-mono">
        <slot name="editor"></slot>
      </div>
      <div class="grow bg-white md:rounded-r-xl text-black  overflow-auto not-prose ">
        <slot name="preview"></slot>
      </div>
    </div>
  </template>
