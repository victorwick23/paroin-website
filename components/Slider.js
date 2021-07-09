import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function slider() {
    const [sliderRef, slider] = useKeenSlider({
      slidesPerView: 3,
      mode: "snap",
      spacing: 15,
      centered: true,
      loop: true,
    })
  
    return (
      <>
        <div className="flex-row md:flex items-center">

            <div className="invisible w-0 md:visible md:w-6/12">
                <img className="mx-auto w-9/12" src="customerservice.svg" alt="" />
            </div>

            <div ref={sliderRef} className="keen-slider w-12/12 md:w-6/12">
              <div className="keen-slider__slide number-slide1 text-center pt-8 pb-12">
                  <div className=" bg-white shadow-xl rounded-md px-4 py-6">
                      <div className="border-b border-gray-700 mb-4">
                          <img className="mx-auto mb-3" src="netflix.svg" alt="" />
                      </div>
                      <div className="">
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 text-sm md:text-base text-left text-gray-700">Fitur streaming 4K</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 text-sm md:text-base text-left text-gray-700">Langsung dapat akun</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 text-sm md:text-base text-left text-gray-700">Garansi Uang Kembali</p>
                          </div>
                          <div className="flex mb-4 items-center">
                              <img className="w-auto h-5 mr-2" src="check.svg" alt="" />
                              <p className="w-9/12 text-sm md:text-base text-left text-gray-700">100% Legal</p>
                          </div>
                          <div className="flex w-full ">
                              <p className="w-full text-redTheme text-2xl font-bold text-center">Rp. 45.000<span
                                      className="text-redTheme text-sm">/bln</span></p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="keen-slider__slide number-slide2 text-center pt-8 pb-12">
                  <div className="h-full bg-white shadow-xl rounded-md px-4 py-6">
                      <div className="border-b border-gray-700 mb-4">
                          <img className="mx-auto mb-3" src="youtube.svg" alt="" />
                      </div>
                      <div className="items-center content-center">
                          <p className="text-gray-400 text-xl text-center mt-24">Coming Soon</p>
                      </div>
                  </div>
              </div>

              <div className=" keen-slider__slide number-slide3 text-center pt-8 pb-12">
                  <div className=" h-full bg-white shadow-xl rounded-md px-4 py-6">
                      <div className="border-b border-gray-700 mb-4">
                          <img className="mx-auto mb-3" src="spotify.svg" alt="" />
                      </div>
                      <div className="items-center content-center">
                          <p className="text-gray-400 text-xl text-center mt-24">Coming Soon</p>
                      </div>
                  </div>
              </div>

          </div>
        </div>
          
      </>
    )
  }
  