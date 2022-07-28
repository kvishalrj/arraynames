let country=[{name:"India",
capital:"New Delhi",
population:10000},

{name:"China",
capital:"Xim",
population:15000},

{name:"USA",
capital:"Washington DC",
population:8000},

{name:"Bangladesh",
capital:"Dhaka",
population:5000},

{name:"Japan",
capital:"Tokyo",
population:1500}];

for(let a=0;a<country.length;a++)
{
    if(country[a].population<2000)
    {
        console.log(country[a].name);
    }
}


