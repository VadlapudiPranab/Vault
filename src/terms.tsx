import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./index.css";

function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-vault-cyan font-bold tracking-[0.18em] text-xs uppercase">
              Effective Date: June 8, 2025
            </p>
          </header>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8 font-semibold">
            PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR SERVICES. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT INSTALL, ACCESS, OR USE THE SERVICES.
          </p>

          <p className="text-base text-white/60 leading-relaxed mb-8">
            These Terms of Service (&quot;Terms&quot;) govern your relationship with Vault Productions (&quot;Vault Productions,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and your access to and use of our games, applications, websites, AI creative tools, and related services (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">1. Eligibility and Account Registration</h2>
              
              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">1.1 Age Requirements</h3>
                  <p className="text-white/70">
                    You must be at least 13 years old to use our Services. If you are between 13 and 17 years old, your parent or legal guardian must review and agree to these Terms on your behalf. By using the Services, you represent that you meet the applicable age requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">1.2 Account Creation</h3>
                  <p className="text-white/70 mb-2">To access certain features, you may be required to create an account. You agree to:</p>
                  <ul className="list-disc pl-5 space-y-1 text-white/70">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Keep your password confidential and not share your account with others</li>
                    <li>Notify us immediately of any unauthorized access or security breach</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                  </ul>
                  <p className="text-white/70 mt-2">
                    Vault Productions reserves the right to refuse registration, terminate accounts, or remove usernames at our discretion.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">2. License to Use the Services</h2>
              
              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">2.1 Grant of License</h3>
                  <p className="text-white/70">
                    Subject to your compliance with these Terms, Vault Productions grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services for personal, non-commercial entertainment and creative purposes only.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">2.2 License Restrictions</h3>
                  <p className="text-white/70 mb-2">You agree that you will not:</p>
                  <ul className="list-disc pl-5 space-y-1 text-white/70">
                    <li>Use the Services for any commercial purpose without our prior written consent</li>
                    <li>Copy, reproduce, distribute, or create derivative works from our Services or content without authorization</li>
                    <li>Use cheats, exploits, automation software, bots, hacks, mods, or unauthorized third-party software to modify or interfere with the Services</li>
                    <li>Attempt to gain unauthorized access to our systems, networks, or other users&apos; accounts</li>
                    <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive source code from our Services</li>
                    <li>Disrupt, overburden, or impair servers or networks connected to the Services</li>
                    <li>Post or transmit content that is abusive, defamatory, obscene, threatening, or otherwise objectionable</li>
                    <li>Infringe upon the intellectual property rights or privacy rights of Vault Productions or any third party</li>
                    <li>Solicit or collect personal information from other users</li>
                    <li>Use the Services in any way that violates applicable laws or regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">3. Ownership and Intellectual Property</h2>
              
              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">3.1 Vault Productions&apos; Content</h3>
                  <p className="text-white/70">
                    All rights, title, and interest in and to the Services — including games, software, code, themes, characters, stories, artwork, animations, audio, and all associated intellectual property — are owned by Vault Productions. We reserve all rights not expressly granted in these Terms. Nothing in these Terms transfers ownership of any Vault Productions content to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">3.2 Virtual Items and In-Game Assets</h3>
                  <p className="text-white/70 mb-2">If our Services include virtual currency, in-game items, or other digital assets, you acknowledge that:</p>
                  <ul className="list-disc pl-5 space-y-1 text-white/70">
                    <li>You have no ownership or property interest in any virtual items or game assets</li>
                    <li>Virtual items have no monetary value and cannot be transferred, exchanged, or redeemed for real currency</li>
                    <li>Vault Productions may modify, manage, or eliminate virtual items at any time without liability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">3.3 User-Generated Content</h3>
                  <p className="text-white/70 mb-2">
                    If you create, upload, or share content through our Services (&quot;User Content&quot;), you retain ownership of your original content. By submitting User Content, you grant Vault Productions a worldwide, irrevocable, perpetual, royalty-free license to use, reproduce, modify, publish, distribute, and display such content in connection with our Services and business operations.
                  </p>
                  <p className="text-white/70">
                    You represent and warrant that your User Content does not violate any law, infringe any third-party rights, or contain harmful or malicious material.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">4. Purchases and Payments</h2>
              
              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">4.1 In-App Purchases</h3>
                  <p className="text-white/70">
                    Our Services may offer purchases of virtual currency, in-game items, premium features, or other digital goods. All purchases are subject to applicable platform terms (e.g., Apple App Store, Google Play Store) and these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">4.2 No Refunds</h3>
                  <p className="text-white/70">
                    ALL PURCHASES ARE FINAL AND NON-REFUNDABLE, EXCEPT AS REQUIRED BY APPLICABLE LAW OR PLATFORM POLICIES. Vault Productions is not required to provide refunds or compensation for virtual items or Services that are discontinued, modified, or terminated.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white/90 mb-2">4.3 Pricing</h3>
                  <p className="text-white/70">
                    We reserve the right to change pricing for goods and services at any time. Any price changes will not affect purchases already completed.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">5. Updates and Changes to the Services</h2>
              <p className="text-white/70 ml-4">
                Vault Productions may update, modify, suspend, or discontinue the Services or any part thereof at any time, with or without notice. We may require you to update our applications to continue using the Services. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">6. Third-Party Services and Links</h2>
              <p className="text-white/70 ml-4">
                Our Services may integrate with or contain links to third-party services, platforms, or content. Vault Productions is not responsible for the availability, accuracy, or practices of any third-party service. Your use of third-party services is at your own risk and subject to their respective terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">7. Termination and Suspension</h2>
              <p className="text-white/70 mb-2 ml-4">
                Vault Productions reserves the right to suspend or terminate your account and access to the Services at any time, with or without cause, including for violation of these Terms. Upon termination:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-white/70 ml-4">
                <li>Your license to use the Services immediately ends</li>
                <li>You may lose access to your account, progress, and any associated content</li>
                <li>We are under no obligation to provide refunds or compensation</li>
              </ul>
              <p className="text-white/70 mt-2 ml-4">
                You may terminate your account at any time by contacting us at{" "}
                <a href="mailto:legal@vaultproductions.ai" className="text-vault-cyan hover:underline">
                  legal@vaultproductions.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-white/70 ml-4 uppercase">
                THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. VAULT PRODUCTIONS DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">9. Limitation of Liability</h2>
              <p className="text-white/70 mb-4 ml-4 uppercase">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, VAULT PRODUCTIONS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF REVENUE, PROFITS, DATA, OR BUSINESS INTERRUPTION, ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES.
              </p>
              <p className="text-white/70 ml-4 uppercase">
                TO THE EXTENT VAULT PRODUCTIONS IS FOUND LIABLE, OUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO VAULT PRODUCTIONS IN THE SIX MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS (USD $100).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">10. Indemnification</h2>
              <p className="text-white/70 ml-4">
                You agree to indemnify, defend, and hold harmless Vault Productions and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising from your use of the Services, your User Content, or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-white/70 mb-2 ml-4">
                These Terms are governed by the laws of the State of North Carolina, United States, without regard to conflict of law principles. You agree that any dispute arising from or related to these Terms or the Services shall be resolved exclusively in the courts located in Wake County, North Carolina, USA.
              </p>
              <p className="text-white/70 ml-4">
                If a dispute arises, we encourage you to first contact us directly at{" "}
                <a href="mailto:legal@vaultproductions.ai" className="text-vault-cyan hover:underline">
                  legal@vaultproductions.ai
                </a>{" "}
                to seek an informal resolution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">12. Severability</h2>
              <p className="text-white/70 ml-4">
                If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions of these Terms shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">13. Entire Agreement</h2>
              <p className="text-white/70 ml-4">
                These Terms, together with our Privacy Policy and any supplemental policies or guidelines we publish, constitute the entire agreement between you and Vault Productions with respect to the Services and supersede all prior agreements, representations, and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">14. Changes to These Terms</h2>
              <p className="text-white/70 ml-4">
                We may update these Terms from time to time. We will notify you of material changes by posting the revised Terms within the Services or on our website and updating the effective date. Your continued use of the Services after changes are posted constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-l-2 border-vault-cyan pl-4 mb-4">15. Contact Us</h2>
              <p className="text-white/70 mb-4 ml-4">
                If you have any questions about these Terms of Service, please contact us at:
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
    <TermsPage />
  </React.StrictMode>
);
