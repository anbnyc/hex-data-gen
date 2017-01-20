'use strict'

const fs = require('fs')

module.exports = function (n, writeToFile) {

  try {

    let data = [];
    const len = 2*n - 1;
    for(let i = 0; i < 2*n-1; i++){
      const rowlen = len - Math.abs(n - 1 - i)
      let row = [];
      for(let j = 0; j < rowlen; j++){
        row.push({
          row: i,
          cell: j,
          cellAlign: j + Math.max(0, i + 1 - n)
        })
      }
      data.push(row)
    }

    if(writeToFile){
      fs.writeFile(writeToFile+'.json',JSON.stringify(data,null,2),err=>{
        if(err){
          console.log("Error writing to file.")
          throw new Error(err)
        }
      })
      return "Success. File now at "+writeToFile+".json"
    } else {
      return data
    }

  } catch(err) {
    throw new Error(err)
  }

}