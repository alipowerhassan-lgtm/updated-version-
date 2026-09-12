// LocalStorage keys
const PROPOSALS_KEY = 'volen_admin_proposals_v1';

// Initial sample data so the admin panel isn't completely empty when first opened
const SEED_PROPOSALS = [
  {
    id: 'APP-1001',
    trackingCode: 'VOLEN-DEMO-2026',
    fullName: 'Zubair Khan',
    email: 'zubair@apexlogistics.com',
    phone: '+92 300 1234567',
    source: 'Technical Proposal Modal',
    domain: 'Custom Web App (SaaS / MVP)',
    scale: 'Enterprise Scaled',
    timeline: '4 to 6 Weeks',
    budgetEstimate: 'PKR 650,000 / $4,200',
    details: 'Freight Dispatch & Fleet Web App with JWT role-based dashboards and payment tracking.',
    status: 'In Progress',
    paymentStatus: '50% Advance Verified',
    submittedAt: '2026-03-01T10:30:00.000Z'
  },
  {
    id: 'APP-1002',
    trackingCode: 'VOLEN-ECOMM-99',
    fullName: 'Sara Al-Mansoor',
    email: 'sara@luxefashion.ae',
    phone: '+971 50 9876543',
    source: 'Interactive Cost Calculator',
    domain: 'E-Commerce Store',
    scale: 'Multi-Product Store with Stripe',
    timeline: '3 to 4 Weeks',
    budgetEstimate: 'PKR 280,000 / $2,400',
    details: 'Luxury clothing store with cart drawer, Paymob & Stripe gateways, and dynamic size variant filter.',
    status: 'Review QA',
    paymentStatus: '30% Milestone Paid',
    submittedAt: '2026-03-05T14:15:00.000Z'
  }
];

export function getAdminProposals() {
  try {
    const raw = localStorage.getItem(PROPOSALS_KEY);
    if (!raw) {
      localStorage.setItem(PROPOSALS_KEY, JSON.stringify(SEED_PROPOSALS));
      return SEED_PROPOSALS;
    }
    return JSON.parse(raw);
  } catch {
    return SEED_PROPOSALS;
  }
}

export function saveAdminProposal(submission) {
  try {
    const list = getAdminProposals();
    const newId = 'APP-' + Math.floor(1000 + Math.random() * 9000);
    const tracking = 'VOLEN-' + Math.floor(1000 + Math.random() * 9000);

    const record = {
      id: newId,
      trackingCode: tracking,
      fullName: submission.fullName || 'Anonymous Client',
      email: submission.email || 'Not Provided',
      phone: submission.phone || submission.whatsapp || 'Not Provided',
      source: submission.source || 'Website Submission',
      domain: submission.domain || submission.subject || 'Web Architecture',
      scale: submission.scale || 'Custom Scope',
      timeline: submission.timeline || 'Sprint-based',
      budgetEstimate: submission.budgetEstimate || 'To Be Quoted',
      details: submission.details || submission.message || 'No additional notes provided.',
      status: 'New Application',
      paymentStatus: 'Pending Kickoff Advance (50%)',
      submittedAt: new Date().toISOString()
    };

    const updated = [record, ...list];
    localStorage.setItem(PROPOSALS_KEY, JSON.stringify(updated));
    return record;
  } catch (err) {
    console.error('Failed to save proposal to admin storage', err);
    return null;
  }
}

export function updateProposalStatus(id, newStatus, newPaymentStatus) {
  try {
    const list = getAdminProposals();
    const updated = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: newStatus !== undefined ? newStatus : item.status,
          paymentStatus: newPaymentStatus !== undefined ? newPaymentStatus : item.paymentStatus
        };
      }
      return item;
    });
    localStorage.setItem(PROPOSALS_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to update proposal', err);
    return [];
  }
}

export function deleteProposal(id) {
  try {
    const list = getAdminProposals();
    const filtered = list.filter((item) => item.id !== id);
    localStorage.setItem(PROPOSALS_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (err) {
    console.error('Failed to delete proposal', err);
    return [];
  }
}