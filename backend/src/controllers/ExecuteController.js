const connection = require('../app');
const { exec } = require('child_process');

module.exports = {
    async index(request, response) {
        console.log('ok entrou')
        exec('F:\\TrabalhoCarol\\DashboardTest\\backend\\src\\runtest.bat', (err, stdout,stderr)=>{
                if(err){
                    console.log(`Não foi possível executar os testes: ${err}`)
                }
            })

            return response.stdout();
    }
}