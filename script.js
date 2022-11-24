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
var Stu={
        "name" :"Ram",
        "rollno" : "44",
        "attendence" : ["mon","tues","wed","thu","fri","sat","sun"]
}
console.log(Stu);
for(var i=0;i<Stu.attendence.length;i++)
{
    console.log(Stu.attendence[i]);
}
for(var i in Stu.attendence)
{
    console.log(Stu.attendence[i]);
}
for(var i of Stu.attendence)
{
    console.log(Stu.attendence[i]);
}