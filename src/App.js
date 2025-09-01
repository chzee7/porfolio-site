import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <a href="https://linkedin.com/in/charlottezee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Charlotte Zee</h1>
          <h2 className="hero-subtitle">Professional Wordsmith</h2>
          <p className="hero-description">
            Communications and marketing professional based in Los Angeles, California
          </p>
          <a href="#work" className="cta-button">View My Work</a>
        </div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h3>About Me</h3>
          <div className="about-content">
            <div className="about-image">
              <img src="/charlotte-zee-headshot.jpg" alt="Charlotte Zee" className="headshot" />
            </div>
            <div className="about-text">
              <p className="bio">
                Communications and marketing professional with expertise in crafting compelling narratives and strategic messaging. 
                Based in Los Angeles, California, I specialize in developing content that resonates with target audiences and drives 
                meaningful engagement across traditional and digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="container">
          <h3>Work</h3>
          
          <div className="work-category">
            <h4>Blogs and Bylines</h4>
            <div className="work-items">
              <div className="work-item">
                <h5>Amobee Series</h5>
                <ul>
                  <li><a href="https://www.amobee.com/blog/employee-spotlight-febryna-putri-manager-finance/" target="_blank" rel="noopener noreferrer" className="work-link">Employee Spotlight: Febryna Putri (Finance Manager)</a></li>
                  <li><a href="https://www.amobee.com/blog/employee-spotlight-olivia-torrence-hr-manager/" target="_blank" rel="noopener noreferrer" className="work-link">Employee Spotlight: Olivia Torrence (HR Manager)</a></li>
                  <li><a href="https://www.amobee.com/blog/amobees-latinx-community-shares-rich-stories-in-celebration-of-latinx-heritage-month/" target="_blank" rel="noopener noreferrer" className="work-link">Latinx Heritage Month Community Stories</a></li>
                </ul>
              </div>
              <div className="work-item">
                <h5>Woodbury University</h5>
                <p><a href="https://www.linkedin.com/pulse/why-world-needs-creators-how-we-celebrated-them-made-2025-bellantoni-02ioc" target="_blank" rel="noopener noreferrer" className="work-link">"Why the World Needs Creators – And How We Celebrated Them at MADE at WOODBURY 2025"</a></p>
              </div>
            </div>
          </div>

          <div className="work-category">
            <h4>Earned Media</h4>
            <div className="work-items">
              <div className="work-item">
                <h5>Axios</h5>
                <p><a href="https://www.axios.com/2022/08/30/walmart-toys-inflation-holiday-shopping-season" target="_blank" rel="noopener noreferrer" className="work-link">"Holiday Shopping Season Starts Early Amid Inflation" (InMobi)</a></p>
              </div>
              <div className="work-item">
                <h5>California Apparel News</h5>
                <p><a href="https://www.apparelnews.net/news/2025/jun/12/woodbury-students-design-to-their-own-voices/" target="_blank" rel="noopener noreferrer" className="work-link">"Woodbury Students Design to Their Own Voices"</a></p>
              </div>
              <div className="work-item">
                <h5>Fast Company</h5>
                <p><a href="https://www.fastcompany.com/90929341/older-millennials-vs-gen-z-streaming-tv-likes" target="_blank" rel="noopener noreferrer" className="work-link">"Generational Divide: Older Millennials Prefer Streaming TV"</a></p>
              </div>
            </div>
          </div>

          <div className="work-category">
            <h4>Press Releases</h4>
            <div className="work-items">
              <div className="work-item">
                <h5>InMobi</h5>
                <ul>
                  <li><a href="https://www.inmobi.com/company/press/inmobi-forges-global-partnership-with-ad-net-zero-to-further-its-commitment-to-sustainable-advertising-practices" target="_blank" rel="noopener noreferrer" className="work-link">Partnership with Ad Net Zero</a></li>
                  <li><a href="https://www.inmobi.com/company/press/new-study-shows-brand-focused-and-performance-focused-marketers-priorities-blur-for-in-app-campaigns" target="_blank" rel="noopener noreferrer" className="work-link">Study on Marketers' Campaign Priorities</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="work-category">
            <h4>Award Recognition</h4>
            <div className="work-items">
              <div className="work-item">
                <h5>Industry Awards</h5>
                <ul>
                  <li><a href="https://www.adexchanger.com/go/2023-power-players/?oly_enc_id=6311H9579489D1Z" target="_blank" rel="noopener noreferrer" className="work-link">AdExchanger: 2023 Programmatic Power Players</a></li>
                  <li><a href="https://www.businessinsider.com/up-and-coming-professionals-to-know-in-advertising-technology-2023-4" target="_blank" rel="noopener noreferrer" className="work-link">Business Insider: Rising Stars of Adtech 2023</a></li>
                  <li><a href="https://www.cynopsis.com/events/2023-top-women-in-media/" target="_blank" rel="noopener noreferrer" className="work-link">Cynopsis: Top Women in Media 2023</a></li>
                  <li><a href="https://mobilemarketingmagazine.com/inmobi-wins-gold-silver-bronze-mma-smarties-mena-awards-" target="_blank" rel="noopener noreferrer" className="work-link">Mobile Marketing Magazine: MMA SMARTIES MENA Awards</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="work-category">
            <h4>Key Clients</h4>
            <div className="work-items">
              <div className="work-item">
                <div className="client-list">
                  <span className="client">Amobee</span>
                  <span className="client">InMobi</span>
                  <span className="client">Woodbury University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h3>Professional Contact</h3>
          <p className="contact-intro">Available for full-time opportunities, consulting projects, and strategic communications partnerships.</p>
          <div className="contact-grid">
            <div className="contact-info">
              <h4>Get In Touch</h4>
              <p><strong>Email:</strong> <a href="mailto:chzee7@gmail.com">chzee7@gmail.com</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/charlottezee" target="_blank" rel="noopener noreferrer">linkedin.com/in/charlottezee</a></p>
              <p><strong>Location:</strong> Los Angeles, California</p>
            </div>
            <div className="contact-cta">
              <a href="mailto:chzee7@gmail.com" className="contact-button">Contact Me</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
