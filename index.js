const { objectContaining } = require("expect");

// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, element){
 return array.filter( name => name.toLowerCase() === element.toLowerCase())
}

function fuzzyMatch (array, element) {
    function newArray(name) {
        return name.substring(0, element.length) === element.substring(0,element.length)
    }
    return array.filter(newArray)
    // return array.filter(name => name.substring(0,element.length) === element.substring(0,element.length))
}






function  matchName(array, string) {
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];


    let newArray = array.filter(function(element){
    return element.name === string;
    });

    return newArray;
}
    
    



