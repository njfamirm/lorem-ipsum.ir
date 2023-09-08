const env = {
  siteUrl: process.env.siteUrl ?? '',
  noIndex: process.env.noIndex === '1',
  production: process.env.NODE_ENV === 'production',
};

console.log(JSON.stringify(env));

module.exports = env;
