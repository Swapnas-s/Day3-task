var Resume={
    "Name" : "Swapna",
    "Age"  : "30",
    "Gender" : "Female",
    "Qalification" : "MCA",
    "Location" : "Chittoor",
    "Experience" : "2 years",
    "Languages_Known" : ["Telugu","English","Tamil","Kannada"]
}
console.log(Resume);
//output:
Age:"30"
Experience: "2 years"
Gender: "Female"
Languages_Known: (4) ['Telugu', 'English', 'Tamil', 'Kannada']
Location: "Chittoor"
Name : "Swapna"
Qalification: "MCA"
var Stu={
"name" :"Ram",
"rollno" : "44",
"attendence" : ["mon","tues","wed","thu","fri","sat","sun"]
}
console.log(Stu);
//output
attendence: (7) ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun']
name: "Ram"
rollno: "44"
//for loop
for(var i=0;i<Stu.attendence.length;i++)
{
console.log(Stu.attendence[i]);
}
//output
//mon
//tues
//wed
//thu
//fri
//sat
//sun

//for in loop
for(var i in Stu.attendence)
{
console.log(Stu.attendence[i]);
}
//output
//mon
//tues
//wed
//thu
//fri
//sat
//sun

//for of loop
for(var days of Stu.attendence)
{
console.log(days);
}
//output
//mon
//tues
//wed
//thu
//fri
//sat
//sun
