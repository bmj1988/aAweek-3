// object initialization
let truk = {};
truk["color"]= "blue";
truk["seats"]= "bench";
truk["motor"]="7.3L";

"color" in truk;
"motor" in truk;

truk.start = function () {
    console.log("chuggachuggachugga");
}

// Object.keys(objectname) returns a list of keys in an array
// Object.values(objectname) returns a list of values in an array;
// Object.entries(objectname) returns keys and values in 2D arrays where each element of the array is a key and its corresponding value
