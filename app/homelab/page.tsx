import "./homelab.css";

export default function HomelabPage() {
  return (
    <div className="homelab-page">
      <div className="homelab-container">

        {/* Header Section */}
        <header className="homelab-section">
          <h1 className="homelab-hero-title">
            My Homelab Server Portfolio
          </h1>
          <div className="homelab-intro">
            <p>
              My homelab is a personal server that I built and maintain to learn real-world IT skills.
              It runs on Unraid OS and hosts services for myself, friends, and family - everything from
              media streaming and photo backup to game servers and project management tools.
            </p>
            <p>
              The goal is simple: get hands-on experience with technologies that matter in professional
              IT environments. I treat this server like a production system, which means focusing on
              security, reliability, and proper organization. Every service I add teaches me something
              new about Linux, networking, Docker, or system administration - skills that directly
              translate to IT jobs.
            </p>
          </div>
        </header>

        {/* Hardware Specifications */}
        <section className="homelab-section">
          <h2 className="homelab-section-heading">Hardware Specifications</h2>

          <h3 className="homelab-subsection-heading">Server Build</h3>
          <div className="homelab-table-container">
            <table className="homelab-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Case</td>
                  <td>Rosewill Helium Mid-Tower ATX (10x 3.5" + 3x 2.5" drive bays)</td>
                </tr>
                <tr>
                  <td>Motherboard</td>
                  <td>ASUS TUF B360M-PLUS GAMING S</td>
                </tr>
                <tr>
                  <td>CPU</td>
                  <td>Intel Core i5-8400 (6-Core @ 2.80GHz)</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>32GB DDR4-2666MHz</td>
                </tr>
                <tr>
                  <td>GPU</td>
                  <td>Nvidia GeForce GTX 1060 3GB (for hardware transcoding)</td>
                </tr>
                <tr>
                  <td>OS Drive</td>
                  <td>128GB USB Flash Drive (Unraid requirement)</td>
                </tr>
                <tr>
                  <td>Cache Drive</td>
                  <td>512GB NVMe SSD</td>
                </tr>
                <tr>
                  <td>Appdata Drive</td>
                  <td>128GB 2.5" SSD (container storage)</td>
                </tr>
                <tr>
                  <td>Parity Drive</td>
                  <td>1x 20TB HDD</td>
                </tr>
                <tr>
                  <td>Data Drives</td>
                  <td>1x 20TB HDD, 2x 2TB HDD</td>
                </tr>
                <tr>
                  <td>Operating System</td>
                  <td>Unraid OS</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="homelab-card">
            <p>
              <span className="homelab-bold">Build Notes:</span> This server was
              built primarily from spare PC parts with a few key upgrades (more RAM, GPU, storage). The
              GPU handles video transcoding for media services. The multi-tiered storage setup uses fast
              NVMe/SSD storage for frequently accessed data and Docker containers, while HDDs provide bulk
              storage protected by parity.
            </p>
          </div>

          <h3 className="homelab-subsection-heading">Additional Equipment</h3>
          <div className="homelab-table-container">
            <table className="homelab-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Model/Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wireless Access Point</td>
                  <td>TP-Link EAP610 (WiFi 6, WPA3, PoE+)</td>
                </tr>
                <tr>
                  <td>Router</td>
                  <td>ISP-provided gateway</td>
                </tr>
                <tr>
                  <td>Remote Management</td>
                  <td>IP KVM</td>
                </tr>
                <tr>
                  <td>Power Protection</td>
                  <td>UPS Surge Protector</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Hosted Services */}
        <section className="homelab-section">
          <h2 className="homelab-section-heading">Hosted Services</h2>
          <p className="homelab-intro-text">
            All services run in Docker containers, managed through Docker Compose with automated backups via Duplicati.
          </p>

          {/* Media & Content */}
          <div className="homelab-subsection">
            <h3 className="homelab-subsection-heading">Media & Content</h3>
            <div className="homelab-card-group">
              <div className="homelab-card">
                <h4 className="homelab-card-title">Jellyfin</h4>
                <p>
                  Media streaming server for movies, TV shows, and music. Uses the GTX 1060 for
                  hardware-accelerated transcoding to support multiple simultaneous streams.
                </p>
              </div>
              <div className="homelab-card">
                <h4 className="homelab-card-title">Audiobookshelf</h4>
                <p>
                  Audiobook and podcast server with progress tracking and mobile app support.
                </p>
              </div>
              <div className="homelab-card">
                <h4 className="homelab-card-title">Immich</h4>
                <p>
                  Self-hosted photo and video backup solution. A Google Photos alternative that keeps my data under my control.
                </p>
              </div>
            </div>
          </div>

          {/* Productivity & Collaboration */}
          <div className="homelab-subsection">
            <h3 className="homelab-subsection-heading">Productivity & Collaboration</h3>
            <div className="homelab-card-group">
              <div className="homelab-card">
                <h4 className="homelab-card-title">AFFiNE</h4>
                <p>
                  Open-source workspace for notes, docs, and project planning.
                </p>
              </div>
              <div className="homelab-card">
                <h4 className="homelab-card-title">OwnCloud</h4>
                <p>
                  Personal cloud storage for file syncing and sharing across devices.
                </p>
              </div>
              <div className="homelab-card">
                <h4 className="homelab-card-title">Peppermint</h4>
                <p>
                  IT ticketing and help desk system. I use this to track family tech support requests,
                  log server maintenance tasks, and document solutions to problems I've solved. It includes
                  a built-in knowledge base for storing guides and manuals.
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure & Management */}
          <div className="homelab-subsection">
            <h3 className="homelab-subsection-heading">Infrastructure & Management</h3>
            <div className="homelab-card-group">
              <div className="homelab-card">
                <h4 className="homelab-card-title">Homarr</h4>
                <p>
                  Customizable dashboard that serves as the central hub for all my services. Displays
                  real-time container status with start/stop/restart controls, plus live server resource monitoring.
                </p>
              </div>
              <div className="homelab-card">
                <h4 className="homelab-card-title">AMP (Application Management Panel)</h4>
                <p>
                  Manages and hosts game servers for friends.
                </p>
              </div>
              <div className="homelab-card">
                <h4 className="homelab-card-title">Cloudflare Tunnel</h4>
                <p>
                  Securely exposes public-facing services to the internet without opening ports on my router.
                  Each service gets its own custom domain.
                </p>
              </div>
              <div className="homelab-card">
                <h4 className="homelab-card-title">PostgreSQL & Redis</h4>
                <p>
                  Database services that support multiple applications.
                </p>
              </div>
              <div className="homelab-card">
                <h4 className="homelab-card-title">Duplicati</h4>
                <p>
                  Automated backup solution for critical data and configurations.
                </p>
              </div>
            </div>
          </div>

          {/* Security & Access */}
          <div className="homelab-subsection">
            <h3 className="homelab-subsection-heading">Security & Access</h3>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Tailscale</h4>
              <p>
                Zero-trust mesh VPN for secure remote access to the server and admin panels. All sensitive
                services stay behind the VPN and aren't exposed publicly.
              </p>
            </div>
          </div>
        </section>

        {/* Storage Architecture */}
        <section className="homelab-section">
          <h2 className="homelab-section-heading">Storage Architecture</h2>
          <p className="homelab-intro-text">
            My server uses Unraid's flexible storage system, which combines drives of different sizes into a single protected array.
          </p>

          <h3 className="homelab-subsection-heading">How It Works</h3>
          <div className="homelab-card-group">
            <div className="homelab-card">
              <h4 className="homelab-card-title">Parity Drive (1x 20TB)</h4>
              <p>
                Provides fault tolerance for the entire array. If any single data drive fails, the parity
                drive can rebuild it. The parity drive must be equal to or larger than the biggest data drive.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Data Drives (1x 20TB, 2x 2TB)</h4>
              <p>
                Store all media, backups, and user files. Unlike traditional RAID, each drive contains its
                own filesystem and can be accessed individually if needed. Total usable storage: ~24TB.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Cache Drive (512GB NVMe)</h4>
              <p>
                Acts as a high-speed landing zone for new writes. Data gets written here first for speed,
                then moved to the array overnight. Dramatically improves performance for file transfers and application writes.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Appdata Drive (128GB SSD)</h4>
              <p>
                Dedicated SSD for Docker container persistent storage (databases, configurations, app data).
                Keeps container I/O fast and separate from the main array.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">USB Boot Drive (128GB)</h4>
              <p>
                Unraid runs entirely from RAM but boots from USB. The USB drive stores the OS and configuration.
              </p>
            </div>
          </div>

          <h3 className="homelab-subsection-heading">Benefits of This Setup</h3>
          <div className="homelab-card">
            <ul className="homelab-list">
              <li>Mix and match drive sizes (don't need matching drives like traditional RAID)</li>
              <li>Easy expansion - just add another drive to the array</li>
              <li>Single drive failure protection without losing data</li>
              <li>Fast performance for Docker apps and frequent file access</li>
              <li>Lower power consumption (Unraid spins down idle drives)</li>
            </ul>
          </div>
        </section>

        {/* Network & Security */}
        <section className="homelab-section">
          <h2 className="homelab-section-heading">Network & Security</h2>

          <h3 className="homelab-subsection-heading">Network Setup</h3>
          <div className="homelab-card">
            <p>My network is relatively simple but effective:</p>
            <ul className="homelab-list">
              <li><span className="homelab-bold">ISP Router</span> - Handles basic routing and acts as the primary gateway</li>
              <li><span className="homelab-bold">TP-Link EAP610 Access Point</span> - Provides WiFi 6 coverage with WPA3 encryption, seamless roaming, and PoE+ power</li>
              <li><span className="homelab-bold">Server</span> - Connects via ethernet to the main network</li>
            </ul>
          </div>

          <h3 className="homelab-subsection-heading">Security Strategy</h3>
          <p className="homelab-intro-text">
            I use a modern approach to security that focuses on secure tunneling and VPN access rather than exposing services directly:
          </p>
          <div className="homelab-card-group">
            <div className="homelab-card">
              <h4 className="homelab-card-title">Cloudflare Tunnel</h4>
              <p>
                Public-facing services (like Jellyfin, Immich, AFFiNE) are accessible via custom domains
                that route through Cloudflare's infrastructure. This means no ports are opened on my router,
                and Cloudflare provides DDoS protection and SSL encryption automatically.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Tailscale VPN</h4>
              <p>
                All administrative interfaces and sensitive services are only accessible through Tailscale's
                mesh VPN. This includes server management panels, databases, and configuration tools. Even
                when I'm remote, I connect through Tailscale before accessing anything sensitive.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Separation of Access</h4>
              <p>
                Public services get Cloudflare domains for convenience. Private/admin services stay VPN-only.
                This keeps management interfaces completely isolated from the internet.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Docker Network Isolation</h4>
              <p>
                Services run in isolated Docker networks with only necessary ports exposed to the host.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="homelab-section">
          <h2 className="homelab-section-heading">Skills Demonstrated</h2>

          <h3 className="homelab-subsection-heading">Technical Skills</h3>
          <div className="homelab-skills-grid">
            <div className="homelab-card">
              <h4 className="homelab-card-title">Operating Systems</h4>
              <ul className="homelab-list">
                <li>Linux administration (Unraid OS, Ubuntu)</li>
                <li>Windows and macOS experience</li>
              </ul>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Containerization & Orchestration</h4>
              <ul className="homelab-list">
                <li>Docker container deployment and management</li>
                <li>Docker Compose for multi-container applications</li>
                <li>Container networking and isolation</li>
              </ul>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Networking</h4>
              <ul className="homelab-list">
                <li>Network configuration and troubleshooting</li>
                <li>VPN implementation (Tailscale)</li>
                <li>Reverse proxy and tunnel configuration (Cloudflare)</li>
                <li>Wireless network management (WiFi 6, WPA3)</li>
              </ul>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Storage Management</h4>
              <ul className="homelab-list">
                <li>Unraid parity-protected arrays</li>
                <li>Multi-tiered storage architecture</li>
                <li>Backup strategies and automation</li>
              </ul>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Databases</h4>
              <ul className="homelab-list">
                <li>PostgreSQL deployment and management</li>
                <li>Redis caching implementation</li>
              </ul>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Scripting & Development</h4>
              <ul className="homelab-list">
                <li>Bash scripting</li>
                <li>Python</li>
                <li>Web technologies (HTML, CSS, JavaScript, TypeScript)</li>
              </ul>
            </div>
            <div className="homelab-card homelab-card-full">
              <h4 className="homelab-card-title">System Administration</h4>
              <ul className="homelab-list">
                <li>Service monitoring and maintenance</li>
                <li>Automated backup solutions</li>
                <li>Documentation and ticketing systems</li>
                <li>Remote server management</li>
              </ul>
            </div>
          </div>

          <h3 className="homelab-subsection-heading">Soft Skills</h3>
          <div className="homelab-card">
            <ul className="homelab-list">
              <li><span className="homelab-bold">Problem-solving</span> - Troubleshooting complex technical issues across multiple systems</li>
              <li><span className="homelab-bold">Self-directed learning</span> - Continuously exploring new technologies and implementing solutions</li>
              <li><span className="homelab-bold">Documentation</span> - Maintaining organized records of configurations and fixes</li>
              <li><span className="homelab-bold">Security mindset</span> - Implementing layered security with VPNs, tunnels, and network isolation</li>
            </ul>
          </div>
        </section>

        {/* Future Plans */}
        <section className="homelab-section">
          <h2 className="homelab-section-heading">Future Plans</h2>
          <div className="homelab-card-group">
            <div className="homelab-card">
              <h4 className="homelab-card-title">Storage Upgrades</h4>
              <p>
                Planning to upgrade both the cache drive and appdata SSD to 1-2TB drives for increased
                capacity and performance as more services are added.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Home Automation</h4>
              <p>
                Exploring home automation technologies and integration with the homelab infrastructure.
              </p>
            </div>
            <div className="homelab-card">
              <h4 className="homelab-card-title">Continuous Learning</h4>
              <p>
                Always looking to expand knowledge and implement new services that provide value while
                teaching practical IT skills.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
