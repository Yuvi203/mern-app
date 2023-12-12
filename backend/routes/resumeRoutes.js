const {Router} = require("express")
const resumeController = require("../controllers/resumeController")
const router = Router()

router.post("/api/resume",resumeController.details)
router.get("/api/getdetails/:id", resumeController.getdetails)
module.exports = router;