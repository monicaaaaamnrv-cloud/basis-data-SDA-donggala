import { useState } from "react";

const LOGO_PUPR = "https://1.bp.blogspot.com/-xsOZT12s330/X-q9uLhz1DI/AAAAAAAABAA/-fhoZlTV0EU5dIykskDJWvo74bnbWLl9gCLcBGAsYHQ/s2048/Logo%2BKementerian%2BPekerjaan%2BUmum%2Bdan%2BPerumahan%2BRakyat%2B%2528PUPR%2529%2B%2528Cover%2529.png";
const LOGO_DONGGALA = "https://beritawarganet.com/wp-content/uploads/2022/08/Lambang_Kabupaten_Donggala_waifu2x_art_noise3_scale_tta_1.png";

const C = {
  blueDark:   "#003087",
  blueMid:    "#0047B3",
  blueLight:  "#E8EEF9",
  orange:     "#F7941D",
  orangeLight:"#FEF3E2",
  white:      "#FFFFFF",
  gray50:     "#F8F9FC",
  gray100:    "#EEF0F6",
  gray300:    "#C8CCDA",
  gray500:    "#7B82A0",
  gray700:    "#3D4466",
  gray900:    "#1A1F3A",
  green:      "#16A34A",
  red:        "#DC2626",
  yellow:     "#D97706",
};

