export type ConfigModule = typeof import("./constants");

export type config = ConfigModule[keyof ConfigModule];
