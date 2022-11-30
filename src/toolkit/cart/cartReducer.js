const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    offers: 0,
    shops: 0,
    sendPrice: 0,
    step: 0,
    checkout: false,
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    const sendPrice = items.reduce((total, product) => total + product.sendPrice, 0);
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0);
    let offers = items.reduce((total, product) => total + ((product.price * product.offer / 100) * product.quantity), 0);
    const numbers = [];
    items.map(item => numbers.push(item.shop))
    const newNumbers = [...new Set(numbers)];
    return { itemsCounter, total, offers, sendPrice, shops: newNumbers.length }
}

const cartReducer = (state=initialState, action) => {
    // console.log(action.type)
    switch(action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false,
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems),

            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems),

            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems),

            }
        case "CHECKOUT" :
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                offers: 0,
                sendPrice: 0,
                shops: 0,
                step: 0,
                checkout: true,
            }
        case "STEP_PLUS" :
            return {
                ...state,
                step: state.step + 1
            }
        case "STEP_MINUS" :
            return {
                ...state,
                step: state.step - 1
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                shops: 0,
                sendPrice: 0,
                offers: 0,
                step: 0,
                checkout: false,
            }
        default: 
            return state;
    }   
}

export default cartReducer