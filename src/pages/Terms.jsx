import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto w-full font-data text-sm leading-relaxed text-dark/80">
      <h1 className="font-heading font-bold text-5xl uppercase tracking-tighter mb-12 text-dark">
        Terms and Conditions
      </h1>
      
      <div className="space-y-8">
        <p>These terms and conditions ("Agreement") set forth the general terms and conditions of your use of the rivana-automations.com website ("Website" or "Service") and any of its related products and services (collectively, "Services"). This Agreement is legally binding between you ("User", "you" or "your") and Rivana Automations ("Rivana Automations", "we", "us" or "our").</p>

        <section>
          <h2 className="font-heading font-bold text-2xl uppercase tracking-tight mb-4 text-dark">Accounts and membership</h2>
          <p>If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account. Providing false contact information of any kind may result in the termination of your account.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl uppercase tracking-tight mb-4 text-dark">User content</h2>
          <p>We do not own any data, information or material (collectively, "Content") that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl uppercase tracking-tight mb-4 text-dark">Refunds, Cancellations & Fulfillment Policy</h2>
          <h3 className="font-bold text-dark mt-4 mb-2">1. Service Fulfillment</h3>
          <p className="mb-2">We deliver made-to-order automation systems under a 50/50 payment model:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>50% non-refundable deposit to initiate the project</li>
            <li>50% balance due upon completion and approval</li>
          </ul>
          <p className="mb-6">Custom builds are scoped case-by-case and include a written brief agreed upon prior to project commencement.</p>

          <h3 className="font-bold text-dark mt-4 mb-2">2. Refund Policy</h3>
          <p className="mb-2">The initial 50% deposit is non-refundable once work has begun. A partial refund may be considered only if:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>The delivered automation build fails to meet the agreed written brief</li>
            <li>You have given Rivana Automations a fair opportunity to revise and remedy any issues</li>
          </ul>
          <p className="mb-2">We do not refund:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>If the brief is met but client preferences change</li>
            <li>If the client delays communication, content, or approvals</li>
            <li>If the client fails to provide the tools, access, or information required to complete the build</li>
          </ul>

          <h3 className="font-bold text-dark mt-4 mb-2">3. Cancellations & Termination</h3>
          <p>All purchases are binding. Clients may request early termination of services, but this does not entitle them to a refund unless expressly agreed in writing. We reserve the right to terminate any engagement, with immediate effect and without refund, if the client violates terms of service or engages in chargeback fraud.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl uppercase tracking-tight mb-4 text-dark">Intellectual property rights</h2>
          <p>This Agreement does not transfer to you any intellectual property owned by Rivana Automations or third parties, and all rights, titles, and interests in and to such property will remain solely with Rivana Automations.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl uppercase tracking-tight mb-4 text-dark">Changes and amendments</h2>
          <p>We reserve the right to modify this Agreement or its terms related to the Website and Services at any time at our discretion. Your continued use of the Website and Services after the effective date of the revised Agreement will constitute your consent to those changes.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl uppercase tracking-tight mb-4 text-dark">Contacting us</h2>
          <p>If you have any questions, concerns, or complaints regarding this Agreement, we encourage you to contact us at: <a href="mailto:bosunadeoye@rivanautomations.com" className="text-accent hover:underline">bosunadeoye@rivanautomations.com</a></p>
        </section>
      </div>
    </main>
  );
}
