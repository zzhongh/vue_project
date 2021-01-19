module.exports = {
    devServer: {
        port:8081,
        host:'localhost',
        open:true
        // proxy: {
        //     '/productGroup/pagers': {
        //         target: 'http://119.23.142.208:8080/admin',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/productGroup/pagers': '/productGroup/pagers.shtml'
        //         }
        //     }
        // }
    }
}