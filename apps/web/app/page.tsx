const sections = [
  { title: 'Your choices shape the neighborhood.', body: 'Help a neighbor, build community trust, and discover how ordinary decisions connect to larger stories. Our first interactive neighborhood is an early development prototype.' },
  { title: 'Build, don’t destroy.', body: 'From ethical food and fair finance to privacy-first technology and independent media, the planned campaign explores how communities can create alternatives to exploitative systems.' },
  { title: 'A life beyond one character.', body: 'Planned stories span family, elder care, community service, and generational legacy. Sensitive stories are optional.' },
  { title: 'Learn with care.', body: 'Educational experiences about Arabic, Qur’an study, purification and prayer are planned. Religious instruction remains draft until qualified scholarly review.' },
  { title: 'An original world, city by city.', body: 'A fictional neighborhood first, then locally reviewed city packs, culturally grounded stories, and original licensed 3D art.' },
  { title: 'Built in the open.', body: 'Developers, artists, writers, accessibility specialists and qualified Islamic reviewers can help shape Dunya on GitHub.' },
];
const faqs = [
  ['Can I play Dunya today?', 'Not as a verified public release. The repository contains an early 3D prototype and a draft interactive slice under review.'],
  ['Is Dunya a GTA mod?', 'No. Dunya is an original project and does not use Rockstar code or assets.'],
  ['Does Dunya issue religious rulings?', 'No. Educational content requires documented sources and qualified scholarly review.'],
  ['Will it work on mobile?', 'Mobile-browser accessibility is a goal, not a verified release promise.'],
];
const repo = 'https://github.com/codingshot/gtahalal';
export default function Home() {
  return <main style={{fontFamily:'system-ui, sans-serif', background:'#101e26', color:'#f6f1e5', minHeight:'100vh'}}>
    <nav aria-label="Primary" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px clamp(18px,5vw,80px)',borderBottom:'1px solid #35464c'}}>
      <strong style={{letterSpacing:3,fontSize:22}}>DUNYA</strong><a href={repo} style={{color:'#e8ca91'}}>GitHub ↗</a>
    </nav>
    <header style={{padding:'clamp(64px,10vw,140px) clamp(18px,7vw,120px)',maxWidth:1100}}>
      <p style={{color:'#e8ca91',fontSize:12,letterSpacing:3,fontWeight:700}}>OPEN-SOURCE WORLD IN DEVELOPMENT</p>
      <h1 style={{fontSize:'clamp(46px,8vw,108px)',lineHeight:1.03,letterSpacing:'-0.055em',margin:'20px 0'}}>A world worth building.</h1>
      <p style={{fontSize:'clamp(18px,2.2vw,25px)',lineHeight:1.6,maxWidth:790,color:'#d5ddd9'}}>Dunya is an original browser-first Muslim life simulator about exploring cities, learning, caring for family, serving neighbors, and building ethical institutions.</p>
      <div style={{display:'flex',gap:14,flexWrap:'wrap',marginTop:36}}>
        <a href={repo} style={{padding:'15px 24px',background:'#e8ca91',color:'#17232b',fontWeight:700,borderRadius:8,textDecoration:'none'}}>Explore the project</a>
        <a href="#vision" style={{padding:'15px 24px',border:'1px solid #aebbb9',color:'#fff',borderRadius:8,textDecoration:'none'}}>Read the vision</a>
      </div>
      <p style={{fontSize:13,color:'#b5c5c2',marginTop:24}}>Early prototype · No verified public game release · Original assets only</p>
    </header>
    <section id="vision" aria-label="Dunya vision" style={{background:'#f1eee5',color:'#1b2a2d',padding:'70px clamp(18px,7vw,120px)'}}>
      <h2 style={{fontSize:'clamp(30px,4vw,50px)',maxWidth:720}}>Explore. Learn. Serve. Build.</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,290px),1fr))',gap:18,marginTop:36}}>
        {sections.map(s=><article key={s.title} style={{background:'#fff',padding:26,borderRadius:12,border:'1px solid #e0ded4'}}><h3 style={{fontSize:22}}>{s.title}</h3><p style={{lineHeight:1.65,color:'#4c595b'}}>{s.body}</p></article>)}
      </div>
    </section>
    <section aria-label="Frequently asked questions" style={{padding:'65px clamp(18px,7vw,120px)',maxWidth:950}}>
      <h2 style={{fontSize:36}}>Questions worth asking</h2>
      {faqs.map(([q,a])=><details key={q} style={{borderBottom:'1px solid #45545a',padding:'18px 0'}}><summary style={{fontSize:19,cursor:'pointer'}}>{q}</summary><p style={{lineHeight:1.6,color:'#c6d4d2'}}>{a}</p></details>)}
    </section>
    <footer style={{padding:'32px clamp(18px,7vw,120px)',borderTop:'1px solid #45545a',color:'#b7c5c3'}}>DUNYA · Do good. Learn. Serve. Build. · <a href={repo} style={{color:'#e8ca91'}}>Contribute on GitHub</a></footer>
  </main>;
}
