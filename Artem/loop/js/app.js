/** Data */

var object = {
    name: 'Artem',
    city: 'Vinnitsa',
    zip: '21022'
};

var array = [
    {
        name: 'Artem',
        city: 'Vinnitsa',
        zip: '21022'
    },
    {
        name: 'Ivan',
        city: 'Vinnitsa',
        zip: '041111'
    },
    {
        name: 'Alex',
        city: 'Vinnitsa',
        zip: '050333'
    }
];


/** -------------
 *  jquery each
 * -------------*/

console.log("\n\n----- jquery each: object -----");
try {
    $.each(object, function (index, value) {
        console.log("index: " + index + "\t\t|\tvalue: " + value);
    });
} catch (e) {
    console.error(e);
}


console.log("\n\n----- jquery each: array -----");
try {
    $.each(array, function (index, object) {
        console.log("index: " + index + "\t\t|\tobject: " + JSON.stringify(object));
    });
} catch (e) {
    console.error(e);
}


/** -------------
 *      every
 * -------------*/


console.log("\n\n----- every: object -----");
try {
    object.every(function (value, index) {
        console.log("index: " + index + "\t\t|\tvalue: " + value);
    });
} catch (e) {
    console.error(e);
}


console.log("\n\n----- every: array  -----");
try {
    array.every(function (object, index) {
        console.log("index: " + index + "\t\t|\tobject: " + JSON.stringify(object));
    });
} catch (e) {
    console.error(e);
}


/** -------------
 *      forEach
 * -------------*/


console.log("\n\n----- forEach: object -----");
try {
    object.forEach(function (value, index) {
        console.log("index: " + index + "\t\t|\tvalue: " + value);
    });
} catch (e) {
    console.error(e);
}


console.log("\n\n----- forEach: array  -----");
try {
    array.forEach(function (object, index) {
        console.log("index: " + index + "\t\t|\tobject: " + JSON.stringify(object));
    });
} catch (e) {
    console.error(e);
}


/** -------------
 *      for
 * -------------*/


console.log("\n\n----- for: object -----");
try {
    for (var key in object) {
        console.log("index: " + key + "\t\t|\tvalue: " + object[key]);
    }
} catch (e) {
    console.error(e);
}


console.log("\n\n----- for: array -----");
try {
    for (var index in array) {
        console.log("index: " + index + "\t\t|\tvalue: " + JSON.stringify(array[index]));
    }
} catch (e) {
    console.error(e);
}