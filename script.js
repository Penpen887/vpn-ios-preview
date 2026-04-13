const tabs = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".tab-content");
const sceneChips = document.querySelectorAll(".scene-chip");
const nodes = document.querySelectorAll(".node");
const globe = document.getElementById("globe");
const connectButton = document.getElementById("connectButton");
const targetNode = document.getElementById("targetNode");
const targetSpeed = document.getElementById("targetSpeed");
const modeLabel = document.getElementById("modeLabel");
const activeRoute = document.getElementById("activeRoute");
const latencyPill = document.getElementById("latencyPill");
const quickBoost = document.getElementById("quickBoost");
const prioritySlider = document.getElementById("prioritySlider");
const priorityValue = document.getElementById("priorityValue");
const customSubmit = document.getElementById("customSubmit");
const countryInput = document.getElementById("countryInput");
const goalInput = document.getElementById("goalInput");
const speedInput = document.getElementById("speedInput");
const langButtons = document.querySelectorAll(".lang-button");

const translations = {
  en: {
    heroTitle: "Private by design.",
    heroCopy: "Fast global access with a quieter interface.",
    quickBoost: "Boost",
    worldLabel: "World",
    worldTitle: "Live route",
    statusLabel: "Status",
    statusValue: "Protected",
    modeTextLabel: "Mode",
    nodeTextLabel: "Node",
    routeLabel: "Route",
    speedLabel: "Speed",
    shieldLabel: "Shield",
    shieldValue: "DNS On",
    connectButton: "Connect",
    connectedButton: "Connected",
    smartRoutingLabel: "Smart routing",
    smartRoutingTitle: "Adaptive edge",
    smartRoutingCopy: "Routes shift in real time.",
    protectionLabel: "Protection",
    protectionTitle: "Leak guard",
    protectionCopy: "DNS and exposure checks stay active.",
    customLabel: "Custom",
    customTitle: "Build a route",
    customTag: "Advanced",
    countryLabel: "Country / Region",
    countryPlaceholder: "Singapore / Germany / Japan",
    goalLabel: "Use Case",
    goalPlaceholder: "Streaming / Gaming / Work",
    speedInputLabel: "Target Speed",
    speedPlaceholder: "500 Mbps+",
    priorityLabel: "Priority",
    customSubmit: "Apply",
    securityLabel: "Network health",
    securityTitle: "Secure",
    securityCopy: "Low exposure. Medium Wi-Fi risk.",
    metricIpTitle: "IP Exposure",
    metricIpCopy: "Address hidden",
    metricIpValue: "Protected",
    metricDnsTitle: "DNS Leak",
    metricDnsCopy: "Resolver sealed",
    metricDnsValue: "No Leak",
    metricEncTitle: "Encryption",
    metricEncCopy: "Transport cipher",
    metricEncValue: "Strong",
    metricWifiTitle: "Wi-Fi Trust",
    metricWifiCopy: "Local network score",
    metricWifiValue: "Medium",
    metricTrackerTitle: "Tracker Blocking",
    metricTrackerCopy: "Blocking rate",
    settingsLabel: "Preferences",
    settingsTitle: "Settings",
    settingsPrivacyTitle: "Privacy Policy",
    settingsPrivacyCopy: "Data use",
    settingsTermsTitle: "Terms of Service",
    settingsTermsCopy: "Legal",
    settingsShareTitle: "Share App",
    settingsShareCopy: "Invite",
    settingsFeedbackTitle: "Send Feedback",
    settingsFeedbackCopy: "Support",
    settingsNotificationsTitle: "Notifications",
    settingsNotificationsCopy: "Alerts",
    settingsAboutTitle: "About Nova VPN",
    settingsAboutCopy: "Version",
    tabWorld: "World",
    tabCustom: "Custom",
    tabSecurity: "Security",
    tabSettings: "Settings",
    priorityValues: ["Latency first", "Balanced route", "Throughput first"],
    sliderLabels: ["Latency", "Balance", "Throughput"],
    scenes: {
      Streaming: { label: "Streaming", meta: "4K" },
      Gaming: { label: "Gaming", meta: "Low ping" },
      Browser: { label: "Browser", meta: "Private" },
      Work: { label: "Work", meta: "Stable" }
    }
  },
  zh: {
    heroTitle: "隐私，天生如此。",
    heroCopy: "更安静的界面，更快速的全球访问。",
    quickBoost: "加速",
    worldLabel: "世界",
    worldTitle: "实时路线",
    statusLabel: "状态",
    statusValue: "已保护",
    modeTextLabel: "模式",
    nodeTextLabel: "节点",
    routeLabel: "路线",
    speedLabel: "速率",
    shieldLabel: "防护",
    shieldValue: "DNS 已开启",
    connectButton: "连接",
    connectedButton: "已连接",
    smartRoutingLabel: "智能路由",
    smartRoutingTitle: "自适应边缘",
    smartRoutingCopy: "路径会实时切换。",
    protectionLabel: "保护",
    protectionTitle: "泄漏防护",
    protectionCopy: "DNS 与暴露检测持续开启。",
    customLabel: "自定义",
    customTitle: "构建路线",
    customTag: "高级",
    countryLabel: "国家 / 地区",
    countryPlaceholder: "新加坡 / 德国 / 日本",
    goalLabel: "用途",
    goalPlaceholder: "视频 / 游戏 / 工作",
    speedInputLabel: "目标速率",
    speedPlaceholder: "500 Mbps+",
    priorityLabel: "优先级",
    customSubmit: "应用",
    securityLabel: "网络健康",
    securityTitle: "安全",
    securityCopy: "暴露较低，Wi-Fi 风险中等。",
    metricIpTitle: "IP 暴露",
    metricIpCopy: "地址已隐藏",
    metricIpValue: "已保护",
    metricDnsTitle: "DNS 泄漏",
    metricDnsCopy: "解析已封闭",
    metricDnsValue: "无泄漏",
    metricEncTitle: "加密",
    metricEncCopy: "传输加密强度",
    metricEncValue: "强",
    metricWifiTitle: "Wi-Fi 可信度",
    metricWifiCopy: "本地网络评分",
    metricWifiValue: "中等",
    metricTrackerTitle: "追踪拦截",
    metricTrackerCopy: "拦截率",
    settingsLabel: "偏好",
    settingsTitle: "设置",
    settingsPrivacyTitle: "隐私政策",
    settingsPrivacyCopy: "数据使用",
    settingsTermsTitle: "服务条款",
    settingsTermsCopy: "法律",
    settingsShareTitle: "分享应用",
    settingsShareCopy: "邀请",
    settingsFeedbackTitle: "提交反馈",
    settingsFeedbackCopy: "支持",
    settingsNotificationsTitle: "通知",
    settingsNotificationsCopy: "提醒",
    settingsAboutTitle: "关于 Nova VPN",
    settingsAboutCopy: "版本",
    tabWorld: "世界",
    tabCustom: "自定义",
    tabSecurity: "安全",
    tabSettings: "设置",
    priorityValues: ["延迟优先", "均衡模式", "吞吐优先"],
    sliderLabels: ["延迟", "均衡", "吞吐"],
    scenes: {
      Streaming: { label: "视频", meta: "4K" },
      Gaming: { label: "游戏", meta: "低延迟" },
      Browser: { label: "浏览", meta: "私密" },
      Work: { label: "工作", meta: "稳定" }
    }
  }
};

