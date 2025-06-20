// let age = 17;
// let hasID = false;

// if(age >= 18 && hasID === true){
//     console.log("You can enter into the club.")
// }
// else if(age < 18 && hasID === true){
//     console.log("You can not enter into the club.")
// }
// else if(age >= 18 && hasID === false){
//     console.log("You can not enter into the club.")
// }
// else if(age < 18 && hasID === false){
//     console.log("You can not enter into the club.")
// }

// let loggedIn = 0;
// let hasMembership = 0;

// let str = loggedIn && hasMembership ? "Show video" : "Don't show video";

// console.log(str);

// let counter = 1;

// while (counter <= 20){
//     console.log(counter);
//     counter = counter + 1;
// };

// console.log("while loop has been finished running.")

// for(let i=1; i<=15; i++){
//     if(i%5===0){
//         console.log(`${i} - ASAP Frontend`)
//     }
//     else if(i%2 === 1 ){
//     console.log(`${i} - ASAP`);
//     }
//     else{
//         console.log(`${i} - Frontend`)
//     }
// }


let str = "JYOTI";

for(let i=str.length-1; i>=0; i--){
    console.log(str[i]);
}

// function convertUsdtoAud(dollar){
//     return dollar * 1.5 ;
// }

// console.log(convertUsdtoAud(500));

//arrow function
// const convertUsdtoAud = (dollar) => {
//     return dollar * 1.5;
// }

// console.log(convertUsdtoAud(1000))

// let array = [20, 15, 10, 30];

// let filteredarray = array.filter((element) => {
//     console.log(element);
//     if(element <= 15){
//     return true;
//     }
// });
// console.log(filteredarray);

// let ary = [10, 15, 20, 12, 30];
// let filteredary = ary.filter(element => {
//     return element <=15;
// });
// console.log(filteredary);

// let a = [8, 10, 20, 15, 30];
// let filtereda = a.filter(element => element<=15);
// console.log(filtereda);

// let people = [18, 20, 16, 15, 21];

// let adult = [];

// for(let i=0; i<people.length; i++){
//     if(people[i]>=18){
//         adult.push(people[i])
//     }
// }
// console.log(adult);

let usDollar = [10, 20, 30, 40];

let auDollar = usDollar.map(element => element*1.5);

console.log(auDollar);

let usD = [100, 150, 35];

let newAUD = [];

for(i=0;i<usD.length;i++){
    newAUD.push(usD[i]*1.5);
};
console.log(newAUD);

//Objects

let user = {
    email: "shubh.mishra130@gmail.com",
    name: "Shubham Mishra",
    age: 32,
    Gender: "Male"
};

console.log(user.email,",",user.name,user.name[0]);

let user1 = [{
    email: "shubh.mishra130@gmail.com",
    name: "Shubham Mishra",
    age: 32,
    Gender: "Male",
    Marks: [10,9.8,8,9,7,6,5]
},
{
    email: "jyodidwivedisstc@gmail.com",
    firstname: "Jyoti",
    lastname: "Mishra",
    age: 29,
    Gender: "Female",
    Marks: []
}
];

let newMarks = user1[1].Marks;

for(i=0;i<user1[0].Marks.length;i++){
    newMarks.push(user1[0].Marks[i]*2);
};

console.log(user1[1].Marks[user1[1].Marks.length-2]);
console.log(user1[1].firstname[0],user1[1].lastname[0]);