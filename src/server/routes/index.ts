import { Router } from "express";
import controllers from "../controllers";
const router = Router()

router.get('/',(req,res)=>{
    res.json("Seja bem vindo a api de DAVID")
})


router.get('/post',controllers.post.getAll)
router.get('/post/:id',controllers.post.get)
router.post('/post',controllers.post.create)
router.put('/post/:id',controllers.post.update)
router.delete('/post/:id',controllers.post.deletePost)

router.get('/user',controllers.user.getAll)
router.get('/user/:id',controllers.user.get)
router.post('/user',controllers.user.create)
router.put('/user/:id',controllers.user.update)
router.delete('/user/:id',controllers.user.deleteUser)






export default router