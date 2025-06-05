import Image from "next/image"
import { ImageType } from "../page"

type Props = {
  params: {id: string}
}

const ImageDetail = async({ params }: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3000/api/gallery/${id}`)
  const data: ImageType = await res.json()

  const replacedData = {...data, thumbnailUrl: 'https://placehold.co/300x300', url: 'https://placehold.co/1000x1000'}

  return (
    <div>
      <p className="text-center p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat saepe blanditiis.</p>
      <div className="relative w-[500px] h-[500px] w-full">
        <Image src={replacedData.url} alt={replacedData.title} fill className="object-contain p-1"/>
      </div>
    </div>
  )
}

export default ImageDetail