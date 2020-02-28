const str = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali';

const re = /[W_]/
const words = str.replace(re, '').toLowerCase().split(' ')

const filteredAku = words.filter(item => item  == 'aku')
console.log(filteredAku.length)

const filteredIngin = words.filter(item => item == 'ingin')
console.log(filteredIngin.length)

const filteredDapat = words.filter(item => item == 'dapat')
console.log(filteredDapat.length)
