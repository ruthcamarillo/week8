var tomh = 9
var tomw = 8
var jerryh = 10
var jerryw = 45
// here are our variable we will call on to complete our equation
//Part 2//

const tomBmi = bmi(tomw, tomh)

const jerryBmi = bmi(jerryw, jerryh)

//setting up what bmi is going to be for tom and jerry

function bmi(weight, height) {
    return (weight / height / height) * 703
}
// our function

//Part 3//
console.log(tomBmi)
console.log(jerryBmi)
const tomBmiHigherThanjerryBmi = tomBmi > jerryBmi
console.log(tomBmiHigherThanjerryBmi)

// the console log knows what the bmi is because we set up the information ^^


//Part 4 //
console.log('is Toms BMI higher than Jerrys? ' + tomBmiHigherThanjerryBmi)

// string concatinated with the function result