const API_URL = "https://api-userapi.onrender.com/api/users/getUsers";

export async function getUsers() {
    const response = await fetch(API_URL, {
        headers: {
            "x-api-key": "elev-hemlighet-2026",
        },
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    return response.json();
}
