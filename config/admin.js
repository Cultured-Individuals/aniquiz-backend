if (process.env.SHOW_ADMIN_PANEL !== "true") {
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