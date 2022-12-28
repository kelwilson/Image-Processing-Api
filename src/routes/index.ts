import express from "express";
import logger from "../middleware/imageExist";
import sharp from "sharp";

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Image Processing API');
});

export default routes;