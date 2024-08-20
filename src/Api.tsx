export const API_URL = 'https://localhost:7260/api/ecotech/app/expense/create'

export function POST_API(formData: any) {
  return {
    url: API_URL,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData
    }
  }
}
