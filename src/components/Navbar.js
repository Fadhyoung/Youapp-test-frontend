import { useRouter } from 'next/router';

import { useProfile } from '@/context/ProfileContext';

const Navbar = ({interestsSave}) => {

  const { DisplayName } = useProfile();

  const router = useRouter();

  const showBackButton = router.pathname !== '/login';
  const showDisplayName = router.pathname !== '/login';
  const showSaveButton = router.pathname === '/interest-edit';

  const handleback = async () => {
    if (router.pathname !== '/') {      
      router.back();
  }
  }

  return (
    <nav className='w-full p-8 px-4 text-lg font-semibold text-white ' >
      <ul className='flex justify-between gap-4 list-none'>
        <li>        
            {showBackButton && (
                <button className='flex items-center' onClick={handleback} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <h1>Back</h1>
              </button>
            )}                
        </li>
        <li>
            {showDisplayName && (
                <h1>{DisplayName}</h1>
            )}          
        </li>
          { showSaveButton && (
          <li className='text-blue-500'>
            <button onClick={interestsSave}>save</button>
          </li>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
