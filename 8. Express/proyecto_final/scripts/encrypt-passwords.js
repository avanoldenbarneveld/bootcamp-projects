const bcrypt = require('bcrypt');
const { User } = require('./models'); // Ajusta la ruta a tu modelo

(async () => {
    const users = await User.findAll();
    const saltRounds = 10;

    for (const user of users) {
        if (!user.password.startsWith('$2b$')) { // Solo encripta si no está encriptado
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
            await user.save();
        }
    }
    console.log('Contraseñas encriptadas');
    process.exit();
})();
