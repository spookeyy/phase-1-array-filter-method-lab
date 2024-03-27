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

function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }

  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }