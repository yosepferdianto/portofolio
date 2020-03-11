function is_palindrom(string) {
  let size = string.length - 1;
  let data = [];
  for (i = 0; i <= size; i++) {
    data[i] = string[size - i];
  }
  let newString = data.join('');
  console.log(newString);
  if (string == newString) {
    return true;
  } else {
    return false;
  }
}