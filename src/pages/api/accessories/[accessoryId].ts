import type { NextApiRequest, NextApiResponse } from 'next';
import { Accessories } from '@/data/models/accessories';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { accessoryId },
  } = req;
  const products = await Accessories.find().limit(20).exec();
  const product = products.find((product) => product.baseProductCode === accessoryId);

  res.status(200).json(product);
}
