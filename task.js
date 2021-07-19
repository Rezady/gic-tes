// Print the first occurence from left to right
function firstOcc(str) {
  var saveChar = {};
  var resStr = "";
  var elStr;
  // push properti dan value elemen string pada save Char
  for (elStr of str) {
    if (saveChar[elStr] !== elStr) {
      // push properti dan value elStr pada save Char
      saveChar[elStr] = elStr;
      resStr += elStr;
    }
  }
  // print hasil
  console.log(resStr);
}

// Print the first in lexicographical order
function firstLex(str) {
  var saveChar = {};
  var resStr = "";
  var idx, elStr;

  // iterasi elemen string dimulai dari posisi terakhir
  for (idx = str.length - 1; idx >= 0; idx--) {
    elStr = str[idx];

    if (saveChar[elStr] !== elStr) {
      // push properti dan value elStr pada save Char
      saveChar[elStr] = elStr;

      // concat char dengan mempertahankan urutan char
      resStr = elStr + resStr;
    }
  }

  // print hasil
  console.log(resStr);
}

firstOcc("sebaerb"); // sebar
firstLex("sebaerb"); // saerb
