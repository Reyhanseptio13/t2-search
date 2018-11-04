var students= [
{
    Nis : '170700791',
    name : 'Reyhan'
}, 
{
    Nis : '170700792',
    name : 'Wendi'
},
{
    Nis : '170700793',
    name : 'Qolbi'
},
{
    Nis : '170700794',
    name : 'Farid'
},
{
    Nis : '170700795',
    name : 'Yogi'
},
{
    Nis : '170700796',
    name : 'Mustafa'
},
{
    Nis : '170700797',
    name : 'Gia'
},
{
    Nis : '170700798',
    name : 'Azim'
},
{
    Nis : '170700799',
    name : 'Lutfi'
},
{
    Nis : '170700800',
    name : 'Wafi'
},
{
    Nis : '170700801',
    name : 'Revan'
},
{
    Nis : '170700802',
    name : 'Mizan'
},
{
    Nis : '170700803',
    name : 'Ridwan'
},
{
    Nis : '170700804',
    name : 'Zandri'
},
{
    Nis : '170700804',
    name : 'Arif'
},
{
    Nis : '170700805',
    name : 'Dika'
},
{
     Nis : '170700806',
    name : 'Rizki ananda'
},
{
    Nis : '170700807',
    name : 'Rizki Fauzan'
},
{
    Nis : '170700808',
    name : 'Danol'
},
{
    Nis : '170700808',
    name : 'Danol'
},
{
    Nis : '170700809',
    name : 'Tio'
}
]  
   //ini utk proses pencarian data
   //ketika tombol di tekan
function cari () {
    var ketik = document.getElementById('search').value
    for(var i= 0; i < students.length; i = i + 1){
        if (students[i].Nis == ketik){
            document.getElementById('tampilnama').textContent = students[i].name
           
        }
    }
}