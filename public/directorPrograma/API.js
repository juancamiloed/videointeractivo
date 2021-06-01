/*API es todo lo referente para comunicarse con el Backend. Nuestro servidor es una API, porque 
muestra rutas o caminos para mostrar la información.

vidinteractivo_backend es la verdadera API, lA API queda corriendo siempre y se queda esperando peticiones, es como
un banco de información que tiene sus rutas,lo que hace el servidor es si quiero hacer un post  voy 
a la ruta de /crear.

En API estan todas las peticiones que puede hacer el usuario, a través de las rutas del Backend.

*/
const API_URL = 'localhost:9000/'

 const getEstudiantes = async () => {
  try {
    const response = await fetch(`${API_URL}/`,{
      method: 'GET', //Acá le especificamos el metodo que pusimos en 'App' en el Backend (metodos propios de http)
			mode: 'cors', //metodo de seguridad
      headers: {
				"access-control-allow-origin" : "*",
        'Content-Type': 'application/json',
      }})
    const info = await response.json()
    console.log(info)
    return info
  } catch (err) {
    throw err
  }
}

 const createEstudiantes = async (data) => {
  try {
    const response = await fetch(`${API_URL}/crear`, {
      method: 'POST',
      mode: 'cors',
      headers: {
				"access-control-allow-origin" : "*",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    console.log("Se logro introducir los datos")
    return response.json()
  } catch (err) {
    console.log(err)
    throw err
  } 
}

