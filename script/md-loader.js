// async function doneFn(context){
//   var callback = this.async();
//   callback(context)
// }

module.exports = function(context) {

  // //context是被处理文件里面的内容
  
  // // 调皮操作在项目内容里添加上自己的名字
  
  // context += '\/**my name is tiaopi*\/' + context;
  
  // // 替换内容
  
  // context = context.replace(/console\.log\(.*\)/g, '');
  
  // // 返回想要的结果 return context;
  // async function donFn(){
  //   var callback = this.async();
  //   callback(context)
  // }

    // console.log("context-->", context);

    return `module.exports = \`` + context + `\` ;`
  }