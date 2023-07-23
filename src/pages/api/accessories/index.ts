import type { NextApiRequest, NextApiResponse } from 'next';
import accessories from '@/data/accessories.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(accessories);
}
