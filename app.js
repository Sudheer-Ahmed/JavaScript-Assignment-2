// 1. Declare 3 variables in one statement
var var1 = 1, var2 = 2, var3 = 3;

// 2. Declare 5 legal and 5 illegal variable names
// Legal variable names
var $name = "John";
var _name = "Doe";
var name1 = "Jane";
var firstName = "Alice";
var last_name = "Smith";

// Illegal variable names (commented out to avoid syntax errors)
// var 1name = "Illegal"; // Cannot start with a number
// var @name = "Illegal"; // Cannot contain special characters other than $ and _
// var name-1 = "Illegal"; // Cannot contain hyphens
// var var = "Illegal"; // Cannot use reserved keywords
// var name! = "Illegal"; // Cannot contain exclamation marks

// 3. Display this in your browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, $ or _. For example $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");
