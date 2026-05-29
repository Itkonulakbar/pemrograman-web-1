// Function Kompleks dengan Parameter dan Return Value
function kalkulatorSederhana(angka1, angka2, operator) {
    let hasil = 0;
    
    if (operator === "+") {
        hasil = angka1 + angka2;
    } else if (operator === "-") {
        hasil = angka1 - angka2;
    } else if (operator === "*") {
        hasil = angka1 * angka2;
    } else if (operator === "/") {
        hasil = angka1 / angka2;
    } else {
        return "Operator tidak dikenal";
    }
    
    return hasil; // Mengembalikan nilai akhir
}

// Memanggil fungsi dengan argumen
let hasilTambah = kalkulatorSederhana(10, 5, "+");
let hasilKali = kalkulatorSederhana(4, 5, "*");

console.log("Hasil Penjumlahan (10 + 5) : " + hasilTambah);
console.log("Hasil Perkalian (4 * 5)    : " + hasilKali);