import { GithubIcon, SlackIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

function Footer() {
  return (
    
      <footer className=" bg-neutral-950 text-white w-screen ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-6 xl:gap-8">
            <div className="xl:col-span-1">
              <div className="flex flex-col items-start space-y-8">
                <h1 className="text-2xl">GoGrades</h1>
                {/* <img alt="Company Logo" className="h-10" src="/placeholder.svg" /> */}
                <p className="text-gray-500 text-base">Linear - Designed Worldwide</p>
                <div className="flex space-x-6">
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    <GithubIcon className="h-6 w-6" />
                  </a>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    <SlackIcon className="h-6 w-6" />
                  </a>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    <YoutubeIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 xl:mt-0 xl:col-span-5 grid grid-cols-2 gap-8">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Features
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Changelog
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Docs
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Linear Method
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Download
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        About us
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Customers
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Brand
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Startup Program
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Community
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        DPA
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Terms of service
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Report a vulnerability
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Developers</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        API
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        Status
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a className="text-base text-gray-300 hover:text-white" href="#">
                        README
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  

  


export default Footer;
