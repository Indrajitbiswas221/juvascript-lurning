//inchi to fut convartion 
// var inch=155;
// var feet=inch/12;
// console.log(feet);
// function inchToFeet(inch){
//     var feet=inch/12;
//     return feet;
// }
// var nanafeet=inchToFeet(234);
// var nanifeet=inchToFeet(264);
// console.log(nanafeet, nanifeet);

//video3
// var name='Javed akbar';
// if(name.length<5){
//     name='javed'
// }
// console.log(name);

//video 04 Leap Year
// var year=2024;
// const reminder=year%4;
// if(reminder==0){
//     console.log(year, ": This Year ias leap Year");
// }else{
//     console.log(year, ": This Year is Not A Leap Year");
// }

// function leapYear(year){
//     var reminder=year%4;
//     if(reminder==0){
//         console.log(year,': This Year Is Leap Year');
//     }else{
//         console.log(year,': This Year Is Not a Leap Year');
//     }
// }
// leapYear(2022);

// function leapYear(year){
//     var reminder=year%400;
//     if(reminder==0){
//         if(year%4==0){
//             console.log(year,': This Year Is a Leap Year');
//         }
//     }else{
//         console.log(year,': This Year Is Not a Leap Year');
//     }
// }
// leapYear(1600);

//Factorial video 05

// var factorial=1;
// for(i=1; i<10; i++){
//     factorial=factorial*i;
//     console.log(i, factorial);
// }

// function factorial(number){
//     var factorial=1;
//     if(number==0){
//         console.log(number, 1);
//     }else{
//         for(i=1; i<=number; i++){
//             factorial=factorial*i;
//             console.log(i, factorial)
//         }
//     }

// }
// factorial(10);

//video 06 factorial with while loop

//  var i=1;
//  var factorial=1;
//  while(i<=10){
//      factorial=factorial*i;
//      console.log(factorial);
//      i++;
//  }
// function factorial(n){
//     var factorial=1;
//     i=1;
//     if(n==0){
//         return 1;
//     }else{
//         while(i<=n){
//             factorial=factorial*i;
//             i++;
//         }
//         return factorial;
//     }
// }

// var result=factorial(10);
// console.log(result);
// function factorial(n){
//     if(n==0){
//         return 1;
//     }else{
        
//         return n*factorial(n-1);
        
//     }
// }
// var result=factorial(5);
// console.log(result);
//fibonassi serise

// var fibo=[0, 1];
// for(var i=2; i<=10; i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);
// function fiboNacci(n){
//     var fibo=[0,1];
//     if(n==0){
//         console.log(0);
//     }else if(n==1){
//         console.log(0, 1);
//     }else{
//         for(i==2; i<=n; i++){
//             fibo[i]=fiboNacci[i-1]+fiboNacci[i-2];
//             console.log(fibo);
//         }
        
//     }
// }
// fiboNacci(10);

// function fiboNacci(n){
//     if(n==0){
//         return [0];
//     }else if(n==1){
//         return [0, 1];
//     }else{
//         var fibo=fiboNacci(n-1);
//         var nextElement=fibo[n-1]+fibo[n-2];
//         fibo.push(nextElement);
//         return fibo;
        
//     }
// }
// var result=fiboNacci(10);
// console.log(result);

//calculate prime number
function primeNumber(n){
    for(i=2; i<n; i++){
        if(n%i==0){
            return 'your Number not a prime number';
        }
        return 'your number is a prime number';
    }
}

var result=primeNumber(7);
console.log(result);