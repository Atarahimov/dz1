const textReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEXT':
            return [...state, action.payload];
        default:
            return state;
    }
};

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        default:
            return state;
    }
};

export { textReducer, counterReducer };
