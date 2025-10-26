const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Data dummy
const projek = [
  { id: 1, nama: "Desain UI Aplikasi", deskripsi: "Membuat desain aplikasi mobile dengan Figma" },
  { id: 2, nama: "Website Portofolio", deskripsi: "Membangun website pribadi menggunakan HTML, CSS, JS" }
];

// Endpoint REST API
app.get("/api/projek", (req, res) => res.json(projek));
app.post("/api/kontak", (req, res) => {
  const { nama, email, pesan } = req.body;
  console.log(`📩 Pesan dari ${nama} (${email}): ${pesan}`);
  res.json({ status: "Pesan kamu sudah diterima!" });
});

app.listen(PORT, () => console.log(`✅ Server berjalan di http://localhost:${PORT}`));
