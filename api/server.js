// api/server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Data dummy projek
const projek = [
  { id: 1, nama: "Desain UI Aplikasi", deskripsi: "Membuat desain aplikasi mobile dengan Figma" },
  { id: 2, nama: "Website Portofolio", deskripsi: "Membangun website pribadi menggunakan HTML, CSS, JS" }
];

// Endpoint GET untuk menampilkan semua projek
app.get("/projek", (req, res) => {
  res.status(200).json(projek);
});

// Endpoint POST untuk menerima pesan dari form kontak
app.post("/kontak", (req, res) => {
  const { nama, email, pesan } = req.body;
  console.log(`📩 Pesan dari ${nama} (${email}): ${pesan}`);
  res.status(200).json({ status: "Pesan kamu sudah diterima!" });
});

// Export app (tidak pakai app.listen untuk Vercel)
module.exports = app;
