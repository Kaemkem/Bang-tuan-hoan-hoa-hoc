const table = document.getElementById("periodic");

function renderTable(list = elements) {
    table.innerHTML = "";
    list.forEach(e => {
        const el = document.createElement("div");
        el.className = "element";
        el.style.gridColumn = e.x;
        el.style.gridRow = e.y;
        el.style.background = e.color;

        el.innerHTML = `
            <div class="number">${e.number}</div>
            <div class="symbol">${e.symbol}</div>
            <div class="name">${e.name}</div>
        `;

        el.onclick = () => openPopup(e);
        table.appendChild(el);
    });
}

renderTable();

/* SEARCH */
document.getElementById("search").addEventListener("input", e => {
    const key = e.target.value.toLowerCase();
    const list = elements.filter(el =>
        el.name.toLowerCase().includes(key) ||
        el.symbol.toLowerCase().includes(key)
    );
    renderTable(list);
});

/* POPUP */
const popup = document.getElementById("popup");
document.getElementById("closeBtn").onclick = () => popup.style.display = "none";

function openPopup(e) {
    popup.style.display = "flex";

    document.getElementById("eName").innerText = e.name;
    document.getElementById("eSymbol").innerText = e.symbol;
    document.getElementById("eNumber").innerText = e.number;
    document.getElementById("eMass").innerText = e.mass;
    document.getElementById("eGroup").innerText = e.type;
    document.getElementById("eDesc").innerText = e.desc;

    atom3D(e.number);
}

/* 3D ATOM (Three.js) */
let scene, camera, renderer;

