import express from "express";
import {produtos} from "../controller/mercado_controller.js";

let router = express.Router()
router.get('/produtos',produtos.all)
router.post('/produtos', produtos.create)
export {router}