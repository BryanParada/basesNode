const fs = require('fs');

const crearArchivo = async( base = 5, listar = false  ) =>{

    try {
 
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
       
            salida += `${base} ${'x'.green} ${i} ${'='.cyan} ${ base * i} \n`;
            
            
         }

         if( listar ){
            console.log('=============='.cyan);
            console.log('Tabla del: '.blue, base); 
            console.log('=============='.cyan);
  
            console.log(salida);
         }
                 
        
         //OPCION 1
        // fs.writeFiles( `tabla-${base}.txt`, salida, (err) =>{
        //     if (err) throw err;
        
        //     console.log(`tabla-${base}.txt creado`);
            
        // })
     
        
        // OPCION 2 MEJOR
        fs.writeFileSync( `tabla-${base}.txt`, salida);  
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