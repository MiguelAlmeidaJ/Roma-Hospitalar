'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand } from './brand';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <a className="header-logo" href="#inicio" aria-label="Roma Hospitalar, ir ao início" onClick={() => setOpen(false)}><Brand /></a>
      <nav id="navegacao-mobile" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a className="mobile-nav-cta" href="#contato" onClick={() => setOpen(false)}>Solicitar atendimento <ArrowUpRight size={16} /></a>
      </nav>
      <a href="#contato" className="header-cta">Fale com a Roma <ArrowUpRight size={16}/></a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navegacao-mobile" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
