const modules = [
  {
    id: "cessna-tour",
    title: "O que e um aviao",
    summary: "Visita virtual demonstrativa usando um Cessna 172.",
    stages: [
      {
        title: "Visao geral do Cessna 172",
        summary: "Cena 360 demonstrativa em um patio de aviacao geral.",
        type: "360",
        diagram: "c172-exterior",
        panorama: "assets/panoramas/cessna-172-apron-360.png",
        startYaw: 0.5,
        startPitch: 0.02,
        checklist: [
          "Identificar fuselagem, asa, empenagem e trem de pouso.",
          "Observar que o Cessna 172 e um aviao de asa alta.",
          "Reconhecer a finalidade geral: treinamento, viagem curta e aviacao geral."
        ],
        hotspots: [
          {
            title: "Aeronave de treinamento",
            text: "O Cessna 172 e um aviao leve de aviacao geral, muito usado em instrucao por ser estavel, simples e previsivel.",
            yaw: 0.47,
            pitch: 0.02,
            color: "#40c4a4"
          },
          {
            title: "Asa alta",
            text: "A configuracao de asa alta deixa a cabine abaixo da asa e favorece a visibilidade do solo durante voo e manobras.",
            yaw: 0.56,
            pitch: -0.09,
            color: "#f2b84b"
          },
          {
            title: "Trem fixo",
            text: "O trem de pouso fixo e robusto e reduz complexidade de operacao e manutencao em aeronaves de treinamento.",
            yaw: 0.44,
            pitch: 0.13,
            color: "#7db7ff"
          },
          {
            title: "Area de inspecao",
            text: "Em um treinamento real, esta cena pode receber pontos para inspeção pre-voo, seguranca no patio e identificacao de componentes.",
            yaw: 0.68,
            pitch: 0.11,
            color: "#ee6b6e"
          }
        ],
        nodes: [
          {
            title: "Asa alta",
            text: "A asa fica acima da cabine. Isso melhora a visibilidade para baixo e e comum em aeronaves de treinamento.",
            x: 0.48,
            y: 0.25,
            color: "#40c4a4"
          },
          {
            title: "Fuselagem",
            text: "A fuselagem e o corpo principal. Nela ficam cabine, passageiros, estrutura e parte dos sistemas.",
            x: 0.48,
            y: 0.52,
            color: "#f2b84b"
          },
          {
            title: "Empenagem",
            text: "A cauda contem superficies que ajudam a estabilizar e controlar a aeronave.",
            x: 0.78,
            y: 0.44,
            color: "#ee6b6e"
          },
          {
            title: "Trem fixo",
            text: "O trem de pouso fixo permanece exposto durante o voo. E simples, robusto e adequado para treinamento.",
            x: 0.42,
            y: 0.72,
            color: "#7db7ff"
          }
        ]
      },
      {
        title: "Cabine e painel",
        summary: "Onde o piloto monitora instrumentos e controla a aeronave.",
        type: "360",
        diagram: "c172-cockpit",
        panorama: "assets/panoramas/cessna-172-cockpit-360.png",
        startYaw: 0.5,
        startPitch: 0.06,
        checklist: [
          "Localizar manche, manetes, pedais e instrumentos basicos.",
          "Separar instrumentos de voo, motor e navegacao.",
          "Entender que configuracoes variam entre aeronaves e anos."
        ],
        hotspots: [
          {
            title: "Instrumentos de voo",
            text: "Incluem velocidade, atitude, altitude, razao de subida, proa e coordenacao. Sao a base da orientacao do piloto.",
            yaw: 0.42,
            pitch: 0.04,
            color: "#40c4a4"
          },
          {
            title: "Manche",
            text: "Move ailerons e profundor. Puxar tende a elevar o nariz; empurrar tende a baixar.",
            yaw: 0.41,
            pitch: 0.18,
            color: "#f2b84b"
          },
          {
            title: "Manetes",
            text: "Controlam potencia, mistura e outros ajustes conforme a versao da aeronave.",
            yaw: 0.51,
            pitch: 0.12,
            color: "#ee6b6e"
          }
        ],
        nodes: [
          {
            title: "Instrumentos de voo",
            text: "Incluem velocidade, atitude, altitude, razao de subida, proa e coordenacao. Sao a base da orientacao do piloto.",
            x: 0.34,
            y: 0.36,
            color: "#40c4a4"
          },
          {
            title: "Manche",
            text: "Move ailerons e profundor. Puxar tende a elevar o nariz; empurrar tende a baixar.",
            x: 0.37,
            y: 0.69,
            color: "#f2b84b"
          },
          {
            title: "Manetes",
            text: "Controlam potencia, mistura e outros ajustes conforme a versao da aeronave.",
            x: 0.68,
            y: 0.62,
            color: "#ee6b6e"
          }
        ]
      },
      {
        title: "Superficies de comando",
        summary: "Ailerons, profundor e leme.",
        type: "360",
        diagram: "c172-controls",
        panorama: "assets/panoramas/cessna-172-control-surfaces-360.png",
        startYaw: 0.5,
        startPitch: 0.02,
        checklist: [
          "Identificar ailerons nas asas.",
          "Identificar profundor na cauda horizontal.",
          "Identificar leme na cauda vertical."
        ],
        hotspots: [
          {
            title: "Ailerons",
            text: "Controlam a rolagem. Um sobe enquanto o outro desce, inclinando a aeronave.",
            yaw: 0.72,
            pitch: -0.06,
            color: "#40c4a4"
          },
          {
            title: "Profundor",
            text: "Controla o movimento de nariz para cima ou para baixo.",
            yaw: 0.31,
            pitch: 0.2,
            color: "#f2b84b"
          },
          {
            title: "Leme",
            text: "Controla guinada, ajudando a apontar o nariz para esquerda ou direita.",
            yaw: 0.25,
            pitch: -0.08,
            color: "#ee6b6e"
          }
        ],
        nodes: [
          {
            title: "Ailerons",
            text: "Controlam a rolagem. Um sobe enquanto o outro desce, inclinando a aeronave.",
            x: 0.28,
            y: 0.29,
            color: "#40c4a4"
          },
          {
            title: "Profundor",
            text: "Controla o movimento de nariz para cima ou para baixo.",
            x: 0.78,
            y: 0.39,
            color: "#f2b84b"
          },
          {
            title: "Leme",
            text: "Controla guinada, ajudando a apontar o nariz para esquerda ou direita.",
            x: 0.84,
            y: 0.25,
            color: "#ee6b6e"
          }
        ]
      },
      {
        title: "Motor e helice",
        summary: "Conjunto de propulsao dianteiro.",
        type: "360",
        diagram: "c172-engine",
        panorama: "assets/panoramas/cessna-172-engine-propeller-360.png",
        startYaw: 0.5,
        startPitch: 0.08,
        checklist: [
          "Identificar cowling, helice e entrada de ar.",
          "Associar motor a tracao gerada pela helice.",
          "Observar pontos de inspecao externa antes do voo."
        ],
        hotspots: [
          {
            title: "Helice",
            text: "Transforma potencia do motor em tracao. Deve ser inspecionada quanto a trincas, amassados e fixacao.",
            yaw: 0.5,
            pitch: 0.03,
            color: "#40c4a4"
          },
          {
            title: "Cowling",
            text: "Carenagem do motor. Protege o compartimento e direciona o fluxo de ar.",
            yaw: 0.5,
            pitch: 0.1,
            color: "#f2b84b"
          },
          {
            title: "Entrada de ar",
            text: "Permite fluxo para arrefecimento e admissao. Deve estar livre de obstrucoes.",
            yaw: 0.5,
            pitch: 0.2,
            color: "#ee6b6e"
          }
        ],
        nodes: [
          {
            title: "Helice",
            text: "Transforma potencia do motor em tracao. Deve ser inspecionada quanto a trincas, amassados e fixacao.",
            x: 0.3,
            y: 0.49,
            color: "#40c4a4"
          },
          {
            title: "Cowling",
            text: "Carenagem do motor. Protege o compartimento e direciona o fluxo de ar.",
            x: 0.54,
            y: 0.48,
            color: "#f2b84b"
          },
          {
            title: "Entrada de ar",
            text: "Permite fluxo para arrefecimento e admissao. Deve estar livre de obstrucoes.",
            x: 0.66,
            y: 0.57,
            color: "#ee6b6e"
          }
        ]
      },
      {
        title: "Trem de pouso",
        summary: "Rodas, bequilha dianteira e estruturas de apoio.",
        type: "360",
        diagram: "c172-gear",
        panorama: "assets/panoramas/cessna-172-landing-gear-360.png",
        startYaw: 0.5,
        startPitch: 0.1,
        checklist: [
          "Localizar trem principal e bequilha.",
          "Verificar pneus, fixacoes e estado geral.",
          "Entender diferenca entre trem fixo e retratil."
        ],
        hotspots: [
          {
            title: "Trem principal",
            text: "Suporta a maior parte do peso no solo e recebe cargas de pouso.",
            yaw: 0.9,
            pitch: 0.12,
            color: "#40c4a4"
          },
          {
            title: "Bequilha",
            text: "Roda dianteira usada para apoio e direcao no taxi.",
            yaw: 0.5,
            pitch: 0.08,
            color: "#f2b84b"
          },
          {
            title: "Pneu",
            text: "Inspecione desgaste, cortes, calibragem aparente e objetos presos.",
            yaw: 0.5,
            pitch: 0.16,
            color: "#ee6b6e"
          }
        ],
        nodes: [
          {
            title: "Trem principal",
            text: "Suporta a maior parte do peso no solo e recebe cargas de pouso.",
            x: 0.48,
            y: 0.62,
            color: "#40c4a4"
          },
          {
            title: "Bequilha",
            text: "Roda dianteira usada para apoio e direcao no taxi.",
            x: 0.32,
            y: 0.64,
            color: "#f2b84b"
          },
          {
            title: "Pneu",
            text: "Inspecione desgaste, cortes, calibragem aparente e objetos presos.",
            x: 0.58,
            y: 0.74,
            color: "#ee6b6e"
          }
        ]
      }
    ]
  },
  {
    id: "walkaround",
    title: "Inspecao externa",
    summary: "Pontos visuais em uma cena 360.",
    type: "360",
    checklist: [
      "Confirmar area livre e aeronave calcada.",
      "Inspecionar bordos de ataque e superficies moveis.",
      "Registrar anomalias com foto e observacao."
    ],
    panorama: "",
    hotspots: [
      {
        title: "Bordo de ataque",
        text: "Verifique amassados, contaminacao, gelo, trincas e fixadores ausentes antes de liberar a etapa.",
        yaw: 0.22,
        pitch: -0.08,
        color: "#40c4a4"
      },
      {
        title: "Trem de pouso",
        text: "Confirme condicao do pneu, vazamentos, pinos de seguranca e indicios de aquecimento anormal.",
        yaw: 0.68,
        pitch: 0.18,
        color: "#f2b84b"
      },
      {
        title: "Painel de acesso",
        text: "Confira fechamento, travas, lacres e alinhamento com a fuselagem.",
        yaw: 0.86,
        pitch: -0.02,
        color: "#ee6b6e"
      }
    ]
  },
  {
    id: "x5-panorama",
    title: "Cena Insta360 X5",
    summary: "Espaco reservado para suas fotos 360.",
    type: "360",
    panorama: "",
    checklist: [
      "Exportar imagem equiretangular 2:1 da Insta360.",
      "Salvar em assets/panoramas/nome-da-cena.jpg.",
      "Adicionar caminho da imagem no modulo correspondente."
    ],
    hotspots: [
      {
        title: "Ponto de instrucao",
        text: "Quando sua foto 360 entrar aqui, este ponto pode ficar sobre um componente real da aeronave.",
        yaw: 0.5,
        pitch: 0,
        color: "#40c4a4"
      }
    ]
  }
];

