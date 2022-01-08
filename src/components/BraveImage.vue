<template>
    <div>
        <input @change="onFilePicked" type="file" name="" ref="browseImage" id="" accept="image/*" style="display:none">
        <div class=" brave-placeholder" v-if="imageURL==''">
            <div class="browse-message">
                <div class="btn btn-primary" @click="browseFiles()" >Browse </div>
                
            </div>
        </div>
        <div class="cursor-pointer"  @click="browseFiles()"  v-if="imageURL!=''">   
        
            <div class="brave-placeholder"  :style="{backgroundImage:`url(${imageURL})`}"></div>
        </div>
        </div>
</template>
<script>
export default {
    name : "BraveImage", 
    props : {
        value : String,
        imageWidth : Number, 
        imageHeight : Number
    },
    data : function(){
        return {
            imageURL : ""
        }
    },
    created : function()
    {
        if(this.value!=undefined && this.value!="")
        {
            this.imageURL = this.value;
        }
    },
    methods :{
        browseFiles : function(){
            this.$refs.browseImage.click();
        },
        onFilePicked : function(event){
            var self = this; 
            var files = event.target.files; 
            var fileReader = new  FileReader(); 
            fileReader.addEventListener('load', function(){
            self.imageURL = fileReader.result;
            

            // Resizing the Image based on the new size. 
            // ================================================================
            if(self.imageWidth!=undefined)
            {
               // console.log(self.imageURL)
                const imgEl = document.createElement('img');
                imgEl.src = self.imageURL
                imgEl.style.width = self.imageWidth+"px";
                imgEl.style.height = self.imageHeight+"px";
                const canvas = document.createElement('canvas');
                 canvas.width  =self.imageWidth;
                canvas.height = self.imageHeight;

                const ctx = canvas.getContext('2d');
                imgEl.onload = function(){
                    ctx.drawImage(imgEl, 0, 0, self.imageWidth, self.imageHeight);
                    self.imageURL = canvas.toDataURL();
                    self.$emit('change', self.imageURL);
                    imgEl.remove();
                    canvas.remove();
                }
            }
            else
            {
                self.$emit('change', self.imageURL);
            }
            
            
            // ================================================================
            // Resizing Ends. 
            
            
            
            
            })
            fileReader.readAsDataURL(files[0]); 
        }

    }
}
</script>
<style scoped>
.cursor-pointer {
    cursor:pointer
}
.brave-placeholder{
    background-size:cover;
    background-position:center;
    height:35px;
    min-width:45px;
    background-color:#eee;
    display:flex; 
    justify-content: center;
    align-items: center;
}
</style>