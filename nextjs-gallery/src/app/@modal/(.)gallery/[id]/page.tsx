import Image from "next/image"
import { ImageType } from "@/app/gallery/page"
import Link from "next/link"

type Props = {
  params: {id: string}
}

const page = async({ params }: Props) => {
  const { id } = await params
  const res = await fetch(`http://localhost:3000/api/gallery/${id}`)
  const data: ImageType = await res.json()
  const replacedData = {...data, thumbnailUrl: 'https://placehold.co/500x500', url: 'https://placehold.co/1000x1000'}
  
  return (
    <div className="fixed w-screen h-screen bg-black/70 flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="relative w-[500px] h-[500px]">
          <Image src={replacedData.thumbnailUrl} alt={replacedData.title} fill className="p-4"/>
        </div>
        <div className="w-full pl-4 mb-4">
          <Link href='/gallery' className="underline text-black">Close</Link>
        </div>
      </div>
    </div>
  )
}

export default page