const scenePresets = {
  Streaming: { node: "California", speed: "1.2 Gbps", latency: "Latency 22ms" },
  Gaming: { node: "Tokyo", speed: "980 Mbps", latency: "Latency 12ms" },
  Browser: { node: "London", speed: "760 Mbps", latency: "Latency 34ms" },
  Work: { node: "Frankfurt", speed: "1.0 Gbps", latency: "Latency 18ms" }
};

const customTargets = {
  japan: "Tokyo",
  tokyo: "Tokyo",
  singapore: "Singapore",
  germany: "Frankfurt",
  frankfurt: "Frankfurt",
  uk: "London",
  london: "London",
  usa: "California",
  california: "California",
  sydney: "Sydney"
};

let selectedScene = "Streaming";
let currentNode = "California";
let rotationX = -14;
let rotationY = 18;
let dragging = false;
let lastX = 0;
let lastY = 0;
let currentLanguage = "en";
let isConnected = false;

function text(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function updateDynamicText() {
  const labels = translations[currentLanguage].priorityValues;
  priorityValue.textContent = labels[Number(prioritySlider.value)];
  const connectKey = isConnected ? "connectedButton" : "connectButton";
  connectButton.textContent = translations[currentLanguage][connectKey];
}

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const copy = translations[lang];

  [
    "heroTitle",
    "heroCopy",
    "worldLabel",
    "worldTitle",
    "statusLabel",
    "statusValue",
    "modeTextLabel",
    "nodeTextLabel",
    "routeLabel",
    "speedLabel",
    "shieldLabel",
    "shieldValue",
    "smartRoutingLabel",
    "smartRoutingTitle",
    "smartRoutingCopy",
    "protectionLabel",
    "protectionTitle",
    "protectionCopy",
    "customLabel",
    "customTitle",
    "customTag",
    "countryLabel",
    "goalLabel",
    "speedInputLabel",
    "priorityLabel",
    "securityLabel",
    "securityTitle",
    "securityCopy",
    "metricIpTitle",
    "metricIpCopy",
    "metricIpValue",
    "metricDnsTitle",
    "metricDnsCopy",
    "metricDnsValue",
    "metricEncTitle",
    "metricEncCopy",
    "metricEncValue",
    "metricWifiTitle",
    "metricWifiCopy",
    "metricWifiValue",
    "metricTrackerTitle",
    "metricTrackerCopy",
    "settingsLabel",
    "settingsTitle",
    "settingsPrivacyTitle",
    "settingsPrivacyCopy",
    "settingsTermsTitle",
    "settingsTermsCopy",
    "settingsShareTitle",
    "settingsShareCopy",
    "settingsFeedbackTitle",
    "settingsFeedbackCopy",
    "settingsNotificationsTitle",
    "settingsNotificationsCopy",
    "settingsAboutTitle",
    "settingsAboutCopy",
    "tabWorld",
    "tabCustom",
    "tabSecurity",
    "tabSettings"
  ].forEach((key) => text(key, copy[key]));

  quickBoost.textContent = copy.quickBoost;
  countryInput.placeholder = copy.countryPlaceholder;
  goalInput.placeholder = copy.goalPlaceholder;
  speedInput.placeholder = copy.speedPlaceholder;
  text("sliderLabel0", copy.sliderLabels[0]);
  text("sliderLabel1", copy.sliderLabels[1]);
  text("sliderLabel2", copy.sliderLabels[2]);

  sceneChips.forEach((chip) => {
    const scene = chip.dataset.scene;
    const sceneCopy = copy.scenes[scene];
    chip.querySelector(".scene-name").textContent = sceneCopy.label;
    chip.querySelector(".scene-meta").textContent = sceneCopy.meta;
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  updateDynamicText();
}

function updateTab(tabName) {
  tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === tabName));
  panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === tabName));
}

