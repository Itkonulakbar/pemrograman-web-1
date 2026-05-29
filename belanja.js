// Operator Penugasan (=)
let hargaBarang = 50000;
let jumlahBeli = 3;
let diskon = 15000;
let uangDiberikan = 150000;

// Operator Aritmatika (*, -, /)
let totalKotor = hargaBarang * jumlahBeli; // 150000
let totalBersih = totalKotor - diskon;     // 135000
let uangKembalian = uangDiberikan - totalBersih; // 15000

console.log("Total Belanja: Rp " + totalBersih);
console.log("Kembalian: Rp " + uangKembalian);