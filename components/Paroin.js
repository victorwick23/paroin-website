export default function Paroin() {
    return (
        <>
          <div className="flex">
            <div className="w-full md:w-6/12 md:px-10">
              <div className="flex-row ">
                <div className="flex items-center py-4">
                  <div className="w-4/12 md:w-3/12">
                    <img className="md:mx-auto" src="guaranted.svg" alt="" />
                  </div>
                  <div className="w-8/12">
                    <p className="text-xl font-bold mb-2">Garansi Uang Kembali</p>
                    <p className="text-md leading-snug ">Bebas klaim garansi jika terjadi masalah setelah pembelian</p>
                  </div>
                </div>
                <div className="flex items-center py-4">
                  <div className="w-8/12">
                    <p className="text-xl font-bold mb-2 text-right">100% Legal</p>
                    <p className="text-md leading-snug text-right">Setiap akun yang disediakan oleh <span
                        className="text-redTheme">Paroin.id</span> melalui proses yang Legal</p>
                  </div>
                  <div className="w-4/12 md:w-3/12">
                    <img className="md:mx-auto" src="legal.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center py-4">
                  <div className="w-4/12 md:w-3/12">
                    <img className="md:mx-auto" src="service.svg" alt="" />
                  </div>
                  <div className="w-8/12">
                    <p className="text-xl font-bold mb-2">Layanan 24 Jam</p>
                    <p className="text-md leading-snug ">Bebas melakukan proses transaksi dan komplain kapanpun</p>
                  </div>
                </div>
                <div className="flex items-center py-4">
                  <div className="w-8/12">
                    <p className="text-xl font-bold mb-2 text-right">Transaksi Mudah</p>
                    <p className="text-md leading-snug text-right">Lakukan transaksi dengan mudah, murah dan cepat</p>
                  </div>
                  <div className="w-4/12 md:w-3/12">
                    <img className="md:mx-auto" src="transaction.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden  md:flex w-6/12">
              <img src="why.svg" alt="" />
            </div>

          </div>
        </>
    )
}
