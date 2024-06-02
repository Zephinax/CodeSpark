import { LogoIcon } from './Icons';

export const Footer = () => {
  return (
    <footer id='footer'>
      <hr className='w-11/12 mx-auto' />

      <section className='container text-center py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'>
        <div className='col-span-full xl:col-span-2'>
          <a
            rel='noreferrer noopener'
            href='/'
            className='font-bold text-xl justify-center flex'>
            <LogoIcon />
            CodeSpark
          </a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>ما را دنبال کنید</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='#https://github.com/Zephinax'
              className='opacity-60 hover:opacity-100'>
              گیت هاب
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              توییتر
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              اینستاگرام
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>پلتفرم ها</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              وب
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              موبایل
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              دسکتاپ
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>درباره</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              ویژگی ها
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              قیمت
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              سوالات متداول
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>انجمن</h3>
          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              یوتیوب
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              دیسکورد
            </a>
          </div>

          <div>
            <a
              rel='noreferrer noopener'
              href='#'
              className='opacity-60 hover:opacity-100'>
              تلگرام
            </a>
          </div>
        </div>
      </section>

      <section className='container pb-14 text-center'>
        <h3>
          &copy; 2024 CodeSpark made by{' '}
          <a
            rel='noreferrer noopener'
            target='_blank'
            style={{ color: 'hsl(342, 61%, 55%)' }}
            href='https://github.com/Zephinax'
            className='transition-all border-primary hover:underline'>
            Zephinax
          </a>
        </h3>
      </section>
    </footer>
  );
};
