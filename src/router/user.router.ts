import { Router } from 'express';
import  {getUser} from "../controllers/user.controller";
import  {createUser} from "../controllers/user.controller";
import { getUserById } from '../controllers/user.controller';
import { updateUser } from '../controllers/user.controller';
import{deleteUser} from '../controllers/user.controller';
const router = Router();

router.get('/getUser', getUser);
router.post('/createUser', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;