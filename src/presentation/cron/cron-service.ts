// Este archivo lo hizo en presentation porque tendria acceso desde consola.
// se usa Type en vez de una interface. Se usa interface cuando se quiere definir una estructura de datos cuando se trata de un objeto.
// Se usa Type cuando se quiere definir un tipo de dato.


import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {

    static createJob(cronTime: CronTime, onTick: OnTick):CronJob {

        const job = new CronJob(
            cronTime,
            onTick,
        );

        job.start();

        return job;
    };

}