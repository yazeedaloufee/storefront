let data = {
    categories: ['All', 'tablets', 'computers', 'TVs'],
    products: [
        { inStock:12,type: 'tablets', product: '14 x tab', img: 'https://www.ubuy.com.jo/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjE4VjJPeUs1M0wuX0FDX1NMMTUwMF8uanBn.jpg' },
        { inStock:12,type: 'computers', product: 'computer', img: 'https://i5.walmartimages.com/dfw/4ff9c6c9-7dd1/k2-_fe35a111-e1fa-491f-9732-fc1bfd90794f.v1.jpg' },
        { inStock:12,type: 'TVs', product: 'samsumg tv', img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452371cv11d.jpg' }
    ],
    productsShown: [
        { inStock:12,type: 'tablets', product: '14 x tab', img: 'https://www.ubuy.com.jo/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjE4VjJPeUs1M0wuX0FDX1NMMTUwMF8uanBn.jpg' },
        { inStock:12,type: 'computers', product: 'computer', img: 'https://i5.walmartimages.com/dfw/4ff9c6c9-7dd1/k2-_fe35a111-e1fa-491f-9732-fc1bfd90794f.v1.jpg' },
        { inStock:12,type: 'TVs', product: 'samsumg tv', img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452371cv11d.jpg' }
    ],
}

export default (state = data, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'FILTER':
            let categories = state.categories;
            let products = state.products;
            let productsShown;
            if (payload !== 'All') {

                 productsShown = state.products.filter(product => product.type === payload)
            } else {
                 productsShown = state.products;
            }

            return { categories, products, productsShown };


        default:
            return state;
    }
}