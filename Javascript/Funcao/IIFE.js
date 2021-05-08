//IIFE - Immediately Invoked Function Expression

//execução automáica desta função sem comprometer e encher o scope Global
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do scope mais abrangente!')
})()