# Data Type

Nama: Nabil Anugerah Pangestu

Kelompok: FE-24

1. Pada soal nomor 1 diminta untuk membuat sebuah function generateRandom  dari 2 buah input integer yaitu nilai minimum min dan maksimum max. Penjelesannya disini saya membuat 2 parameter yaitu min dan max kemudian membuat 2 buah kondisi if jika nilai min atau max adalah null, maka function generateRandom tersebut akan menghasilkan nilai 0. Jika nilainya adalah undefined maka function generateRandom nilai min sebagai max dan max akan menjadi nilai 0. kemudian function akan mendapatkan nilai random yang dimana menggunakan perintah Math.random(). Itu akan dikalikan dengan selisih antara max dan min yang sudah diatur sebelumnya. Cara mendapatkan bilangan integer dari bilangan random hasilnya akan dibulatkan menggunakan Math.Floor(), Cara menampilkan hasilnya bisa menggunakan perintah console.log() diikuti dengan mengisi 2 buah angka di dalam console.log(20,1)

2. Pada soal nomor 2 diminta untuk membuat sebuah function chooseDecimals yang dapat menerima 2 buah input berupa n yang menerima tipe data number. n adalah nilai desimal yang akan ditentukan batas desimalnya dan d yang menerima tipe data number. d adalah besaran nilai berapa banyak angka dibelakang desimal dari n. Disini saya membuat function yang bernama chooseDecimals yang didalamnya ada 2 buah parameter yaitu n dan d. Saya membuat kondisi if dengan menambahkan typeof untuk mengecek kedua parameter itu bilangan atau bukan jika salah satu parameter bukan bilangan akan menampilkan NaN artinya tidak terdefinisi, Jika 2 parameter itu bilangan maka akan dilajutkan prosesnya untuk menghitung. Math.pow() berfungsi untuk menghitung hasil pangkat lalu Math.round() digunakan untuk membulatkan bilangan setelah perkalian selesai langkah berikutnya itu dapat membaginya. Cara menampilkan hasilnya bisa menggunakan perintah console.log() diikuti dengan mengisi 2 buah angka di dalam console.log(chooseDecimals(2.100212,2));

3. 
