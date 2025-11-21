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

    animate();
}
