function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject(new Error('Erro ao enviar email'));
            }
        }, 5000);
    });
}

enviarEmail('Ola tudo bem?', "Luca@gmail.com")
    .then(() => { // resolver esta ligado ao then
        console.log('Email enviado com sucesso! Deve chegar em breve...');
        console.log('Tudo enviado');
    })
    .catch((err) => { // resolver esta ligado ao catch
        console.log(err);
    });