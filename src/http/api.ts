const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || '';

type RequestOptions = Omit<RequestInit, 'method' | 'headers' | 'body'>;

async function request<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
    }

    return res.json() as Promise<T>;
}

export const $API = {
    post<T>(
        endpoint: string,
        body?: unknown,
        options?: RequestOptions
    ): Promise<T> {
        return request<T>(endpoint, {
            ...options,
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
        });
    },
};