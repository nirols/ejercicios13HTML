function mostrar_tabla(){
    var n = parseInt (document.tablas.numero.value);

    var r = "";

    for(var i = 1; i<=10; i++){

        r=r+n+" * "+i +" = " + (n*i) +"<br>";

    }
    var capa_result = document.getElementById("resultado");
    capa_result.innerHTML=r;
}