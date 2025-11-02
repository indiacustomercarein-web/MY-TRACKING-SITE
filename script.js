async function track() {
    const id = document.getElementById('track').value;
    const res = document.getElementById('result');
    res.innerHTML = 'લોડિંગ...';
    try {
        const r = await fetch('/track', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({trackingId: id}) });
        const d = await r.json();
        res.innerHTML = d.error ? `<p style="color:red">${d.error}</p>` : `<p>સ્થિતિ: ${d.tracking.status}</p>`;
    } catch { res.innerHTML = '<p style="color:red">એરર</p>'; }
}