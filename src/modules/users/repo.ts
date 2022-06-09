import Users from "./models/Users";



export default class UserRepo {
    findUser = (email: string) => {
        return Users.findOne<Users>({where: {email}})
        .then((res: any) => res)
        .catch((error: any) => { throw error; });
    }

    createUser = (data: any) => {
        return Users.create(data, {returning: true})
        .then((res: any) => res)
        .catch((error: any) => { throw error; });
    }

    findUserByToken = (token: string) => {
        return Users.findOne<Users>({where: {token}})
        .then((res: any) => res)
        .catch((error: any) => { throw error; });
    }
}