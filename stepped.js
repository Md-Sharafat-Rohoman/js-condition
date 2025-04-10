const price = 5000;

if (price >= 5000) {
    const disCount = price * 10 / 100;
    console.log(disCount);
    const newPrice = price - disCount;
    console.log(newPrice);
}
else {
    console.log(price)
}