const    suits = ['spade', 'diamond','heart', 'club'];
const value= ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
const cards = []
for (const suit  of suits) {
    for (const suitElement of value) {
        const card = {cardSuit : suit, value: value};
        if (suit === 'heart' || suit === 'diamond'){
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

console.log(cards.find(card =>card.value ==='ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6'|| card.value !== '7' ||card.value !== '8' ||card.value !== '9')));


const result = cards.reduce((accum, card) =>{
    switch (card.cardSuit){
        case 'spade':
            accum.spades.push(card);
            break
        case 'diamond':
            accum.diamonds.push(card);
            break
        case 'heart':
            accum.hearts.push(card);
            break
        case 'club':
            accum.clubs.push(card);
            break
    }
        return accum;
    }, {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
});
console.log(result)

