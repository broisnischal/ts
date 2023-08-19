function createFetcher<T>(url: string): () => Promise<T> {
  return () => fetch(url).then((res) => res.json() as Promise<T>);
}

type FetcherReturnType<T> = ReturnType<ReturnType<typeof createFetcher<T>>>;

const fetcher = createFetcher<{ id: number; name: string }>(
  "https://jsonplaceholder.typicode.com/users/1"
);

type UserData = FetcherReturnType<typeof fetcher>;

// type value = Awaited<UserData>;

fetcher().then((userData) => {
  console.log(userData);
});
