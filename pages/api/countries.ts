// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const counties = [{ name: "England" }];

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<Data>>) {
  const skip = parseInt((req.query.skip as string) ?? 0);
  const take = parseInt((req.query.take as string) ?? 5);

  fetch("https://restcountries.com/v2/all")
    .then((data) => data.json())
    .then((data: { name: string }[]) => {
      const countries = data
        .map((country) => ({
          name: country.name,
        }))
        .filter((_, i) => i >= skip && i < skip + take);

      res.status(200).json(countries);
    });
}
