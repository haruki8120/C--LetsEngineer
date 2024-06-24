function changelang(){
    let ta1 = document.getElementById("myselectbox").value;
    let table = document.getElementById("table");

    var firrow = table.rows[0];
    var secrow = table.rows[1];

    switch(ta1){
case "日本語":
firrow.style.display = "block";
secrow.style.display = "none";
break; 
case "English":
secrow.style.display = "block";
firrow.style.display = "none";
break;
case "全て表示":
firrow.style.display = "block";
secrow.style.display = "block";
break;
}
}