function setActiveScene(scene) {
  selectedScene = scene;
  sceneChips.forEach((chip) => chip.classList.toggle("is-selected", chip.dataset.scene === scene));
  const preset = scenePresets[scene];
  currentNode = preset.node;
  targetNode.textContent = preset.node;
  targetSpeed.textContent = preset.speed;
  modeLabel.textContent = translations[currentLanguage].scenes[scene].label;
  latencyPill.textContent = preset.latency;
  activeRoute.textContent = `${preset.node} • ${translations[currentLanguage].scenes[scene].label}`;
  highlightNode(preset.node);
}

function highlightNode(nodeName) {
  nodes.forEach((node) => node.classList.toggle("is-active", node.dataset.node === nodeName));
}

function applyGlobeRotation() {
  globe.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function syncCustomRoute() {
  const routeText = countryInput.value.trim();
  const goalText = goalInput.value.trim() || "Custom";
  const speedText = speedInput.value.trim() || "Auto";
  const matchKey = routeText.toLowerCase();
  const matchedKey = Object.keys(customTargets).find((key) => matchKey.includes(key));
  const nextNode = matchedKey ? customTargets[matchedKey] : "Singapore";

  currentNode = nextNode;
  targetNode.textContent = nextNode;
  targetSpeed.textContent = speedText;
  modeLabel.textContent = goalText;
  activeRoute.textContent = `${nextNode} • ${goalText}`;
  latencyPill.textContent = "Latency 16ms";
  highlightNode(nextNode);
  updateTab("world");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => updateTab(tab.dataset.tab));
});

sceneChips.forEach((chip) => {
  chip.addEventListener("click", () => setActiveScene(chip.dataset.scene));
});

nodes.forEach((node) => {
  node.addEventListener("click", () => {
    currentNode = node.dataset.node;
    targetNode.textContent = currentNode;
    modeLabel.textContent = translations[currentLanguage].scenes[selectedScene].label;
    activeRoute.textContent = `${currentNode} • ${translations[currentLanguage].scenes[selectedScene].label}`;
    highlightNode(currentNode);
  });
});

connectButton.addEventListener("click", () => {
  isConnected = true;
  updateDynamicText();
  connectButton.style.background = "linear-gradient(135deg, #7effce, #65f0f7 52%, #7ba2ff)";
  activeRoute.textContent = `${currentNode} • ${modeLabel.textContent}`;
  highlightNode(currentNode);
});

quickBoost.addEventListener("click", () => {
  rotationX = -18;
  rotationY = 42;
  applyGlobeRotation();
  setActiveScene("Gaming");
});

prioritySlider.addEventListener("input", () => {
  updateDynamicText();
});

customSubmit.addEventListener("click", syncCustomRoute);

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

globe.addEventListener("pointerdown", (event) => {
  dragging = true;
  lastX = event.clientX;
  lastY = event.clientY;
  globe.setPointerCapture(event.pointerId);
});

globe.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  const deltaX = event.clientX - lastX;
  const deltaY = event.clientY - lastY;
  rotationY += deltaX * 0.35;
  rotationX -= deltaY * 0.25;
  rotationX = Math.max(-45, Math.min(45, rotationX));
  lastX = event.clientX;
  lastY = event.clientY;
  applyGlobeRotation();
});

["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
  globe.addEventListener(eventName, () => {
    dragging = false;
  });
});

applyGlobeRotation();
setActiveScene("Streaming");
applyLanguage("en");
