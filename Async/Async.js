function pegarUsuario(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve([
            {name: 'Lucas', lang:'Python'},
            {name: 'Maria', lang:'JavaScript'},
            {name: 'João', lang:'Java'}
        ])
        }, 3000);
    })
}

async function main() { // async é usado para indicar que a função é assíncrona e pode conter operações assíncronas, como chamadas de API ou operações de E/S. Ele permite o uso de await dentro da função, o que torna o código mais legível e fácil de entender.
    try {
        const usuarios = await pegarUsuario(); // await é usado para esperar a resolução de uma Promise. Ele pausa a execução da função até que a Promise seja resolvida, permitindo que o código seja escrito de forma síncrona, mesmo que esteja lidando com operações assíncronas. Neste caso, ele espera a resolução da Promise retornada por pegarUsuario() e atribui o resultado à variável usuarios.
        console.log(usuarios);
    } catch (err) {
        console.log(err);
    }
}

// main();

async function segundaFuncao() { // nesse caso a função segundaFuncao é assíncrona, mas não utiliza o await para esperar a resolução da Promise retornada por pegarUsuario(). Em vez disso, ela chama pegarUsuario() e lida com a Promise usando then() e catch(), o que significa que a execução do código continuará imediatamente após a chamada de pegarUsuario(), sem esperar pela resolução da Promise. Isso resulta na mensagem "Esta mensagem será exibida antes dos usuários..." sendo exibida antes dos usuários serem logados no console, pois pegarUsuario() é assíncrona e não bloqueia a execução do código.
    pegarUsuario()
        .then((usuarios) => {
            console.log(usuarios);
        })
        .catch((err) => {
            console.log(err);
        });
    console.log('Esta mensagem será exibida antes dos usuários, pois pegarUsuario é assíncrona e não bloqueia a execução do código.');
}
segundaFuncao();

async function tratamento_erro(){
    let id = await pegarUsuario(); // nesse caso, se a função pegarUsuario() lançar um erro, ele será capturado pelo bloco catch() e exibido no console. O uso de try...catch é uma maneira comum de lidar com erros em funções assíncronas, permitindo que você capture e trate erros de forma eficaz.
    let email = enviarEmail('Olá, tudo bem?', 'lukas.silvalsm@hotmail.com');
    try { // para tratar erros em funçoes com async/await, é comum usar um bloco try...catch. O código dentro do bloco try é executado normalmente, e se ocorrer um erro em qualquer parte do código assíncrono, ele será capturado pelo bloco catch, permitindo que você lide com o erro de maneira apropriada.
        await enviarEmail("Ola, email enviado" , email);
        console.log('Tudo enviado');
    } catch (err) {
        console.log(err);
    }
}