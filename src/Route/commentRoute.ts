import {Router} from 'express'
import { commentController } from '../Controller/commentController'
const route = Router()
//route starts here
route.get('/', commentController.getAllComment)
route.get('/:id', commentController.getCommentById)
route.post('/create', commentController.createData)
route.put('/update/:id', commentController.updateComment)
route.delete('/delete/:id', commentController.deleteComment)
export default route

 