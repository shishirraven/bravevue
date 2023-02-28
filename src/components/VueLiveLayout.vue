<template>
    <div class="grid grid-cols-2 rounded-xl shadow-xlborder dark:border-black h-full">
      <div class="grow bg-slate-900 rounded-l-xl pt-2 overflow-auto">
        <slot name="editor"></slot>
      </div>
      <div class="grow bg-white rounded-r-xl text-black  overflow-auto not-prose ">
        <slot name="preview"></slot>
      </div>
    </div>
  </template>
