// purpose user wants to add a products
// find the place to store the data

const addToDb = id => {
    const storedCard = getStoredCard();

    if (id in storedCard) {
        storedCard[id] += 1;
    }
    else {
        storedCard[id] = 1;

    }
    updataDb(storedCard)
}

const removeFromDb = id => {
    const storedCart = getStoredCard();
    delete storedCart[id];
    updataDb(storedCart)

}

const updataDb = cart => {

    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}



const getStoredCard = () => {
    const exists = localStorage.getItem('shopping_cart');
    return exists ? JSON.parse(exists) : {};

}

const clearTheCart = () => localStorage.removeItem('shopping_cart');

export { addToDb, getStoredCard, removeFromDb, clearTheCart }
