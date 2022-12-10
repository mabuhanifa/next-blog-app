import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method == "POST") {
    const comment = req.body.comments;
  }

  res.status(200).json(comments);
}
