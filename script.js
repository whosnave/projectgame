let angkaRandom = [];
for (let i = 1; i <= 100; i++) {
  angkaRandom.push(i);
}

let startGame = () => {
  alert(
    "Selamat datang di MindMatrix!\n\nDimana kamu akan memilih angka dari 1 - 99 dan jika angka pilihan kamu lebih kecil maka kamu kalah."
  );

  let angkaUser = prompt("Masukkan angka pilihan Anda!");
  let randomize = Math.floor(Math.random() * angkaRandom.length);

  if (!isNaN(angkaUser) && angkaUser >= 1 && angkaUser <= 99) {
    if (angkaUser > angkaRandom[randomize]) {
      document.write(
        `Selamat! Angka kamu lebih besar dari angka yang di acak! <br> <b>${angkaUser}</b> > ${randomize}`
      );
    } else if (angkaUser < angkaRandom[randomize]) {
      document.write(
        `Maaf kamu gagal... <br> <b>${angkaUser}</b> < ${randomize}`
      );
    } else {
      document.write(`Hasil seri! <br> ${angkaUser} = ${randomize}`);
    }
  } else {
    alert("Masukkan angka yang valid!");
  }
}

startGame();
