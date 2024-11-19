export const API_URL = 'https://localhost:7260/api/ecotech/app/expense/create'

export function TOKEN_POST(body: any) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'aplication/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function TOKEN_VALIDATE_POST(token: any) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

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

export function USER_GET(token: any) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + token,
      }
    }
  }
}
