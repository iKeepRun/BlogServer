const { REDIS_CONFIG } = require("../conf/db");
const redis = require("redis");

const redisClient = redis.createClient({
  url: `redis://${REDIS_CONFIG.host}:${REDIS_CONFIG.port}`,
  legacyMode: true // 如果需要兼容旧版代码
});

async function connectRedis() {
  try {
    await redisClient.connect();
    console.log("Redis connected successfully");
  } catch (e) {
    console.error("Failed to connect to Redis", e);
  }
}

connectRedis();

module.exports = { redisClient };