const canvas = document.querySelector("#sceneCanvas");
const ctx = canvas.getContext("2d");

const els = {
  moduleList: document.querySelector("#moduleList"),
  moduleCount: document.querySelector("#moduleCount"),
  stageList: document.querySelector("#stageList"),
  stageCount: document.querySelector("#stageCount"),
  activeMode: document.querySelector("#activeMode"),
  activeTitle: document.querySelector("#activeTitle"),
  activeHint: document.querySelector("#activeHint"),
  vrModeTexts: document.querySelectorAll(".vrModeText"),
  vrTitleTexts: document.querySelectorAll(".vrTitleText"),
  vrHintTexts: document.querySelectorAll(".vrHintText"),
  detailTitle: document.querySelector("#detailTitle"),
  detailText: document.querySelector("#detailText"),
  checklist: document.querySelector("#checklist"),
  vrBtn: document.querySelector("#vrBtn"),
  fullscreenBtn: document.querySelector("#fullscreenBtn"),
  gyroBtn: document.querySelector("#gyroBtn"),
  resetViewBtn: document.querySelector("#resetViewBtn")
};

const panoramaViewYawSpan = 0.28;
const panoramaViewPitchSpan = 0.56;

let activeModule = modules[0];
let activeStageIndex = 0;
let activeView = currentContent().type;
let isVrMode = false;
let gyroEnabled = false;
let gyroBase = null;
let yaw = 0.5;
let pitch = 0;
let vrHistoryArmed = false;
let dragStart = null;
let lastPointer = null;
let panoramaImage = null;
let hitTargets = [];

