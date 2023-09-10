// Ambil elemen tombol hamburger dan navigasi
const hamburgerButton = document.getElementById("hamburgerButton");
const navbar = document.querySelector(".isiNavbar");

// Tambahkan event listener untuk menghilangkan kelas 'hidden' pada navigasi ketika tombol hamburger diklik
hamburgerButton.addEventListener("click", () => {
  navbar.classList.remove("hidden");
});

// Ambil elemen tombol silang
const closeButton = document.getElementById("closeButton");

// Tambahkan event listener untuk menambahkan kelas 'hidden' pada navigasi ketika tombol silang diklik
closeButton.addEventListener("click", () => {
  navbar.classList.add("hidden");
});
