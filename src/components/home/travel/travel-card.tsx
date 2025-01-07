import { motion } from "framer-motion";
import { TravelPhoto } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface TravelCardProps {
  photo: TravelPhoto;
  index: number;
  isLarge: boolean;
  locationId: string;
}

export function TravelCard({
  photo,
  index,
  isLarge,
  locationId,
}: TravelCardProps) {
  return (
    <Link href={`/travels/${locationId}`}>
      <motion.div
        className={`relative overflow-hidden rounded-lg ${
          isLarge ? "md:col-span-2 md:row-span-2 h-full" : "h-full"
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-lg font-semibold">{photo.location}</p>
        </div>
      </motion.div>
    </Link>
  );
}
