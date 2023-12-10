import { Router, Response, Request } from "express";

const router = Router()

router.get(['/home', '/'], (req: Request, res: Response) => {

    res.render('index.ejs', { key: 'home', countStands: 0 })
})

router.get('/howtouse', (req: Request, res: Response) => {

    res.render('index.ejs', { key: "how", countStands: 0 })
})

router.get('/about', (req: Request, res: Response) => {
    res.render('index.ejs', { key: "about", countStands: 0 })
})

router.get('/hexagraph', (req: Request, res: Response) => {
    res.render('index.ejs', { key: "hex", countStands: 0 })
})


router.get('/login', (req: Request, res: Response) => {

    res.render('login-adm.ejs', { msg: '' })

})

router.get('/admin', (req, res) => {

    res.render('admin.ejs', { countStands: 0, data:{} , func: '/admin/create', obj: {} })

})


router.get('/edit/:id', async(req, res) => {
   
    res.render('admin.ejs', { countStands:0, data:{}, func: `/admin/save/`, obj:{} })

})

export default router