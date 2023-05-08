export async function fetchCategories (token?: string) {
  console.log('fetch categories')
    const response = await fetch('http://localhost:3000/category', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };