import { Logo, Link } from '@/ui/components';

export function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-3">
      <Link href="/">
        <Logo withPictogram />
      </Link>
      <p className="text-text-tertiary">
        Made with ❤️ by{' '}
        <Link className="text-text-brand hover:text-text-primary font-medium" href="https://www.emilecourthoud.com">
          Emile
        </Link>
        ,{' '}
        <Link className="text-text-brand hover:text-text-primary font-medium" href="https://www.linkedin.com/in/sharan/">
          Sharam
        </Link>
        ,{' '}
        <Link className="text-text-brand hover:text-text-primary font-medium" href="https://www.linkedin.com/in/joshua/">
          Joshua
        </Link>
      </p>
    </div>
  );
}
