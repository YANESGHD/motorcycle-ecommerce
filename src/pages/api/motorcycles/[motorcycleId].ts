import type { NextApiRequest, NextApiResponse } from 'next';
import { Motorcycles } from '@/data/models/motorcycles';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { motorcycleId },
  } = req;
  const products = await Motorcycles.find().limit(20).exec();
  console.log(products)
  const product = products.find((product) => product.baseProductCode === motorcycleId);

  res.status(200).json(product);
}
