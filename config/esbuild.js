const {build, transform} = require('esbuild');
const {env} = require('process');

const debugMode = env.NODE_ENV !== 'production';
async function esbuildBuild() {
  try {
    await build({
      entryPoints: ['site/_js/script.ts', 'site/_js/service-worker.ts'],
      outdir: 'dist/',
      logLevel: 'info',
      platform: 'browser',
      target: 'es2018',
      format: 'esm',
      minify: true,
      treeShaking: true,
      sourcemap: debugMode,
      bundle: true,
      charset: 'utf8',
      legalComments: 'none',
      // splitting: true,
    });
  } catch (err) {
    console.error('esbuildBuild Error: ', err);
  }
}

async function esbuildTransform(content) {
  try {
    const result = await transform(content, {
      logLevel: 'info',
      platform: 'browser',
      target: 'es2018',
      format: 'esm',
      minify: true,
      treeShaking: true,
      sourcemap: debugMode,
      // bundle: true,
      // splitting: true,
      charset: 'utf8',
      legalComments: 'none',
    });

    return result.code;
  } catch (err) {
    console.error('esbuildTransform Error: ', err);
    return content;
  }
}

module.exports = {esbuildBuild, esbuildTransform};
