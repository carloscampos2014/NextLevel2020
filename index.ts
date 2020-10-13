interface IUser {
    name: string,
    email: string,
    address: {
        city: string,
        uf: string
    }
}

const showDataUser = (user: IUser) => {
    return `${user.name}-${user.email} (${user.address.city}-${user.address.uf})`;
}

const user: IUser = {
    name: "Carlos Alberto de Lima Campos",
    email: "carlosalbertode.campos@gmail.com",
    address: {
        city: "Guarulhos",
        uf: "SP"
    }
}

console.log(showDataUser(user));