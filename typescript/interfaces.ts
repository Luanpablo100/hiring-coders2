interface Usuario {
    nome: string,
    email: string,
    address?: string
}

function getUser(): Usuario {
    return {
        nome: 'Paulo',
        email: 'paulo@gmail.com'
    }
}