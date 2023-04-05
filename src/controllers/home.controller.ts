import { Request, Response, Router } from "express"

const router = Router();

const home = (req: Request, res: Response) => {
    res.render("home")
}

router.get('/', home)

export default router;