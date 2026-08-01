import { legiscanRequest } from '../request.js';
export const fetchPersonById = async (peopleId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getPerson', { id: peopleId });
    return res.person;
};
export const fetchPeopleBySessionId = async (sessionId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getSessionPeople', {
        id: sessionId,
    });
    return res.sessionpeople;
};
export const fetchPersonWithSponsoredBillsById = async (peopleId, apiKey) => {
    const res = await legiscanRequest(apiKey, 'getSponsoredList', {
        id: peopleId,
    });
    return res.sponsoredbills;
};
