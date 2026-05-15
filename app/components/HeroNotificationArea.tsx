import Image from "next/image";
import Notification from "./Notification";
import PixelTrail from "./PixelTrail";

export function HeroNotificationArea() {
    return (
        <div className="relative grow w-full md:min-h-[70vh] md:max-h-[70vh] bg-black rounded-xl overflow-hidden flex items-end justify-center py-[70px]">
          <div className="z-10">
            <Notification />
          </div>
          <Image src="/hero-image.webp" alt="Hero Image" fill style={{ objectFit: "cover", objectPosition: "center center" }} />
          <PixelTrail pixelSize={10} delay={400} fadeDuration={0.5} pixelClassName="bg-white" />
      </div> 
    );
}
export default HeroNotificationArea;
