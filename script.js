// ===============================
// Bagian efek mengetik
// ===============================
const texts = ["Programmer.", "UI/UX Designer.", "Graphic Designer."];
let count = 0, index = 0, isDeleting = false;
const speed = 100, delSpeed = 60, wait = 1500;

function type() {
  const container = document.getElementById("typing-container");
  if (!isDeleting && index <= texts[count].length) {
    container.textContent = texts[count].substring(0, index++);
    setTimeout(type, speed);
  } else if (isDeleting && index >= 0) {
    container.textContent = texts[count].substring(0, index--);
    setTimeout(type, delSpeed);
  } else if (index < 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    setTimeout(type, speed);
  } else {
    isDeleting = true;
    index = texts[count].length - 1;
    setTimeout(type, wait);
  }
}
type();

// Ambil data projek dari REST API
fetch("/api/server/projek")
  .then(res => res.json())
  .then(data => {
    console.log("Data projek:", data);
  })
  .catch(err => console.error("Gagal ambil projek:", err));

// Kirim pesan ke API
async function kirimPesan(nama, email, pesan) {
  const res = await fetch("/api/server/kontak", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama, email, pesan })
  });
  const hasil = await res.json();
  console.log(hasil.status);
}
