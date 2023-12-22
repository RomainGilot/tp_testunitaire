const { getResult, unePartie } = require("../src/papiercaillouciseau.js");

describe("Jeux", () => {
  test("getResult() retourne un vainqueur j1", () => {
    const result = getResult("pierre", "ciseaux");
    expect(result).toBe("victoire j1");
  });

  test("getResult() retourne un vainqueur j1", () => {
    const result = getResult("ciseaux", "feuille");
    expect(result).toBe("victoire j1");
  });

  test("getResult() retourne un vainqueur entre ciseaux et ciseaux", () => {
    const result = getResult("ciseaux", "ciseaux");
    expect(result).toBe("égalité");
  });
  test("getResult() retourne un vainqueur entre feuille et feuille", () => {
    const result = getResult("feuille", "feuille");
    expect(result).toBe("égalité");
  });

  test("getResult() retourne un vainqueur j2", () => {
    const result = getResult("ciseaux", "pierre");
    expect(result).toBe("victoire j2");
  });

  test("getResult() retourne un vainqueur j2", () => {
    const result = getResult("feuille", "ciseaux");
    expect(result).toBe("victoire j2");
  });

  test("unePartie() simule une partie et retourne un resultat", () => {
    const { victoirej1, victoirej2 } = unePartie();

    expect(typeof victoirej1).toBe("number");
    expect(typeof victoirej2).toBe("number");

    expect(victoirej1).toBeGreaterThanOrEqual(0);
    expect(victoirej1).toBeLessThanOrEqual(3);

    expect(victoirej2).toBeGreaterThanOrEqual(0);
    expect(victoirej2).toBeLessThanOrEqual(3);

    expect(victoirej1 + victoirej2).toBeLessThanOrEqual(3);
  });
});
