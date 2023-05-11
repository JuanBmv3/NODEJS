import express from 'express';
import { paginaInicio,paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje} from '../controllers/paginasControllers.js';
import { sendTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio );

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', sendTestimonial);



export default router;