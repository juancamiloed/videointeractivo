let tabla = document.getElementById("tabla");
let response = getEstudiantes();

//Para guardar las edades y crear el grafico
let edades = [];
var result = [];

//Para guardar los intereses y crear el grafico
let intereses = [];
var result2 = [];

//Para encontrar las coincidencia en el array de edades
function coincidencias(arr) {
  var a = [],
    b = [],
    prev;

  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }

  return [a, b];
}
//Para encontrar las coincidencias en el array de intereses
function coincidenciasIntereses(arr) {
    var a = [],
      b = [],
      prev;
  
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase() !== prev) {
        a.push(arr[i].toLowerCase());
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }
  
    return [a, b];
  }


response.then(function(value) {

    //Cuando se recuperan los valores de la API
    for(i = 0; i < value.length; i++) {
        var row = tabla.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = value[i].nombre
        cell2.innerHTML = value[i].apellido
        cell3.innerHTML = value[i].edad
        cell4.innerHTML = value[i].correoestudiante
        cell5.innerHTML = value[i].intereses
        
        //Guardar todas las edades en el array
        edades.push(value[i].edad);
        intereses.push(value[i].intereses);
    }
    //Para crear el grafico de edades
    result = coincidencias(edades);
    console.log('[' + result[0] + ']','[' + result[1] + ']')
    graficoEdades(result[0], result[1]);

    //Para crear el grafico de intereses
    result2 = coincidenciasIntereses(intereses);
    console.log('[' + result2[0] + ']','[' + result2[1] + ']')
    graficoIntereses(result2[0], result2[1]);
  }, function(reason) {
    //Cuando no se recuperan los valores de la API
    console.log(reason); 
  });


//Para crear la grafica de edades
function graficoEdades(label, cantidad){
    let graf1 = document.getElementById("grafEdades").getContext('2d');
    graf1.width = 100;
    graf1.height = 100;
    let grafEdad = new Chart(graf1, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'Nro de personas',
                data: cantidad,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins:{
                title: {
                    display: true,
                    text: 'Edades de los aspirantes'
                  }
            }
        }
    });
}

function graficoIntereses(label, cantidad){
    let graf2 = document.getElementById("grafIntereses").getContext('2d');
    graf2.width = 100;
    graf2.height = 100;
    let grafIntereses = new Chart(graf2, {
        type: 'doughnut',
        data: {
            labels: label,
            datasets: [{
                label: 'Nro de personas',
                data: cantidad,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins:{
                title: {
                    display: true,
                    text: 'Intereses de los aspirantes'
                  }
            }
        }
    });
}

