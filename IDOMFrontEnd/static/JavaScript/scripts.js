function guardarComponente() {
    alert("Componente guardado exitosamente.");
}

function cambiarVista(id) {
    vista = document.getElementById(id).style.display;
    if (vista == 'none')
        vista = 'block';
    else
        vista = 'none';

    document.getElementById(id).style.display = vista;
    document.getElementById(id).style.position = "absolute";
}

function mostrarValor(input, output) {
    document.getElementById(output).value = input;
}

/**
 * Funcion que añade un <li> dentro del <ul>
 */
function add_li(id) {
    var nuevoLi = "contenido";
    if (nuevoLi.length > 0) {
        var li = document.createElement('li');
        li.id = nuevoLi;
        li.innerHTML = "<span onclick='eliminar(this)'>X</span>" + nuevoLi;
        document.getElementById(id).appendChild(li);

    }
    return false;
}

/**
 * Funcion que busca si existe ya el <li> dentrol del <ul>
 * Devuelve true si no existe.
 
function find_li(id) {
    var el = document.getElementById(id).getElementsByTagName("li");
    for (var i = 0; i < el.length; i++) {
        if (el[i].innerHTML == "contenido")
            return false;
    }
    return true;
}
*/
/**
 * Funcion para eliminar los elementos
 * Tiene que recibir el elemento pulsado
 */
function eliminar(elemento) {
    var id = elemento.parentNode.getAttribute("id");
    node = document.getElementById(id);
    node.parentNode.removeChild(node);
}

function cargarLista() {

}

function filtroLista(tipo) {
    if (tipo == "componentes") {
        cargarLista();
        axios.get("enlaceServidor")
            .then(function(response) {
                console.log(response.data)
            })
    } else if (tipo == "productos") {
        cargarLista();
        axios.get("enlaceServidor")
            .then(function(response) {
                console.log(response.data)
            })
    } else {
        cargarLista();
        axios.get("enlaceServidor")
            .then(function(response) {
                console.log(response.data)
            })
    }
}