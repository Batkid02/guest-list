name_of_the_guest_array=[];
function submit(){
var guest_1=document.getElementById("guest_1").value;

var guest_2=document.getElementById("guest_2").value;
var guest_3=document.getElementById("guest_3").value;
var guest_4=document.getElementById("guest_4").value;

name_of_the_guest_array.push(guest_1);
name_of_the_guest_array.push(guest_2);
name_of_the_guest_array.push(guest_3);
name_of_the_guest_array.push(guest_4);
console.log(name_of_the_guest_array);
document.getElementById("display_guest").innerHTML=name_of_the_guest_array;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
name_of_the_guest_array.sort();
console.log(name_of_the_guest_array);
document.getElementById("display_guest").innerHTML=name_of_the_guest_array;

}