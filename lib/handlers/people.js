import { LEGISCAN_BASE_URL } from '../config.js';
export const fetchPersonById = async (peopleId, apiKey) => {
    const op = 'getPerson';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${peopleId}`).then(res => res.json());
        return res.person;
    }
    catch (error) {
        console.log('Error fetching', peopleId, 'error:', error);
        return undefined;
    }
};
export const fetchPeopleBySessionId = async (sessionId, apiKey) => {
    const op = 'getSessionPeople';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${sessionId}`).then(res => res.json());
        return res.sessionpeople;
    }
    catch (error) {
        console.log('Error fetching', sessionId, 'error:', error);
        return undefined;
    }
};
export const fetchPersonWithSponsoredBillsById = async (peopleId, apiKey) => {
    const op = 'getSponsoredList';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&id=${peopleId}`).then(res => res.json());
        return res.sponsoredbills;
    }
    catch (error) {
        console.log('Error fetching', peopleId, 'error:', error);
        return undefined;
    }
};
