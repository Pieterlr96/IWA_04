const Year = 2050
const occupation = 'student'
let count = 0

if (Year == 2050) {
    console.log( 'January,','New Year`s Day')
    console.log('March,', 'Human Rights Day')
    let date = 'April'
    console.log(date, 'Family Day')
    console.log(date, 'Freedom Day')
    count = count + 4;
   // console.log(count)//
}
if(occupation == 'student') {
    console.log ('June', 'Youth Day')
    count = count + 1; 
    console.log(count)
}	
console.log('August', 'Women’s Day')
console.log('September', 'Heritage Day')
date = 'December'
console.log(date, 'Day of Reconciliation')
count = count + 3
console.log(count)

 //'status' is deprecated.//

if (occupation == 'parent') {
    console.log(date, 'Christmas Day')
    count = count + 1
}
console.log(date, 'Day of Goodwill')
count = count + 1

console.log('Your status is:', occupation)
console.log('The year is:', Year)
console.log('The total holidays is:', count)