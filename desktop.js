/* Desktop chrome (>=1200px): thin app header, breadcrumbs, left sports side-nav,
   right column (bets / Bet Mentor / banners / offers). Copied from Figma node 106:17843. */

const A = 'assets/desktop/';

/* ---------- header ---------- */
const NAV_TABS = [
  { label: 'SPORTS', active: true }, { label: 'LIVE BETTING' }, { label: 'CASINO' },
  { label: 'LIVE CASINO' }, { label: 'VIRTUALS' }, { label: 'PLAYER BETS' },
  { label: 'FANTASY', badge: 'NEW' }
];

function headerHTML() {
  return `
    <div class="dh-left">
      <img class="wordmark" src="${A}betano-wordmark.svg" alt="Betano">
      <nav class="dh-tabs">
        ${NAV_TABS.map(t => `<span class="dh-tab${t.active ? ' active' : ''}">${t.label}${t.badge ? `<i class="dh-badge">${t.badge}</i>` : ''}</span>`).join('')}
      </nav>
    </div>
    <div class="header-right">
      <img src="assets/header-offer.svg" alt="Offers">
      <img src="assets/header-search.svg" alt="Search">
      <div class="balance-pill">
        <img class="acct" src="assets/header-account.svg" alt="">
        <div class="amount"><span>$</span><span>0,00</span></div>
        <button class="deposit-btn">DEPOSIT</button>
      </div>
    </div>`;
}

/* ---------- breadcrumbs ---------- */
function breadcrumbsHTML() {
  return `
    <span class="crumb">Home</span>
    <img src="${A}crumb-chevron.svg" alt=""><span class="crumb">Soccer</span>
    <img src="${A}crumb-chevron.svg" alt=""><span class="crumb last">Champions League</span>`;
}

/* ---------- left side nav ---------- */
const QUICK_LINKS = [
  ['gi-greek-coupon', 'Greek Coupon'], ['gi-complete-coupon', 'Complete Coupon'],
  ['gi-competition-winners', 'Competition Winners'], ['gi-special-bets', 'Special Bets'],
  ['gi-odds-on-coupon', 'Odds-on Coupon'], ['gi-missions', 'Missions'],
  ['gi-apps', 'iOS & Android'], ['gi-virtuals', 'Virtuals'], ['gi-master', 'Master']
];
const FAVOURITES = [
  ['Stoiximan Super League', 'Greece'], ['Champions League', ''], ['Europa League', ''],
  ['Conference League', ''], ['Euroleague', ''], ['Stoiximan Elf.', 'Greece']
];
const SOCCER_LEAGUES = [
  ['Stoiximan Super League', 'Greece'], ['Premier League', 'England'], ['LaLiga', 'Spain'],
  ['Serie A', 'Italy'], ['Bundesliga', 'Germany'], ['Ligue 1', 'France']
];
const EUROPE_MAIN = ['Greece', 'Champions League', 'Europa League', 'Conference League', 'England',
  'Spain', 'Italy', 'Germany', 'France', 'Portugal', 'Cyprus', 'Netherlands', 'Turkey'];
const COLLAPSED = ['Europe - Other Competitions', 'Americas', 'Rest of the World', 'International', 'Other Competitions'];
const SPORTS = [
  ['sp-basketball', 'Basketball'], ['sp-tennis', 'Tennis'], ['sp-formula-1', 'Formula 1'],
  ['sp-volleyball', 'Volleyball'], ['sp-e-sports', 'E-Sports'], ['sp-table-tennis', 'Table Tennis'],
  ['sp-american-football', 'American Football'], ['sp-handball', 'Handball'], ['sp-baseball', 'Baseball'],
  ['sp-ice-hockey', 'Ice Hockey'], ['sp-water-polo', 'Water Polo'], ['sp-mma', 'MMA'],
  ['sp-entertainment', 'Entertainment'], ['sp-politics', 'Politics'], ['sp-beach-volleyball', 'Beach Volleyball'],
  ['sp-darts', 'Darts'], ['sp-snooker', 'Snooker'], ['sp-futsal', 'Futsal'],
  ['sp-rugby-union', 'Rugby Union'], ['sp-rugby-league', 'Rugby League'], ['sp-boxing', 'Boxing'],
  ['sp-badminton', 'Badminton'], ['sp-cricket', 'Cricket'], ['sp-motor-sport', 'Motor Sport'],
  ['sp-chess', 'Chess'], ['sp-golf', 'Golf'], ['sp-winter-sports', 'Winter Sports'],
  ['sp-lacrosse', 'Lacrosse'], ['sp-floorball', 'Floorball']
];

