//feet to mile convartion 0.000189394
function feetToMile(feet){
    var mile=feet*0.000189394;
    return mile;
}
var milecal=feetToMile(5000);
console.log(milecal);
//wood calculator
function woodCalculator(chair, table, bade){
    var totalChair=chair*1;
    var totalTable=table*3;
    var totalBade=bade*5;
    var totalWood=totalChair+totalTable+totalBade;
    return totalWood;
}

var calculatewood=woodCalculator(12, 6, 3);
console.log(calculatewood);
//brickCalculator
function brickCalculator(fleetnumber){
    if(fleetnumber<=10){
        var brick12=fleetnumber*15*1000;
        return brick12;
    }else if(fleetnumber<=20){
        var stap1=10*15*1000;
        var stap2=12*(fleetnumber-10)*12;
        var brick20=stap1+stap2;
        return brick20;

    }else{
        var stap3=10*15*1000;
        var stap4=10*12*1000;
        var step5=10*(fleetnumber-20)*10;
        var brick30=stap3+stap4+step5;
        return brick30;
    }
}

var result=brickCalculator(25);
console.log(result);
//find small name in a array
function tinyFriend(friendName){
    var tainiNam=friendName[0];
    for(var i=0; i<friendName.length; i++){
        var element=friendName[i];
        if(tainiNam.length>element.length){
            tainiNam=element;
        }
    }
    console.log(tainiNam);
}
var friendName=['indrajit', 'prosan', 'anup', 'hr', 's'];
tinyFriend(friendName);
