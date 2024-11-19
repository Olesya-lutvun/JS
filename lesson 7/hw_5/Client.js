class Client {
    constructor(id, name, surname , email, phone, products) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = products;
    }
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}

const client = new Client(
    2,
    'Cat',
    'Domchenko',
    '234@gmail.com',
    '+830990546',
    [
        new Product('tv', 1500),

    ]
);

const clients = [
    client,
    new Client(
        2,
        'Alis',
        'Cet',
        '234@gmail.com',
        '+830990546',
        [
            new Product('pulover',  1500),
            new Product('phone', 1255),
            new Product('tv', 1255),
        ]
    ),
    new Client(
        2,
        'Mari',
        'Mariy',
        '234@gmail.com',
        '+830990546',
        [
            new Product( 'tv', 1500),
            new Product('dress', 1255),
        ]
    ),
    new Client(
        75,
        'Emma',
        'Domch',
        '234@gmail.com',
        '+83098652355',
        [
            new Product( 'tv', 1500),
            new Product( 'phone', 1255),
        ]
    ),
    new Client(
        10,
        'Amma',
        'Dastin',
        '234@gmail.com',
        '+830990546',
        [
            new Product( 'tv', 1500),
            new Product('phone', 1255),
            new Product('tv', 1255),
        ]
    ),
    new Client(
        2,
        'Lina',
        'Alan',
        '234@gmail.com',
        '+830990546',
        [
            new Product( 'tv', 1500),
            new Product('phone', 1255),
        ]
    ),
    new Client(
        4,
        'Alina',
        'Adams',
        '234@gmail.com',
        '+8390098888',
        [
            new Product( 'vitamins', 1500),
            new Product('phone', 1255),
            new Product('tv', 1255),
        ]
    ),
    new Client(
        6,
        'Den',
        'Dallas',
        '234@gmail.com',
        '+80098890',
        [
            new Product( 'dress', 1500),
            new Product('shorts', 1255),
        ]
    ),
    new Client(
        7,
        'Anna',
        'Luyt',
        '234@gmail.com',
        '+83088565478',
        [
            new Product( 'clock', 1500),
            new Product('dress', 1255),
            new Product('tv', 1255),
        ]
    ),
    new Client(
        5,
        'Allan',
        'Doman',
        '234@gmail.com',
        '+83099076r6',
        [
            new Product( 'tv', 1500),
        ]
    ),
];


function sorter (client1, client2){
    return client1.order.length - client2.order.length
}
clients.sort(sorter);
console.log( clients);