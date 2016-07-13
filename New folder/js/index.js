function cnklogin(){

window.location='#pagetwo';
/*if(document.forms["login"]["username"].value== "" || document.forms["login"]["username"].value == null){
  alert("กรุณากรอกข้อมูล Username !!");
  document.forms["login"]["username"].focus();
  return false;
  }
  else if(document.forms["login"]["passwd"].value== "" || document.forms["login"]["passwd"].value == null){
  alert("กรุณากรอกข้อมูล Password !!");
  document.forms["login"]["passwd"].focus();
  return false;
  }*/
  
}
function logout(){
  window.location='logout.php'
  }

function pluspr(){
	alert("บันทึกข้อมูลแล้ว!!");
  window.location='#pagepr';
}
function additem(){
  alert("จัดเก็บข้อมูลแล้ว!!");
  window.location='#additem';
}

function select_wh(warehouse){
  alert("เลือกคลังสินค้าเสร็จแล้ว");
  var title = "รายการสินค้าที่นับแล้วในคลัง "+warehouse.value+" ในวันนี้";
  document.getElementById("titlecs").innerHTML = title;
  window.location="#countstock";
}

function scanshelves(){
  alert("ชั้นเก็บที่ A1");
  document.getElementById("shel").value = "A1";
  $("#shelves1").hide();
  $("#shelves2").show();
  $("#item1").show();
  window.location="#countitem";
}

function scanitem(){
  alert("สินค้าชื่อ M150");
  document.getElementById("items").value = "M150";
  document.getElementById("units").value = "ขวด";
  $("#item1").hide();
  $("#item2").show();
  $("#count").show();
  $("#unit").show();
  window.location="#countitem";
}

function saveitem(){
  alert("บันทึกรายการสินค้าที่ตรวจนับ");
  $("#shelves2").hide();
  $("#shelves1").show();
  $("#item1").hide();
  $("#item2").hide();
  $("#count").hide();
  $("#unit").hide();
  window.location="#countstock";
}