function sideNavHTML() {
  const item = (ic, label) => `<div class="sn-item"><img class="ic" src="${A}${ic}.svg" alt="">${label}</div>`;
  const two = (l1, l2, fav) => `<div class="sn-item${fav ? ' sn-fav' : ''}"><div class="sn-two"><span class="l1">${l1}</span>${l2 ? `<span class="l2">${l2}</span>` : ''}</div></div>`;
  return `
    ${QUICK_LINKS.map(([ic, l]) => item(ic, l)).join('')}
    <div class="sn-head"><span>Favourite Competitions</span><span class="icons"><img src="${A}ui-plus-circle.svg" alt=""><img src="${A}ui-chevron-up.svg" alt=""></span></div>
    ${FAVOURITES.map(([l1, l2]) => two(l1, l2, true)).join('')}
    <div class="sn-head"><span>Sports</span><span class="icons"><img src="${A}ui-chevron-up.svg" alt=""></span></div>
    <div class="sn-item active"><img class="ic" src="${A}sp-soccer.svg" alt="">Soccer<span class="spacer"></span><img class="chev" src="${A}ui-fav-icon.svg" alt=""><img class="chev" src="${A}ui-chevron-up.svg" alt=""></div>
    ${SOCCER_LEAGUES.map(([l1, l2]) => two(l1, l2)).join('')}
    <div class="sn-head"><span>Europe - Main Competitions</span><span class="icons"><img src="${A}ui-chevron-up.svg" alt=""></span></div>
    ${EUROPE_MAIN.map(l => `<div class="sn-item sn-plain">${l}</div>`).join('')}
    ${COLLAPSED.map(l => `<div class="sn-head"><span>${l}</span><span class="icons"><img src="${A}ui-chevron-down.svg" alt=""></span></div>`).join('')}
    ${SPORTS.map(([ic, l]) => item(ic, l)).join('')}
    ${item('gi-live-score', 'Live Score')}
    ${item('gi-statistics', 'Statistics')}`;
}

/* ---------- right column ---------- */
const MINI_BANNERS = ['mini-4.png', 'mini-2.png', 'mini-3.png', 'mini-1.png', 'mini-5.png'];
const OFFERS = [
  { img: 'offer-1.jpg', badge: 'ui-rewards-label.svg', cat: 'Tournament', title: 'Playtech Casino Tournament', reward: '50.000€ CASH' },
  { img: 'offer-2.jpg', badge: 'ui-rewards-label2.svg', cat: 'SPORTS SPECIALS', title: 'Substitution Before Half-Time' },
  { img: 'offer-3.jpg', badge: 'ui-rewards-label2.svg', cat: 'BETFRIENDS', title: 'BetFriends and ChatBox' },
  { img: 'offer-4.jpg', badge: 'ui-rewards-label2.svg', cat: 'SPORTS SPECIALS', title: 'Bet Builder Boost' },
  { img: 'offer-5.jpg', badge: 'ui-rewards-label2.svg', cat: 'SPORTS SPECIALS', title: 'Missions' },
  { img: 'offer-6.jpg', badge: 'ui-rewards-label2.svg', cat: 'SPORTS SPECIALS', title: 'Acca Bonus' }
];

function offerHTML(o) {
  const btn = o.reward
    ? `<div class="btn"><span class="dim">to share</span><img src="${A}ui-cash.svg" alt=""><b>${o.reward}</b></div>`
    : `<div class="btn"><b class="dim">See More</b><img src="${A}ui-see-more-chevron.svg" alt=""></div>`;
  return `
    <div class="offer">
      <img class="media" src="${A}${o.img}" alt="">
      <div class="oc">
        <div>
          <div class="label"><span class="badge"><img src="${A}${o.badge}" alt=""></span><span>${o.cat}</span></div>
          <div class="title">${o.title}</div>
        </div>
        ${btn}
      </div>
    </div>`;
}

