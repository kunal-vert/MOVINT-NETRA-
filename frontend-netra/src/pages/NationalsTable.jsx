import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Fingerprint,
  Calendar,
  Globe,
  Briefcase,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { ScoreBadge } from '@/components/ScoreBadge';
import { NationalityFlag } from '@/components/NationalityFlag';

export function NationalsTable({ enriched, onSelect }) {
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('riskScore');
  const [sortDir, setSortDir] = useState('desc');
  const [hoverId, setHoverId] = useState(null);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('desc');
    }
  };

  const filtered = enriched
    .filter((p) => {
      const mf = filter === 'ALL' || p.riskLabel === filter;
      const q = search.toLowerCase();
      const ms =
        !q ||
        p.full_name.toLowerCase().includes(q) ||
        p.nationality.toLowerCase().includes(q) ||
        p.occupation.toLowerCase().includes(q) ||
        p.passport_id.toLowerCase().includes(q);
      return mf && ms;
    })
    .sort((a, b) => {
      let cmp = 0;

      if (sortField === 'riskScore') cmp = a.riskScore - b.riskScore;
      else if (sortField === 'prior_ne_visits') cmp = a.prior_ne_visits - b.prior_ne_visits;
      else if (sortField === 'passport_expiry') {
        cmp =
          new Date(a.passport_expiry).getTime() -
          new Date(b.passport_expiry).getTime();
      } else {
        cmp = String(a[sortField] || '').localeCompare(String(b[sortField] || ''));
      }

      return sortDir === 'asc' ? cmp : -cmp;
    });

  const SortIcon = ({ field }) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-3 h-3 text-muted-foreground/30" />;
    }

    return sortDir === 'asc' ? (
      <ArrowUp className="w-3 h-3 text-amber-500" />
    ) : (
      <ArrowDown className="w-3 h-3 text-amber-500" />
    );
  };

  const thClass =
    'px-4 py-3 text-left text-[9px] font-mono font-semibold text-muted-foreground/60 uppercase tracking-[0.15em] cursor-pointer select-none hover:text-muted-foreground transition-colors';
  const tdClass = 'px-4 py-3 border-b border-border/30';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 h-full flex flex-col"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex gap-2">
          {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg border font-mono text-[10px] tracking-wider font-bold transition-all ${
                filter === f
                  ? 'border-amber-500/40 bg-amber-500/10 text-amber-500'
                  : 'border-border/40 text-muted-foreground hover:text-foreground hover:border-border/60'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/40" />
          <input
            className="w-full bg-secondary/50 border border-border/60 rounded-lg pl-9 pr-4 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all"
            placeholder="Search name, nationality, occupation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="glass-panel rounded-xl flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto scrollbar-thin flex-1">
          <table className="w-full">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#0c0f13]/95 backdrop-blur-sm border-b border-border/60">
                <th className={thClass} onClick={() => handleSort('full_name')}>
                  <div className="flex items-center gap-1.5">
                    <Fingerprint className="w-3 h-3" />
                    Name
                    <SortIcon field="full_name" />
                  </div>
                </th>

                <th className={thClass} onClick={() => handleSort('nationality')}>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3 h-3" />
                    Nationality
                    <SortIcon field="nationality" />
                  </div>
                </th>

                <th className={thClass}>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3" />
                    Occupation
                  </div>
                </th>

                <th className={thClass}>Visa</th>

                <th className={thClass} onClick={() => handleSort('prior_ne_visits')}>
                  <div className="flex items-center gap-1.5">
                    NE Visits
                    <SortIcon field="prior_ne_visits" />
                  </div>
                </th>

                <th className={thClass}>Last Location</th>

                <th className={thClass} onClick={() => handleSort('riskScore')}>
                  <div className="flex items-center gap-1.5">
                    Risk Score
                    <SortIcon field="riskScore" />
                  </div>
                </th>

                <th className={thClass} onClick={() => handleSort('passport_expiry')}>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    Expiry
                    <SortIcon field="passport_expiry" />
                  </div>
                </th>

                <th className={`${thClass} cursor-default`}>Flags</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p, i) => (
                <motion.tr
                  key={p.passport_id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.5) }}
                  onMouseEnter={() => setHoverId(p.passport_id)}
                  onMouseLeave={() => setHoverId(null)}
                  onClick={() => onSelect(p)}
                  className={`cursor-pointer transition-colors ${
                    hoverId === p.passport_id ? 'bg-amber-500/5' : ''
                  }`}
                >
                  <td className={tdClass}>
                    <div className="flex items-center gap-3">
                      <NationalityFlag nationality={p.nationality} />
                      <div>
                        <div className="text-xs font-semibold text-foreground/90">
                          {p.full_name}
                        </div>
                        <div className="text-[10px] text-muted-foreground font-mono">
                          {p.passport_id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className={`${tdClass} text-xs text-muted-foreground`}>
                    {p.nationality}
                  </td>

                  <td className={`${tdClass} text-xs text-muted-foreground`}>
                    {p.occupation}
                  </td>

                  <td className={`${tdClass} text-[11px] text-muted-foreground/60 font-mono`}>
                    {p.visa_method?.replace(/_/g, ' ')}
                  </td>

                  <td className={`${tdClass} text-center`}>
                    <span
                      className={`text-xs font-mono font-bold ${
                        p.prior_ne_visits >= 3 ? 'text-orange-400' : 'text-muted-foreground'
                      }`}
                    >
                      {p.prior_ne_visits}
                    </span>
                  </td>

                  <td className={tdClass}>
                    {p.lastVisit ? (
                      <div>
                        <div className="text-xs text-foreground/70">{p.lastVisit.city}</div>
                        <div className="text-[10px] text-muted-foreground font-mono">
                          {p.lastVisit.entry_date}
                        </div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground/30">—</span>
                    )}
                  </td>

                  <td className={tdClass}>
                    <ScoreBadge
                      score={p.riskScore}
                      label={p.riskLabel}
                      color={p.riskColor}
                      bg={p.riskBg}
                      border={p.riskBorder}
                      size="sm"
                    />
                  </td>

                  <td className={tdClass}>
                    <ExpiryBadge date={p.passport_expiry} />
                  </td>

                  <td className={tdClass}>
                    <div className="flex gap-1 flex-wrap">
                      {p.criminal_record && (
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                          CR
                        </span>
                      )}
                      {p.overstay_flag && (
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          OS
                        </span>
                      )}
                      {new Date(p.passport_expiry) < new Date(Date.now() + 180 * 86400000) && (
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                          EX
                        </span>
                      )}
                      {p.prior_ne_visits === 0 && (
                        <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          NEW
                        </span>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground/40 font-mono text-sm">
            No records match the filter.
          </div>
        )}
      </div>

      <div className="mt-3 text-[10px] text-muted-foreground/40 font-mono text-right">
        Showing {filtered.length} of {enriched.length} · CR = Criminal Record · OS = Overstay · EX = Expiring · NEW = First-time
      </div>
    </motion.div>
  );
}

function ExpiryBadge({ date }) {
  const daysLeft = Math.floor((new Date(date).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const isExpired = daysLeft < 0;
  const isWarning = daysLeft < 180 && daysLeft >= 0;

  if (isExpired) {
    return (
      <span className="flex items-center gap-1 text-[10px] text-red-400 font-mono">
        <AlertTriangle className="w-3 h-3" />
        EXPIRED
      </span>
    );
  }

  if (isWarning) {
    return <span className="text-[10px] text-yellow-400 font-mono">{daysLeft}d left</span>;
  }

  return (
    <span className="flex items-center gap-1 text-[10px] text-emerald-400/60 font-mono">
      <ShieldCheck className="w-3 h-3" />
      Valid
    </span>
  );
}