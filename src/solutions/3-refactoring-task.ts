class Socket {
    send(user: User) {}
}

class User {}

// Отрефакторите ниже...
const socket = new Socket();

class Server {
    send(recipient: User[] | User): void {
        if(recipient instanceof User) {
            socket.send(recipient)
        } else if (Array.isArray(recipient)) {
            for(let user of recipient) {
                socket.send(user)
            }
        }
    };

}

const server = new Server();
const user1 = new User();
const user2 = new User();
server.send([user1, user2])