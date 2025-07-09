import cron from 'node-cron';
import TimeEntry from '../models/TimeEntry.js';
import Report from '../models/Report.js';

cron.schedule('5 0 * * *', async () => {
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  const agg = await TimeEntry.aggregate([
    { $match: { date: yesterday } },
    { $group: { _id: '$userId', total: { $sum: '$millis' } } }
  ]);

  for (const { _id: userId, total } of agg) {
    await Report.updateOne(
      { userId, date: yesterday },
      { totalMillis: total },
      { upsert: true }
    );
  }
});