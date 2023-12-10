import { Request, Response, Router } from "express";

const router = Router()


router.post(['/', 'login'], (req: Request, res: Response) => {

    const body = req.body
    console.log(body)

})

export default router