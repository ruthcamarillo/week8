

let num = prompt("Choose a number 1-12");
//not const cuz cant change variable
// const months [January, Febuary, March, April, May, June, July, August, September, October, November, December]


// function whatMonth ()
if (num >= 1 && num <= 12) {
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // return months;
    console.log(months[num - 1]);
}

else {
    (alert("Not valid"))

    // console.log("this is not a valid input. Please enter a num betweeen 1 & 12 )

    console.log(alert);
}

// var months1 = (4)
// var months =[January,]
// console.log(months[months1-1]);


