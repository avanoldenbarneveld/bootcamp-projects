export async function fetchWithAuth(url, options = {}) {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("No token found!");
      return Promise.reject("No token found!");
    }
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    };
  
    return fetch(url, { ...options, headers });
  }
  