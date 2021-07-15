import express from 'express';
import {creatingPost,getAllPosts,getPost,postInteractivity} from '../controller/post-controller.js';

const router = express.Router();

router.post('/create',creatingPost);

router.get('/posts',getAllPosts);

router.get('/post/:id',getPost);

router.put('/user-interactivity/:id',postInteractivity);

export default router;