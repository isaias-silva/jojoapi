import { Response, Request, NextFunction } from "express"
import logger from "../utils/logger"

export default (req: Request, res: Response, next: NextFunction) => {

    const domain = req.get('host')
    const path = req.path
    logger.info(domain + path)
    next()
}