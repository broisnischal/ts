import { z } from "zod";

const makeZodSafeSearch = <T>(url: string, schema: z.Schema<T>): Promise<T> => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return schema.parse(res);
    });
};

const result = makeZodSafeSearch(
  "/api/endpoint",
  z.object({
    firstname: z.string(),
    lastname: z.string(),
  })
).then((res) => {
  //     ^?
  console.log(res);
});
