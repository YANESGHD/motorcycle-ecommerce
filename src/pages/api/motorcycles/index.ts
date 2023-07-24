import type { NextApiRequest, NextApiResponse } from 'next';
import { Motorcycles } from '@/data/models/motorcycles';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = await Motorcycles.find().limit(20).exec();

  res.status(200).json(products);
}
