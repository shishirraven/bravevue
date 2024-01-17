<template>
  <div id="app">
    <brave-notification
    ref="braveGrowl"
    class="bg-slate-100 rounded-lg  p-5"
    display-time="8000" corner="top-right">
      <div>
        Hello, this is a notification message.
        <div @click="$refs.braveGrowl.close"></div>
      </div>
    </brave-notification>
  </div>
  <!-- show button -->
  <button @click="$refs.braveGrowl.show()">Show</button>
</template>