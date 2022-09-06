const week = new Array('일', '월', '화', '수', '목', '금', '토');

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() +1;
const date = today.getDate();
const day = today.getDay();

const date_str = month + "월 " + date + "일" + "(" + week[day] + ")" ;
document.getElementById("date").innerHTML = year + "년 " + date_str;

let attend_str = "";
const listItems = document.getElementById("attend").getElementsByTagName("li");
console.log(listItems);
// for(item in listItems) {
//     console.log(item)
//     attend_str += item.innerText
// }
for (i = 0; i < listItems.length; i++) {
    //console.log(listItems[i]);
    console.log(listItems[i].getElementsByClassName("name")[0].innerText)
    attend_str += listItems[i].getElementsByClassName("name")[0].innerText + ", "
}

document.getElementById("result-area").innerText = attend_str;