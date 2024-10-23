const { Router } = require('express');
const { usuarioGet,
usuarioPUT,
usuarioPOST,
usuarioPATCH,
usuarioDELETE } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuarioGet);

router.put('/:idDelUsuario',  usuarioPUT);

router.post('/', usuarioPOST);

router.patch('/', usuarioPATCH);

router.delete('/', usuarioDELETE);


module.exports = router;