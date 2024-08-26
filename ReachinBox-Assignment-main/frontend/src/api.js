import axios from 'axios';

const API_URL = 'https://hiring.reachinbox.xyz/api/v1/onebox'; 

export const fetchMailThread = (token, mailId) => {
    return axios.get(`${API_URL}/messages/${mailId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
};


export const fetchMails = (token) => axios.get(`${API_URL}/list`, { headers: { Authorization: `Bearer ${token}` } });
export const deleteMailThread = (token, thread_id) => axios.delete(`${API_URL}/messages/${thread_id}`, { headers: { Authorization: `Bearer ${token}` } });
export const resetInbox = (token) => axios.get(`${API_URL}/reset`, { headers: { Authorization: `Bearer ${token}` } });
export const replyToMail = (thread_id, token, data) => axios.post(`${API_URL}/reply/${thread_id}`, data, { headers: { Authorization: `Bearer ${token}` } });
