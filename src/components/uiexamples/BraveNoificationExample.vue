<template>
  <div id="app">
    <brave-notification
    ref="braveGrowl"
    class="bg-slate-100 rounded-lg  p-5"
    display-time="8000" corner="top-right"
    v-slot="{close}">
      <div>
        Hello, this is a notification message.
        <div class="px-2 py-1 bg-slate-400" @click="close()">Close Me</div>
      </div>
    </brave-notification>
  </div>
  <!-- show button -->
  <button @click="$refs.braveGrowl.show()">Show</button>
</template>