import { Button } from './ui/button';

export const Cta = () => {
  return (
    <section id='cta' className='bg-muted/50  my-24 container py-16 sm:py-32'>
      <div
        dir='rtl'
        className='container lg:grid lg:grid-cols-2 place-items-center'>
        <div className=' text-center lg:text-right lg:col-start-1'>
          <h2 className='text-3xl md:text-4xl font-bold '>
            مکانی برای تمام
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              {' '}
              ایده ها و کانسپت{' '}
            </span>
            های شما
          </h2>
          <p className='text-muted-foreground text-xl mt-4 mb-8 lg:mb-0'>
            با استفاده از کد اسپارک میتوانید تمام ایده های خود را در یک نقطه
            متمرکز و خلق کنید و مشتریان خود را تحت تاثیر قرار دهید.
          </p>
        </div>

        <div className=' flex flex-col gap-4 md:flex-row  items-center lg:col-start-2'>
          <Button className=' text-md lg:text-lg w-full max-w-[500px] p-6 lg:w-auto'>
            درخواست نسخه دمو
          </Button>
          <Button
            variant='outline'
            className='w-full p-6 text-md lg:text-lg max-w-[500px] lg:w-auto'>
            دیدن ویژگی ها
          </Button>
        </div>
      </div>
    </section>
  );
};