function currentContent() {
  return activeModule.stages?.[activeStageIndex] || activeModule;
}

function renderModuleList() {
  els.moduleCount.textContent = modules.length;
  els.moduleList.innerHTML = "";

  modules.forEach((module) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `module-button${module.id === activeModule.id ? " active" : ""}`;
    button.innerHTML = `<strong>${module.title}</strong><span>${module.summary}</span>`;
    button.addEventListener("click", () => selectModule(module.id));
    els.moduleList.appendChild(button);
  });
}

function renderStageList() {
  const stages = activeModule.stages || [activeModule];
  els.stageCount.textContent = stages.length;
  els.stageList.innerHTML = "";

  stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `stage-button${index === activeStageIndex ? " active" : ""}`;
    button.innerHTML = `<span class="stage-index">${index + 1}</span><span><strong>${stage.title}</strong><span>${stage.summary || stage.type}</span></span>`;
    button.addEventListener("click", () => selectStage(index));
    els.stageList.appendChild(button);
  });
}

function selectModule(id) {
  activeModule = modules.find((module) => module.id === id) || modules[0];
  activeStageIndex = 0;
  selectContent();
}

function selectStage(index) {
  activeStageIndex = index;
  selectContent();
}

function selectContent() {
  const content = currentContent();
  activeView = content.type === "diagram" ? "diagram" : "360";
  yaw = content.startYaw ?? 0.5;
  pitch = content.startPitch ?? 0;
  resetSelection();
  renderModuleList();
  renderStageList();
  renderChecklist();
  loadPanorama();
  updateHud();
}