function rightColHTML() {
  return `
    <div class="bets-card">
      <div class="bets-title">Bets</div>
      <div class="view-switch-wrap">
        <div class="view-switch"><span class="vs-item active">Open</span><span class="vs-item">Settled</span></div>
      </div>
      <div class="bets-empty">You have no open bets at this moment</div>
    </div>
    <div class="mentor">
      <div class="mentor-banner">
        <span>Bet Mentor</span><img class="info" src="${A}ui-info-fill.svg" alt="">
        <img class="bg" src="${A}mentor-bg.png" alt="">
      </div>
      <div class="mentor-body">
        <div class="mentor-label">Select the amount you want to bet</div>
        <div class="mentor-input">10</div>
        <div class="mentor-label">Select the amount you want to win</div>
        <div class="mentor-grid">
          <div class="mentor-row"><span class="m-btn sel">20€ - 50€</span><span class="m-btn">50€ - 200€</span></div>
          <div class="mentor-row"><span class="m-btn">200€ - 1000€</span><span class="m-btn">1000€ - 5000€</span></div>
          <span class="m-btn">5000€ - 10000€</span>
        </div>
        <span class="m-cta">Show me suggestions</span>
      </div>
    </div>
    <div class="panel">
      ${MINI_BANNERS.map(m => `<img class="mini-banner" src="${A}${m}" alt="">`).join('')}
    </div>
    <div class="panel offers">
      <div class="offers-head">Offers</div>
      ${OFFERS.map(offerHTML).join('')}
    </div>`;
}


/* ---------- laptop icon rail (826-1280px) — Figma 123:20268 (collapsed side-bar) ---------- */
const RAIL = [
  ['gi-greek-coupon','Greek Coupon'], ['gi-complete-coupon','Complete Coupon'],
  ['gi-competition-winners','Competition Winners'], ['gi-special-bets','Special Bets'],
  ['gi-odds-on-coupon','Odds-on Coupon'], 'div',
  ['gi-missions','Missions'], ['gi-apps','iOS & Android'], 'div',
  ['gi-virtuals','Virtuals'], ['gi-master','Master'], 'div',
  ['gi-favourites','Favourite Competitions'], 'div',
  ['sp-soccer','Soccer'], ['sp-basketball','Basketball'], ['sp-tennis','Tennis'],
  ['sp-formula-1','Formula 1'], ['sp-volleyball','Volleyball'], ['sp-e-sports','E-Sports'],
  ['sp-table-tennis','Table Tennis'], ['sp-american-football','American Football'],
  ['sp-handball','Handball'], ['sp-baseball','Baseball'], ['sp-ice-hockey','Ice Hockey'],
  ['sp-water-polo','Water Polo'], ['sp-mma','MMA'], ['sp-entertainment','Entertainment'],
  ['sp-politics','Politics'], ['sp-beach-volleyball','Beach Volleyball'], ['sp-darts','Darts'],
  ['sp-snooker','Snooker'], ['sp-futsal','Futsal'], ['sp-rugby-union','Rugby Union'],
  ['sp-rugby-league','Rugby League'], ['sp-boxing','Boxing'], ['sp-badminton','Badminton'],
  ['sp-cricket','Cricket'], ['sp-motor-sport','Motor Sport'], ['sp-chess','Chess'],
  ['sp-golf','Golf'], ['sp-winter-sports','Winter Sports'], ['sp-lacrosse','Lacrosse'],
  ['sp-floorball','Floorball'], 'div',
  ['gi-live-score','Live Score'], ['gi-statistics','Statistics']
];

function sideRailHTML() {
  return RAIL.map(e => e === 'div'
    ? '<hr>'
    : `<div class="ri" title="${e[1]}"><img src="${A}${e[0]}.svg" alt="${e[1]}"></div>`
  ).join('');
}

(function () {
  const mount = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  mount('desktop-header', headerHTML());
  mount('breadcrumbs', breadcrumbsHTML());
  mount('side-nav', sideNavHTML());
  mount('side-rail', sideRailHTML());
  mount('right-col', rightColHTML());
})();
