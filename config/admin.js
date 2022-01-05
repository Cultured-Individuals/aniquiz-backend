if (process.env.IS_PRODUCTION && process.env.IS_PRODUCTION != "false") {
  module.exports = ({ env }) => ({
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4bf7429b33bdb57dd8759692baae0f9e'),
    },
    serveAdminPanel: false
  });
} else {
  module.exports = ({ env }) => ({
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4bf7429b33bdb57dd8759692baae0f9e'),
    },
  });
}