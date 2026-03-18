import {
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiZap,
} from 'react-icons/fi';

const strengths = [
  {
    title: 'フルスタックに完結',
    description:
      'React / TypeScript のUI設計から Python API、データ設計、インフラ自動化まで一気通貫で推進できます。',
    icon: <FiLayers />,
  },
  {
    title: '10年の実務経験',
    description:
      '新規立ち上げ、既存改善、技術負債の解消、チームリードまで、フェーズを問わず価値を出してきました。',
    icon: <FiGitBranch />,
  },
  {
    title: '速度と品質の両立',
    description:
      '設計、実装、レビュー、運用を見据えた開発で、素早く作りつつ長く使えるプロダクトを目指します。',
    icon: <FiZap />,
  },
];

const experience = [
  {
    period: '2021 - Present',
    role: 'Lead / Senior Full-Stack Engineer',
    summary:
      'React・Python・クラウド基盤を軸に、複数サービスのリード開発を担当。プロダクト設計から改善施策の実行まで主導。',
  },
  {
    period: '2017 - 2021',
    role: 'Product Engineer',
    summary:
      'B2B / B2C サービスでフロントエンド刷新、API設計、データ可視化、パフォーマンス改善に従事。',
  },
  {
    period: '2014 - 2017',
    role: 'Software Engineer',
    summary:
      '業務システムやWebアプリケーションの実装を通して、基礎設計、保守運用、品質改善の経験を蓄積。',
  },
];

const stack = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Node.js', 'REST / GraphQL'] },
  { category: 'Data & Infra', items: ['PostgreSQL', 'Redis', 'Docker', 'AWS', 'CI/CD'] },
  { category: 'Work Style', items: ['Tech Lead', 'Architecture', 'Mentoring', 'Performance Tuning'] },
];

const featuredProjects = [
  {
    name: 'Platform Modernization',
    detail:
      'レガシーな社内基盤を React + Python 中心に再設計し、開発速度と運用性を大きく改善。',
    impact: '開発リードタイムを短縮し、機能追加のボトルネックを解消。',
  },
  {
    name: 'Analytics Dashboard',
    detail:
      '複雑な業務データをわかりやすく可視化するダッシュボードを構築。意思決定のスピード向上に貢献。',
    impact: '複数部署が同じ指標を基に判断できる環境を整備。',
  },
  {
    name: 'Growth-Focused Product Development',
    detail:
      'プロトタイプから本番運用まで素早く検証し、プロダクト改善サイクルを継続的に回す体制を構築。',
    impact: '顧客価値の高い改善を小さく速く届けるワークフローを定着。',
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero-card">
        <nav className="topbar">
          <div>
            <p className="eyebrow">ENGINEER PORTFOLIO</p>
            <h1>10年の経験で、プロダクトを前に進めるエンジニア。</h1>
          </div>
          <a className="ghost-link" href="#contact">
            Contact <FiArrowUpRight />
          </a>
        </nav>

        <div className="hero-grid">
          <section>
            <p className="lead">
              React や Python を中心に、設計から実装、改善まで一気通貫で担えるフルスタックエンジニアです。
              モダンで美しい体験と、現実的に運用できる堅実な設計の両方を大切にしています。
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                実績を見る
              </a>
              <a className="secondary-button" href="#stack">
                技術スタック
              </a>
            </div>
          </section>

          <aside className="stats-panel">
            <div>
              <span>Experience</span>
              <strong>10+</strong>
              <small>years building products</small>
            </div>
            <div>
              <span>Main Focus</span>
              <strong>React + Python</strong>
              <small>UI / API / Data / Delivery</small>
            </div>
            <div>
              <span>Style</span>
              <strong>Modern & Practical</strong>
              <small>speed, quality, scalability</small>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">VALUE</p>
            <h2>できること</h2>
          </div>
          <div className="cards-grid three-col">
            {strengths.map((item) => (
              <article className="info-card" key={item.title}>
                <div className="icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-layout" id="stack">
          <div className="section-heading narrow">
            <p className="eyebrow">STACK</p>
            <h2>幅広い技術を、目的に合わせて使い分けます。</h2>
            <p>
              10年の経験の中で、フロントエンド、バックエンド、データ、インフラまで幅広く対応してきました。
              技術選定はトレンドだけでなく、チームや事業にとっての持続性も重視します。
            </p>
          </div>
          <div className="stack-grid">
            {stack.map((group) => (
              <article className="stack-card" key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading">
            <p className="eyebrow">PROJECTS</p>
            <h2>代表的な取り組み</h2>
          </div>
          <div className="cards-grid three-col">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-meta">
                  <FiCode />
                  <span>Case Study</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
                <strong>{project.impact}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-layout">
          <div className="section-heading narrow">
            <p className="eyebrow">CAREER</p>
            <h2>キャリアサマリー</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.period}>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact-card" id="contact">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>モダンなプロダクトを、一緒に形にしませんか？</h2>
            <p>
              新規開発、リニューアル、技術選定、チーム立ち上げなど、幅広いテーマで伴走できます。
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub <FiArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Built with React / Vite</p>
        <div className="footer-icons">
          <FiCpu />
          <FiDatabase />
        </div>
      </footer>
    </div>
  );
}

export default App;
