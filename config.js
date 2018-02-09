module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  JWT_SECRET: process.env.JWT_SECRET || "SOME_SECRET_STRING",
  JWT_EXPIRY: process.env.JWT_EXPIRY || "7d",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    "mongodb://dev:dev@ds155325.mlab.com:55325/weatherboss"
};