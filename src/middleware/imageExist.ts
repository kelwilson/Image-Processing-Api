import express from "express";

const imageExistMidddleware = (req: express.Request, res: express.Response, next: Function): void => {
   
    next();
}

export default imageExistMidddleware;