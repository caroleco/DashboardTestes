
const { exec } = require('child_process');

module.exports = {
    async index(request, response) {
        exec(`F:\\TrabalhoCarol\\DashboardTest\\backend\\src\\runtest.bat`, (err, stdout, stderr) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return;
            }
            return console.log(stdout)
        })

    }
}