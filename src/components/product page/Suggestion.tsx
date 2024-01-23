import { ProductType } from '@/lib/zod/Schemas/productsSchema';
import Image from "next/image"
import Link from "next/link"

function Suggestion({data} : {data: ProductType | undefined}) {
  return (
    <div className='max-content flex w-full flex-col items-center gap-16 max-md:gap-14 '>
    <h1 className='h3-bold text-center'>you may also like</h1>
    <div className='flex w-full justify-between gap-6 max-sm:flex-col max-sm:items-center max-sm:gap-14'>
      {data?.others.map((item, i) =>(
        <div key={i} className='flex w-full max-w-[21.875rem] flex-col items-center gap-10 max-sm:gap-8 '>
          <div className='relative h-[19.875rem] w-full max-w-[21.875rem] rounded-lg bg-primary-lightGray max-md:max-w-[13.9375rem] max-sm:h-[7.5rem] max-sm:max-w-[20.4375rem]'>
            <Image fill alt={`${item.name} audiophile`} src={`/${item.image.desktop}`} sizes="" className='rounded-lg object-cover max-md:hidden'/>
            <Image fill alt={`${item.name} audiophile`} src={`/${item.image.tablet}`} sizes="" className='rounded-lg object-cover max-sm:hidden md:hidden'/>
            <Image fill alt={`${item.name} audiophile`} src={`/${item.image.mobile}`} sizes='' className='rounded-lg object-cover sm:hidden'/>
          </div>
          <div className='flex flex-col items-center gap-7'>
            <h1 className='h5-bold whitespace-nowrap'>{item.name}</h1>
            <Link href={`/product/${item.slug}`} className='button-default-1'>see product</Link>
          </div> 
        </div>
      ))}
      </div>
    </div>
  )
}

export default Suggestion
