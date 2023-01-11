module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIAXAJA4LBNXFIHLVHB',
        secretAccessKey: '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',
        region: 'eu-west-3',
        params: {
          Bucket: 'capoeira-songs',
          Folder: 'strapi-assets',
        },
      },
      actionOptions: {
        upload: {
          ACL: "private"
        },
        uploadStream: {
          ACL: "private"
        },
        delete: {},
      },
    },
  },
});
