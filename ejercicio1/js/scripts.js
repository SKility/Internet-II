var listelements={
    listall:function(){
        for(var i=0;i<listusers.items.length;i++){
            $("#table-body").append(listelements.assamble(this.items[i]));
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
        listelements.items=items
    },
    log:function(item){
        console.log(this.items[item]);
    },

    function: listByPrice(price){
        for(var i=0;listelements.items.length>i;i++){
            if(listelements.items[i].price<price){
                listelements.assamble(listelements.items[i]);
              $("#table-body").append(listelements.assamble(listelements.items[i]));
            }
              
        }
    }
    listelements.setitems(elementsList)

function asd(){
    listelements.setusers(elementsList);
    listelements.listall();    
}
$("#action4").on("click",function(){
    var price= $("#price").val();
    listelements.listByPrice(price);
})

    
   
}


