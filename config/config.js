module.exports = {
  spotify: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET_ID
  },
  server: {
    port: "3001"
  },
  api: {
    errors: {
      silent:
        process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
    }
  },
}