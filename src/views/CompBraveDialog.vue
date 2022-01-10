<template>
  <div class="p-3 m-3 p-md-5 m-md-5">

    <h3 class="mt-4">Brave Dialog</h3>
    Add Dialogs to your VueJS App for Almost anything. 

    <h4 class="my-4">Examples</h4> 

    <p>
      Click the following button to see BraveDialog in action
    </p>
    <BraveDialog ref="bravedialog" dialogwidth="500px">
      <template #dialog-heading>
         <img class="me-3" alt="Vue logo" width="30px;" src="../assets/logo.png"> VueJS Dialog
      </template>
      <template #dialog-body>
        <div class="p-4">This is a BraveVue Dialog VueJS Component</div>
      </template>
      <template #footer>
        <div class="btn btn-primary text-white m-4" @click="$refs.bravedialog.hide()">Close</div>
      </template>
    </BraveDialog>
    <div @click="$refs.bravedialog.show()" class="btn btn-lg btn-primary text-white px-4"><i class="bi bi-window"></i> Open Dialog</div>
    <BraveGistEmbed class="my-4" url="https://gist.github.com/shishirraven/4b99ef6784c7477576e16df16db61fc3"></BraveGistEmbed>

    <hr class="my-5">
    <h4>How to use</h4>

    <h5 class="py-3">1. Import the the component inside script tag. </h5>

    <div class="my-4"><code class="bg-light p-3 fs-5 ">import {BraveDialog} from "bravevue"</code></div>

    <h5 class="py-3">2. Add to your components</h5>
    
    <div class="my-4"><code class="bg-light p-3 fs-5 ">
  components: {
    BraveDialog, 
    ...
  },  
  </code>
    </div>
    <h5 class="py-3">3. Use in your template</h5>
    <p>
      There are three Slots available. 
    </p>
    
      <ul>
        <li>dialog-heading</li>
        <li>dialog-body</li>
        <li>footer</li>
      </ul>
    <p>You can use these as shown below</p>
    
    <BraveGistEmbed url="https://gist.github.com/shishirraven/d9e9aee838f5fed86fdb366057edfdfc"></BraveGistEmbed>

    <h4>Complete Example.</h4>
    <BraveGistEmbed url="https://gist.github.com/shishirraven/cfb74452b90e7dc474a40a92575bd983"></BraveGistEmbed>

                


  </div>
</template>

<script>
// @ is an alias to /src
import BraveDialog from "@/components/BraveDialog"
import BraveGistEmbed from "@/components/BraveGistEmbed"


export default {
  name: 'Home',
  components: {
    BraveDialog,
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
