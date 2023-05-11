import { Testimoniales } from "../models/Testimoniales.js";

const sendTestimonial = async (req,res)=> {

   const { nombre, correo, mensaje } = req.body;

    const errores = verificaErrores(req.body)

    if(errores.length > 0){

        const testimoniales = await Testimoniales.findAll();


        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
        return;
    }

    try {
        await Testimoniales.create({
            nombre,
            correo,
            mensaje
        });

        res.redirect('/testimoniales');


    } catch (error) {
        console.log(error)
    }

}


function verificaErrores( valoresForm ){
    const errores = [];
    const keys = Object.keys(valoresForm);


    Object.values(valoresForm).some( function (input, i) {
        if( input === ''){
            errores.push({mensaje: `El ${keys[i]} esta vacio`} )
        } 
    });

    return errores;
}

export {
    sendTestimonial
}