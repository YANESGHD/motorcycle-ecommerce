import type { NextApiRequest, NextApiResponse } from 'next';
import accessories from '@/data/accessories.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { accessoryId },
  } = req;

  const product = accessories.data.data.find((product) => product.baseProductCode === accessoryId);
  res.status(200).json(product);
}
