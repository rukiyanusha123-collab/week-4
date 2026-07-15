
let ar1 = [
    "Japan",
    "Nihongo",
    123000000,
    ["Megacityhub", "VendingMachines", "BulletTrains", "CulturalExport"]
];

let [country, language, population, [feature1, feature2, feature3, feature4]] = ar1;

console.log(country);
console.log(language);
console.log(population);
console.log(feature1);
console.log(feature2);
console.log(feature3);
console.log(feature4);


// Object Destructuring

let ar6 = {
    country2: "Malaysia",
    language2: "Bahasa Melayu",
    population2: "3,64,00,000",
    uniqueFeatures: {
        ar7: "DividedLand",
        ar8: "IconicSkyLine",
        ar9: "AncientRainForest",
        ar10: "RotatingMonarchy"
    }
};

let {
    country2,
    language2,
    population2,
    uniqueFeatures: { ar7, ar8, ar9, ar10 }
} = ar6;

console.log(country2);
console.log(language2);
console.log(population2);
console.log(ar7);
console.log(ar8);
console.log(ar9);
console.log(ar10);

let arr1=[10,20,30];
let arr2=[40,50,60];
let arr3=[7,    ...arr1,...arr2, 70];
console.log(arr2);

let obj1={
    country:"india",

}
let obj2={
    language:"Hindi",

}
let obj3={
    pops:200000,
}

let obj4={...obj1,...obj2,...obj3};

console.log(obj4);

/////////////////////////////////
let student={
    name:"aksa",
    age:19,
    address:{
        city:"Muvatupuzha",
        place:"Mangalthunada"
    },
     scores:{
        english:100,
        maths:95,
        physics:93,
        chemistry:96,
    }
   
}
let{
    name,
    age,
    address:{city,place},
    scores:{english,maths,physics,chemistry}
}=student;

console.log(name);
console.log(age);
console.log(city);
console.log(place);
console.log(english);
console.log(maths);
console.log(physics);
console.log(chemistry);