// Code your solution here
function findMatching(drivers, searchName){
    if (!searchName) {
        return [];
    }

    const loweredSearchName = searchName.toLowerCase();  //convert search name
    const loweredDrivers = drivers.map(driver => driver.toLowerCase());

    const matchingDrivers = loweredDrivers.filter(driver => driver == loweredSearchName)

    return matchingDrivers;
}

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(findMatching(drivers, "Bobby"));