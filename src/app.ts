// Funsion anonima autoejecutable o autoinvocada

import { Server } from "./presentation/server";


(async() => {
    main();

})();


function main() {
    Server.start();
}