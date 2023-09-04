$(document).ready(function(){
    $("#ejecutar").click(function(){

        var P1=$("#ap_pat").val();
        var P2=$("#ap_mat").val();
        var P3=$("#nombre").val();
        var fecha=$("#fecha_nac").val();
        var L1y2,L3,L4,anio,mes,dia,homo;

        anio=parseInt(String(fecha).substring(2,4)); // 99
        mes=parseInt(String(fecha).substring(5,7));  // 11
        dia=parseInt(String(fecha).substring(8,10)); // 30

        L1y2=P1.substring(0,2).toUpperCase(); // MA
        L3=P2.substring(0,1).toUpperCase();   // H
        L4=P3.substring(0,1).toUpperCase();   // J 
        homo=homoclave();       // TX0
        $("#mostrarRFC").val(L1y2+L3+L4+anio+mes+dia+homo);
    });
});

function homoclave() {
    var rango_caracteres="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var homo="";
    
    for(var i=0;i<3;i++){
        homo+=rango_caracteres.charAt(Math.floor(Math.random()*rango_caracteres.length));
    }
    return homo;
}

$(document).ready(function() {
    $("#consultar").click(function() {
        $.get("https://jsonplaceholder.typicode.com/users/7", function(data) {
            $("#C_nombre").val(data.name);
            $("#Ccorreo").val(data.email);
        });
    });
});