function goToTrainingHome() {
  activeModule = modules[0];
  activeStageIndex = 0;
  selectContent();
}

function renderChecklist() {
  const content = currentContent();
  els.checklist.innerHTML = "";
  content.checklist.forEach((item, index) => {
    const label = document.createElement("label");
    label.className = "check-item";
    label.innerHTML = `<input type="checkbox" aria-label="Item ${index + 1}"><span>${item}</span>`;
    els.checklist.appendChild(label);
  });
}

function resetSelection() {
  els.detailTitle.textContent = "Selecione um ponto";
  els.detailText.textContent = "Use o mouse ou toque na tela para selecionar componentes, etapas e observacoes.";
}

function updateHud() {
  const content = currentContent();
  els.activeTitle.textContent = content.title;
  els.activeMode.textContent = activeView === "360" ? "Imagem 360" : "Visual interativo";
  els.activeHint.textContent =
    activeView === "360"
      ? "Arraste ou use o giroscopio para olhar ao redor. Clique nos pontos para interagir."
      : "Clique nos pontos do desenho para abrir instrucoes.";
  syncVrHud();
}

function loadPanorama() {
  const content = currentContent();
  panoramaImage = null;
  if (!content.panorama) return;

  const image = new Image();
  image.onload = () => {
    panoramaImage = image;
  };
  image.src = content.panorama;
}

function fitCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.floor(rect.width * dpr));
  const height = Math.max(1, Math.floor(rect.height * dpr));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function draw() {
  fitCanvas();
  hitTargets = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isVrMode) {
    const half = canvas.width / 2;
    drawViewport(0, 0, half, canvas.height, -0.018);
    drawViewport(half, 0, half, canvas.height, 0.018);
    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(half, 0);
    ctx.lineTo(half, canvas.height);
    ctx.stroke();
  } else {
    drawViewport(0, 0, canvas.width, canvas.height, 0);
  }

  requestAnimationFrame(draw);
}

function drawViewport(x, y, width, height, eyeOffset) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.clip();

  if (activeView === "diagram") {
    drawDiagram(x, y, width, height);
  } else {
    drawPanorama(x, y, width, height, eyeOffset);
  }

  ctx.restore();
}

function drawPanorama(x, y, width, height, eyeOffset) {
  const content = currentContent();

  if (panoramaImage) {
    drawEquirectangular(panoramaImage, x, y, width, height, eyeOffset);
  } else {
    drawPlaceholderPanorama(x, y, width, height, eyeOffset);
  }

  const hotspots = content.hotspots || [];
  hotspots.forEach((hotspot) => {
    const target = projectHotspot(hotspot, x, y, width, height, eyeOffset);
    if (!target.visible) return;
    drawMarker(target.x, target.y, hotspot.color, hotspot.title);
    hitTargets.push({ ...target, data: hotspot });
  });
}

function drawEquirectangular(image, x, y, width, height, eyeOffset) {
  const viewWidth = image.width * panoramaViewYawSpan;
  const sourceX = wrap((yaw + eyeOffset) * image.width - viewWidth / 2, image.width);
  const sourceY = clamp((0.5 + pitch * 0.75) * image.height - image.height * (panoramaViewPitchSpan / 2), 0, image.height * (1 - panoramaViewPitchSpan));
  const sourceHeight = image.height * panoramaViewPitchSpan;

  if (sourceX + viewWidth <= image.width) {
    ctx.drawImage(image, sourceX, sourceY, viewWidth, sourceHeight, x, y, width, height);
  } else {
    const firstWidth = image.width - sourceX;
    const firstDest = width * (firstWidth / viewWidth);
    ctx.drawImage(image, sourceX, sourceY, firstWidth, sourceHeight, x, y, firstDest, height);
    ctx.drawImage(image, 0, sourceY, viewWidth - firstWidth, sourceHeight, x + firstDest, y, width - firstDest, height);
  }
}

function drawPlaceholderPanorama(x, y, width, height, eyeOffset) {
  const gradient = ctx.createLinearGradient(0, y, 0, y + height);
  gradient.addColorStop(0, "#344b5c");
  gradient.addColorStop(0.48, "#788a91");
  gradient.addColorStop(0.5, "#343b35");
  gradient.addColorStop(1, "#15191a");
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);

  const center = x + width * (0.5 - normalizedDelta(0.5, yaw + eyeOffset) * 2.1);
  const floor = y + height * (0.58 + pitch * 0.25);
  const scale = Math.max(width, height) / 900;

  drawCessnaSide(center, floor, 1.05 * scale);

  ctx.fillStyle = "rgba(9, 11, 13, 0.72)";
  ctx.fillRect(x + width * 0.16, y + height * 0.72, width * 0.68, 74 * scale);
  ctx.fillStyle = "#f4f7f8";
  ctx.font = `700 ${Math.max(15, 24 * scale)}px system-ui`;
  ctx.textAlign = "center";
  ctx.fillText("Espaco para imagem 360 da Insta360 X5", x + width / 2, y + height * 0.72 + 30 * scale);
  ctx.font = `${Math.max(12, 16 * scale)}px system-ui`;
  ctx.fillStyle = "#a8b4bc";
  ctx.fillText("Use imagem equiretangular 2:1 em assets/panoramas/", x + width / 2, y + height * 0.72 + 56 * scale);
  ctx.textAlign = "left";
}

