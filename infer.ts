async function fetchAPI<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data as Promise<T>;
}

type APIResponse<T> = T extends (...args: any[]) => Promise<infer R> ? R : never;

async function main() {
  const userResponse: APIResponse<typeof fetchAPI> = await fetchAPI<{ name: string; id: number }>(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  console.log(userResponse);
}

main();
