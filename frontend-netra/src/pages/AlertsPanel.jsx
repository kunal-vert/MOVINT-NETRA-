import { motion } from 'framer-motion';
import {
  ShieldAlert,
  AlertTriangle,
  MapPin,
  Clock,
  Fingerprint,
  Briefcase,
  Globe,
  ArrowRight,
  Siren,
  Radiation,
} from 'lucide-react';

import { ScoreBadge } from '@/components/ScoreBadge';

export function AlertsPanel({ enriched, onSelect }) {
  const alerts = enriched
    .filter((p) => p.riskScore >= 45)
    .sort((a, b) => b.riskScore - a.riskScore);

  const critical = enriched.filter((p) => p.riskLabel === 'CRITICAL').length;
  const high = enriched.filter((p) => p.riskLabel === 'HIGH').length;

  const byMethod = [
    {
      method: 'border_permit',
      label: 'Border Permit',
      color: '#EF4444',
      icon: Radiation,
    },
    {
      method: 'embassy',
      label: 'Embassy Visa',
      color: '#F97316',
      icon: ShieldAlert,
    },
    {
      method: 'e_visa',
      label: 'e-Visa',
      color: '#EAB308',
      icon: Fingerprint,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="p-6 h-full overflow-y-auto scrollbar-thin"
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <motion.div
          variants={itemAnim}
          whileHover={{ y: -2 }}
          className="glass-panel rounded-xl p-5 glow-red"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <Siren className="w-5 h-5 text-red-400" />
            </div>

            <div>
              <div className="text-2xl font-bold text-red-400">
                {critical}
              </div>

              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                Critical Priority
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemAnim}
          whileHover={{ y: -2 }}
          className="glass-panel rounded-xl p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
            </div>

            <div>
              <div className="text-2xl font-bold text-orange-400">
                {high}
              </div>

              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                High Priority
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemAnim}
          whileHover={{ y: -2 }}
          className="glass-panel rounded-xl p-5 col-span-2"
        >
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono font-semibold mb-3">
            Alerts by Entry Method
          </div>

          <div className="flex gap-6">
            {byMethod.map(({ method, label, color, icon: Icon }) => {
              const cnt = alerts.filter(
                (p) => p.visa_method === method
              ).length;

              return cnt > 0 ? (
                <div key={method} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>

                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ color }}
                    >
                      {cnt}
                    </div>

                    <div className="text-[9px] text-muted-foreground font-mono">
                      {label}
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </motion.div>
      </div>

      {/* Alert Cards */}
      <div className="space-y-3">
        <motion.div
          variants={itemAnim}
          className="flex items-center justify-between mb-2"
        >
          <h3 className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-mono font-semibold flex items-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            Flagged Individuals — Action Required
          </h3>

          <span className="text-[10px] text-red-400 font-mono font-bold">
            {alerts.length} TOTAL
          </span>
        </motion.div>

        {alerts.map((p, i) => (
          <motion.div
            key={p.passport_id}
            variants={itemAnim}
            whileHover={{ scale: 1.005, x: 4 }}
            onClick={() => onSelect(p)}
            className="glass-panel rounded-xl p-5 cursor-pointer transition-all hover:border-amber-500/20 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                {/* Rank Badge */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold font-mono flex-shrink-0"
                  style={{
                    background: p.riskBg,
                    color: p.riskColor,
                    border: `1px solid ${p.riskBorder}`,
                  }}
                >
                  {i + 1}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-foreground/90 group-hover:text-amber-500 transition-colors">
                      {p.full_name}
                    </span>

                    <span className="text-muted-foreground/30">·</span>

                    <span className="text-[11px] text-muted-foreground">
                      {p.nationality}
                    </span>

                    {p.criminal_record && (
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                        CRIMINAL RECORD
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-[11px] text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {p.occupation}
                    </span>

                    <span className="flex items-center gap-1">
                      <Fingerprint className="w-3 h-3" />
                      {p.visa_method?.replace(/_/g, ' ')}
                    </span>

                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {p.prior_ne_visits} NE visits
                    </span>
                  </div>

                  {/* Risk Reasons */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.riskReasons.map((r, j) => (
                      <span
                        key={j}
                        className="text-[10px] px-2 py-0.5 rounded bg-orange-500/5 border border-orange-500/15 text-orange-400/80"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  {/* Last Visit */}
                  {p.lastVisit && (
                    <div className="flex items-center gap-4 mt-2.5 text-[10px] text-muted-foreground/50">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {p.lastVisit.city} ({p.lastVisit.area})
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {p.lastVisit.entry_date}
                      </span>

                      <span>
                        via {p.lastVisit.entry_point}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Score & Arrow */}
              <div className="flex flex-col items-end gap-3 flex-shrink-0">
                <ScoreBadge
                  score={p.riskScore}
                  label={p.riskLabel}
                  color={p.riskColor}
                  bg={p.riskBg}
                  border={p.riskBorder}
                />

                <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-amber-500/60 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}