const fs = require('fs');

const crearArchivo = async( base = 5, listar = false, hasta = 10  ) =>{

    try {
 
        let salida = '', consola = '';
    
        for (let i = 1; i <= hasta; i++) {
       
            salida += `${base} ${'x'} ${i} ${'='} ${ base * i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.cyan} ${ base * i} \n`;
            
            
         }
 

         if( listar ){
            console.log('=============='.cyan);
            console.log('Tabla del: '.blue, base); 
            console.log('=============='.cyan);
  
            console.log(consola);
         }
                 
        
         //OPCION 1
        // fs.writeFiles( `tabla-${base}.txt`, salida, (err) =>{
        //     if (err) throw err;
        
        //     console.log(`tabla-${base}.txt creado`);
            
        // })
     
        
        // OPCION 2 MEJOR
        fs.writeFileSync( `./output/tabla-${base}.txt`, salida);  
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

        
    
     
}

// OPCION 1
// module.exports = {
//     funcionCrearArchivo: crearArchivo 
// }

// OPCION 2
module.exports = {
    crearArchivo 
}