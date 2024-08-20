"use strict"
let numberOfSeries = +prompt(" Nechta o'yin ko'rdingiz? " ,"")
// console.log(numberOfSeries);

let serisDB = {
    count: numberOfSeries,
    series:{},
    actors:{},
    genres:[],
    private: false,
}
let serialName = prompt("Ohrgi ko'rgan serialingiz?");
let serialRate = +prompt("Nechi baxo berasiz?");
serisDB.series[serialName] = serialRate;
console.log(serisDB);
// console.log(serisDB.series.rate);
