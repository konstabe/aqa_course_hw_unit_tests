const concat = (n) => {
    if (typeof n !== "number") {
        return "должно быть число";
    }

    if (n < 1 || n > 9) {
        return "должно быть число от 1 до 9";
    }

    const n1 = String(n);
    const n2 = String(n) + String(n);
    const n3 = String(n) + String(n) + String(n);

    return Number(n1) + Number(n2) + Number(n3);
}