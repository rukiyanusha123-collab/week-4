let students=[
    {name:"Nus Ha",mark:100},
    {name:"Aksa", mark:100},
    {name:"Rahul",mark:35},
    {name:"Sara", mark:48},
    {name:"Joel", mark:67},
    {name:"peter", mark:30},
    {name:"Antony", mark:58},
    {name:"John", mark:72},
]
let studentsPassed=students.filter(student => student.mark > 45);
console.log(studentsPassed);