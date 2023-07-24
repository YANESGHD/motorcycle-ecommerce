import type { NextApiRequest, NextApiResponse } from 'next';
import { Lead } from '@/data/models/lead';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    req.body.status = 'PENDING';
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();

    res.status(200).json(savedLead);
  } catch (error) {
    throw new Error(`Lead Response Error: ${error}`);
  }
}
