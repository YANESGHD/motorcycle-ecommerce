import type { NextApiRequest, NextApiResponse } from 'next';
import products from '@/data/motos.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { motorcycleId },
  } = req;

  const product = products.data.data.find((product) => product.baseProductCode === motorcycleId);
  res.status(200).json(product);
}
