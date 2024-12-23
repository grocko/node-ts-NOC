
// PAra inyectar dependencias en una clase se hace por medio del constructor.
// alli se define que es lo que me pueden inyectar. En este caso desde el server.ts instancio la clase y le paso dos 
// dependencias ya definidas en el constructor de la clase CheckService.
// Luego se llama al metodo execute de la clase CheckService y usa las dependencias inyectadas.




interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;


export class CheckService implements CheckServiceUseCase {

    constructor(

        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) {}

    public async execute(url: string): Promise<boolean> {
        try {
            
            const req = await fetch(url);

            if(!req.ok) {
                throw new Error(`Error on check service: ${url}`);
            }
            
            this.successCallback();
            // console.log(`${url} is ok`);
            
            return true;

        } catch (error) {
            
            console.log(`${error}`);
            
            this.errorCallback(`${error}`);
            return false;
        };
        

    };
};