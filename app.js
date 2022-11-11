
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                }) 
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    demandOption: true
                }) 
                .check( (argv, options ) =>{
                    if( isNaN(argv.b)) {
                        throw 'La base debe ser un número'
                    }
                    return true;
                })
                .argv;

// option('l') 
console.clear();
//console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.b);




//console.log(process.argv);
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);



//const base = 3;




crearArchivo(argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );

