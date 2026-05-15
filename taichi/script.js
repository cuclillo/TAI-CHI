const routine = [
  {
    phase: "Calentamiento",
    title: "Postura inicial y cuello suave",
    duration: 90,
    difficulty: "Muy baja dificultad",
    goal: "Preparar cuello, hombros y postura sin tension.",
    pose: "pose-neck",
    hint: "Mueve solo hasta donde sea comodo. El cuello no debe doler.",
    caution: "No hagas circulos completos si marean. Usa medios circulos lentos.",
    steps: [
      "Coloca los pies al ancho de los hombros.",
      "Flexiona muy poco las rodillas y alarga la espalda.",
      "Relaja brazos, manos y hombros.",
      "Lleva la cabeza hacia un hombro y dibuja medio circulo hacia delante.",
      "Vuelve despacio al otro lado respirando suave."
    ],
    seated: [
      "Sientate cerca del borde de una silla estable.",
      "Apoya ambos pies en el suelo.",
      "Mantén la espalda larga y los hombros bajos.",
      "Haz medios circulos pequenos con el cuello, sin forzar."
    ]
  },
  {
    phase: "Practica principal",
    title: "Elevacion y empuje de brazos",
    duration: 120,
    difficulty: "Muy baja dificultad",
    goal: "Coordinar respiracion, brazos y postura.",
    pose: "pose-arms",
    hint: "Sube al inhalar. Baja y empuja suave al exhalar.",
    caution: "Evita subir los hombros. Los codos y dedos deben sentirse sueltos.",
    steps: [
      "Inhala y lleva las manos por el centro hasta la altura de los hombros.",
      "Exhala y empuja suavemente con las palmas hacia delante.",
      "Deja que las manos bajen sin fuerza.",
      "Mantén la cadera neutral y la columna larga.",
      "Repite con ritmo tranquilo."
    ],
    seated: [
      "Sientate con los pies apoyados y separados.",
      "Sube las manos hasta la altura del pecho.",
      "Empuja suave hacia delante y baja las manos.",
      "Mantén los hombros lejos de las orejas."
    ]
  },
  {
    phase: "Practica principal",
    title: "Balanceo y giro de tronco",
    duration: 150,
    difficulty: "Baja a media",
    goal: "Practicar equilibrio, piernas y giro suave.",
    pose: "pose-sway",
    hint: "El peso cambia de lado sin prisa. La rodilla mira hacia la punta del pie.",
    caution: "No bajes demasiado. Si pierdes equilibrio, reduce el giro o usa una silla cerca.",
    steps: [
      "Separa un poco mas los pies y gira las puntas ligeramente hacia fuera.",
      "Pasa el peso hacia la pierna izquierda sin hundirte.",
      "Eleva la punta del pie contrario y gira suavemente sobre el talon.",
      "Regresa al centro con control.",
      "Repite hacia el otro lado respirando de forma amplia."
    ],
    seated: [
      "Sientate con los pies firmes en el suelo.",
      "Gira el tronco poco a poco hacia la izquierda.",
      "Vuelve al centro y gira hacia la derecha.",
      "Acompana con brazos sueltos y respiracion lenta."
    ]
  },
  {
    phase: "Calma",
    title: "Respiracion Tan Tien",
    duration: 105,
    difficulty: "Baja dificultad",
    goal: "Relajar la mente y sentir respiracion abdominal.",
    pose: "pose-breath",
    hint: "Imagina que el aire baja hasta las manos.",
    caution: "No levantes el pecho ni los hombros. La respiracion debe ser comoda.",
    steps: [
      "Coloca las manos sobre el abdomen, debajo del ombligo.",
      "Inhala por la nariz de forma suave.",
      "Permite que el abdomen se expanda de manera natural.",
      "Exhala lento y deja que el abdomen se relaje.",
      "Mantén la mandibula y los hombros sin tension."
    ],
    seated: [
      "Sientate con espalda comoda y larga.",
      "Apoya las manos sobre el abdomen.",
      "Respira hacia las manos sin subir hombros.",
      "Exhala largo, como si soltaras peso."
    ]
  },
  {
    phase: "Enfriamiento",
    title: "Giro suave y cierre",
    duration: 90,
    difficulty: "Muy baja dificultad",
    goal: "Soltar zona lumbar, caderas y terminar con calma.",
    pose: "pose-sway",
    hint: "Reduce el movimiento poco a poco hasta quedarte en quietud.",
    caution: "No hagas giros bruscos. Termina descansando antes de otras actividades.",
    steps: [
      "Acerca los pies hasta quedar estable y centrado.",
      "Suelta brazos, hombros y manos.",
      "Haz pequenos giros de tronco para liberar caderas y zona lumbar.",
      "Disminuye el movimiento poco a poco.",
      "Quedate quieto unos segundos respirando tranquilo."
    ],
    seated: [
      "Sientate estable y suelta los brazos.",
      "Haz giros pequenos del tronco.",
      "Reduce el movimiento hasta detenerte.",
      "Respira tranquilo unos segundos antes de levantarte."
    ]
  }
];

