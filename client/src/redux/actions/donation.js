import axios from 'axios';
import {
    GET_DONATIONS,
    ADD_COMMENT,
    ADD_DONATION,
    DONATION_ERROR
} from '../types';


// Get all donations
export const getDonations = () => async dispatch => {
    try {
        const res = await axios.get('/api/donation');
        dispatch({
            type: GET_DONATIONS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DONATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })
    }
}


// Add Donation
export const addDonation = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {

        const res = await axios.post('/api/donation', formData, config);

        dispatch({
            type: ADD_DONATION,
            payload: res.data
        })

    } catch(err) {
        dispatch({
            type: DONATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

// Add comment to donation
export const addComment = (donationId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post(`/api/donation/comment/${donationId}`, formData, config);
        const donations = await axios.get('/api/donations');

        dispatch({
            type: ADD_COMMENT,
            payload: res.data,
            id: donationId,
            updatedDonations: donations.data
        })

    } catch(err) {
        dispatch({
            type: DONATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}