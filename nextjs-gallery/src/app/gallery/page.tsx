import Link from "next/link";
import Image from "next/image";

export interface ImageType {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

const Gallery = async() => {
  const res = await fetch('http://localhost:3000/api/gallery')
  const data = await res.json()

  const replacedData = data.map((image: ImageType) => {
    return {
      ...image,
    thumbnailUrl: 'https://placehold.co/300x300',
    url: 'https://placehold.co/1000x1000',
    }
  })

  return (
    <div >
      <h1 className="text-center p-4 text-xl">Gallery</h1>
      <div className="grid grid-cols-5 w-full place-items-center gap-y-6">
        {replacedData.map((image: ImageType) => (
          <Link href={`/gallery/${image.id}`} key={image.id}>
            <div className="relative w-[210px] h-[210px]">
              <Image src={image.thumbnailUrl} alt={image.title} fill className="object-contain p-1"/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Gallery