const storageKey = "taiChiSuave55Progress";
const settingsKey = "taiChiSuave55Settings";
const speeds = [0.5, 0.75, 1, 1.25, 1.5];

const state = {
  current: 0,
  remaining: routine[0].duration,
  playing: false,
  speedIndex: 2,
  intervalId: null,
  seated: false,
  voice: false,
  cameraStream: null
};

const elements = {
  bodyPose: document.querySelector("#bodyPose"),
  cameraButton: document.querySelector("#cameraButton"),
  cameraMount: document.querySelector("#cameraMount"),
  cautionText: document.querySelector("#cautionText"),
  completeButton: document.querySelector("#completeButton"),
  contrastButton: document.querySelector("#contrastButton"),
  exerciseGoal: document.querySelector("#exerciseGoal"),
  exerciseMeta: document.querySelector("#exerciseMeta"),
  exerciseTitle: document.querySelector("#exerciseTitle"),
  fasterButton: document.querySelector("#fasterButton"),
  fontButton: document.querySelector("#fontButton"),
  lastPractice: document.querySelector("#lastPractice"),
  liveMessage: document.querySelector("#liveMessage"),
  modeLabel: document.querySelector("#modeLabel"),
  nextButton: document.querySelector("#nextButton"),
  phaseLabel: document.querySelector("#phaseLabel"),
  playButton: document.querySelector("#playButton"),
  practiceCount: document.querySelector("#practiceCount"),
  prevButton: document.querySelector("#prevButton"),
  routineButtons: document.querySelector("#routineButtons"),
  seatedMode: document.querySelector("#seatedMode"),
  slowerButton: document.querySelector("#slowerButton"),
  speedLabel: document.querySelector("#speedLabel"),
  stepList: document.querySelector("#stepList"),
  timerDisplay: document.querySelector("#timerDisplay"),
  visualHint: document.querySelector("#visualHint"),
  voiceMode: document.querySelector("#voiceMode")
};

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const rest = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function getCurrentExercise() {
  return routine[state.current];
}

