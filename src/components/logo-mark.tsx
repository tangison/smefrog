import Image from 'next/image'

export const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <Image
    src="/upload/Icon.png"
    alt="SMEfrog"
    width={80}
    height={80}
    className={className}
    priority
  />
);
