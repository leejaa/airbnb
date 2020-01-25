import { Response } from "express";

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
    secure: true,
    domain: '.herokuapp.com',
    // www.example.com
    // api.example.com
    // path: "/refresh_token"
  });
};