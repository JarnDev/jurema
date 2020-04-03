/**
 * Esse exemplo vai rodar os métodos em série, pois o await bloqueia a execução até que a função seja finalizada.
 * Coloquei uns logs extras para demonstração
 * Pode perceber que o tempo final é a soma dos dois timers.
 */


function method(timer){
    return new Promise( (res, rej) => {
        try {
            setTimeout( () => res(1), timer)
        } catch (error) {
            rej(error)
        }

    })

}

console.time()
async function run(){
    await method(2000)
    await method(3000)
    console.timeEnd()

}

run()