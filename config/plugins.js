module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-minio',
      providerOptions: {
        accessKey: env('MINIO_ACCESS_KEY', 'minio-access-key'),
        secretKey: env('MINIO_SECRET_KEY', 'minio-secret'),
        bucket: env('MINIO_BUCKET', 'aniquiz'),
        endPoint: env('MINIO_ENDPOINT', 'minio-s3.jmp.blue'),
        port: env('MINIO_PORT', '443'),
        useSSL: env('MINIO_USE_SSL', 'true'),
        folder: env('MINIO_FOLDER', 'cms'),
      },
    },
  },
});
