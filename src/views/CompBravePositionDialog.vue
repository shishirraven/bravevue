<template>
  <div class="p-3 m-3 p-md-5 m-md-5">

    <h3 class="mt-4">Brave Position Dialog</h3>
    Show Dialogs at the position where the user clicks. 

    <h4 class="my-4">Examples</h4> 

    <p>
      Click the following button to see BraveDialog in action
    </p>
    <div @click="$refs.bravedialog.show($event)" class="btn btn-lg btn-primary text-white px-4">
      <i class="bi bi-window"></i> Open Position Dialog</div>
    <BravePositionDialog ref="bravedialog" style="max-width:500px;" class="bg-light rounded shadow">
      <template  #header>
          <div class="p-2"><i class="bi bi-question-circle"></i> How it works</div>
      </template>
      <template #body>
         <div class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis explicabo nemo obcaecati vel sapiente aliquid, delectus laudantium suscipit harum voluptates, temporibus ex unde ipsam dolorem fuga nobis non autem!</div>
      </template>
      <template #footer>
        <div class="p-2">
            <div class="btn btn-primary btn-sm text-white" @click="$refs.bravedialog.hide()">Close</div>
        </div>
      </template>
    </BravePositionDialog>
   <br>
   <br>
   <p>
   Example Help Text <span role="button" @click="$refs.bravedialog.show($event)"><i class="bi bi-question-circle"></i>. Try Clicking the question Mark in this text.</span>
   </p>
   
    <BraveGistEmbed class="my-4" url="https://gist.github.com/shishirraven/989f7d9d645edec60a98ad20bf387436"></BraveGistEmbed>



    <hr class="my-5">
    <h4>How to use</h4>

    <h5 class="py-3">1. Import the the component inside script tag. </h5>

    <div class="my-4"><code class="bg-light p-3 fs-5 ">import {BravePositionDialog} from "bravevue"</code></div>

    <h5 class="py-3">2. Add to your components</h5>
    
    <div class="my-4"><code class="bg-light p-3 fs-5 ">
  components: {
    BravePositionDialog, 
    ...
  },  
  </code>
    </div>
    <h5 class="py-3">3. Use in your template</h5>
    <p>
      There are three Slots available. 
    </p>
    
      <ul>
        <li>heading</li>
        <li>body</li>
        <li>footer</li>
      </ul>
    <p>You can use these as shown below</p>
    
   
    <BraveGistEmbed url="https://gist.github.com/shishirraven/6d190087fa4963693b5622c53ded7855"/>

  <p>
    To Add a Close Button you can use $refs. As shown below. 
  </p>

  
  <BraveGistEmbed url="https://gist.github.com/shishirraven/1bfb907e22c7b36bcb505fa003bdaf83"/>

  <h4>Complete Example.</h4>
  <BraveGistEmbed url="https://gist.github.com/shishirraven/8464100119a3066c10b100fa4c4697c6"/>

  </div>
</template>

<script>
// @ is an alias to /src
import BravePositionDialog from "@/components/BravePositionDialog"
import BraveGistEmbed from "@/components/BraveGistEmbed"


export default {
  name: 'Home',
  components: {
    BravePositionDialog,
    BraveGistEmbed
  },
  data : function(){
    return {
      src: "", 
      script: "div"
    }
  }
}
</script>
