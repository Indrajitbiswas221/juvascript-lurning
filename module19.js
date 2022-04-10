//evenify function video 01
function eveniFy(number){
    if(number%2==0){
        console.log(number, ': is even number');
    }else{
        console.log(number, ': is odd number');

    }
}
eveniFy(201);

function evenifyAll(numbers){
    for( var i=0; i<numbers.length; i++){
        var element=numbers[i];
        eveniFy(element);
    }
}
var frendAge=[12, 23, 55, 44, 66, 88];
evenifyAll(frendAge);
//video 02
//get evenify number as a array
function eveniArray(number){
    var result;
    if(number%2==0){
        result=number;
    }else{
        result=number*2;
    }
    return result;
}
function evenifyAllArray(numbers){
    var evenify=[];
    for(var i=0; i<numbers.length; i++){
        var element=numbers[i];
        var evenifyNumber=eveniArray(element);
        evenify.push(evenifyNumber);
    }
    return evenify;
}
var evenifyarray=evenifyAllArray(frendAge);
console.log(evenifyarray);

//callback function
function explainCallbackFunction(name, age, task){
    console.log('hellow', name);
    console.log('Your age: ', age);
    task();
}
function washHand(){
    console.log('Wash hand width shoop');
}
function takeshoer(){
    console.log('Take sower');
}
function scrollfacebook(){
    console.log('Scroll facebook but dont lick post');
}

explainCallbackFunction('sumon', 24, washHand);
explainCallbackFunction('prosan', 22, takeshoer);
explainCallbackFunction('Indrajit', 28, scrollfacebook);

//video 03 argument
function addnumbers(number1, number2){

    return number1+number2;
}
var result =addnumbers(23, 44, 55);
console.log(result);

function addAnyNumber(x, y){
    var sum=0;
    for(var i=0; i<arguments.length; i++){
        var element=arguments[i];
        sum=sum+element;
    }
    console.log(sum);
}
addAnyNumber(20, 21, 55, 66);