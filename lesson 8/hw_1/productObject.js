const productObject = {
    name: 'Печиво Марія',
    weight: 100,
    manufacturer: 'Roshen',
    isOpen: false,
    ingredients: [
        { name: 'мука', amount: '1', measure: 'кг' },
        { name: 'вода', amount: '300', measure: 'мл' }
    ],
    open() {
        this.isOpen = true;
        console.log('Відкрили печиво');
    },
    close() {
        this.isOpen = false;
        console.log('Закрили печиво');
    },
    take() {
        if (this.isOpen) {
            console.log('Пачка відкрита. Можна взяти');
        } else {
            console.log('Пачка закрита. Відкрийте пачку');
        }
    }
};

const cloneObject = (sourceObject) => {
    const jsonObjectString = JSON.stringify(sourceObject);
    const clonedObject = JSON.parse(jsonObjectString);

    for (let propertyName in sourceObject) {
        if (typeof sourceObject[propertyName] === 'function') {
            clonedObject[propertyName] = sourceObject[propertyName].bind(clonedObject);
        }
    }
    return clonedObject;
};

const clonedProductObject = cloneObject(productObject);

clonedProductObject.ingredients.push({ name: 'дріжджі', amount: '5', measure: 'г' });
clonedProductObject.open();

console.log('Оригінальний об’єкт:', productObject);
console.log('Клонований об’єкт:', clonedProductObject);