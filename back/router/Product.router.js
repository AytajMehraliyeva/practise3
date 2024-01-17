const express=require("express")
const { itemController } = require("../controller/Product.controller")

const router=express.Router()

router.get("/",itemController.getAll)
router.get("/:id", itemController.getById)
router.post("/", itemController.add)
router.delete("/:id", itemController.delete)

module.exports=router