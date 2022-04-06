// var a=5;
// var b=7;
// console.log('before sowap: a=', a, 'b=', b);
// var temp=a;
// a=b;
// b=temp;
// console.log('before sowap: a=', a, 'b=', b);

// var x=12;
// var y=10;
// console.log('before sowap: x=', x, 'y=', y);
// x=x+y;
// y=x-y;
// x=x-y;
// console.log('before sowap: x=', x, 'y=', y);

// var p=9; 
// var q=8;
// console.log('before sowap: p=', p, 'q=', q);
// [p, q]=[q, p];
// console.log('before sowap: p=', p, 'q=', q);

//random number video 2
// var number =2.5;
// var result=Math.floor(number);
// console.log(result);
// var result2=Math.ceil(number);
// console.log(result2);
// var result4=Math.round(number);
// console.log(result4);
// var result3=Math.random();
// console.log(result3);

//max number inter fix
// var bisness =500;
// var Minister =420;
// if(bisness<Minister){
//     console.log('Minister is bigger ');
// }else{
//     console.log('bisness is bigger');
// }


// var sochib =550;
// var bisness =500;
// var Minister =620;
// if(bisness<Minister){
//     if(sochib<Minister){
//         console.log('Minister is bigger');
//     }
// }else if(bisness>sochib){
//     console.log('bisness is bigger');
// }else{
//     console.log('socib is bigger');
// }

// var sochib =550;
// var bisness =500;
// var Minister =620;
// var max=Math.max(sochib, bisness, Minister);
// console.log(max);

// var marks=[20, 30, 40, 50, 60, 70, 80];
// var max=[0];
// for(i=0; i<marks.length; i++){
//     var element=marks[i];
//     if(element>max){
//         max=element;
//     }
    
// }
// console.log('max number is:', max);

//sum all elements
// var number=[20, 30, 40, 50, 60, 70, 80];
// var sum=0;
// for(i=0; i<number.length; i++){
//     element=number[i];
//     sum=sum+element;
// }
// console.log(sum);

// function arraySume(array){
//     var sum=0;
//     for(i=0; i<array.length; i++){
//         element=array[i];
//         sum=sum+element;
//     }
//     console.log(sum); 
// }

// arraySume(number);
// var number =[1, 2, 2, 4, 7, 7, 8, 9, 9];
// var unikNumber=[];
// for(i=0; i<number.length; i++){
//     var element =number[i];
//     var indexnumber=unikNumber.indexOf(element);
//     if(indexnumber==-1){
//         unikNumber.push(element);
//     }
// }
// console.log(unikNumber);

//word counter 

// var speach ='My name  is indrajit. Iam a student.'
// var count =0;
// for(i=0; i<speach.length; i++){
//     var char=speach[i];
//     if(char==' ' && speach[i-1] !=' '){
//         count++;
//     }
// }count++;
// console.log(count);

//reverse function
// function reverseString(string){
//     var reverse='';
//     for(i=0; i<string.length; i++){
//         var char=string[i];
//         reverse=char+reverse;
//     }
//     return reverse;
// }

// var speach='My name is Indrajit. I am a student';
// var reverse=reverseString(speach);
// console.log(reverse);