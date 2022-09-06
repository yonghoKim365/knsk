const week = new Array('일', '월', '화', '수', '목', '금', '토');

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() +1;
const date = today.getDate();
const day = today.getDay();

const date_str = month + "월 " + date + "일" + "(" + week[day] + ")" ;
document.getElementById("date").innerHTML = year + "년 " + date_str;


const listItems = document.getElementById("attend").getElementsByTagName("li");
// console.log(listItems);

function is_checked()
{
    let attend_str = "";
    let cnt = 0
    for (i = 0; i < listItems.length; i++) {
        //console.log(listItems[i].getElementsByTagName("input")[0].checked);
        //console.log(listItems[i].getElementsByClassName("name")[0].innerText)
        if(listItems[i].getElementsByTagName("input")[0].checked) {
            cnt++;
            attend_str += listItems[i].getElementsByClassName("name")[0].innerText + ", "
        }
    }
    attend_str += "(이상 " + cnt + "명)"
    if(document.getElementById("kancho").checked) {
        attend_str += "+ 관장님"
    }
    document.getElementById("result-area").innerText = attend_str;
}

 function copy() {
    var tempElem = document.getElementById("result-area");
    tempElem.select();
    document.execCommand("Copy")
    //navigator.clipboard.writeText(tempElem);
}
