import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { MagnifierIcon, WalletIcon, ChartIcon } from './Icons';
import cubeLeg from '../assets/cube-leg.png';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: 'همکاری کدنویسی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    icon: <ChartIcon />,
  },
  {
    title: 'مدیریت پروژه',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    icon: <WalletIcon />,
  },
  {
    title: 'اتوماسیون وظایف',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className='container py-24 sm:py-32'>
      <div
        dir='rtl'
        className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold'>
            سرویس های{' '}
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              مشتری محور
            </span>
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8 '>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و مجله در ستون و سطرآنچنان که
            لازم است
          </p>

          <div className='flex flex-col gap-8'>
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className='space-y-1 flex md:flex-row justify-start items-start gap-4'>
                  <div className='mt-4 bg-primary/20 p-1 rounded-2xl'>
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className='text-md mt-2'>
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className='w-[300px] md:w-[500px] lg:w-[600px] object-contain'
          alt='About services'
        />
      </div>
    </section>
  );
};
