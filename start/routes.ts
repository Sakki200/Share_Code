import URLController from '#controllers/url_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [URLController, 'RedirectURL'])
router.get('/:id', [URLController, 'ShowURL'])
