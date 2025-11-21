// ===================== DATA ======================
const elements = [
    { number: 1, symbol: "H",  name: "Hydrogen",  mass: "1.008", desc: "Nhẹ nhất, khí không màu.", x:1, y:1 },
    { number: 2, symbol: "He", name: "Helium",   mass: "4.0026", desc: "Khí trơ, rất nhẹ.", x:18, y:1 },
    { number: 3, symbol: "Li", name: "Lithium",  mass: "6.94", desc: "Kim loại kiềm mềm.", x:1, y:2 },
    { number: 4, symbol: "Be", name: "Beryllium",mass: "9.012", desc: "Kim loại kiềm thổ.", x:2, y:2 },
    // ... hãy thêm đầy đủ 118 nguyên tố tại đây (theo tọa độ x,y)
];

// ===================== RENDER TABLE ======================
const table = document.getElementById("table");

elements.forEach(e => {
    const box = document.createElement("div");
    box.className = "element";
    box.style.gridColumn = e.x;
    box.style.gridRow = e.y;

    box.innerHTML = `
        <div class="number">${e.number}</div>
        <div class="symbol">${e.symbol}</div>
    `;

    box.onclick = () => openPopup(e);
    table.appendChild(box);
});

// ===================== POPUP ======================
const popup = document.getElementById("popup");
document.getElementById("closeBtn").onclick = () => popup.style.display = "none";

function openPopup(e) {
    popup.style.display = "flex";

    document.getElementById("eName").innerText = e.name;
    document.getElementById("eSymbol").innerText = e.symbol;
    document.getElementById("eNumber").innerText = e.number;
    document.getElementById("eMass").innerText = e.mass;
    document.getElementById("eDesc").innerText = e.desc;

    render3D();
}

// ===================== 3D ATOM MODEL ======================
let scene, camera, renderer, nucleus, electron;

function render3D() {
    const container = document.getElementById("viewer3d");
    container.innerHTML = "";

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 4;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(350, 350);
    container.appendChild(renderer.domElement);

    // Hạt nhân
    const nucleusGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({ color: 0xff4444 });
    nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    scene.add(nucleus);

    // Electron
    const electronGeo = new THREE.SphereGeometry(0.15, 32, 32);
    const electronMat = new THREE.MeshStandardMaterial({ color: 0x44aaff });
    electron = new THREE.Mesh(electronGeo, electronMat);
    scene.add(electron);

    // Ánh sáng
    const light = new THREE.PointLight(0xffffff, 2);
    scene.add(light);

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        electron.position.x = Math.sin(Date.now() * 0.002) * 1.5;
        electron.position.z = Math.cos(Date.now() * 0.002) * 1.5;
        renderer.render(scene, camera);
    }
    animate();
}