function drawDiagram(x, y, width, height) {
  const content = currentContent();
  drawGridBackground(x, y, width, height);

  const title = content.title;
  ctx.fillStyle = "#d8e4e7";
  ctx.font = `800 ${Math.max(18, width * 0.034)}px system-ui`;
  ctx.fillText(title, x + width * 0.06, y + height * 0.12);
  ctx.font = `${Math.max(12, width * 0.017)}px system-ui`;
  ctx.fillStyle = "#a8b4bc";
  ctx.fillText(content.summary || "Material demonstrativo", x + width * 0.06, y + height * 0.17);

  if (content.diagram === "c172-cockpit") drawCessnaCockpit(x, y, width, height);
  else if (content.diagram === "c172-controls") drawCessnaControls(x, y, width, height);
  else if (content.diagram === "c172-engine") drawCessnaEngine(x, y, width, height);
  else if (content.diagram === "c172-gear") drawCessnaGear(x, y, width, height);
  else if (content.diagram === "c172-exterior") drawCessnaExterior(x, y, width, height);
  else drawHydraulicDiagram(x, y, width, height);

  drawContentNodes(content, x, y, width, height);
}

function drawGridBackground(x, y, width, height) {
  ctx.fillStyle = "#162026";
  ctx.fillRect(x, y, width, height);

  ctx.strokeStyle = "#2a3b44";
  ctx.lineWidth = 1;
  const grid = Math.max(26, width / 14);
  for (let gx = x; gx <= x + width; gx += grid) {
    ctx.beginPath();
    ctx.moveTo(gx, y);
    ctx.lineTo(gx, y + height);
    ctx.stroke();
  }
  for (let gy = y; gy <= y + height; gy += grid) {
    ctx.beginPath();
    ctx.moveTo(x, gy);
    ctx.lineTo(x + width, gy);
    ctx.stroke();
  }
}

function drawCessnaExterior(x, y, width, height) {
  const cx = x + width * 0.5;
  const cy = y + height * 0.54;
  const scale = Math.min(width / 900, height / 520);
  drawCessnaSide(cx, cy, scale);
  drawLabel(x + width * 0.1, y + height * 0.84, "Cessna 172: aviao leve, monomotor, asa alta, trem fixo.");
}

function drawCessnaSide(cx, cy, scale) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  ctx.fillStyle = "#e8eef0";
  ctx.strokeStyle = "#26333a";
  ctx.lineWidth = 4;

  roundedPath([
    [-255, -22],
    [-180, -56],
    [115, -54],
    [265, -24],
    [290, 4],
    [252, 28],
    [-165, 36],
    [-255, 8]
  ]);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#8fb8c6";
  roundedPath([
    [-92, -62],
    [-24, -88],
    [78, -76],
    [105, -52],
    [-88, -50]
  ]);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#f2b84b";
  ctx.fillRect(-250, 6, 515, 12);
  ctx.fillStyle = "#40c4a4";
  ctx.fillRect(-210, 20, 250, 9);

  ctx.fillStyle = "#d8e4e7";
  ctx.strokeStyle = "#26333a";
  roundedPath([
    [-88, -68],
    [-255, -135],
    [95, -132],
    [210, -70]
  ]);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(54, -55);
  ctx.lineTo(150, -120);
  ctx.stroke();

  ctx.fillStyle = "#d8e4e7";
  roundedPath([
    [205, -36],
    [304, -96],
    [315, -32]
  ]);
  ctx.fill();
  ctx.stroke();

  roundedPath([
    [198, -23],
    [308, 14],
    [220, 20]
  ]);
  ctx.fill();
  ctx.stroke();

  drawWheel(-130, 58, 27);
  drawWheel(110, 58, 30);
  drawStrut(-130, 35, -118, 58);
  drawStrut(110, 35, 100, 58);
  drawPropeller(-278, -6, 74);

  ctx.restore();
}

