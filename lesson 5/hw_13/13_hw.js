

const exchange = (hryvni, dovidnykValut, va) => {
    // Find necessary currency information
    let chosenCurrency;

    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    //

    const result = sumUAH / chosenCurrency.value;

    return result;
}

const result = exchange(
    10000,
    [
        {currency:'USD',value:40},
        {currency:'EUR',value:42}
    ],
    'USD'
);

console.log(result);
