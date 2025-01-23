import { NextApiRequest, NextApiResponse } from "next";

export default async function saveUserData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);
  }
}
