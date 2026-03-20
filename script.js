const HABILIDADES = [
  { icone: "🌐", nome: "Frontend", nivel: 80, etiquetas: ["HTML", "CSS", "JavaScript"] },
  { icone: "⚙️", nome: "Backend", nivel: 40, etiquetas: ["Node.js", "Express", "REST API"] },
  { icone: "🗄️", nome: "Banco de Dados", nivel: 50, etiquetas: ["MySQL", "MongoDB"] },
  { icone: "🎨", nome: "UI / Design", nivel: 70, etiquetas: ["Figma", "CSS Animation", "Responsivo"] },
  { icone: "🛠️", nome: "Ferramentas", nivel: 65, etiquetas: ["Git", "GitHub", "VS Code"] },
  { icone: "🐍", nome: "Linguagens", nivel: 70, etiquetas: ["JavaScript", "Python", "Java"] },
];

const ANIMES = [
  { titulo: "Blue Lock", japones: "ブルーロック", genero: "Esporte · Shounen", estrelas: "★★★★★", imagem: "imagens/blue-lock.jpg", cor1: "#030812", cor2: "#061838", destaque: "#1e5fff" },
  { titulo: "Jujutsu Kaisen", japones: "呪術廻戦", genero: "Ação · Sobrenatural", estrelas: "★★★★★", imagem: "imagens/jujutsu-kaisen.jpg", cor1: "#0c0418", cor2: "#28084a", destaque: "#9d44ff" },
  { titulo: "Romance", japones: "恋愛アニメ", genero: "Romance · Slice of Life", estrelas: "★★★★☆", imagem: "imagens/romance.jpg", cor1: "#180810", cor2: "#461030", destaque: "#ff4d88" },
  { titulo: "Demon Slayer", japones: "鬼滅の刃", genero: "Ação · Fantasia", estrelas: "★★★★★", imagem: "imagens/demon-slayer.jpg", cor1: "#180a06", cor2: "#4a1808", destaque: "#ff4422" },
];

const PROJETOS = [
  { titulo: "Projeto Alpha", descricao: "Aplicação web com autenticação, dashboard e CRUD dinâmico.", tecnologias: ["HTML","CSS","JavaScript","Node.js"], cor1:"#1a0828", cor2:"#3d1050", emoji:"⚡", status:"ativo", demo:"#", codigo:"#" },
  { titulo: "Projeto Beta", descricao: "Sistema de gerenciamento de tarefas com interface responsiva e banco de dados.", tecnologias: ["JavaScript","MySQL","Express"], cor1:"#08181a", cor2:"#0f4050", emoji:"📋", status:"ativo", demo:"#", codigo:"#" },
  { titulo: "Projeto Gamma", descricao: "Landing page moderna com animações e design 100% responsivo.", tecnologias: ["HTML","CSS","JavaScript"], cor1:"#1a1408", cor2:"#4a3010", emoji:"🎨", status:"andamento", demo:"#", codigo:"#" },
];

const PILULAS_ANIME = ["Blue Lock", "Jujutsu Kaisen", "Kaguya-sama", "Your Name", "Violet Evergarden", "Vinland Saga", "Chainsaw Man", "Spy × Family"];

const INFO_PESSOAL = [
  { rotulo: "Nome", valor: "Miguel Lima" },
  { rotulo: "Curso", valor: "ADS · Análise e Dev. de Sistemas" },
  { rotulo: "Experiência", valor: "1 ano" },
  { rotulo: "Localização", valor: "Brasil 🇧🇷" },
  { rotulo: "Disponibilidade", valor: "Freelance / Estágio" },
  { rotulo: "Status", valor: "🟢 Online" },
];

const TEXTOS_DIGITANDO = ["Desenvolvedor Web_","Estudante de ADS_","Anime Enjoyer 🎌_","Bug Destroyer_","Full Stack Jr._"];

const hamburguer = document.getElementById('hamburguer');
const gavetaNav = document.getElementById('gaveta-nav');
hamburguer.addEventListener('click', () => { hamburguer.classList.toggle('aberto'); gavetaNav.classList.toggle('aberta'); });
document.querySelectorAll('#gaveta-nav a').forEach(a => a.addEventListener('click', () => { hamburguer.classList.remove('aberto'); gavetaNav.classList.remove('aberta'); }));

if (window.matchMedia('(hover: hover)').matches) {
  const cursor = document.getElementById('cursor');
  const anelCursor = document.getElementById('anel-cursor');
  let rx=0, ry=0;
  document.addEventListener('mousemove', e => { cursor.style.left=e.clientX+'px'; cursor.style.top=e.clientY+'px'; rx+=(e.clientX-rx)*0.12; ry+=(e.clientY-ry)*0.12; });
  (function animarAnel(){ anelCursor.style.left=rx+'px'; anelCursor.style.top=ry+'px'; requestAnimationFrame(animarAnel); })();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width='20px'; cursor.style.height='20px'; cursor.style.background='var(--destaque2)'; });
    el.addEventListener('mouseleave', () => { cursor.style.width='12px'; cursor.style.height='12px'; cursor.style.background='var(--destaque)'; });
  });
}