function drawCessnaCockpit(x, y, width, height) {
  const px = x + width * 0.16;
  const py = y + height * 0.25;
  const pw = width * 0.68;
  const ph = height * 0.56;

  ctx.fillStyle = "#26333a";
  ctx.strokeStyle = "#d8e4e7";
  ctx.lineWidth = 4;
  roundRect(px, py, pw, ph, 18);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#101316";
  roundRect(px + pw * 0.08, py + ph * 0.12, pw * 0.46, ph * 0.45, 8);
  ctx.fill();
  ctx.stroke();

  const gauges = [
    [0.18, 0.24],
    [0.3, 0.24],
    [0.42, 0.24],
    [0.18, 0.42],
    [0.3, 0.42],
    [0.42, 0.42]
  ];
  gauges.forEach(([gx, gy]) => drawGauge(px + pw * gx, py + ph * gy, Math.min(width, height) * 0.035));

  drawYoke(px + pw * 0.32, py + ph * 0.72, width * 0.08);
  drawYoke(px + pw * 0.62, py + ph * 0.72, width * 0.08);

  ctx.fillStyle = "#101316";
  roundRect(px + pw * 0.61, py + ph * 0.18, pw * 0.25, ph * 0.34, 8);
  ctx.fill();
  ctx.stroke();

  ["POT", "MIX", "CARB"].forEach((label, index) => {
    const tx = px + pw * (0.65 + index * 0.07);
    const ty = py + ph * 0.6;
    ctx.fillStyle = ["#f2b84b", "#ee6b6e", "#7db7ff"][index];
    ctx.beginPath();
    ctx.arc(tx, ty, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#d8e4e7";
    ctx.font = "700 11px system-ui";
    ctx.fillText(label, tx - 13, ty + 26);
  });
}

function drawCessnaControls(x, y, width, height) {
  drawCessnaExterior(x, y, width, height);
  arrow(x + width * 0.24, y + height * 0.23, x + width * 0.32, y + height * 0.31, "#40c4a4");
  arrow(x + width * 0.82, y + height * 0.37, x + width * 0.77, y + height * 0.42, "#f2b84b");
  arrow(x + width * 0.86, y + height * 0.18, x + width * 0.84, y + height * 0.27, "#ee6b6e");
}

function drawCessnaEngine(x, y, width, height) {
  const cx = x + width * 0.52;
  const cy = y + height * 0.5;
  const scale = Math.min(width / 900, height / 520);

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#e8eef0";
  ctx.strokeStyle = "#26333a";
  ctx.lineWidth = 4;
  roundedPath([
    [-165, -90],
    [110, -82],
    [218, -24],
    [210, 58],
    [90, 92],
    [-170, 70],
    [-225, 10]
  ]);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#40c4a4";
  ctx.fillRect(-160, 26, 300, 15);
  ctx.fillStyle = "#101316";
  roundRect(62, 10, 88, 42, 8);
  ctx.fill();
  drawPropeller(-230, -4, 150);

  ctx.strokeStyle = "#f2b84b";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(-70, 0, 58, 0.1, Math.PI * 1.7);
  ctx.stroke();
  ctx.restore();
}

function drawCessnaGear(x, y, width, height) {
  const cx = x + width * 0.5;
  const cy = y + height * 0.48;
  const scale = Math.min(width / 900, height / 520);
  drawCessnaSide(cx, cy, scale);

  ctx.strokeStyle = "#40c4a4";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(x + width * 0.49, y + height * 0.63, width * 0.08, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "#f2b84b";
  ctx.beginPath();
  ctx.arc(x + width * 0.33, y + height * 0.64, width * 0.055, 0, Math.PI * 2);
  ctx.stroke();
}

function drawHydraulicDiagram(x, y, width, height) {
  const nodes = currentContent().nodes || [];
  lineBetween(nodes[0], nodes[1], x, y, width, height);
  lineBetween(nodes[1], nodes[2], x, y, width, height);
  drawComponent(x + width * 0.14, y + height * 0.36, width * 0.2, height * 0.15, "Reservatorio");
  drawComponent(x + width * 0.41, y + height * 0.52, width * 0.18, height * 0.15, "Bomba");
  drawComponent(x + width * 0.69, y + height * 0.3, width * 0.21, height * 0.15, "Atuador");
}

function drawContentNodes(content, x, y, width, height) {
  const nodes = content.nodes || [];
  nodes.forEach((node) => {
    const px = x + node.x * width;
    const py = y + node.y * height;
    drawMarker(px, py, node.color, node.title);
    hitTargets.push({ x: px, y: py, radius: 34, data: node, visible: true });
  });
}

function drawComponent(x, y, width, height, label) {
  ctx.fillStyle = "#26333a";
  ctx.strokeStyle = "#d8e4e7";
  ctx.lineWidth = 3;
  roundRect(x, y, width, height, 10);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#f4f7f8";
  ctx.font = `700 ${Math.max(12, width * 0.12)}px system-ui`;
  ctx.fillText(label, x + width * 0.1, y + height * 0.58);
}

function lineBetween(a, b, x, y, width, height) {
  if (!a || !b) return;
  ctx.strokeStyle = "#d8e4e7";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x + a.x * width, y + a.y * height);
  ctx.lineTo(x + b.x * width, y + b.y * height);
  ctx.stroke();
}

function drawMarker(x, y, color, label) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = "rgba(255,255,255,0.92)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x, y, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y, 24 + Math.sin(performance.now() / 220) * 2, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.55;
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(9,11,13,0.82)";
  ctx.font = "700 12px system-ui";
  const labelWidth = ctx.measureText(label).width + 14;
  ctx.fillRect(x - labelWidth / 2, y + 28, labelWidth, 24);
  ctx.fillStyle = "#f4f7f8";
  ctx.textAlign = "center";
  ctx.fillText(label, x, y + 45);
  ctx.restore();
}

