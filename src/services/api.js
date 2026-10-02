const API_URL = "https://api-userapi.onrender.com/api/users/getUsers";

export async function getUsers() {
    const response = await fetch(API_URL, {
        headers: {
            "x-api-key": "elev-hemlighet-2026",
        },
    });

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error(`API_KEY_ERROR: ${response.status}`);
        }
        if (response.status === 404) {
            throw new Error(`NOT_FOUND: ${response.status}`);
        }
        if (response.status === 500) {
            throw new Error(`SERVER_ERROR: ${response.status}`);
        }
        throw new Error(`UNKNOWN_ERROR: ${response.status}`);
    }

    return response.json();
}
