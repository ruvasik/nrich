export function authProfile({email = '', password} = '') {
  return fetch('https://reqres.in/api/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
}
