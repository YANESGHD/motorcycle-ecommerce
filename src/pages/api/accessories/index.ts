import type { NextApiRequest, NextApiResponse } from 'next';
import { Accessories } from '@/data/models/accessories';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = await Accessories.find().limit(20).exec();

  res.status(200).json(products);
}
