<template>
  <div class="p-3 m-3 p-md-5 m-md-5">

    <h1 class="mt-4">Brave Drop Menu</h1>
    <p>Toggleable, contextual overlays for displaying lists of links and more.
    </p>

    <h2 class="my-4">Example</h2> 
    <p>The following is an Example, Try clicking the button.  </p>

    <BraveSelect class="me-3" v-model="selectValue" :options="options" dropdown-class="shadow rounded border list-group bg-white">
      <template v-slot:button="{ selectedValue }">
        <div  role="button" class="btn btn-primary text-white px-3 d-flex ">
           <div v-if="selectedValue!=null">
            <strong>{{ selectedValue.name }} </strong>  is written in <strong>  {{ selectedValue.language }}</strong> 
           </div>
           <div v-else>
             Select a Value
          </div>
          <i class="ms-2 bi bi-chevron-down"></i>
        </div>
      </template>
      <template v-slot:menu="{ option,selectedValue }">
          <div role="button" :class="{active:JSON.stringify(selectedValue)==JSON.stringify(option)}" class=" border-0 list-group-item list-group-item-action">{{option.name}}</div>
      </template> 
    </BraveSelect>

    <BraveSelect class="me-3" v-model="selectValue" :options="options" dropdown-class="shadow rounded py-3 border list-group bg-white">
      <template v-slot:button="{ selectedValue }">
        <div  role="button" class="btn btn-primary text-white px-3 d-flex ">
           <div v-if="selectedValue!=null">
            <strong>{{ selectedValue.name }} </strong>  is written in <strong>  {{ selectedValue.language }}</strong> 
           </div>
           <div v-else>
             Select a Value
          </div>
          <i class="ms-2 bi bi-chevron-down"></i>
        </div>
      </template>
      <template v-slot:menu="{ option,selectedValue }">
          <div role="button" :class="{active:JSON.stringify(selectedValue)==JSON.stringify(option)}" 
          class="list-group-item list-group-item-action  border-0">{{option.name}}</div>
      </template> 
    </BraveSelect>
        <BraveSelect class="me-3" v-model="selectValue2" :options="options2" dropdown-class="shadow rounded border py-2 list-group-flush list-group bg-white">
      <template v-slot:button="{ selectedValue }">
        <div  role="button" class="btn btn-primary text-white px-3 d-flex ">
           <div v-if="selectedValue!=null">
            {{ selectedValue.name }}  
           </div>
           <div v-else>
             Select a Value
          </div>
          <i class="ms-2 bi bi-chevron-down"></i>
        </div>
      </template>
      <template v-slot:menu="{ option,selectedValue }">
          <div role="button" style="min-width:200px;" :class="{active:JSON.stringify(selectedValue)==JSON.stringify(option)}" 
          class="list-group-item list-group-item-action border-0">
          <div class="fw-bold">{{option.name}}</div>
          <div class=""><small>{{option.hint}}</small></div>
          </div>
      </template> 
    </BraveSelect>

       <BraveSelect class="me-3" v-model="selectValue2" :options="options2" dropdown-class="shadow rounded border py-2 list-group-flush list-group bg-white">
      <template v-slot:button="{ selectedValue }">
        <div  role="button" class="btn btn-outline-dark  px-3 d-flex ">
           <div v-if="selectedValue!=null">
            {{ selectedValue.name }}  
           </div>
           <div v-else>
             Select a Value
          </div>
          <i class="ms-2 bi bi-chevron-down"></i>
        </div>
      </template>
      <template v-slot:menu="{ option,selectedValue }">
          <div role="button" style="min-width:200px;" :class="{active:JSON.stringify(selectedValue)==JSON.stringify(option)}" 
          class="list-group-item list-group-item-action border-0">
          <div class="fs-5">{{option.name}}</div>
          <div class=""><small>{{option.hint}}</small></div>
          </div>
      </template> 
    </BraveSelect>

     <h2 class="my-4">Complete Code Example</h2> 
    <BraveGistEmbed url="https://gist.github.com/shishirraven/4de38a88167efe70ded058a244941c09"></BraveGistEmbed>



  </div>
</template>

<script>
// @ is an alias to /src
import BraveSelect from "@/components/BraveSelect"

import BraveGistEmbed from "@/components/BraveGistEmbed"
export default {
  name: 'Home',
  components: {
    BraveSelect,
    BraveGistEmbed
  },
  data(){
    return {
        selectValue : { name: 'Vue.js', language: 'JavaScript' },
        selectValue2 : null,
        options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP', $isDisabled: true },
        { name: 'Phoenix', language: 'Elixir' }
      ],
       options2: [
        { name: 'And', hint: 'All Filters must match' },
        { name: 'Or', hint: 'Atlest 1 filter must match' }
      ]

    }
  }
}
</script>
