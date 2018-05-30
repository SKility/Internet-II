var listusers={
    listall:function(){
        for(var i=0;i<listusers.items.length;i++){
            $("#table-body span").append(listusers.assamble(listusers.users[i]));
            var items=["brand", "location", "lunch", "price"];
       };
       
    
    },
    assamble:function(elements){
        return "<strong>"
         +"<strong>"+elements.brand+"</strong>"
         +"<strong>"+elements.location+"</strong>"
         +"<strong>"+elements.lunch+"</strong>"
         +"<strong>"+elements.price+"</strong>"
         +"</strong>";
    },
    users:[],
    setusers:function(elements){
    listusers.users=elements
    }
}

var items=["brand", "location", "lunch", "price"]