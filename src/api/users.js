// src/api/users.js
const BASE = 'https://jsonplaceholder.typicode.com/users';

async function handleRes(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API error: ${res.status} ${res.statusText} ${text}`);
  }
  return res.json();
}

export async function fetchUsers() {
  const res = await fetch(BASE);
  const data = await handleRes(res);
  // map to shape we need
  return data.map(u => {
    const [firstName, ...rest] = (u.name || '').split(' ');
    return {
      id: u.id,
      firstName: firstName || '',
      lastName: rest.join(' ') || '',
      email: u.email || '',
      department: u.company?.name || 'General',
      // keep raw if needed:
      _raw: u
    };
  });
}

export async function createUser(user) {
  // JSONPlaceholder will return the created object with an id
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return handleRes(res);
}

export async function updateUser(id, user) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return handleRes(res);
}

export async function deleteUser(id) {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  return handleRes(res);
}
