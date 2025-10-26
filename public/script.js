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

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);
  } catch (err) {
    console.error("Gagal kirim pesan:", err);
    alert("Terjadi kesalahan saat mengirim pesan!");
  }
});

