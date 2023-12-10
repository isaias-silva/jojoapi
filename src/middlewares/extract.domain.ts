import { Response, Request, NextFunction } from "express"
import logger from "../utils/logger"

export default (req: Request, res: Response, next: NextFunction) => {

    const domain = req.get('host')
    logger.info(domain)
    next()
}