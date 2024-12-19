"use client";
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const PrivacyPage: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`pt-20 pb-10 px-40 mx-auto shadow-md ${theme === 'dark' ? 'bg-[#021814] text-white' : 'bg-white text-gray-800'}`}>
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p>Effective Date: 16.12.2024</p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p>We do not collect any personal or non-personal data from our users. This includes:</p>
            <ul>
                <li>No account creation is required.</li>
                <li>No cookies or tracking technologies are used.</li>
                <li>No user activity logs are stored.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <p>Since we do not collect any data, we do not use, store, or process your personal information in any way. This means:</p>
            <ul>
                <li>We do not track your usage behavior or preferences.</li>
                <li>We do not send you promotional emails or notifications.</li>
                <li>Your activity on well.dev remains completely private.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Payments</h2>
            <p>All payments made on well.dev are processed securely through Stripe, a third-party payment processor. Here's what you need to know about payment handling:</p>
            <ul>
                <li>Payment details such as credit card numbers and billing information are not stored or processed by us.</li>
                <li>Stripe adheres to strict industry security standards (PCI DSS compliance) to ensure the safety of your payment data.</li>
                <li>For more information, refer to Stripe's Privacy Policy.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Sharing</h2>
            <p>We do not share any information with third parties because we do not collect any data. This includes:</p>
            <ul>
                <li>No sharing with advertisers, analytics providers, or data brokers.</li>
                <li>No integration with third-party platforms for user tracking.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
            <p>Since we do not collect or store data, there is no personal information to access, update, or delete. However, if you have questions or concerns about your interaction with well.dev, feel free to reach out to us.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our practices, please contact us:</p>
            <p>Company Name: ModUI</p>
            <p>Address: Paromlinska 12, Sarajevo, Bosnia and Herzegovina</p>
            <p>Email: hello@modui.io</p>
            <p>We are committed to addressing any concerns or inquiries promptly.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with a new "Effective Date." Key points about updates:</p>
            <ul>
                <li>We will notify users of significant changes via the well.dev website.</li>
                <li>Minor updates that do not affect user privacy will be posted without direct notification.</li>
                <li>We encourage you to review this policy periodically to stay informed about our practices.</li>
            </ul>

            <p>Thank you for trusting well.dev. Your privacy is important to us.</p>
        </div>
    );
};

export default PrivacyPage;
