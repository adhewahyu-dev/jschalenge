class str {
    constructor(wordlower, wordupper, wordcapital, wordreverse, wordcontains, wordrandom, wordcount, wordhitung,x ,y){
        this.wordlower = wordlower
        this.wordupper = wordupper
        this.wordcapital = wordcapital
        this.wordreverse = wordreverse
        this.wordcontains = wordcontains
        this.wordrandom = wordrandom
        this.wordcount = wordcount
        this.wordhitung = wordhitung
        this.x = x
        this.y = y
    }
    static lower(wordlower){
        console.log(wordlower.toLowerCase())
    }
    static upper(wordupper){
        console.log(wordupper.toUpperCase())
    }
    static capitalize(wordcapital){
        let capitalizeString = (str) => str[0].toUpperCase() 
    + str.slice(1).toLowerCase()
        let words = wordcapital.split(' ').map(capitalizeString)
        const fix = words.join(' ')
        console.log(fix)
    }
    static reverse(wordreverse){
        let splitString = wordreverse.split("")
        let reverseArray = splitString.reverse()
        let joinArray = reverseArray.join("")
        console.log(joinArray) 
    }
    static contains(x,y){
        let obj = 'object'
        if(typeof(y) === obj){
            for(let i=0; i<=y.length; i++ ){
                if(x.includes(y[i]) === true){
                    console.log(true)
                    break
                }else{
                    console.log(false)
                }
            }
        }
        else {
            console.log(x.includes(y))
        }
    }
    static random(wordrandom){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length
            if (wordrandom === undefined){
                for ( var i = 0; i < 16; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    console.log(result)
            }else{
                for ( var i = 0; i < wordrandom; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    console.log(result)
            }
    }
    static count(wordcount){
        console.log(wordcount.length)
    }
    static countWords(wordhitung){
        const kata = wordhitung.split(' ')
        console.log(kata.length)
    }
}

str.lower('MAKAN')
str.upper('makan')
str.capitalize('saya ingin makan nasi goreng')
str.reverse('kasur')
str.contains('Saya ingin makan sate', 'makan')
str.contains('Saya ingin makan sate', 'rujak')
str.contains('Saya ingin makan sate', ['sate', 'rujak'])
str.random(4)
str.count('lorem ipsum')
str.countWords('lorem ipsum')