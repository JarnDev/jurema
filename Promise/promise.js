
/**
 * Esse exemplo vai rodar os métodos em paralelo, e o Promise.All aguarda todos os promises serem finalizados.
 * Coloquei uns logs extras para demonstração
 * Pode perceber que o tempo final é equivalente ao maior timer.
 */

function method(timer){
    return new Promise( (res, rej) => {
        try {
            setTimeout( (timer) => {console.log(`timer ${timer} finalizado`);res(1)}, timer, timer)
        } catch (error) {
            rej(error)
        }

    })

}

console.time()
Promise.all([method(1000), method(2000)]).then( () => {

    console.log('Funções finalizadas!')

    console.timeEnd()

})