const pascalsTriangle = (rowCount) => {
    const triangle = [];
    for(let row = 0; row< rowCount; row++){
        const trianngleRow = []
        for(let col = 0; col < row + 1; col++){
            if(col === 0){
                trianngleRow.push(1)
            }else if(col === row){
                trianngleRow.push(1)
            }else{
                trianngleRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col])
            }
        }
        triangle.push(trianngleRow)
    }
    return triangle
}

const result = pascalsTriangle(9)
let printOutput = ``
for(let i = 0; i < result.length; i++){
    for(let j = 0; j < result.length - i; j++) printOutput += " "
    printOutput += result[i].join(" ") + "\n"
}
console.log(printOutput)