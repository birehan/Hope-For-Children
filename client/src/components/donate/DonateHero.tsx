import Image from 'next/image'
import gallery from '../../../common/images/gallery.png'

const DonateHero = () => {
  return (
    <div className="min-h-[60vh] lg:max-h-[60vh]">
    <div className="w-full relative">
      <Image
        className="w-full h-[60vh]  lg:max-h-[60vh] object-cover"
        src={gallery}
        alt="a child"
      />
    </div>
    <div className="w-full h-[60vh] lg:max-h-[60vh] bg-black/60 flex self-auto justify-center items-center absolute top-0  text-white text-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          We welcome your support for
          </h1>
          <h1 className="text-[#00B1F4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Hope for Children</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DonateHero