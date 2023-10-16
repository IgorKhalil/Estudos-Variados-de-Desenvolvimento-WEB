var selecao = 'uruguai'
console.log(selecao)

if (selecao == 'Brasil'){
    console.log(`${selecao} já ganhou 5 vezes a copa`)
} else if (selecao == 'Argentina' || selecao == 'Uruguai'){
    console.log(`${selecao} já ganhou 2 vezes a copa`)
}
else{
    console.log(`${selecao} nunca ganhou uma copa do mundo`)
}