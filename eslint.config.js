const js = require('@eslint/js');

module.exports = [
    //reglas para la verificacion del codigo
    //reglas base se ESlint (javascript)
    js.configs.recommended, {
        languageOptions:{
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                __dirname: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn'
        }
    },
    //configuracion adicional solo aplica a los archivos de tests
    {
        files: ['tests/**/*.js'],
        languageOptions:{
            globals:{
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                jest: 'readonly'
            }
        }
    },
    {
        //exclusiones globales(carperas o archivos que ESlint no debe analizar)
        ignores: ['node_modules/', 'logs/']
    }
];