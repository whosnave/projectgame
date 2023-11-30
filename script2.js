let dataHewan = [
    { ciri: "Hidup di air, tidak bisa terbang", jawaban: "ikan" },
    { ciri: "Hidup di darat, bisa terbang", jawaban: "burung" },
    { ciri: "Hidup di darat, memiliki empat kaki", jawaban: "kucing" },
  ];
  
  function startGame() {
    alert("Selamat datang di Game Tebak Hewan!");
  
    let randomIndex = Math.floor(Math.random() * dataHewan.length);
    let randomHewan = dataHewan[randomIndex];
    let userGuess = prompt("Tebak hewan apa ini?\n\n" + randomHewan.ciri);
  
    if (userGuess !== null) {
      let lowercaseGuess = userGuess.toLowerCase();
      let correctAnswer = randomHewan.jawaban.toLowerCase();
  
      if (lowercaseGuess === correctAnswer) {
        alert("Selamat, jawaban Anda benar!");
      } else {
        alert(
          "Maaf, jawaban Anda salah. Jawaban yang benar adalah: " + correctAnswer
        );
      }
    } else {
      alert("Permainan dibatalkan.");
    }
  }
  
  startGame();
  