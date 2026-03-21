const send_contact_mail = require('../middleware/nodemailler')
const contact_mail_send = async function (req, res) {
    const mail_data = req.body
    const name = mail_data[0]
    const mail = mail_data[1]
    const tel_number = mail_data[2]
    const title = mail_data[3]
    const mail_text = mail_data[4]
    const text = `${name} isimli ${mail} maili olan ${tel_number} telefon numaralı müşteri ${title} konulu ${mail_text} ihtiyacı var`
    await send_contact_mail.send_contact_mail(title, text)
}
module.exports = { contact_mail_send }