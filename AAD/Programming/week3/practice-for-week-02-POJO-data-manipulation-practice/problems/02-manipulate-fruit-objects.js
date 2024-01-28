/**************DO NOT MODIFY THIS LINE BELOW*****************/
const fruits = require('../fruit-data');
const { reduce } = require('./01-fruit-data-structure');

/* 07. `addKeyAndValueToAll()` - Return the fruits array, adding the given key and
value to each fruit object

console.log(addKeyAndValueToAll(fruits, "inStock", true));
// returns array of 31 fruits, and each fruit object includes "inStock: true"
*/

function addKeyAndValueToAll(array, key, value) {
    array.forEach(obj => obj[key] = value);
    return array;
}

/* 08. `addKeyAndValueToOne()` - Return object at the given index array, adding the given key and
value to that fruit object

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"
*/

function addKeyAndValueToOne(array, key, value, index) {
    let obj = array[index];
    obj[key]=value;
    return obj;
}

/* 09. `updateKeyName()` - Change the old key name to the new key name in all
objects, and return the resulting array.
HINT: Can you make a copy of the old key and value, and then delete the original?

console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"
*/

function updateKeyName(array, oldKey, newKey) {
    // use destructure syntax to name oldKey as newKey, use rest syntax to save all values from oldKey;
    const modified = array.map((obj) => {
        const value = obj[oldKey];
        obj[newKey] = value;
        delete obj[oldKey]
        return obj;
    })
    return modified;
}
/* 10. `updateIdValues()` - Change all of the "id" values to six-character
strings, and return an array of all of the new id values.
For example: 1 becomes "000001", and 31 becomes "000031"

console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:
// [ '000006', '000035', '000001', '000064', '000033', '000009', '000060',
    '000068', '000069', '000047', '000072', '000037', '000066', '000026',
    '000044', '000065', '000067', '000027', '000041', '000002', '000042',
    '000070', '000004', '000052', '000010', '000071', '000023', '000003',
    '000005', '000073', '000025' ];
*/

function updateIdValues(array) {
    retArr = [];
    const mod = array.map((obj) => {
        let idNum = obj.id;
        console.log(idNum);
        let splitID = idNum.toString().split('');
        while (splitID.length < 6) {
            splitID.unshift('0');
        }
        let numID = splitID.join('');
        obj.id = numID;
    })
    array.forEach(obj1 => retArr.push(obj1.id));
    return (retArr);
}

/* 11. `deleteKeysandValues()` - Delete the keyToDelete from the nutritions
object from every fruit, and return the array.

console.log(deleteKeysAndValues(fruits, "sugar"));
// returns fruits array, but every "nutritions" key no longer has a "sugar" key
*/

function deleteKeysAndValues(array, keyToDelete) {
    array.forEach(obj => delete obj["nutritions"][keyToDelete]);
    return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ addKeyAndValueToAll, addKeyAndValueToOne, updateKeyName, updateIdValues, deleteKeysAndValues ];
