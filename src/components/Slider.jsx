import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper CSS dosyasını projeye dahil edin
import sliderData from "../sliderData.json";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderNav from "./SliderNav";

export default function Slider() {
  const progressCircles = [];
  const progressContents = [];

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircles[s.realIndex].style.setProperty("--progress", 1 - progress);
    progressContents[s.realIndex].textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50} //Slaytlar arasındaki boşluk miktarını belirler. Bu, bir slayttan diğerine geçerken aralarındaki mesafeyi tanımlar.
        slidesPerView={1}
        autoplay={{          //Otomatik oynatmayı ayarlar. delay özelliği, slaytlar arasındaki geçiş süresini belirtir (milisaniye cinsinden). disableOnInteraction, kullanıcı slayta etkileşimde bulunduğunda otomatik oynatmanın devre dışı bırakılıp bırakılmayacağını belirler.
          delay: 5000,
          disableOnInteraction: false,
        }}
        rewind={true} // Slaytların geri sarma özelliğini açar veya kapatır. Bu, son slayttan ilk slayta geçtiğinizde yeniden başa dönüp dönmeyeceğini belirler.
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft} //  Otomatik oynatma zamanlayıcısının geri sayımı için bir fonksiyondur. Saniye cinsinden kalan süreyi ve ilerlemenin yüzdesini alır.
        scrollbar={{ draggable: true }} //Sürükleme çubuğunu etkinleştirir ve özelleştirilebilir bir sürükleme çubuğu ekler.
        pagination={{ clickable: true }} //Slayt sayısını ve geçiş durumunu göstermek için kullanılan pagination (sayfalama) öğesini etkinleştirir. clickable özelliği, pagination'ın tıklanabilir olup olmadığını belirtir. Bu, slaytlar arasında geçiş yapmayı 
      >
        {sliderData.map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="sm:h-[400px] h-[200px]  overflow-hidden">
              {slider.backgrounBlur ? (
                <img
                  className="w-full  object-cover  hidden sm:flex absolute blur-xl"
                  src={slider.backgroundImage}
                  alt=""
                />
              ) : (
                <img
                  className="w-full object-cover  h-full hidden sm:flex absolute"
                  src={slider.backgroundImage}
                  alt=""
                  style={{ backgroundColor: slider.backgroundColour }}
                />
              )}

              <div className="">
                <SliderNav />
              </div>
              <div className="w-20 mx-auto  autoplay-progress absolute bottom-5 right-1 ">
                <svg
                  viewBox="0 0 48 48"
                  ref={(ref) => (progressCircles[index] = ref)}
                  className="w-full h-full"
                ></svg>
                <div className="text-center flex bg-gray-500 rounded-full w-10 h-10 items-center justify-center">
                  <span
                    className="text-neutral-200 font-bold z-10"
                    ref={(ref) => (progressContents[index] = ref)}
                  ></span>
                </div>
              </div>
              <div className="absolute inset-0 flex  sm:p-2 max-w-[1440px] mx-auto justify-between items-center text-center">
                <div>
                  <img
                    className="sm:w-96  w-full sm:mb-0 mb-80 mx-auto h-[500px] z-50 sm:h-56 rounded object-cover"
                    src={slider.mainImage}
                    alt=""
                  />
                </div>
                <div className="hidden sm:flex gap-2 flex-col items-center">
                  <h2
                    className=" text-center text-sm md:text-2xl  lg:text-4xl font-semibold block "
                    style={{ color: slider.mainTextColour }}
                  >
                    {slider.mainText}
                  </h2>
                  <p
                    className="text-center text-xs sm:text-base md:text-xl block"
                    style={{ color: slider.subTextColour }}
                  >
                    {slider.subText}
                  </p>
                  <button
                    className="p-2 rounded-xl font-bold m-2 hover:rotate-6 transition-all "
                    style={{
                      backgroundColor: slider.buttonColour,
                      color: slider.buttonTextColour,
                    }}
                  >
                    {slider.buttonText}
                  </button>
                </div>
              </div>
            </div>
            {/* zamanlayıcı  */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
