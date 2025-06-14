import { BASE_URL } from '../config';

export class APIService {
  async get<T>(endpoint: string) {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    const data = (await res.json()) as T;

    return data;
  }

  async post<T>(endpoint: string, payload?: Record<any, any> | null) {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload ? JSON.stringify(payload) : undefined,
    });
    const data = (await res.json()) as T;

    return data;
  }

  async put<T>(endpoint: string, payload?: Record<any, any> | null) {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload ? JSON.stringify(payload) : undefined,
    });
    const data = (await res.json()) as T;

    return data;
  }

  async delete<T>(endpoint: string, payload?: Record<any, any> | null) {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload ? JSON.stringify(payload) : undefined,
    });
    const data = (await res.json()) as T;

    return data;
  }
}
