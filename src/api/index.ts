import express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const router = express.Router();

router.get<{}, any>('/heatmaps', async (req, res) => {
  return res.json('testing')
});

router.post<{}, any>('/heatmaps', async (req, res) => {
  const { x, y, value, domain, ip } = req.body;
  try {
    const dataPoint = await prisma.heatMap.create({
      data: {
        x,
        y,
        value,
        domain,
        ip
      }
    });
    return res.json(dataPoint);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;
