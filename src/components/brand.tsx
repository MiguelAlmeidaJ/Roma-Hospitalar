type Props = { inverted?: boolean; compact?: boolean };
export function Brand({ inverted = false, compact = false }: Props) {
  return (
    <span className="brand" aria-label="Roma Hospitalar">
      <svg className="brand-symbol" viewBox="0 0 100 110" role="img" aria-label="Símbolo Roma Hospitalar: escudo e cruz">
        <path d="M50 7 88 29v38c0 14-13 26-37 39l-4-9c21-11 31-21 31-31V35L50 19 22 35v31c0 11 9 21 26 30l-5 9C20 92 12 80 12 67V29Z" fill={inverted ? '#ffffff' : '#032551'} />
        <path d="M45 35h10v15h15v10H55v15H45V60H30V50h15Z" fill="#218f8b" />
      </svg>
      {!compact && <span className="brand-wordmark"><strong>ROMA</strong><span>HOSPITALAR</span></span>}
    </span>
  );
}
