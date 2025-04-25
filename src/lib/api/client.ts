// This is a placeholder for the API client
export const apiClient = {
    get: (url: string) => fetch(url).then(res => res.json()),
    post: (url: string, body: any) => fetch(url, { method: 'POST', body: JSON.stringify(body) }).then(res => res.json()),
};