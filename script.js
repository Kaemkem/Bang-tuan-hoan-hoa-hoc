const elements = [
{number:1,symbol:"H",name:"Hydrogen",mass:"1.008",type:"Phi kim",group:1,period:1,x:1,y:1,color:"#FFB6C1"},
{number:2,symbol:"He",name:"Helium",mass:"4.0026",type:"Khí hiếm",group:18,period:1,x:18,y:1,color:"#90EE90"},
{number:3,symbol:"Li",name:"Lithium",mass:"6.94",type:"Kim loại",group:1,period:2,x:1,y:2,color:"#87CEFA"},
{number:4,symbol:"Be",name:"Beryllium",mass:"9.0122",type:"Kim loại",group:2,period:2,x:2,y:2,color:"#87CEFA"},
{number:5,symbol:"B",name:"Boron",mass:"10.81",type:"Phi kim",group:13,period:2,x:13,y:2,color:"#FFB6C1"},
{number:6,symbol:"C",name:"Carbon",mass:"12.011",type:"Phi kim",group:14,period:2,x:14,y:2,color:"#FFB6C1"},
{number:7,symbol:"N",name:"Nitrogen",mass:"14.007",type:"Phi kim",group:15,period:2,x:15,y:2,color:"#FFB6C1"},
{number:8,symbol:"O",name:"Oxygen",mass:"15.999",type:"Phi kim",group:16,period:2,x:16,y:2,color:"#FFB6C1"},
{number:9,symbol:"F",name:"Fluorine",mass:"18.998",type:"Halogen",group:17,period:2,x:17,y:2,color:"#FFB6C1"},
{number:10,symbol:"Ne",name:"Neon",mass:"20.180",type:"Khí hiếm",group:18,period:2,x:18,y:2,color:"#90EE90"},
{number:11,symbol:"Na",name:"Sodium",mass:"22.990",type:"Kim loại",group:1,period:3,x:1,y:3,color:"#87CEFA"},
{number:12,symbol:"Mg",name:"Magnesium",mass:"24.305",type:"Kim loại",group:2,period:3,x:2,y:3,color:"#87CEFA"},
{number:13,symbol:"Al",name:"Aluminium",mass:"26.982",type:"Kim loại chuyển tiếp",group:13,period:3,x:13,y:3,color:"#87CEFA"},
{number:14,symbol:"Si",name:"Silicon",mass:"28.085",type:"Phi kim",group:14,period:3,x:14,y:3,color:"#FFB6C1"},
{number:15,symbol:"P",name:"Phosphorus",mass:"30.974",type:"Phi kim",group:15,period:3,x:15,y:3,color:"#FFB6C1"},
{number:16,symbol:"S",name:"Sulfur",mass:"32.06",type:"Phi kim",group:16,period:3,x:16,y:3,color:"#FFB6C1"},
{number:17,symbol:"Cl",name:"Chlorine",mass:"35.45",type:"Halogen",group:17,period:3,x:17,y:3,color:"#FFB6C1"},
{number:18,symbol:"Ar",name:"Argon",mass:"39.948",type:"Khí hiếm",group:18,period:3,x:18,y:3,color:"#90EE90"},
{number:19,symbol:"K",name:"Potassium",mass:"39.098",type:"Kim loại",group:1,period:4,x:1,y:4,color:"#87CEFA"},
{number:20,symbol:"Ca",name:"Calcium",mass:"40.078",type:"Kim loại",group:2,period:4,x:2,y:4,color:"#87CEFA"},
{number:21,symbol:"Sc",name:"Scandium",mass:"44.956",type:"Kim loại chuyển tiếp",group:3,period:4,x:3,y:4,color:"#FFD700"},
{number:22,symbol:"Ti",name:"Titanium",mass:"47.867",type:"Kim loại chuyển tiếp",group:4,period:4,x:4,y:4,color:"#FFD700"},
{number:23,symbol:"V",name:"Vanadium",mass:"50.942",type:"Kim loại chuyển tiếp",group:5,period:4,x:5,y:4,color:"#FFD700"},
{number:24,symbol:"Cr",name:"Chromium",mass:"51.996",type:"Kim loại chuyển tiếp",group:6,period:4,x:6,y:4,color:"#FFD700"},
{number:25,symbol:"Mn",name:"Manganese",mass:"54.938",type:"Kim loại chuyển tiếp",group:7,period:4,x:7,y:4,color:"#FFD700"},
{number:26,symbol:"Fe",name:"Iron",mass:"55.845",type:"Kim loại chuyển tiếp",group:8,period:4,x:8,y:4,color:"#FFD700"},
{number:27,symbol:"Co",name:"Cobalt",mass:"58.933",type:"Kim loại chuyển tiếp",group:9,period:4,x:9,y:4,color:"#FFD700"},
{number:28,symbol:"Ni",name:"Nickel",mass:"58.693",type:"Kim loại chuyển tiếp",group:10,period:4,x:10,y:4,color:"#FFD700"},
{number:29,symbol:"Cu",name:"Copper",mass:"63.546",type:"Kim loại chuyển tiếp",group:11,period:4,x:11,y:4,color:"#FFD700"},
{number:30,symbol:"Zn",name:"Zinc",mass:"65.38",type:"Kim loại chuyển tiếp",group:12,period:4,x:12,y:4,color:"#FFD700"},
{number:31,symbol:"Ga",name:"Gallium",mass:"69.723",type:"Kim loại",group:13,period:4,x:13,y:4,color:"#87CEFA"},
{number:32,symbol:"Ge",name:"Germanium",mass:"72.630",type:"Phi kim",group:14,period:4,x:14,y:4,color:"#FFB6C1"},
{number:33,symbol:"As",name:"Arsenic",mass:"74.922",type:"Phi kim",group:15,period:4,x:15,y:4,color:"#FFB6C1"},
{number:34,symbol:"Se",name:"Selenium",mass:"78.971",type:"Phi kim",group:16,period:4,x:16,y:4,color:"#FFB6C1"},
{number:35,symbol:"Br",name:"Bromine",mass:"79.904",type:"Halogen",group:17,period:4,x:17,y:4,color:"#FFB6C1"},
{number:36,symbol:"Kr",name:"Krypton",mass:"83.798",type:"Khí hiếm",group:18,period:4,x:18,y:4,color:"#90EE90"},
{number:37,symbol:"Rb",name:"Rubidium",mass:"85.468",type:"Kim loại",group:1,period:5,x:1,y:5,color:"#87CEFA"},
{number:38,symbol:"Sr",name:"Strontium",mass:"87.62",type:"Kim loại",group:2,period:5,x:2,y:5,color:"#87CEFA"},
{number:39,symbol:"Y",name:"Yttrium",mass:"88.906",type:"Kim loại chuyển tiếp",group:3,period:5,x:3,y:5,color:"#FFD700"},
{number:40,symbol:"Zr",name:"Zirconium",mass:"91.224",type:"Kim loại chuyển tiếp",group:4,period:5,x:4,y:5,color:"#FFD700"},
{number:41,symbol:"Nb",name:"Niobium",mass:"92.906",type:"Kim loại chuyển tiếp",group:5,period:5,x:5,y:5,color:"#FFD700"},
{number:42,symbol:"Mo",name:"Molybdenum",mass:"95.95",type:"Kim loại chuyển tiếp",group:6,period:5,x:6,y:5,color:"#FFD700"},
{number:43,symbol:"Tc",name:"Technetium",mass:"98",type:"Kim loại chuyển tiếp",group:7,period:5,x:7,y:5,color:"#FFD700"},
{number:44,symbol:"Ru",name:"Ruthenium",mass:"101.07",type:"Kim loại chuyển tiếp",group:8,period:5,x:8,y:5,color:"#FFD700"},
{number:45,symbol:"Rh",name:"Rhodium",mass:"102.91",type:"Kim loại chuyển tiếp",group:9,period:5,x:9,y:5,color:"#FFD700"},
{number:46,symbol:"Pd",name:"Palladium",mass:"106.42",type:"Kim loại chuyển tiếp",group:10,period:5,x:10,y:5,color:"#FFD700"},
{number:47,symbol:"Ag",name:"Silver",mass:"107.87",type:"Kim loại chuyển tiếp",group:11,period:5,x:11,y:5,color:"#FFD700"},
{number:48,symbol:"Cd",name:"Cadmium",mass:"112.41",type:"Kim loại chuyển tiếp",group:12,period:5,x:12,y:5,color:"#FFD700"},
{number:49,symbol:"In",name:"Indium",mass:"114.82",type:"Kim loại",group:13,period:5,x:13,y:5,color:"#87CEFA"},
{number:50,symbol:"Sn",name:"Tin",mass:"118.71",type:"Kim loại",group:14,period:5,x:14,y:5,color:"#87CEFA"},
{number:51,symbol:"Sb",name:"Antimony",mass:"121.76",type:"Phi kim",group:15,period:5,x:15,y:5,color:"#FFB6C1"},
{number:52,symbol:"Te",name:"Tellurium",mass:"127.60",type:"Phi kim",group:16,period:5,x:16,y:5,color:"#FFB6C1"},
{number:53,symbol:"I",name:"Iodine",mass:"126.90",type:"Halogen",group:17,period:5,x:17,y:5,color:"#FFB6C1"},
{number:54,symbol:"Xe",name:"Xenon",mass:"131.29",type:"Khí hiếm",group:18,period:5,x:18,y:5,color:"#90EE90"},
{number:55,symbol:"Cs",name:"Cesium",mass:"132.91",type:"Kim loại",group:1,period:6,x:1,y:6,color:"#87CEFA"},
{number:56,symbol:"Ba",name:"Barium",mass:"137.33",type:"Kim loại",group:2,period:6,x:2,y:6,color:"#87CEFA"},
{number:57,symbol:"La",name:"Lanthanum",mass:"138.91",type:"Kim loại chuyển tiếp",group:3,period:6,x:4,y:8,color:"#FFD700"},
{number:58,symbol:"Ce",name:"Cerium",mass:"140.12",type:"Kim loại chuyển tiếp",group:3,period:6,x:5,y:8,color:"#FFD700"},
{number:59,symbol:"Pr",name:"Praseodymium",mass:"140.91",type:"Kim loại chuyển tiếp",group:3,period:6,x:6,y:8,color:"#FFD700"},
{number:60,symbol:"Nd",name:"Neodymium",mass:"144.24",type:"Kim loại chuyển tiếp",group:3,period:6,x:7,y:8,color:"#FFD700"},
{number:61,symbol:"Pm",name:"Promethium",mass:"145",type:"Kim loại chuyển tiếp",group:3,period:6,x:8,y:8,color:"#FFD700"},
{number:62,symbol:"Sm",name:"Samarium",mass:"150.36",type:"Kim loại chuyển tiếp",group:3,period:6,x:9,y:8,color:"#FFD700"},
{number:63,symbol:"Eu",name:"Europium",mass:"151.96",type:"Kim loại chuyển tiếp",group:3,period:6,x:10,y:8,color:"#FFD700"},
{number:64,symbol:"Gd",name:"Gadolinium",mass:"157.25",type:"Kim loại chuyển tiếp",group:3,period:6,x:11,y:8,color:"#FFD700"},
{number:65,symbol:"Tb",name:"Terbium",mass:"158.93",type:"Kim loại chuyển tiếp",group:3,period:6,x:12,y:8,color:"#FFD700"},
{number:66,symbol:"Dy",name:"Dysprosium",mass:"162.50",type:"Kim loại chuyển tiếp",group:3,period:6,x:13,y:8,color:"#FFD700"},
{number:67,symbol:"Ho",name:"Holmium",mass:"164.93",type:"Kim loại chuyển tiếp",group:3,period:6,x:14,y:8,color:"#FFD700"},
{number:68,symbol:"Er",name:"Erbium",mass:"167.26",type:"Kim loại chuyển tiếp",group:3,period:6,x:15,y:8,color:"#FFD700"},
{number:69,symbol:"Tm",name:"Thulium",mass:"168.93",type:"Kim loại chuyển tiếp",group:3,period:6,x:16,y:8,color:"#FFD700"},
{number:70,symbol:"Yb",name:"Ytterbium",mass:"173.05",type:"Kim loại chuyển tiếp",group:3,period:6,x:17,y:8,color:"#FFD700"},
{number:71,symbol:"Lu",name:"Lutetium",mass:"174.97",type:"Kim loại chuyển tiếp",group:3,period:6,x:18,y:8,color:"#FFD700"},
{number:72,symbol:"Hf",name:"Hafnium",mass:"178.49",type:"Kim loại chuyển tiếp",group:4,period:6,x:4,y:6,color:"#FFD700"},
{number:73,symbol:"Ta",name:"Tantalum",mass:"180.95",type:"Kim loại chuyển tiếp",group:5,period:6,x:5,y:6,color:"#FFD700"},
{number:74,symbol:"W",name:"Tungsten",mass:"183.84",type:"Kim loại chuyển tiếp",group:6,period:6,x:6,y:6,color:"#FFD700"},
{number:75,symbol:"Re",name:"Rhenium",mass:"186.21",type:"Kim loại chuyển tiếp",group:7,period:6,x:7,y:6,color:"#FFD700"},
{number:76,symbol:"Os",name:"Osmium",mass:"190.23",type:"Kim loại chuyển tiếp",group:8,period:6,x:8,y:6,color:"#FFD700"},
{number:77,symbol:"Ir",name:"Iridium",mass:"192.22",type:"Kim loại chuyển tiếp",group:9,period:6,x:9,y:6,color:"#FFD700"},
{number:78,symbol:"Pt",name:"Platinum",mass:"195.08",type:"Kim loại chuyển tiếp",group:10,period:6,x:10,y:6,color:"#FFD700"},
{number:79,symbol:"Au",name:"Gold",mass:"196.97",type:"Kim loại chuyển tiếp",group:11,period:6,x:11,y:6,color:"#FFD700"},
{number:80,symbol:"Hg",name:"Mercury",mass:"200.59",type:"Kim loại chuyển tiếp",group:12,period:6,x:12,y:6,color:"#FFD700"},
{number:81,symbol:"Tl",name:"Thallium",mass:"204.38",type:"Kim loại",group:13,period:6,x:13,y:6,color:"#87CEFA"},
{number:82,symbol:"Pb",name:"Lead",mass:"207.2",type:"Kim loại",group:14,period:6,x:14,y:6,color:"#87CEFA"},
{number:83,symbol:"Bi",name:"Bismuth",mass:"208.98",type:"Kim loại",group:15,period:6,x:15,y:6,color:"#87CEFA"},
{number:84,symbol:"Po",name:"Polonium",mass:"209",type:"Phi kim",group:16,period:6,x:16,y:6,color:"#FFB6C1"},
{number:85,symbol:"At",name:"Astatine",mass:"210",type:"Halogen",group:17,period:6,x:17,y:6,color:"#FFB6C1"},
{number:86,symbol:"Rn",name:"Radon",mass:"222",type:"Khí hiếm",group:18,period:6,x:18,y:6,color:"#90EE90"},
{number:87,symbol:"Fr",name:"Francium",mass:"223",type:"Kim loại",group:1,period:7,x:1,y:7,color:"#87CEFA"},
{number:88,symbol:"Ra",name:"Radium",mass:"226",type:"Kim loại",group:2,period:7,x:2,y:7,color:"#87CEFA"},
{number:89,symbol:"Ac",name:"Actinium",mass:"227",type:"Kim loại chuyển tiếp",group:3,period:7,x:4,y:9,color:"#FFD700"},
{number:90,symbol:"Th",name:"Thorium",mass:"232.04",type:"Kim loại chuyển tiếp",group:3,period:7,x:5,y:9,color:"#FFD700"},
{number:91,symbol:"Pa",name:"Protactinium",mass:"231.04",type:"Kim loại chuyển tiếp",group:3,period:7,x:6,y:9,color:"#FFD700"},
{number:92,symbol:"U",name:"Uranium",mass:"238.03",type:"Kim loại chuyển tiếp",group:3,period:7,x:7,y:9,color:"#FFD700"},
{number:93,symbol:"Np",name:"Neptunium",mass:"237",type:"Kim loại chuyển tiếp",group:3,period:7,x:8,y:9,color:"#FFD700"},
{number:94,symbol:"Pu",name:"Plutonium",mass:"244",type:"Kim loại chuyển tiếp",group:3,period:7,x:9,y:9,color:"#FFD700"},
{number:95,symbol:"Am",name:"Americium",mass:"243",type:"Kim loại chuyển tiếp",group:3,period:7,x:10,y:9,color:"#FFD700"},
{number:96,symbol:"Cm",name:"Curium",mass:"247",type:"Kim loại chuyển tiếp",group:3,period:7,x:11,y:9,color:"#FFD700"},
{number:97,symbol:"Bk",name:"Berkelium",mass:"247",type:"Kim loại chuyển tiếp",group:3,period:7,x:12,y:9,color:"#FFD700"},
{number:98,symbol:"Cf",name:"Californium",mass:"251",type:"Kim loại chuyển tiếp",group:3,period:7,x:13,y:9,color:"#FFD700"},
{number:99,symbol:"Es",name:"Einsteinium",mass:"252",type:"Kim loại chuyển tiếp",group:3,period:7,x:14,y:9,color:"#FFD700"},
{number:100,symbol:"Fm",name:"Fermium",mass:"257",type:"Kim loại chuyển tiếp",group:3,period:7,x:15,y:9,color:"#FFD700"},
{number:101,symbol:"Md",name:"Mendelevium",mass:"258",type:"Kim loại chuyển tiếp",group:3,period:7,x:16,y:9,color:"#FFD700"},
{number:102,symbol:"No",name:"Nobelium",mass:"259",type:"Kim loại chuyển tiếp",group:3,period:7,x:17,y:9,color:"#FFD700"},
{number:103,symbol:"Lr",name:"Lawrencium",mass:"262",type:"Kim loại chuyển tiếp",group:3,period:7,x:18,y:9,color:"#FFD700"},
{number:104,symbol:"Rf",name:"Rutherfordium",mass:"267",type:"Kim loại chuyển tiếp",group:4,period:7,x:4,y:7,color:"#FFD700"},
{number:105,symbol:"Db",name:"Dubnium",mass:"270",type:"Kim loại chuyển tiếp",group:5,period:7,x:5,y:7,color:"#FFD700"},
{number:106,symbol:"Sg",name:"Seaborgium",mass:"271",type:"Kim loại chuyển tiếp",group:6,period:7,x:6,y:7,color:"#FFD700"},
{number:107,symbol:"Bh",name:"Bohrium",mass:"270",type:"Kim loại chuyển tiếp",group:7,period:7,x:7,y:7,color:"#FFD700"},
{number:108,symbol:"Hs",name:"Hassium",mass:"277",type:"Kim loại chuyển tiếp",group:8,period:7,x:8,y:7,color:"#FFD700"},
{number:109,symbol:"Mt",name:"Meitnerium",mass:"278",type:"Kim loại chuyển tiếp",group:9,period:7,x:9,y:7,color:"#FFD700"},
{number:110,symbol:"Ds",name:"Darmstadtium",mass:"281",type:"Kim loại chuyển tiếp",group:10,period:7,x:10,y:7,color:"#FFD700"},
{number:111,symbol:"Rg",name:"Roentgenium",mass:"282",type:"Kim loại chuyển tiếp",group:11,period:7,x:11,y:7,color:"#FFD700"},
{number:112,symbol:"Cn",name:"Copernicium",mass:"285",type:"Kim loại chuyển tiếp",group:12,period:7,x:12,y:7,color:"#FFD700"},
{number:113,symbol:"Nh",name:"Nihonium",mass:"286",type:"Kim loại",group:13,period:7,x:13,y:7,color:"#87CEFA"},
{number:114,symbol:"Fl",name:"Flerovium",mass:"289",type:"Kim loại",group:14,period:7,x:14,y:7,color:"#87CEFA"},
{number:115,symbol:"Mc",name:"Moscovium",mass:"288",type:"Kim loại",group:15,period:7,x:15,y:7,color:"#87CEFA"},
{number:116,symbol:"Lv",name:"Livermorium",mass:"293",type:"Phi kim",group:16,period:7,x:16,y:7,color:"#FFB6C1"},
{number:117,symbol:"Ts",name:"Tennessine",mass:"294",type:"Halogen",group:17,period:7,x:17,y:7,color:"#FFB6C1"},
{number:118,symbol:"Og",name:"Oganesson",mass:"294",type:"Khí hiếm",group:18,period:7,x:18,y:7,color:"#90EE90"},
]; 
 
