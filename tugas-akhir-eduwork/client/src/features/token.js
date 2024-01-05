const token = localStorage.getItem("token");
export const myToken = { headers: { Authorization: `Bearer ${token}` } };
