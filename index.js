// Code your solution here
function findMatching(drivers, searchName){

    const loweredSearchName = searchName.toLowerCase();  //convert search name

    const matchingDrivers = drivers.filter(
        (driver) =>  driver.toLowerCase() == loweredSearchName
        )

    return matchingDrivers;
}

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(findMatching(drivers, "Sammy"));

function fuzzyMatch(params) {
    
}