const mainTable = document.getElementById("periodic");
const lanthActTable = document.getElementById("lanthAct");
const popup = document.getElementById("popup");
const closeBtn = popup.querySelector(".close-btn");
const canvas = document.getElementById("viewer2d");
const ctx = canvas.getContext("2d");

function renderTables(list = elements) {
  mainTable.innerHTML = "";
  lanthActTable.innerHTML = "";
  list.forEach(e=>{
    const el = document.createElement("div");
    el.className = "element";
    el.style.background = e.color;
    el.innerHTML = `<div class="number">${e.number}</div><div class="symbol">${e.symbol}</div><div class="name">${e.name}</div>`;
    el.onclick = ()=>openPopup(e);

    // Tách lanthanide 57-71 xuống lanthAct
    if(e.number>=57 && e.number<=71) {
      el.style.gridColumn = e.number-56; // 1-15
      el.style.gridRow = 1;
      lanthActTable.appendChild(el);
    } 
    // Actinide 89-103 xuống lanthAct
    else if(e.number>=89 && e.number<=103) {
      el.style.gridColumn = e.number-88; // 1-15
      el.style.gridRow = 2;
      lanthActTable.appendChild(el);
    } 
    else {
      el.style.gridColumn = e.x;
      el.style.gridRow = e.y;
      mainTable.appendChild(el);
    }
  });
}

