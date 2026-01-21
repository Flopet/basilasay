import "./homelab.css";
import { HardwareItem } from "./components/HardwareItem";
import { ServiceCard } from "./components/ServiceCard";
import { UnderConstructionRibbon } from "@/components/UnderConstructionRibbon";
import {GithubRibbon} from "@/components/GithubRibbon";

import {
  hardwareComponents,
  getServicesByCategory,
  serviceCategories,
  securityStrategies,
} from "@/lib/homelab-config";

export default function HomelabPage() {
  return (
    <div className="homelab-page">
      <GithubRibbon/>
      <UnderConstructionRibbon />
      <div className="homelab-container">

        {/* Header Section */}
        <header className="homelab-section">
          <h1 className="homelab-hero-title">
            Homelab Server Project Showcase
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

          <h3 className="homelab-subsection-heading">Server Components</h3>
          <div className="homelab-table-container">
            <table className="homelab-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Specification</th>
                </tr>
              </thead>
              <tbody>
                {hardwareComponents.map((component, index) => (
                  <HardwareItem key={index} {...component} />
                ))}
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
        </section>

        {/* Hosted Services */}
        <section className="homelab-section">
          <h2 className="homelab-section-heading">Hosted Services</h2>
          <p className="homelab-intro-text">
            All services run in Docker containers, managed through Docker Compose with automated backups via Duplicati.
          </p>

          {serviceCategories.map((category) => {
            const categoryServices = getServicesByCategory(category);
            return (
              <div key={category} className="homelab-subsection">
                <h3 className="homelab-subsection-heading">{category}</h3>
                <div className="homelab-card-group">
                  {categoryServices.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                  ))}
                </div>
              </div>
            );
          })}
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
            {securityStrategies.map((strategy, index) => (
              <div key={index} className="homelab-card">
                <h4 className="homelab-card-title">{strategy.name}</h4>
                <p className="homelab-security-short">
                  <strong>{strategy.shortDescription}</strong>
                </p>
                <p>{strategy.longDescription}</p>
              </div>
            ))}
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
