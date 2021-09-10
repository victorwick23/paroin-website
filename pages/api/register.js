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
      to: `victorwicaksono6@gmail.com, ${req.body.email}`,
      subject: `Paroin.id | Pemesanan Berhasil Untuk : ${req.body.productsend}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>
      <h2>
        PEMESANAN BERHASIL UNTUK PAKET ${req.body.productsend} 
      </h2>
      <h3>Detail Pesanan</h3>
      
      <h4 style="padding-bottom: 0px;margin-top: 28px;margin-bottom: 0px;">Email:  ${req.body.email}</h4>
      <h4 style="padding-bottom: 0px;margin-top: 6px;margin-bottom: 0px;">Nama: ${req.body.name}</h4>
      <h4 style="padding-bottom: 0px;margin-top: 6px;margin-bottom: 0px;">Nomer Handphone: ${req.body.message}</h4>
      <h4 style="padding-bottom: 0px;margin-top: 6px;margin-bottom: 0px;">Product: ${req.body.productsend}</h4>
      <h4 style="padding-bottom: 0px;margin-top: 6px;margin-bottom: 60px;">Harga: ${req.body.pricesend}</h4>

      <p style="padding-bottom: 0px;margin-bottom: 0px;">Pesanan anda telah kami terima, silahkan tunggu beberapa saat sampai admin kami menghubungi anda melalui Whatsapp</p>
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