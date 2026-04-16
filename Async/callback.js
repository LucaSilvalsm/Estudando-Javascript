function enviarEmail(corpo, para,callback){
    setTimeout(() => {
        console.log(`Email enviado para ${para} com o corpo: ${corpo}
            ---------------------------------------------
            De: Lucas Moreira            
            `);
        callback();
    }, 5000);
}

console.log('Iniciando o envio do email...');
enviarEmail('Olá, tudo bem?', 'lukas.silvalsm@hotmail.com',()=> {
    console.log('Email enviado com sucesso! Deve chegar em breve...');
    console.log('Tudo enviado');
});    
console.log("Email enviado Enviado com sucesso! Deve chegar em breve...");  
console.log("Tudo enviado")