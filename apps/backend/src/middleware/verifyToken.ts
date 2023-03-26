import { CognitoJwtVerifier } from "aws-jwt-verify";
import { NextFunction, Request, Response } from "express";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers.authorization || "";
  if (!authorizationHeader) {
    res.status(401).send("Unauthorized");
  }

  const token = authorizationHeader.replace("Bearer ", "");

  const verifier = CognitoJwtVerifier.create({
    userPoolId: process.env.COGNITO_POOL_ID!,
    tokenUse: "access",
    clientId: process.env.COGNITO_APP_CLIENT_ID!,
  });

  try {
    const payload = await verifier.verify(token);
    req.user = {
      id: payload.sub,
      username: payload.username,
      scope: payload.scope,
    };
    next();
  } catch {
    res.status(401).send("Unauthorized");
  }
};
