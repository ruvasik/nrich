export function authLogin(email = '', password = '') {
  return fetch('https://api.m3o.com/v1/user/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({email, password}) // body data type must match "Content-Type" header
  })
}
