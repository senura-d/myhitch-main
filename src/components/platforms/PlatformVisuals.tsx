"use client";

import { motion } from "framer-motion";
import { 
  ShoppingBag, Star, Calendar, Navigation, 
  Truck, ArrowRight, Shield, Award, Users, Heart 
} from "lucide-react";

/* ----------------------------------------------------
   1. MART VISUAL
   ---------------------------------------------------- */
export function MartVisual({ isLight = false }: { isLight?: boolean }) {
  const products = [
    { name: "Premium Leather Pack", price: "$189", tag: "Apparel", desc: "Handcrafted locally" },
    { name: "Sora Chrono Watch", price: "$349", tag: "Wearables", desc: "Smart integration" },
  ];

  return (
    <div className={`p-6 flex flex-col justify-between h-[340px] w-full max-w-[460px] overflow-hidden group select-none rounded-3xl ${
      isLight ? "bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md" : "glass glass-sheen"
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-black/10" : "border-slate-500/10"}`}>
        <span className={`flex items-center gap-2 text-xs font-semibold ${isLight ? "text-black" : "text-[#97CADB]"}`}>
          <ShoppingBag size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
          BORDERLESS COMMERCE
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${isLight ? "bg-black/10 text-black border border-black/10" : "bg-[#02457A] text-white"}`}>84 Active Sellers</span>
      </div>

      <div className="grid grid-cols-2 gap-4 my-auto">
        {products.map((p, i) => (
          <motion.div 
            key={p.name}
            className={`p-4 flex flex-col justify-between h-[180px] rounded-2xl transition-all duration-300 border ${
              isLight ? "bg-white/40 border-black/5 hover:border-black/20" : "glass-soft hover:border-[#97CADB]/40"
            }`}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div>
              <span className={`text-[9px] font-semibold uppercase tracking-wider ${isLight ? "text-slate-600" : "text-[#97CADB]"}`}>{p.tag}</span>
              <h4 className={`text-xs font-semibold mt-1 line-clamp-1 ${isLight ? "text-black" : "text-white"}`}>{p.name}</h4>
              <p className={`text-[10px] mt-0.5 line-clamp-2 ${isLight ? "text-slate-600" : "text-slate-400"}`}>{p.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className={`text-xs font-bold ${isLight ? "text-black" : "text-[#D6E8EE]"}`}>{p.price}</span>
              <span className={`text-[9px] border px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                isLight ? "text-black border-black/20 hover:bg-black/5" : "text-[#97CADB] border-[#018ABE]/30 hover:bg-[#018ABE]/20"
              }`}>
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`text-[11px] text-center flex items-center justify-center gap-1.5 pt-2 border-t ${isLight ? "text-slate-700 border-black/10" : "text-slate-400 border-slate-500/10"}`}>
        <span>Instant Checkout powered by secure AUD wallet</span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   2. JETNREST VISUAL
   ---------------------------------------------------- */
export function JetNRestVisual({ isLight = false }: { isLight?: boolean }) {
  return (
    <div className={`p-6 flex flex-col justify-between h-[340px] w-full max-w-[460px] overflow-hidden group select-none rounded-3xl ${
      isLight ? "bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md" : "glass glass-sheen"
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-black/10" : "border-slate-500/10"}`}>
        <span className={`text-xs font-semibold flex items-center gap-2 ${isLight ? "text-black" : "text-[#97CADB]"}`}>
          <Navigation size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
          TRAVEL WALLET
        </span>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 ${
          isLight ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : "text-emerald-400 bg-emerald-950/40 border border-emerald-500/20"
        }`}>
          <span className={`h-1.5 w-1.5 rounded-full animate-ping ${isLight ? "bg-emerald-600" : "bg-emerald-400"}`} />
          Connected
        </span>
      </div>

      <div className="my-auto space-y-4">
        {/* Ticket Mockup */}
        <div className={`border rounded-2xl p-4 relative overflow-hidden ${isLight ? "bg-white/40 border-black/5" : "bg-[#02457A]/40 border-slate-500/10"}`}>
          <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
          <div className={`flex justify-between items-center text-xs ${isLight ? "text-slate-700" : "text-[#97CADB]"}`}>
            <span>BOARDING PASS</span>
            <span>FLIGHT MH-284</span>
          </div>
          
          <div className="flex justify-between items-center mt-3">
            <div>
              <p className={`text-xl font-bold tracking-tight ${isLight ? "text-black" : "text-white"}`}>ADL</p>
              <p className={`text-[9px] ${isLight ? "text-slate-600" : "text-slate-400"}`}>Adelaide, AU</p>
            </div>
            
            {/* Dotted flying line */}
            <div className="flex-1 flex flex-col items-center px-4 relative">
              <span className={`text-[8px] mb-1 ${isLight ? "text-slate-600" : "text-[#97CADB]"}`}>1h 45m</span>
              <div className={`w-full border-t border-dashed relative ${isLight ? "border-black/30" : "border-[#018ABE]/40"}`}>
                <motion.div 
                  className={`absolute top-1/2 left-0 -translate-y-1/2 -mt-0.5 h-1.5 w-1.5 rounded-full shadow-sm ${isLight ? "bg-black" : "bg-[#D6E8EE] shadow-[#D6E8EE]"}`}
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                />
              </div>
            </div>

            <div className="text-right">
              <p className={`text-xl font-bold tracking-tight ${isLight ? "text-black" : "text-white"}`}>SYD</p>
              <p className={`text-[9px] ${isLight ? "text-slate-600" : "text-slate-400"}`}>Sydney, AU</p>
            </div>
          </div>

          <div className={`grid grid-cols-3 gap-2 mt-4 pt-3 border-t text-[9px] ${isLight ? "border-black/10 text-slate-700" : "border-slate-500/10 text-[#97CADB]"}`}>
            <div>
              <p className={isLight ? "text-slate-600" : "text-slate-400"}>GATE</p>
              <p className={`font-bold ${isLight ? "text-black" : "text-white"}`}>B12</p>
            </div>
            <div>
              <p className={isLight ? "text-slate-600" : "text-slate-400"}>SEAT</p>
              <p className={`font-bold ${isLight ? "text-black" : "text-white"}`}>09F</p>
            </div>
            <div>
              <p className={isLight ? "text-slate-600" : "text-slate-400"}>CLASS</p>
              <p className={`font-bold ${isLight ? "text-black" : "text-[#D6E8EE]"}`}>FIRST</p>
            </div>
          </div>
        </div>

        {/* Small Wallet Indicator */}
        <div className={`flex justify-between items-center rounded-xl px-4 py-2.5 border ${
          isLight ? "bg-white/40 border-black/5" : "bg-[#001B48]/50 border-slate-500/10"
        }`}>
          <span className={`text-[11px] ${isLight ? "text-slate-600" : "text-slate-400"}`}>One-click Book Balance</span>
          <span className={`text-xs font-bold ${isLight ? "text-black" : "text-[#D6E8EE]"}`}>$1,420.50 AUD</span>
        </div>
      </div>

      <div className={`text-[10px] text-center ${isLight ? "text-slate-700" : "text-slate-400"}`}>
        Seamlessly book stays &amp; tickets without entering card details.
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   3. PASS VISUAL
   ---------------------------------------------------- */
export function PassVisual({ isLight = false }: { isLight?: boolean }) {
  return (
    <div className={`p-6 flex flex-col justify-between h-[340px] w-full max-w-[460px] overflow-hidden group select-none rounded-3xl ${
      isLight ? "bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md" : "glass glass-sheen"
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-black/10" : "border-slate-500/10"}`}>
        <span className={`text-xs font-semibold flex items-center gap-2 ${isLight ? "text-black" : "text-[#97CADB]"}`}>
          <Calendar size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
          SECURE TICKETING
        </span>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold ${
          isLight ? "bg-emerald-50 border border-emerald-200 text-emerald-700" : "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
        }`}>
          <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${isLight ? "bg-emerald-600" : "bg-emerald-400"}`} />
          Live Platform
        </span>
      </div>

      <div className="my-auto flex items-center justify-center">
        {/* Holographic glowing Ticket */}
        <motion.div 
          className={`relative w-[280px] h-[160px] rounded-2xl p-4 border overflow-hidden shadow-2xl flex flex-col justify-between ${
            isLight ? "bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-200 border-black/10" : "bg-gradient-to-tr from-[#02457A] via-[#001B48] to-[#018ABE] border-[#97CADB]/25"
          }`}
          whileHover={{ rotateY: 10, rotateX: -5, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Holographic light reflect overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-[10px] tracking-wider font-bold ${isLight ? "text-slate-600" : "text-[#97CADB]"}`}>MYHITCH PASS</p>
              <h3 className={`text-sm font-semibold mt-1 leading-tight ${isLight ? "text-black" : "text-white"}`}>Adelaide Festival Center</h3>
            </div>
            <div className={`h-7 w-7 rounded-lg flex items-center justify-center border ${isLight ? "bg-black/5 border-black/5" : "bg-white/5 border-white/10"}`}>
              <Shield size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className={`text-[9px] ${isLight ? "text-slate-600" : "text-[#97CADB]"}`}>VIP ACCESS TICKET</p>
              <p className={`text-xs font-bold mt-0.5 ${isLight ? "text-black" : "text-white"}`}>ROW A • SEAT 04</p>
            </div>
            
            {/* Animated fake Barcode */}
            <div className="flex flex-col items-center">
              <div className="flex gap-[1.5px] h-9 items-end opacity-85">
                {[1, 3, 2, 4, 1, 3, 1, 2, 4, 2, 3, 1, 2, 4, 1, 3, 2].map((w, idx) => (
                  <div 
                    key={idx} 
                    style={{ width: `${w}px` }} 
                    className={`h-full ${isLight ? "bg-black/85" : "bg-white/90"}`} 
                  />
                ))}
              </div>
              <span className={`text-[7px] mt-1 font-mono tracking-widest ${isLight ? "text-slate-600" : "text-[#97CADB]"}`}>#0488921-VIP</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={`text-[10px] text-center flex items-center justify-center gap-1.5 pt-2 border-t ${isLight ? "text-slate-700 border-black/10" : "text-slate-400 border-slate-500/10"}`}>
        <span>Resale and transfer protected by ecosystem blockchain</span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   4. CONNECT VISUAL
   ---------------------------------------------------- */
export function ConnectVisual({ isLight = false }: { isLight?: boolean }) {
  const providers = [
    { name: "John K.", type: "Certified Electrician", rating: "4.9 (42 reviews)", status: "Active" },
    { name: "Sarah L.", type: "Mobile Mechanic", rating: "5.0 (18 reviews)", status: "Active" },
  ];

  return (
    <div className={`p-6 flex flex-col justify-between h-[340px] w-full max-w-[460px] overflow-hidden group select-none rounded-3xl ${
      isLight ? "bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md" : "glass glass-sheen"
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-black/10" : "border-slate-500/10"}`}>
        <span className={`text-xs font-semibold flex items-center gap-2 ${isLight ? "text-black" : "text-[#97CADB]"}`}>
          <Users size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
          VERIFIED SERVICES
        </span>
        <span className={`text-[10px] border px-2 py-0.5 rounded font-semibold ${
          isLight ? "bg-black/10 text-black border-black/10" : "bg-[#018ABE]/20 text-[#D6E8EE] border-[#018ABE]/30"
        }`}>Adelaide Metro</span>
      </div>

      <div className="my-auto space-y-3">
        {providers.map((p, idx) => (
          <div 
            key={p.name}
            className={`border rounded-xl p-3.5 flex justify-between items-center transition-all duration-300 ${
              isLight ? "bg-white/40 border-black/5 hover:border-black/20" : "bg-[#02457A]/20 border border-slate-500/10 hover:border-[#97CADB]/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-white text-xs border shadow-sm ${
                isLight ? "bg-gradient-to-br from-slate-700 to-slate-900 border-black/10" : "bg-gradient-to-br from-[#018ABE] to-[#02457A] border-white/10"
              }`}>
                {p.name.charAt(0)}
              </div>
              <div>
                <h4 className={`text-xs font-semibold ${isLight ? "text-black" : "text-white"}`}>{p.name}</h4>
                <p className={`text-[10px] ${isLight ? "text-slate-700" : "text-[#97CADB]"}`}>{p.type}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star size={10} className={`fill-current ${isLight ? "text-black" : "text-[#D6E8EE]"}`} />
                  <span className={`text-[9px] font-semibold ${isLight ? "text-slate-700" : "text-slate-400"}`}>{p.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <span className={`inline-block text-[9px] border px-2 py-0.5 rounded-full font-semibold ${
                isLight ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-emerald-950/40 border border-emerald-500/20 text-emerald-400"
              }`}>
                Available
              </span>
              <button className={`block text-[9px] mt-2 px-2.5 py-1 rounded transition-colors font-semibold cursor-pointer ${
                isLight ? "text-black border border-black/20 hover:bg-black/5" : "text-[#D6E8EE] border border-[#97CADB]/20 hover:bg-[#D6E8EE] hover:text-[#001B48]"
              }`}>
                Book
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={`text-[10px] text-center ${isLight ? "text-slate-700" : "text-slate-400"}`}>
        Hitch trusted providers with transparent escrow agreements.
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   5. TRANSIT VISUAL
   ---------------------------------------------------- */
export function TransitVisual({ isLight = false }: { isLight?: boolean }) {
  return (
    <div className={`p-6 flex flex-col justify-between h-[340px] w-full max-w-[460px] overflow-hidden group select-none rounded-3xl ${
      isLight ? "bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md" : "glass glass-sheen"
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-black/10" : "border-slate-500/10"}`}>
        <span className={`text-xs font-semibold flex items-center gap-2 ${isLight ? "text-black" : "text-[#97CADB]"}`}>
          <Truck size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
          REAL-TIME TRACKING
        </span>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${isLight ? "bg-black/10 text-black border border-black/10" : "bg-[#02457A] text-white"}`}>GPS Dispatch Active</span>
      </div>

      {/* Map visual and shipment status */}
      <div className="my-auto grid grid-cols-12 gap-3 items-center">
        {/* SVG Route Graphic */}
        <div className={`col-span-7 border rounded-xl p-3 h-[180px] relative overflow-hidden flex items-center justify-center ${
          isLight ? "bg-white/40 border-black/5" : "bg-[#001B48]/60 border-slate-500/10"
        }`}>
          <svg className="w-full h-full opacity-60" viewBox="0 0 100 100" fill="none">
            {/* Paths */}
            <path d="M10,80 Q40,30 80,20" stroke={isLight ? "#94a3b8" : "#02457A"} strokeWidth="2" strokeLinecap="round" />
            <path d="M10,80 Q40,30 80,20" stroke={isLight ? "#475569" : "#018ABE"} strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
            
            {/* Animated vehicle node */}
            <motion.circle 
              r="4" 
              fill={isLight ? "#000000" : "#D6E8EE"} 
              stroke={isLight ? "#ffffff" : "#001B48"} 
              strokeWidth="1"
              animate={{
                cx: [10, 41, 80],
                cy: [80, 31, 20],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            />

            {/* Stop points */}
            <circle cx="10" cy="80" r="3" fill={isLight ? "#475569" : "#018ABE"} />
            <circle cx="80" cy="20" r="3" fill={isLight ? "#000000" : "#97CADB"} />
          </svg>
          <div className={`absolute top-2 left-2 text-[8px] px-1.5 py-0.5 rounded border ${
            isLight ? "bg-white/80 text-black border-black/10" : "bg-[#001B48]/90 text-[#97CADB] border-[#018ABE]/20"
          }`}>
            Route SA-VIC
          </div>
        </div>

        {/* Status widget */}
        <div className="col-span-5 space-y-2">
          <div className={`p-3 text-[10px] rounded-xl border ${isLight ? "bg-white/40 border-black/5" : "glass-soft"}`}>
            <p className={`font-semibold ${isLight ? "text-slate-600" : "text-slate-400"}`}>SHIPMENT</p>
            <p className={`font-bold mt-0.5 ${isLight ? "text-black" : "text-white"}`}>#TR-88402</p>
          </div>
          <div className={`p-3 text-[10px] rounded-xl border ${isLight ? "bg-white/40 border-black/5" : "glass-soft"}`}>
            <p className={`font-semibold ${isLight ? "text-slate-600" : "text-slate-400"}`}>STATUS</p>
            <p className={`font-bold mt-0.5 ${isLight ? "text-emerald-700" : "text-[#D6E8EE]"}`}>En Route</p>
            <p className={`text-[8px] mt-0.5 ${isLight ? "text-slate-600" : "text-[#97CADB]"}`}>ETA: 2.5 hrs</p>
          </div>
        </div>
      </div>

      <div className={`text-[10px] text-center border-t pt-2 ${isLight ? "text-slate-700 border-black/10" : "text-slate-400 border-slate-500/10"}`}>
        Intelligent logistics tracking from loading dock to doorstep.
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   6. LENS VISUAL
   ---------------------------------------------------- */
export function LensVisual({ isLight = false }: { isLight?: boolean }) {
  const articles = [
    { title: "Building SA's Smartest Supply Chain", cat: "INSIGHTS", read: "4 min read" },
    { title: "MYHitch Pass expands event access in Adelaide", cat: "NEWS", read: "2 min read" },
  ];

  return (
    <div className={`p-6 flex flex-col justify-between h-[340px] w-full max-w-[460px] overflow-hidden group select-none rounded-3xl ${
      isLight ? "bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md" : "glass glass-sheen"
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-black/10" : "border-slate-500/10"}`}>
        <span className={`text-xs font-semibold flex items-center gap-2 ${isLight ? "text-black" : "text-[#97CADB]"}`}>
          <Award size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
          LENS MEDIA HUB
        </span>
        <span className={`text-[10px] ${isLight ? "text-slate-700" : "text-slate-400"} font-medium`}>Daily Updates</span>
      </div>

      <div className="my-auto space-y-3">
        {articles.map((a, i) => (
          <motion.div 
            key={a.title}
            className={`border p-4 rounded-xl relative overflow-hidden group/card transition-all duration-300 ${
              isLight ? "bg-white/40 border-black/5 hover:border-black/20" : "glass-soft hover:border-[#97CADB]/30"
            }`}
            whileHover={{ x: 6 }}
          >
            <div className={`flex justify-between text-[9px] font-semibold ${isLight ? "text-slate-700" : "text-[#97CADB]"}`}>
              <span>{a.cat}</span>
              <span className={isLight ? "text-slate-600" : "text-slate-400"}>{a.read}</span>
            </div>
            <h4 className={`text-xs font-semibold mt-1.5 leading-snug pr-4 ${isLight ? "text-black" : "text-white"}`}>
              {a.title}
            </h4>
            <div className="absolute right-3 bottom-3 opacity-0 group-hover/card:opacity-100 transition-opacity">
              <ArrowRight size={12} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`text-[10px] text-center ${isLight ? "text-slate-700" : "text-slate-400"}`}>
        Insights, news, and updates from the heart of the digital community.
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   7. NEXUS VISUAL
   ---------------------------------------------------- */
export function NexusVisual({ isLight = false }: { isLight?: boolean }) {
  return (
    <div className={`p-6 flex flex-col justify-between h-[340px] w-full max-w-[460px] overflow-hidden group select-none rounded-3xl ${
      isLight ? "bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md" : "glass glass-sheen"
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-black/10" : "border-slate-500/10"}`}>
        <span className={`text-xs font-semibold flex items-center gap-2 ${isLight ? "text-black" : "text-[#97CADB]"}`}>
          <Award size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
          B2B NETWORKING
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
          isLight ? "bg-black/10 text-black border border-black/10" : "bg-[#02457A] text-white"
        }`}>120+ Enterprises Connected</span>
      </div>

      {/* Network Node visual */}
      <div className={`my-auto h-[160px] border rounded-xl relative overflow-hidden flex items-center justify-center ${
        isLight ? "bg-white/40 border-black/5" : "bg-[#001B48]/60 border-slate-500/10"
      }`}>
        <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100">
          {/* Connecting lines */}
          <line x1="20" y1="50" x2="50" y2="25" stroke={isLight ? "#94a3b8" : "#018ABE"} strokeWidth="1" strokeDasharray="3 2" />
          <line x1="20" y1="50" x2="50" y2="75" stroke={isLight ? "#94a3b8" : "#018ABE"} strokeWidth="1" strokeDasharray="3 2" />
          <line x1="50" y1="25" x2="80" y2="50" stroke={isLight ? "#94a3b8" : "#018ABE"} strokeWidth="1" strokeDasharray="3 2" />
          <line x1="50" y1="75" x2="80" y2="50" stroke={isLight ? "#94a3b8" : "#018ABE"} strokeWidth="1" strokeDasharray="3 2" />
          <line x1="20" y1="50" x2="80" y2="50" stroke={isLight ? "#475569" : "#02457A"} strokeWidth="1.5" />

          {/* Node circles */}
          <circle cx="20" cy="50" r="6" fill={isLight ? "#475569" : "#02457A"} stroke={isLight ? "#94a3b8" : "#97CADB"} strokeWidth="1" />
          <circle cx="50" cy="25" r="5" fill={isLight ? "#f1f5f9" : "#001B48"} stroke={isLight ? "#475569" : "#018ABE"} strokeWidth="1.5" />
          <circle cx="50" cy="75" r="5" fill={isLight ? "#f1f5f9" : "#001B48"} stroke={isLight ? "#475569" : "#018ABE"} strokeWidth="1.5" />
          <circle cx="80" cy="50" r="7" fill={isLight ? "#000000" : "#ffffff"} stroke={isLight ? "#ffffff" : "#001B48"} strokeWidth="1.5" />

          {/* Floating tags */}
          <foreignObject x="8" y="24" width="30" height="15">
            <div className={`text-[7px] font-bold text-center border rounded py-0.5 ${
              isLight ? "bg-white/80 text-black border-black/10" : "bg-[#001B48]/80 text-[#97CADB] border-[#018ABE]/20"
            }`}>
              SELLER
            </div>
          </foreignObject>
          <foreignObject x="65" y="24" width="30" height="15">
            <div className={`text-[7px] font-bold text-center border rounded py-0.5 ${
              isLight ? "bg-black/10 text-black border-black/15" : "bg-[#02457A]/80 text-white border-[#97CADB]/20"
            }`}>
              BUYER
            </div>
          </foreignObject>
        </svg>

        {/* Pulse transmission line */}
        <div className={`absolute text-[8px] border px-1.5 py-0.5 rounded font-mono bottom-2 right-2 flex items-center gap-1 ${
          isLight ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-emerald-950 border-emerald-500/20 text-emerald-400"
        }`}>
          <span className={`h-1.5 w-1.5 rounded-full animate-ping ${isLight ? "bg-emerald-600" : "bg-emerald-400"}`} />
          Smart Contract Executed
        </div>
      </div>

      <div className={`text-[10px] text-center border-t pt-2 ${isLight ? "text-slate-700 border-black/10" : "text-slate-400 border-slate-500/10"}`}>
        Wholesale trading, invoicing, and logistics integrated together.
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   8. IMPACT VISUAL
   ---------------------------------------------------- */
export function ImpactVisual({ isLight = false }: { isLight?: boolean }) {
  return (
    <div className={`p-6 flex flex-col justify-between h-[340px] w-full max-w-[460px] overflow-hidden group select-none rounded-3xl ${
      isLight ? "bg-white/40 border border-black/15 shadow-md shadow-slate-200/80 backdrop-blur-md" : "glass glass-sheen"
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-black/10" : "border-slate-500/10"}`}>
        <span className={`text-xs font-semibold flex items-center gap-2 ${isLight ? "text-black" : "text-white"}`}>
          <Heart size={14} className={isLight ? "text-black" : "text-[#D6E8EE]"} />
          COMMUNITY IMPACT
        </span>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 ${
          isLight ? "text-rose-700 bg-rose-50 border border-rose-200" : "text-rose-400 bg-rose-950/30 border border-rose-500/20"
        }`}>
          Active Campaign
        </span>
      </div>

      <div className="my-auto space-y-4">
        {/* Donation tracker mockup */}
        <div className={`p-4 space-y-3 rounded-2xl border ${isLight ? "bg-white/40 border-black/5" : "glass-soft"}`}>
          <div className={`flex justify-between items-center text-[10px] ${isLight ? "text-slate-700" : "text-slate-400"}`}>
            <span>SA Bushfire Recovery Fund</span>
            <span className={isLight ? "text-black font-semibold" : "text-white font-semibold"}>85% Raised</span>
          </div>

          {/* Progress bar container */}
          <div className={`w-full h-2 rounded-full overflow-hidden relative border ${
            isLight ? "bg-black/10 border-black/5" : "bg-[#001B48] border-[#018ABE]/10"
          }`}>
            <motion.div 
              className={`h-full rounded-full ${isLight ? "bg-black" : "bg-gradient-to-r from-[#018ABE] to-[#D6E8EE]"}`}
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className={isLight ? "text-black font-bold" : "text-[#97CADB] font-bold"}>$42,500 AUD</span>
            <span className={isLight ? "text-slate-600 font-medium" : "text-slate-400 font-medium"}>Goal: $50,000</span>
          </div>
        </div>

        {/* Small stats flex */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className={`rounded-xl p-2.5 text-center border ${isLight ? "bg-white/40 border-black/5" : "bg-[#02457A]/25 border border-slate-500/10"}`}>
            <p className={isLight ? "text-slate-600" : "text-slate-400"}>Project Backers</p>
            <p className={`font-bold mt-0.5 ${isLight ? "text-black" : "text-white"}`}>384</p>
          </div>
          <div className={`rounded-xl p-2.5 text-center border ${isLight ? "bg-white/40 border-black/5" : "bg-[#02457A]/25 border border-slate-500/10"}`}>
            <p className={isLight ? "text-slate-600" : "text-slate-400"}>Projects Funded</p>
            <p className={`font-bold mt-0.5 ${isLight ? "text-black" : "text-[#D6E8EE]"}`}>14</p>
          </div>
        </div>
      </div>

      <div className={`text-[10px] text-center ${isLight ? "text-slate-700" : "text-slate-400"}`}>
        Supporting South Australian causes with direct micro-donations.
      </div>
    </div>
  );
}
