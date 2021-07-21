import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from "react-hook-form";
import Lottie from 'react-lottie';
import animationData from './lottie/loading.json';

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
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
    message.match(/^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/g) ? setValidPhone(false) : setValidPhone(true)
    console.log("email", validEmail)
    console.log("nomer",validPhone)
    if (name !== '' && email !== '' && message !== '' && validEmail === false && validPhone === false) {
      console.log("ke modal")
      openConfirm()
    }
  }

  function openConfirm(){
    setConfirm(true)
  }
  function closeConfirm(){
    setConfirm(false)
  }
  function refreshPage(){
    window.location.reload();
  }

  const registerForm = (e) => { 
    console.log("udh dikirim aja")
    closeConfirm()
    openLoading()
    let data = {
      name,
      email,
      message
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
                            <p className="text-md">Product  </p>
                        </div>
                        <div className="w-9/12">
                            <p className="text-md font-bold">: Netflix Premium (sharing)</p>
                        </div>
                     </div>
                     <div className="flex border-b border-gray-300 border-dashed py-1">
                        <div className="w-3/12">
                            <p className="text-md">Harga </p>
                        </div>
                        <div className="w-9/12">
                            <p className="text-md font-bold">: Rp. 45.000</p>
                        </div>
                     </div>
                   </div>

                   <div className="w-full py-2">
                        <p className="text-gray-400 text-sm">Metode pembayaran yang kami terima: </p>
                        <p className="text-gray-400 text-sm italic">Bank : BCA, BNI, Jenius(BTPN) </p>
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
                <input value={message} {...register("message", { required: true })} type="text" onChange={(e)=>{setMessage(e.target.value)}} name='message' className="w-full bg-white rounded-md px-4 md:shadow-xl focus:outline-none py-2 mt-1" placeholder="Nomor Whatsapp Anda"/>
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
                <div className="w-full flex justify-between bg-white md:shadow-xl rounded-md px-4 py-2">
                  <div className="flex">
                    <img src="netflixpackage.svg" alt="" />
                    <p className="pl-4 font-semibold">Netflix Premium (Sharing)</p>
                  </div>
                  <p className="text-redTheme font-bold">45K</p>
                </div>
            </div>
          </div>
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
