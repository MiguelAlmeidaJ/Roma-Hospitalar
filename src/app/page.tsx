import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Box, Building2, Check, ClipboardList, Cross, HeartHandshake, Hospital, Mail, PackageCheck, ShieldCheck, Stethoscope, Truck } from 'lucide-react';
import { Brand } from '@/components/brand';
import { Header } from '@/components/header';

const solutions = [
  { number: '01', icon: Stethoscope, name: 'Materiais hospitalares', description: 'Soluções para apoiar a rotina de instituições e profissionais de saúde, com foco nas necessidades de cada operação.' },
  { number: '02', icon: PackageCheck, name: 'Suprimentos e insumos', description: 'Atendimento comercial direcionado ao abastecimento e à continuidade dos serviços de saúde.' },
  { number: '03', icon: ClipboardList, name: 'Cotações personalizadas', description: 'Converse com a nossa equipe e apresente a demanda da sua instituição para receber orientação comercial.' },
];
const audiences = [
  { icon: Hospital, name: 'Hospitais' },
  { icon: Stethoscope, name: 'Clínicas' },
  { icon: Building2, name: 'Instituições de saúde' },
  { icon: HeartHandshake, name: 'Profissionais da área' },
];
const whatsApp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '');
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || '';
const waHref = whatsApp ? `https://wa.me/${whatsApp}?text=${encodeURIComponent('Olá! Gostaria de solicitar uma cotação com a Roma Hospitalar.')}` : '';
const emailHref = email ? `mailto:${email}?subject=${encodeURIComponent('Solicitação de cotação - Roma Hospitalar')}` : '';

export default function Home() {
  return <main id="inicio">
    <Header />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-photo" role="img" aria-label="Ambiente hospitalar contemporâneo" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="eyebrow eyebrow-light"><span /> Compromisso com a saúde</div>
        <h1 id="hero-title">Distribuindo saúde,<br /><em>entregando resultado.</em></h1>
        <p>Soluções em fornecimento hospitalar com atenção às necessidades de quem cuida de vidas todos os dias.</p>
        <div className="hero-actions"><a className="btn btn-teal" href="#solucoes">Conheça nossas soluções <ArrowUpRight size={18} /></a><a className="hero-secondary" href="#sobre">Saiba mais sobre nós <ArrowRight size={18} /></a></div>
      </div>
      <a className="hero-scroll" href="#sobre"><ArrowDown size={16} /> Explore a Roma</a>
      <div className="hero-index">01 / 04</div>
    </section>

    <section id="sobre" className="section about">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <div className="about-image" role="img" aria-label="Profissional de saúde no ambiente hospitalar" />
          <div className="about-accent"><Cross size={30} strokeWidth={1.6} /><span>Saúde em cada detalhe.</span></div>
        </div>
        <div className="about-copy">
          <span className="eyebrow"><span /> Quem somos</span>
          <h2>Cuidado que começa <span>antes do atendimento.</span></h2>
          <p>Na Roma Hospitalar, acreditamos que a saúde também depende do que acontece nos bastidores: organização, fornecimento e atenção em cada etapa.</p>
          <p>Nosso propósito é aproximar as demandas do setor da saúde de soluções comerciais que contribuam para o dia a dia de quem faz a diferença.</p>
          <div className="about-values"><span><Check size={17} /> Atenção às necessidades</span><span><Check size={17} /> Relacionamento próximo</span><span><Check size={17} /> Compromisso com resultados</span></div>
          <a className="text-link" href="#contato">Vamos conversar <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>

    <section id="solucoes" className="section solutions">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow"><span /> O que fazemos</span><h2>Soluções para quem<br /><span>cuida da saúde.</span></h2></div><p>Mais do que oferecer produtos, buscamos entender as necessidades de cada cliente e facilitar o processo de fornecimento.</p></div>
        <div className="solution-cards">{solutions.map(item => <article className="solution-card" key={item.number}><div className="solution-top"><span>{item.number}</span><item.icon size={29} strokeWidth={1.45}/></div><h3>{item.name}</h3><p>{item.description}</p><a href="#contato" aria-label={`Consultar sobre ${item.name}`}><ArrowUpRight size={19}/></a></article>)}</div>
      </div>
    </section>

    <section id="diferenciais" className="difference">
      <div className="difference-picture" role="img" aria-label="Equipe de profissionais hospitalares" />
      <div className="difference-content"><div className="difference-inner">
        <span className="eyebrow eyebrow-light"><span /> Nosso compromisso</span>
        <h2>Uma parceria que<br /><em>faz a diferença.</em></h2>
        <p>O fornecimento hospitalar exige responsabilidade, atenção e uma comunicação clara. É assim que queremos construir cada relacionamento.</p>
        <div className="difference-list">
          <div><BadgeCheck size={25}/><span><strong>Compromisso</strong><small>Responsabilidade em cada contato.</small></span></div>
          <div><HeartHandshake size={25}/><span><strong>Proximidade</strong><small>Atendimento atento às demandas do cliente.</small></span></div>
          <div><Truck size={25}/><span><strong>Foco no resultado</strong><small>Soluções alinhadas à rotina da saúde.</small></span></div>
        </div>
      </div></div>
    </section>

    <section className="section audiences">
      <div className="container">
        <div className="center-heading"><span className="eyebrow"><span /> Para quem trabalhamos</span><h2>Ao lado de quem<br /><span>faz a saúde acontecer.</span></h2><p>Atendimento pensado para diferentes necessidades do setor.</p></div>
        <div className="audiences-list">{audiences.map(a => <div className="audience" key={a.name}><a.icon size={30} strokeWidth={1.5}/><span>{a.name}</span></div>)}</div>
      </div>
    </section>

    <section id="contato" className="contact">
      <div className="container contact-layout">
        <div><span className="eyebrow eyebrow-light"><span /> Entre em contato</span><h2>Vamos encontrar a<br /><em>solução ideal?</em></h2><p>Conte para a Roma Hospitalar o que sua instituição precisa. Nossa equipe está pronta para iniciar essa conversa.</p></div>
        <div className="contact-card"><span className="contact-icon"><Box size={24}/></span><h3>Solicite uma cotação</h3><p>Entre em contato e compartilhe sua necessidade de fornecimento.</p>
          {waHref ? <a className="btn btn-teal contact-button" href={waHref} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <ArrowUpRight size={18}/></a> : null}
          {emailHref ? <a className={`contact-email ${waHref ? '' : 'contact-only'}`} href={emailHref}><Mail size={17}/> {email}</a> : null}
          {!waHref && !emailHref ? <p className="contact-pending">Os canais comerciais serão divulgados em breve.</p> : null}
        </div>
      </div>
    </section>

    <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Brand inverted /><p>Distribuindo saúde, entregando resultado.</p></div><div className="footer-links"><h4>Navegue</h4><a href="#inicio">Início</a><a href="#sobre">Sobre nós</a><a href="#solucoes">Soluções</a><a href="#contato">Contato</a></div><div className="footer-links"><h4>Roma Hospitalar</h4><p>Fornecimento hospitalar com compromisso e atenção às pessoas.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Roma Hospitalar. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </main>;
}
