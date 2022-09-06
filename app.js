const week = new Array('일', '월', '화', '수', '목', '금', '토');

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() +1;
const date = today.getDate();
const day = today.getDay();

const date_str = month + "월 " + date + "일" + "(" + week[day] + ")" 
document.getElementById("date").innerHTML = year + "년 " + date_str