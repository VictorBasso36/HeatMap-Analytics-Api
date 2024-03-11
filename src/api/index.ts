import express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const router = express.Router();

router.get<{}, any>('/heatmaps', async (req, res) => {
  try {
    const allDataPoints = await prisma.heatMap.findMany();
    return res.json(allDataPoints);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
});


router.post<{}, any>('/heatmaps', async (req, res) => {
  const dataPoints = req.body;
  const results = [];
  for (const dataPoint of dataPoints) {
    const { x, y, value, domain, ip } = dataPoint;
    try {
      const result = await prisma.heatMap.create({
        data: {
          x,
          y,
          value,
          domain,
          ip
        }
      });
      results.push(result);
    } catch (error) {
      console.error(`Failed to insert data point: ${JSON.stringify(dataPoint)}. Error: error`);
    }
  }
  return res.json(results);
});


export default router;
