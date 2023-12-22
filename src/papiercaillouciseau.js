function getResult(j1, j2) {
  const regles = {
    pierre: { ciseaux: "victoire j1", feuille: "victoire j2" },
    feuille: { pierre: "victoire j1", ciseaux: "victoire j2" },
    ciseaux: { feuille: "victoire j1", pierre: "victoire j2" },
  };

  if (j1 === j2) {
    return "égalité";
  }

  return regles[j1][j2];
}

function unePartie() {
  const signes = ["pierre", "feuille", "ciseaux"];

  let victoirej1 = 0;
  let victoirej2 = 0;

  for (let tour = 1; tour <= 3; tour++) {
    const j1 = signes[Math.floor(Math.random() * 3)];
    const j2 = signes[Math.floor(Math.random() * 3)];

    const resultat = getResult(j1, j2);

    console.log(
      `tour ${tour}: j1 (${j1}) vs j2 (${j2}) - résultat: ${resultat}`
    );

    if (resultat.startsWith("victoire j1")) {
      victoirej1++;
    } else if (resultat.startsWith("victoire j2")) {
      victoirej2++;
    }
  }

  console.log(`\nrésultat final:
  j1: ${victoirej1} victoire
  j2: ${victoirej2} victoire`);
  return { victoirej1, victoirej2 };
}

unePartie();

module.exports = { getResult, unePartie };
