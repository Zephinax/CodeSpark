import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: 'رایگان',
    popular: 1,
    price: 0,
    description:
      'استارتاپ‌ها یا وب‌سایت‌هایی که به‌دنبال تامین سرعت و امنیت سرویس خود هستند.',
    buttonText: 'شروع کنید',
    benefitList: [
      '۴ هم گروهی',
      '۲۰ گیگ فضای ذخیره سازی',
      'بیشتر از ۳ صفحه',
      'پشتیبانی انجمن',
    ],
  },
  {
    title: 'حرفه ای',
    popular: 0,
    price: 5,
    description:
      'کسب‌وکارها یا وب‌سایت‌هایی که در کنار حفظ سرعت و امنیت به ویژگی‌های تخصصی‌تر نیاز دارند.',
    buttonText: 'خرید بسته',
    benefitList: [
      '۶ هم گروهی',
      '۴۰ گیگ فضای ذخیره سازی',
      'بیشتر از ۶ صفحه',
      'پشتیبانی انجمن',
    ],
  },
  {
    title: 'سازمانی',
    popular: 0,
    price: 40,
    description:
      'سازمان‌های بزرگ که کاربران پرشماری دارند و به‌دنبال خدمات اختصاصی هستند.',
    buttonText: 'تماس با کارشناس',
    benefitList: [
      '۱۰ هم گروهی',
      '۶۵ گیگ فضای ذخیره سازی',
      'بیشتر از ۱۲ صفحه',
      'پشتیبانی اختصاصی',
    ],
  },
];

export const Pricing = () => {
  return (
    <section id='pricing' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        دسترسی
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          نامحدود{' '}
        </span>
        کد اسپارک
      </h2>
      <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
        بسته های مختلفی تهیه کرده ایم تا بنا به نیازتان آنها را تهیه کنید
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {pricingList.map((pricing: PricingProps) => (
          <Card
            dir='rtl'
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
                : ''
            }>
            <CardHeader>
              <CardTitle className='flex item-center justify-between'>
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant='secondary' className='text-sm text-primary'>
                    محبوب ترین
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className='text-3xl font-bold'>${pricing.price}</span>
                <span className='text-muted-foreground'> /ماه</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className='w-full'>{pricing.buttonText}</Button>
            </CardContent>

            <hr className='w-4/5 m-auto mb-4' />

            <CardFooter className='flex'>
              <div className='space-y-4'>
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className='flex'>
                    <Check className='text-green-500 ml-1' />{' '}
                    <h3 className='ml-2'>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
