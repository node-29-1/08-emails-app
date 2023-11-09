const catchError = require('../utils/catchError');
const sendEmail = require('../utils/sendEmail');

const getAll = catchError(async(req, res) => {
    return res.json(/* valor a retornar */)
});

const createEmail = catchError(async(req, res) => {
    const { } = req.body
    await sendEmail({
        to: "andres.mendoza@academlo.com",
        subject: "Prueba desde node",
        html: `
            <h1>Correo desde node :D</h1>
            <p style="color: red">Cualquier texto :D</p>
        `,
    })
    return res.json({ message: "Enviando email" });
});

const sendContactEmail = catchError(async (req, res) => {
    const { name, email, phone, message } = req.body;
    await sendEmail({
        to: 'andres.mendoza@academlo.com',
        subject: 'Mensaje desde el portafolio',
        html: `
            <h1>${name} te escribió desde tu portafolio</h1>
            <p>${message}</p>
            <ul>
                <li><b>Email: </b> ${email}</li>
                <li><b>Phone: </b> ${phone}</li>
            </ul>
        `
    });
    return res.json({ message: "Enviando email"});
});

module.exports = {
    getAll,
    createEmail,
    sendContactEmail,
}
