<template>
  <div class="p-3 m-3 p-md-5 m-md-5">

    <h1 class="mt-4">Brave Drop Menu</h1>
    <p>Toggleable, contextual overlays for displaying lists of links and more.
    </p>

    <h2 class="my-4">Example</h2> 
    <p>The following is an Example, Try clicking the button.  </p>

    <BraveDropMenu class="me-3">
      <template #button>
        <div role="button" class="btn btn-primary text-white px-3 "> <i class="bi bi-plus-lg"></i> Button <i class="bi bi-chevron-down"></i></div>
      </template>
      <template #menu>
        <div class="list-group bg-white shadow" style="min-width:200px;" >
          <div role="button" class="list-group-item list-group-item-action"><i class="bi me-1 bi-person-plus"></i> A second link item</div>
          <div role="button" class="list-group-item list-group-item-action"><i class="bi me-1 bi-envelope-plus"></i> A second link item</div>
        </div>
      </template> 
    </BraveDropMenu>

    <BraveDropMenu>
      <template #button>
        <div role="button" class="btn btn-light  px-3 "> <i class="bi bi-plus-lg"></i> Button <i class="bi bi-chevron-down"></i></div>
      </template>
      <template #menu>
        <div class="list-group bg-white shadow" style="min-width:200px;" >
          <div role="button" class="list-group-item list-group-item-action"><i class="bi me-1 bi-person-plus"></i> A second link item</div>
          <div role="button" class="list-group-item list-group-item-action"><i class="bi me-1 bi-envelope-plus"></i> A second link item</div>
        </div>
      </template> 
    </BraveDropMenu>

    
   
    <p class="mt-3">This is a demo with inline text, <BraveDropMenu >
      <template #button>
        <span class="link-primary" role="button">click here to view</span> 
        </template>
      <template #menu>
        <div class="list-group bg-white shadow" style="min-width:200px;" >
          <div role="button" class="list-group-item list-group-item-action"><i class="bi me-1 bi-person-plus"></i> A second link item</div>
          <div role="button" class="list-group-item list-group-item-action"><i class="bi me-1 bi-envelope-plus"></i> A second link item</div>
        </div>
      </template> 
    </BraveDropMenu></p>

    <hr>
    <h2>Complete Example Code</h2>
    
    <BraveGistEmbed url="https://gist.github.com/shishirraven/d1a8bc204c7df9516d0138bb6258f5a4"></BraveGistEmbed>



    <hr class="my-5">
    <h2>How to use</h2>

    <h3 class="py-3">1. Import the the component inside script tag. </h3>

    <div class="my-4"><code class="bg-light p-3 fs-5 ">import {BraveDropMenu} from "bravevue"</code></div>

    <h3 class="py-3">2. Add to your components</h3>
    
    <div class="my-4"><code class="bg-light p-3 fs-5 ">
  components: {
    BraveDropMenu, 
    ...
  },  
  </code>
    </div>
    <h3 class="py-3">3. Use in your template</h3>
    <p>
      There are <span class="fw-bold"> 2 slots </span> in the Component. 
    </p>
    <ul>
      <li><div class="fw-bold">Button</div>- Here you add your button or whatever html you want to put on which the click should apply.</li>
      <li><div class="fw-bold">Menu</div>-here you keep your menu. </li>
    </ul>


    <ol>
      <li>
          Add the BraveDropMenuTag
            <BraveGistEmbed url="https://gist.github.com/shishirraven/ec4e5ccddd4a87377ad19c89a4d5475d"></BraveGistEmbed>
            
      </li>
      <li>
        Add the Button Template. 
        <BraveGistEmbed url="https://gist.github.com/shishirraven/1840e05254bffb6e88ad191308239821"></BraveGistEmbed>
       
      </li>
      <li>
        Add the Menu. 
         <BraveGistEmbed url="https://gist.github.com/shishirraven/2a158f176e346dc74e6f515c411a98c8"></BraveGistEmbed>

      </li>
    </ol>

<hr>
<h2>Styling</h2>
<p>In the example I have used Bootstrap 5 to style the drop menu. But you can use any CSS Framework of your choice to style the menu.</p>
<!-- 
    <iframe height="300" style="width: 100%;" scrolling="no" title="Brave Drop Menu" src="https://codepen.io/shishirraven/embed/zYEeOVK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/shishirraven/pen/zYEeOVK">
  Brave Drop Menu</a> by Shishir Raven (<a href="https://codepen.io/shishirraven">@shishirraven</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe> -->





  </div>
</template>

<script>
// @ is an alias to /src
import BraveDropMenu from "@/components/BraveDropMenu"

import BraveGistEmbed from "@/components/BraveGistEmbed"
export default {
  name: 'Home',
  components: {
    BraveDropMenu,
    BraveGistEmbed
  }
}
</script>
