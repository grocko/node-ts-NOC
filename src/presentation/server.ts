// se pones el metodo start con static para facilitar cuando lo llamamos (se lo puede llamar Server.start();)
// sino fuera static se tendria que instanciar la clase Server y luego llamar al metodo start
// const server = new Server();

// A CronService.createJob se le nandan dos parametros, el primero es un string que representa la frecuencia con la que se va a ejecutar
// el segundo es una funcion que se va a ejecutar cada vez que se cumpla la frecuencia.
// esta funcion crea un nuevo CheckService y le pasa dos callbacks, uno para el caso de exito y otro para el caso de error.
// el callback de exito solo imprime en consola que la url esta ok.
// el callback de error imprime el error en consola. 

import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";



export class Server {

    public static start() {
        console.log('Server started...');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://www.google.com';
                new CheckService(
                    () => console.log(`${url} is ok`),
                (error) => console.log(error)
                ).execute(url)
                // new CheckService().execute('http://localhost:3000/posts')
            }
        );
    }

}