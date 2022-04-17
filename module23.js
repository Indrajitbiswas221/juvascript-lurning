// //conastant variable video 2
// const hubby='Eleas kanchon';
// //hubby='Omersany';
// console.log(hubby);

// const number=[20, 23, 25, 45];
// number[1]=77;
// console.log(number);
// number.push(33);
// console.log(number);
// //number=['eleaskanchon', 'Omershani', 'Agun'];
// console.log(number);

// const nayok={name:'Nayok', phone:'01776279653'};
// console.log(nayok);

// let presentName='rahim';
// console.log(presentName);
// presentName='korim';
// console.log(presentName);

// let sum=0;
// for(let i=0; i<10; i++){
//     sum=sum+i;
// }
// console.log(sum);

// //video 03;
// //back up variable
// function addNumber(number1, number2=0){
    
//     // if(number2==undefined){
//     //    number2=0;
//     // }
//     //number2=number2 || 0;
//     return number1+number2;
// }
// const result=addNumber(20, 70);
// console.log(result);
// //video 04 template
// const first='Indrajit';
// const last='Biswas';
// const name=first+' '+last+' is a good boy.';
// const name2=`${first} ${last} is a good boy.`;
// console.log(name);
// console.log(name2);

// const multiline='I love you life\n'
// +'I want to enjoy my life\n'
// +'If janmantor is true\n'
// +'i want to a man again and again\n';
// console.log(multiline);

// const multiline2=`I love you life
// I want to enjoy my life
// If janmantor is true
// i want to a man again and again`;
// console.log(multiline);

//video 05 arrow function
// 

// const doublet =num=>num*2;
// const result=doublet(55);
// console.log(result);

// const addNumber=(num1, num2)=>num1+num2;
// const result1=addNumber(12, 34);
// console.log(result1);

// const giv=()=>5;
// const rresult2=giv();
// console.log(rresult2);

// const bigFunction=(x, y)=>{
//     const sum=x+y;
//     const different=x-y;
//     const result=sum*different;
//     return result;
// }
// const result3=bigFunction(20, 10);
// console.log(result3);

//video 06 thiree doot
// const age=[23, 24, 35, 66, 77];
// const age1=[12, 14, 32,65];
// const age2=[16, 17, 18, 19, 20];
// const allAge=age.concat(age1).concat(age2);
// console.log(allAge);
// const alAge2=[...age, ...age1, ...age2];
// console.log(alAge2);
// const bisness=234;
// const minister=342;
// const socib=132;
// const result4=Math.max(bisness, minister, socib);
// console.log(result4);
// const number=[12, 23, 43, 53,65];
// const result=Math.max(...number);
// console.log(result);

//video 07 class
// class student{
//     constructor(sId, sName){
//         this.id=sId;
//         this.name=sName;
//         this.school='Kalkalia gc high school';
//     }
// }
// const student1=new student(2, 'Indrajit');
// const student2=new student(1, 'sukanta');
// console.log(student1.name, student2.id);

//video 08 
// class parent{
//     constructor(){
//         this.parent='swatchzeneger';
//     }
// }
// class Child extends parent{
//     constructor(baby){
//         super();
//         this.name=baby;
//     }
//     getFullName(){
//         return this.name+ ' '+this.parent;
//     }
// }
// const baby1=new Child('Anour');
// const baby2=new Child('A');
// console.log(baby1.getFullName());
// console.log(baby2.getFullName());

//video 09 de structure
const person={name:'juck Willam', age:17, job:'facebooking', gfName:'ema jackson', phone:01711221122, friends:['Tom backs', 'tom hance', 'juckson']};

console.log(person.gfName);
const gfName=person.gfName;
const {phone, job}=person;
console.log(gfName, phone, job);

const friend=['amirkhan', 'salmankjan', 'sharuk khan', 'asakhan', 'jhonkar khan'];
const[first, tumi, ...aginFriend]=friend;
console.log(first);
console.log(tumi);
console.log(aginFriend);

const complexoubject={
    name:'abc',
    info:{
        bagen:'kala bagan',
        ledder:'tiger ledder'
    }
};
const {bagen}=complexoubject.info;
console.log(bagen);