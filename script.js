var name1 = "Jenny";
var name2 = "Jennifer";
var name3 = "Jen";

if (name1.length > name2.length && name1.length > name3.length) {
console.log ("Jenny has the longest name");
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log ("Jennifer has the longest name");
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log ("Jen has the longest name");
} else if (name1.length === name2.length && name2.length === name3.length) {
    console.log ("All three names are the same length");
} else if (name1.length === name2.length && name1.length > name3.length) {
    console.log("Jenny and Jennifer are tied for the longest name");
} else if (name2.length === name3.length && name3.length > name1.length) {
    console.log ("Jennifer and Jen are tied for the longest name");
} else if (name1.length === name3.length && name1.length > name2.length) {
    console.log ("Jenny and Jen are tied for the longest name");
}
