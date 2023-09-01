//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var student = {
    student1: {
        name: "Qandeel",
        regNum: 12312,
        course: "WMD"
    },
    student2: {
        name: "Hasher",
        regNum: 32213,
        course: "WMD"
    },
    student3: {
        name: "Fatima",
        regNum: 12312,
        course: "WMD"
    }
};
var std = "student2";
var stdinfo = student[std];
if (stdinfo) {
    console.log("Name : " + stdinfo.name);
    console.log("Registration Number : " + stdinfo.regNum);
    console.log("Course : " + stdinfo.course);
}
else {
    console.log("Student not found in the list");
}
