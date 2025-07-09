export async function fetchReport() {
  const { token } = await chrome.storage.local.get('token');
  const res = await fetch('https://your-backend.com/api/report/today', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}