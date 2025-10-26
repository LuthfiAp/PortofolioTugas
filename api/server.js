const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Data dummy (buat dicoba)
const projek = [
  { id: 1, nama: "Desain UI Aplikasi", deskripsi: "Membuat desain aplikasi mobile dengan Figma" },
  { id: 2, nama: "Website Portofolio", deskripsi: "Membangun website pribadi menggunakan HTML, CSS, JS" }
];

// Endpoint GET untuk projek
app.get("/projek", (req, res) => res.json(projek));

// Endpoint POST untuk kontak
app.post("/kontak", (req, res) => {
  const { nama, email, pesan } = req.body;
  console.log(`📩 Pesan dari ${nama} (${email}): ${pesan}`);
  res.json({ status: "Pesan kamu sudah diterima!" });
});

// Export ke Vercel
module.exports = app;
