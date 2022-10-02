Name_Of_Student_Array=[];
function submit(){
var display_student_array= [];
for(j=1; j<=4; j++)
{
var Name_Of_Student= document.getElementById("Name_of_the_student_"+j).value;
console.log(Name_Of_Student);
Name_Of_Student_Array.push(Name_Of_Student);
}
console.log(Name_Of_Student_Array);
var length_array= Name_Of_Student_Array.length;
console.log(length_array);
for(a=0;  a<length_array; a++);
{
display_student_array.push("<h4>NAME-"+ Name_Of_Student_Array[a]+ "</h4>");
console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("Display_Div_With_Commas").innerHTML= display_student_array;

var remove_commas= display_student_array.join("");
console.log(remove_commas);
document.getElementById("Display_Div_Without_Commas").innerHTML= remove_commas;

document.getElementById("submit_button").style.display= "none";
document.getElementById("sort_button").style.display= "inline-block";

}
function sorting(){
Name_Of_Student_Array.sort();
console.log(Name_Of_Student_Array);
var display_student_array_sort=[];
var length_array= Name_Of_Student_Array.length;
console.log(length_array);
for(a=0; a<length_array;a++);
{
display_student_array_sort.push("<h4>NAME-"+ Name_Of_Student_Array[a]+ "</h4>");
console.log(display_student_array_sort);
}
var remove_commas= display_student_array_sort.join("");
console.log(remove_commas);
document.getElementById("Display_Div_Without_Commas").innerHTML= remove_commas;
}