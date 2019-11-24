'use strict'



let getEdad = (fecha_nacimiento) => {

    let hoy = new Date();
    let fechaNacimiento = new Date(fecha_nacimiento);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad = edad - 1;
    }
    return edad;
}


let registrar_usuario_final = async(correo, primer_nombre, segundo_nombre, primer_apellido,
    segundo_apellido,fecha_nacimiento,edad, provincia, canton, distrito, genero, avatar) => {

    await axios({

                method: 'post',
                url: 'http://localhost:3000/api/registrar-usuarios-finales', 
                responseType: 'json',

               
                data: {
                    correo: correo,
                    primer_nombre: primer_nombre,
                    segundo_nombre: segundo_nombre,
                    primer_apellido: primer_apellido,
                    segundo_apellido: segundo_apellido,
                    fecha_nacimiento: fecha_nacimiento,
                    edad: edad,
                    provincia: provincia,
                    canton: canton,
                    distrito: distrito,
                    genero: genero,
                    avatar: avatar
                    
                }

            }


        ).then(function(res) {
            console.log(res.data);
        })
        .catch(function(error) {
         
});

    };

let listar_usuarios_finales = async() => {
    let lista_usuarios_finales;
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-filtrar-usuario-final',
        responseType: 'json'
    })

    .then(function(res) {


        lista_usuarios_finales = res.data.clientes;

    })

    .catch(function(error) {
        console.log(error);
    });

    return lista_usuarios_finales;
};


let listar_datos_inicio_sesion = async() =>{
    let lista_datos_inicio_sesion; 

    await axios({
        method: 'get', 
        url: 'http://localhost:3000/api/iniciar-sesion', 
        responseType: 'json'
    })

    then(function(res){
        lista_datos_inicio_sesion = ''; 
     })

     .catch(function(error){
         console.log(error)
     }); 

     return lista_datos_inicio_sesion;
}

