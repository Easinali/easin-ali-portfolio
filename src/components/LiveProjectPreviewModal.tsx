import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../data/projectsData';
import { useLanguage } from '../hooks/useLanguage';
import { X, Play, RefreshCw, CheckCircle2, AlertTriangle, Layers, Download, BarChart2, Database, Truck, FileSpreadsheet } from 'lucide-react';

interface LiveProjectPreviewModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const LiveProjectPreviewModal: React.FC<LiveProjectPreviewModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  // State for Reconciliation Simulator
  const [reconOutlet, setReconOutlet] = useState('OUT-DH-01 (Gulshan)');
  const [posSales, setPosSales] = useState(320500);
  const [bankDeposit, setBankDeposit] = useState(320500);
  const [reconcileFeedback, setReconcileFeedback] = useState<string | null>(null);

  // State for Inventory Simulator
  const [invFilter, setInvFilter] = useState<'all' | 'active' | 'aging' | 'critical'>('all');

  // State for MIS Dashboard Slicers
  const [misRegion, setMisRegion] = useState<'all' | 'north' | 'south'>('all');
  const [misQuarter, setMisQuarter] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q3');

  // State for Logistics Simulator
  const [logisticsNode, setLogisticsNode] = useState<'north' | 'south'>('north');

  // State for Records Validation Simulator
  const [voucherInput, setVoucherInput] = useState('VCH-2026-884');
  const [voucherCategory, setVoucherCategory] = useState('Feed & Grain');
  const [validationStatus, setValidationStatus] = useState<'valid' | 'duplicate'>('valid');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = isBn ? project.titleBn : project.title;
  const badgeText = isBn ? project.badgeTextBn : project.badgeText;
  const variance = posSales - bankDeposit;

  const handleReconcileCheck = () => {
    if (variance === 0) {
      setReconcileFeedback(isBn ? 'যাচাই সম্পন্ন: ১০০% মেলবন্ধন (কোনো অমিল নেই)' : 'VERIFIED: 100% Match (0 Variance)');
    } else {
      setReconcileFeedback(isBn ? `অমিল চিহ্নিত: ৳ ${variance.toLocaleString()}` : `VARIANCE DETECTED: ৳ ${variance.toLocaleString()}`);
    }
    setTimeout(() => setReconcileFeedback(null), 3000);
  };

  const handleVoucherChange = (val: string) => {
    setVoucherInput(val);
    // Simulate duplicate detection for known code VCH-2026-001
    if (val.trim().toUpperCase() === 'VCH-2026-001') {
      setValidationStatus('duplicate');
    } else {
      setValidationStatus('valid');
    }
  };

  const downloadSampleData = () => {
    const csvContent = `data:text/csv;charset=utf-8,Project,Category,Status,Date\n"${title}","${project.categoryLabel}","${project.type}","${new Date().toISOString().split('T')[0]}"\nMetric,Value,Benchmark,Status\nOperational Accuracy,100%,100%,Verified\nTurnaround Lead Time,1.2 Days,2.5 Days,Optimized\n`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${project.id}_live_demo_model.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-navyBlue border border-electricBlue/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 md:p-6 border-b border-borderNavy/80 bg-darkNavy/80">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-electricBlue/20 text-highlightBlue border border-electricBlue/40">
                <Play className="w-3 h-3 fill-current" />
                {isBn ? 'ইন্টারেক্টিভ লাইভ মডেল প্রিভিউ' : 'Interactive Live Model Preview'}
              </span>
              <span className="text-xs text-secondaryText/70 font-medium">{badgeText}</span>
            </div>
            <h2 id="preview-modal-title" className="text-lg md:text-xl font-bold text-white tracking-tight">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-secondaryText hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-electricBlue"
            aria-label={t.projects.closeModal}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Interactive Canvas Body */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Transparency Callout Banner */}
          <div className="p-3.5 rounded-xl bg-darkNavy/70 border border-borderNavy flex items-start gap-2.5 text-xs text-secondaryText">
            <Layers className="w-4 h-4 text-highlightBlue shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {isBn
                ? 'এটি একটি স্যান্ডবক্সড ইন্টারেক্টিভ সিমুলেশন যা কর্মক্ষেত্রের আসল এক্সেল/ইআরপি ফর্মুলা ও ডেটা লজিকের কার্যপ্রণালী প্রদর্শন করে।'
                : 'This is a sandbox interactive simulation demonstrating the live spreadsheet mechanics, ERP logic, and mathematical formulas applied in this model.'}
            </p>
          </div>

          {/* SIMULATOR 1: Daily Sales & Deposit Reconciliation */}
          {project.livePreviewType === 'reconciliation' && (
            <div className="space-y-4 bg-darkNavy/90 p-5 rounded-2xl border border-borderNavy">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-borderNavy/80 pb-3">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-white">
                    {isBn ? 'দৈনিক সেলস রিকনসিলিয়েশন টার্মিনাল' : 'Daily Sales Reconciliation Matrix'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-secondaryText">Status:</span>
                  <span className={`px-2 py-0.5 rounded font-bold ${variance === 0 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'}`}>
                    {variance === 0 ? 'MATCHED / 0.00 VARIANCE' : `UNBALANCED (৳ ${variance.toLocaleString()})`}
                  </span>
                </div>
              </div>

              {/* Interactive Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-semibold text-secondaryText mb-1">
                    {isBn ? 'আউটলেট নির্বাচন:' : 'Select Retail Outlet:'}
                  </label>
                  <select
                    value={reconOutlet}
                    onChange={(e) => setReconOutlet(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-navyBlue border border-borderNavy text-xs text-white focus:outline-none focus:border-electricBlue"
                  >
                    <option value="OUT-DH-01 (Gulshan)">OUT-DH-01 (Gulshan)</option>
                    <option value="OUT-DH-02 (Uttara)">OUT-DH-02 (Uttara)</option>
                    <option value="OUT-DH-03 (Dhanmondi)">OUT-DH-03 (Dhanmondi)</option>
                    <option value="OUT-CTG-01 (Agrabad)">OUT-CTG-01 (Agrabad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-secondaryText mb-1">
                    {isBn ? 'পিওএস বিক্রয় হিসাব (POS Sales):' : 'POS Sales Total (৳):'}
                  </label>
                  <input
                    type="number"
                    value={posSales}
                    onChange={(e) => setPosSales(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-navyBlue border border-borderNavy text-xs text-white focus:outline-none focus:border-electricBlue font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-secondaryText mb-1">
                    {isBn ? 'ব্যাংক জমা ভাউচার (Bank Deposit):' : 'Bank Credit Advice (৳):'}
                  </label>
                  <input
                    type="number"
                    value={bankDeposit}
                    onChange={(e) => setBankDeposit(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-navyBlue border border-borderNavy text-xs text-white focus:outline-none focus:border-electricBlue font-mono"
                  />
                </div>
              </div>

              {/* Dynamic Calculation Output */}
              <div className="p-4 rounded-xl bg-navyBlue/80 border border-borderNavy flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <p className="text-secondaryText font-medium">
                    {isBn ? 'ফর্মুলা লজিক:' : 'Underlying Excel Formula:'}
                  </p>
                  <code className="text-highlightBlue font-mono text-[11px]">
                    =IF(ROUND(POS_Total - Bank_Credit, 2)=0, "VERIFIED", "VARIANCE_FLAG")
                  </code>
                </div>

                <div className="flex items-center gap-2">
                  {reconcileFeedback && (
                    <span className="text-[11px] font-semibold text-highlightBlue bg-electricBlue/20 px-2.5 py-1 rounded-md border border-electricBlue/30 animate-in fade-in">
                      {reconcileFeedback}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handleReconcileCheck}
                    className="px-4 py-2 rounded-lg bg-electricBlue hover:bg-blue-600 text-white font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{isBn ? 'পুনঃনিরীক্ষণ করুন' : 'Recalculate Batch'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATOR 2: Inventory Tracking & Stock Movement */}
          {project.livePreviewType === 'inventory' && (
            <div className="space-y-4 bg-darkNavy/90 p-5 rounded-2xl border border-borderNavy">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-borderNavy/80 pb-3">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-bold text-white">
                    {isBn ? 'ইনভেন্টরি এজিং ও মুভমেন্ট ড্যাশবোর্ড' : 'Live Inventory Movement & Aging Matrix'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setInvFilter('all')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${invFilter === 'all' ? 'bg-electricBlue text-white' : 'bg-navyBlue text-secondaryText border border-borderNavy'}`}
                  >
                    All SKUs
                  </button>
                  <button
                    type="button"
                    onClick={() => setInvFilter('active')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${invFilter === 'active' ? 'bg-electricBlue text-white' : 'bg-navyBlue text-secondaryText border border-borderNavy'}`}
                  >
                    0-30 Days
                  </button>
                  <button
                    type="button"
                    onClick={() => setInvFilter('critical')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${invFilter === 'critical' ? 'bg-amber-600 text-white' : 'bg-navyBlue text-secondaryText border border-borderNavy'}`}
                  >
                    Reorder Alert
                  </button>
                </div>
              </div>

              {/* Inventory Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Total SKUs Active</span>
                  <p className="text-base font-bold text-white mt-1">1,248 Units</p>
                </div>
                <div className="p-3 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Inventory Valuation</span>
                  <p className="text-base font-bold text-highlightBlue mt-1">৳ 24.8 Million</p>
                </div>
                <div className="p-3 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Safety Stock Threshold</span>
                  <p className="text-base font-bold text-emerald-400 mt-1">Safe (98.2%)</p>
                </div>
                <div className="p-3 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Dead Stock Ratio</span>
                  <p className="text-base font-bold text-amber-400 mt-1">&lt; 1.8% (Controlled)</p>
                </div>
              </div>

              {/* Interactive Item Row Preview */}
              <div className="rounded-xl border border-borderNavy overflow-hidden bg-navyBlue/60 text-xs">
                <div className="p-2.5 bg-darkNavy font-semibold text-slate-300 grid grid-cols-4">
                  <span>SKU Code</span>
                  <span>Batch Exp.</span>
                  <span>Quantity</span>
                  <span className="text-right">Action Trigger</span>
                </div>
                <div className="p-2.5 border-t border-borderNavy/60 grid grid-cols-4 items-center">
                  <span className="font-mono text-white">SKU-FEED-902</span>
                  <span className="text-slate-400">45 Days Shelf</span>
                  <span className="text-highlightBlue font-semibold">1,400 Bags</span>
                  <span className="text-right text-emerald-400 font-semibold">Normal FIFO</span>
                </div>
                <div className="p-2.5 border-t border-borderNavy/60 grid grid-cols-4 items-center bg-amber-950/20">
                  <span className="font-mono text-white">SKU-CHILLED-104</span>
                  <span className="text-amber-400">12 Days Shelf</span>
                  <span className="text-amber-300 font-semibold">320 Crates</span>
                  <span className="text-right text-amber-400 font-semibold">Priority Dispatch</span>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATOR 3: Excel-based Executive MIS Dashboard */}
          {project.livePreviewType === 'dashboard' && (
            <div className="space-y-4 bg-darkNavy/90 p-5 rounded-2xl border border-borderNavy">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-borderNavy/80 pb-3">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-highlightBlue" />
                  <span className="text-sm font-bold text-white">
                    {isBn ? 'এক্সিকিউটিভ এমআইএস স্লাইসার ককপিট' : 'Executive MIS Dynamic Slicer Cockpit'}
                  </span>
                </div>

                {/* Slicers */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-secondaryText font-medium">Region:</span>
                  <div className="flex gap-1">
                    {(['all', 'north', 'south'] as const).map((reg) => (
                      <button
                        key={reg}
                        type="button"
                        onClick={() => setMisRegion(reg)}
                        className={`px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${misRegion === reg ? 'bg-electricBlue text-white' : 'bg-navyBlue text-secondaryText border border-borderNavy'}`}
                      >
                        {reg}
                      </button>
                    ))}
                  </div>

                  <span className="text-secondaryText font-medium ml-2">Quarter:</span>
                  <div className="flex gap-1">
                    {(['Q1', 'Q2', 'Q3', 'Q4'] as const).map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setMisQuarter(q)}
                        className={`px-2 py-0.5 rounded text-[11px] font-semibold ${misQuarter === q ? 'bg-highlightBlue text-darkNavy' : 'bg-navyBlue text-secondaryText border border-borderNavy'}`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Sliced Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Current MTD Revenue</span>
                  <p className="text-lg font-bold text-white mt-1">
                    {misRegion === 'north' ? '৳ 22.4M' : misRegion === 'south' ? '৳ 26.25M' : '৳ 48.65 Million'}
                  </p>
                  <span className="text-[10px] text-emerald-400 font-semibold">+8.4% vs Budget</span>
                </div>

                <div className="p-3.5 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Operational Efficiency</span>
                  <p className="text-lg font-bold text-highlightBlue mt-1">
                    {misQuarter === 'Q4' ? '98.1%' : '96.4%'}
                  </p>
                  <span className="text-[10px] text-secondaryText/70">Calculated via Dynamic Array</span>
                </div>

                <div className="p-3.5 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Reporting Turnaround</span>
                  <p className="text-lg font-bold text-emerald-400 mt-1">-65% Faster</p>
                  <span className="text-[10px] text-secondaryText/70">Single-click Pivot Refresh</span>
                </div>
              </div>

              {/* Simulated Chart Bars */}
              <div className="p-4 rounded-xl bg-navyBlue/70 border border-borderNavy space-y-2.5 text-xs">
                <div className="flex justify-between text-secondaryText text-[11px]">
                  <span>Outlet Target vs Actual Achievement</span>
                  <span className="text-highlightBlue font-semibold">Live Filter: {misRegion.toUpperCase()} ({misQuarter})</span>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Retail Commercial Division</span>
                    <span className="font-bold text-white">96%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-darkNavy overflow-hidden">
                    <div className="h-full bg-electricBlue rounded-full" style={{ width: '96%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Depot Distribution Bulk Sales</span>
                    <span className="font-bold text-white">92%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-darkNavy overflow-hidden">
                    <div className="h-full bg-highlightBlue rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATOR 4: Supply Chain Logistics Optimizer */}
          {project.livePreviewType === 'logistics' && (
            <div className="space-y-4 bg-darkNavy/90 p-5 rounded-2xl border border-borderNavy">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-borderNavy/80 pb-3">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-white">
                    {isBn ? 'লজিস্টিকস নেটওয়ার্ক ও লিড টাইম সিমুলেটর' : 'Supply Chain Pipeline & Route Lead Time Simulator'}
                  </span>
                </div>
                <div className="flex gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setLogisticsNode('north')}
                    className={`px-3 py-1 rounded-lg font-semibold ${logisticsNode === 'north' ? 'bg-electricBlue text-white' : 'bg-navyBlue text-secondaryText border border-borderNavy'}`}
                  >
                    North Corridor
                  </button>
                  <button
                    type="button"
                    onClick={() => setLogisticsNode('south')}
                    className={`px-3 py-1 rounded-lg font-semibold ${logisticsNode === 'south' ? 'bg-electricBlue text-white' : 'bg-navyBlue text-secondaryText border border-borderNavy'}`}
                  >
                    South Corridor
                  </button>
                </div>
              </div>

              {/* Route Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Average Order Lead Time</span>
                  <p className="text-lg font-bold text-white mt-1">
                    {logisticsNode === 'north' ? '1.2 Days' : '1.8 Days'}
                  </p>
                  <span className="text-[10px] text-emerald-400 font-semibold">-18% Improvement</span>
                </div>

                <div className="p-3.5 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">On-Time In-Full (OTIF)</span>
                  <p className="text-lg font-bold text-emerald-400 mt-1">97.8%</p>
                  <span className="text-[10px] text-secondaryText/70">Target Benchmark Met</span>
                </div>

                <div className="p-3.5 rounded-xl bg-navyBlue border border-borderNavy">
                  <span className="text-secondaryText text-[10px] uppercase font-bold">Fleet Capacity Loading</span>
                  <p className="text-lg font-bold text-highlightBlue mt-1">
                    {logisticsNode === 'north' ? '89.2%' : '86.5%'}
                  </p>
                  <span className="text-[10px] text-secondaryText/70">Linear Optimization</span>
                </div>
              </div>

              {/* Transit Node Visualization */}
              <div className="p-4 rounded-xl bg-navyBlue/70 border border-borderNavy flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">Central Hub: Paragon Central Depot</span>
                </div>
                <span className="text-highlightBlue font-mono font-bold">➔ Transit Leg: {logisticsNode === 'north' ? 'Dhaka - Bogra - Rangpur' : 'Dhaka - Cumilla - Chattogram'}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">FIFO Dispatched</span>
              </div>
            </div>
          )}

          {/* SIMULATOR 5: Automated Operational Records System */}
          {project.livePreviewType === 'records' && (
            <div className="space-y-4 bg-darkNavy/90 p-5 rounded-2xl border border-borderNavy">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-borderNavy/80 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-highlightBlue" />
                  <span className="text-sm font-bold text-white">
                    {isBn ? 'ডাটা ভ্যালিডেশন ও ডুপ্লিকেট ট্র্যাপিং টার্মিনাল' : 'Automated Data Validation & Duplicate Trapping Terminal'}
                  </span>
                </div>
                <div className="text-xs">
                  <span className={`px-2 py-0.5 rounded font-bold ${validationStatus === 'valid' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'}`}>
                    {validationStatus === 'valid' ? '✓ DATA INTEGRITY VERIFIED' : '⚠ DUPLICATE VOUCHER DETECTED'}
                  </span>
                </div>
              </div>

              {/* Interactive Input Gate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-semibold text-secondaryText mb-1">
                    {isBn ? 'ইনভয়েস বা ভাউচার আইডি টাইপ করুন:' : 'Test Voucher ID Input (Type VCH-2026-001 to test duplicate trap):'}
                  </label>
                  <input
                    type="text"
                    value={voucherInput}
                    onChange={(e) => handleVoucherChange(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-navyBlue border border-borderNavy text-xs text-white focus:outline-none focus:border-electricBlue font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-secondaryText mb-1">
                    {isBn ? 'ড্রপডাউন ভ্যালিডেশন তালিকা:' : 'Strict Dropdown List (Restricted):'}
                  </label>
                  <select
                    value={voucherCategory}
                    onChange={(e) => setVoucherCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-navyBlue border border-borderNavy text-xs text-white focus:outline-none focus:border-electricBlue"
                  >
                    <option value="Feed & Grain">Feed & Grain</option>
                    <option value="Poultry Products">Poultry Products</option>
                    <option value="Cold Chain Supplies">Cold Chain Supplies</option>
                    <option value="Packaging Materials">Packaging Materials</option>
                  </select>
                </div>
              </div>

              {/* Real-time Validation Feedback Box */}
              <div className={`p-3.5 rounded-xl border flex items-start gap-2.5 text-xs ${validationStatus === 'valid' ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200' : 'bg-red-950/30 border-red-500/40 text-red-200'}`}>
                {validationStatus === 'valid' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold">
                    {validationStatus === 'valid'
                      ? (isBn ? 'ভাউচার অনুমোদিত! ডাটা এন্ট্রি ১০০% নির্ভুল ও অনুমোদিত তালিকায় বিদ্যমান।' : 'Validation Passed: Unique voucher key and valid restricted category.')
                      : (isBn ? 'সতর্কতা: এই ভাউচার কোডটি ইতিমধ্যে ডাটাবেজে রেকর্ড করা আছে! স্বয়ংক্রিয়ভাবে সেভ ব্লক করা হয়েছে।' : 'Validation Error: Voucher ID already exists in master transaction registry. Duplicate write blocked.')}
                  </p>
                  <p className="text-[11px] opacity-80 mt-0.5">
                    Formula Gate: <code className="font-mono text-highlightBlue">=COUNTIF(Voucher_Table[ID], [@ID])&lt;=1</code>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 md:p-5 border-t border-borderNavy/80 bg-darkNavy/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-secondaryText/70 italic text-center sm:text-left">
            {isBn ? project.details.downloadableNoteBn : project.details.downloadableNote}
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={downloadSampleData}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-electricBlue hover:bg-blue-600 text-white text-xs font-semibold shadow-glow transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.projects.modal.downloadMockup}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-borderNavy hover:bg-slate-800 text-secondaryText hover:text-white text-xs font-medium transition-colors"
            >
              {t.projects.closeModal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
