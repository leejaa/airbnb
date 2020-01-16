import Redis from "ioredis";
import { RedisPubSub } from "graphql-redis-subscriptions";

const options: Redis.RedisOptions = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    retryStrategy: (times: number) => Math.max(times * 100, 3000),
} as any;

export const pubSub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
});

export const redis = new Redis(`${process.env.REDIS_URL}`);