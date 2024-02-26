const {Router} = require("express")
const resumeController = require("../controllers/resumeController")
const router = Router()

router.post("/api/resume", resumeController.details)
router.get("/api/getdetails/:id", resumeController.getdetails)
router.get("/api/getdetailsall/:id", resumeController.getdetailsall)
router.get("/api/getprofileviews", resumeController.getprofileviews)
router.post("/api/incprofileviews/:id", resumeController.incprofileviews)
router.get("/api/getdevelopers/:id", resumeController.getdevelopers)
router.get("/api/getdesigners/:id", resumeController.getdesigners)
router.get("/api/getdatascientist/:id", resumeController.getdatascientist)
router.get("/api/getbusinessanalyst/:id", resumeController.getbusinessaanalyst)
router.get("/api/getaiandml/:id", resumeController.getalandml)
router.get("/api/getcloud/:id", resumeController.getcloud)
router.get("/api/getdevops/:id", resumeController.getdevops)
router.get("/api/getblockchain/:id", resumeController.getblokchain)
router.get("/api/getreact", resumeController.getreact)
router.get("/api/filterprofiles/:filter", resumeController.filterprofiles)
router.put("/api/updateresume/:id", resumeController.updateresume)
router.post("/api/sendmail", resumeController.sendemail)
router.post("/api/connectviews/:id", resumeController.connectviews)
router.get("/api/getfollowers/:id", resumeController.getfollowers)
router.delete("/api/disconnect/:id/:removeid", resumeController.disconnect)
router.delete("/api/unfollow/:id/:removeid", resumeController.unfollow)
router.post("/api/follow/:uniqueid", resumeController.follow)
router.get("/api/getfollowedpeople/:id", resumeController.getfollowedpeople)
module.exports = router; 