import { Request, Response } from "express";

export const getTime = (req: Request, res: Response) => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();

  // Set the caching header. Cache in shared caches (like Next.js) for 10 seconds.
  // Cache in the user's browser for 5 seconds.
  res.setHeader("Cache-Control", "s-maxage=10, max-age=5");

  return res.status(200).json({
    time: time,
    date: date,
    datetime: now.toISOString(),
  });
};
