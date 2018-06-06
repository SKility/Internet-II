var listusers={
    listall:function(){
        for(var i=0;i<listusers.items.length;i++){
            $("#table-body").append(listusers.assamble(this.items[i]));
       };
    },
    assamble:function(items){
        return '<div class="row">'+
        '<span class="col-2">'+'</span>' +
        '<span class="col-2">'+ items.brand + '</span>' +
        '<span class="col-2">'+ items.location+'</span>' +
        '<span class="col-2">'+ items.lunch+'</span>' +
        '<span class="col-2">'+ items.price+'</span>' +
        '<span class="col-2">'+'</span>' +
        '<span class="description col-12">'+'</span>' +
      '</div>'
    },
    items:[],
    setusers:function(items){
    listusers.items=items
    },
    log:function(item){
        console.log(this.items[item]);
    }
}

function asd(){
    listusers.setusers(elementsList);
    listusers.listall();
}

