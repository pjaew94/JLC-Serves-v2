import { DONATION_STAGING } from '../types';

const initialState = {
    amount: 0,
    donator: null,
    message: null,
    location: null,
    comment: []
}

export default function foo(state= initialState, actions) {
    const { payload, type } = actions;

    switch(type) {
        case DONATION_STAGING:
            return {
                amount: payload.amount,
                donator: payload.donator,
                message: payload.message,
                location: payload.location
            }
         default:
             return state;   
    }
}