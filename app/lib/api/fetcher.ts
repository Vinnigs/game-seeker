export async function fetcher<T>(endpoint: string): Promise<T> {
    const res = await fetch(endpoint);

    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

    return res.json();
}