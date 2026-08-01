import { legiscanRequest } from '../request.js';
export const fetchMonitorList = async (apiKey, record = 'current') => {
    const res = await legiscanRequest(apiKey, 'getMonitorList', { record });
    return res.monitorlist;
};
export const fetchMonitorListRaw = async (apiKey, record = 'current') => {
    const res = await legiscanRequest(apiKey, 'getMonitorListRaw', { record });
    return res.monitorlist;
};
export const setMonitorByListAndAction = async ({ list, action, stance = 'watch', apiKey, }) => {
    const res = await legiscanRequest(apiKey, 'setMonitor', {
        list,
        action,
        stance,
    });
    return res.return;
};
