import TimeEntry from '../models/TimeEntry.js';

export async function upsertTimes(req, res) {
  const { date, timeData } = req.body;
  try {
    const ops = Object.entries(timeData).map(([url, millis]) => ({
      updateOne: {
        filter: { userId: req.user.id, date, url },
        update: { $inc: { millis } },
        upsert: true
      }
    }));
    await TimeEntry.bulkWrite(ops);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}