function projectHotspot(hotspot, x, y, width, height, eyeOffset) {
  const delta = normalizedDelta(hotspot.yaw, yaw + eyeOffset);
  const pitchDelta = hotspot.pitch - pitch * 0.75;
  const visible = Math.abs(delta) < panoramaViewYawSpan / 2 && Math.abs(pitchDelta) < panoramaViewPitchSpan / 2;
  return {
    x: x + width / 2 + (delta / panoramaViewYawSpan) * width,
    y: y + height / 2 + (pitchDelta / panoramaViewPitchSpan) * height,
    radius: 34,
    visible
  };
}

function selectAt(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (clientX - rect.left) * scaleX;
  const y = (clientY - rect.top) * scaleY;
  const target = hitTargets.find((item) => Math.hypot(item.x - x, item.y - y) <= item.radius);
  if (!target) return;

  els.detailTitle.textContent = target.data.title;
  els.detailText.textContent = target.data.text;
  els.activeTitle.textContent = target.data.title;
  els.activeHint.textContent = target.data.text;
  syncVrHud();
}

function toggleVrMode() {
  if (isVrMode) {
    exitVrMode();
  } else {
    enterVrMode();
  }
}

function enterVrMode() {
  isVrMode = !isVrMode;
  document.body.classList.add("vr-mode");
  els.vrBtn.textContent = "Sair do VR Box";
  document.documentElement.requestFullscreen?.().catch(() => {});
  screen.orientation?.lock?.("landscape").catch(() => {});
  armVrHistory();
  startGyroscope();
}

function exitVrMode(options = {}) {
  if (!isVrMode) return;
  isVrMode = false;
  document.body.classList.remove("vr-mode");
  els.vrBtn.textContent = "Modo VR Box";
  if (gyroEnabled) stopGyroscope();
  if (document.fullscreenElement) {
    document.exitFullscreen?.().catch(() => {});
  }
  screen.orientation?.unlock?.();
  if (options.home) {
    goToTrainingHome();
  }
}

function armVrHistory() {
  if (vrHistoryArmed) return;
  vrHistoryArmed = true;
  history.pushState({ aeroTrainerVr: true }, "", location.href);
}

function disarmVrHistory() {
  vrHistoryArmed = false;
}

function handleBrowserBack() {
  if (isVrMode || vrHistoryArmed) {
    exitVrMode({ home: true });
    disarmVrHistory();
  }
}

async function startGyroscope() {
  if (!("DeviceOrientationEvent" in window)) {
    showSystemMessage(
      "Giroscopio indisponivel",
      "Este navegador nao liberou orientacao do aparelho. Teste no telefone, e preferencialmente em HTTPS; no computador essa funcao normalmente nao existe."
    );
    return;
  }

  try {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== "granted") {
        showSystemMessage("Permissao negada", "O navegador nao liberou o sensor de movimento.");
        return;
      }
    }

    gyroBase = null;
    gyroEnabled = true;
    window.addEventListener("deviceorientation", handleDeviceOrientation, true);
    els.gyroBtn.classList.add("active");
    els.gyroBtn.textContent = "Giro ativo";
    showSystemMessage("Giroscopio ativo", "Mova o telefone para olhar ao redor. Use Centralizar para recalibrar.");
  } catch {
    showSystemMessage(
      "Giroscopio bloqueado",
      "O navegador bloqueou o sensor. Em celulares, abra a aplicacao em HTTPS ou publique temporariamente em um servico com HTTPS para liberar orientacao do aparelho."
    );
  }
}

function stopGyroscope() {
  gyroEnabled = false;
  gyroBase = null;
  window.removeEventListener("deviceorientation", handleDeviceOrientation, true);
  els.gyroBtn.classList.remove("active");
  els.gyroBtn.textContent = "Giroscopio";
}

function toggleGyroscope() {
  if (gyroEnabled) stopGyroscope();
  else startGyroscope();
}

function handleDeviceOrientation(event) {
  if (!gyroEnabled || activeView !== "360") return;
  if (event.alpha == null && event.beta == null && event.gamma == null) return;

  const alpha = event.alpha || 0;
  const beta = event.beta || 0;
  const gamma = event.gamma || 0;
  if (!gyroBase) {
    gyroBase = { alpha, beta, gamma, yaw, pitch };
  }

  const alphaDelta = shortestDegreeDelta(alpha, gyroBase.alpha);
  const verticalDelta = getVerticalOrientationDelta(beta, gamma);
  yaw = wrap01(gyroBase.yaw - alphaDelta / 360);
  pitch = clamp(gyroBase.pitch + verticalDelta / 150, -0.34, 0.34);
}

function getVerticalOrientationDelta(beta, gamma) {
  const angle = getScreenAngle();
  const betaDelta = beta - gyroBase.beta;
  const gammaDelta = gamma - gyroBase.gamma;

  if (Math.abs(angle) === 90) {
    return angle > 0 ? gammaDelta : -gammaDelta;
  }

  if (Math.abs(betaDelta) < 1 && Math.abs(gammaDelta) > 1) {
    return gammaDelta;
  }

  return betaDelta;
}

