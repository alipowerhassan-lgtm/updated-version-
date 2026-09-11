/**
 * Generates an official, high-resolution printable PDF quote for Volen Solution
 * Opens a branded print-ready document and triggers the browser print / Save as PDF modal.
 */
export function generatePdfQuote({
  categoryTitle = 'Web & Applications',
  itemTitle = 'Custom Software Solution',
  badge = 'Engineering Package',
  currencyMode = 'PKR',
  oneTimePrice = '',
  monthlyPrice = '',
  timeline = 'Standard Agile Sprint',
  addons = [],
  deliverables = [],
  purpose = ''
}) {
  const quoteNumber = `VS-QT-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const validUntilStr = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download your official PDF quote.');
    return;
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Volen Solution - Official Quotation [${quoteNumber}]</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      @page {
        size: A4;
        margin: 15mm;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      body {
        color: #0f172a;
        background: #f8fafc;
        padding: 24px;
        font-size: 13px;
        line-height: 1.5;
      }
      .paper {
        background: #ffffff;
        max-width: 820px;
        margin: 0 auto;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 4px 25px rgba(0,0,0,0.08);
        border: 1px solid #e2e8f0;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 2px solid #0284c7;
        padding-bottom: 20px;
        margin-bottom: 24px;
      }
      .brand-title {
        font-size: 26px;
        font-weight: 900;
        color: #0f172a;
        letter-spacing: -0.5px;
      }
      .brand-title span {
        color: #0284c7;
      }
      .brand-sub {
        font-size: 11px;
        color: #0369a1;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 800;
        margin-top: 3px;
      }
      .brand-contact {
        font-size: 11px;
        color: #64748b;
        margin-top: 8px;
        line-height: 1.6;
      }
      .quote-meta {
        text-align: right;
      }
      .quote-badge {
        display: inline-block;
        background: #0284c7;
        color: #ffffff;
        font-size: 11px;
        font-weight: 800;
        padding: 4px 12px;
        border-radius: 6px;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .meta-line {
        font-size: 11px;
        color: #475569;
        margin-bottom: 3px;
      }
      .meta-line strong {
        color: #0f172a;
      }
      .section-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 22px;
      }
      .section-tag {
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #0284c7;
        margin-bottom: 6px;
      }
      .item-name {
        font-size: 19px;
        font-weight: 800;
        color: #0f172a;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
      }
      .pill {
        font-size: 10px;
        font-weight: 700;
        background: #e0f2fe;
        color: #0369a1;
        padding: 2px 8px;
        border-radius: 4px;
      }
      .purpose-text {
        font-size: 12px;
        color: #475569;
        line-height: 1.5;
        margin-bottom: 12px;
      }
      .timeline-box {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: #ecfeff;
        border: 1px solid #a5f3fc;
        color: #0e7490;
        font-size: 11.5px;
        font-weight: 700;
        padding: 6px 12px;
        border-radius: 8px;
      }
      .deliverables-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-top: 12px;
      }
      .deliverable-item {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        padding: 7px 10px;
        font-size: 11px;
        color: #334155;
      }
      .deliverable-item span {
        color: #0284c7;
        font-weight: bold;
        margin-right: 4px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 18px 0;
      }
      th {
        background: #0f172a;
        color: #ffffff;
        text-align: left;
        padding: 10px 14px;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      th.right, td.right {
        text-align: right;
      }
      td {
        padding: 11px 14px;
        border-bottom: 1px solid #e2e8f0;
        font-size: 12px;
      }
      tr:nth-child(even) td {
        background: #f8fafc;
      }
      .total-row td {
        background: #e0f2fe !important;
        color: #0369a1;
        font-weight: 900;
        font-size: 14px;
        border-top: 2px solid #0284c7;
      }
      .guarantees-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin: 20px 0;
      }
      .guarantee-card {
        border: 1px solid #e2e8f0;
        background: #ffffff;
        border-radius: 8px;
        padding: 10px;
        font-size: 11px;
      }
      .guarantee-card strong {
        display: block;
        color: #0f172a;
        font-size: 11.5px;
        margin-bottom: 3px;
      }
      .guarantee-card p {
        color: #64748b;
        line-height: 1.4;
      }
      .signatures {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        padding-top: 20px;
      }
      .sig-box {
        width: 220px;
        text-align: center;
      }
      .sig-line {
        border-top: 1px solid #0f172a;
        margin-top: 45px;
        padding-top: 6px;
        font-size: 11px;
        font-weight: 800;
        color: #0f172a;
      }
      .sig-sub {
        font-size: 10px;
        color: #64748b;
      }
      .footer-terms {
        font-size: 10.5px;
        color: #64748b;
        margin-top: 24px;
        padding-top: 14px;
        border-top: 1px dashed #cbd5e1;
        line-height: 1.5;
      }
      .print-nav {
        background: #0f172a;
        color: #ffffff;
        padding: 12px 24px;
        max-width: 820px;
        margin: 0 auto 16px auto;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      }
      .btn-download {
        background: #0284c7;
        color: #ffffff;
        border: none;
        padding: 9px 18px;
        border-radius: 8px;
        font-weight: 800;
        font-size: 12px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: background 0.2s;
      }
      .btn-download:hover {
        background: #0369a1;
      }
      @media print {
        body {
          background: #ffffff;
          padding: 0;
        }
        .paper {
          box-shadow: none;
          border: none;
          padding: 0;
          max-width: 100%;
        }
        .print-nav {
          display: none !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="print-nav">
      <div style="font-size: 12px; font-weight: 700;">
        📄 Volen Solution Official Engineering Quotation
      </div>
      <button class="btn-download" onclick="window.print()">
        📥 Save as PDF / Print Document
      </button>
    </div>

    <div class="paper">
      <!-- HEADER -->
      <div class="header">
        <div>
          <div class="brand-title">VOLEN <span>SOLUTION</span></div>
          <div class="brand-sub">Enterprise Engineering & Digital Architecture</div>
          <div class="brand-contact">
            Global HQ: Pakistan • Serving Enterprise Clients Worldwide<br>
            Direct Inquiries: WhatsApp /volen.solution • Web: volensolution.com
          </div>
        </div>
        <div class="quote-meta">
          <div class="quote-badge">OFFICIAL ESTIMATE</div>
          <div class="meta-line">Quote Ref: <strong>${quoteNumber}</strong></div>
          <div class="meta-line">Issue Date: <strong>${dateStr}</strong></div>
          <div class="meta-line">Valid Until: <strong>${validUntilStr} (30 Days)</strong></div>
          <div class="meta-line">Currency: <strong>${currencyMode}</strong></div>
        </div>
      </div>

      <!-- PROJECT SCOPE & SPECS -->
      <div class="section-card">
        <div class="section-tag">PROJECT SPECIFICATION & SYSTEM ARCHITECTURE</div>
        <div class="item-name">
          <span>${itemTitle}</span>
          <span class="pill">${badge}</span>
        </div>
        ${purpose ? `<p class="purpose-text">${purpose}</p>` : ''}
        
        <div class="timeline-box">
          ⏱️ Estimated Turnaround / SLA: <strong>${timeline}</strong>
        </div>

        ${deliverables.length > 0 ? `
          <div style="margin-top: 14px;">
            <div style="font-size: 10.5px; font-weight: 800; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Included Deliverables:</div>
            <div class="deliverables-grid">
              ${deliverables.map(d => `<div class="deliverable-item"><span>✓</span> ${d}</div>`).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- FINANCIAL INVESTMENT BREAKDOWN -->
      <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #0284c7; margin-top: 16px;">
        ITEMIZED FINANCIAL INVESTMENT BREAKDOWN (${currencyMode})
      </div>
      <table>
        <thead>
          <tr>
            <th>Deliverable / Custom Add-on</th>
            <th>Type</th>
            <th class="right">Investment (${currencyMode})</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>${itemTitle}</strong>
              <div style="font-size: 11px; color: #64748b;">Base software architecture, UI/UX implementation & deployment</div>
            </td>
            <td>${categoryTitle}</td>
            <td class="right"><strong>${oneTimePrice || 'Standard Rate'}</strong></td>
          </tr>
          ${addons.map(a => `
            <tr>
              <td>
                <strong>${a.name}</strong>
                <div style="font-size: 11px; color: #64748b;">${a.scope}</div>
              </td>
              <td>${a.isRecurring ? 'Monthly Add-on' : 'Custom Feature'}</td>
              <td class="right">+${currencyMode === 'PKR' ? a.pkrRange : a.usdRange}</td>
            </tr>
          `).join('')}
          ${monthlyPrice ? `
            <tr>
              <td>
                <strong>Continuous SLA / Maintenance Retainer</strong>
                <div style="font-size: 11px; color: #64748b;">Automated backups, security monitoring, and priority support</div>
              </td>
              <td>Monthly Retainer</td>
              <td class="right"><strong>${monthlyPrice}</strong></td>
            </tr>
          ` : ''}
          <tr class="total-row">
            <td colspan="2">TOTAL PROJECT INVESTMENT:</td>
            <td class="right">${oneTimePrice}</td>
          </tr>
        </tbody>
      </table>

      <!-- GUARANTEES -->
      <div class="guarantees-grid">
        <div class="guarantee-card">
          <strong>🔒 100% IP & Code Ownership</strong>
          <p>Full GitHub repository transfer and complete copyright ownership upon project sign-off.</p>
        </div>
        <div class="guarantee-card">
          <strong>⚡ Sub-Second Optimization</strong>
          <p>Lighthouse 95+ score, Core Web Vitals compliance, and responsive UX across all viewports.</p>
        </div>
        <div class="guarantee-card">
          <strong>🛡️ Enterprise Reliability</strong>
          <p>Zero-trust security architecture, encrypted payload transmission, and staging environment verification.</p>
        </div>
      </div>

      <!-- SIGNATURE BLOCKS -->
      <div class="signatures">
        <div class="sig-box">
          <div class="sig-line">Volen Solution Engineering</div>
          <div class="sig-sub">Authorized Solution Architect</div>
        </div>
        <div class="sig-box">
          <div class="sig-line">Client Representative</div>
          <div class="sig-sub">Acceptance & Milestone Authorization</div>
        </div>
      </div>

      <!-- TERMS -->
      <div class="footer-terms">
        <strong>Notice & Commercial Terms:</strong> This estimate is based on the technical selections and requirements configured above. Milestone-based payments apply with progressive deliverables. Final scope and SLAs will be codified in the formal master service agreement upon project kickoff.
      </div>
    </div>
  </body>
</html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
