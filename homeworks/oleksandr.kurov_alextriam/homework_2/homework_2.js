(function () {

    console.log('*************************************************************************');
//task #1,2

    var array1=[];
    var z;

    for (var i=0; i<100; i++){
        z=Math.round(Math.random()*100);
        //console.log(z);
        array1.push(z);
    }
console.log("Array1: ", array1);

//task #3

    function compareNumbers(a, b) {
        return a - b;
    }
    array1.sort(compareNumbers);

    console.log("Array1 - sorted : ", array1);

    function findMinMax (arrayToFind, minMax) {

        if (minMax=="max") {
        return Math.max.apply(null, arrayToFind);
        }
        if (minMax=="min"){
            return Math.min.apply(null, arrayToFind);
    }
    }
    var resultMax = findMinMax(array1, 'max');
    var resultMin = findMinMax(array1, 'min');
   // console.log (Math.max.apply(null, array1));
    console.log(resultMax); // 12

    console.log(resultMin); // -6

// task #4






/*
 //Exsampes
     var firstVar;

    var secondVar = 'Text string';

    var boolVar = true;

    firstVar = 15;

    console.log(firstVar);

    console.log(secondVar);

    console.log(boolVar);

    firstVar = 'String instead of number in the same variable';

    console.log(firstVar + ' (Length : ' + firstVar.length + ')');

    console.log('*************************************************************************');

    var arr1 = [5, 22, 2, 7, 17];

    console.log(arr1.toString());

    console.log(arr1.sort());

    var obj = {

        '1' : 5,

        field2 : 'Green',

        field3 : {

            subField : ['a', 'b', 'c']

        },

        field4 : function () {

            console.log('hello');

        }

    };

    console.log(obj);

    console.log(obj.field3.subField);

    var objA = obj;

    objA.field1 = 'New value';

    objA['field2'] = 'Red';

    obj[1] = 10;

    console.log(obj);

    console.log(objA);

    var arr2 = objA.field3.subField;

    arr2[0] = 1;

    console.log(obj);

    console.log('*************************************************************************');

    console.log(arr1.sort(function (a, b){
        //
        if(a > b){

            return 1;

        }

        else{

            return -1;

        }

    }));

    console.log(arr1.sort(function (a, b){

        return a > b ? 1 : -1;

    }));


    function multiplyArguments (number1, number2) {

        return number1 * number2;

    }

    function multiplyArgumentsWider (number1, number2) {

        if(number1 > number2){

            number2 += 150;

        }

        return number1 * number2;

    }

    var funcVar = function () {

        console.log('Function set as value of the variable');

    };

    funcVar();

    console.log(multiplyArguments(5, 1));

    console.log(multiplyArgumentsWider(5, 1));


    console.log('*************************************************************************');

    var newArray = [];

    for(var i = 0; i <= 100; i++){

        if(i % 10 == 0){

            newArray.push(i);

        }

    }

    console.log(newArray);

    var n = 10;

    while(i <= 200){

        if(i % 10 == 0){

            newArray.push(n * i);

        }

        i++;

    }

    newArray.forEach(function (element, array) {

        console.log(element);

    });

    for(var key in objA){

        if(objA.hasOwnProperty(key)){

            console.log(key + ':' + objA[key]);

        }

    }




*/

})();