import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getMembers = () => {
    api.get('/members');
};

export const getMember = (id) => {
    api.get(`/members/${id}`);
};


export const createMember = (data) => api.post('/members/', data);
export const updateMember = (id, data) => api.put(`/members/${id}/`, data);
export const deleteMember = (id) => api.delete(`/members/${id}/`);

export const getLoans = () => api.get('/loans/');
export const getLoan = (id) => api.get(`/loans/${id}/`);
export const createLoan = (data) => api.post('/loans/', data);
export const updateLoan = (id, data) => api.put(`/loans/${id}/`, data);
export const deleteLoan = (id) => api.delete(`/loans/${id}/`);

export const getTransactions = () => api.get('/transactions/');
export const getTransaction = (id) => api.get(`/transactions/${id}/`);
export const createTransaction = (data) => api.post('/transactions/', data);
export const updateTransaction = (id, data) => api.put(`/transactions/${id}/`, data);
export const deleteTransaction = (id) => api.delete(`/transactions/${id}/`);