function speak(text) {
  if (!state.voice || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function announce(message, shouldSpeak = false) {
  elements.liveMessage.textContent = message;
  if (shouldSpeak) speak(message);
}

function renderProgress() {
  const progress = loadJson(storageKey, { count: 0, lastPractice: null });
  elements.practiceCount.textContent = String(progress.count || 0);
  elements.lastPractice.textContent = progress.lastPractice
    ? new Date(progress.lastPractice).toLocaleDateString("es-ES")
    : "Sin datos";
}

function renderRoutineButtons() {
  elements.routineButtons.innerHTML = "";
  routine.forEach((exercise, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${index + 1}. ${exercise.title}`;
    button.setAttribute("aria-label", `Ir a ${exercise.title}`);
    if (index === state.current) button.setAttribute("aria-current", "step");
    button.addEventListener("click", () => goToExercise(index));
    elements.routineButtons.append(button);
  });
}

function renderExercise(resetTime = true) {
  const exercise = getCurrentExercise();
  const steps = state.seated ? exercise.seated : exercise.steps;

  elements.phaseLabel.textContent = exercise.phase;
  elements.exerciseTitle.textContent = exercise.title;
  elements.exerciseMeta.textContent = exercise.difficulty;
  elements.exerciseGoal.textContent = exercise.goal;
  elements.cautionText.textContent = exercise.caution;
  elements.visualHint.textContent = exercise.hint;
  elements.modeLabel.textContent = state.seated ? "Sentado" : "De pie";
  elements.seatedMode.checked = state.seated;
  elements.voiceMode.checked = state.voice;

  elements.stepList.innerHTML = "";
  steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    elements.stepList.append(li);
  });

  if (elements.bodyPose) {
    elements.bodyPose.setAttribute("class", `pose ${exercise.pose}`);
  }
  if (resetTime) state.remaining = exercise.duration;
  elements.timerDisplay.textContent = formatTime(state.remaining);
  renderRoutineButtons();
  announce(`${exercise.phase}. ${exercise.title}. ${exercise.hint}`, state.voice);
}

function updatePlayButton() {
  elements.playButton.textContent = state.playing ? "Pausar" : "Iniciar";
}

function stopTimer() {
  state.playing = false;
  clearInterval(state.intervalId);
  state.intervalId = null;
  updatePlayButton();
}

function tick() {
  const speed = speeds[state.speedIndex];
  state.remaining -= speed;
  elements.timerDisplay.textContent = formatTime(state.remaining);

  if (state.remaining <= 0) {
    if (state.current < routine.length - 1) {
      goToExercise(state.current + 1);
      state.playing = true;
      updatePlayButton();
    } else {
      stopTimer();
      elements.timerDisplay.textContent = "00:00";
      announce("Rutina terminada. Descansa unos minutos antes de seguir con tu dia.", true);
    }
  }
}

function togglePlay() {
  if (state.playing) {
    stopTimer();
    announce("Practica pausada.");
    return;
  }

  state.playing = true;
  updatePlayButton();
  announce("Empezamos con calma. Respira suave.", true);
  state.intervalId = setInterval(tick, 1000);
}

function goToExercise(index) {
  stopTimer();
  state.current = Math.min(Math.max(index, 0), routine.length - 1);
  renderExercise(true);
}

function changeSpeed(direction) {
  state.speedIndex = Math.min(Math.max(state.speedIndex + direction, 0), speeds.length - 1);
  elements.speedLabel.textContent = `${speeds[state.speedIndex]}x`;
  saveSettings();
  announce(`Velocidad ${speeds[state.speedIndex]}x.`);
}

function saveSettings() {
  saveJson(settingsKey, {
    seated: state.seated,
    voice: state.voice,
    speedIndex: state.speedIndex,
    largeText: document.body.classList.contains("large-text"),
    highContrast: document.body.classList.contains("high-contrast")
  });
}

function loadSettings() {
  const settings = loadJson(settingsKey, {});
  state.seated = Boolean(settings.seated);
  state.voice = Boolean(settings.voice);
  state.speedIndex = Number.isInteger(settings.speedIndex) ? settings.speedIndex : 2;
  if (settings.largeText) document.body.classList.add("large-text");
  if (settings.highContrast) document.body.classList.add("high-contrast");
  elements.speedLabel.textContent = `${speeds[state.speedIndex]}x`;
}

function markComplete() {
  const progress = loadJson(storageKey, { count: 0, lastPractice: null });
  progress.count = (progress.count || 0) + 1;
  progress.lastPractice = new Date().toISOString();
  saveJson(storageKey, progress);
  renderProgress();
  announce("Sesion guardada en este dispositivo. Buen trabajo.", true);
}

async function toggleCamera() {
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach((track) => track.stop());
    state.cameraStream = null;
    elements.cameraMount.innerHTML = "";
    elements.cameraButton.textContent = "Activar camara";
    announce("Camara desactivada.");
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    announce("Este navegador no permite usar camara desde esta pagina.");
    return;
  }

  try {
    state.cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false
    });
    const preview = document.createElement("video");
    preview.id = "cameraPreview";
    preview.className = "camera-preview is-active";
    preview.autoplay = true;
    preview.muted = true;
    preview.playsInline = true;
    preview.srcObject = state.cameraStream;
    elements.cameraMount.append(preview);
    elements.cameraButton.textContent = "Desactivar camara";
    announce("Camara activada. El video queda solo en tu dispositivo.");
  } catch {
    announce("No se pudo activar la camara. Revisa permisos del navegador.");
  }
}

function bindEvents() {
  elements.playButton.addEventListener("click", togglePlay);
  elements.prevButton.addEventListener("click", () => goToExercise(state.current - 1));
  elements.nextButton.addEventListener("click", () => goToExercise(state.current + 1));
  elements.slowerButton.addEventListener("click", () => changeSpeed(-1));
  elements.fasterButton.addEventListener("click", () => changeSpeed(1));
  elements.completeButton.addEventListener("click", markComplete);
  elements.cameraButton.addEventListener("click", toggleCamera);

  elements.seatedMode.addEventListener("change", () => {
    state.seated = elements.seatedMode.checked;
    saveSettings();
    renderExercise(false);
  });

  elements.voiceMode.addEventListener("change", () => {
    state.voice = elements.voiceMode.checked;
    saveSettings();
    announce(state.voice ? "Guia hablada activada." : "Guia hablada desactivada.", state.voice);
  });

  // Estos ajustes se guardan localmente para reducir friccion a personas mayores
  // que necesitan siempre la misma configuracion visual.
  elements.fontButton.addEventListener("click", () => {
    document.body.classList.toggle("large-text");
    saveSettings();
  });

  elements.contrastButton.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
    saveSettings();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && event.target === document.body) {
      event.preventDefault();
      togglePlay();
    }
    if (event.key === "ArrowRight") goToExercise(state.current + 1);
    if (event.key === "ArrowLeft") goToExercise(state.current - 1);
  });
}

function init() {
  const requiredElements = Object.entries(elements).filter(([key]) => key !== "bodyPose");
  const missingElement = requiredElements.find(([, element]) => !element);
  if (missingElement) {
    return;
  }

  loadSettings();
  renderProgress();
  renderExercise(true);
  bindEvents();
}

// Esperamos a que el documento este listo para que los validadores y lectores
// de pantalla encuentren una interfaz completa antes de activar el estado.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
