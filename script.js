/* ===== RENDER TABLE ===== */
const table = document.getElementById("table");

function renderTable() {
    table.innerHTML = "";
    elements.forEach(e => {
        const box = document.createElement("div");
        box.className = "element";
        box.style.gridColumn = e.x;
        box.style.gridRow = e.y;

        box.innerHTML = `
            <div class="number">${e.number}</div>
            <div class="symbol">${e.symbol}</div>
            <div class="name">${e.name}</div>
        `;

        box.onclick = () => openPopup(e);
        table.appendChild(box);
    });
}

renderTable();

/* ==== SEARCH ==== */
document.getElementById("search").addEventListener("input", e => {
    const key = e.target.value.toLowerCase();
    const filtered = elements.filter(el =>
        el.name.toLowerCase().includes(key) ||
        el.symbol.toLowerCase().includes(key)
    );
    table.innerHTML = "";
    filtered.forEach(e => {
        const box = document.createElement("div");
        box.className = "element";
        box.style.gridColumn = e.x;
        box.style.gridRow = e.y;
        box.innerHTML = `
            <div class="number">${e.number}</div>
            <div class="symbol">${e.symbol}</div>
            <div class="name">${e.name}</div>
        `;
        box.onclick = () => openPopup(e);
        table.appendChild(box);
    });
});

/* ==== POPUP ==== */
const popup = document.getElementById("popup");
document.getElementById("closeBtn").onclick = () => popup.style.display = "none";

function openPopup(e) {
    popup.style.display = "flex";

    document.getElementById("eName").innerText = e.name;
    document.getElementById("eSymbol").innerText = e.symbol;
    document.getElementById("eNumber").innerText = e.number;
    document.getElementById("eMass").innerText = e.mass;
    document.getElementById("eType").innerText = e.type;
    document.getElementById("eDesc").innerText = e.desc;

    render3D(e.number);
}

/* ==== ATOM 3D MODEL ==== */
let scene, camera, renderer, nucleus;
let electrons = [];

function render3D(Z) {
    const container = document.getElementById("viewer3d");
    container.innerHTML = "";

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(380, 380);
    container.appendChild(renderer.domElement);

    const nucleusMat = new THREE.MeshStandardMaterial({ color: 0xff5555 });
    const nucleusGeo = new THREE.SphereGeometry(0.6, 32, 32);
    nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    scene.add(nucleus);

    electrons = [];
    const electronCount = Math.min(Z, 20); // tránh lag

    for (let i = 0; i < electronCount; i++) {
        const eGeo = new THREE.SphereGeometry(0.15, 16, 16);
        const eMat = new THREE.MeshStandardMaterial({ color: 0x55aaff });
        const el = new THREE.Mesh(eGeo, eMat);

        el.orbitRadius = 1.2 + (i % 5) * 0.3;
        el.angle = (i / electronCount) * Math.PI * 2;

        electrons.push(el);
        scene.add(el);
    }

    const light = new THREE.PointLight(0xffffff, 2);
    scene.add(light);

    function animate() {
        requestAnimationFrame(animate);

        electrons.forEach((el, i) => {
            el.angle += 0.02 + i * 0.001;
            el.position.x = Math.cos(el.angle) * el.orbitRadius;
            el.position.z = Math.sin(el.angle) * el.orbitRadius;
        });

        renderer.render(scene, camera);
    }
    animate();
}
