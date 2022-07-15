const __import = require('./_import_' + process.env.NODE_ENV);
export default (file) => __import(file)