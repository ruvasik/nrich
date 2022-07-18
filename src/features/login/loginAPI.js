export function authLogin(login = '', password = '') {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: true }), 500)
  );
}
