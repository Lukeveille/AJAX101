var dataBox = document.querySelector('#dataBox');
var btn = document.querySelector('#btn');

btn.onclick = () => {
    let x = document.querySelector('#dataBox').value;
    alert(x + '\nall systems go');
}

function newAjax() {
    var ajax;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return ajax;
}

function LoadMe() {
    var ajax = newAjax();
    /*ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById('myDiv').innerHTML =    ajax.responseText;
        }
    }*/
    ajax.open("GET", "http://lukeswebtest.coolpage.biz/mypage.html", true);
    ajax.send();
}