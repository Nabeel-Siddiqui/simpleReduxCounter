export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}


export const incrementByFive = (n) => {
    return {
        type: 'INCREMENT',
        payload: n
    };
}

export const decrementByFive = (n) => {
    return {
        type: 'DECREMENT',
        payload: n
    };
}