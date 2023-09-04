import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controller/authController.js";
import {  requireSignIn } from "../middleware/authMiddleware.js";



const router = express.Router();

// REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN
router.post("/login", loginController);
//FORGOT PASSWORD
router.post("/forgot-password", forgotPasswordController);
// router.get("/test", requireSignIn, isAdmin, testController);
//protected routes for user 
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});



export default router;
