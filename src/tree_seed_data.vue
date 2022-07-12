<script>
export default {
    data(){
        return {
            nodeTree:[
                        {
                                        "id":1,
                                        "component_name" : "text",
                                        "data" : {
                                            "selfData" : {
                                                "text" : "This is a text11123"
                                            }
                                        }
                        },
                        {
                                        "id":2,
                                        "component_name" : "text",
                                        "data" : {
                                            "selfData" : {
                                                "text" : "This is a text"
                                            }
                                        }
                        },
                        {
                            "component_name" : "if",
                             "id":3,
                            "data" :{
                                "selfData" : {
                                    "text" : "This is a if condition"
                                }, 
                                "childNodes" : [
                                    {
                                         "id":4,
                                        "component_name" : "text",
                                        "data" : {
                                            "selfData" : {
                                                "text" : "This is a text"
                                            }
                                        }
                                    },
                                    {
                                         "id":5,
                                        "component_name" : "text",
                                        "data" : {
                                            "selfData" : {
                                                "text" : "This is a text"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ] 
        }
    }
}
</script>