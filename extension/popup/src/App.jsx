import { useEffect, useState } from 'react';
import ReportCard from './components/ReportCard';
import { fetchReport } from './api';

export default function App() {
  const [report, setReport] = useState(null);
  useEffect(() => {
    fetchReport().then(setReport);
  }, []);

  return (
    <main className="p-4 w-64">
      <h1 className="font-bold text-lg mb-2">Today’s Report</h1>
      {report ? <ReportCard data={report}/> : <p>Loading…</p>}
    </main>
  );
}