// === DATASET 30 NGUYÊN TỐ ĐẦU TIÊN ===
const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", mass: "1.008", type:"Phi kim", desc:"Nhẹ nhất", x:1, y:1, color:"#FFFFFF" },
  { number: 2, symbol: "He", name: "Helium", mass: "4.0026", type:"Khí hiếm", desc:"Khí trơ", x:18, y:1, color:"#D9FFFF" },
  { number: 3, symbol: "Li", name: "Lithium", mass: "6.94", type:"Kim loại kiềm", desc:"Kim loại nhẹ", x:1, y:2, color:"#CC80FF" },
  { number: 4, symbol: "Be", name: "Beryllium", mass: "9.0122", type:"Kim loại kiềm thổ", desc:"Cứng và nhẹ", x:2, y:2, color:"#C2FF00" },
  { number: 5, symbol: "B", name: "Boron", mass: "10.81", type:"Á kim", desc:"Á kim cứng", x:13, y:2, color:"#FFB5B5" },
  { number: 6, symbol: "C", name: "Carbon", mass: "12.011", type:"Phi kim", desc:"Cơ sở sự sống", x:14, y:2, color:"#909090" },
  { number: 7, symbol: "N", name: "Nitrogen", mass: "14.007", type:"Phi kim", desc:"78% không khí", x:15, y:2, color:"#3050F8" },
  { number: 8, symbol: "O", name: "Oxygen", mass: "15.999", type:"Phi kim", desc:"Cần cho hô hấp", x:16, y:2, color:"#FF0D0D" },
  { number: 9, symbol: "F", name: "Fluorine", mass: "18.998", type:"Halogen", desc:"Phi kim mạnh nhất", x:17, y:2, color:"#90E050" },
  { number:10, symbol: "Ne", name:"Neon", mass:"20.180", type:"Khí hiếm", desc:"Đèn neon", x:18, y:2, color:"#B3E3F5" },
  { number:11, symbol:"Na", name:"Sodium", mass:"22.990", type:"Kim loại kiềm", desc:"Phản ứng mạnh với nước", x:1, y:3, color:"#AB5CF2" },
  { number:12, symbol:"Mg", name:"Magnesium", mass:"24.305", type:"Kim loại kiềm thổ", desc:"Cháy sáng", x:2, y:3, color:"#8AFF00" },
  { number:13, symbol:"Al", name:"Aluminium", mass:"26.982", type:"Kim loại", desc:"Nhôm – nhẹ", x:13, y:3, color:"#BFA6A6" },
  { number:14, symbol:"Si", name:"Silicon", mass:"28.085", type:"Á kim", desc:"Làm chip máy tính", x:14, y:3, color:"#F0C8A0" },
  { number:15, symbol:"P", name:"Phosphorus", mass:"30.974", type:"Phi kim", desc:"Sáng trong tối", x:15, y:3, color:"#FF8000" },
  { number:16, symbol:"S", name:"Sulfur", mass:"32.06", type:"Phi kim", desc:"Lưu huỳnh", x:16, y:3, color:"#FFFF30" },
  { number:17, symbol:"Cl", name:"Chlorine", mass:"35.45", type:"Halogen", desc:"Khí vàng lục", x:17, y:3, color:"#1FF01F" },
  { number:18, symbol:"Ar", name:"Argon", mass:"39.948", type:"Khí hiếm", desc:"Khí trơ", x:18, y:3, color:"#80D1E3" },
  { number:19, symbol:"K", name:"Potassium", mass:"39.0983", type:"Kim loại kiềm", desc:"Rất mềm", x:1, y:4, color:"#8F40D4" },
  { number:20, symbol:"Ca", name:"Calcium", mass:"40.078", type:"Kim loại kiềm thổ", desc:"Xương, răng", x:2, y:4, color:"#3DFF00" },
  { number:21, symbol:"Sc", name:"Scandium", mass:"44.956", type:"Kim loại chuyển tiếp", desc:"Hiếm", x:3, y:4, color:"#E6E6E6" },
  { number:22, symbol:"Ti", name:"Titanium", mass:"47.867", type:"Kim loại chuyển tiếp", desc:"Rất bền", x:4, y:4, color:"#BFC2C7" },
  { number:23, symbol:"V", name:"Vanadium", mass:"50.942", type:"Kim loại chuyển tiếp", desc:"Siêu cứng", x:5, y:4, color:"#A6A6AB" },
  { number:24, symbol:"Cr", name:"Chromium", mass:"51.996", type:"Kim loại chuyển tiếp", desc:"Mạ chrome", x:6, y:4, color:"#8A99C7" },
  { number:25, symbol:"Mn", name:"Manganese", mass:"54.938", type:"Kim loại chuyển tiếp", desc:"Thép mangan", x:7, y:4, color:"#9C7AC7" },
  { number:26, symbol:"Fe", name:"Iron", mass:"55.845", type:"Kim loại chuyển tiếp", desc:"Sắt", x:8, y:4, color:"#E06633" },
  { number:27, symbol:"Co", name:"Cobalt", mass:"58.933", type:"Kim loại chuyển tiếp", desc:"Nam châm", x:9, y:4, color:"#F090A0" },
  { number:28, symbol:"Ni", name:"Nickel", mass:"58.693", type:"Kim loại chuyển tiếp", desc:"Inox", x:10, y:4, color:"#50D050" },
  { number:29, symbol:"Cu", name:"Copper", mass:"63.546", type:"Kim loại chuyển tiếp", desc:"Đồng – dây điện", x:11, y:4, color:"#C88033" },
  { number:30, symbol:"Zn", name:"Zinc", mass:"65.38", type:"Kim loại chuyển tiếp", desc:"Kẽm", x:12, y:4, color:"#7D80B0" }
];

// === LOGIC BẢNG + POPUP + SEARCH ===
const table = document.getElementById("periodic-table");

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

// === SEARCH (nếu muốn thêm input#search trong HTML) ===
const searchInput = document.getElementById("search");
if(searchInput){
    searchInput.addEventListener("input", e => {
        const key = e.target.value.toLowerCase();
        const list = elements.filter(el =>
            el.name.toLowerCase().includes(key) ||
            el.symbol.toLowerCase().includes(key)
        );
        renderTable(list);
    });
}

// === POPUP ===
const popup = document.getElementById("popup");
document.getElementById("close-btn").onclick = () => popup.style.display = "none";

function openPopup(e) {
    popup.style.display = "flex";
    popup.style.flexDirection = "column";

    popup.innerHTML = `
        <button id="close-btn" title="Đóng">×</button>
        <h2>${e.name} (${e.symbol})</h2>
        <p><b>Số hiệu nguyên tử:</b> ${e.number}</p>
        <p><b>Nguyên tử khối:</b> ${e.mass}</p>
        <p><b>Loại:</b> ${e.type}</p>
        <p>${e.desc}</p>
        <div id="viewer3d" style="width:350px;height:350px;margin:auto;"></div>
    `;

    document.getElementById("close-btn").onclick = () => popup.style.display = "none";

    atom3D(e.number);
}

// === Three.js 3D Atom ===
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

    animate();
}
