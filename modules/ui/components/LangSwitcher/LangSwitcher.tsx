import Link from 'next/link';
import { useRouter } from 'next/router';

const LangSwitcher = () => {
  const router = useRouter();

  const { locale: activeLocale, asPath, pathname, query } = router;

  return (
    <div className='text-muted flex cursor-pointer items-center justify-center gap-2'>
      <Link
        href={{ pathname, query }}
        as={asPath}
        locale={'pl'}
        className={`hover: cursor-pointer hover:underline ${
          activeLocale === 'pl' ? 'underline' : ''
        }`}
      >
        PL
      </Link>
      |
      <Link
        href={{ pathname, query }}
        as={asPath}
        locale={'en'}
        className={`hover: cursor-pointer hover:underline ${
          activeLocale === 'en' ? 'underline' : ''
        }`}
      >
        EN
      </Link>
    </div>
  );
};

export default LangSwitcher;