renderTables();

document.getElementById("search").addEventListener("input", e=>{
  const key = e.target.value.toLowerCase();
  const list = elements.filter(el=>el.name.toLowerCase().includes(key)||el.symbol.toLowerCase().includes(key));
  renderTables(list);
});

closeBtn.onclick = ()=>popup.classList.remove("show");

function openPopup(e){
  popup.classList.add("show");
  document.getElementById("popup-title").innerText = `${e.name} (${e.symbol})`;
  document.getElementById("eSymbol").innerText = e.symbol;
  document.getElementById("eNumber").innerText = e.number;
  document.getElementById("eMass").innerText = e.mass;
  document.getElementById("eGroup").innerText = e.type;
  document.getElementById("eGroupNum").innerText = e.group;
  document.getElementById("ePeriod").innerText = e.period;
  drawAtom2D(e.number);
}

function drawAtom2D(Z){
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  const cx=w/2, cy=h/2;
  ctx.beginPath();
  ctx.arc(cx,cy,25,0,Math.PI*2);
  ctx.fillStyle="#FF3333";
  ctx.fill();
  const eCount = Math.min(Z,20);
  for(let i=0;i<eCount;i++){
    const r = 40 + (i%4)*18;
    const angle = (Date.now()/1000+i)*Math.PI*2/4;
    const x = cx + Math.cos(angle)*r;
    const y = cy + Math.sin(angle)*r;
    ctx.beginPath();
    ctx.arc(x,y,6,0,Math.PI*2);
    ctx.fillStyle="#55AAFF";
    ctx.fill();
  }
  requestAnimationFrame(()=>drawAtom2D(Z));
}
