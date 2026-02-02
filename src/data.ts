export const data = {
    banners: [
        { img: '/assets/banners/banner-1.png', link: '' },
        { img: '/assets/banners/banner-2.png', link: '' },
        { img: '/assets/banners/banner-3.png', link: '' },
        { img: '/assets/banners/banner-4.png', link: '' },
    ],
    products: [
        { id: 1, label: 'Camisa PHP', price: 49.40, image: '/assets/products/camiseta-php.png', liked: false },
        { id: 2, label: 'Camisa Laravel', price: 39.40, image: '/assets/products/camiseta-laravel-branca.png', liked: false },
        { id: 3, label: 'Camisa Node', price: 29.40, image: '/assets/products/camiseta-node.png', liked: false },
        { id: 4, label: 'Camisa React', price: 19.40, image: '/assets/products/camiseta-react-azul.png', liked: false }
    ],
    product: {
        id: 1,
        label: 'Camisa PHP',
        images: [
            '/assets/products/camiseta-php.png',
            '/assets/products/camiseta-laravel-branca.png'
        ],
        price: 19.90,
        liked: false,
        description: 'Alguma descrição do produto'
    },
    addresses: [
        { id: 1, zipcode: '12345-678', street: 'Rua das Flores', number: '123', city: 'São Paulo', state: 'SP', country: 'Brasil'},
        { id: 2, zipcode: '91011-121', street: 'Rua das Flores', number: '124', city: 'São Paulo', state: 'SP', country: 'Brasil'},
        { id: 3, zipcode: '31415-161', street: 'Rua das Flores', number: '125', city: 'São Paulo', state: 'SP', country: 'Brasil'}
    ]
}