function getScreenAngle() {
  if (screen.orientation && typeof screen.orientation.angle === "number") {
    return normalizeScreenAngle(screen.orientation.angle);
  }
  if (typeof window.orientation === "number") {
    return normalizeScreenAngle(window.orientation);
  }
  return 0;
}

function normalizeScreenAngle(angle) {
  if (angle === 270) return -90;
  if (angle === -270) return 90;
  return angle;
}

function showSystemMessage(title, text) {
  els.detailTitle.textContent = title;
  els.detailText.textContent = text;
  els.activeTitle.textContent = title;
  els.activeHint.textContent = text;
  syncVrHud();
}

function syncVrHud() {
  els.vrModeTexts.forEach((item) => {
    item.textContent = els.activeMode.textContent;
  });
  els.vrTitleTexts.forEach((item) => {
    item.textContent = els.activeTitle.textContent;
  });
  els.vrHintTexts.forEach((item) => {
    item.textContent = els.activeHint.textContent;
  });
}

canvas.addEventListener("pointerdown", (event) => {
  if (gyroEnabled) stopGyroscope();
  dragStart = { x: event.clientX, y: event.clientY };
  lastPointer = { x: event.clientX, y: event.clientY };
  canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener("pointermove", (event) => {
  if (!lastPointer && !(isVrMode && activeView === "360" && event.pointerType === "mouse")) return;
  const previous = lastPointer || { x: event.clientX, y: event.clientY };
  const dx = event.clientX - previous.x;
  const dy = event.clientY - previous.y;
  lastPointer = { x: event.clientX, y: event.clientY };

  if (activeView === "360") {
    yaw = wrap01(yaw - dx * 0.0014);
    pitch = clamp(pitch + dy * 0.0014, -0.34, 0.34);
  }
});

canvas.addEventListener("pointerup", (event) => {
  const moved = dragStart ? Math.hypot(event.clientX - dragStart.x, event.clientY - dragStart.y) : 0;
  if (moved < 8) {
    selectAt(event.clientX, event.clientY);
  }
  dragStart = null;
  lastPointer = null;
});

els.vrBtn.addEventListener("click", toggleVrMode);
els.fullscreenBtn.addEventListener("click", () => document.documentElement.requestFullscreen?.());
els.gyroBtn.addEventListener("click", toggleGyroscope);
els.resetViewBtn.addEventListener("click", () => {
  const content = currentContent();
  yaw = content.startYaw ?? 0.5;
  pitch = content.startPitch ?? 0;
  gyroBase = null;
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isVrMode) exitVrMode();
});

window.addEventListener("popstate", handleBrowserBack);

function drawLabel(x, y, text) {
  ctx.fillStyle = "rgba(9,11,13,0.72)";
  ctx.fillRect(x - 12, y - 24, ctx.measureText(text).width + 24, 38);
  ctx.fillStyle = "#d8e4e7";
  ctx.font = "700 16px system-ui";
  ctx.fillText(text, x, y);
}

function drawWheel(x, y, radius) {
  ctx.fillStyle = "#101316";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#b9c8ca";
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.45, 0, Math.PI * 2);
  ctx.fill();
}

function drawStrut(x1, y1, x2, y2) {
  ctx.strokeStyle = "#26333a";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawPropeller(x, y, length) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = "#101316";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(0, -length / 2);
  ctx.lineTo(0, length / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-length / 2, 0);
  ctx.lineTo(length / 2, 0);
  ctx.stroke();
  ctx.fillStyle = "#f2b84b";
  ctx.beginPath();
  ctx.arc(0, 0, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawGauge(x, y, radius) {
  ctx.fillStyle = "#26333a";
  ctx.strokeStyle = "#d8e4e7";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = "#40c4a4";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + radius * 0.55, y - radius * 0.25);
  ctx.stroke();
}

function drawYoke(x, y, size) {
  ctx.strokeStyle = "#d8e4e7";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(x, y, size, Math.PI * 0.15, Math.PI * 0.85, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + size * 0.9);
  ctx.stroke();
}

function arrow(x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - Math.cos(angle - 0.6) * 18, y2 - Math.sin(angle - 0.6) * 18);
  ctx.lineTo(x2 - Math.cos(angle + 0.6) * 18, y2 - Math.sin(angle + 0.6) * 18);
  ctx.closePath();
  ctx.fill();
}

function roundedPath(points) {
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let index = 1; index < points.length; index += 1) {
    ctx.lineTo(points[index][0], points[index][1]);
  }
  ctx.closePath();
}

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function normalizedDelta(a, b) {
  let delta = a - wrap01(b);
  if (delta > 0.5) delta -= 1;
  if (delta < -0.5) delta += 1;
  return delta;
}

function shortestDegreeDelta(a, b) {
  let delta = a - b;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return delta;
}

function wrap(value, max) {
  return ((value % max) + max) % max;
}

function wrap01(value) {
  return ((value % 1) + 1) % 1;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

renderModuleList();
renderStageList();
renderChecklist();
loadPanorama();
updateHud();
draw();
