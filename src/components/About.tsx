import { Statistics } from './Statistics';
import pilot from '../assets/pilot.png';

export const About = () => {
  return (
    <section id='about' className='container py-24 sm:py-32'>
      <div className='bg-muted/50 border rounded-lg py-12'>
        <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
          <img
            src={pilot}
            alt=''
            className='w-[300px] object-contain rounded-lg'
          />
          <div dir='rtl' className='bg-green-0 flex flex-col justify-between'>
            <div className='pb-6 text-center  md:text-right'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                درباره
                <span className='bg-gradient-to-b  from-primary/60 to-primary text-transparent bg-clip-text'>
                  {' '}
                  کد اسپارک
                </span>
              </h2>
              <p className='text-xl text-muted-foreground mt-4'>
                این قالب طراحی شده برای استارتاپ با استفاده از React، TypeScript
                و Tailwind CSS، برای ارائه یک طراحی مدرن، شیک و کاربرپسندانه
                است. از طریق استفاده از این تکنولوژی‌ها، قالب CodeSpark دارای
                سرعت بالا، عملکرد بهتر و قابلیت هماهنگی با دستگاه‌های مختلف است.
                طراحی زیبا و منحصر به فرد این قالب، برای جلب توجه بازدیدکنندگان
                و ایجاد تجربه کاربری فوق‌العاده موثر خواهد بود.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
