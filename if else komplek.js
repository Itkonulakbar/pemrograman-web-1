let skorNilai = 82;
let nilaiHuruf = "";

// Struktur Pemilihan Kompleks dengan If Else
if (skorNilai >= 85) {
    nilaiHuruf = "A";
} else if (skorNilai >= 75) {
    nilaiHuruf = "B";
} else if (skorNilai >= 60) {
    nilaiHuruf = "C";
} else if (skorNilai >= 45) {
    nilaiHuruf = "D";
} else {
    nilaiHuruf = "E";
}

console.log("Nilai Huruf Anda: " + nilaiHuruf);

// Struktur Pemilihan dengan Switch Case
switch (nilaiHuruf) {
    case "A":
    case "B":
    case "C":
        console.log("Status: DISATUKAN (LULUS)");
        break;
    case "D":
    case "E":
        console.log("Status: TIDAK LULUS / REMEDIAL");
        break;
    default:
        console.log("Nilai tidak valid");
}