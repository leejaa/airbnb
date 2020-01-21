"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = (from, to, email_secret) => {
    const API_KEY = process.env.MAILGUN_APIKEY;
    const DOMAIN = process.env.DOMAIL_NAME;
    const mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });
    const data = {
        from,
        to,
        subject: '인증번호입니다.',
        text: `인증번호는 ${email_secret} 입니다.`
    };
    mailgun.messages().send(data, (body) => {
        console.log(body);
    });
};
//# sourceMappingURL=sendEmail.js.map