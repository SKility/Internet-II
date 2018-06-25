
var listelements={  
    items:[],    
    setusers:function(data){ 
        listelements.items=data;  
    },
listall:function(){
    for(var i = 0; i < listelements.items.length;i++){  
        $("#table-body").append(listelements.assamble(listelements.items[i]));
   };
},
assamble:function(item){ 
    return '<div class="row">'+  
    '<span class="col-2">'+'</span>' +
    '<span class="col-2">'+ item.brand + '</span>' +   
    '<span class="col-2">'+ item.location+'</span>' +
    '<span class="col-2">'+ item.lunch+'</span>' +
    '<span class="col-2">'+ item.price+'</span>' +
    '<span class="col-2">'+'</span>' +
    '<span class="description col-12">'+'</span>' +
  '</div>'
},

listByPrice: function(price){   
    clear();
    for(var i=0 ; listelements.items.length>i;i++){
        if(listelements.items[i].price < price){  
            listelements.assamble(listelements.items[i]); // Va a llamar a los usuarios que cumplan la misma condicion.
          $("#table-body").append(listelements.assamble(listelements.items[i]));
        }
     }
},

listByBrand: function(brand){   
    clear();
    for(var i=0 ; listelements.items.length>i;i++){
        if(listelements.items[i].brand == brand){  
            listelements.assamble(listelements.items[i]); 
          $("#table-body").append(listelements.assamble(listelements.items[i]));
        }
     }
},

listByLocation: function(location){   
    clear();
    for(var i=0 ; listelements.items.length>i;i++){
        if(listelements.items[i].location == location){  
            listelements.assamble(listelements.items[i]); 
          $("#table-body").append(listelements.assamble(listelements.items[i]));
        }
     }
},

listByLaunch: function(launch){   
    clear();
    for(var i=0 ; listelements.items.length>i;i++){
        if(listelements.items[i].lunch == launch){  
            listelements.assamble(listelements.items[i]); 
          $("#table-body").append(listelements.assamble(listelements.items[i]));
        }
     }
},
    
};



$("#action4").on("click",function(){  
    var price= $("#price").val();
    listelements.listByPrice(price);
    });

$("#action1").on("click",function(){  
    var brand= $("#brand").val();
    listelements.listByBrand(brand);
     });

$("#action2").on("click",function(){  
    var location= $("#location").val();
    listelements.listByLocation(location);
        });

$("#action3").on("click",function(){  
    var launch= $("#launch").val();
    listelements.listByLaunch(launch);
     });
        
    
    // Cuando se haga click en el id especificado, se le va a dar un valor a price 
    // y se lo va a convertir en el valor del argumento de listByPrice.


// Clear 
function clear(){
    $("#table-body").html("")}

function refresh(){  
        listelements.setusers(elementsList);
        listelements.listall()}
    


listelements.setusers(elementsList)
listelements.listall() 



