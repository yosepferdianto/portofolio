function words_count(inputKedua) {
  // Membuat kalimat
  var inputPertama = "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy";
  // Membelah string mengunakan split pemisah sebagai instance dari 1 atau lebih karakter sepasi (kosong)
  var words = inputPertama.split(/\s+/); 

  // Membuat variable counter kalimat yang dicari dengan nilai awal counter = 0 (kosong)
  var counter = 0;
  // Jika Inputan Kedua atau kata yang di cari masih kosong
  if(inputKedua === ""){
    console.log('Nothing found!');
    return false;
  }
  // Perulangan untuk mencari nilai panjang dari sebuah kalimat yang sudah di split
  for (i = 0; i < words.length; i++) {
    // Jika kata yang di cari ada pada kalimat
    if (words[i].includes(inputKedua)) {
      counter++; // Maka counter menambah dari 0 ke nilai i (nilai perulangan panjang kalimat)
    } else{
      counter; // lain jika kata yang dicari tidak ada dalam kalimat makan nilai counter = 0
    }
  }
  // Membuat Log
  console.log('INPUT PERTAMA: ' + inputPertama);
  console.log('INPUT KEDUA: ' + inputKedua);
  console.log('OUTPUT: ' + counter);
  return counter; // Hasil nilai perhitungan Kata yang di cari dalam kalimat
}