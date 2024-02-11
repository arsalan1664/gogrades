import { Button } from "@/components/ui/button"
import { ChromeIcon, Facebook, Star } from 'lucide-react'
import { Separator } from "../ui/separator"


function Testimonial() {
  return (
    <>
    {/* <Separator className="border-5"/> */}
    <div className="bg-neutral text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-semibold mb-12">Our Clients Come Back Again and Again</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center space-y-4">
          <ChromeIcon className="text-yellow-300 text-3xl" />
          <h3 className="text-lg font-semibold">Adrienne Truelove</h3>
          <div className="flex space-x-1">
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
          </div>
          <p className="text-center">An exceptional Real Estate firm.</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <ChromeIcon className="text-yellow-300 text-3xl" />
          <h3 className="text-lg font-semibold">Quinn McColly</h3>
          <div className="flex space-x-1">
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
          </div>
          <p className="text-center">
            Gomez Properties clearly provides its agents the resources they need to deliver a smooth transaction for
            their clients.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Facebook className="text-yellow-300 text-3xl" />
          <h3 className="text-lg font-semibold">John Vickers</h3>
          <div className="flex space-x-1">
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
          </div>
          <p className="text-center">I highly recommend Gomez Properties.</p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Button className="bg-white text-black">Show More</Button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Testimonial











