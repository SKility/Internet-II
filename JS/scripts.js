var listusers={
    listall:function(){
       for(var i=0;i<listusers.users.length;i++){
           $("#usersTable tbody").append(listusers.assamble(listusers.users[i]));
       }
    },
    assamble:function(user){
       return "<tr>"
        +"<td>"+user.Name+"</td>"
        +"<td>"+user.email+"</td>"
        +"<td>"+user.country+"</td>"
        +"<td>"+user.profile+"</td>"
        +"<td>"+user.age+"</td>"
        +"<td>"+user.salary+"</td>"
        +"</tr>";
    },
    listbyage:function(){
        for(listusers.assamble(listusers.users[i]);listusers.users.length;i++){
           if(users[i].age<age){
               console.log(listusers.assamble(listusers.users[i]));
            } 
        }
    
    } ,
    

    users:[],
    setusers:function(users){
    listusers.users=users
    },
}

var user=[{
    name:"ElWe",
    lastname:"Weon",
    city:"LaWea",
    age:97,
},
    {
    name:"Pipo",
    lastname:"Pepon",
    city:"Rosario",
    age:56,
    },
    {
    name:"Pipo",
    lastname:"Pepon",
    city:"Rosario",
    age:56,
    },
    {
    name:"Pipo",
    lastname:"Pepon",
    city:"Rosario",
    age:56,
    }
]

function toggleClass(){
    if($("h1").hasClass("active")){
        $("h1").removeClass("active")
        $("h1").addClass("disabled");
    }else{
        $("h1").removeClass("disabled")
        $("h1").addClass("active");
    }
}



