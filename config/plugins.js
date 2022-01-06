module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-minio-ce',
      providerOptions: {
        accessKey: env('MINIO_ACCESS_KEY', 'minio-access-key'),
        secretKey: env('MINIO_SECRET_KEY', 'minio-secret'),
        bucket: env('MINIO_BUCKET', 'minio-bucket'),
        endPoint: env('MINIO_ENDPOINT', 'minio.jmp.blue'),
        port: env('MINIO_PORT', '9000'),
        useSSL: env('MINIO_USE_SSL', 'true'),
        host: env('MINIO_HOST', 'minio.jmp.blue'),
        folder: env('MINIO_FOLDER', 'folder'),
      },
    },
  },
});
