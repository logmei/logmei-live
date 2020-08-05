export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

// const getListDatas = (prefix:string)=>{
//   const list = []
//   for(let i = 0 ; i<10 ; i++){
//     list.push({
//       name:`${prefix}-${i}`,
//       title:`${prefix}=${i}-title`,
//       content:'正如在2008年金融危机时一样，美联储在疫情危机中再次扩大了其在全球的权力和影响力。在3月中旬至关重要的两周时间里，美联储从急于筹资的投资者手中创纪录地购买了4500亿美元的美国国债'
//     })
//   }
// }