function atom3D(Z) {
    const container = document.getElementById("viewer3d");
    container.innerHTML = "";

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(350, 350);
    container.appendChild(renderer.domElement);

    // Nucleus
    const nuc = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xff3333 })
    );
    scene.add(nuc);

    // Electrons
    const electrons = [];
    const eCount = Math.min(Z, 16); // tránh quá nặng

    for (let i = 0; i < eCount; i++) {
        const el = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0x55aaff })
        );
        el.orbit = 1.2 + (i % 4) * 0.35;
        el.angle = Math.random() * Math.PI * 2;
        electrons.push(el);
        scene.add(el);
    }

    scene.add(new THREE.PointLight(0xffffff, 2));

    function animate() {
        requestAnimationFrame(animate);

        electrons.forEach(el => {
            el.angle += 0.02;
            el.position.x = Math.cos(el.angle) * el.orbit;
            el.position.z = Math.sin(el.angle) * el.orbit;
        });

        renderer.render(scene, camera);
    }
    const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", mass: "1.008", type:"Phi kim", desc:"Nguyên tố nhẹ nhất", x:1, y:1, color:"#FFFFFF" },
  { number: 2, symbol: "He", name: "Helium", mass: "4.0026", type:"Khí hiếm", desc:"Khí trơ, nhẹ", x:18, y:1, color:"#D9FFFF" },

  { number: 3, symbol: "Li", name: "Lithium", mass: "6.94", type:"Kim loại kiềm", desc:"Kim loại nhẹ", x:1, y:2, color:"#CC80FF" },
  { number: 4, symbol: "Be", name: "Beryllium", mass: "9.0122", type:"Kim loại kiềm thổ", desc:"Cứng, nhẹ", x:2, y:2, color:"#C2FF00" },
  { number: 5, symbol: "B", name: "Boron", mass: "10.81", type:"Á kim", desc:"Á kim cứng", x:13, y:2, color:"#FFB5B5" },
  { number: 6, symbol: "C", name: "Carbon", mass: "12.011", type:"Phi kim", desc:"Cơ sở của sự sống", x:14, y:2, color:"#909090" },
  { number: 7, symbol: "N", name: "Nitrogen", mass: "14.007", type:"Phi kim", desc:"Chiếm 78% không khí", x:15, y:2, color:"#3050F8" },
  { number: 8, symbol: "O", name: "Oxygen", mass: "15.999", type:"Phi kim", desc:"Cần cho hô hấp", x:16, y:2, color:"#FF0D0D" },
  { number: 9, symbol: "F", name: "Fluorine", mass: "18.998", type:"Halogen", desc:"Phi kim hoạt động mạnh nhất", x:17, y:2, color:"#90E050" },
  { number:10, symbol: "Ne", name: "Neon", mass:"20.180", type:"Khí hiếm", desc:"Đèn neon", x:18, y:2, color:"#B3E3F5" },

  { number:11, symbol:"Na", name:"Sodium", mass:"22.990", type:"Kim loại kiềm", desc:"Phản ứng mạnh với nước", x:1, y:3, color:"#AB5CF2" },
  { number:12, symbol:"Mg", name:"Magnesium", mass:"24.305", type:"Kim loại kiềm thổ", desc:"Cháy sáng chói", x:2, y:3, color:"#8AFF00" },
  { number:13, symbol:"Al", name:"Aluminium", mass:"26.982", type:"Kim loại", desc:"Nhôm – nhẹ, bền", x:13, y:3, color:"#BFA6A6" },
  { number:14, symbol:"Si", name:"Silicon", mass:"28.085", type:"Á kim", desc:"Dùng trong chip", x:14, y:3, color:"#F0C8A0" },
  { number:15, symbol:"P", name:"Phosphorus", mass:"30.974", type:"Phi kim", desc:"Tồn tại dạng trắng/đỏ", x:15, y:3, color:"#FF8000" },
  { number:16, symbol:"S", name:"Sulfur", mass:"32.06", type:"Phi kim", desc:"Lưu huỳnh – vàng", x:16, y:3, color:"#FFFF30" },
  { number:17, symbol:"Cl", name:"Chlorine", mass:"35.45", type:"Halogen", desc:"Khí độc màu vàng lục", x:17, y:3, color:"#1FF01F" },
  { number:18, symbol:"Ar", name:"Argon", mass:"39.948", type:"Khí hiếm", desc:"Khí trơ", x:18, y:3, color:"#80D1E3" },

  { number:19, symbol:"K", name:"Potassium", mass:"39.0983", type:"Kim loại kiềm", desc:"Rất mềm", x:1, y:4, color:"#8F40D4" },
  { number:20, symbol:"Ca", name:"Calcium", mass:"40.078", type:"Kim loại kiềm thổ", desc:"Xương, răng", x:2, y:4, color:"#3DFF00" },

  { number:21, symbol:"Sc", name:"Scandium", mass:"44.956", type:"Kim loại chuyển tiếp", desc:"Kim loại hiếm", x:3, y:4, color:"#E6E6E6" },
  { number:22, symbol:"Ti", name:"Titanium", mass:"47.867", type:"Kim loại chuyển tiếp", desc:"Rất bền", x:4, y:4, color:"#BFC2C7" },
  { number:23, symbol:"V", name:"Vanadium", mass:"50.942", type:"Kim loại chuyển tiếp", desc:"Siêu cứng", x:5, y:4, color:"#A6A6AB" },
  { number:24, symbol:"Cr", name:"Chromium", mass:"51.996", type:"Kim loại chuyển tiếp", desc:"Mạ chrome", x:6, y:4, color:"#8A99C7" },
  { number:25, symbol:"Mn", name:"Manganese", mass:"54.938", type:"Kim loại chuyển tiếp", desc:"Thép mangan", x:7, y:4, color:"#9C7AC7" },
  { number:26, symbol:"Fe", name:"Iron", mass:"55.845", type:"Kim loại chuyển tiếp", desc:"Sắt – xây dựng", x:8, y:4, color:"#E06633" },
  { number:27, symbol:"Co", name:"Cobalt", mass:"58.933", type:"Kim loại chuyển tiếp", desc:"Nam châm", x:9, y:4, color:"#F090A0" },
  { number:28, symbol:"Ni", name:"Nickel", mass:"58.693", type:"Kim loại chuyển tiếp", desc:"Inox", x:10, y:4, color:"#50D050" },
  { number:29, symbol:"Cu", name:"Copper", mass:"63.546", type:"Kim loại chuyển tiếp", desc:"Đồng – dây điện", x:11, y:4, color:"#C88033" },
  { number:30, symbol:"Zn", name:"Zinc", mass:"65.38", type:"Kim loại chuyển tiếp", desc:"Kẽm", x:12, y:4, color:"#7D80B0" },
  { number:31, symbol:"Ga", name:"Gallium", mass:"69.723", type:"Kim loại", desc:"Tan chảy trong tay", x:13, y:4, color:"#C28F8F" },
  { number:32, symbol:"Ge", name:"Germanium", mass:"72.63", type:"Á kim", desc:"Chất bán dẫn", x:14, y:4, color:"#668F8F" },
  { number:33, symbol:"As", name:"Arsenic", mass:"74.922", type:"Á kim", desc:"Chất độc", x:15, y:4, color:"#BD80E3" },
  { number:34, symbol:"Se", name:"Selenium", mass:"78.971", type:"Phi kim", desc:"Chất dinh dưỡng vi lượng", x:16, y:4, color:"#FFA100" },
  { number:35, symbol:"Br", name:"Bromine", mass:"79.904", type:"Halogen", desc:"Chất lỏng đỏ nâu", x:17, y:4, color:"#A62929" },
  { number:36, symbol:"Kr", name:"Krypton", mass:"83.798", type:"Khí hiếm", desc:"Khí hiếm", x:18, y:4, color:"#5CB8D1" },

  { number:37, symbol:"Rb", name:"Rubidium", mass:"85.468", type:"Kim loại kiềm", desc:"Rất phản ứng", x:1, y:5, color:"#702EB0" },
  { number:38, symbol:"Sr", name:"Strontium", mass:"87.62", type:"Kim loại kiềm thổ", desc:"Cháy đỏ", x:2, y:5, color:"#00FF00" },

  { number:39, symbol:"Y", name:"Yttrium", mass:"88.906", type:"Kim loại chuyển tiếp", desc:"LED, laser", x:3, y:5, color:"#94FFFF" },
  { number:40, symbol:"Zr", name:"Zirconium", mass:"91.224", type:"Kim loại chuyển tiếp", desc:"Chịu ăn mòn", x:4, y:5, color:"#94E0E0" },
  { number:41, symbol:"Nb", name:"Niobium", mass:"92.906", type:"Kim loại chuyển tiếp", desc:"Siêu dẫn", x:5, y:5, color:"#73C2C9" },
  { number:42, symbol:"Mo", name:"Molybdenum", mass:"95.95", type:"Kim loại chuyển tiếp", desc:"Thép hợp kim", x:6, y:5, color:"#54B5B5" },
  { number:43, symbol:"Tc", name:"Technetium", mass:"98", type:"Kim loại chuyển tiếp", desc:"Phóng xạ", x:7, y:5, color:"#3B9E9E" },
  { number:44, symbol:"Ru", name:"Ruthenium", mass:"101.07", type:"Kim loại chuyển tiếp", desc:"Xúc tác", x:8, y:5, color:"#248F8F" },
  { number:45, symbol:"Rh", name:"Rhodium", mass:"102.91", type:"Kim loại chuyển tiếp", desc:"Chống ăn mòn", x:9, y:5, color:"#0A7D8C" },
  { number:46, symbol:"Pd", name:"Palladium", mass:"106.42", type:"Kim loại chuyển tiếp", desc:"Xúc tác", x:10, y:5, color:"#006985" },
  { number:47, symbol:"Ag", name:"Silver", mass:"107.87", type:"Kim loại chuyển tiếp", desc:"Bạc", x:11, y:5, color:"#C0C0C0" },
  { number:48, symbol:"Cd", name:"Cadmium", mass:"112.41", type:"Kim loại chuyển tiếp", desc:"Pin nickel-cadmium", x:12, y:5, color:"#FFD98F" },

  { number:49, symbol:"In", name:"Indium", mass:"114.82", type:"Kim loại", desc:"Mềm", x:13, y:5, color:"#A67573" },
  { number:50, symbol:"Sn", name:"Tin", mass:"118.71", type:"Kim loại", desc:"Thiếc – hàn", x:14, y:5, color:"#668080" },
  { number:51, symbol:"Sb", name:"Antimony", mass:"121.76", type:"Á kim", desc:"Giòn", x:15, y:5, color:"#9E63B5" },
  { number:52, symbol:"Te", name:"Tellurium", mass:"127.60", type:"Á kim", desc:"Bán dẫn", x:16, y:5, color:"#D47A00" },
  { number:53, symbol:"I", name:"Iodine", mass:"126.90", type:"Halogen", desc:"Tím", x:17, y:5, color:"#940094" },
  { number:54, symbol:"Xe", name:"Xenon", mass:"131.29", type:"Khí hiếm", desc:"Đèn flash", x:18, y:5, color:"#429EB0" },

  { number:55, symbol:"Cs", name:"Cesium", mass:"132.91", type:"Kim loại kiềm", desc:"Rất mềm – phản ứng mạnh", x:1, y:6, color:"#57178F" },
  { number:56, symbol:"Ba", name:"Barium", mass:"137.33", type:"Kim loại kiềm thổ", desc:"Thuốc cản quang", x:2, y:6, color:"#00C900" },

  // Lanthanides
  { number:57, symbol:"La", name:"Lanthanum", mass:"138.91", type:"Lanthanide", desc:"Hợp kim flint", x:4, y:9, color:"#FFBFFF" },
  { number:58, symbol:"Ce", name:"Cerium", mass:"140.12", type:"Lanthanide", desc:"Đánh lửa", x:5, y:9, color:"#FFADF0" },
  { number:59, symbol:"Pr", name:"Praseodymium", mass:"140.91", type:"Lanthanide", desc:"Nam châm mạnh", x:6, y:9, color:"#FF9EDD" },
  { number:60, symbol:"Nd", name:"Neodymium", mass:"144.24", type:"Lanthanide", desc:"Nam châm Neodymium", x:7, y:9, color:"#FF8ECC" },
  { number:61, symbol:"Pm", name:"Promethium", mass:"145", type:"Lanthanide", desc:"Hiếm, phóng xạ", x:8, y:9, color:"#FF7EBB" },
  { number:62, symbol:"Sm", name:"Samarium", mass:"150.36", type:"Lanthanide", desc:"Nam châm", x:9, y:9, color:"#FF6EAA" },
  { number:63, symbol:"Eu", name:"Europium", mass:"151.96", type:"Lanthanide", desc:"Màu đỏ TV", x:10, y:9, color:"#FF5E99" },
  { number:64, symbol:"Gd", name:"Gadolinium", mass:"157.25", type:"Lanthanide", desc:"Cộng hưởng từ MRI", x:11, y:9, color:"#FF4E88" },
  { number:65, symbol:"Tb", name:"Terbium", mass:"158.93", type:"Lanthanide", desc:"Đèn huỳnh quang", x:12, y:9, color:"#FF3E77" },
  { number:66, symbol:"Dy", name:"Dysprosium", mass:"162.50", type:"Lanthanide", desc:"Nam châm", x:13, y:9, color:"#FF2E66" },
  { number:67, symbol:"Ho", name:"Holmium", mass:"164.93", type:"Lanthanide", desc:"Nam châm mạnh", x:14, y:9, color:"#FF1E55" },
  { number:68, symbol:"Er", name:"Erbium", mass:"167.26", type:"Lanthanide", desc:"Sợi quang", x:15, y:9, color:"#FF0E44" },
  { number:69, symbol:"Tm", name:"Thulium", mass:"168.93", type:"Lanthanide", desc:"Laser", x:16, y:9, color:"#EF0033" },
  { number:70, symbol:"Yb", name:"Ytterbium", mass:"173.04", type:"Lanthanide", desc:"Laser", x:17, y:9, color:"#DF0023" },
  { number:71, symbol:"Lu", name:"Lutetium", mass:"174.97", type:"Lanthanide", desc:"Xúc tác", x:18, y:9, color:"#CF0013" },

  // Actinides
  { number:72, symbol:"Hf", name:"Hafnium", mass:"178.49", type:"Kim loại chuyển tiếp", desc:"Thanh lò phản ứng", x:4, y:6, color:"#4DC2FF" },
  { number:73, symbol:"Ta", name:"Tantalum", mass:"180.95", type:"Kim loại chuyển tiếp", desc:"Chống ăn mòn", x:5, y:6, color:"#4DADFF" },
  { number:74, symbol:"W", name:"Tungsten", mass:"183.84", type:"Kim loại chuyển tiếp", desc:"Nóng chảy cao nhất", x:6, y:6, color:"#2194D6" },
  { number:75, symbol:"Re", name:"Rhenium", mass:"186.21", type:"Kim loại chuyển tiếp", desc:"Siêu hợp kim", x:7, y:6, color:"#267DAB" },
  { number:76, symbol:"Os", name:"Osmium", mass:"190.23", type:"Kim loại chuyển tiếp", desc:"Nặng nhất", x:8, y:6, color:"#266696" },
  { number:77, symbol:"Ir", name:"Iridium", mass:"192.22", type:"Kim loại chuyển tiếp", desc:"Rất cứng", x:9, y:6, color:"#175487" },
  { number:78, symbol:"Pt", name:"Platinum", mass:"195.08", type:"Kim loại chuyển tiếp", desc:"Platinum", x:10, y:6, color:"#D0D0E0" },
  { number:79, symbol:"Au", name:"Gold", mass:"196.97", type:"Kim loại chuyển tiếp", desc:"Vàng", x:11, y:6, color:"#FFD123" },
  { number:80, symbol:"Hg", name:"Mercury", mass:"200.59", type:"Kim loại chuyển tiếp", desc:"Thủy ngân", x:12, y:6, color:"#B8B8D0" },

  { number:81, symbol:"Tl", name:"Thallium", mass:"204.38", type:"Kim loại", desc:"Độc", x:13, y:6, color:"#A6544D" },
  { number:82, symbol:"Pb", name:"Lead", mass:"207.2", type:"Kim loại", desc:"Chì – độc", x:14, y:6, color:"#575961" },
  { number:83, symbol:"Bi", name:"Bismuth", mass:"208.98", type:"Kim loại", desc:"Cầu vồng Bismuth", x:15, y:6, color:"#9E4FB5" },
  { number:84, symbol:"Po", name:"Polonium", mass:"209", type:"Á kim", desc:"Phóng xạ", x:16, y:6, color:"#AB5C00" },
  { number:85, symbol:"At", name:"Astatine", mass:"210", type:"Halogen", desc:"Hiếm, phóng xạ", x:17, y:6, color:"#754F45" },
  { number:86, symbol:"Rn", name:"Radon", mass:"222", type:"Khí hiếm", desc:"Phóng xạ", x:18, y:6, color:"#428296" },

  { number:87, symbol:"Fr", name:"Francium", mass:"223", type:"Kim loại kiềm", desc:"Cực hiếm, phóng xạ", x:1, y:7, color:"#420066" },
  { number:88, symbol:"Ra", name:"Radium", mass:"226", type:"Kim loại kiềm thổ", desc:"Phóng xạ", x:2, y:7, color:"#007D00" },

  { number:89, symbol:"Ac", name:"Actinium", mass:"227", type:"Actinide", desc:"Phóng xạ mạnh", x:4, y:10, color:"#FF99CC" },
  { number:90, symbol:"Th", name:"Thorium", mass:"232.04", type:"Actinide", desc:"Phản ứng hạt nhân", x:5, y:10, color:"#FF85B1" },
  { number:91, symbol:"Pa", name:"Protactinium", mass:"231.04", type:"Actinide", desc:"Hiếm", x:6, y:10, color:"#FF7096" },
  { number:92, symbol:"U", name:"Uranium", mass:"238.03", type:"Actinide", desc:"Nhiên liệu hạt nhân", x:7, y:10, color:"#FF5C7A" },
  { number:93, symbol:"Np", name:"Neptunium", mass:"237", type:"Actinide", desc:"Phóng xạ", x:8, y:10, color:"#FF4760" },
  { number:94, symbol:"Pu", name:"Plutonium", mass:"244", type:"Actinide", desc:"Bom hạt nhân", x:9, y:10, color:"#FF3246" },
  { number:95, symbol:"Am", name:"Americium", mass:"243", type:"Actinide", desc:"Đầu báo khói", x:10, y:10, color:"#FF1E2C" },
  { number:96, symbol:"Cm", name:"Curium", mass:"247", type:"Actinide", desc:"Phóng xạ mạnh", x:11, y:10, color:"#FF0A12" },
  { number:97, symbol:"Bk", name:"Berkelium", mass:"247", type:"Actinide", desc:"Tổng hợp nhân tạo", x:12, y:10, color:"#EF0000" },
  { number:98, symbol:"Cf", name:"Californium", mass:"251", type:"Actinide", desc:"Nguồn neutron mạnh", x:13, y:10, color:"#D60000" },
  { number:99, symbol:"Es", name:"Einsteinium", mass:"252", type:"Actinide", desc:"Hiếm", x:14, y:10, color:"#BD0000" },
  { number:100, symbol:"Fm", name:"Fermium", mass:"257", type:"Actinide", desc:"Tổng hợp", x:15, y:10, color:"#A40000" },
  { number:101, symbol:"Md", name:"Mendelevium", mass:"258", type:"Actinide", desc:"Tổng hợp", x:16, y:10, color:"#8B0000" },
  { number:102, symbol:"No", name:"Nobelium", mass:"259", type:"Actinide", desc:"Tổng hợp", x:17, y:10, color:"#720000" },
  { number:103, symbol:"Lr", name:"Lawrencium", mass:"266", type:"Actinide", desc:"Tổng hợp", x:18, y:10, color:"#590000" },

  { number:104, symbol:"Rf", name:"Rutherfordium", mass:"267", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:4, y:7, color:"#CCFFFF" },
  { number:105, symbol:"Db", name:"Dubnium", mass:"268", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:5, y:7, color:"#BFEFFF" },
  { number:106, symbol:"Sg", name:"Seaborgium", mass:"269", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:6, y:7, color:"#AFDFE4" },
  { number:107, symbol:"Bh", name:"Bohrium", mass:"270", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:7, y:7, color:"#9FD3D3" },
  { number:108, symbol:"Hs", name:"Hassium", mass:"270", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:8, y:7, color:"#8FC7C7" },
  { number:109, symbol:"Mt", name:"Meitnerium", mass:"278", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:9, y:7, color:"#A0A0A0" },
  { number:110, symbol:"Ds", name:"Darmstadtium", mass:"281", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:10, y:7, color:"#B0B0B0" },
  { number:111, symbol:"Rg", name:"Roentgenium", mass:"282", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:11, y:7, color:"#C0C0C0" },
  { number:112, symbol:"Cn", name:"Copernicium", mass:"285", type:"Kim loại chuyển tiếp", desc:"Tổng hợp", x:12, y:7, color:"#D0D0D0" },

  { number:113, symbol:"Nh", name:"Nihonium", mass:"286", type:"Khác", desc:"Tổng hợp", x:13, y:7, color:"#FFC0CB" },
  { number:114, symbol:"Fl", name:"Flerovium", mass:"289", type:"Khác", desc:"Tổng hợp", x:14, y:7, color:"#FFD1D1" },
  { number:115, symbol:"Mc", name:"Moscovium", mass:"289", type:"Khác", desc:"Tổng hợp", x:15, y:7, color:"#FFB8B8" },
  { number:116, symbol:"Lv", name:"Livermorium", mass:"293", type:"Khác", desc:"Tổng hợp", x:16, y:7, color:"#FFA0A0" },
  { number:117, symbol:"Ts", name:"Tennessine", mass:"294", type:"Halogen", desc:"Tổng hợp", x:17, y:7, color:"#FF8F8F" },
  { number:118, symbol:"Og", name:"Oganesson", mass:"294", type:"Khí hiếm", desc:"Tổng hợp", x:18, y:7, color:"#80D1E3" }
];
    animate();
}
