import getUser from "./functions/getUser.mjs";

export default async function readUser(req, res) {
  // function takes object with field and value for search, example {"email":"email@web.ua"}
  res.json(await getUser(req.body));
  }
  