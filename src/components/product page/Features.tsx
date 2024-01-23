import { ProductType } from '@/lib/zod/Schemas/productsSchema';

function Features({ data }: { data: ProductType | undefined }) {
  return (
    <div className="max-content flex justify-between gap-[7.5rem] max-md:flex-col max-sm:items-center max-sm:gap-20 md:gap-9">
      <div className="flex w-full max-w-[39.6875rem] flex-col gap-8 max-sm:max-w-[327px]">
        <h3 className="h3-bold">features</h3>
        <div className="flex flex-col gap-6">
          {data?.features.split('\n\n').map((p, i) => (
            <p key={i} className="paragraph">
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="flex max-md:w-full max-md:max-w-[549px] max-md:justify-between max-sm:max-w-[327px] max-sm:flex-col max-sm:gap-6 md:w-[350px] md:flex-col md:gap-8 ">
        <h3 className="h3-bold">in the box</h3>
        <ul className="flex flex-col gap-2">
          {data?.includes.map((item, i) => (
            <li key={i} className="flex gap-6">
              <label className="font-bold text-primary-orange">
                {item.quantity}x
              </label>
              <label className="paragraph capitalize">{item.item}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Features;
