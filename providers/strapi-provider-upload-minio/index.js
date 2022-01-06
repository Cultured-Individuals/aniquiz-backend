const Minio = require('minio')

module.exports = {
  init(providerOptions) {
    const { port, useSSL, endPoint, accessKey, secretKey, bucket, folder } = providerOptions
    const MINIO = new Minio.Client({
      endPoint,
      port: parseInt(port, 10) || 9000,
      useSSL: useSSL === "true",
      accessKey,
      secretKey,
    })

    return {
      upload(file) {
        console.log(file)
        return new Promise((resolve, reject) => {
          // upload file to a bucket
          let path = `${file.hash}${file.ext}`
          if (folder) {
            path = `${folder}/${path}`
          }

          MINIO.putObject(
            bucket,
            path,
            Buffer.from(file.buffer, 'binary'),
            (err, _etag) => {
              if (err) {
                return reject(err)
              }

              const hostPart = (useSSL === 'true' ? 'https://' : 'http://') + `${endPoint}/`
              const filePath = `${bucket}/${path}`
              file.url = `${hostPart}${filePath}`

              console.log(file.url)

              resolve()
            }
          )
        })
      },
      delete(file) {
        console.log(file)
        return new Promise((resolve, reject) => {
          let path = `${file.hash}${file.ext}`
          if (folder) {
            path = `${folder}/${path}`
          }

          MINIO.removeObject(bucket, path, err => {
            if (err) {
              return reject(err)
            }

            resolve()
          })
        })
      },
    }
  },
}