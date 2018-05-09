var listusers={
    listall:function(users){
       for(var i=0;i<listusers.users.length;i++){
           console.log(listusers.assamble(listusers.users[i]));
       }
    },
    assamble:function(user){
        return "el usuario" + user.name + " vive en" + user.city + " y tiene " + user.age + " años." 
    },
    listbyagelimit:function(users,age){
        for(var i=0;i<users.length;i++){
           if(users[i].age<age){
               console.log(listusers.assamble(listusers.users[i]));
            } 
        }
    } 
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

listusers.listall(user)
