module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a304303e97740980eae6fb67ceec4559'),
  },
});
