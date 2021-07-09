export default function (req, res) {
    require('dotenv').config()
    const PASSWORD = process.env.password
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'register.paroin@gmail.com',
        pass: PASSWORD,
      },
      secure: true,
    })  
    const mailData = {
      from: 'register.paroin@gmail.com',
      to: 'victorwicaksono6@gmail.com',
      subject: `New Order From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>
      <h2>
        Pesanan Baru Untuk Paket Netflix Premiun 
      </h2>
      <h3> Detail Pesanan :</h3>
      
      <h4>Email Pemesan:  ${req.body.email}</h4>
      <h4>Nama Pemesan: ${req.body.name}</h4>
      <h4>Nomer Handphone Pemesan: ${req.body.message}</h4>

      <p>Segera proses pesanan ini maksimal 1 jam setelah pesan ini masuk</p>
      </div>`
    }  
    transporter.sendMail(mailData, function (err, info) {
      if(err){
          console.log(err)
          res.send("error" + JSON.stringify(err));
      } else{
          console.log(info)
          res.status(200)
          res.send("success");

      }
      
    }) 
    
  }