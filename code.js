/* /* We will be creating a project that allows users to browse items and add
them to a shopping cart. You may use any theme you want. This project will
be revisited several times (adding UI layer, advanced sorting methods) so
pick something you’re happy with. We will
Create a list of at least 20 items to sell
Filter what products are shown with button clicks (clicks added later!)
Allow users to add to a cart
Remove Items from cart
Provide users a total for their purchase
*Later
All items shown and filtered on screen
Shopping cart with add/remove buttons and total order price */

/* 
THEME: Schools  */


function SuperDuperLuxuriousElonHuskyStore() {
    const items = [
        {
            name: "MIT",
            tuition: 67140,
            students: 12000,
            location: "Cambridge",
            type: "Private"
        }, //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGfOevxFXhb0g1zGKIzTGZXtG-WGF7pzt0TPU6SgUVQ&s=10
        {
            name: "Harvard",
            tuition: 68440,
            students: 25000,
            location: "Cambridge",
            type: "Ivy"
        },
        {
            name: "Stanford",
            tuition: 68570,
            students: 7346,
            location: "Stanford",
            type: "Private"
        },
        {
            name: "Cornell",
            tuition: 71000,
            students: 26000,
            location: "Ithaca",
            type: "Ivy"
        },
        {
            name: "UCBerkeley",
            tuition: 57000,
            students: 46000,
            location: "Berkeley",
            type: "Public"
        },
        {
            name: "Princeton",
            tuition: 68450,
            students: 9200,
            location: "Princeton",
            type: "Ivy"
        },
        {
            name: "Columbia",
            tuition: 71845,
            students: 35000,
            location: "NYC",
            type: "Ivy"
        },
        {
            name: "Caltech",
            tuition: 71230,
            students: 13600,
            location: "Pasadena",
            type: "Private"
        },
        {
            name: "UPENN",
            tuition: 73980,
            students: 29000,
            location: "Philadelphia",
            type: "Ivy"
        },
        {
            name: "Yale",
            tuition: 72500,
            students: 15000,
            location: "New Haven",
            type: "Ivy"
        },
        {
            name: "DukeUNI",
            tuition: 76350,
            students: 18000,
            location: "Durham",
            type: "Private"
        },
        {
            name: "JohnHopkinsUNI",
            tuition: 69170,
            students: 33000,
            location: "Baltimore",
            type: "Private"
        },
        {
            name: "ChicagoUNI",
            tuition: 71850,
            students: 19000,
            location: "Chicago",
            type: "Private"
        },
        {
            name: "NorthWestUNI",
            tuition: 73060,
            students: 24000,
            location: "Evanston",
            type: "Private"
        },
        {
            name: "Dartmouth",
            tuition: 72390,
            students: 7000,
            location: "Hanover",
            type: "Ivy"
        },
        {
            name: "CarnegieMellon",
            tuition: 65000,
            students: 16000,
            location: "Pittsburgh",
            type: "Private"
        },
        {
            name: "BrownUNI",
            tuition: 71000,
            students: 11000,
            location: "Providence",
            type: "Ivy"
        },
        {
            name: "RiceUNI",
            tuition: 63000,
            students: 9000,
            location: "Houston",
            type: "Private"
        },
        {
            name: "VanderbiltUNI",
            tuition: 67000,
            students: 14000,
            location: "Nashville",
            type: "Private"
        },
        {
            name: "UCLA",
            tuition: 56000,
            students: 49000,
            location: "Los Angeles",
            type: "Public"
        },
        {
            name: "NotreDame",
            tuition: 67000,
            students: 13000,
            location: "Notre Dame",
            type: "Private"
        },
        {
            name: "UVA",
            tuition: 65220,
            students: 27000,
            location: "Charlottesville",
            type: "Public"
        },
        {
            name: "UNC",
            tuition: 49600,
            students: 32000,
            location: "Chapel Hill",
            type: "Public"
        },
        {
            name: "GeorgiaTech",
            tuition: 36120,
            students: 53000,
            location: "Atlanta",
            type: "Public"
        }
    ];


    return items;
}

const universities = SuperDuperLuxuriousElonHuskyStore();
console.log (universities[0].name)
console.log(universities[0].location);


/* cart["university"] = { shoes: { name: "Shoes", price: 80, qty: 1}};

function addToCart(item) {
    if(cart[item.name]) {
        cart[item.name].qty++;
    } else {
        cart[item.name] = item;
    }
}
addToCart({ name: "Shoes", price: 80, aty: 1 });
console.log(cart); */

















/* function multipleChoice(n, correct, response){
    grade = 0
    for(let i = 0; i <correct.length; i++){
        if(correct[i] === response[i]){
            grade++;
        }
    }
    return grade;
}

multipleChoice(3,"CAB","BCE");



function notCovid(n, rate, target) {
    let day = 0;
    let infected = 0;
    while(infected<= target) {
        day++;
        infected = infected + infected * rate;
    }
    return (infected);
    }
} */