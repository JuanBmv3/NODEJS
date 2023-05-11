import { Testimoniales } from '../models/Testimoniales.js';
import { Viajes } from '../models/Viaje.js'

const paginaInicio = async (req,res )=> {

    const promiseDB = []

    promiseDB.push( Viajes.findAll({limit: 3}))
    promiseDB.push( Testimoniales.findAll({limit: 3}))

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', { 
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales : resultado[1]
        } )
    } catch (error) {
        console.log(error);
    }
    

   
};

const paginaNosotros = (req,res)=> {


    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}


const paginaViajes = async (req,res  )=> {

    const viajes = await Viajes.findAll();

    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes
    })
}

const paginaDetalleViaje = async (req,res  )=> {

    const { slug } = req.params;

    try {
        const viaje = await Viajes.findOne({where: { slug: slug }});
        console.log(viaje);

        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })

    } catch (error) {
        console.log(error);
    }
}


const paginaTestimoniales = async (req,res  )=> {

    const testimoniales = await Testimoniales.findAll();

    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}