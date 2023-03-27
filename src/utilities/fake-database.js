const addFakeDb = id => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('Shopping Cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    const quantity = shoppingCart[id]
    if(quantity){
        shoppingCart[id] = quantity + 1;
    }else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('Shopping Cart', JSON.stringify(shoppingCart))
}
const RemoveFakeDb = id => {
    const storedCart = localStorage.getItem('Shopping Cart')
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('Shopping Cart', JSON.stringify(shoppingCart))
        }
    }
}
export {addFakeDb, RemoveFakeDb}