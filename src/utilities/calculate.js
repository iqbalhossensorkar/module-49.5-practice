const getTotal = products => {
    const total = products.reduce((previus, current) => previus + current.price, 0)
    return total;
}
export {getTotal}