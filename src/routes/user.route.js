import express from "express";
import { body } from "express-validator";
import favoriteController from "../controllers/favorite.controller";
import userController from "../controllers/user.controller";
import requestHandler from "../handlers/request.handler";
import userModel from "../models/user.models";
import tokenMiddleware from "../middlewares/token.middleware";

const router = express.Router();

router.post(
  "/signup",
  body("username")
    .exists()
    .withMessage("username required")
    .isLength({ min: 8 })
    .withMessage("username minimum 8 characters")
    .custom(async (value) => {
      const user = await userModel.findOne({ username: value });
      if (user) return Promise.reject("username already exist");
      body("password")
        .exists()
        .withMessage("password required")
        .isLength({ min: 8 })
        .withMessage("password minimum 8 characters");
      body("confirmPassword")
        .exists()
        .withMessage("confirmPassword required")
        .isLength({ min: 8 })
        .withMessage("confirmPassword minimum 8 characters")
        .custom((value, { req }) => {
          if (value !== req.body.password)
            throw new Error("confirmPassword not match");
          return true;
        });
        body("displayName")
        .exists().withMessage("displayName required")
        .isLength({ min: 8 })
        .withMessage("displayName must be in 8 characters"),
        requestHandler.validate,
        userController.signup;
    })
);

router.post(
  "/signin",
  body("username")
    .exists()
    .withMessage("username required")
    .isLength({ min: 8 })
    .withMessage("username minimum 8 characters"),
  body("password")
    .exists()
    .withMessage("password required")
    .isLength({ min: 8 })
    .withMessage("password minimum 8 characters"),
  requestHandler.validate,
  userController.signin
);

router.put(
  "/update-password",
  tokenMiddleware.auth,
    body("username")
    .exists().withMessage("password required")
    .isLength({ min: 8 })
    .withMessage("username minimum 8 characters"),
    body("newPassword")
    .exists().withMessage("newPassword required")
    .isLength({ min: 8 })
        .withMessage("newPassword minimum 8 characters"),    
    body("confirmPassword")
    .exists().withMessage("confirmPassword required")
    .isLength({ min: 8 })
        .withMessage("confirmPassword minimum 8 characters")
        .custom((value, { req }) => {
            if (value !== req.body.password) throw new Error("confirmPassword not match");
            return true;
        }),    
    requestHandler.validate,
    userController.updatePassword
);

router.get(
    "/info",
    tokenMiddleware.auth,
    userController.getInfo
)

router.get(
    "/favorites",
    tokenMiddleware.auth,
    favoriteController.getFavoriteOfUser
)

router.post(
    "/favorites",
    tokenMiddleware.auth,
    body("mediatype")
        .exists().withMessage("mediaType is required")
        .custom(type => ['movie', 'tv'].includes(type).withMessage('mediaType Invalid')),
    body("mediaId")
        .exists().withMessage("mediaId is requires")
    .isLength({min:1}).withMessage("mediaId can not be empty")
)