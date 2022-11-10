const fs = require('fs');

const crearArchivo = async( base = 5 ) =>{

    try {
        
        console.log('==============');
        console.log('Tabla del: ', base); 
        console.log('==============');
    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
       
            salida += `${base} x ${i} = ${ base * i} \n`;
            
            
         }
    
    
        
         console.log(salida);
        
         //OPCION 1
        // fs.writeFiles( `tabla-${base}.txt`, salida, (err) =>{
        //     if (err) throw err;
        
        //     console.log(`tabla-${base}.txt creado`);
            
        // })
     
        
        // OPCION 2 MEJOR
        fs.writeFileSync( `tabla-${base}.txt`, salida);  
        return `tabla-${base}.txt creado`;

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