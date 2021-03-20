import {
    DONATION_STAGING
} from '../types';


// Donation Staging (After they've entered information and proceed to payment page)
export const stageDonation = formData => async dispatch => {
    try {
        dispatch({
            type: DONATION_STAGING,
            payload: formData
        })
    } catch (err) {
        
    }
}