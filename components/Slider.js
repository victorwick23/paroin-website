import React from 'react'
import { useKeenSlider as UseKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {Link} from 'react-scroll'

export default function slider() {
    const [sliderRef ] = UseKeenSlider({
      slidesPerView: 1.5,
      mode: "free",
      spacing: 15,
      centered: false,
      loop: false,
    })
  
    return (
      <>
          <div className="flex-row md:flex items-center">

              <div className="invisible w-0 md:visible md:w-6/12">
                  <img className="mx-auto w-9/12" src="customerservice.svg" alt="" />
              </div>

              <div ref={sliderRef} className="keen-slider w-12/12 md:w-6/12">
                  <div className="keen-slider__slide number-slide1 text-center pt-8 pb-12 ">
                      <div className=" bg-white shadow-xl rounded-md px-4 pt-6 h-slide relative">
                          <div className="border-b border-gray-700 mb-4 h-10">
                              <img className="mx-auto mb-3 h-6" src="netflix.svg" alt="" />
                          </div>
                          <div className="">
                              <div className="flex mb-2 items-center">
                                  <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                                  <p className="w-9/12 md:text-base text-left text-black">Fitur streaming 4K
                                  </p>
                              </div>
                              <div className="flex mb-2 items-center">
                                  <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                                  <p className="w-9/12 md:text-base text-left text-black">Langsung dapat akun
                                  </p>
                              </div>
                              <div className="flex mb-2 items-center">
                                  <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                                  <p className="w-9/12 md:text-base text-left text-black">Garansi Uang
                                      Kembali</p>
                              </div>
                              <div className="flex mb-2 items-center">
                                  <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                                  <p className="w-9/12 md:text-base text-left text-black">100% Legal</p>
                              </div>
                              <div className="w-full absolute bottom-16 right-0 left-0">
                                  <p className="w-full text-redTheme text-base font-bold text-center font" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>Rp. 45.000<span
                                          className="text-redTheme text-sm">/bln</span></p>
                                          <p className="w-full text-redTheme text-2xl font-bold text-center font">Rp. 40.000<span
                                          className="text-redTheme text-sm">/bln</span></p>
                              </div>
                              <div className="w-full md:mt-8 absolute bottom-3 right-0 left-0">
                                  <Link to="registerPage" spy={true} smooth={true}>
                                  <button className="bg-redTheme px-4 py-2 mt-4 rounded-md mx-auto block">
                                      <p className="text-white font-bold">Pilih Paket</p>
                                  </button>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="keen-slider__slide number-slide2 text-center pt-8 pb-12">
                      <div className=" bg-white shadow-xl rounded-md px-4 py-6 h-slide relative">
                          <div className="border-b border-gray-700 mb-4 h-10">
                              <img className="mx-auto mb-3 h-6" src="youtube.svg" alt="" />
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Youtube Tanpa Iklan</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Background Play</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Download Video</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Youtube Music Premium
                              </p>
                          </div>
                          <div className=" w-full mt-8 absolute bottom-16 right-0 left-0 px-6  border-t border-gray-400 border-dashed">
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-base font-bold text-left">1 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 9.000</p>
                              </div>
                              <div className="flex w-full justify-between">
                                <p className="w-full text-gray-800 text-base font-bold text-left">4 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 30.000</p>
                              </div>
                              <div className="flex w-full justify-between">
                                <p className="w-full text-gray-800 text-base font-bold text-left">6 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 40.000</p>
                              </div>
                          </div>
                          <div className="w-full md:mt-8 absolute bottom-3 right-0 left-0">
                                  <Link to="registerPage" spy={true} smooth={true}>
                                  <button className="bg-redTheme px-4 py-2 mt-4 rounded-md mx-auto block">
                                      <p className="text-white font-bold">Pilih Paket</p>
                                  </button>
                                  </Link>
                        </div>
                      </div>
                  </div>

                  <div className=" keen-slider__slide number-slide3 text-center pt-8 pb-12">
                      <div className="bg-white shadow-xl rounded-md px-4 py-6 h-slide relative">
                          <div className="border-b border-gray-700 mb-2 h-10">
                              <img className="mx-auto mb-3 h-7" src="spotify.svg" alt="" />
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Dengarkan Music Offline
                              </p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Tidak Ada Iklan</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Pilih Lagu Apapun</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Skip Tanpa Batas</p>
                          </div>
                          <div className=" w-full mt-8 absolute bottom-16 right-0 left-0 px-6  border-t border-gray-400 border-dashed">
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-base font-bold text-left">1 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 15.000</p>
                              </div>
                              <div className="flex w-full justify-between">
                                <p className="w-full text-gray-800 text-base font-bold text-left">3 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 35.000</p>
                              </div>
                          </div>
                          <div className="w-full md:mt-8 absolute bottom-3 right-0 left-0">
                                  <Link to="registerPage" spy={true} smooth={true}>
                                  <button className="bg-redTheme px-4 py-2 mt-4 rounded-md mx-auto block">
                                      <p className="text-white font-bold">Pilih Paket</p>
                                  </button>
                                  </Link>
                        </div>
                      </div>
                  </div>

                  <div className=" keen-slider__slide number-slide4 text-center pt-8 pb-12">
                      <div className="bg-white shadow-xl rounded-md px-4 py-6 h-slide relative">
                          <div className="border-b border-gray-700 mb-2 h-10">
                              <img className="mx-auto mb-3 h-7" src="viu.svg" alt="" />
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Konten Premium
                              </p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Tidak Ada Iklan</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Download Video</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Garansi 100%</p>
                          </div>
                          <div className=" w-full mt-8 absolute bottom-16 right-0 left-0 px-6  border-t border-gray-400 border-dashed">
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-base font-bold text-left">1 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 7.000</p>
                              </div>
                              <div className="flex w-full justify-between">
                                <p className="w-full text-gray-800 text-base font-bold text-left">2 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 10.000</p>
                              </div>
                              <div className="flex w-full justify-between">
                                <p className="w-full text-gray-800 text-base font-bold text-left">3 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 13.000</p>
                              </div>
                              <div className="flex w-full justify-between">
                                <p className="w-full text-gray-800 text-base font-bold text-left">6 Bulan</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 24.000</p>
                              </div>
                          </div>
                          <div className="w-full md:mt-8 absolute bottom-3 right-0 left-0">
                                  <Link to="registerPage" spy={true} smooth={true}>
                                  <button className="bg-redTheme px-4 py-2 mt-4 rounded-md mx-auto block">
                                      <p className="text-white font-bold">Pilih Paket</p>
                                  </button>
                                  </Link>
                        </div>
                      </div>
                  </div>

                  <div className=" keen-slider__slide number-slide3 text-center pt-8 pb-12">
                      <div className="bg-white shadow-xl rounded-md px-4 py-6 h-slide relative">
                          <div className="border-b border-gray-700 mb-2 h-10">
                              <img className="mx-auto mb-3 h-7" src="molatv.png" alt="" />
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Mola Sport
                              </p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Mola Living</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Mola Movie</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Mola Entertainment</p>
                          </div>
                          <div className=" w-full mt-8 absolute bottom-16 right-0 left-0 px-6  border-t border-gray-400 border-dashed">
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-base font-bold text-left">1 Bulan Sharing</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 53.000</p>
                              </div>
                          </div>
                          <div className="w-full md:mt-8 absolute bottom-3 right-0 left-0">
                                  <Link to="registerPage" spy={true} smooth={true}>
                                  <button className="bg-redTheme px-4 py-2 mt-4 rounded-md mx-auto block">
                                      <p className="text-white font-bold">Pilih Paket</p>
                                  </button>
                                  </Link>
                        </div>
                      </div>
                  </div>

                  <div className=" keen-slider__slide number-slide3 text-center pt-8 pb-12">
                      <div className="bg-white shadow-xl rounded-md px-4 py-6 h-slide relative">
                          <div className="border-b border-gray-700 mb-2 h-10">
                              <img className="mx-auto mb-3 h-7" src="wetv.png" alt="" />
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Episode VIP
                              </p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Kualitas HD</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Bisa Download</p>
                          </div>
                          <div className=" w-full mt-8 absolute bottom-16 right-0 left-0 px-6  border-t border-gray-400 border-dashed">
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">1 Bulan Private</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 30.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">1 Bulan Sharing</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 7.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">2 Bulan Sharing</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 15.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">3 Bulan Sharing</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 25.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">6 Bulan Sharing</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 40.000</p>
                              </div>
                          </div>
                          <div className="w-full md:mt-8 absolute bottom-3 right-0 left-0">
                                  <Link to="registerPage" spy={true} smooth={true}>
                                  <button className="bg-redTheme px-4 py-2 mt-4 rounded-md mx-auto block">
                                      <p className="text-white font-bold">Pilih Paket</p>
                                  </button>
                                  </Link>
                        </div>
                      </div>
                  </div>

                  <div className=" keen-slider__slide number-slide3 text-center pt-8 pb-12">
                      <div className="bg-white shadow-xl rounded-md px-4 py-6 h-slide relative">
                          <div className="border-b border-gray-700 mb-2 h-10">
                              <img className="mx-auto mb-3 h-7" src="vidio.svg" alt="" />
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Tayangan Eksklusif
                              </p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Tayangan Sepak Bola</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Seluruh Tayangan Premier</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Tayangan Korea</p>
                          </div>
                          <div className=" w-full mt-8 absolute bottom-16 right-0 left-0 px-6  border-t border-gray-400 border-dashed">
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-base font-bold text-left">1 Bulan Private</p>
                                <p className="w-full text-redTheme text-base font-bold text-right">Rp. 23.000</p>
                              </div>
                          </div>
                          <div className="w-full md:mt-8 absolute bottom-3 right-0 left-0">
                                  <Link to="registerPage" spy={true} smooth={true}>
                                  <button className="bg-redTheme px-4 py-2 mt-4 rounded-md mx-auto block">
                                      <p className="text-white font-bold">Pilih Paket</p>
                                  </button>
                                  </Link>
                        </div>
                      </div>
                  </div>

                  <div className=" keen-slider__slide number-slide3 text-center pt-8 pb-12">
                      <div className="bg-white shadow-xl rounded-md px-4 py-6 h-slide relative">
                          <div className="border-b border-gray-700 mb-2 h-10">
                              <img className="mx-auto mb-3 h-7" src="disneyhotstar.svg" alt="" />
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Bisa Download
                              </p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Kualitas HD</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 md:text-base text-left text-black">Semua Fitur Premium</p>
                          </div>
                          <div className=" w-full mt-8 absolute bottom-16 right-0 left-0 px-6  border-t border-gray-400 border-dashed">
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">1 Bulan Sharing</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 15.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">3 Bulan Sharing</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 27.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">1 Bulan Private</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 39.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">3 Bulan Private</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 75.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">6 Bulan Private</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 110.000</p>
                              </div>
                              <div className="flex w-full justify-between pt-2">
                                <p className="w-full text-gray-800 text-sm font-bold text-left">12 Bulan Private</p>
                                <p className="w-full text-redTheme text-sm font-bold text-right">Rp. 173.000</p>
                              </div>
                          </div>
                          <div className="w-full md:mt-8 absolute bottom-3 right-0 left-0">
                                  <Link to="registerPage" spy={true} smooth={true}>
                                  <button className="bg-redTheme px-4 py-2 mt-4 rounded-md mx-auto block">
                                      <p className="text-white font-bold">Pilih Paket</p>
                                  </button>
                                  </Link>
                        </div>
                      </div>
                  </div>

              </div>
          </div>

      </>
    )
  }
  