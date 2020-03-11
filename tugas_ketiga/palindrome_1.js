function is_palindrom(str) {
  var gnjl = 0;
  str = str.toLowerCase(); //Ubah string menjadi huruf kecil
  str = str.replace(/[\W_]+/g, ''); //Hapus semua karakter non-alfanumerik

  var tr = false; // variabel default hasil/output adalah bukan palindrome (false)
  var tr_log = "Entry is not a palindrome.";

  // Periksa apakah string kosong atau tidak
  if (str === "") {
    tr_log = "Nothing found!"; // log string kosong
    return false;
  }

  var strs = str.split(""); // Membagi string menjadi array substring (satu-persatu)
  var strl = strs.length; // Mencari panjang pada string
  var cntr = Math.ceil(strl / 2); // Pembulatan nilai genap dari panjang string

  // Periksa kondisi jika nilai panjang string ganjil
  if (strl % 2 == 1) gnjl = 1;

  console.log('Input string: ' + strs);
  console.log('Input length: ' + strl);
  console.log('Value center: ' + cntr);

  var str1 = [];
  var str2 = [];

  // Perulangan nilai genap pada nilai yang dihasilkan center (cntr)
  for (var i = 0; i <= cntr - 1; i++) {
    str1.push(strs[i]); // Menjadikan hasil perulangan menjadi Array
  }
  // Perulangan nilai ganjil pada nilai yang dihasilkan center (cntr)
  for (var i = cntr - 1; i < strl; i++) {
    str2.push(strs[i]); // Memasukan hasil perulangan menjadi Array
  }

  // Periksa apakah panjang string genap atau ganjil
  if (gnjl) {
    //jika hasil genap tidak melakukan apaun, karena variable gnjl = 0
  } else {
    //jika hasil bukan genap (ganjil) karena variable gnjl = 0 sudah menjadi 1
    str2.splice(0, 1); // menghapus/mengabaikan nilai array[1] pada str2
  }

  str1 = str1.join(''); // String pada str1 nilai awal
  str2 = str2.reverse().join(''); // Membalikan sebuah string yang dihasilkan pada str2 (misal: at, menjadi: ta)

  // jika yang di hasilakn str1 dengan str2 sama maka hasil/output terbukti palindrome (true) 
  if (str1 == str2) {
    tr = true;
    tr_log = "The entry is a palindrome.";
  } // jika yang di hasilakn str1 dengan str2 tidak sama maka hasil/output tidak terbukti palindrome (false)

  console.log('Checking: ' + str1 + ' = ' + str2 + ' ?'); // log laporan hasil/output antara str1 dengan str2 yang sudah 
  console.log('Info result: ' + tr_log);
  console.log('Output Boolean: ' + tr);
  return tr; //hasil/output Boolean
}