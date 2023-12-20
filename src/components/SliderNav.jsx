import { useSwiper } from "swiper/react"
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

export default function SliderNav() {
    const swiper=useSwiper()
  return (
    <div className="flex gap-2 p-2 z-50 justify-between h-[200px] sm:h-[500px] items-center">
      <button className="text-5xl  w-8 flex justify-center items-center  h-8 bg-red-500 rounded-full cursor-pointer text-red-500 z-50" onClick={()=>swiper.slidePrev()}>
        <FcPrevious size={20}/>
        </button>
        <button className="text-5xl w-8 flex justify-center items-center  h-8  bg-red-500 rounded-full cursor-pointer text-red-500 z-50" onClick={()=>swiper.slideNext()}>
            <FcNext size={20} />
        </button>
    </div>
  )
}
