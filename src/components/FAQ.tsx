import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'آیا این قالب رایگان است؟',
    answer: 'بله این قالب توسط زفینکس طراحی شده و کاملا رایگان است.',
    value: 'item-1',
  },
  {
    question: 'چگونه میتوانم از آن استفاده کنم؟',
    answer:
      'شما میتوانید از صفحه گیت هاب این پروژه و دنبال کردن مراجل راه اندازی از این قالب استفاده کنید، ستاره دادن به پروژه را فراموش نکنید :)',
    value: 'item-2',
  },
  {
    question: 'چطور از این پروژه حمایت کنم؟',
    answer:
      'راه های مختلفی برای این کار وجود دارد، مانند ستاره دادن و فورک کردن پروژه و یا خریدن قهوه برای من.',
    value: 'item-3',
  },
  {
    question: 'چگونه باگ  های پروژه را اطلاع دهیم؟',
    answer: 'از طریق صفحه گیت هاب پروژه و یا از طریق پیام مستقیم به من.',
    value: 'item-4',
  },
];

export const FAQ = () => {
  return (
    <section id='faq' className='container py-24 sm:py-32'>
      <h2 className='text-right text-3xl md:text-4xl font-bold mb-4'>
        سوالات{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          متداول
        </span>
      </h2>

      <Accordion type='single' collapsible className='w-full AccordionRoot'>
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem dir='rtl' key={value} value={value}>
            <AccordionTrigger className='text-right'>
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className='font-medium mt-4 text-right'>
        باز هم سوالی دارید؟{' '}
        <a
          rel='noreferrer noopener'
          href='https://zephinax.ir/'
          target='_blank'
          className='text-primary transition-all border-primary hover:border-b-2'>
          ارتباط با من
        </a>
      </h3>
    </section>
  );
};
