//require 是 CommonJS 的模块导入方式，不支持模块的默认导出，因此导入的结果其实是一个含 default 属性的对象，因此需要使用 .default 来获取实际的组件
// module.exports = file => require('@/views/' + file + '.vue').default
module.exports = (file) => () => import('@/views/' + file + '.vue').catch(err => {
    
})

