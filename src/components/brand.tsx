import Image from 'next/image';

type Props = { inverted?: boolean; compact?: boolean };

export function Brand({ inverted = false, compact = false }: Props) {
  return (
    <span className={`brand ${inverted ? 'brand-inverted' : ''}`} aria-label="Roma Hospitalar">
      <Image
        src="/marca/logo_roma.png"
        alt="Roma Hospitalar"
        width={260}
        height={86}
        className="brand-image"
        style={compact ? { width: 42, objectFit: 'contain' } : undefined}
        priority
      />
    </span>
  );
}
