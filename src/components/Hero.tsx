import { Button } from './ui/button';
import { buttonVariants } from './ui/button';
import { HeroCards } from './HeroCards';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const Hero = () => {
  return (
    <section className='container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-20'>
      <div dir='rtl' className='text-center mt-20 lg:text-start space-y-6'>
        <main className='text-5xl md:text-6xl font-bold'>
          <h1 className='inline'>
            قالب{' '}
            <span className='inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text'>
              کد اسپارک
            </span>
          </h1>{' '}
          برای{' '}
          <h2 className='inline'>
            توسعه دهندگان{' '}
            <span className='inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text'>
              ریکت
            </span>
          </h2>
        </main>

        <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
          قالب مدرن و شیک CodeSpark که توسط React و Tailwind طراحی شده است،
          زمینه را برای تجربه کاربری پویا و جذاب فراهم می کند.
        </p>

        <div className='flex gap-4 justify-center lg:justify-start'>
          <Button className='w-full md:w-1/3'>اکنون شروع کنید</Button>

          <a
            rel='noreferrer noopener'
            href='https://github.com/Zephinax/CodeSpark'
            target='_blank'
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: 'outline',
            })}`}>
            گیت هاب
            <GitHubLogoIcon className='mr-2 w-5 h-5' />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className='z-10'>
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className='shadow'></div>
    </section>
  );
};
