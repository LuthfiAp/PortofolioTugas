import fs from "fs";

const CONTACTS_FILE = "./contacts.json";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Semua field wajib diisi!" });
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString(),
    };

    let contacts = [];
    if (fs.existsSync(CONTACTS_FILE)) {
      contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE));
    }
    contacts.push(newMessage);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));

    return res.status(201).json({ message: "Pesan berhasil dikirim!", data: newMessage });
  }

  if (req.method === "GET") {
    if (!fs.existsSync(CONTACTS_FILE)) return res.status(200).json([]);
    const contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE));
    return res.status(200).json(contacts);
  }

  return res.status(405).json({ error: "Metode tidak diizinkan" });
}
