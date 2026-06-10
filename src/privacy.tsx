import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./index.css";

function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-vault-black text-white flex flex-col">
      <Header />
      
      {/* Spacer for sticky header */}
      <div className="h-[72px]" />

      <main className="flex-1 max-w-[960px] mx-auto px-5 py-12 sm:px-7 sm:py-16 lg:px-10 lg:py-24">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-250px] left-[15%] w-[600px] h-[600px] rounded-full bg-vault-cyan/10 blur-[120px]" />
          <div className="absolute top-[-200px] right-[15%] w-[500px] h-[500px] rounded-full bg-vault-orange/5 blur-[100px]" />
        </div>

        <article className="relative z-10 prose prose-invert max-w-none">
          <header className="border-b border-vault-line pb-8 mb-10">
            <h1 className="font-display text-5xl sm:text-6xl tracking-tight text-white mb-4 uppercase">
              Privacy Policy
            </h1>
            <p className="text-vault-cyan font-bold tracking-[0.18em] text-xs uppercase">
              Effective Date: June 8, 2025
            </p>
          </header>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8">
            This Privacy Policy describes how Vault Productions (&quot;Vault Productions,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information about you when you use our games, applications, websites, and related services (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to the practices described in this Privacy Policy.
          </p>

          <p className="text-base text-white/60 leading-relaxed mb-8">
            Vault Productions is an AI creative studio and game development company headquartered in Cary, North Carolina, USA. Our Services include mobile and PC games, AI-powered creative tools, interactive experiences, and any associated online platforms.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">1. Information We Collect</h2>
              
              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">1.1 Information You Provide Directly</h3>
                  <p className="text-white/70 mb-2">We collect information you voluntarily provide, including:</p>
                  <ul className="list-disc pl-5 space-y-1 text-white/70">
                    <li>Account registration details (name, email address, username, password)</li>
                    <li>Profile information and preferences</li>
                    <li>Communications you send us, including support requests and feedback</li>
                    <li>Payment and billing information when you make purchases</li>
                    <li>Any content you create, upload, or share through our Services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">1.2 Information Collected Automatically</h3>
                  <p className="text-white/70 mb-2">When you use our Services, we automatically collect:</p>
                  <ul className="list-disc pl-5 space-y-1 text-white/70">
                    <li>Device identifiers and technical information (device type, operating system, browser type)</li>
                    <li>Usage data (gameplay statistics, session duration, features accessed, in-app actions)</li>
                    <li>Log data (IP address, access times, pages viewed, errors)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Analytics data to understand how users interact with our Services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">1.3 Information from Third Parties</h3>
                  <p className="text-white/70 mb-2">We may receive information about you from:</p>
                  <ul className="list-disc pl-5 space-y-1 text-white/70">
                    <li>Social networking platforms (e.g., Google, Apple, Facebook) if you choose to connect them</li>
                    <li>App stores and platform providers</li>
                    <li>Third-party analytics and advertising partners</li>
                    <li>Other users who interact with you through our Services</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">2. How We Use Your Information</h2>
              <p className="text-white/70 mb-2 ml-4">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1 text-white/70 ml-4">
                <li>Provide, operate, and improve our Services and games</li>
                <li>Create and manage your account</li>
                <li>Process transactions and send related information</li>
                <li>Send service-related communications (updates, security alerts, support messages)</li>
                <li>Personalize your experience and deliver relevant content</li>
                <li>Analyze usage patterns to enhance gameplay and user experience</li>
                <li>Detect, prevent, and respond to fraud, abuse, and security incidents</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Develop new features, products, and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">3. How We Share Your Information</h2>
              <p className="text-white/70 mb-4 ml-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              
              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">3.1 Service Providers</h3>
                  <p className="text-white/70">
                    We share information with trusted third-party vendors who assist us in operating our Services, including cloud hosting providers, analytics services, customer support platforms, payment processors, and advertising networks. These parties are contractually obligated to protect your information and may only use it to provide services to us.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">3.2 Platform Partners</h3>
                  <p className="text-white/70">
                    Our games and applications may integrate with third-party platforms such as app stores, social networks, and streaming services. Please review their privacy policies, as we are not responsible for their data practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">3.3 Legal Requirements</h3>
                  <p className="text-white/70">
                    We may disclose your information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Vault Productions, our users, or others.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">3.4 Business Transfers</h3>
                  <p className="text-white/70">
                    In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">3.5 With Your Consent</h3>
                  <p className="text-white/70">
                    We may share your information for other purposes with your explicit consent.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">4. Data Retention</h2>
              <p className="text-white/70 ml-4">
                We retain your information for as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal information within a reasonable period, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">5. Your Rights and Choices</h2>
              
              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">5.1 Account Information</h3>
                  <p className="text-white/70">
                    You may access, update, or correct your account information at any time through your account settings. You may request deletion of your account by contacting us at the details below.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">5.2 Communications</h3>
                  <p className="text-white/70">
                    You may opt out of marketing communications at any time by following the unsubscribe instructions in any email or by contacting us. You will still receive essential service-related communications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">5.3 Cookies</h3>
                  <p className="text-white/70">
                    You may control cookie preferences through your browser settings. Note that disabling cookies may affect some features of our Services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">5.4 California Residents</h3>
                  <p className="text-white/70">
                    If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know, delete, and opt out of the sale of personal information. We do not sell personal information. To exercise your rights, contact us at the information below.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">5.5 EU/EEA Residents</h3>
                  <p className="text-white/70">
                    If you are located in the European Union or European Economic Area, you may have rights under the General Data Protection Regulation (GDPR), including rights of access, rectification, erasure, restriction of processing, data portability, and objection. Contact us to exercise these rights.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">6. Children&apos;s Privacy</h2>
              <p className="text-white/70 ml-4">
                Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will take steps to delete such information. If you are between 13 and 17, you represent that your parent or legal guardian has reviewed and agreed to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">7. Data Security</h2>
              <p className="text-white/70 ml-4">
                We implement reasonable technical, administrative, and physical security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">8. International Data Transfers</h2>
              <p className="text-white/70 ml-4">
                Vault Productions operates from the United States. If you are located outside the United States, your information will be transferred to and processed in the United States, which may have different data protection laws than your jurisdiction. By using our Services, you consent to this transfer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">9. Third-Party Links and Services</h2>
              <p className="text-white/70 ml-4">
                Our Services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies before providing any information to them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-white/70 ml-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the revised policy on our website or within our Services, and updating the effective date. Your continued use of the Services after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">11. Contact Us</h2>
              <p className="text-white/70 mb-4 ml-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-white/[0.02] border border-vault-line p-6 rounded ml-4 space-y-2">
                <p className="font-semibold text-white">Vault Productions</p>
                <p className="text-white/70">Cary, North Carolina, USA</p>
                <p className="text-white/70">
                  Email:{" "}
                  <a href="mailto:legal@vaultproductions.ai" className="text-vault-cyan hover:underline">
                    legal@vaultproductions.ai
                  </a>
                </p>
                <p className="text-white/70">
                  Website:{" "}
                  <a href="https://www.vaultproductions.ai" target="_blank" rel="noreferrer" className="text-vault-cyan hover:underline">
                    www.vaultproductions.ai
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrivacyPage />
  </React.StrictMode>
);
