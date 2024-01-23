import { ProductType } from '@/lib/zod/Schemas/productsSchema';
import Image from 'next/image'
import React from 'react'

function Gallery({ data }: { data: ProductType | undefined }) {
  return (
    <div className='max-content flex gap-[1.875rem] max-md:gap-[1.125rem] max-sm:flex-col max-sm:items-center max-sm:gap-5'>
      <div className='flex w-fit flex-col gap-8 max-md:gap-[1.375rem] max-sm:w-full max-sm:items-center max-sm:gap-5'>

            <div className='relative h-[17.5rem] w-[27.8125rem] rounded-lg bg-primary-lightGray max-lg:h-[14.5rem] max-lg:w-[24.8125rem]  max-md:h-[10.875rem] max-md:w-[17.3125rem] max-sm:h-[10.875rem] max-sm:w-full max-sm:max-w-[20.4375rem]'>
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.first.desktop.substring(1)}`} sizes='(min-width: 1040px) 445px, 397px' className='rounded-lg object-cover max-md:hidden'/>        
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.first.tablet.substring(1)}`} sizes='277px' className='rounded-lg object-cover max-sm:hidden md:hidden'/>        
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.first.mobile.substring(1)}`} sizes='277px' className='rounded-lg object-cover sm:hidden'/>        
            </div>

            <div className='relative h-[17.5rem] w-[27.8125rem]  rounded-lg bg-primary-lightGray max-lg:h-[14.5rem] max-lg:w-[24.8125rem] max-md:h-[10.875rem] max-md:w-[17.3125rem] max-sm:h-[10.875rem] max-sm:w-full max-sm:max-w-[20.4375rem]'>
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.second.desktop.substring(1)}`} sizes='(min-width: 1040px) 445px, 397px' className='rounded-lg object-cover max-md:hidden'/>        
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.second.tablet.substring(1)}`} sizes='277px' className='rounded-lg object-cover max-sm:hidden md:hidden'/>        
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.second.mobile.substring(1)}`} sizes='277px' className='rounded-lg object-cover sm:hidden'/>        
            </div>
      </div>

            <div className='relative h-[37rem] w-full max-w-[39.6875rem] rounded-lg bg-primary-lightGray max-lg:h-[31rem] max-lg:max-w-[36.6875rem] max-md:h-[23rem] max-md:w-[24.6875rem] max-sm:h-[23rem] max-sm:w-full max-sm:max-w-[20.4375rem]'>
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.third.desktop.substring(1)}`} sizes='(min-width: 1240px) 635px, (min-width: 1040px) calc(83.33vw - 382px), calc(100vw - 507px)' className='rounded-lg object-cover max-md:hidden'/>        
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.third.tablet.substring(1)}`} sizes='calc(100vw - 387px)' className='rounded-lg object-cover max-sm:hidden md:hidden'/>        
                <Image fill alt={`${data?.name} audiophile`} src={`${data?.gallery.third.mobile.substring(1)}`}  sizes=''  className='rounded-lg object-cover sm:hidden'/>        
            </div>
  </div>
  )
}

export default Gallery