const daerahIrigasi = [
  { id:1,  kode:"DI-001", nama:"D.I. Alindau",       kecamatan:"Sindue Tobata",    luasDI:117,   luasSawah:43,  bendungKondisi:"Rusak Sedang", bendungNilai:63.82, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:27.43, salSekunderKondisi:null,          salSekunderNilai:0,    salTersierKondisi:"Rusak Berat",  salTersierNilai:41.19, kondisiJaringan:null,           nilaiJaringan:0,     status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:2,  kode:"DI-002", nama:"D.I. Ape",           kecamatan:"Sindue",           luasDI:185,   luasSawah:47,  bendungKondisi:"Rusak Berat",  bendungNilai:27.27, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:49.82, salSekunderKondisi:"Rusak Berat", salSekunderNilai:42.04, salTersierKondisi:"Rusak Berat",  salTersierNilai:49.10, kondisiJaringan:"Rusak Berat",  nilaiJaringan:56.61, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:3,  kode:"DI-003", nama:"D.I. Balukang",      kecamatan:"Sojol Utara",      luasDI:275,   luasSawah:194, bendungKondisi:"Rusak Sedang", bendungNilai:61.09, salPrimerKondisi:"Rusak Ringan", salPrimerNilai:16.31, salSekunderKondisi:"Rusak Ringan",salSekunderNilai:17.75, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Sedang", nilaiJaringan:66.84, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:4,  kode:"DI-004", nama:"D.I. Jonooge",       kecamatan:"Banawa",           luasDI:337,   luasSawah:335, bendungKondisi:"Rusak Sedang", bendungNilai:64.09, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:40.00, salSekunderKondisi:"Rusak Berat", salSekunderNilai:48.65, salTersierKondisi:"Rusak Berat",  salTersierNilai:46.95, kondisiJaringan:"Rusak Berat",  nilaiJaringan:57.62, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:5,  kode:"DI-005", nama:"D.I. Labean",        kecamatan:"Balaesang Tanjung",luasDI:315,   luasSawah:225, bendungKondisi:"Rusak Ringan", bendungNilai:80.00, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:23.90, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:29.00, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Sedang", nilaiJaringan:61.19, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:6,  kode:"DI-006", nama:"D.I. Lende",         kecamatan:"Rio Pakava",       luasDI:175,   luasSawah:23,  bendungKondisi:"Rusak Berat",  bendungNilai:30.73, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:49.00, salSekunderKondisi:"Rusak Berat", salSekunderNilai:49.00, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Berat",  nilaiJaringan:47.00, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:7,  kode:"DI-007", nama:"D.I. Ogoamas",       kecamatan:"Balaesang",        luasDI:409,   luasSawah:254, bendungKondisi:"Rusak Sedang", bendungNilai:60.50, salPrimerKondisi:"Baik",         salPrimerNilai:8.51,  salSekunderKondisi:"Rusak Sedang",salSekunderNilai:27.70, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Sedang", nilaiJaringan:63.96, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:8,  kode:"DI-008", nama:"D.I. Pani'i",        kecamatan:"Sindue",           luasDI:300,   luasSawah:347, bendungKondisi:"Rusak Sedang", bendungNilai:67.18, salPrimerKondisi:"Baik",         salPrimerNilai:2.92,  salSekunderKondisi:"Baik",        salSekunderNilai:4.80,  salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Sedang", nilaiJaringan:61.19, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:9,  kode:"DI-009", nama:"D.I. Sibayu",        kecamatan:"Dampelas",         luasDI:497,   luasSawah:272, bendungKondisi:"Rusak Sedang", bendungNilai:79.64, salPrimerKondisi:"Baik",         salPrimerNilai:1.00,  salSekunderKondisi:"Rusak Sedang",salSekunderNilai:35.25, salTersierKondisi:"Rusak Berat",  salTersierNilai:43.81, kondisiJaringan:"Rusak Berat",  nilaiJaringan:59.33, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:10, kode:"DI-010", nama:"D.I. Siboang",       kecamatan:"Balaesang",        luasDI:450,   luasSawah:623, bendungKondisi:"Rusak Sedang", bendungNilai:70.64, salPrimerKondisi:"Rusak Ringan", salPrimerNilai:16.41, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:39.23, salTersierKondisi:"Rusak Berat",  salTersierNilai:42.00, kondisiJaringan:"Rusak Sedang", nilaiJaringan:60.43, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:11, kode:"DI-011", nama:"D.I. Sibualong",     kecamatan:"Sindue",           luasDI:300,   luasSawah:131, bendungKondisi:"Rusak Berat",  bendungNilai:38.09, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:38.00, salSekunderKondisi:"Rusak Berat", salSekunderNilai:48.00, salTersierKondisi:"Rusak Berat",  salTersierNilai:41.67, kondisiJaringan:"Rusak Berat",  nilaiJaringan:50.90, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:12, kode:"DI-012", nama:"D.I. Simou",         kecamatan:"Dampelas",         luasDI:959,   luasSawah:306, bendungKondisi:"Rusak Berat",  bendungNilai:47.50, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:42.83, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:23.22, salTersierKondisi:"Rusak Berat",  salTersierNilai:43.12, kondisiJaringan:"Rusak Berat",  nilaiJaringan:58.03, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:13, kode:"DI-013", nama:"D.I. Sioyong",       kecamatan:"Balaesang Tanjung",luasDI:606,   luasSawah:0,   bendungKondisi:null,           bendungNilai:0,     salPrimerKondisi:null,           salPrimerNilai:0,     salSekunderKondisi:null,          salSekunderNilai:0,    salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:null,           nilaiJaringan:0,     status:"Data Tidak Lengkap",lastUpdate:"2023-02-01" },
  { id:14, kode:"DI-014", nama:"D.I. Siwalempu",     kecamatan:"Sindue Tobata",    luasDI:250,   luasSawah:171, bendungKondisi:null,           bendungNilai:0,     salPrimerKondisi:null,           salPrimerNilai:0,     salSekunderKondisi:null,          salSekunderNilai:0,    salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:null,           nilaiJaringan:0,     status:"Data Tidak Lengkap",lastUpdate:"2023-02-01" },
  { id:15, kode:"DI-015", nama:"D.I. Siweli",        kecamatan:"Sojol",            luasDI:70,    luasSawah:74,  bendungKondisi:"Baik",         bendungNilai:90.50, salPrimerKondisi:"Rusak Ringan", salPrimerNilai:16.26, salSekunderKondisi:"Rusak Ringan",salSekunderNilai:16.30, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Berat",  nilaiJaringan:58.82, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:16, kode:"DI-016", nama:"D.I. Sumari",        kecamatan:"Banawa Selatan",   luasDI:236,   luasSawah:116, bendungKondisi:"Baik",         bendungNilai:90.50, salPrimerKondisi:"Rusak Ringan", salPrimerNilai:16.58, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:23.90, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Sedang", nilaiJaringan:63.67, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:17, kode:"DI-017", nama:"D.I. Tamarenja",     kecamatan:"Banawa Tengah",    luasDI:102,   luasSawah:20,  bendungKondisi:"Baik",         bendungNilai:90.50, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:23.88, salSekunderKondisi:"Rusak Ringan",salSekunderNilai:16.30, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Sedang", nilaiJaringan:61.18, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:18, kode:"DI-018", nama:"D.I. Tambu",         kecamatan:"Balaesang",        luasDI:200,   luasSawah:176, bendungKondisi:"Rusak Berat",  bendungNilai:47.64, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:33.47, salSekunderKondisi:null,          salSekunderNilai:0,    salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Berat",  nilaiJaringan:41.57, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:19, kode:"DI-019", nama:"D.I. Tanamea Kanan", kecamatan:"Sindue Rombu",     luasDI:280,   luasSawah:130, bendungKondisi:"Rusak Sedang", bendungNilai:62.91, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:45.68, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:36.15, salTersierKondisi:"Rusak Berat",  salTersierNilai:43.02, kondisiJaringan:"Rusak Sedang", nilaiJaringan:64.53, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:20, kode:"DI-020", nama:"D.I. Tanamea Kiri",  kecamatan:"Sindue Rombu",     luasDI:300,   luasSawah:93,  bendungKondisi:"Rusak Sedang", bendungNilai:65.45, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:33.49, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:33.02, salTersierKondisi:"Rusak Berat",  salTersierNilai:43.94, kondisiJaringan:"Rusak Sedang", nilaiJaringan:61.44, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:21, kode:"DI-021", nama:"D.I. Tompe",         kecamatan:"Sindue",           luasDI:575,   luasSawah:207, bendungKondisi:"Rusak Berat",  bendungNilai:50.18, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:44.59, salSekunderKondisi:"Rusak Berat", salSekunderNilai:47.51, salTersierKondisi:"Rusak Berat",  salTersierNilai:48.27, kondisiJaringan:"Rusak Berat",  nilaiJaringan:59.05, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:22, kode:"DI-022", nama:"D.I. Tonggolobibi",  kecamatan:"Dampelas",         luasDI:574,   luasSawah:380, bendungKondisi:"Baik",         bendungNilai:90.50, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:43.32, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:36.10, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Berat",  nilaiJaringan:57.20, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:23, kode:"DI-023", nama:"D.I. Watatu",        kecamatan:"Balaesang",        luasDI:300,   luasSawah:350, bendungKondisi:"Rusak Sedang", bendungNilai:73.64, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:44.07, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:30.00, salTersierKondisi:"Rusak Berat",  salTersierNilai:43.33, kondisiJaringan:"Rusak Sedang", nilaiJaringan:71.54, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:24, kode:"DI-024", nama:"D.I. Wombo",         kecamatan:"Tanantovea",       luasDI:90,    luasSawah:13,  bendungKondisi:"Rusak Berat",  bendungNilai:49.50, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:23.98, salSekunderKondisi:"Rusak Ringan",salSekunderNilai:16.28, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Berat",  nilaiJaringan:58.30, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:25, kode:"DI-025", nama:"D.I. Nupabomba",     kecamatan:"Tanantovea",       luasDI:150,   luasSawah:40,  bendungKondisi:"Rusak Sedang", bendungNilai:61.31, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:35.10, salSekunderKondisi:null,          salSekunderNilai:0,    salTersierKondisi:"Rusak Sedang", salTersierNilai:23.67, kondisiJaringan:"Rusak Sedang", nilaiJaringan:60.66, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:26, kode:"DI-026", nama:"D.I. Rerang",        kecamatan:"Sindue Tobata",    luasDI:205,   luasSawah:157, bendungKondisi:"Rusak Sedang", bendungNilai:63.50, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:43.12, salSekunderKondisi:"Rusak Berat", salSekunderNilai:45.75, salTersierKondisi:"Rusak Berat",  salTersierNilai:44.77, kondisiJaringan:"Rusak Sedang", nilaiJaringan:62.56, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:27, kode:"DI-027", nama:"D.I. Sinjaliang",    kecamatan:"Rio Pakava",       luasDI:107,   luasSawah:0,   bendungKondisi:null,           bendungNilai:0,     salPrimerKondisi:null,           salPrimerNilai:0,     salSekunderKondisi:null,          salSekunderNilai:0,    salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:null,           nilaiJaringan:0,     status:"Data Tidak Lengkap",lastUpdate:"2023-02-01" },
  { id:28, kode:"DI-028", nama:"D.I. Tambu Tovia",   kecamatan:"Balaesang",        luasDI:116,   luasSawah:26,  bendungKondisi:"Rusak Sedang", bendungNilai:69.46, salPrimerKondisi:"Rusak Sedang", salPrimerNilai:34.76, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:34.60, salTersierKondisi:"Rusak Sedang", salTersierNilai:23.89, kondisiJaringan:"Rusak Berat",  nilaiJaringan:58.62, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:29, kode:"DI-029", nama:"D.I. Tandayo",       kecamatan:"Balaesang Tanjung",luasDI:116,   luasSawah:328, bendungKondisi:"Rusak Sedang", bendungNilai:68.91, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:44.30, salSekunderKondisi:"Rusak Berat", salSekunderNilai:44.30, salTersierKondisi:"Rusak Berat",  salTersierNilai:45.13, kondisiJaringan:"Rusak Berat",  nilaiJaringan:51.32, status:"Aktif",             lastUpdate:"2023-02-01" },
  { id:30, kode:"DI-030", nama:"D.I. Tinauka",       kecamatan:"Rio Pakava",       luasDI:204.6, luasSawah:0,   bendungKondisi:null,           bendungNilai:0,     salPrimerKondisi:null,           salPrimerNilai:0,     salSekunderKondisi:null,          salSekunderNilai:0,    salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:null,           nilaiJaringan:0,     status:"Data Tidak Lengkap",lastUpdate:"2023-02-01" },
  { id:31, kode:"DI-031", nama:"D.I. Wombo Mpanau",  kecamatan:"Tanantovea",       luasDI:90,    luasSawah:14,  bendungKondisi:"Rusak Berat",  bendungNilai:49.50, salPrimerKondisi:"Rusak Berat",  salPrimerNilai:44.20, salSekunderKondisi:"Rusak Sedang",salSekunderNilai:33.20, salTersierKondisi:null,           salTersierNilai:0,     kondisiJaringan:"Rusak Berat",  nilaiJaringan:48.60, status:"Aktif",             lastUpdate:"2023-02-01" },
];

const kondisiWarna = {
  "Baik":          { bg:"#DCFCE7", tx:"#15803D", dot:"#16A34A" },
  "Rusak Ringan":  { bg:"#FEF9C3", tx:"#92400E", dot:"#D97706" },
  "Rusak Sedang":  { bg:"#FFEDD5", tx:"#C2410C", dot:"#EA580C" },
  "Rusak Berat":   { bg:"#FEE2E2", tx:"#991B1B", dot:"#DC2626" },
  "Belum Didata":  { bg:"#F3F4F6", tx:"#6B7280", dot:"#9CA3AF" },
};
const statusWarna = {
  "Aktif":              { bg:"#DBEAFE", tx:"#1E40AF" },
  "Data Tidak Lengkap": { bg:"#FEF3C7", tx:"#92400E" },
  "Tidak Aktif":        { bg:"#F3F4F6", tx:"#6B7280" },
};

function Badge({ label, map }) {
  const s = map[label] || { bg:"#F3F4F6", tx:"#6B7280" };
  return (
    <span style={{ background:s.bg, color:s.tx, padding:"3px 10px",
      borderRadius:20, fontSize:12, fontWeight:600, whiteSpace:"nowrap",
      display:"inline-flex", alignItems:"center", gap:5 }}>
      {map === kondisiWarna && (
        <span style={{ width:7, height:7, borderRadius:"50%", background:s.dot, flexShrink:0 }}/>
      )}
      {label}
    </span>
  );
}

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div style={{ background:C.white, borderRadius:14, padding:"20px 22px",
      boxShadow:"0 2px 12px rgba(0,48,135,.08)", borderLeft:`4px solid ${color}`,
      display:"flex", alignItems:"center", gap:16 }}>
      <div style={{ width:52, height:52, borderRadius:12, background:`${color}18`,
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:24 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize:26, fontWeight:800, color:C.gray900, lineHeight:1 }}>{value}</div>
        <div style={{ fontSize:13, color:C.gray500, marginTop:3 }}>{label}</div>
        {sub && <div style={{ fontSize:11, color, fontWeight:600, marginTop:2 }}>{sub}</div>}
      </div>
    </div>
  );
}

