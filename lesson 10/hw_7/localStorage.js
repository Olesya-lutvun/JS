function addToLocalStorage ( arrayName, objToAdd){
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem){
        throw new Error('this is not array');

    }
const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object'){
        array.push(objToAdd);

    }
localStorage.setItem( arrayName, JSON.stringify(array));

}
addToLocalStorage('sessionsList', {});