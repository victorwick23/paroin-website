import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from "react-hook-form";
import Lottie from 'react-lottie';
import animationData from './lottie/loading.json';

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [productgroup, setProductGroup] = useState('null')
  const [product, setProduct] = useState('null')
  const [productsend, setSentProduct] = useState('')
  const [pricesend, setSentPrice] = useState ('')
  const [submitted, setSubmitted] = useState(false)
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorProduct, setErrorProduct] = useState(false)
  const [errorProductGroup, setErrorProductGroup] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPhone, setValidPhone] = useState(false)
  const { register, handleSubmit } = useForm();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
   
  }

  let [isOpen, setIsOpen] = useState(false)
  let [isLoading, setLoading] = useState(false)
  let [isModalConfirm, setConfirm] = useState(false)


  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  function closeLoading(){
    setLoading(false)
  }
  function openLoading(){
    setLoading(true)
  }
  function useValidation(){
    name === '' ? setErrorName(true) : setErrorName(false)
    email === '' ? setErrorEmail(true) : setErrorEmail(false)
    email.includes('@') ? setValidEmail(false) : setValidEmail(true)
    message === '' ? setErrorMessage(true) : setErrorMessage(false)
    product === 'null' ? setErrorProduct(true) : setErrorProduct(false)
    productgroup === 'null' ? setErrorProductGroup(true) : setErrorProductGroup(false)    
    message.match(/^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/g) ? setValidPhone(false) : setValidPhone(true)
    if (name !== '' && email !== '' && message !== '' && validEmail === false && validPhone === false && product !== 'null' && productgroup !== 'null') {
      openConfirm()
    }
  }

  function openConfirm(){
    setDataSent()
    setConfirm(true)
    console.log(productsend, pricesend)
  }
  function closeConfirm(){
    setConfirm(false)
  }
  function refreshPage(){
    window.location.reload();
  }
  function setDataSent(){
    if (product === 'netflixprem') {
      setSentProduct('Netflix Premium Sharing (1 Bulan)')
      setSentPrice('Rp. 40.000')
    }else if(product === 'youtubeprem'){
      setSentProduct('Youtube Premium Sharing (1 Bulan)')
      setSentPrice('Rp. 9.000')
    }else if(product === 'youtubeprem4'){
      setSentProduct('Youtube Premium Individu (4 Bulan)')
      setSentPrice('Rp. 30.000')
    }else if(product === 'youtubeprem6'){
      setSentProduct('Youtube Premium Individu (6 Bulan)')
      setSentPrice('Rp. 40.000')
    }else if(product === 'spotifyprem'){
      setSentProduct('Spotify Premium Individu(1 Bulan)')
      setSentPrice('Rp. 15.000')
    }else if(product === 'spotifyprem3'){
      setSentProduct('Spotify Premium Individu (3 Bulan)')
      setSentPrice('Rp. 35.000')
    }else if (product === 'viuprem'){
      setSentProduct('Viu Premium Private (1 Bulan)')
      setSentPrice('Rp. 7.000')
    }else if (product === 'viuprem2'){
      setSentProduct('Viu Premium Private (2 Bulan)')
      setSentPrice('Rp. 10.000')
    }else if (product === 'viuprem3'){
      setSentProduct('Viu Premium Private (3 Bulan)')
      setSentPrice('Rp. 13.000')   
    }else if (product === 'viuprem6'){
      setSentProduct('Viu Premium Private (6 Bulan)')
      setSentPrice('Rp. 24.000')
    }else if (product === 'molaprem'){
      setSentProduct('Mola TV Premium Sharing (1 Bulan)')
      setSentPrice('Rp. 53.000')
    }else if (product === 'wetvpriv'){
      setSentProduct('We TV Premium Private (1 Bulan)')
      setSentPrice('Rp. 30.000')
    }else if (product === 'wetvprem'){
      setSentProduct('We TV Premium Sharing (1 Bulan)')
      setSentPrice('Rp. 7.000')
    }else if (product === 'wetvprem2'){
      setSentProduct('We TV Premium Sharing (2 Bulan)')
      setSentPrice('Rp. 15.000')
    }else if (product === 'wetvprem3'){
      setSentProduct('We TV Premium Sharing (3 Bulan)')
      setSentPrice('Rp. 25.000')
    }else if (product === 'wetvprem6'){
      setSentProduct('We TV Premium Sharing (6 Bulan)')
      setSentPrice('Rp. 40.000')
    }else if (product === 'vidioprem'){
      setSentProduct('Vidio Premium Private (1 Bulan)')
      setSentPrice('Rp. 23.000')
    }else if (product === 'disneyprem'){
      setSentProduct('Disney+ Hotstar Sharing (1 Bulan)')
      setSentPrice('Rp. 15.000')
    }else if (product === 'disneyprem3'){
      setSentProduct('Disney+ Hotstar Sharing (3 Bulan)')
      setSentPrice('Rp. 27.000')
    }else if (product === 'disneypriv'){
      setSentProduct('Disney+ Hotstar Private (1 Bulan)')
      setSentPrice('Rp. 39.000')
    }else if (product === 'disneypriv3'){
      setSentProduct('Disney+ Hotstar Private (3 Bulan)')
      setSentPrice('Rp. 75.000')
    }else if (product === 'disneypriv6'){
      setSentProduct('Disney+ Hotstar Private (6 Bulan)')
      setSentPrice('Rp. 110.000')
    }else if (product === 'disneypriv12'){
      setSentProduct('Disney+ Hotstar Private (12 Bulan)')
      setSentPrice('Rp. 173.000')
    }
    
    
  }

  const registerForm = (e) => { 
    closeConfirm()
    openLoading()
    let data = {
      name,
      email,
      message, 
      productsend,
      pricesend
    }
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then( (res) => {
      closeLoading()
      if (res.status === 200) {
        openModal()
        setName('')
        setSubmitted(true)
        setEmail('')
        setMessage('')
        setProductGroup('null')
        setProduct('null')
      }
    })
  }

    return (
        <>
      {isLoading &&
        <div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Lottie 
                options={defaultOptions}
                  height={200}
                  width={300}
                />
                <p
                  as="h2"
                  className="text-lg font-bold leading-6 text-redTheme text-center mt-4"
                >
                  Data Anda Sedang Diproses
                </p>
              </div>
          </div>
        </div>
      </div>
      }

      {isModalConfirm && 
         <div>
         <div className="fixed inset-0 z-10 overflow-y-auto">
           <div className="min-h-screen px-4 text-center">
             <span
               className="inline-block h-screen align-middle"
               aria-hidden="true"
             >
               &#8203;
             </span>
               <form onSubmit={handleSubmit(registerForm)} className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                 <div className="flex-col">
                   <div className="w-full">
                      <p className="w-full text-redTheme text-xl font-bold pb-2">Konfirmasi Pesanan </p>
                      <div className="w-full border-b border-redTheme"></div>
                   </div>
                   <div className="w-full pt-4">
                        <p className="text-md text-base leading-snug">Periksa kembali pesanan anda. klik Proses pesanan setelah semua data benar</p>
                   </div>

                   <div className="w-full py-4 ">
                     <div className="flex border-b border-gray-300 border-dashed py-1 items-center">
                        <div className="w-3/12">
                            <p className="text-md">Name  </p>
                        </div>
                        <div className="w-9/12">
                            <p className="text-md font-bold">: {name}</p>
                        </div>
                     </div>
                     <div className="flex border-b border-gray-300 border-dashed py-1 items-center">
                        <div className="w-3/12">
                            <p className="text-md">Email  </p>
                        </div>
                        <div className="w-9/12">
                            <p className="text-md font-bold break-all">: {email}</p>
                        </div>
                     </div>
                     <div className="flex border-b border-gray-300 border-dashed py-1">
                        <div className="w-3/12">
                            <p className="text-md">No. HP  </p>
                        </div>
                        <div className="w-9/12">
                            <p className="text-md font-bold">: {message}</p>
                        </div>
                     </div>
                     <div className="flex border-b border-gray-300 border-dashed py-1">
                        <div className="w-3/12">
                            <p className="text-md">Product 
                           
                             </p>
                        </div>
                        <div className="w-9/12">
                            {product === 'netflixprem' && (
                              <p className="text-md font-bold">: Netflix Sharing Premium</p>
                            )}
                            {product === 'youtubeprem' && (
                              <p className="text-md font-bold">: Youtube Premium Sharing</p>
                            )}
                            {product === 'youtubeprem4' && (
                              <p className="text-md font-bold">: Youtube Premium Individu</p>
                            )}
                            {product === 'youtubeprem6' && (
                              <p className="text-md font-bold">: Youtube Premium Individu</p>
                            )}
                            {product === 'spotifyprem' && (
                              <p className="text-md font-bold">: Spotify Premium Individu</p>
                            )}
                             {product === 'spotifyprem3' && (
                              <p className="text-md font-bold">: Spotify Premium Individu</p>
                            )}
                             {product === 'viuprem' && (
                              <p className="text-md font-bold">: Viu Premium Private</p>
                            )}
                            {product === 'viuprem2' && (
                              <p className="text-md font-bold">: Viu Premium Private</p>
                            )}
                            {product === 'viuprem3' && (
                              <p className="text-md font-bold">: Viu Premium Private</p>
                            )}
                            {product === 'viuprem6' && (
                              <p className="text-md font-bold">: Viu Premium Private</p>
                            )}
                            {product === 'molaprem' && (
                              <p className="text-md font-bold">: Mola TV Premium Sharing</p>
                            )}
                            {product === 'wetvpriv' && (
                              <p className="text-md font-bold">: We TV Premium Private</p>
                            )}
                            {product === 'wetvprem' && (
                              <p className="text-md font-bold">: We TV Premium Sharing</p>
                            )}
                            {product === 'wetvprem2' && (
                              <p className="text-md font-bold">: We TV Premium Sharing</p>
                            )}
                            {product === 'wetvprem3' && (
                              <p className="text-md font-bold">: We TV Premium Sharing</p>
                            )}
                            {product === 'wetvprem6' && (
                              <p className="text-md font-bold">: We TV Premium Sharing</p>
                            )}
                            {product === 'vidioprem' && (
                              <p className="text-md font-bold">: Vidio Premium Private</p>
                            )}
                            {product === 'disneyprem' && (
                              <p className="text-md font-bold">: Disney+ Hotstar Sharing</p>
                            )}
                            {product === 'disneyprem3' && (
                              <p className="text-md font-bold">: Disney+ Hotstar Sharing</p>
                            )}
                            {product === 'disneypriv' && (
                              <p className="text-md font-bold">: Disney+ Hotstar Private</p>
                            )}
                            {product === 'disneypriv3' && (
                              <p className="text-md font-bold">: Disney+ Hotstar Private</p>
                            )}
                            {product === 'disneypriv6' && (
                              <p className="text-md font-bold">: Disney+ Hotstar Private</p>
                            )}
                            {product === 'disneypriv12' && (
                              <p className="text-md font-bold">: Disney+ Hotstar Private</p>
                            )}
                            
                        </div>
                     </div>
                     <div className="flex border-b border-gray-300 border-dashed py-1">
                        <div className="w-3/12">
                            <p className="text-md">Durasi 
                             </p>
                        </div>
                        <div className="w-9/12">
                            {product === 'netflixprem' && (
                                  <p className="text-md font-bold">: 1 Bulan</p>
                                )}
                            {product === 'youtubeprem' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                             {product === 'youtubeprem4' && (
                              <p className="text-md font-bold">: 4 Bulan</p>
                            )}
                             {product === 'youtubeprem6' && (
                              <p className="text-md font-bold">: 6 Bulan</p>
                            )}
                            {product === 'spotifyprem' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                            {product === 'spotifyprem3' && (
                              <p className="text-md font-bold">: 3 Bulan</p>
                            )}
                            {product === 'viuprem' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                            {product === 'viuprem2' && (
                              <p className="text-md font-bold">: 2 Bulan</p>
                            )}
                            {product === 'viuprem3' && (
                              <p className="text-md font-bold">: 3 Bulan</p>
                            )}
                            {product === 'viu6prem' && (
                              <p className="text-md font-bold">: 6 Bulan</p>
                            )}
                            {product === 'molaprem' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                            {product === 'wetvpriv' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                            {product === 'wetvprem' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                            {product === 'wetvprem2' && (
                              <p className="text-md font-bold">: 2 Bulan</p>
                            )}
                            {product === 'wetvprem3' && (
                              <p className="text-md font-bold">: 3 Bulan</p>
                            )}
                            {product === 'wetvprem6' && (
                              <p className="text-md font-bold">: 6 Bulan</p>
                            )}
                            {product === 'vidioprem' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                            {product === 'disneyprem' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                            {product === 'disneyprem3' && (
                              <p className="text-md font-bold">: 3 Bulan</p>
                            )}
                            {product === 'disneypriv' && (
                              <p className="text-md font-bold">: 1 Bulan</p>
                            )}
                            {product === 'disneypriv3' && (
                              <p className="text-md font-bold">: 3 Bulan</p>
                            )}
                            {product === 'disneypriv6' && (
                              <p className="text-md font-bold">: 6 Bulan</p>
                            )}
                            {product === 'disneypriv12' && (
                              <p className="text-md font-bold">: 12 Bulan</p>
                            )}
                            
                            
                        </div>
                     </div>
                     <div className="flex border-b border-gray-300 border-dashed py-1">
                        <div className="w-3/12">
                            <p className="text-md">Harga </p>
                        </div>
                        <div className="w-9/12">
                            {product === 'netflixprem' && (
                              <p className="text-md font-bold">: Rp. 40.000</p>
                            )}
                            {product === 'youtubeprem' && (
                              <p className="text-md font-bold">: Rp. 9.000</p>
                            )}
                             {product === 'youtubeprem4' && (
                              <p className="text-md font-bold">: Rp. 30.000</p>
                            )}
                             {product === 'youtubeprem6' && (
                              <p className="text-md font-bold">: Rp. 40.000</p>
                            )}
                            {product === 'spotifyprem' && (
                              <p className="text-md font-bold">: Rp. 15.000</p>
                            )}
                            {product === 'spotifyprem3' && (
                              <p className="text-md font-bold">: Rp. 35.000</p>
                            )}
                            {product === 'viuprem' && (
                              <p className="text-md font-bold">: Rp. 7.000</p>
                            )}
                            {product === 'viuprem2' && (
                              <p className="text-md font-bold">: Rp. 10.000</p>
                            )}
                            {product === 'viuprem3' && (
                              <p className="text-md font-bold">: Rp. 13.000</p>
                            )}
                            {product === 'viuprem6' && (
                              <p className="text-md font-bold">: Rp. 24.000</p>
                            )}
                            {product === 'molaprem' && (
                              <p className="text-md font-bold">: Rp. 53.000</p>
                            )}
                            {product === 'wetvpriv' && (
                              <p className="text-md font-bold">: Rp. 30.000</p>
                            )}
                            {product === 'wetvprem' && (
                              <p className="text-md font-bold">: Rp. 7.000</p>
                            )}
                            {product === 'wetvprem2' && (
                              <p className="text-md font-bold">: Rp. 15.000</p>
                            )}
                            {product === 'wetvprem3' && (
                              <p className="text-md font-bold">: Rp. 25.000</p>
                            )}
                            {product === 'wetvprem6' && (
                              <p className="text-md font-bold">: Rp. 40.000</p>
                            )}
                            {product === 'vidioprem' && (
                              <p className="text-md font-bold">: Rp. 23.000</p>
                            )}
                            {product === 'disneyprem' && (
                              <p className="text-md font-bold">: Rp. 15.000</p>
                            )}
                            {product === 'disneyprem3' && (
                              <p className="text-md font-bold">: Rp. 27.000</p>
                            )}
                            {product === 'disneypriv' && (
                              <p className="text-md font-bold">: Rp. 39.000</p>
                            )}
                            {product === 'disneypriv3' && (
                              <p className="text-md font-bold">: Rp. 75.000</p>
                            )}
                            {product === 'disneypriv6' && (
                              <p className="text-md font-bold">: Rp. 110.000</p>
                            )}
                            {product === 'disneypriv12' && (
                              <p className="text-md font-bold">: Rp. 173.000</p>
                            )}
                            
                        </div>
                     </div>
                   </div>

                   <div className="w-full py-2">
                        <p className="text-gray-400 text-sm">Metode pembayaran yang kami terima: </p>
                        <p className="text-gray-400 text-sm italic">Bank : BCA, BSI, Jenius(BTPN) </p>
                        <p className="text-gray-400 text-sm italic">E-Wallet : Ovo, Gopay, LinkAja, Dana, ShopeePay </p>
                   </div>

                  <div className="flex justify-end pt-4">
                    <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-redTheme bg-white border border-transparent rounded-md hover:bg-white hover:text-redTheme hover:border hover:border-redTheme focus:outline-none " onClick={closeConfirm}>
                          Batal
                    </button>
                    <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm ml-4 font-medium text-white bg-redTheme border border-transparent rounded-md focus:outline-none " onClick={(e)=>{handleSubmit(e)}}>
                          Proses Pesanan
                    </button>
                  </div>

                 </div>
                   
           
                        
               </form>
           </div>
         </div>
       </div>
      
      }

      <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Pemesanan berhasil
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Pesanan anda telah kami terima, silahkan tunggu beberapa saat sampai admin kami menghubungi anda melalui Whatsapp 
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-redTheme border border-transparent rounded-md hover:bg-white hover:text-redTheme hover:border hover:border-redTheme focus:outline-none "
                          onClick={closeModal}
                        >
                          Selesai
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>

      
        <div className="grid justify-items-center">
              <p className="w-full text-redTheme text-2xl font-bold text-center md:text-3xl">Beli Sekarang</p>
              <div className="border-b border-redTheme w-12 pt-2"></div>
              <p className="w-full text-redTheme text-md font-bold pt-4 text-center md:text-lg md:pt-8">Beli sekarang, pesanan langsung kami proses tanpa ribet buat akun!</p>
          </div>
         <div id="registerPage" className="flex ms">
             
            <div className="hidden md:flex md:w-6/12">
                <img src="register.svg" alt="" />
            </div>
            <div className="w-full md:w-6/12 md:px-24">
            
          <div className="flex">
            <div  className="flex-row w-full py-2">
                <label htmlFor="name" className="w-full text-redTheme text-sm">Nama</label>
                <input value={name}  {...register("name", { required: true })} type="text" onChange={(e)=>{setName(e.target.value)}} name='name' className="w-full bg-white rounded-md px-4 md:shadow-xl focus:outline-none py-2 mt-1" placeholder="Masukan Nama Anda"/>
                {errorName && 
                <div><p className="text-redTheme italic text-xs font-bold">Nama tidak boleh kosong</p></div>
                }
            </div>
          </div>
          <div className="flex">
            <div className="flex-row w-full py-2">
                <label htmlFor="email" className="w-full text-redTheme text-sm">Email</label>
                <input value={email} {...register("email", { required: true })} type="email" onChange={(e)=>{setEmail(e.target.value)}} name='email' className="w-full bg-white rounded-md px-4 md:shadow-xl focus:outline-none py-2 mt-1 " placeholder="Masukan Email Anda"/>
                {errorEmail && 
                <div><p className="text-redTheme italic text-xs font-bold">Email tidak boleh kosong</p></div>
                }
                {validEmail && 
                <div><p className="text-redTheme italic text-xs font-bold">Format email harus benar</p></div>
                }
            </div>
          </div>
          <div className="flex">
            <div className="flex-row w-full py-2">
                <label htmlFor="message" className="w-full text-redTheme text-sm">No. Handphone (Whatsapp)</label>
                <input value={message} type="text" onChange={(e)=>{setMessage(e.target.value)}} name='message' className="w-full bg-white rounded-md px-4 md:shadow-xl focus:outline-none py-2 mt-1" placeholder="Nomor Whatsapp Anda"/>
                {errorMessage && 
                <div><p className="text-redTheme italic text-xs font-bold">Nomor Handphone tidak boleh kosong</p></div>
                }
                {validPhone && 
                <div><p className="text-redTheme italic text-xs font-bold">Nomor Handphone harus benar</p></div>
                }
            </div>
          </div>
          <div className="flex">
            <div className="flex-row w-full py-2">
                <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Paket</label>
                <div className="relative inline-block w-full text-gray-700">
                  <select value={productgroup} onChange={(e)=>{setProductGroup(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                    <option value="null">Pilih Paket</option>
                    <option value="netflix">Netflix Premium</option>
                    <option value="youtube">Youtube Premium</option>
                    <option value="spotify">Spotify Premium</option>
                    <option value="viu">Viu Premium</option>
                    <option value="mola">Mola TV Premium</option>
                    <option value="wetv">We TV Premium</option>
                    <option value="vidio">Vidio Premium</option>
                    <option value="disney">Disney+ Premium</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                  </div>
                </div>
                {errorProductGroup && 
                <div><p className="text-redTheme italic text-xs font-bold">Pilih Paket Anda</p></div>
                }
            </div>
          </div>
          
          {productgroup === 'netflix' && (
              <div className="flex">
              <div className="flex-row w-full py-2">
                  <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Durasi Paket</label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select value={product} onChange={(e)=>{setProduct(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                      <option value="null">Pilih Durasi Paket Anda</option>
                      <option value="netflixprem">1 Bulan (Rp. 40.000)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  {errorProduct && 
                  <div><p className="text-redTheme italic text-xs font-bold">Pilih Durasi Anda</p></div>
                  }
              </div>
            </div>
          )}

          {productgroup === 'youtube' && (
              <div className="flex">
              <div className="flex-row w-full py-2">
                  <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Durasi Youtube</label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select value={product} onChange={(e)=>{setProduct(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                      <option value="null">Pilih Durasi Paket Anda</option>
                      <option value="youtubeprem">1 Bulan (Rp. 9.000)</option>
                      <option value="youtubeprem4">4 Bulan (Rp. 30.000)</option>
                      <option value="youtubeprem6">6 Bulan (Rp. 40.000)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  {errorProduct && 
                  <div><p className="text-redTheme italic text-xs font-bold">Pilih Durasi Anda</p></div>
                  }
              </div>
            </div>
          )}

          {productgroup === 'spotify' && (
              <div className="flex">
              <div className="flex-row w-full py-2">
                  <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Durasi Spotify</label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select value={product} onChange={(e)=>{setProduct(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                      <option value="null">Pilih Durasi Paket Anda</option>
                      <option value="spotifyprem">1 Bulan (Rp. 15.000)</option>
                      <option value="spotifyprem3">3 Bulan (Rp. 35.000)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  {errorProduct && 
                  <div><p className="text-redTheme italic text-xs font-bold">Pilih Durasi Anda</p></div>
                  }
              </div>
            </div>
          )}

          {productgroup === 'viu' && (
              <div className="flex">
              <div className="flex-row w-full py-2">
                  <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Durasi Viu</label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select value={product} onChange={(e)=>{setProduct(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                      <option value="null">Pilih Durasi Paket Anda</option>
                      <option value="viuprem">1 Bulan (Rp. 7.000)</option>
                      <option value="viuprem2">2 Bulan (Rp. 10.000)</option>
                      <option value="viuprem3">3 Bulan (Rp. 13.000)</option>
                      <option value="viuprem6">6 Bulan (Rp. 24.000)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  {errorProduct && 
                  <div><p className="text-redTheme italic text-xs font-bold">Pilih Durasi Anda</p></div>
                  }
              </div>
            </div>
          )}

          {productgroup === 'mola' && (
              <div className="flex">
              <div className="flex-row w-full py-2">
                  <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Durasi Paket</label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select value={product} onChange={(e)=>{setProduct(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                      <option value="null">Pilih Durasi Paket Anda</option>
                      <option value="molaprem">1 Bulan (Rp. 53.000)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  {errorProduct && 
                  <div><p className="text-redTheme italic text-xs font-bold">Pilih Durasi Anda</p></div>
                  }
              </div>
            </div>
          )}

          {productgroup === 'wetv' && (
              <div className="flex">
              <div className="flex-row w-full py-2">
                  <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Durasi Wetv</label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select value={product} onChange={(e)=>{setProduct(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                      <option value="null">Pilih Durasi Paket Anda</option>
                      <option value="wetvpriv">1 Bulan Private (Rp. 30.000)</option>
                      <option value="wetvprem">1 Bulan Sharing (Rp. 7.000)</option>
                      <option value="wetvprem2">2 Bulan Sharing (Rp. 15.000)</option>
                      <option value="wetvprem3">3 Bulan Sharing (Rp. 25.000)</option>
                      <option value="wetvprem6">4 Bulan Sharing (Rp. 40.000)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  {errorProduct && 
                  <div><p className="text-redTheme italic text-xs font-bold">Pilih Durasi Anda</p></div>
                  }
              </div>
            </div>
          )}

          {productgroup === 'vidio' && (
              <div className="flex">
              <div className="flex-row w-full py-2">
                  <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Durasi Vidio</label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select value={product} onChange={(e)=>{setProduct(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                      <option value="null">Pilih Durasi Paket Anda</option>
                      <option value="vidioprem">1 Bulan Private (Rp. 23.000)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  {errorProduct && 
                  <div><p className="text-redTheme italic text-xs font-bold">Pilih Durasi Anda</p></div>
                  }
              </div>
            </div>
          )}

          {productgroup === 'disney' && (
              <div className="flex">
              <div className="flex-row w-full py-2">
                  <label htmlFor="name" className="w-full text-redTheme text-sm">Pilih Durasi Disney+</label>
                  <div className="relative inline-block w-full text-gray-700">
                    <select value={product} onChange={(e)=>{setProduct(e.target.value)}} className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2 appearance-none">
                      <option value="null">Pilih Durasi Paket Anda</option>
                      <option value="disneyprem">1 Bulan Sharing (Rp. 15.000)</option>
                      <option value="disneyprem3">3 Bulan Sharing (Rp. 27.000)</option>
                      <option value="disneypriv">1 Bulan Private (Rp. 39.000)</option>
                      <option value="disneypriv3">3 Bulan Private (Rp. 75.000)</option>
                      <option value="disneypriv6">6 Bulan Private (Rp. 110.000)</option>
                      <option value="disneypriv12">12 Bulan Private (Rp. 173.000)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </div>
                  </div>
                  {errorProduct && 
                  <div><p className="text-redTheme italic text-xs font-bold">Pilih Durasi Anda</p></div>
                  }
              </div>
            </div>
          )}

          <div className="flex w-full my-8">
            <div className="w-full">
                {/* <button onClick={(e)=>{handleSubmit(e)}} type="submit" className="bg-redTheme px-4 py-2 rounded-md mx-auto block">
                  <p className="text-white font-bold">Beli Sekarang</p>
                </button> */}
                <button className="bg-redTheme px-4 py-2 rounded-md mx-auto block text-white font-bold"  onClick={useValidation}>Daftar Sekarang</button>
                
            </div>
          </div>
             
            </div>
         </div>
        </>
    )
}
