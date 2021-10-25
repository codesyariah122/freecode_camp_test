// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
    let findName = contacts.find(n => n.firstName == name)


    if(findName){
        let checkProp = findName.hasOwnProperty(prop)
       // let checkProp = prop in findName
        let result = checkProp ? findName[prop] : 'No such property'
        console.log(result)
    }else{
        console.log("No such contact")
    }
  // Only change code above this line
}

// lookUpProfile("Kristian", "lastName");
// lookUpProfile("Sherlock", "likes")
// lookUpProfile("Harry", "likes")
lookUpProfile("Bob", "number")
// lookUpProfile("Bob", "potato")
// lookUpProfile("Akira", "address")