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
      to: `order.paroin@gmail.com, ${req.body.email}`,
      subject: `Paroin.id | Proses Pemesanan Berhasil Untuk : ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>
      <h2>
        PEMESANAN BERHASIL UNTUK PAKET NETFLIX PREMIUM (SHARING) 
      </h2>
      <h3>Detail Pesanan</h3>
      
      <h4>Email:  ${req.body.email}</h4>
      <h4>Nama: ${req.body.name}</h4>
      <h4>Nomer Handphone: ${req.body.message}</h4>

      <p>Pesanan anda telah kami terima, silahkan tunggu beberapa saat sampai admin kami menghubungi anda melalui Whatsapp</p>
      <p>Jika dalam 1 Jam pesanan anda belum di proses harap hubungi Customer Service kami di : +62 838-6675-4428</p>
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