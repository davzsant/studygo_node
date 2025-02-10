import { Router } from "express";
import controllers from "../controllers";
const router = Router()

router.get('/',(req,res)=>{
    res.json("Seja bem vindo a api de DAVID")
})


router.get('/post',controllers.post.getAll)
router.get('/post/:id',controllers.post.get)
router.post('/post',controllers.post.create)

router.get('/user',controllers.user.getAll)
router.get('/user/:id',controllers.user.get)
router.post('/user',controllers.user.create)





export default router