// ── LOGIN ────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [usr, setUsr]   = useState("");
  const [pwd, setPwd]   = useState("");
  const [err, setErr]   = useState("");
  const [loading, setL] = useState(false);
  const [show, setShow] = useState(false);

  const handle = () => {
    if (!usr || !pwd) { setErr("Username dan password wajib diisi."); return; }
    setL(true);
    setTimeout(() => {
      if (usr === "admin" && pwd === "sda2026")
        onLogin({ nama:"Administrator", jabatan:"Admin Sistem", role:"admin" });
      else if (usr === "user" && pwd === "usersda2026")
        onLogin({ nama:"Pengunjung", jabatan:"Pengguna Umum", role:"user" });
      else { setErr("Username atau password salah."); setL(false); }
    }, 1000);
  };

  return (
    <div style={{ minHeight:"100vh", fontFamily:"'Segoe UI','Helvetica Neue',sans-serif",
      background:`linear-gradient(135deg, ${C.blueDark} 0%, ${C.blueMid} 60%, #0060CC 100%)`,
      display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden" }}>

      {[{w:400,h:400,top:-80,right:-80,op:.07},{w:260,h:260,bottom:-60,left:-60,op:.06},
        {w:140,h:140,top:"38%",left:"6%",op:.05},{w:90,h:90,top:"15%",right:"12%",op:.06}
      ].map((c,i)=>(
        <div key={i} style={{ position:"absolute", width:c.w, height:c.h, borderRadius:"50%",
          top:c.top, bottom:c.bottom, left:c.left, right:c.right,
          background:C.white, opacity:c.op, pointerEvents:"none" }}/>
      ))}

      <div style={{ width:430, background:C.white, borderRadius:22,
        boxShadow:"0 28px 80px rgba(0,0,0,.32)", overflow:"hidden", position:"relative", zIndex:1 }}>

        <div style={{ background:`linear-gradient(135deg,${C.blueDark},${C.blueMid})`,
          padding:"36px 36px 30px", textAlign:"center" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center",
            gap:16, margin:"0 auto 16px" }}>
            <img src={LOGO_PUPR} alt="Logo PUPR"
              style={{ width:64, height:64, objectFit:"contain",
                filter:"drop-shadow(0 4px 8px rgba(0,0,0,.3))" }}
              onError={e=>{ e.target.replaceWith(Object.assign(document.createElement("div"), {
                innerHTML:"🌾", style:"font-size:36px;width:64px;height:64px;display:flex;align-items:center;justify-content:center;background:#F7941D;border-radius:50%;" })); }}
            />
            <img src={LOGO_DONGGALA} alt="Logo Donggala"
              style={{ width:64, height:64, objectFit:"contain",
                filter:"drop-shadow(0 4px 8px rgba(0,0,0,.3))" }}
              onError={e=>{ e.target.style.display="none"; }}
            />
          </div>
          <div style={{ color:C.white, fontWeight:800, fontSize:15, letterSpacing:1.5,
            textTransform:"uppercase", opacity:.9 }}>DINAS PUPR KAB. DONGGALA</div>
          <div style={{ color:C.orange, fontWeight:700, fontSize:13, marginTop:5 }}>
            Bidang Sumber Daya Air
          </div>
        </div>

        <div style={{ padding:"32px 36px 36px" }}>
          <div style={{ fontSize:20, fontWeight:700, color:C.gray900 }}>Selamat Datang</div>
          <div style={{ fontSize:13, color:C.gray500, marginBottom:24, marginTop:4 }}>
            Sistem Basis Data Bidang SDA DPUPR Kab. Donggala
          </div>

          {err && (
            <div style={{ background:"#FEE2E2", border:"1px solid #FECACA", color:C.red,
              borderRadius:8, padding:"10px 14px", fontSize:13, marginBottom:16 }}>
              ⚠️ {err}
            </div>
          )}

          <div style={{ marginBottom:18 }}>
            <label style={{ fontSize:13, fontWeight:600, color:C.gray700, display:"block", marginBottom:6 }}>
              Username
            </label>
            <input value={usr} onChange={e=>{ setUsr(e.target.value); setErr(""); }}
              type="text" placeholder="Masukkan username"
              onKeyDown={e=>e.key==="Enter"&&handle()}
              style={{ width:"100%", padding:"11px 14px", border:`1.5px solid ${C.gray300}`,
                borderRadius:9, fontSize:14, color:C.gray900, outline:"none", boxSizing:"border-box" }}
              onFocus={e=>e.target.style.borderColor=C.blueMid}
              onBlur={e=>e.target.style.borderColor=C.gray300} />
          </div>

          <div style={{ marginBottom:22 }}>
            <label style={{ fontSize:13, fontWeight:600, color:C.gray700, display:"block", marginBottom:6 }}>
              Password
            </label>
            <div style={{ position:"relative" }}>
              <input value={pwd} onChange={e=>{ setPwd(e.target.value); setErr(""); }}
                type={show?"text":"password"} placeholder="Masukkan password"
                onKeyDown={e=>e.key==="Enter"&&handle()}
                style={{ width:"100%", padding:"11px 44px 11px 14px", border:`1.5px solid ${C.gray300}`,
                  borderRadius:9, fontSize:14, color:C.gray900, outline:"none", boxSizing:"border-box" }}
                onFocus={e=>e.target.style.borderColor=C.blueMid}
                onBlur={e=>e.target.style.borderColor=C.gray300} />
              <button onClick={()=>setShow(!show)}
                style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)",
                  background:"none", border:"none", cursor:"pointer", fontSize:16, color:C.gray500 }}>
                {show?"🙈":"👁️"}
              </button>
            </div>
          </div>

          <button onClick={handle} disabled={loading}
            style={{ width:"100%", padding:"13px", background:loading?C.gray300:C.orange,
              color:C.white, border:"none", borderRadius:9, fontSize:15, fontWeight:700,
              cursor:loading?"not-allowed":"pointer",
              boxShadow:loading?"none":`0 4px 14px rgba(247,148,29,.4)`, transition:"all .2s" }}>
            {loading ? "Memverifikasi..." : "Masuk →"}
          </button>

          <div style={{ textAlign:"center", marginTop:16, fontSize:12, color:C.gray300 }}>
            © 2026 Bidang SDA — Dinas PUPR Kab. Donggala
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SIDEBAR ──────────────────────────────────────────────────────
const menus = [
  { key:"dashboard", icon:"📊", label:"Dashboard" },
  { key:"data",      icon:"🗂️",  label:"Data Jaringan Irigasi" },
  { key:"sungai",    icon:"🌊",  label:"Data Sungai/Pantai" },
  { key:"peta",      icon:"🗺️",  label:"Peta Sebaran" },
  { key:"laporan",   icon:"📋", label:"Laporan" },
  { key:"pengguna",  icon:"👥", label:"Manajemen Pengguna" },
];

