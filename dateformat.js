// 定义格式化时间的方法
function dateformat(datestr){
    // 声明一个时间对象
    const date = new Date(datestr)
    const y =padzero(date.getFullYear())
    const m =padzero(date.getMonth()+1)
    const d =padzero(date.getDay())
    const h = padzero(date.getDay())
    const mm = padzero(date.getMinutes())
    const s = padzero(date.getSeconds())
    return `${y}-${m}-${d} ${h}:${mm}:${s}`
}

// 定义补0函数
function padzero(n) {
    return n>9 ? n:'0'+n
}
// 将这个模块导出以供其他js模块使用
module.exports ={
    dateformat
}