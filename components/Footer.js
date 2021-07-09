
export default function Footer() {
    return (
        <div>
            <div className="flex items-center">
            <div className="w-6/12">
              <div className="">
                <img src="Logo.svg" alt="" />
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex-row">
                <p className="text-white font-semibold">Social Media</p>
                <div className="flex mt-2">
                  <a className="pr-4" href="/">
                      <img className="w-6" src="instagram.svg" alt="" />
                  </a>
                  <a href="">
                      <img className="w-6" src="twitter.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="flex-row mt-8">
                <p className="text-white font-semibold">Customer Service</p>
                <div className="flex mt-1">
                  <a className="text-white" href="/">
                      +62 838-6675-4428
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}