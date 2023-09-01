//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var n = "Qandeel";
var Upper_case = n.toUpperCase();
var lower_case = n.toLowerCase();
var title_case = n.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log(Upper_case + "  " + lower_case + "  " + title_case);