function Sidebar({ active, setActive, user, onLogout, collapsed, setCollapsed }) {
  return (
    <div style={{ width:collapsed?68:240, minHeight:"100vh",
      background:`linear-gradient(180deg,${C.blueDark} 0%,#002070 100%)`,
      display:"flex", flexDirection:"column", transition:"width .25s ease",
      boxShadow:"3px 0 16px rgba(0,0,0,.15)", flexShrink:0, position:"relative" }}>

      <div style={{ padding:collapsed?"18px 0":"16px 20px", textAlign:collapsed?"center":"left",
        borderBottom:"1px solid rgba(255,255,255,.1)" }}>
        {collapsed ? (
          <img src={LOGO_PUPR} alt="PUPR"
            style={{ width:36, height:36, objectFit:"contain" }}
            onError={e=>{ e.target.style.display="none"; e.target.nextSibling.style.display="block"; }}
          />
        ) : (
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <img src={LOGO_PUPR} alt="PUPR"
              style={{ width:38, height:38, objectFit:"contain" }}
              onError={e=>{ e.target.style.display="none"; }}
            />
            <img src={LOGO_DONGGALA} alt="Donggala"
              style={{ width:38, height:38, objectFit:"contain" }}
              onError={e=>{ e.target.style.display="none"; }}
            />
          </div>
        )}
        {!collapsed && (
          <div style={{ color:C.white, fontWeight:700, fontSize:13, marginTop:10, lineHeight:1.5 }}>
            SDA PUPR<br/><span style={{ color:C.orange }}>Kab. Donggala</span>
          </div>
        )}
      </div>

      <nav style={{ flex:1, padding:"12px 8px" }}>
        {menus.map(m => (
          <button key={m.key} onClick={()=>setActive(m.key)} title={collapsed?m.label:""}
            style={{ width:"100%", display:"flex", alignItems:"center", gap:12,
              padding:collapsed?"12px 0":"11px 14px",
              justifyContent:collapsed?"center":"flex-start",
              background:active===m.key?"rgba(247,148,29,.18)":"transparent",
              border:active===m.key?"1px solid rgba(247,148,29,.35)":"1px solid transparent",
              borderRadius:10, color:active===m.key?C.orange:"rgba(255,255,255,.65)",
              cursor:"pointer", marginBottom:4, fontSize:13,
              fontWeight:active===m.key?700:400, transition:"all .15s" }}>
            <span style={{ fontSize:17 }}>{m.icon}</span>
            {!collapsed && <span>{m.label}</span>}
            {!collapsed && active===m.key && (
              <span style={{ marginLeft:"auto", width:6, height:6, borderRadius:"50%", background:C.orange }}/>
            )}
          </button>
        ))}
      </nav>

      <div style={{ padding:"12px 8px", borderTop:"1px solid rgba(255,255,255,.1)" }}>
        {!collapsed && (
          <div style={{ padding:"10px 14px", background:"rgba(255,255,255,.06)",
            borderRadius:10, marginBottom:8 }}>
            <div style={{ color:C.white, fontSize:13, fontWeight:600 }}>{user.nama}</div>
            <div style={{ color:"rgba(255,255,255,.4)", fontSize:11 }}>{user.jabatan}</div>
          </div>
        )}
        <button onClick={onLogout}
          style={{ width:"100%", padding:collapsed?"10px 0":"9px 14px",
            display:"flex", alignItems:"center", gap:8,
            justifyContent:collapsed?"center":"flex-start",
            background:"transparent", border:"1px solid rgba(220,38,38,.35)",
            borderRadius:8, color:"rgba(255,120,120,.8)", cursor:"pointer", fontSize:12 }}>
          <span>🚪</span>{!collapsed&&"Keluar"}
        </button>
      </div>

      <button onClick={()=>setCollapsed(!collapsed)}
        style={{ position:"absolute", top:22, left:collapsed?50:222,
          width:24, height:24, borderRadius:"50%", background:C.orange,
          border:"none", cursor:"pointer", color:C.white, fontSize:12,
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 2px 8px rgba(0,0,0,.2)", transition:"left .25s ease", zIndex:20 }}>
        {collapsed?"›":"‹"}
      </button>
    </div>
  );
}

// ── DASHBOARD ────────────────────────────────────────────────────
function Dashboard() {
  const total = daerahIrigasi.length;
  const baik  = daerahIrigasi.filter(d=>d.kondisiJaringan==="Baik").length;
  const rusak = daerahIrigasi.filter(d=>["Rusak Ringan","Rusak Sedang","Rusak Berat"].includes(d.kondisiJaringan)).length;
  const luas  = daerahIrigasi.reduce((a,d)=>a+d.luasDI,0);

  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <h2 style={{ fontSize:22, fontWeight:800, color:C.gray900, margin:0 }}>Dashboard</h2>
        <p style={{ color:C.gray500, fontSize:14, marginTop:4 }}>
          Ringkasan kondisi jaringan irigasi — Kab. Donggala
        </p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:28 }}>
        <StatCard icon="🌾" label="Total D.I. Terdaftar"  value={total}                   color={C.blueMid} />
        <StatCard icon="✅" label="Kondisi Baik"          value={baik}  sub={`${Math.round(baik/total*100)}% dari total`}  color={C.green}   />
        <StatCard icon="⚠️" label="Perlu Perhatian"       value={rusak} sub={`${Math.round(rusak/total*100)}% dari total`} color={C.yellow}  />
        <StatCard icon="📐" label="Total Luas (Ha)"       value={luas.toLocaleString()}    color={C.orange}  />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        <div style={{ background:C.white, borderRadius:14, padding:22,
          boxShadow:"0 2px 12px rgba(0,48,135,.08)" }}>
          <h3 style={{ fontSize:15, fontWeight:700, color:C.gray900, margin:"0 0 18px" }}>
            Distribusi Kondisi Jaringan
          </h3>
          {["Baik","Rusak Ringan","Rusak Sedang","Rusak Berat","Belum Didata"].map(k=>{
            const cnt = daerahIrigasi.filter(d=>(d.kondisiJaringan||"Belum Didata")===k).length;
            const pct = Math.round(cnt/total*100);
            const w   = kondisiWarna[k];
            return (
              <div key={k} style={{ marginBottom:14 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                  <span style={{ fontSize:13, color:C.gray700 }}>{k}</span>
                  <span style={{ fontSize:13, fontWeight:700, color:w.tx }}>{cnt} ({pct}%)</span>
                </div>
                <div style={{ height:10, background:C.gray100, borderRadius:6, overflow:"hidden" }}>
                  <div style={{ width:`${pct}%`, height:"100%", background:w.dot, borderRadius:6 }}/>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ background:C.white, borderRadius:14, padding:22,
          boxShadow:"0 2px 12px rgba(0,48,135,.08)" }}>
          <h3 style={{ fontSize:15, fontWeight:700, color:C.gray900, margin:"0 0 18px" }}>
            Pemutakhiran Data Terbaru
          </h3>
          {[...daerahIrigasi].sort((a,b)=>new Date(b.lastUpdate)-new Date(a.lastUpdate))
            .slice(0,5).map(d=>(
            <div key={d.id} style={{ display:"flex", alignItems:"center", gap:12,
              paddingBottom:12, marginBottom:12, borderBottom:`1px solid ${C.gray100}` }}>
              <div style={{ width:36, height:36, borderRadius:9, background:C.blueLight,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:16, flexShrink:0 }}>🌊</div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:13, fontWeight:600, color:C.gray900,
                  overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{d.nama}</div>
                <div style={{ fontSize:11, color:C.gray500 }}>{d.kecamatan} • {d.petugas}</div>
              </div>
              <div style={{ fontSize:11, color:C.gray500, flexShrink:0 }}>
                {new Date(d.lastUpdate).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"})}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── FORM MODAL (Tambah / Edit) ───────────────────────────────────
const EMPTY_FORM = {
  nama:"", kecamatan:"", luasDI:"", luasSawah:"",
  bendungKondisi:"Rusak Sedang", bendungNilai:"",
  salPrimerKondisi:"Rusak Sedang", salPrimerNilai:"",
  salSekunderKondisi:"Rusak Sedang", salSekunderNilai:"",
  salTersierKondisi:"Rusak Sedang", salTersierNilai:"",
  kondisiJaringan:"Rusak Sedang", nilaiJaringan:"",
  status:"Aktif"
};

function FormModal({ mode, data, onSave, onClose }) {
  const [form, setForm] = useState(mode==="edit" ? {
    nama: data.nama, kecamatan: data.kecamatan,
    luasDI: data.luasDI, luasSawah: data.luasSawah,
    bendungKondisi: data.bendungKondisi||"Rusak Sedang", bendungNilai: data.bendungNilai||"",
    salPrimerKondisi: data.salPrimerKondisi||"Rusak Sedang", salPrimerNilai: data.salPrimerNilai||"",
    salSekunderKondisi: data.salSekunderKondisi||"Rusak Sedang", salSekunderNilai: data.salSekunderNilai||"",
    salTersierKondisi: data.salTersierKondisi||"Rusak Sedang", salTersierNilai: data.salTersierNilai||"",
    kondisiJaringan: data.kondisiJaringan||"Rusak Sedang", nilaiJaringan: data.nilaiJaringan||"",
    status: data.status,
  } : EMPTY_FORM);
  const [err, setErr] = useState("");

  const inp = (field, val) => setForm(f=>({...f, [field]:val}));

  const fieldStyle = { width:"100%", padding:"9px 12px", border:`1.5px solid ${C.gray300}`,
    borderRadius:8, fontSize:13, color:C.gray900, outline:"none", boxSizing:"border-box" };
  const labelStyle = { fontSize:12, fontWeight:600, color:C.gray700,
    display:"block", marginBottom:5, marginTop:12 };
  const sectionStyle = { fontSize:12, fontWeight:700, color:C.blueMid, marginTop:18, marginBottom:4,
    textTransform:"uppercase", letterSpacing:0.8, borderBottom:`1px solid ${C.gray100}`, paddingBottom:4 };
  const KONDISI_OPT = ["Baik","Rusak Ringan","Rusak Sedang","Rusak Berat"];

  const handleSave = () => {
    if (!form.nama.trim()) { setErr("Nama D.I. wajib diisi."); return; }
    if (!form.kecamatan.trim()) { setErr("Kecamatan wajib diisi."); return; }
    if (!form.luasDI || isNaN(form.luasDI) || Number(form.luasDI)<=0) {
      setErr("Luas D.I. harus berupa angka positif."); return; }
    setErr("");
    onSave({
      ...form,
      luasDI: Number(form.luasDI),
      luasSawah: Number(form.luasSawah)||0,
      bendungNilai: Number(form.bendungNilai)||0,
      bendungKondisi: form.bendungKondisi||null,
      salPrimerNilai: Number(form.salPrimerNilai)||0,
      salPrimerKondisi: form.salPrimerKondisi||null,
      salSekunderNilai: Number(form.salSekunderNilai)||0,
      salSekunderKondisi: form.salSekunderKondisi||null,
      salTersierNilai: Number(form.salTersierNilai)||0,
      salTersierKondisi: form.salTersierKondisi||null,
      nilaiJaringan: Number(form.nilaiJaringan)||0,
      kondisiJaringan: form.kondisiJaringan||null,
    });
  };

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.5)",
      display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000 }}
      onClick={onClose}>
      <div style={{ background:C.white, borderRadius:16, width:580, maxWidth:"94vw",
        maxHeight:"90vh", overflowY:"auto", boxShadow:"0 24px 60px rgba(0,0,0,.3)" }}
        onClick={e=>e.stopPropagation()}>

        {/* Header */}
        <div style={{ background:`linear-gradient(135deg,${C.blueDark},${C.blueMid})`,
          padding:"18px 24px", display:"flex", justifyContent:"space-between", alignItems:"center",
          position:"sticky", top:0, zIndex:1 }}>
          <div>
            <div style={{ color:C.orange, fontSize:11, fontWeight:700, textTransform:"uppercase" }}>
              {mode==="edit" ? `Edit Data — ${data.kode}` : "Tambah Data Baru"}
            </div>
            <div style={{ color:C.white, fontSize:15, fontWeight:800, marginTop:2 }}>
              {mode==="edit" ? data.nama : "Daerah Irigasi Baru"}
            </div>
          </div>
          <button onClick={onClose}
            style={{ background:"rgba(255,255,255,.15)", border:"none", color:C.white,
              borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:14 }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ padding:"20px 24px 28px" }}>
          {err && (
            <div style={{ background:"#FEE2E2", border:"1px solid #FECACA", color:C.red,
              borderRadius:8, padding:"10px 14px", fontSize:13, marginBottom:14 }}>⚠️ {err}</div>
          )}

          {/* Info Umum */}
          <div style={sectionStyle}>📋 Informasi Umum</div>
          <label style={labelStyle}>Nama Daerah Irigasi *</label>
          <input value={form.nama} onChange={e=>inp("nama",e.target.value)}
            placeholder="Contoh: D.I. Tambu" style={fieldStyle}
            onFocus={e=>e.target.style.borderColor=C.blueMid}
            onBlur={e=>e.target.style.borderColor=C.gray300}/>

          <label style={labelStyle}>Kecamatan *</label>
          <input value={form.kecamatan} onChange={e=>inp("kecamatan",e.target.value)}
            placeholder="Contoh: Balaesang" style={fieldStyle}
            onFocus={e=>e.target.style.borderColor=C.blueMid}
            onBlur={e=>e.target.style.borderColor=C.gray300}/>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div>
              <label style={labelStyle}>Luas D.I. (Ha) *</label>
              <input type="number" value={form.luasDI} onChange={e=>inp("luasDI",e.target.value)}
                placeholder="0" style={fieldStyle}
                onFocus={e=>e.target.style.borderColor=C.blueMid}
                onBlur={e=>e.target.style.borderColor=C.gray300}/>
            </div>
            <div>
              <label style={labelStyle}>Luas Sawah (Ha)</label>
              <input type="number" value={form.luasSawah} onChange={e=>inp("luasSawah",e.target.value)}
                placeholder="0" style={fieldStyle}
                onFocus={e=>e.target.style.borderColor=C.blueMid}
                onBlur={e=>e.target.style.borderColor=C.gray300}/>
            </div>
          </div>

          {/* Kondisi Fisik */}
          <div style={sectionStyle}>🏗️ Kondisi Fisik Jaringan Irigasi</div>

          {[
            ["Bendung",       "bendungKondisi",      "bendungNilai"],
            ["Sal. Primer",   "salPrimerKondisi",    "salPrimerNilai"],
            ["Sal. Sekunder", "salSekunderKondisi",  "salSekunderNilai"],
            ["Sal. Tersier",  "salTersierKondisi",   "salTersierNilai"],
          ].map(([label, kField, nField])=>(
            <div key={label} style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              <div>
                <label style={labelStyle}>{label} — Kondisi</label>
                <select value={form[kField]||""} onChange={e=>inp(kField,e.target.value||null)} style={fieldStyle}>
                  <option value="">— Tidak Ada / N/A —</option>
                  {KONDISI_OPT.map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>{label} — Nilai (%)</label>
                <input type="number" min="0" max="100" value={form[nField]}
                  onChange={e=>inp(nField,e.target.value)}
                  placeholder="0 - 100" style={fieldStyle}
                  onFocus={e=>e.target.style.borderColor=C.blueMid}
                  onBlur={e=>e.target.style.borderColor=C.gray300}/>
              </div>
            </div>
          ))}

          {/* Rata-rata Jaringan */}
          <div style={sectionStyle}>📊 Rata-rata Jaringan</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div>
              <label style={labelStyle}>Kondisi Rata-rata</label>
              <select value={form.kondisiJaringan||""} onChange={e=>inp("kondisiJaringan",e.target.value||null)} style={fieldStyle}>
                <option value="">— Belum Didata —</option>
                {KONDISI_OPT.map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Nilai Rata-rata (%)</label>
              <input type="number" min="0" max="100" value={form.nilaiJaringan}
                onChange={e=>inp("nilaiJaringan",e.target.value)}
                placeholder="0 - 100" style={fieldStyle}
                onFocus={e=>e.target.style.borderColor=C.blueMid}
                onBlur={e=>e.target.style.borderColor=C.gray300}/>
            </div>
          </div>

          {/* Status */}
          <div style={sectionStyle}>📌 Status</div>
          <select value={form.status} onChange={e=>inp("status",e.target.value)} style={fieldStyle}>
            {["Aktif","Data Tidak Lengkap","Tidak Aktif"].map(o=>(
              <option key={o}>{o}</option>
            ))}
          </select>

          <div style={{ display:"flex", gap:10, marginTop:24, justifyContent:"flex-end" }}>
            <button onClick={onClose}
              style={{ padding:"10px 20px", borderRadius:8, border:`1.5px solid ${C.gray300}`,
                background:C.white, color:C.gray700, cursor:"pointer", fontSize:13, fontWeight:600 }}>
              Batal
            </button>
            <button onClick={handleSave}
              style={{ padding:"10px 24px", borderRadius:8, border:"none",
                background:C.orange, color:C.white, cursor:"pointer",
                fontSize:13, fontWeight:700, boxShadow:`0 4px 12px rgba(247,148,29,.35)` }}>
              {mode==="edit" ? "💾 Simpan Perubahan" : "➕ Tambah Data"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── DATA PAGE ────────────────────────────────────────────────────
function DataPage({ user }) {
  const [data, setData]         = useState(daerahIrigasi);
  const [search, setSearch]     = useState("");
  const [filter, setFilter]     = useState("Semua");
  const [tahun, setTahun]       = useState("2026");
  const [selected, setSelected] = useState(null);
  const [formMode, setFormMode] = useState(null); // null | "add" | "edit"
  const [editTarget, setEditTarget] = useState(null);
  const [toast, setToast]       = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const kondisiDisplay = (d) => d.kondisiJaringan || "Belum Didata";

  const filtered = data.filter(d => {
    const q = search.toLowerCase();
    return (d.nama.toLowerCase().includes(q) || d.kecamatan.toLowerCase().includes(q) ||
            d.kode.toLowerCase().includes(q)) &&
           (filter==="Semua" || kondisiDisplay(d)===filter);
  });

  const handleAdd = (form) => {
    const newId   = Math.max(...data.map(d=>d.id)) + 1;
    const newKode = `DI-${String(newId).padStart(3,"0")}`;
    const today   = new Date().toISOString().slice(0,10);
    setData(prev=>[...prev, { id:newId, kode:newKode, ...form, lastUpdate:today }]);
    setFormMode(null);
    showToast(`✅ Data "${form.nama}" berhasil ditambahkan!`);
  };

  const handleEdit = (form) => {
    setData(prev=>prev.map(d=> d.id===editTarget.id
      ? { ...d, ...form, lastUpdate:new Date().toISOString().slice(0,10) } : d));
    setFormMode(null);
    setEditTarget(null);
    showToast(`✅ Data "${form.nama}" berhasil diperbarui!`);
  };

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div style={{ position:"fixed", bottom:28, right:28, zIndex:2000,
          background:C.blueDark, color:C.white, padding:"12px 20px",
          borderRadius:10, fontSize:13, fontWeight:600,
          boxShadow:"0 8px 24px rgba(0,0,0,.25)" }}>
          {toast}
        </div>
      )}

      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
        <div>
          <h2 style={{ fontSize:22, fontWeight:800, color:C.gray900, margin:0 }}>Data Jaringan Irigasi</h2>
          <p style={{ color:C.gray500, fontSize:14, marginTop:4 }}>Bidang SDA — Dinas PUPR Kab. Donggala</p>
        </div>
        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
          {/* Pemilihan Tahun */}
          <div style={{ display:"flex", alignItems:"center", gap:8,
            background:C.white, border:`1.5px solid ${C.gray300}`, borderRadius:9,
            padding:"8px 14px", boxShadow:"0 1px 4px rgba(0,0,0,.06)" }}>
            <span style={{ fontSize:15 }}>📅</span>
            <span style={{ fontSize:12, fontWeight:600, color:C.gray700 }}>Tahun Data:</span>
            <select value={tahun} onChange={e=>setTahun(e.target.value)}
              style={{ border:"none", outline:"none", fontSize:13, fontWeight:700,
                color:C.blueMid, background:"transparent", cursor:"pointer" }}>
              {["2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040"].map(y=>(
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          {user?.role === "admin" && (
          <button onClick={()=>setFormMode("add")}
            style={{ background:C.orange, color:C.white, border:"none", borderRadius:9,
              padding:"10px 18px", fontSize:13, fontWeight:700, cursor:"pointer",
              boxShadow:`0 4px 12px rgba(247,148,29,.3)` }}>
            ＋ Tambah Data
          </button>
          )}
        </div>
      </div>

      {/* Banner info tahun — beda tampilan untuk tahun lampau vs tahun aktif/mendatang */}
      {parseInt(tahun) <= 2026 ? (
        <div style={{ background:C.blueLight, border:`1px solid #C7D7F5`, borderRadius:9,
          padding:"10px 16px", marginBottom:16, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontSize:16 }}>ℹ️</span>
          <span style={{ fontSize:13, color:C.blueMid, fontWeight:600 }}>
            Menampilkan data kondisi jaringan irigasi Tahun <strong>{tahun}</strong> — Kabupaten Donggala
          </span>
        </div>
      ) : (
        <div style={{ background:"#FFF7ED", border:`1px solid #FED7AA`, borderRadius:9,
          padding:"12px 16px", marginBottom:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
            <span style={{ fontSize:16 }}>🔄</span>
            <span style={{ fontSize:13, color:"#C2410C", fontWeight:700 }}>
              Tahun {tahun} — Mode Pemutakhiran Data
            </span>
          </div>
          <p style={{ fontSize:12, color:"#92400E", margin:0, lineHeight:1.6 }}>
            Data yang ditampilkan adalah data terakhir yang tersedia. Gunakan tombol <strong>＋ Tambah Data</strong> untuk menambahkan
            daerah irigasi baru, atau tombol <strong>Edit</strong> pada setiap baris untuk memperbarui data kondisi sesuai
            hasil survei/IKSI Tahun {tahun}.
          </p>
        </div>
      )}
      <div style={{ display:"flex", flexWrap:"wrap", gap:10, alignItems:"center", marginBottom:16 }}>
        <div style={{ position:"relative", flex:1, minWidth:200 }}>
          <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)",
            fontSize:15, color:C.gray500 }}>🔍</span>
          <input value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="Cari nama, kecamatan, kode..."
            style={{ width:"100%", padding:"9px 12px 9px 36px", border:`1.5px solid ${C.gray300}`,
              borderRadius:9, fontSize:13, outline:"none", boxSizing:"border-box" }}/>
        </div>
        {["Semua","Baik","Rusak Ringan","Rusak Sedang","Rusak Berat","Belum Didata"].map(f=>(
          <button key={f} onClick={()=>setFilter(f)}
            style={{ padding:"8px 14px", borderRadius:8, fontSize:12, fontWeight:600,
              cursor:"pointer", transition:"all .15s",
              border:`1.5px solid ${filter===f?C.blueMid:C.gray300}`,
              background:filter===f?C.blueLight:C.white,
              color:filter===f?C.blueMid:C.gray500 }}>
            {f}
          </button>
        ))}
      </div>

      <div style={{ background:C.white, borderRadius:14, boxShadow:"0 2px 12px rgba(0,48,135,.08)",
        overflow:"hidden" }}>
        <div style={{ overflowX:"auto" }}>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead>
              <tr style={{ background:`linear-gradient(90deg,${C.blueDark},${C.blueMid})` }}>
                {["Kode","Nama D.I.","Kecamatan","Luas D.I.\n(Ha)","Luas Sawah\n(Ha)","Bendung\nKondisi","Bendung\nNilai (%)","Sal. Primer\nKondisi","Sal. Primer\nNilai (%)","Sal. Sekunder\nKondisi","Sal. Sekunder\nNilai (%)","Sal. Tersier\nKondisi","Sal. Tersier\nNilai (%)","Rata-rata\nJaringan","Nilai Rata-rata\n(%)","Status","Aksi"].map(h=>(
                  <th key={h} style={{ padding:"10px 12px", textAlign:"left", color:C.white,
                    fontWeight:700, fontSize:11, whiteSpace:"pre-line", lineHeight:1.3 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length===0 ? (
                <tr><td colSpan={17} style={{ textAlign:"center", padding:40, color:C.gray500 }}>
                  Tidak ada data ditemukan
                </td></tr>
              ) : filtered.map((d,i)=>(
                <tr key={d.id}
                  style={{ background:i%2===0?C.white:C.gray50, borderBottom:`1px solid ${C.gray100}`,
                    transition:"background .1s" }}
                  onMouseEnter={e=>e.currentTarget.style.background=C.blueLight}
                  onMouseLeave={e=>e.currentTarget.style.background=i%2===0?C.white:C.gray50}>
                  <td style={{ padding:"10px 12px", fontWeight:600, color:C.blueMid, whiteSpace:"nowrap" }}>{d.kode}</td>
                  <td style={{ padding:"10px 12px", fontWeight:600, color:C.gray900, whiteSpace:"nowrap" }}>{d.nama}</td>
                  <td style={{ padding:"10px 12px", color:C.gray700, whiteSpace:"nowrap" }}>{d.kecamatan}</td>
                  <td style={{ padding:"10px 12px", color:C.gray700, textAlign:"right" }}>{d.luasDI.toLocaleString()}</td>
                  <td style={{ padding:"10px 12px", color:C.gray700, textAlign:"right" }}>{d.luasSawah > 0 ? d.luasSawah.toLocaleString() : "-"}</td>
                  <td style={{ padding:"10px 12px" }}>{d.bendungKondisi ? <Badge label={d.bendungKondisi} map={kondisiWarna}/> : <span style={{color:C.gray300,fontSize:11}}>—</span>}</td>
                  <td style={{ padding:"10px 12px", color:C.gray700, textAlign:"right" }}>{d.bendungNilai > 0 ? d.bendungNilai.toFixed(2)+"%" : "—"}</td>
                  <td style={{ padding:"10px 12px" }}>{d.salPrimerKondisi ? <Badge label={d.salPrimerKondisi} map={kondisiWarna}/> : <span style={{color:C.gray300,fontSize:11}}>—</span>}</td>
                  <td style={{ padding:"10px 12px", color:C.gray700, textAlign:"right" }}>{d.salPrimerNilai > 0 ? d.salPrimerNilai.toFixed(2)+"%" : "—"}</td>
                  <td style={{ padding:"10px 12px" }}>{d.salSekunderKondisi ? <Badge label={d.salSekunderKondisi} map={kondisiWarna}/> : <span style={{color:C.gray300,fontSize:11}}>—</span>}</td>
                  <td style={{ padding:"10px 12px", color:C.gray700, textAlign:"right" }}>{d.salSekunderNilai > 0 ? d.salSekunderNilai.toFixed(2)+"%" : "—"}</td>
                  <td style={{ padding:"10px 12px" }}>{d.salTersierKondisi ? <Badge label={d.salTersierKondisi} map={kondisiWarna}/> : <span style={{color:C.gray300,fontSize:11}}>—</span>}</td>
                  <td style={{ padding:"10px 12px", color:C.gray700, textAlign:"right" }}>{d.salTersierNilai > 0 ? d.salTersierNilai.toFixed(2)+"%" : "—"}</td>
                  <td style={{ padding:"10px 12px" }}><Badge label={kondisiDisplay(d)} map={kondisiWarna}/></td>
                  <td style={{ padding:"10px 12px", color:C.gray700, textAlign:"right", fontWeight:700 }}>{d.nilaiJaringan > 0 ? d.nilaiJaringan.toFixed(2)+"%" : "—"}</td>
                  <td style={{ padding:"10px 12px" }}><Badge label={d.status} map={statusWarna}/></td>
                  <td style={{ padding:"10px 12px" }}>
                    <div style={{ display:"flex", gap:6 }}>
                      <button onClick={()=>setSelected(d)}
                        style={{ padding:"5px 10px", borderRadius:6, border:`1px solid ${C.blueMid}`,
                          background:C.blueLight, color:C.blueMid, cursor:"pointer",
                          fontSize:11, fontWeight:600 }}>Detail</button>
                      {user?.role === "admin" && (
                      <button onClick={()=>{ setEditTarget(d); setFormMode("edit"); }}
                        style={{ padding:"5px 10px", borderRadius:6,
                          border:`1px solid ${C.orange}`, background:C.orangeLight,
                          color:C.orange, cursor:"pointer", fontSize:11, fontWeight:600 }}>Edit</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ padding:"12px 16px", background:C.gray50, borderTop:`1px solid ${C.gray100}`,
          fontSize:12, color:C.gray500 }}>
          Menampilkan {filtered.length} dari {data.length} daerah irigasi — Kab. Donggala
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,.45)",
          display:"flex", alignItems:"center", justifyContent:"center", zIndex:999 }}
          onClick={()=>setSelected(null)}>
          <div style={{ background:C.white, borderRadius:16, width:500, maxWidth:"92vw",
            boxShadow:"0 24px 60px rgba(0,0,0,.3)", overflow:"hidden" }}
            onClick={e=>e.stopPropagation()}>
            <div style={{ background:`linear-gradient(135deg,${C.blueDark},${C.blueMid})`,
              padding:"20px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div>
                <div style={{ color:C.orange, fontSize:12, fontWeight:700 }}>{selected.kode}</div>
                <div style={{ color:C.white, fontSize:17, fontWeight:800, marginTop:2 }}>{selected.nama}</div>
              </div>
              <button onClick={()=>setSelected(null)}
                style={{ background:"rgba(255,255,255,.15)", border:"none", color:C.white,
                  borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:13 }}>✕</button>
            </div>
            <div style={{ padding:24 }}>
              {[
                ["Kecamatan",              selected.kecamatan],
                ["Luas D.I. (Permen)",     `${selected.luasDI.toLocaleString()} Ha`],
                ["Luas Sawah/Fungsional",  selected.luasSawah > 0 ? `${selected.luasSawah.toLocaleString()} Ha` : "Data tidak tersedia"],
              ].map(([label,val])=>(
                <div key={label} style={{ display:"flex", justifyContent:"space-between",
                  alignItems:"center", paddingBottom:8, marginBottom:8,
                  borderBottom:`1px solid ${C.gray100}` }}>
                  <span style={{ fontSize:13, color:C.gray500 }}>{label}</span>
                  <span style={{ fontSize:13, fontWeight:600, color:C.gray900 }}>{val}</span>
                </div>
              ))}
              <div style={{ fontSize:12, fontWeight:700, color:C.blueMid, marginTop:12, marginBottom:8,
                textTransform:"uppercase", letterSpacing:1 }}>Kondisi Fisik Jaringan Irigasi</div>
              {[
                ["Bendung",        selected.bendungKondisi,      selected.bendungNilai],
                ["Sal. Primer",    selected.salPrimerKondisi,    selected.salPrimerNilai],
                ["Sal. Sekunder",  selected.salSekunderKondisi,  selected.salSekunderNilai],
                ["Sal. Tersier",   selected.salTersierKondisi,   selected.salTersierNilai],
              ].map(([label,kond,nilai])=>(
                <div key={label} style={{ display:"flex", justifyContent:"space-between",
                  alignItems:"center", paddingBottom:8, marginBottom:8,
                  borderBottom:`1px solid ${C.gray100}` }}>
                  <span style={{ fontSize:13, color:C.gray500 }}>{label}</span>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    {kond ? <Badge label={kond} map={kondisiWarna}/> : <span style={{fontSize:12,color:C.gray300}}>—</span>}
                    <span style={{ fontSize:12, color:C.gray500 }}>{nilai > 0 ? nilai.toFixed(2)+"%" : ""}</span>
                  </div>
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"space-between",
                alignItems:"center", paddingBottom:8, marginBottom:8,
                borderBottom:`1px solid ${C.gray100}`, background:C.blueLight,
                margin:"0 -8px 8px", padding:"8px 8px", borderRadius:6 }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.blueDark }}>Rata-rata Jaringan</span>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <Badge label={kondisiDisplay(selected)} map={kondisiWarna}/>
                  <span style={{ fontSize:13, fontWeight:700, color:C.blueDark }}>
                    {selected.nilaiJaringan > 0 ? selected.nilaiJaringan.toFixed(2)+"%" : "—"}
                  </span>
                </div>
              </div>
              {[
                ["Status",    null, <Badge label={selected.status} map={statusWarna}/>],
                ["Sumber Data","e-PAKSI / IKSI", null],
                ["Tahun Data", tahun, null],
              ].map(([label,val,node])=>(
                <div key={label} style={{ display:"flex", justifyContent:"space-between",
                  alignItems:"center", paddingBottom:8, marginBottom:8,
                  borderBottom:`1px solid ${C.gray100}` }}>
                  <span style={{ fontSize:13, color:C.gray500 }}>{label}</span>
                  {node || <span style={{ fontSize:13, fontWeight:600, color:C.gray900 }}>{val}</span>}
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"flex-end", marginTop:8 }}>
                {user?.role === "admin" && (
                <button onClick={()=>{ setSelected(null); setEditTarget(selected); setFormMode("edit"); }}
                  style={{ padding:"9px 20px", borderRadius:8, border:"none",
                    background:C.orange, color:C.white, cursor:"pointer",
                    fontSize:13, fontWeight:700 }}>✏️ Edit Data Ini</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {formMode && (
        <FormModal
          mode={formMode}
          data={editTarget}
          onSave={formMode==="add" ? handleAdd : handleEdit}
          onClose={()=>{ setFormMode(null); setEditTarget(null); }}
        />
      )}
    </div>
  );
}

function PlaceholderPage({ icon, title, desc }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center",
      justifyContent:"center", height:"60vh", textAlign:"center" }}>
      <div style={{ fontSize:56, marginBottom:16 }}>{icon}</div>
      <div style={{ fontSize:20, fontWeight:700, color:C.gray700, marginBottom:8 }}>{title}</div>
      <div style={{ fontSize:14, color:C.gray500, marginBottom:16 }}>{desc}</div>
      <div style={{ padding:"8px 20px", background:C.blueLight, borderRadius:8,
        fontSize:13, color:C.blueMid, fontWeight:600 }}>Segera Hadir</div>
    </div>
  );
}

// ── APP ──────────────────────────────────────────────────────────
export default function App() {
  const [user,      setUser]      = useState(null);
  const [active,    setActive]    = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  if (!user) return <LoginPage onLogin={setUser} />;

  const renderPage = () => {
    if (active==="dashboard") return <Dashboard />;
    if (active==="data")      return <DataPage user={user} />;
    if (active==="sungai")    return <PlaceholderPage icon="🌊" title="Data Sungai & Pantai"    desc="Basis data kondisi sungai dan garis pantai Kab. Donggala" />;
    if (active==="peta")      return <PlaceholderPage icon="🗺️" title="Peta Sebaran Irigasi"    desc="Visualisasi spasial jaringan irigasi Kab. Donggala" />;
    if (active==="laporan")   return <PlaceholderPage icon="📋" title="Modul Laporan"         desc="Cetak dan ekspor laporan kondisi jaringan irigasi"  />;
    if (active==="pengguna")  return <PlaceholderPage icon="👥" title="Manajemen Pengguna"    desc="Kelola akun dan hak akses pengguna sistem"          />;
  };

  return (
    <div style={{ display:"flex", minHeight:"100vh",
      fontFamily:"'Segoe UI','Helvetica Neue',sans-serif", background:C.gray50, position:"relative" }}>
      <Sidebar active={active} setActive={setActive} user={user}
        onLogout={()=>{ setUser(null); setActive("dashboard"); }}
        collapsed={collapsed} setCollapsed={setCollapsed} />

      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        <div style={{ background:C.white, padding:"0 28px", height:58,
          display:"flex", alignItems:"center", justifyContent:"space-between",
          boxShadow:"0 1px 6px rgba(0,0,0,.07)", flexShrink:0 }}>
          <div style={{ fontSize:13, color:C.blueMid, fontWeight:600 }}>
            {menus.find(m=>m.key===active)?.icon}{" "}
            {menus.find(m=>m.key===active)?.label}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <div style={{ fontSize:12, color:C.gray500 }}>
              {new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}
            </div>
            <div style={{ width:34, height:34, borderRadius:"50%", background:C.orange,
              display:"flex", alignItems:"center", justifyContent:"center",
              color:C.white, fontWeight:800, fontSize:14 }}>
              {user.nama[0]}
            </div>
          </div>
        </div>
        <main style={{ flex:1, padding:28, overflowY:"auto" }}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
