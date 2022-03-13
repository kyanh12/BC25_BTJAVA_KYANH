/**
 * Người dùng nhập 3 số Nguyên 
 * Thứ tự tăng dần
 * */ 
// function soTangDan(a, b, c) {
//     var up;
//     if(a>b){
//         up = a ;
//         a = b;
//         b = up;
//    }
   
//    if (a>c){
//         up = a ;
//         a = c;
//         c = up;
//    }

//    if (b>c){
//     up = b ;
//     b = c;
//     c = up;
//    }
//    return up;
    
// }

document.getElementById("btn-nut").onclick = function(){
    var a = document.getElementById("txtSo1").value*1;
    var b = document.getElementById("txtSo2").value*1;
    var c = document.getElementById("txtSo3").value*1;

if(a >b ){
   var up = a ;
    a = b;
    b = up;
}

if (a >c){
  var  up = a ;
    a = c;
    c = up;
}

if (b >c){
 var up = b ;
    b = c;
    c = up;
}

var ketQua = " Thứ Tự tăng dần là " + a +"," + b+ "," + c ;ba
document.getElementById("footerSo").innerHTML= ketQua;
}

// chào hõi
document.getElementById("btnChao").onclick = function(){
    var selectValue = document.getElementById("user-selection").value;
    
if(selectValue === "B"){
    ketQua = " chào ba" ;  
}else if(selectValue === "M"){
    ketQua = "chào mẹ" ;  
}else if(selectValue === "C"){
    ketQua = "Chào Chị" ;  
}else{
    ketQua = "Chào em" ;  
}
document.getElementById("footerChao").innerHTML= ketQua;
}



//  số nguyên - bao nhiêu số chẵn và lẽ
document.getElementById("btnSoNguyen").onclick = function(){
    var a = document.getElementById("txtSo11").value*1;
    var b = document.getElementById("txtSo22").value*1;
    var c = document.getElementById("txtSo33").value*1;
   var sochan= 0  ;

    if (a % 2 == 0){
        ketQua = sochan ;
    }else{
        ketQua1 = sochan+=1;
    }

    if (b % 2 == 0){
        ketQua = sochan ;
    }else{
        ketQua1 = sochan+=1;
    }

    if (c % 2 == 0){
        ketQua = sochan ;
    }else{
        ketQua1 = sochan+=1;
    }
    tongChanLe = "có " + ketQua + " số chẵn " + ketQua1 + " số lẻ" ;
    document.getElementById("footerSoNguyen").innerHTML= tongChanLe;
}


//  tam giác
document.getElementById("btnTamGiac").onclick = function(){
    var a = document.getElementById("txtCanh1").value*1;
    var b = document.getElementById("txtCanh2").value*1;
    var c = document.getElementById("txtCanh3").value*1;

    if ((a == b && b == c)){
        ketQua = "Tam Giác đều";
    }else if((a == b) || (a == c) || (b == c)){
        ketQua = "Tam Giác Cân";
    }else if((a * a == b * b + c * c ) ||
            (c * c == b * b + a * a ) ||
            (b * b   == a * a + c * c )){
        ketQua = "Tam Giác Vuông";
    }else{
        ketQua = " Tác Giam";
    }    
    document.getElementById("footerTamGiac").innerHTML= ketQua;
}
