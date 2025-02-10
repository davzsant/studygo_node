import { Router } from "express";
import controllers from "../controllers";
const router = Router()



router.get('/post',controllers.post.getAll)
router.get('/post/:id',controllers.post.get)
router.post('/post',controllers.post.create)
router.get('/',(req,res)=>{
    res.json("Seja bem vindo")
})





export default router