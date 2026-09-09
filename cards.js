/* Renders the celebratory six-pack cards into #card-list.
   The photo treatment comes from the <body> class:
   opt-a (ambient fill), opt-b (player figures top left). */

const CARDS = [
  {
    teams: [{ logo: 'assets/pistons.png', name: 'DET Pistons' }, { logo: 'assets/celtics.png', name: 'BOS Celtics' }],
    time: ['20/10', '22.00'],
    odds: [['1.80', '2.00'], [['-1.5', '1.87'], ['+1.5', '1.85']], [['O 222.2', '1.87'], ['U 222.2', '1.85']]],
    photo: { img: 'assets/hero.png', band: '50% 50%', figures: 'assets/figures-3.png' }
  },
  {
    teams: [{ logo: 'assets/pistons.png', name: 'NY Knicks' }, { logo: 'assets/celtics.png', name: 'PHI 76ers' }],
    time: ['20/10', '22.00'],
    odds: [['2.10', '1.65'], [['-1.5', '1.45'], ['+1.5', '2.50']], [['O 222.2', '3.20'], ['U 222.2', '1.30']]],
    photo: { img: 'assets/hero-2.png', band: '50% 50%', figures: 'assets/figures-2.png' }
  },
  {
    teams: [{ logo: 'assets/pistons.png', name: 'SA Spurs' }, { logo: 'assets/celtics.png', name: 'OKC Thunder' }],
    time: ['20/10', '22.00'],
    odds: [['1.55', '2.30'], [['-1.5', '2.75'], ['+1.5', '1.40']], [['O 222.2', '1.95'], ['U 222.2', '1.78']]],
    photo: { img: 'assets/hero-3.png', band: '50% 0%', figures: 'assets/figures-2.png' }
  },
  {
    teams: [{ logo: 'assets/pistons.png', name: 'MIN Timberwolves' }, { logo: 'assets/celtics.png', name: 'OKC Thunder' }],
    time: ['22.00'],
    odds: [['1.35', '3.00'], [['-1.5', '2.20'], ['+1.5', '1.62']], [['O 222.2', '1.48'], ['U 222.2', '2.55']]],
    photo: null
  },
  {
    teams: [{ logo: 'assets/pistons.png', name: 'GS Warriors' }, { logo: 'assets/celtics.png', name: 'DEN Nuggets' }],
    time: ['22.00'],
    odds: [['2.85', '1.38'], [['-1.5', '1.75'], ['+1.5', '2.08']], [['O 222.2', '1.55'], ['U 222.2', '2.35']]],
    photo: null
  }
];

function selBtn(cell) {
  if (Array.isArray(cell)) {
    return `<div class="sel-btn"><span class="line">${cell[0]}</span><span class="odds">${cell[1]}</span></div>`;
  }
  return `<div class="sel-btn"><span class="odds">${cell}</span></div>`;
}

function cardHTML(c, mode) {
  const photoParts = [];
  if (c.photo && mode === 'opt-b') {
    photoParts.push(`<div class="figures"><img src="${c.photo.figures}" alt=""></div>`);
  } else if (c.photo) {
    photoParts.push(`<div class="photo" style="--img:url(${c.photo.img})"><div class="ambient"></div><div class="fg"><img src="${c.photo.img}" style="object-position:${c.photo.band}" alt=""></div></div>`);
  }
  return `
  <div class="card-slot">
    <div class="card ${c.photo ? 'has-photo' : 'no-photo'}">
      ${photoParts.join('\n      ')}
      <div class="card-body">
        <div class="mkt-header">
          <div class="filler"></div>
          <div class="mkt-titles"><span>Moneyline</span><span>Spread</span><span>Total</span></div>
        </div>
        <div class="hdr-divider"></div>
        <div class="main">
          <div class="brand-vector"><img src="assets/brand-vector.svg" alt=""></div>
          <div class="event">
            <div class="match-info">
              <div class="time-label">${c.time.map(t => `<span>${t}</span>`).join('')}</div>
              <div class="vdiv"></div>
              <div class="mini-icons"><img src="assets/play-icon.svg" alt=""></div>
            </div>
            <div class="participants">
              <div class="teams">
                <div class="team-row"><span class="logo"><img src="${c.teams[0].logo}" alt=""></span><span class="name">${c.teams[0].name}</span></div>
                <div class="hdiv"></div>
                <div class="team-row"><span class="logo"><img src="${c.teams[1].logo}" alt=""></span><span class="name">${c.teams[1].name}</span></div>
              </div>
            </div>
            <div class="tappable"><img src="assets/stats-icon.svg" alt=""></div>
          </div>
          <div class="markets">
            <div class="mcol">${selBtn(c.odds[0][0])}${selBtn(c.odds[0][1])}</div>
            <div class="mcol">${selBtn(c.odds[1][0])}${selBtn(c.odds[1][1])}</div>
            <div class="mcol">${selBtn(c.odds[2][0])}${selBtn(c.odds[2][1])}</div>
          </div>
        </div>
        <div class="footnote"><p>This is a trader’s note&nbsp; -&nbsp; Venue Info</p></div>
      </div>
    </div>
  </div>`;
}

(function () {
  const list = document.getElementById('card-list');
  const mode = document.body.classList.contains('opt-b') ? 'opt-b' : 'opt-a';
  list.innerHTML = CARDS.map(c => cardHTML(c, mode)).join('\n');
})();
