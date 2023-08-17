import { Router } from "express"
const router = Router()


router.get('/', (req, res) => res.render('index', {title: 'index principal'}))
router.get('/about', (req, res) => res.render('about', {title: 'Este es el about'}))
router.get('/contact', (req, res) => res.render('contact', {title: 'Este es el Contact'}))

export default router
