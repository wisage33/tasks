
class Socket {
    send(user: User) {}
}

class User {}

// Отрефакторите ниже...

enum WhomEnum {
    Self, 
    Other, 
    All
}

const socket = new Socket();

class Server {
    readonly users: User[] = [];

    send(whom: WhomEnum, user?: User): void {
        for(const _user of this.users) {
            switch (whom) {
                case WhomEnum.Self:
                    if(user === _user) {
                        socket.send(_user)
                    }
                    break
                case WhomEnum.Other:
                    if(user !== _user) {
                        socket.send(_user)
                    }
                    break
                case WhomEnum.All:
                    socket.send(_user)
                    break
                default:
                    throw new Error("Пользователь не существует")
                    break
            }
        }
    }

}