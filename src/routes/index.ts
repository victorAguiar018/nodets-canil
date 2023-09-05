import { Router } from 'express'
import * as PagesController from '../controllers/pageControler';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PagesController.home);
router.get('/dogs', PagesController.dogs);
router.get('/cats', PagesController.cats);
router.get('/fishes', PagesController.fishes);

router.get('/surch', SearchController.search);

export default router;