const tela = document.getElementById('particulas');
const ctx = tela.getContext('2d');
let L, A, partes = [];
function redimensionar() { L = tela.width = window.innerWidth; A = tela.height = window.innerHeight; }
redimensionar();
window.addEventListener('resize', redimensionar);
class Particula {
  constructor() { this.resetar(); }
  resetar() { this.x=Math.random()*L; this.y=Math.random()*A; this.tamanho=Math.random()*1.8+0.4; this.velocidade=Math.random()*0.35+0.08; this.angulo=Math.random()*Math.PI*2; this.opacidade=Math.random()*0.32+0.08; this.cor=Math.random()>.5?'230,60,94':'123,92,240'; }
  atualizar() { this.y-=this.velocidade; this.x+=Math.sin(this.angulo+Date.now()*.001)*.3; if(this.y<-10){this.resetar();this.y=A+10;} }
  desenhar() { ctx.beginPath(); ctx.arc(this.x,this.y,this.tamanho,0,Math.PI*2); ctx.fillStyle=`rgba(${this.cor},${this.opacidade})`; ctx.fill(); }
}
const qtdParticulas = window.innerWidth < 600 ? 40 : 80;
for (let i = 0; i < qtdParticulas; i++) partes.push(new Particula());
(function animar() { ctx.clearRect(0,0,L,A); partes.forEach(p => { p.atualizar(); p.desenhar(); }); requestAnimationFrame(animar); })();

const elDigitando = document.getElementById('texto-digitando');
let ti=0, ci=0, apagando=false;
function digitar() {
  const palavra = TEXTOS_DIGITANDO[ti];
  elDigitando.textContent = apagando ? palavra.slice(0,ci--) : palavra.slice(0,ci++);
  if (!apagando && ci > palavra.length) { apagando=true; setTimeout(digitar,1100); return; }
  if (apagando && ci < 0) { apagando=false; ti=(ti+1)%TEXTOS_DIGITANDO.length; ci=0; }
  setTimeout(digitar, apagando ? 45 : 95);
}
digitar();

document.querySelectorAll('[data-alvo]').forEach(el => {
  const alvo = +el.dataset.alvo;
  let c = 0;
  const intervalo = setInterval(() => { el.textContent = ++c; if (c >= alvo) clearInterval(intervalo); }, 120);
});

const gradeHabilidades = document.getElementById('grade-habilidades');
HABILIDADES.forEach((h, i) => {
  const el = document.createElement('div');
  el.className = 'cartao-habilidade revelar' + (i%3===1?' revelar-atraso-1':i%3===2?' revelar-atraso-2':'');
  el.innerHTML = `<div class="icone-habilidade">${h.icone}</div><div class="nome-habilidade">${h.nome}</div><div class="etiquetas-habilidade">${h.etiquetas.map(e=>`<span class="etiqueta-habilidade">${e}</span>`).join('')}</div><div class="barra-progresso"><div class="preenchimento-barra" data-nivel="${h.nivel}"></div></div>`;
  gradeHabilidades.appendChild(el);
});

const gradeProjetos = document.getElementById('grade-projetos');
PROJETOS.forEach((p, i) => {
  const el = document.createElement('div');
  el.className = 'cartao-projeto revelar' + (i===1?' revelar-atraso-1':i===2?' revelar-atraso-2':'');
  el.innerHTML = `<div class="imagem-projeto"><div class="fundo-imagem-projeto" style="background:linear-gradient(135deg,${p.cor1},${p.cor2})">${p.emoji}</div><div class="rotulo-projeto">${p.titulo.toUpperCase()}</div><span class="status-projeto ${p.status==='ativo'?'status-ativo':'status-andamento'}">${p.status==='ativo'?'● LIVE':'○ WIP'}</span></div><div class="corpo-projeto"><div class="titulo-projeto">${p.titulo}</div><p class="descricao-projeto">${p.descricao}</p><div class="tecnologias">${p.tecnologias.map(t=>`<span>${t}</span>`).join('')}</div><div class="links-projeto"><a href="${p.demo}" class="link-projeto link-demo">Demo →</a><a href="${p.codigo}" class="link-projeto link-codigo">Código</a></div></div>`;
  gradeProjetos.appendChild(el);
});

const listaAnimes = document.getElementById('lista-animes');
PILULAS_ANIME.forEach(a => {
  const el = document.createElement('span');
  el.className = 'pilula-anime';
  el.textContent = `★ ${a}`;
  listaAnimes.appendChild(el);
});

const infoPessoal = document.getElementById('info-pessoal');
INFO_PESSOAL.forEach(linha => {
  const el = document.createElement('div');
  el.className = 'linha-info';
  el.innerHTML = `<span class="rotulo-info">${linha.rotulo}</span><span class="valor-info">${linha.valor}</span>`;
  infoPessoal.appendChild(el);
});

const gradeAnimes = document.getElementById('grade-animes');
ANIMES.forEach((a, i) => {
  const el = document.createElement('div');
  el.className = 'cartao-anime revelar' + (i%2===1?' revelar-atraso-1':'');
  el.innerHTML = `<div class="fundo-anime" style="background:linear-gradient(145deg,${a.cor1},${a.cor2});color:${a.destaque}">🎌</div><img class="imagem-anime" src="${a.imagem}" alt="${a.titulo}" loading="lazy" onerror="this.style.opacity=0"><div style="position:absolute;inset:0;background:linear-gradient(160deg,${a.cor1}cc 0%,transparent 50%);pointer-events:none"></div><div class="sobreposicao-anime"><div class="genero-anime">${a.genero}</div><div class="titulo-anime">${a.titulo}</div><div class="titulo-japones">${a.japones}</div><div class="estrelas-anime">${a.estrelas}</div></div>`;
  gradeAnimes.appendChild(el);
});

const observador = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
      const barra = entrada.target.querySelector('.preenchimento-barra');
      if (barra) barra.style.width = barra.dataset.nivel + '%';
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.revelar, .cartao-habilidade, .cartao-anime, .cartao-projeto').forEach(el => observador.observe(el));