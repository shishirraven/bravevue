<template>
  <div class="p-3 m-3 p-md-5 m-md-5">

    <h1 class="mt-4">Brave Gist Embed</h1>
    <p>You can use this Component to embed Github Gist, right now it solves the problem which one faces while
      using the script tag embed code given by Gist. 
    </p>

    <h2 class="my-4">Example</h2> 

    <p>The following is an Embed by BraveGistEmbed component </p>

    <BraveGistEmbed url="https://gist.github.com/shishirraven/de437adec76659671c4b6d2d45630375"/>

    <hr class="my-5">
    <h4>How to use</h4>

    <h5 class="py-3">1. Import the the component inside script tag. </h5>

    <div class="my-4"><code class="bg-light p-3 fs-5 ">import {BraveGistEmbed} from "bravevue"</code></div>

    <h5 class="py-3">2. Add to your components</h5>
    
    <div class="my-4"><code class="bg-light p-3 fs-5 ">
  components: {
    BraveGistEmbed, 
    ...
  },  
  </code>
    </div>
    <h5 class="py-3">3. Use in your template</h5>
    <p>
      Just copy the URL of the Gist and use it as follows in your template. 
    </p>
    <BraveGistEmbed url="https://gist.github.com/shishirraven/aeee3907b20fa8e45fe11a88035bd5bb"></BraveGistEmbed>

    <h4>Complete Example.</h4>
    <BraveGistEmbed url="https://gist.github.com/shishirraven/bed3c9cad0ce93d887406b8b1a2a99f7"></BraveGistEmbed>

                


  </div>
</template>

<script>
// @ is an alias to /src
import BraveGistEmbed from "@/components/BraveGistEmbed"
export default {
  name: 'Home',
  components: {
    BraveGistEmbed
  }
}
</script>
