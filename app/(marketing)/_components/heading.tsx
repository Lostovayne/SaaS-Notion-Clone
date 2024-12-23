'use client';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas, Documents, & Plans. Unified. Welcome to
        <span className='underline'> Jotion</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Jotion is the connected workspace where better, faster work happens.
      </h3>

      {isLoading && (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Enter Jotion
            <ArrowRight className='h-4 w-4 ml-2' />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignUpButton mode='modal'>
          <Button variant='default' size='default' className='group'>
            Create account
            <ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition' />
          </Button>
        </SignUpButton>
      )}
    </div>
  );
};
export default Heading;
