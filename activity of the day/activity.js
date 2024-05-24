/*let dayOfWeek = prompt("Enter your favorite day of the week: ").toLowerCase();

let theResponse;

switch (dayOfWeek) {
    case "monday":
        theResponse = "Ack!";
        break;
    case "tuesday":
        theResponse = "Taco day!";
        break;
    case "wednesday":
        theResponse = "Halfway there!";
        break;
    case "thursday":
        theResponse = "It's the new Friday!";
        break;
    case "friday":
        theResponse = "TGIF! Yeah!";
        break;
    case "saturday":
        theResponse = "What a day!";
        break;
    case "sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven't heard of that one!";
        break;
}

alert(theResponse);
*/

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");
let thingToDo = document.getElementById("thingToDo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();
//d.setDate(11);

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // todo: find out the day of the week.
    let dayOfWeek = d.getDay();

    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
    let youShould;

    // todo: output the value of youShould into the thingToDo div

    switch (dayOfWeek) {
        case 0:
            youShould = "Read a book.";
            break;
        case 1:
            youShould = "Catch up on some work.";
            break;
        case 2:
            youShould = "Meet with friends or family.";
            break;
        case 3:
            youShould = "Sit by the pool and soak in some sun.";
            break;
        case 4:
            youShould = "Get some exercise!";
            break;
        case 5:
            youShould = "Go shopping!";
            break;
        case 6:
            youShould = "Self care day. Indulge in your hair wash and skin care routine.";
            break;
        default: "Error";
            break;
    }
    thingToDo.innerHTML = youShould;
}

