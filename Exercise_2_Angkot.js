function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arrayKosong = []
    var str = ''
    var fromIdx = 0;
    var toIdx = 0;
    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {}
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
            for (var j = 0; j < rute.length; j++) {
                if (obj.naikDari === rute[j]) {
                    fromIdx = j
                } if (obj.tujuan === rute[j]) {
                    toIdx = j
                }
            }    
            if (toIdx > fromIdx) {
                obj.bayar = (toIdx - fromIdx) * 2000
            } else {
                obj.bayar = (fromIdx - toIdx) * 2000
            }
        arrayKosong.push(obj)
    }
    return arrayKosong
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'A', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]