<template>
<div>
    <div v-html="this.content"></div>
    <link rel="stylesheet" :href="stylesheet">
</div>
</template>
<script>
var jsonp = require('jsonp');

export default{
    props:{
        url:String
    },
    data: function(){
        return {
            content : "Loading...",
            stylesheet: null
        }
    },
    mounted : function(){
        var self = this; 
        jsonp(this.url+".json", null, function (err, data) {
        if (err) {
            console.error(err.message);
            self.content =err.message;
        } else {
            self.content = data.div; 
            self.stylesheet = data.stylesheet; 
        }
        });
    }
}
</script>
