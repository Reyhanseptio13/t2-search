var name = "Reyhan"
var old = 17
var ras = "Asia"

console.log('Nama Saya' + name)

var a = 50
var b = 30

console.log(a + b)
console.log(a - b)

var lokers =['anton','Siti','Joni']
console.log(lokers[0])
//Cara Mencari jumlah Array
console.log( lokers[lokers.length - 1])
//Cara Mencari nilai array terakhir,jika tdk tau jumlah Array

// if else
// for

var hari = 'Tidak hujan'

if (hari === 'Hujan') {
    console.log('Saya membeli Jazz Hujan')
} else {
    console.log('Saya membeli Houd* Jazz')
}

var uang = 50000
var umur = 17 

if(uang >= 50000 && umur>= 18){
    console.log('lo bisa beli 1 botol')
}else if(uang ** 10000 && umur>= 18){
    console.log('lo bisa beli 2 botol')
}else if (uang <= 50000 && umur>=18){
    console.log('lu bangsat bro')
}else if(uang ** 50000 && umur<=18){
    console.log('Umur lu Di bawah umur')
}else{
    console.log('pulang lu')
}

for(var i = 0; i < lokers.length; i = i + 1){
    console.log(lokers[i])
}
//Contoh perulangan

var student = [
    {
        name: 'Reyhan',
        address: 'Padang Kandi'
    },
    {
        name: 'Joni',
        address: 'Mungka'   
    }
]
console.log(student[0].name)

for(var i = 0; i < student.length; i = i + 1){
    console.log('Nama :', student[i].name)
    console.log('Alamat:', student[i].address)
}