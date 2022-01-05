module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6c1713269d22f4d0468e9c118415fab3'),
  },
});
