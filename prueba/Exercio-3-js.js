


let registros = [ ]
while (true) {
    let usuario = { }
    usuario.nome = prompt('Qual é seu nome? ')
    
    // adiciona o usuario no array
    registros.push(usuario)
    
    if (prompt('deseja registrar outro? ' == 'não') {
        break;
    }
}