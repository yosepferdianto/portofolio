function is_palindrom(str_entry) {
  var ccount = 0;

  //Ubah string menjadi huruf kecil dan hapus semua karakter non-alfanumerik
  var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  var cstr = str_entry; //input string only
  var strl = cstr.length; //Mencari panjang pada string

  //Periksa apakah string kosong atau tidak
  if (cstr === "") {
    console.log("Nothing found!");  // log string kosong
    return false;
  }
  //Periksa apakah panjang string genap atau ganjil
  if ((cstr.length) % 2 === 0) {
    ccount = (cstr.length) / 2;
  } else {
    //Jika panjang string adalah 1 maka itu menjadi palindrom
    if (cstr.length === 1) {
      console.log("Entry is a palindrome.");
      return true;
    } else {
      //Jika panjang string aneh abaikan karakter tengah
      ccount = (cstr.length - 1) / 2;
    }
  }
  console.log('Input string: ' + cstr);
  console.log('Input length: ' + strl);
  console.log('Value center: ' + ccount);

  //Ulangi untuk memeriksa karakter pertama ke karakter terakhir dan kemudian pindah berikutnya
  for (var x = 0; x < ccount; x++) {
    //Bandingkan karakter dan jatuhkan jika tidak cocok
    if (cstr[x] != cstr.slice(-1 - x)[0]) {
      console.log("Entry is not a palindrome.");
      return false; //hasil/output Boolean
    }
  }
  console.log("The entry is a palindrome.");
  return true; //hasil/output Boolean
}