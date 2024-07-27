const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Tambahkan ini
const fs = require('fs');
const app = express();
app.use(cors()); // Aktifkan CORS

app.use(bodyParser.json());

const pekerjaanFile = 'pekerjaan.json';

let pekerjaan = JSON.parse(fs.readFileSync(pekerjaanFile, 'utf8'));

app.post('/get-pekerjaan', (req, res) => {
    console.log('Received request:', req.body);
    const { name } = req.body;
    let hash = hashCode(name);
    let chance = hash % 100;
    
    if (chance < 10) {
        res.json({ pekerjaan: "Kamu Pengangguran, Cari kerja sana" });
    } else {
        let index = hash % pekerjaan.length;
        res.json({ pekerjaan: pekerjaan[index] });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));

function hashCode(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        let char = name.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}
