const { Router } = require('express');
const { usuarioGet,
usuarioPUT,
usuarioPOST,
usuarioPATCH,
usuarioDELETE, 
usuariossii} = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariossii);

router.put('/:idDelUsuario',  usuarioPUT);

router.post('/', usuarioPOST);

router.patch('/', usuarioPATCH);

router.delete('/', usuarioDELETE);


module.exports = router;