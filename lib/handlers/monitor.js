import { LEGISCAN_BASE_URL } from '../config.js';
export const fetchMonitorList = async (record, apiKey) => {
    const op = 'getMonitorList';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&record=${record}`).then(res => res.json());
        return res.monitorlist;
    }
    catch (error) {
        console.log('Error fetching', record, 'error:', error);
        return undefined;
    }
};
export const fetchMonitorListRaw = async (record, apiKey) => {
    const op = 'getMonitorListRaw';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&record=${record}`).then(res => res.json());
        return res.monitorlist;
    }
    catch (error) {
        console.log('Error fetching', record, 'error:', error);
        return undefined;
    }
};
export const setMonitorByListAndAction = async ({ list, action, stance = 'watch', apiKey, }) => {
    const op = 'setMonitor';
    try {
        const res = await fetch(`${LEGISCAN_BASE_URL}/?key=${apiKey}&op=${op}&action=${action}&stance=${stance}&list=${list}`).then(res => res.json());
        return res.return;
    }
    catch (error) {
        console.log('Error setting monitor', error);
        return undefined;
    }
};
