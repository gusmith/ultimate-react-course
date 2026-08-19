import Image from 'next/image';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import TextExpander from './TextExpander';

function CabinView({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
      <div className='relative h-[28rem] overflow-hidden'>
        <Image
          src={image}
          fill
          loading='eager'
          sizes='(max-width: 1280px) 40vw, 33vw'
          className='object-cover'
          alt={`Cabin ${name}`}
        />
      </div>

      <div className='relative'>
        <h3 className='text-accent-100 font-black text-6xl md:text-7xl mb-5 bg-primary-950 p-6 pb-1 w-[120%] -translate-x-8 relative z-10'>
          Cabin {name}
        </h3>

        <p className='text-lg text-primary-300 mb-10'>
          {/* TextExpander is now just a regular React component like all others */}
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className='flex flex-col gap-4 mb-7'>
          <li className='flex gap-3 items-center'>
            <UsersIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              For up to <span className='font-bold'>{maxCapacity}</span> guests
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <MapPinIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              Located in the heart of the{' '}
              <span className='font-bold'>Dolomites</span> (Italy)
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <EyeSlashIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              Privacy <span className='font-bold'>100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CabinView;
