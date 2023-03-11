// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface IData {
    name: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IData>
) {
    res.status(200).json({ name: 'John Doe' });
}
