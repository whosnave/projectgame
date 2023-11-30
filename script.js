let angkaRandom = [];
for (let i = 1; i <= 100; i++) {
  angkaRandom.push(i);
}

let startGame = () => {
  alert(
    "Selamat datang di MindMatrix!\n\nDimana Anda akan memilih angka dari 1 - 99 dan jika angka pilihan Anda lebih kecil maka Anda kalah."
  );

  let angkaUser = prompt("Masukkan angka pilihan Anda!");
  let randomize = Math.floor(Math.random() * angkaRandom.length);

  if (!isNaN(angkaUser) && angkaUser >= 1 && angkaUser <= 99) {
    if (angkaUser > randomize) {
      document.write(
        `Selamat! Angka kamu lebih besar dari angka yang di acak! <br> <b>${angkaUser}</b> > ${randomize}`
      );
    } else if (angkaUser < randomize) {
      document.write(
        `Maaf! angka kamu lebih kecil dari yang di acak... <br> <b>${angkaUser}</b> < ${randomize}`
      );
    } else if (angkaUser == randomize) {
      document.write(`Hasil seri! <br> ${angkaUser} = ${randomize}`);
    }
  } else {
    alert("Masukkan angka yang valid!");
  }
};

startGame();
