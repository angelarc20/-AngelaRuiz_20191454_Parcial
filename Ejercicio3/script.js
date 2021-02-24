function AgregarFila(){
    var fecha = document.getElementById("fecha").value; 
    var bebida = document.getElementById("bebida").value; 
    var cantidad = document.getElementById("cantidad").value; 

    var c1 = document.createElement("c"); 
    var c2 = document.createElement("c"); 
    var c3 = document.createElement("c");
    var c4 = document.createElement("c");
    var f = document.createElement("f"); 

   
    var message; 
    if (cantidad < 8 ) {
        message = "tomar mas agua";
    } else {
        message = "meta alcanzada";
    }
    
    c1.appendChild(fechaText);
    c2.appendChild(bebidaText);
    c3.appendChild(cantidadText);
    c4.appendChild(messageText);

 
        f.appendChild(c1);
        f.appendChild(c2);
        f.appendChild(c3);
        f.appendChild(c4);
        

        document.getElementById("tabla1").appendChild(f);
    }

