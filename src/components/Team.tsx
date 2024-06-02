import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: 'https://i.pravatar.cc/150?img=35',
    name: 'آسنات رسولی',
    position: 'مدیر تولید',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'آرمان کاظمی',
    position: 'سرگروه فنی',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=36',
    name: 'باران یاری',
    position: 'توسعه دهنده فرانت اند',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },

      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=17',
    name: 'سینا آزاده',
    position: 'توسعه دهنده بک اند',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size='20' />;

      case 'Facebook':
        return <Facebook size='20' />;

      case 'Instagram':
        return <Instagram size='20' />;
    }
  };

  return (
    <section dir='rtl' id='team' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        تیم{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          متخصص{' '}
        </span>
        ما
      </h2>

      <p className='mt-4 mb-20 text-xl text-muted-foreground'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className='bg-muted/50 relative mt-8 flex flex-col justify-center items-center'>
              <CardHeader className='mt-8 flex justify-center items-center pb-2'>
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
                />
                <CardTitle className='text-center'>{name}</CardTitle>
                <CardDescription className='text-primary'>
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className='text-center pb-2'>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                </p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel='noreferrer noopener'
                      href={url}
                      target='_blank'
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}>
                      <span className='sr-only'>{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
