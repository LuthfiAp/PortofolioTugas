export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Semua field wajib diisi!" });
    }

    return res.status(200).json({
      message: "Pesan berhasil dikirim!",
      data: { name, email, message },
    });
  }

  res.status(405).json({ error: "Metode tidak diizinkan" });
}
