module.exports = {
    lintOnSave: false,
    outputDir: 'production',

    chainWebpack: (config) => {
        config.module
            .rule("vue")
            .use("vue-svg-inline-loader")
            .loader("vue-svg-inline-loader")

    },

    devServer: {
        disableHostCheck: true,
        public: "0.0.0.0"
    }
};
