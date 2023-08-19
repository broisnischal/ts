interface ApiData {
  "maps:longitude": number;
  "maps:latitude": number;
  "maps:address": string;
  awesome: boolean;
}

type RemoveFromObj<T> = {
  [K in keyof T as RemoveMaps<K>]: T[K];
};

type DesiredShape = RemoveFromObj<ApiData>;
//    ^?

type RemoveMaps<T> = T extends `maps:${infer K}` ? K : T;