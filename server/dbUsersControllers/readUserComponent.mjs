import getUser from "./functions/getUser.mjs";

export default async function readUser(req, res) {
  
    res.json(await getUser(req.body));
  }
  