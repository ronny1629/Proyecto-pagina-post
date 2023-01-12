import { Router } from "express";
import {getpost, createPost, updatePost, deletePost, getOnePost} from '../controllers/posts.controllers.js'

const router = Router()

router.get('/post', getpost)

router.post('/post', createPost)

router.put('/post/:id', updatePost)

router.delete('/post/:id', deletePost)

router.get('/post/:id', getOnePost)

export default router