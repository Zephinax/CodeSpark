import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'باران کاظمی',
    userName: '@zephinax',
    comment: 'این قالب واقعا عالیه!',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'آسنات رهنما',
    userName: '@zephinax',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },

  {
    image: 'https://github.com/shadcn.png',
    name: 'کاوه محمدی',
    userName: '@zephinax',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'آرمان یاری',
    userName: '@zephinax',
    comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'سینا آزاده',
    userName: '@zephinax',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه و سطرآنچنان که لازم است',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'لیام هنرمند',
    userName: '@zephinax',
    comment:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ،',
  },
];

export const Testimonials = () => {
  return (
    <section dir='rtl' id='testimonials' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        چرا مردم
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          کد اسپارک{' '}
        </span>
        را دوست دارند؟
      </h2>

      <p className='text-xl text-muted-foreground pt-4 pb-8'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،لورم ایپسوم
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6'>
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className='max-w-md md:break-inside-avoid overflow-hidden'>
              <CardHeader
                dir='ltr'
                className='flex flex-row items-center gap-4 pb-2'>
                <Avatar>
                  <AvatarImage alt='' src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className='flex flex-col'>
                  <CardTitle className='text-lg'>{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
