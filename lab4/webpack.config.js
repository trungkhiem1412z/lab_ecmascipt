const path = require('path');

module.exports = {
    mode : 'development',
    entry :{
        test  : './src/bai4.js',
        
    } ,
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : '[name].js'
    },
    watch : true

}