import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from "react-hook-form";

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit } = useForm();

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const registerForm = (e) => { 
    
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
      if (res.status === 200) {
        openModal()
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

    return (
        <>
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
          </div>
         <form onSubmit={handleSubmit(registerForm)} id="registerPage" className="flex ms">
             
            <div className="hidden md:flex md:w-6/12">
                <img src="register.svg" alt="" />
            </div>
            <div className="w-full md:w-6/12 md:px-24">
            
          <div className="flex">
            <div  className="flex-row w-full py-2">
                <label htmlFor="name" className="w-full text-redTheme text-sm">Nama</label>
                <input  {...register("name", { required: true })} type="text" onChange={(e)=>{setName(e.target.value)}} name='name' className="w-full bg-white rounded-md px-4 md:shadow-xl focus:outline-none py-2 mt-1" placeholder="Masukan Nama Anda"/>
            </div>
          </div>
          <div className="flex">
            <div className="flex-row w-full py-2">
                <label htmlFor="email" className="w-full text-redTheme text-sm">Email</label>
                <input {...register("email", { required: true })} type="email" onChange={(e)=>{setEmail(e.target.value)}} name='email' className="w-full bg-white rounded-md px-4 md:shadow-xl focus:outline-none py-2 mt-1 " placeholder="Masukan Email Anda"/>
            </div>
          </div>
          <div className="flex">
            <div className="flex-row w-full py-2">
                <label htmlFor="message" className="w-full text-redTheme text-sm">No. Handphone (Whatsapp)</label>
                <input {...register("message", { required: true })} type="text" onChange={(e)=>{setMessage(e.target.value)}} name='message' className="w-full bg-white rounded-md px-4 md:shadow-xl focus:outline-none py-2 mt-1" placeholder="Nomor Whatsapp Anda"/>
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
                <button onClick={(e)=>{handleSubmit(e)}} type="submit" className="bg-redTheme px-4 py-2 rounded-md mx-auto block">
                  <p className="text-white font-bold">Beli Sekarang</p>
                </button>
            </div>
          </div>
            </div>
         </form>
        </>
    )
}
