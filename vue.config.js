module.exports = {
  runtimeCompiler: true ,
  devServer: {
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        compress: true,
        disableHostCheck: true
      },
    },
  } ,
}
