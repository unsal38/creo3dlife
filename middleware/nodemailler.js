const nodemailer = require('nodemailer')

const send_contact_mail = function send(subject, text) {
      const user = "yesnonoyes38@gmail.com"
        const pass =  "orie dqnq axac urmb"
        const to = "yesno_38@hotmail.com"
    
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user,
                pass
            },
        });
    
        // Send an email using async/await
        (async () => {
            const info = await transporter.sendMail({
                from: '"geçici mail" "yesnonoyes38@gmail.com"',
                to,
                subject,
                text,
            });
    
            console.log("Message sent:", info.messageId);
        })();
}
module.exports = {send_contact_mail}