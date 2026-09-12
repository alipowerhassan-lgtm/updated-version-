import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Lock, X, LogOut, CheckCircle2, Clock, 
  Trash2, MessageSquare, Download, RefreshCw, Eye, 
  Filter, Search, User, DollarSign, Calendar, ExternalLink,
  ChevronDown
} from 'lucide-react';
import { 
  getAdminProposals, updateProposalStatus, deleteProposal 
} from '../utils/adminStorage';

const ADMIN_PASSCODE = 'volen2026';

const STATUS_OPTIONS = [
  'New Application',
  'Under Review',
  'In Progress',
  'Review QA',
  'Deployed & Handed Over',
  'Cancelled'
];

const PAYMENT_STATUS_OPTIONS = [
  'Pending Kickoff Advance (50%)',
  '50% Advance Verified',
  '30% Review Milestone Pending',
  '30% Milestone Paid',
  '20% Final Milestone on Deployment',
  '100% Fully Settled'
];

export default function AdminDashboardModal({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [proposals, setProposals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedProposal, setSelectedProposal] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadProposals();
    }
  }, [isOpen]);

  const loadProposals = () => {
    const list = getAdminProposals();
    setProposals(list);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      setAuthError('');
      loadProposals();
    } else {
      setAuthError('Invalid Admin Passcode. Default: volen2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode('');
    setSelectedProposal(null);
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = updateProposalStatus(id, newStatus, undefined);
    setProposals(updated);
    if (selectedProposal && selectedProposal.id === id) {
      setSelectedProposal(prev => ({ ...prev, status: newStatus }));
    }
  };

  const handlePaymentChange = (id, newPaymentStatus) => {
    const updated = updateProposalStatus(id, undefined, newPaymentStatus);
    setProposals(updated);
    if (selectedProposal && selectedProposal.id === id) {
      setSelectedProposal(prev => ({ ...prev, paymentStatus: newPaymentStatus }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this application record?')) {
      const filtered = deleteProposal(id);
      setProposals(filtered);
      if (selectedProposal && selectedProposal.id === id) {
        setSelectedProposal(null);
      }
    }
  };

  const handleExportCSV = () => {
    if (!proposals.length) return;
    const headers = ['ID', 'Tracking Code', 'Client Name', 'Email', 'Phone', 'Source', 'Domain/Service', 'Status', 'Payment Status', 'Date'];
    const rows = proposals.map(p => [
      p.id,
      p.trackingCode,
      `"${p.fullName}"`,
      p.email,
      p.phone,
      p.source,
      `"${p.domain}"`,
      p.status,
      p.paymentStatus,
      new Date(p.submittedAt).toLocaleDateString()
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `volen_client_applications_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredProposals = proposals.filter((item) => {
    const matchesSearch = 
      item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.trackingCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.domain.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-6xl bg-white border border-sky-300/80 rounded-3xl shadow-2xl shadow-sky-950/30 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 px-6 py-5 text-white flex items-center justify-between border-b border-sky-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-400">
                  Volen Control Tower
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Admin Authority
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Client Applications & Payment Monitor
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 transition-all cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Admin Modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 1. Login Screen if NOT authenticated */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 max-w-md mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-slate-900">Protected Administrator Portal</h3>
              <p className="text-xs text-slate-500">Enter master passcode to review client orders and verify milestone payments.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Master Passcode (default: volen2026)"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono text-center tracking-widest text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  autoFocus
                />
              </div>

              {authError && (
                <div className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-2 rounded-lg">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                Access Admin Dashboard →
              </button>
            </form>

            <div className="text-[11px] text-slate-400">
              Passcode hint: <strong className="font-mono text-slate-600">volen2026</strong>
            </div>
          </div>
        ) : (
          /* 2. Authenticated Admin Dashboard */
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Top Stat Overview Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200/80">
                <div className="text-xs font-bold text-sky-800 uppercase tracking-wider">Total Submissions</div>
                <div className="text-2xl font-black text-slate-900 mt-1">{proposals.length}</div>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">New Applications</div>
                <div className="text-2xl font-black text-slate-900 mt-1">
                  {proposals.filter(p => p.status === 'New Application').length}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">50% Advance Active</div>
                <div className="text-2xl font-black text-slate-900 mt-1">
                  {proposals.filter(p => p.paymentStatus.includes('50%')).length}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200/80">
                <div className="text-xs font-bold text-indigo-800 uppercase tracking-wider">In Progress / QA</div>
                <div className="text-2xl font-black text-slate-900 mt-1">
                  {proposals.filter(p => p.status === 'In Progress' || p.status === 'Review QA').length}
                </div>
              </div>
            </div>

            {/* Filter, Search & Export Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-2 flex-1">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by client name, email, tracking ID, or domain..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="ALL">All Statuses ({proposals.length})</option>
                  {STATUS_OPTIONS.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={loadProposals}
                  title="Reload Data"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Applications Table */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-300 uppercase tracking-wider text-[10px] font-bold border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Tracking Code & Client</th>
                      <th className="py-3 px-4">Project Domain & Scope</th>
                      <th className="py-3 px-4">Project Status</th>
                      <th className="py-3 px-4">Payment Milestone</th>
                      <th className="py-3 px-4 text-right">Admin Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredProposals.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-10 text-slate-400">
                          No client applications found matching criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredProposals.map((item) => (
                        <tr key={item.id} className="hover:bg-sky-50/40 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 text-[11px]">
                                {item.trackingCode}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">({item.id})</span>
                            </div>
                            <div className="font-bold text-slate-900 mt-1">{item.fullName}</div>
                            <div className="text-[11px] text-slate-500 font-mono">{item.email}</div>
                            {item.phone && item.phone !== 'Not Provided' && (
                              <div className="text-[10px] text-emerald-600 font-mono mt-0.5">{item.phone}</div>
                            )}
                          </td>

                          <td className="py-3.5 px-4">
                            <div className="font-bold text-slate-800">{item.domain}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5 max-w-xs truncate">
                              {item.scale} • {item.timeline}
                            </div>
                            <div className="text-[10px] font-semibold text-sky-600 mt-0.5">
                              Via: {item.source}
                            </div>
                          </td>

                          <td className="py-3.5 px-4">
                            <select
                              value={item.status}
                              onChange={(e) => handleStatusChange(item.id, e.target.value)}
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none cursor-pointer ${
                                item.status === 'New Application'
                                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                                  : item.status === 'In Progress'
                                  ? 'bg-sky-50 text-sky-900 border-sky-300'
                                  : item.status === 'Review QA'
                                  ? 'bg-purple-50 text-purple-900 border-purple-300'
                                  : item.status === 'Deployed & Handed Over'
                                  ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                                  : 'bg-slate-50 text-slate-700 border-slate-300'
                              }`}
                            >
                              {STATUS_OPTIONS.map((st) => (
                                <option key={st} value={st}>{st}</option>
                              ))}
                            </select>
                          </td>

                          <td className="py-3.5 px-4">
                            <select
                              value={item.paymentStatus}
                              onChange={(e) => handlePaymentChange(item.id, e.target.value)}
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none cursor-pointer ${
                                item.paymentStatus.includes('Verified') || item.paymentStatus.includes('Paid') || item.paymentStatus.includes('Settled')
                                  ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                                  : 'bg-amber-50 text-amber-900 border-amber-300'
                              }`}
                            >
                              {PAYMENT_STATUS_OPTIONS.map((pst) => (
                                <option key={pst} value={pst}>{pst}</option>
                              ))}
                            </select>
                          </td>

                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                type="button"
                                onClick={() => setSelectedProposal(item)}
                                title="View Full Details"
                                className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 transition-colors cursor-pointer"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>

                              <a
                                href={`https://wa.me/?text=Hello%20${encodeURIComponent(item.fullName)},%20Volen%20Solution%20Engineering%20Update%20regarding%20Tracking%20Code:%20${item.trackingCode}.%20Current%20Status:%20${encodeURIComponent(item.status)}.%20Payment%20Status:%20${encodeURIComponent(item.paymentStatus)}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Send WhatsApp Update to Client"
                                className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </a>

                              <button
                                type="button"
                                onClick={() => handleDelete(item.id)}
                                title="Delete Application"
                                className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detailed Inspection Drawer if an item is selected */}
            {selectedProposal && (
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-sky-500/30 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      ID: {selectedProposal.id} • Tracking: {selectedProposal.trackingCode}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold">
                      {selectedProposal.source}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProposal(null)}
                    className="text-slate-400 hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400">Client Name:</span>
                    <div className="font-bold text-slate-100 text-sm">{selectedProposal.fullName}</div>
                    <div className="font-mono text-slate-300 mt-0.5">{selectedProposal.email}</div>
                    <div className="font-mono text-emerald-400">{selectedProposal.phone}</div>
                  </div>

                  <div>
                    <span className="text-slate-400">Architecture Scope:</span>
                    <div className="font-bold text-slate-100">{selectedProposal.domain}</div>
                    <div className="text-slate-300">{selectedProposal.scale} • {selectedProposal.timeline}</div>
                    <div className="text-slate-400 mt-1">Submitted: {new Date(selectedProposal.submittedAt).toLocaleString()}</div>
                  </div>

                  <div>
                    <span className="text-slate-400">Milestone Governance:</span>
                    <div className="font-bold text-sky-300">Status: {selectedProposal.status}</div>
                    <div className="font-bold text-emerald-300">Payment: {selectedProposal.paymentStatus}</div>
                  </div>
                </div>

                {selectedProposal.details && (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-400 block mb-1 font-semibold uppercase text-[10px]">Client Scope Notes / Specifications:</span>
                    <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">{selectedProposal.details}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Volen Solution Internal Governance Portal • Confidential</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs cursor-pointer"
          >
            Close Control Tower
          </button>
        </div>
      </div>
    </div>
  );
}