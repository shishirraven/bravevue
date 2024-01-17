import{_ as s,m as l,u as c,D as d,e as p,f as u,r as m,o as h,c as f,d as i,b as g,g as v}from"./index.807cea8e.js";import{C as b}from"./VueLiveLayout.ebdb965d.js";import{B as y}from"./BraveField.644d8c1c.js";const w=`<template>
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
</template>`,B={data(){return{CustomLayout:l(b),BraveNoificationExample:w}},mounted(){c({title:"Form Field Component for Vue 3 | Brave Components Library.",meta:[{name:"description",content:"BraveField allows you to quickly build a HTML form currently it contains fields for text, textarea, select, radio and checkbox."},{name:"keywords",content:"Fields Builder,Form Field Compnent, Component, Vue3, BraveVue, Javascript, Radio, Select, Textarea, checkbox "},{name:"author",content:"Shishir Raven"}]})},methods:{handleError(o){console.log(o)}},components:{VueLive:d,BraveField:y,BrTaSyntaxHighlighter:p,BrTaTabs:u}},_={class:"flex-1 p-4 lg:p-10 lg:pt-16"},x={class:"prose prose-slate max-w-none dark:prose-invert"},q=v(`<h1 id="introduction"><i class="bi bi-bell"></i> Brave Notification</h1><p> The Brave Notification component is a Vue.js notification component with customizable appearance and animations. It provides a sleek and user-friendly way to display growl notifications with an optional progress bar indicating the remaining time for the notification to disappear. </p><h2>Usage</h2><p> To use the Brave Notification component, import it into your Vue.js project and include it in your template. Customize the appearance, corner position, and display time as needed. </p><pre><code>
    &lt;brave-growl display-time=&quot;2000&quot; corner=&quot;top-right&quot;&gt;
      &lt;div&gt;Your notification message&lt;/div&gt;
    &lt;/brave-growl&gt;
  </code></pre><h2>Props</h2><ul><li><code>display-time</code> (Number): Time in milliseconds for how long the notification should be displayed.</li><li><code>corner</code> (String): Corner position for the notification (e.g., &quot;top-left&quot;, &quot;top-right&quot;, &quot;bottom-left&quot;, &quot;bottom-right&quot;).</li></ul><h2>Methods</h2><ul><li><code>show()</code>: Manually triggers the display of the growl notification.</li><li><code>close()</code>: Closes the growl notification.</li></ul><h2>Animations</h2><p> The component features slide-in and slide-out animations based on the specified corner. If the location is top-left or top-right, it uses slide up for entry and slide down for exit. If the location is bottom-left or bottom-right, it uses slide down for entry and slide up for exit. </p><h2>Progress Bar</h2><p> The component includes a progress bar at the bottom, indicating the time left for the notification to automatically disappear. The progress bar dynamically updates its width as the notification countdown progresses. </p><p>You can live edit the following code. </p>`,14),N={class:"md:h-96"};function C(o,e,k,T,t,n){const a=m("VueLive");return h(),f("main",_,[i("div",x,[q,i("div",N,[g(a,{layout:t.CustomLayout,editorProps:{lineNumbers:!0},code:t.BraveNoificationExample,components:{BraveNotification:o.BraveNotification},onError:e[0]||(e[0]=r=>n.handleError(r))},null,8,["layout","code","components"])])])])}const E=s(B,[["render",C]]);export{E as default};
