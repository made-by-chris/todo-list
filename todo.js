console.log("yep you connected js ")
// VARIABLE - is something that varies (changes)
// CRUD 
// adding / checking / updating / deleting things in an array. (CRUD)
//                0        1         2
const myList = ["apple", "banana", "coffee"]
const inputEl = document.querySelector("#user-text-input-element")
console.log(inputEl)


// LISTEN / PAY ATTENTION / OBSERVER / WAIT 
// DOM NODE 
// addEventListener(event type, function) <-- signature
inputEl.addEventListener("keyup", function(e){
    if(e.key === "x") {
        console.log(inputEl.value)
    }
})

// inputEl.addEventListener("keydown", (e)=>console.log(e.type))
// inputEl.addEventListener("keypress", (e)=>console.log(e.type))
// inputEl.addEventListener("keyup", (e)=>console.log(e.type))

// user does something
// we listen in javascript to that action 
// we respond to the action 
// we give the user feedack 

// CREATE
// unshift
// myList.unshift("spaghetti")


// READ
// create HTML, adding to the DOM (the page)


// UPDATE
// myList[userClickIndex] = inputField.value


// DELETE
// myList.splice(i,1)