import {
  Radar,
  ShoppingBag,
  Rabbit,
  BaggageClaim,
  Bot,
  Braces,
} from 'lucide-react';

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <ShoppingBag size={34} />,
    name: 'دیجی کالا',
  },
  {
    icon: <Rabbit size={34} />,
    name: 'ایسام',
  },
  {
    icon: <BaggageClaim size={34} />,
    name: 'ترب',
  },
  {
    icon: <Radar size={34} />,
    name: 'ایمالز',
  },
  {
    icon: <Braces size={34} />,
    name: 'دیوار',
  },
  {
    icon: <Bot size={34} />,
    name: 'فارسروید',
  },
];

export const Sponsors = () => {
  return (
    <section id='sponsors' className='container pt-24 sm:py-32'>
      <h2 className='text-center text-md lg:text-xl font-bold mb-8 text-primary'>
        سرمایه گذاران و بنیانگذاران
      </h2>

      <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8'>
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            dir='rtl'
            key={name}
            className='flex items-center gap-1 text-muted-foreground/60'>
            <span>{icon}</span>
            <h3 className='text-xl  font-bold'>{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
