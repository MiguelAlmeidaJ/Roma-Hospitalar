import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Layers3, Package } from 'lucide-react';
import { Brand } from '@/components/brand';
import { Header } from '@/components/header';
import { BackToTop } from '@/components/back-to-top';
import './produtos.css';

export const metadata: Metadata = {
  title: 'Produtos | Roma Hospitalar',
  description: 'Conheça o portfólio da Roma Hospitalar em medicina regenerativa, biomateriais e cuidados perioperatórios.',
};

const linhas = [
  {
    id: 'medicina-regenerativa',
    numero: '01',
    nome: 'Medicina Regenerativa & Ortobiológicos',
    descricao: 'Conheça as soluções desta linha do portfólio Roma Hospitalar.',
    produtos: ['HyaJoint', 'LipoPack Duo', '3E PRP', 'Marrow-Pack'],
  },
  {
    id: 'biomateriais',
    numero: '02',
    nome: 'Biomateriais & Regeneração Tecidual',
    descricao: 'Conheça as soluções desta linha do portfólio Roma Hospitalar.',
    produtos: ['Axiostat', 'BonAlive', 'Genta Coll', 'Genta Foil'],
  },
  {
    id: 'cuidados-perioperatorios',
    numero: '03',
    nome: 'Dor & Cuidados Perioperatórios',
    descricao: 'Conheça as soluções desta linha do portfólio Roma Hospitalar.',
    produtos: ['Nerve Control', 'Pain Control', 'ProHere'],
  },
];

const whatsApp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '');
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || '';
function contato(nome: string) {
  const mensagem = 'Olá! Gostaria de informações sobre o produto ' + nome + ' da Roma Hospitalar.';
  if (whatsApp) return 'https://wa.me/' + whatsApp + '?text=' + encodeURIComponent(mensagem);
  if (email) return 'mailto:' + email + '?subject=' + encodeURIComponent('Informações sobre ' + nome);
  return '/#contato';
}

export default function ProdutosPage() {
  return <main>
    <Header />
    <section className="catalog-hero">
      <div className="container catalog-hero-inner">
        <span className="eyebrow eyebrow-light"><span /> Portfólio Roma Hospitalar</span>
        <h1>Tecnologias médicas <em>especializadas.</em></h1>
        <p>Conheça nossas linhas de atuação e encontre os produtos do portfólio Roma Hospitalar.</p>
        <div className="catalog-anchors" aria-label="Navegar pelas linhas de produtos">
          {linhas.map(linha => <a key={linha.id} href={'#' + linha.id}>{linha.nome}<ArrowUpRight size={16}/></a>)}
        </div>
      </div>
    </section>
    <section className="catalog-intro section">
      <div className="container catalog-intro-grid">
        <div><span className="eyebrow"><span /> Nossas linhas</span><h2>Um portfólio organizado por <span>área de atuação.</span></h2></div>
        <p>Explore as três linhas de tecnologias médicas especializadas. Para informações técnicas, disponibilidade ou cotações, entre em contato com a equipe Roma Hospitalar.</p>
      </div>
    </section>
    {linhas.map(linha => <section className="catalog-line section" id={linha.id} key={linha.id} aria-labelledby={linha.id + '-title'}>
      <div className="container">
        <div className="catalog-line-head">
          <div><span className="catalog-number">{linha.numero} / 03 — Linha de produtos</span><h2 id={linha.id + '-title'}>{linha.nome}</h2><p>{linha.descricao}</p></div>
          <span className="catalog-count">{linha.produtos.length.toString().padStart(2, '0')} produtos</span>
        </div>
        <div className="catalog-grid">
          {linha.produtos.map((nome, indice) => <article className="catalog-card" key={nome}>
            <div className="catalog-card-media"><span className="catalog-card-mark"><Layers3 size={30} strokeWidth={1.2} /></span><span className="catalog-item-number">{String(indice + 1).padStart(2,'0')}</span></div>
            <div className="catalog-card-info"><span className="catalog-card-kicker"><Package size={14}/> Roma Hospitalar</span><h3>{nome}</h3><a href={contato(nome)} target={whatsApp ? '_blank' : undefined} rel={whatsApp ? 'noopener noreferrer' : undefined}>Solicitar informações <ArrowUpRight size={17}/></a></div>
          </article>)}
        </div>
      </div>
    </section>)}
    <section className="catalog-bottom"><div className="container catalog-bottom-grid"><div><span className="eyebrow eyebrow-light"><span /> Atendimento comercial</span><h2>Precisa de informações sobre <em>algum produto?</em></h2><p>Fale com nossa equipe para consultar detalhes técnicos, disponibilidade e cotações.</p></div><Link className="btn btn-teal" href="/#contato">Entre em contato <ArrowRight size={18}/></Link></div></section>
    <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Brand inverted /><p>Tecnologias médicas especializadas.</p></div><div className="footer-links"><h4>Navegue</h4><Link href="/">Início</Link><Link href="/#sobre">Sobre nós</Link><Link href="/produtos">Produtos</Link><Link href="/#contato">Contato</Link></div><div className="footer-links"><h4>Roma Hospitalar</h4><p>Uma empresa do Grupo RA Capital.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Roma Hospitalar. Todos os direitos reservados.</span><span className="footer-credit">Desenvolvido por <a href="https://www.nivel3ti.com.br/" target="_blank" rel="noopener noreferrer">Nível 3 TI</a> — <a href="https://www.instagram.com/miguelalmeida.dev/" target="_blank" rel="noopener noreferrer">Miguel Almeida</a></span></div></footer>
    <BackToTop />
  </main>;
}
