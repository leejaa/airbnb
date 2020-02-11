export const sendEmail = ( from: string, to: string, email_secret: string ) => {
    const API_KEY = process.env.MAILGUN_APIKEY;
    const DOMAIN = process.env.DOMAIL_NAME;
    const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

    const data = {
        from,
        to,
        subject: '인증번호입니다.',
        text: `인증번호는 ${ email_secret } 입니다.`
    };

    mailgun.messages().send(data, ( body: any ) => {
        console.log(body);
    });
};

export const sendAuthEmail = ( to: string, refreshToken: string ) => {
    const API_KEY = process.env.MAILGUN_APIKEY;
    const DOMAIN = process.env.DOMAIL_NAME;
    const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

    const data = {
        from: "app158557384@heroku.com",
        to,
        subject: '사용자 인증',
        html: `<a href="http://localhost:3000?refreshToken=${refreshToken}">사용자 인증 클릭</a>`
    };

    mailgun.messages().send(data, ( body: any ) => {
        console.log(body);
    });
};