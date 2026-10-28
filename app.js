/**
 * GridironSpread - Football Spread Ranker & AI Edge Suggestion Engine
 */

// Comprehensive Team Palette & Styling
const TEAM_DATA = {
  ARI: { name: 'Cardinals', color: '#97233F', alt: '#000000' },
  ATL: { name: 'Falcons', color: '#A71930', alt: '#000000' },
  BAL: { name: 'Ravens', color: '#241773', alt: '#9E7C0C' },
  BUF: { name: 'Bills', color: '#00338D', alt: '#C60C30' },
  CAR: { name: 'Panthers', color: '#0085CA', alt: '#101820' },
  CHI: { name: 'Bears', color: '#0B162A', alt: '#C83803' },
  CIN: { name: 'Bengals', color: '#FB4F14', alt: '#000000' },
  CLE: { name: 'Browns', color: '#311D00', alt: '#FF3C00' },
  DAL: { name: 'Cowboys', color: '#003594', alt: '#869397' },
  DEN: { name: 'Broncos', color: '#FB4F14', alt: '#002244' },
  DET: { name: 'Lions', color: '#0076B6', alt: '#B0B7BC' },
  GB:  { name: 'Packers', color: '#203731', alt: '#FFB612' },
  HOU: { name: 'Texans', color: '#03202F', alt: '#A71930' },
  IND: { name: 'Colts', color: '#002C5F', alt: '#A2AAAD' },
  JAX: { name: 'Jaguars', color: '#006778', alt: '#D7A22A' },
  KC:  { name: 'Chiefs', color: '#E31837', alt: '#FFB81C' },
  LV:  { name: 'Raiders', color: '#000000', alt: '#A5ACAF' },
  LAC: { name: 'Chargers', color: '#0080C6', alt: '#FFC20E' },
  LAR: { name: 'Rams', color: '#003594', alt: '#FFA300' },
  MIA: { name: 'Dolphins', color: '#008E97', alt: '#FC4C02' },
  MIN: { name: 'Vikings', color: '#4F2683', alt: '#FFC62F' },
  NE:  { name: 'Patriots', color: '#002244', alt: '#C60C30' },
  NO:  { name: 'Saints', color: '#D3BC8D', alt: '#101820' },
  NYG: { name: 'Giants', color: '#0B2265', alt: '#A71930' },
  NYJ: { name: 'Jets', color: '#125740', alt: '#000000' },
  PHI: { name: 'Eagles', color: '#004C54', alt: '#A5ACAF' },
  PIT: { name: 'Steelers', color: '#FFB612', alt: '#101820' },
  SF:  { name: '49ers', color: '#AA0000', alt: '#B3995D' },
  SEA: { name: 'Seahawks', color: '#002244', alt: '#69BE28' },
  TB:  { name: 'Buccaneers', color: '#D50A0A', alt: '#0A0A08' },
  TEN: { name: 'Titans', color: '#0C2340', alt: '#4B92DB' },
  WAS: { name: 'Commanders', color: '#5A1414', alt: '#FFB612' },
};

// Rich curated dataset for multiple NFL weeks with spreads and algorithmic projections
const DEFAULT_WEEKS_DATA = {
  'cbs-tbp': [
    {
      id: 'cbs-1',
      awayTeam: 'Carolina Panthers', awayAbbr: 'CAR', awayRecord: '3-3', awayPickPct: '26%',
      homeTeam: 'Green Bay Packers', homeAbbr: 'GB', homeRecord: '4-3', homePickPct: '74%',
      homeSpread: -3.5, cbsLockedSpread: -3.5, currentMarketSpread: -3.0, total: 44.5, time: 'Thu 8:15 PM ET • AMZN',
      cbsPts: 14,
      modelProjLine: -1.5,
      keyFactors: [
        'Public is heavily skewed on Green Bay (74%), creating high contrarian leverage on Carolina.',
        'Spread is at -3.5: getting +3.5 on Panthers secures the crucial 3-point hook.',
        'Vegas line shifted from -3.5 towards -3.0: money moving toward Carolina.'
      ]
    },
    {
      id: 'cbs-2',
      awayTeam: 'Baltimore Ravens', awayAbbr: 'BAL', awayRecord: '4-3', awayPickPct: '26%',
      homeTeam: 'Buffalo Bills', homeAbbr: 'BUF', homeRecord: '5-1', homePickPct: '74%',
      homeSpread: -4.5, cbsLockedSpread: -4.5, currentMarketSpread: -3.5, total: 50.5, time: 'Sun 1:00 PM ET',
      cbsPts: 13,
      modelProjLine: -2.0,
      keyFactors: [
        'Massive 74% public bias on Buffalo; Baltimore +4.5 is a top-tier leverage opportunity.',
        'Sharp money pushed Vegas line from -4.5 down to -3.5: 1.0 point of free CLV!',
        'Lamar Jackson is 18-5 ATS (78%) as an underdog in his career.'
      ]
    },
    {
      id: 'cbs-3',
      awayTeam: 'Tennessee Titans', awayAbbr: 'TEN', awayRecord: '1-6', awayPickPct: '43%',
      homeTeam: 'Cincinnati Bengals', homeAbbr: 'CIN', homeRecord: '4-2', homePickPct: '57%',
      homeSpread: -10.5, cbsLockedSpread: -10.5, currentMarketSpread: -9.5, total: 46.5, time: 'Sun 1:00 PM ET',
      cbsPts: 12,
      modelProjLine: -7.5,
      keyFactors: [
        'Double-digit NFL spreads (+10.5) cover at 54% when the dog has offensive line adjustments.',
        'Bengals defense allows 4.8 YPC on the ground, matching Titans rushing strengths.',
        'Vegas moved to -9.5: taking Titans +10.5 on CBS gives +1.0 free points.'
      ]
    },
    {
      id: 'cbs-4',
      awayTeam: 'Arizona Cardinals', awayAbbr: 'ARI', awayRecord: '2-5', awayPickPct: '43%',
      homeTeam: 'Dallas Cowboys', homeAbbr: 'DAL', homeRecord: '3-4', homePickPct: '57%',
      homeSpread: -6.5, cbsLockedSpread: -6.5, currentMarketSpread: -6.5, total: 47.0, time: 'Sun 1:00 PM ET • FOX',
      cbsPts: 11,
      modelProjLine: -4.0,
      keyFactors: [
        'Cardinals dynamic run-pass offense exploits Cowboys defense ranked 29th against rushing.',
        'Spread is stationed at -6.5, below the key touchdown number 7.',
        'Line holds firm at -6.5 across major sportsbooks.'
      ]
    },
    {
      id: 'cbs-5',
      awayTeam: 'Minnesota Vikings', awayAbbr: 'MIN', awayRecord: '6-0', awayPickPct: '55%',
      homeTeam: 'Detroit Lions', homeAbbr: 'DET', homeRecord: '4-2', homePickPct: '45%',
      homeSpread: -3.5, cbsLockedSpread: -3.5, currentMarketSpread: -2.5, total: 51.0, time: 'Sun 1:00 PM ET • FOX',
      cbsPts: 10,
      modelProjLine: +1.0,
      keyFactors: [
        'Undefeated Vikings (6-0) receiving +3.5 points is the premier value pick on the board.',
        'STEAM ALERT: Vegas moved line through 3 to Lions -2.5! Taking Vikings +3.5 on CBS gives huge free hook!',
        'Minnesota leads NFL in defensive EPA/play and turnover differential (+9).'
      ]
    },
    {
      id: 'cbs-6',
      awayTeam: 'Indianapolis Colts', awayAbbr: 'IND', awayRecord: '2-5', awayPickPct: '31%',
      homeTeam: 'Jacksonville Jaguars', homeAbbr: 'JAX', homeRecord: '4-2', homePickPct: '69%',
      homeSpread: -7.5, cbsLockedSpread: -7.5, currentMarketSpread: -7.0, total: 45.0, time: 'Sun 1:00 PM ET',
      cbsPts: 9,
      modelProjLine: -4.5,
      keyFactors: [
        'Divisional dog +7.5 crosses key numbers 3, 6, and 7.',
        'Vegas moved down to -7.0: taking IND +7.5 on CBS catches the hook past 7.',
        '69% of public on JAX creates high contrarian value on IND.'
      ]
    },
    {
      id: 'cbs-7',
      awayTeam: 'Las Vegas Raiders', awayAbbr: 'LV', awayRecord: '3-4', awayPickPct: '70%',
      homeTeam: 'New York Jets', homeAbbr: 'NYJ', homeRecord: '2-5', homePickPct: '30%',
      homeSpread: -0.5, cbsLockedSpread: -0.5, currentMarketSpread: -1.5, total: 39.5, time: 'Sun 1:00 PM ET • FOX',
      cbsPts: 8,
      modelProjLine: -2.5,
      keyFactors: [
        'Heavy public backing on Raiders (70%) on road creating sharp contrarian edge on Jets.',
        'Vegas moved to NYJ -1.5: taking NYJ at -0.5 on CBS gives +1.0 free points.',
        'Jets defense at MetLife Stadium ranks top-5 in pass pressure rate.'
      ]
    },
    {
      id: 'cbs-8',
      awayTeam: 'Cleveland Browns', awayAbbr: 'CLE', awayRecord: '5-2', awayPickPct: '51%',
      homeTeam: 'Pittsburgh Steelers', homeAbbr: 'PIT', homeRecord: '5-2', homePickPct: '49%',
      homeSpread: -3.5, cbsLockedSpread: -3.5, currentMarketSpread: -3.0, total: 38.5, time: 'Sun 1:00 PM ET',
      cbsPts: 7,
      modelProjLine: -1.5,
      keyFactors: [
        'Both teams tied at 5-2 in AFC North battle.',
        'Low projected total (38.5) makes +3.5 points worth nearly 40% more than in high-scoring games.',
        'Vegas moved from -3.5 to -3.0: Browns +3.5 on CBS gains half-point hook.'
      ]
    },
    {
      id: 'cbs-9',
      awayTeam: 'Atlanta Falcons', awayAbbr: 'ATL', awayRecord: '3-4', awayPickPct: '51%',
      homeTeam: 'Tampa Bay Buccaneers', homeAbbr: 'TB', homeRecord: '2-5', homePickPct: '49%',
      homeSpread: -1.5, cbsLockedSpread: -1.5, currentMarketSpread: -2.0, total: 43.5, time: 'Sun 1:00 PM ET • FOX',
      cbsPts: 6,
      modelProjLine: -3.0,
      keyFactors: [
        'Buccaneers home division spot laying under a field goal (-1.5).',
        'Vegas moved to -2.0, confirming sharp confidence in Tampa Bay.',
        'Baker Mayfield red zone efficiency against Falcons 24th-ranked secondary.'
      ]
    },
    {
      id: 'cbs-10',
      awayTeam: 'Los Angeles Chargers', awayAbbr: 'LAC', awayRecord: '0-6', awayPickPct: '21%',
      homeTeam: 'Los Angeles Rams', homeAbbr: 'LAR', homeRecord: '3-4', homePickPct: '79%',
      homeSpread: -6.5, cbsLockedSpread: -6.5, currentMarketSpread: -6.0, total: 44.0, time: 'Sun 4:05 PM ET • FOX',
      cbsPts: 5,
      modelProjLine: -4.0,
      keyFactors: [
        'Shared SoFi Stadium matchup neutralizes Rams home field advantage.',
        'Public 79% lopsided on Rams; desperate 0-6 Chargers playing with maximum urgency.',
        'Vegas softened to -6.0, indicating underdog support.'
      ]
    },
    {
      id: 'cbs-11',
      awayTeam: 'Kansas City Chiefs', awayAbbr: 'KC', awayRecord: '5-1', awayPickPct: '49%',
      homeTeam: 'Denver Broncos', homeAbbr: 'DEN', homeRecord: '5-2', homePickPct: '51%',
      homeSpread: +1.5, cbsLockedSpread: +1.5, currentMarketSpread: +3.0, total: 46.5, time: 'Sun 4:25 PM ET',
      cbsPts: 4,
      modelProjLine: -4.0,
      keyFactors: [
        'BIGGEST STEAM OF THE WEEK: Vegas moved line from KC -1.5 all the way to KC -3.0!',
        'Taking Chiefs at -1.5 on CBS gives a massive +1.5 points of free Closing Line Value!',
        'Patrick Mahomes is 14-1 straight up against the Denver Broncos.'
      ]
    },
    {
      id: 'cbs-12',
      awayTeam: 'New England Patriots', awayAbbr: 'NE', awayRecord: '4-3', awayPickPct: '67%',
      homeTeam: 'Miami Dolphins', homeAbbr: 'MIA', homeRecord: '1-5', homePickPct: '33%',
      homeSpread: +7.5, cbsLockedSpread: +7.5, currentMarketSpread: +6.5, total: 42.5, time: 'Sun 4:25 PM ET',
      cbsPts: 3,
      modelProjLine: -4.0,
      keyFactors: [
        'Vegas dropped from 7.5 to 6.5! Taking Miami +7.5 on CBS gives +1.0 free hook past 7!',
        'Patriots laying 7.5 on the road against division rival in Miami heat is over-inflated.',
        'Contrarian value with 67% on New England.'
      ]
    },
    {
      id: 'cbs-13',
      awayTeam: 'Philadelphia Eagles', awayAbbr: 'PHI', awayRecord: '2-5', awayPickPct: '35%',
      homeTeam: 'Washington Commanders', homeAbbr: 'WAS', homeRecord: '1-4-1', homePickPct: '65%',
      homeSpread: -3.5, cbsLockedSpread: -3.5, currentMarketSpread: -2.5, total: 45.5, time: 'Sun 8:20 PM ET • NBC',
      cbsPts: 2,
      modelProjLine: -1.0,
      keyFactors: [
        'Vegas moved through key number 3 down to -2.5! Eagles +3.5 on CBS retains the vital hook!',
        'Sunday Night Primetime division showdown.',
        'Public heavily backing Washington (65%) leaves strong value on Philly.'
      ]
    },
    {
      id: 'cbs-14',
      awayTeam: 'Chicago Bears', awayAbbr: 'CHI', awayRecord: '5-2', awayPickPct: '50%',
      homeTeam: 'Seattle Seahawks', homeAbbr: 'SEA', homeRecord: '4-3', homePickPct: '50%',
      homeSpread: -3.5, cbsLockedSpread: -3.5, currentMarketSpread: -3.0, total: 43.0, time: 'Mon 8:15 PM ET • ESPN',
      cbsPts: 1,
      modelProjLine: -1.5,
      keyFactors: [
        'Vegas adjusted to -3.0, giving Chicago +3.5 on CBS a half-point advantage.',
        'Monday Night Football finale with tiebreaker total score projection ~43 points.',
        'Model predicts a 23-21 game, giving Chicago +3.5 strong cover advantage.'
      ]
    }
  ],
  'week-1': [
    {
      id: 'g1',
      awayTeam: 'Baltimore Ravens', awayAbbr: 'BAL', awayRecord: '13-4',
      homeTeam: 'Kansas City Chiefs', homeAbbr: 'KC', homeRecord: '14-3',
      homeSpread: -3.0, total: 46.5, time: 'Thu 8:20 PM ET | NBC',
      awayML: '+135', homeML: '-155',
      modelProjLine: -1.2, // Model thinks KC only favored by 1.2, value on BAL +3
      keyFactors: [
        'Model projects a razor-thin 1-point margin; getting +3.0 on Ravens catches key landing number 3.',
        'Ravens ranked #1 in EPA/play on defense and upgraded pass protection in offseason.',
        'Chiefs 4-9 ATS in their last 13 home regular season games laying 3 or more.'
      ]
    },
    {
      id: 'g2',
      awayTeam: 'Green Bay Packers', awayAbbr: 'GB', awayRecord: '9-8',
      homeTeam: 'Philadelphia Eagles', homeAbbr: 'PHI', homeRecord: '11-6',
      homeSpread: -2.5, total: 48.5, time: 'Fri 8:15 PM ET | Peacock',
      awayML: '+115', homeML: '-135',
      modelProjLine: +1.5, // Model favors Packers
      keyFactors: [
        'Green Bay ended last year as top 3 offense in EPA over final 8 weeks.',
        'Neutral site international game in Brazil neutralizes Philly traditional home field edge.',
        'Eagles breaking in two brand new coordinators on both sides of the ball.'
      ]
    },
    {
      id: 'g3',
      awayTeam: 'Pittsburgh Steelers', awayAbbr: 'PIT', awayRecord: '10-7',
      homeTeam: 'Atlanta Falcons', homeAbbr: 'ATL', homeRecord: '7-10',
      homeSpread: -3.5, total: 42.0, time: 'Sun 1:00 PM ET | FOX',
      awayML: '+150', homeML: '-175',
      modelProjLine: -1.0,
      keyFactors: [
        'Mike Tomlin is 65-38-3 ATS (63%) as an underdog in his career.',
        'Spread sits at -3.5, giving Steelers the crucial half-point hook beyond the key number 3.',
        'Atlanta breaking in new quarterback and offensive system against top-5 turnover defense.'
      ]
    },
    {
      id: 'g4',
      awayTeam: 'Arizona Cardinals', awayAbbr: 'ARI', awayRecord: '4-13',
      homeTeam: 'Buffalo Bills', homeAbbr: 'BUF', homeRecord: '11-6',
      homeSpread: -6.5, total: 48.0, time: 'Sun 1:00 PM ET | CBS',
      awayML: '+240', homeML: '-300',
      modelProjLine: -7.8,
      keyFactors: [
        'Bills offense projected for major efficiency mismatch against bottom-tier Cardinals pass rush.',
        'Josh Allen holds a +8.4 point differential in home season openers.',
        'Spread is under the key number 7, providing strong value for Buffalo.'
      ]
    },
    {
      id: 'g5',
      awayTeam: 'Tennessee Titans', awayAbbr: 'TEN', awayRecord: '6-11',
      homeTeam: 'Chicago Bears', homeAbbr: 'CHI', homeRecord: '7-10',
      homeSpread: -4.0, total: 44.5, time: 'Sun 1:00 PM ET | FOX',
      awayML: '+165', homeML: '-195',
      modelProjLine: -2.0,
      keyFactors: [
        'Rookie QB making first career start laying more than a field goal historically covers under 40% ATS.',
        'Titans rebuilt defensive front ranks in top 10 in run stuff rate.',
        'Model predicts a 23-21 Chicago win, giving Titans +4 substantial cover value.'
      ]
    },
    {
      id: 'g6',
      awayTeam: 'New England Patriots', awayAbbr: 'NE', awayRecord: '4-13',
      homeTeam: 'Cincinnati Bengals', homeAbbr: 'CIN', homeRecord: '9-8',
      homeSpread: -8.5, total: 40.5, time: 'Sun 1:00 PM ET | CBS',
      awayML: '+320', homeML: '-420',
      modelProjLine: -9.5,
      keyFactors: [
        'Joe Burrow fully healthy with top tier receiver tandem against transitioning Patriots squad.',
        'Bengals have covered in 7 of last 9 home games against teams with losing records.',
        'Patriots offensive line ranks 31st in projected pass block win rate.'
      ]
    },
    {
      id: 'g7',
      awayTeam: 'Houston Texans', awayAbbr: 'HOU', awayRecord: '10-7',
      homeTeam: 'Indianapolis Colts', homeAbbr: 'IND', homeRecord: '9-8',
      homeSpread: +2.5, total: 48.5, time: 'Sun 1:00 PM ET | CBS',
      awayML: '-145', homeML: '+125',
      modelProjLine: -4.5, // Houston favored by 4.5
      keyFactors: [
        'Texans added elite weapons around C.J. Stroud after top-5 passing season.',
        'Colts haven\'t won a Week 1 opener in 10 consecutive seasons (0-9-1 straight up).',
        'Model projects Houston to win by 5, making -2.5 a tier-1 edge.'
      ]
    },
    {
      id: 'g8',
      awayTeam: 'Jacksonville Jaguars', awayAbbr: 'JAX', awayRecord: '9-8',
      homeTeam: 'Miami Dolphins', homeAbbr: 'MIA', homeRecord: '11-6',
      homeSpread: -3.5, total: 49.5, time: 'Sun 1:00 PM ET | CBS',
      awayML: '+150', homeML: '-175',
      modelProjLine: -2.0,
      keyFactors: [
        'Divisional in-state matchup; spread through 3 gives Jaguars +3.5 key protection.',
        'Dolphins in September home games battle high heat, but Jacksonville is equally acclimated.',
        'Trevor Lawrence 8-4 ATS when listed as road underdog of 3 or more.'
      ]
    },
    {
      id: 'g9',
      awayTeam: 'Carolina Panthers', awayAbbr: 'CAR', awayRecord: '2-15',
      homeTeam: 'New Orleans Saints', homeAbbr: 'NO', homeRecord: '9-8',
      homeSpread: -4.0, total: 41.5, time: 'Sun 1:00 PM ET | FOX',
      awayML: '+175', homeML: '-210',
      modelProjLine: -5.5,
      keyFactors: [
        'Saints defense held opponents to under 18 PPG at home in the Superdome.',
        'Panthers with young core still building chemistry under new coaching staff.',
        'Historical home favorites in NFC South division games cover at 56.4% clip.'
      ]
    },
    {
      id: 'g10',
      awayTeam: 'Minnesota Vikings', awayAbbr: 'MIN', awayRecord: '7-10',
      homeTeam: 'New York Giants', homeAbbr: 'NYG', homeRecord: '6-11',
      homeSpread: +1.5, total: 41.0, time: 'Sun 1:00 PM ET | FOX',
      awayML: '-120', homeML: '+100',
      modelProjLine: -3.5,
      keyFactors: [
        'Brian Flores aggressive blitzing scheme causes havoc for Giants offensive line that allowed 85 sacks.',
        'Justin Jefferson matchup advantage against inexperienced Giants secondary.',
        'Model rates Vikings as 3.5-point true road favorite, generating 2 points of spread value.'
      ]
    },
    {
      id: 'g11',
      awayTeam: 'Las Vegas Raiders', awayAbbr: 'LV', awayRecord: '8-9',
      homeTeam: 'Los Angeles Chargers', homeAbbr: 'LAC', homeRecord: '5-12',
      homeSpread: -3.0, total: 40.5, time: 'Sun 4:05 PM ET | CBS',
      awayML: '+140', homeML: '-165',
      modelProjLine: -1.5,
      keyFactors: [
        'Jim Harbaugh debuts for Chargers with heavy ground game philosophy.',
        'Raiders defense closed last season top-5 in scoring defense under Antonio Pierce.',
        'Last meeting saw historic 63-21 blowout; rivalry intensity makes +3 high value dog.'
      ]
    },
    {
      id: 'g12',
      awayTeam: 'Denver Broncos', awayAbbr: 'DEN', awayRecord: '8-9',
      homeTeam: 'Seattle Seahawks', homeAbbr: 'SEA', homeRecord: '9-8',
      homeSpread: -6.0, total: 42.0, time: 'Sun 4:05 PM ET | CBS',
      awayML: '+215', homeML: '-265',
      modelProjLine: -7.5,
      keyFactors: [
        'Lumen Field presents one of the most hostile noise environments for rookie QBs in Week 1.',
        'Mike Macdonald\'s defensive disguise scheme creates turnovers in Seattle.',
        'Spread under the key number 7 provides strong backing for Seahawks.'
      ]
    },
    {
      id: 'g13',
      awayTeam: 'Dallas Cowboys', awayAbbr: 'DAL', awayRecord: '12-5',
      homeTeam: 'Cleveland Browns', homeAbbr: 'CLE', homeRecord: '11-6',
      homeSpread: -2.5, total: 42.0, time: 'Sun 4:25 PM ET | FOX',
      awayML: '+115', homeML: '-135',
      modelProjLine: +0.5,
      keyFactors: [
        'Dak Prescott led the NFL in passing touchdowns last season.',
        'Cowboys receiving corps poses explosive test for Browns cornerbacks.',
        'Getting +2.5 underdog value with a 12-win caliber roster is top model value.'
      ]
    },
    {
      id: 'g14',
      awayTeam: 'Washington Commanders', awayAbbr: 'WAS', awayRecord: '4-13',
      homeTeam: 'Tampa Bay Buccaneers', homeAbbr: 'TB', homeRecord: '9-8',
      homeSpread: -3.5, total: 43.5, time: 'Sun 4:25 PM ET | FOX',
      awayML: '+155', homeML: '-180',
      modelProjLine: -4.5,
      keyFactors: [
        'Baker Mayfield and Buccaneers playoff offense returns intact with Mike Evans and Chris Godwin.',
        'Washington defense was worst in NFL in pass yards allowed per game.',
        'Bucs at home laying just over a field goal project to cover by 4.5+.'
      ]
    },
    {
      id: 'g15',
      awayTeam: 'Los Angeles Rams', awayAbbr: 'LAR', awayRecord: '10-7',
      homeTeam: 'Detroit Lions', homeAbbr: 'DET', homeRecord: '12-5',
      homeSpread: -3.5, total: 51.5, time: 'Sun 8:20 PM ET | NBC',
      awayML: '+160', homeML: '-190',
      modelProjLine: -1.5,
      keyFactors: [
        'Rematch of thrilling 24-23 playoff thriller decided by 1 point.',
        'Stafford returning to Detroit with healthy Puka Nacua and Cooper Kupp.',
        'Getting +3.5 gives crucial insurance past the 3-point landing margin.'
      ]
    },
    {
      id: 'g16',
      awayTeam: 'New York Jets', awayAbbr: 'NYJ', awayRecord: '7-10',
      homeTeam: 'San Francisco 49ers', homeAbbr: 'SF', homeRecord: '12-5',
      homeSpread: -4.5, total: 43.5, time: 'Mon 8:15 PM ET | ESPN',
      awayML: '+175', homeML: '-210',
      modelProjLine: -3.0,
      keyFactors: [
        'Aaron Rodgers returns with top-3 graded defense and overhauled offensive line.',
        '49ers coming off Super Bowl appearance with contracted offseason rest cycle.',
        'Model projects Jets defense keeps this within 3 points, providing value on NYJ +4.5.'
      ]
    }
  ],
  'week-2': [
    {
      id: 'w2-1', awayTeam: 'Buffalo Bills', awayAbbr: 'BUF', awayRecord: '1-0',
      homeTeam: 'Miami Dolphins', homeAbbr: 'MIA', homeRecord: '1-0',
      homeSpread: -2.5, total: 49.0, time: 'Thu 8:15 PM ET | Prime',
      awayML: '+115', homeML: '-135', modelProjLine: +1.0,
      keyFactors: ['Josh Allen is 11-2 career against Miami straight up.', 'Short week favors Buffalo\'s rushing ground control.']
    },
    {
      id: 'w2-2', awayTeam: 'Cincinnati Bengals', awayAbbr: 'CIN', awayRecord: '1-0',
      homeTeam: 'Kansas City Chiefs', homeAbbr: 'KC', homeRecord: '1-0',
      homeSpread: -5.5, total: 47.5, time: 'Sun 4:25 PM ET | CBS',
      awayML: '+200', homeML: '-240', modelProjLine: -3.5,
      keyFactors: ['Burrow vs Mahomes games have all been decided by 3 points or fewer.', 'Getting +5.5 is tremendous value across key numbers.']
    },
    {
      id: 'w2-3', awayTeam: 'Atlanta Falcons', awayAbbr: 'ATL', awayRecord: '0-1',
      homeTeam: 'Philadelphia Eagles', homeAbbr: 'PHI', homeRecord: '1-0',
      homeSpread: -6.5, total: 46.5, time: 'Mon 8:15 PM ET | ESPN',
      awayML: '+230', homeML: '-280', modelProjLine: -7.5,
      keyFactors: ['Philly home crowd under lights in Primetime.', 'Falcons road defense has struggled in dome-to-outdoor transitions.']
    }
  ],
  'week-3': [],
  'week-4': [],
  'custom': []
};

const savedWeeks = JSON.parse(localStorage.getItem('gridiron_weeks')) || {};
const initialWeeks = { ...DEFAULT_WEEKS_DATA, ...savedWeeks, 'cbs-tbp': DEFAULT_WEEKS_DATA['cbs-tbp'] };

// Application State
const state = {
  currentWeek: 'cbs-tbp',
  activeTab: 'all', // all, ranked, suggestions, underdogs
  searchQuery: '',
  weeks: initialWeeks,
  // User picks per week: { [weekKey]: { [gameId]: { teamPicked: 'AWAY'|'HOME', rank: number } } }
  userPicks: JSON.parse(localStorage.getItem('gridiron_picks')) || {},
  simScores: {}
};

// Helper: Save to LocalStorage
function saveState() {
  localStorage.setItem('gridiron_weeks', JSON.stringify(state.weeks));
  localStorage.setItem('gridiron_picks', JSON.stringify(state.userPicks));
}

// Algorithmic Suggestion Engine
function calculateGameEdge(game) {
  // Spread: homeSpread (e.g. -3.0). If homeSpread < 0, Home is favored.
  // ModelProjLine: e.g. -1.2 (Home favored by 1.2).
  // Spread difference = modelProjLine - homeSpread.
  // If modelProjLine is -1.2 and market homeSpread is -3.0:
  // Edge = (-1.2) - (-3.0) = +1.8 in favor of AWAY (+3.0 is a 1.8 pt bargain).
  const homeSpread = parseFloat(game.homeSpread) || 0;
  const modelProj = parseFloat(game.modelProjLine) || 0;
  const awaySpread = -homeSpread;

  const awayEdge = modelProj - homeSpread; // Positive = Away has edge
  const homeEdge = homeSpread - modelProj; // Positive = Home has edge

  let recommendedTeam = 'AWAY';
  let spreadEdge = awayEdge;
  let recommendedSpread = (awaySpread > 0 ? `+${awaySpread}` : `${awaySpread}`);
  let recommendedTeamName = game.awayTeam;
  let recommendedAbbr = game.awayAbbr;

  if (homeEdge > awayEdge) {
    recommendedTeam = 'HOME';
    spreadEdge = homeEdge;
    recommendedSpread = (homeSpread > 0 ? `+${homeSpread}` : `${homeSpread}`);
    recommendedTeamName = game.homeTeam;
    recommendedAbbr = game.homeAbbr;
  }

  // Check key number bonus (spreads around 3, 7, 2.5, 3.5, 6.5, 7.5)
  let keyNumberScore = 0;
  const spreadAbs = Math.abs(recommendedTeam === 'AWAY' ? awaySpread : homeSpread);
  if (spreadAbs === 3.5 || spreadAbs === 2.5) keyNumberScore += 1.2;
  if (spreadAbs === 7.5 || spreadAbs === 6.5) keyNumberScore += 0.8;

  const totalConfidenceEdge = Math.round((Math.abs(spreadEdge) + keyNumberScore) * 10) / 10;

  // Determine Badge Type
  let badgeType = 'value';
  let badgeLabel = 'Value Pick';
  if (totalConfidenceEdge >= 2.5) {
    badgeType = 'lock';
    badgeLabel = 'Top Lock';
  } else if ((recommendedTeam === 'AWAY' && awaySpread > 0) || (recommendedTeam === 'HOME' && homeSpread > 0)) {
    badgeType = 'underdog';
    badgeLabel = 'Value Dog';
  }

  // Calculate CBS Closing Line Value (CLV) Edge
  const cbsLocked = game.cbsLockedSpread !== undefined ? game.cbsLockedSpread : homeSpread;
  const clvDiff = Math.abs(cbsLocked - modelProj);
  const clvEdge = Math.round(clvDiff * 10) / 10;

  return {
    recommendedTeam,
    recommendedAbbr,
    recommendedTeamName,
    recommendedSpread,
    spreadEdge: totalConfidenceEdge,
    clvEdge,
    cbsLocked,
    badgeType,
    badgeLabel,
    explanation: `${recommendedAbbr} ${recommendedSpread} holds +${totalConfidenceEdge} pt model edge.`
  };
}

// Calculate Live Vegas Line Shift vs CBS Locked Spread
function calculateLineShift(game) {
  const cbs = game.cbsLockedSpread !== undefined ? parseFloat(game.cbsLockedSpread) : parseFloat(game.homeSpread);
  const live = game.currentMarketSpread !== undefined ? parseFloat(game.currentMarketSpread) : cbs;
  // If CBS is -1.5 (KC favored by 1.5) and Vegas is -3.0 (KC favored by 3.0),
  // cbs - live = (-1.5) - (-3.0) = +1.5 pts of free value on KC!
  const shiftVal = Math.round((cbs - live) * 10) / 10;
  const advantagePts = Math.abs(shiftVal);

  let label = 'Stable Line (0.0)';
  let badgeClass = 'steam-neutral';
  let favoredTeam = '';

  if (shiftVal > 0) {
    favoredTeam = game.homeAbbr;
    if (advantagePts >= 1.5) {
      badgeClass = 'steam-hot';
      label = `🔥 +${advantagePts} pts CLV on ${game.homeAbbr}`;
    } else {
      badgeClass = 'steam-fav';
      label = `📈 +${advantagePts} pts on ${game.homeAbbr}`;
    }
  } else if (shiftVal < 0) {
    favoredTeam = game.awayAbbr;
    if (advantagePts >= 1.5) {
      badgeClass = 'steam-hot';
      label = `🔥 +${advantagePts} pts CLV on ${game.awayAbbr}`;
    } else {
      badgeClass = 'steam-fav';
      label = `📈 +${advantagePts} pts on ${game.awayAbbr}`;
    }
  }

  return { shiftVal, advantagePts, favoredTeam, label, badgeClass, cbs, live };
}

// Get current week's games
function getCurrentGames() {
  return state.weeks[state.currentWeek] || [];
}

// Get picks for current week
function getCurrentPicks() {
  if (!state.userPicks[state.currentWeek]) {
    state.userPicks[state.currentWeek] = {};
  }
  return state.userPicks[state.currentWeek];
}

// DOM Elements
const weekSelect = document.getElementById('weekSelect');
const autoSuggestBtn = document.getElementById('autoSuggestBtn');
const addGameBtn = document.getElementById('addGameBtn');
const exportBtn = document.getElementById('exportBtn');
const simModalBtn = document.getElementById('simModalBtn');
const resetBtn = document.getElementById('resetBtn');
const clearPicksBtn = document.getElementById('clearPicksBtn');
const searchFilter = document.getElementById('searchFilter');
const gamesContainer = document.getElementById('gamesContainer');
const tabButtons = document.querySelectorAll('.tab');

// Metrics elements
const metricPicksCompleted = document.getElementById('metricPicksCompleted');
const metricPicksPct = document.getElementById('metricPicksPct');
const metricProgressBar = document.getElementById('metricProgressBar');
const metricTotalPoints = document.getElementById('metricTotalPoints');
const metricTopLock = document.getElementById('metricTopLock');
const metricTopLockEdge = document.getElementById('metricTopLockEdge');
const metricTopLockDesc = document.getElementById('metricTopLockDesc');
const metricAvgEdge = document.getElementById('metricAvgEdge');

// Modals
const analysisModal = document.getElementById('analysisModal');
const closeAnalysisModal = document.getElementById('closeAnalysisModal');
const analysisModalBody = document.getElementById('analysisModalBody');
const modalMatchupTitle = document.getElementById('modalMatchupTitle');
const modalMatchupMeta = document.getElementById('modalMatchupMeta');

const gameModal = document.getElementById('gameModal');
const gameModalTitle = document.getElementById('gameModalTitle');
const closeGameModal = document.getElementById('closeGameModal');
const cancelGameBtn = document.getElementById('cancelGameBtn');
const gameForm = document.getElementById('gameForm');

const exportModal = document.getElementById('exportModal');
const closeExportModal = document.getElementById('closeExportModal');
const exportTextarea = document.getElementById('exportTextarea');
const copyExportBtn = document.getElementById('copyExportBtn');
const downloadJsonBtn = document.getElementById('downloadJsonBtn');

const cbsModal = document.getElementById('cbsModal');
const cbsModalBtn = document.getElementById('cbsModalBtn');
const closeCbsModal = document.getElementById('closeCbsModal');
const cbsPasteArea = document.getElementById('cbsPasteArea');
const applyCbsPasteBtn = document.getElementById('applyCbsPasteBtn');
const cbsBookmarkletLink = document.getElementById('cbsBookmarkletLink');
const copyCbsFormattedPicks = document.getElementById('copyCbsFormattedPicks');

const liveOddsModal = document.getElementById('liveOddsModal');
const liveOddsBtn = document.getElementById('liveOddsBtn');
const closeLiveOddsModal = document.getElementById('closeLiveOddsModal');
const oddsApiKeyInput = document.getElementById('oddsApiKeyInput');
const bookmakerSelect = document.getElementById('bookmakerSelect');
const testMockOddsBtn = document.getElementById('testMockOddsBtn');
const fetchLiveOddsBtn = document.getElementById('fetchLiveOddsBtn');

const simModal = document.getElementById('simModal');
const closeSimModal = document.getElementById('closeSimModal');
const runSimBtn = document.getElementById('runSimBtn');
const clearSimBtn = document.getElementById('clearSimBtn');
const simResultsBanner = document.getElementById('simResultsBanner');
const simScoreInputs = document.getElementById('simScoreInputs');
const toastEl = document.getElementById('toast');

// Show toast message
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.remove('hidden');
  setTimeout(() => {
    toastEl.classList.add('hidden');
  }, 2800);
}

// Update Top Metrics Bar
function updateMetrics() {
  const games = getCurrentGames();
  const picks = getCurrentPicks();
  const totalGames = games.length;
  const pickedCount = Object.keys(picks).filter(id => picks[id]?.teamPicked).length;

  metricPicksCompleted.textContent = `${pickedCount} / ${totalGames}`;
  const pct = totalGames > 0 ? Math.round((pickedCount / totalGames) * 100) : 0;
  metricPicksPct.textContent = `${pct}%`;
  metricProgressBar.style.width = `${pct}%`;

  // Total confidence points allocated
  let pointsAllocated = 0;
  Object.values(picks).forEach(p => {
    if (p.rank && p.teamPicked) pointsAllocated += parseInt(p.rank, 10);
  });
  const maxPossible = Math.round((totalGames * (totalGames + 1)) / 2);
  metricTotalPoints.innerHTML = `${pointsAllocated} pts <span class="metric-sub">/ ${maxPossible} pts</span>`;

  // Find top model lock
  let topGame = null;
  let highestEdge = -1;
  let edgeSum = 0;

  games.forEach(g => {
    const analysis = calculateGameEdge(g);
    edgeSum += analysis.spreadEdge;
    if (analysis.spreadEdge > highestEdge) {
      highestEdge = analysis.spreadEdge;
      topGame = { game: g, analysis };
    }
  });

  if (topGame) {
    metricTopLock.textContent = `${topGame.analysis.recommendedAbbr} ${topGame.analysis.recommendedSpread}`;
    metricTopLockEdge.textContent = `+${topGame.analysis.spreadEdge} Edge`;
    metricTopLockDesc.textContent = `${topGame.game.awayAbbr} @ ${topGame.game.homeAbbr} - ${topGame.analysis.badgeLabel}`;
  } else {
    metricTopLock.textContent = '—';
    metricTopLockEdge.textContent = '+0.0 Edge';
    metricTopLockDesc.textContent = 'No matchups in this week';
  }

  const avgEdge = totalGames > 0 ? (edgeSum / totalGames).toFixed(1) : '0.0';
  metricAvgEdge.textContent = `+${avgEdge} pts`;

  // Update Top Steam Metric
  const metricTopSteam = document.getElementById('metricTopSteam');
  const metricTopSteamDelta = document.getElementById('metricTopSteamDelta');
  const metricTopSteamDesc = document.getElementById('metricTopSteamDesc');

  if (metricTopSteam) {
    let topSteamGame = null;
    let maxShift = -1;
    games.forEach(g => {
      const shift = calculateLineShift(g);
      if (shift.advantagePts > maxShift) {
        maxShift = shift.advantagePts;
        topSteamGame = { game: g, shift };
      }
    });

    if (topSteamGame && maxShift > 0) {
      metricTopSteam.textContent = `${topSteamGame.shift.favoredTeam} (+${maxShift})`;
      metricTopSteamDelta.textContent = `+${maxShift} pts Steam`;
      const cbsStr = topSteamGame.shift.cbs > 0 ? `+${topSteamGame.shift.cbs}` : `${topSteamGame.shift.cbs}`;
      const liveStr = topSteamGame.shift.live > 0 ? `+${topSteamGame.shift.live}` : `${topSteamGame.shift.live}`;
      metricTopSteamDesc.textContent = `CBS: ${cbsStr} ➔ Vegas: ${liveStr}`;
    } else {
      metricTopSteam.textContent = 'Stable';
      metricTopSteamDelta.textContent = '0.0 pts';
      metricTopSteamDesc.textContent = 'Lines matched CBS locked sheet';
    }
  }
}

// Render All Games
function renderGames() {
  const games = getCurrentGames();
  const picks = getCurrentPicks();
  const query = state.searchQuery.toLowerCase().trim();

  // Filter games according to tab and query
  let filtered = games.filter(g => {
    const textMatch = g.awayTeam.toLowerCase().includes(query) ||
                      g.homeTeam.toLowerCase().includes(query) ||
                      g.awayAbbr.toLowerCase().includes(query) ||
                      g.homeAbbr.toLowerCase().includes(query);
    if (!textMatch) return false;

    const analysis = calculateGameEdge(g);

    if (state.activeTab === 'ranked') {
      const pick = picks[g.id];
      return pick && pick.teamPicked;
    } else if (state.activeTab === 'suggestions') {
      return analysis.spreadEdge >= 2.0;
    } else if (state.activeTab === 'cbs') {
      return analysis.clvEdge >= 1.0;
    } else if (state.activeTab === 'steam') {
      return calculateLineShift(g).advantagePts >= 0.5;
    } else if (state.activeTab === 'underdogs') {
      return (analysis.recommendedTeam === 'AWAY' && g.homeSpread < 0) ||
             (analysis.recommendedTeam === 'HOME' && g.homeSpread > 0);
    }
    return true;
  });

  // Sort if on ranked tab, CBS CLV tab, or Steam tab
  if (state.activeTab === 'ranked') {
    filtered.sort((a, b) => {
      const rankA = picks[a.id]?.rank || 0;
      const rankB = picks[b.id]?.rank || 0;
      return rankB - rankA; // Highest confidence first
    });
  } else if (state.activeTab === 'cbs') {
    filtered.sort((a, b) => {
      const edgeA = calculateGameEdge(a).clvEdge;
      const edgeB = calculateGameEdge(b).clvEdge;
      return edgeB - edgeA; // Highest CLV first
    });
  } else if (state.activeTab === 'steam') {
    filtered.sort((a, b) => {
      const shiftA = calculateLineShift(a).advantagePts;
      const shiftB = calculateLineShift(b).advantagePts;
      return shiftB - shiftA; // Highest line shift first
    });
  }

  gamesContainer.innerHTML = '';

  if (filtered.length === 0) {
    gamesContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🏈</div>
        <h3>No matchups match your view</h3>
        <p>Try switching tabs, clearing search filters, or adding custom matchups.</p>
      </div>
    `;
    updateMetrics();
    return;
  }

  const totalSlots = games.length;

  filtered.forEach(game => {
    const analysis = calculateGameEdge(game);
    const pick = picks[game.id] || { teamPicked: null, rank: null };
    const awaySpread = -game.homeSpread;
    const awaySpreadStr = awaySpread > 0 ? `+${awaySpread}` : `${awaySpread}`;
    const homeSpreadStr = game.homeSpread > 0 ? `+${game.homeSpread}` : `${game.homeSpread}`;

    const shiftMeta = calculateLineShift(game);
    const cbsSpreadVal = game.cbsLockedSpread !== undefined ? game.cbsLockedSpread : game.homeSpread;
    const cbsSpreadStr = cbsSpreadVal > 0 ? `+${cbsSpreadVal}` : `${cbsSpreadVal}`;
    const liveSpreadVal = game.currentMarketSpread !== undefined ? game.currentMarketSpread : cbsSpreadVal;
    const liveSpreadStr = liveSpreadVal > 0 ? `+${liveSpreadVal}` : `${liveSpreadVal}`;

    const awayMeta = TEAM_DATA[game.awayAbbr] || { color: '#2563eb' };
    const homeMeta = TEAM_DATA[game.homeAbbr] || { color: '#dc2626' };

    const card = document.createElement('div');
    card.className = `matchup-card ${pick.teamPicked ? 'card-picked' : ''} ${analysis.badgeType === 'lock' ? 'card-lock' : ''}`;
    card.dataset.gameId = game.id;

    // Build ranking options 1..totalSlots
    let rankOptionsHtml = `<option value="">Rank</option>`;
    for (let r = totalSlots; r >= 1; r--) {
      const isSelected = pick.rank === r ? 'selected' : '';
      rankOptionsHtml += `<option value="${r}" ${isSelected}>${r} pts</option>`;
    }

    card.innerHTML = `
      <div class="card-top-meta">
        <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
          <span class="game-time-tag">
            <span>🕒</span> ${game.time || 'TBD'}
          </span>
          <span class="cbs-locked-indicator" title="Spread locked for CBS Pick'em Pool">🔒 CBS</span>
          ${analysis.clvEdge >= 1.0 ? `<span class="cbs-clv-pill" title="Closing Line Value advantage over locked pool spread">+${analysis.clvEdge} CLV</span>` : ''}
        </div>
        <div class="rank-selector-wrapper">
          <label class="rank-label">Confidence</label>
          <select class="rank-badge-select" data-game-id="${game.id}">
            ${rankOptionsHtml}
          </select>
        </div>
      </div>

      <!-- Live Line Movement Box -->
      <div class="line-movement-box">
        <div class="line-compare-wrap">
          <span class="line-tag-cbs">🔒 CBS: ${cbsSpreadStr}</span>
          <span class="line-tag-arrow">➔</span>
          <span class="line-tag-live">Vegas: ${liveSpreadStr}</span>
          <span class="stepper-btn-group">
            <button class="mini-step-btn line-step-down" data-game-id="${game.id}" title="Nudge live line -0.5">-</button>
            <button class="mini-step-btn line-step-up" data-game-id="${game.id}" title="Nudge live line +0.5">+</button>
          </span>
        </div>
        <span class="line-delta-pill ${shiftMeta.badgeClass}">
          ${shiftMeta.label}
        </span>
      </div>

      <div class="teams-wrapper">
        <!-- Away Team -->
        <div class="team-row ${pick.teamPicked === 'AWAY' ? 'selected' : ''}" data-team="AWAY" data-game-id="${game.id}">
          <div class="team-info">
            <div class="team-badge" style="background-color: ${awayMeta.color}">
              ${game.awayAbbr}
            </div>
            <div class="team-details">
              <span class="team-name">
                ${game.awayTeam}
                ${game.awayPickPct ? `<span class="cbs-pct-badge" title="Public Pool Pick %">${game.awayPickPct}</span>` : ''}
              </span>
              <span class="team-record">${game.awayRecord || '0-0'} • Away</span>
            </div>
          </div>
          <div class="odds-bet-pill">
            <span class="spread-tag">${awaySpreadStr}</span>
            <span class="moneyline-sub">${game.awayML || ''}</span>
          </div>
        </div>

        <!-- Home Team -->
        <div class="team-row ${pick.teamPicked === 'HOME' ? 'selected' : ''}" data-team="HOME" data-game-id="${game.id}">
          <div class="team-info">
            <div class="team-badge" style="background-color: ${homeMeta.color}">
              ${game.homeAbbr}
            </div>
            <div class="team-details">
              <span class="team-name">
                ${game.homeTeam}
                ${game.homePickPct ? `<span class="cbs-pct-badge" title="Public Pool Pick %">${game.homePickPct}</span>` : ''}
              </span>
              <span class="team-record">${game.homeRecord || '0-0'} • Home</span>
            </div>
          </div>
          <div class="odds-bet-pill">
            <span class="spread-tag">${homeSpreadStr}</span>
            <span class="moneyline-sub">${game.homeML || ''}</span>
          </div>
        </div>
      </div>

      <div class="card-bottom">
        <div class="meta-stats-row">
          <span class="ou-stat">O/U: ${game.total || '46.0'}</span>
          <span class="text-subtle">Model Proj: ${game.homeAbbr} ${game.modelProjLine > 0 ? '+' : ''}${game.modelProjLine}</span>
        </div>

        <div class="suggestion-box">
          <div class="suggestion-content">
            <span class="model-chip ${analysis.badgeType}">${analysis.badgeLabel}</span>
            <span class="suggestion-text">${analysis.recommendedAbbr} ${analysis.recommendedSpread} (+${analysis.spreadEdge})</span>
          </div>
          <button class="why-btn" data-game-id="${game.id}">Why? 💡</button>
        </div>
      </div>
    `;

    gamesContainer.appendChild(card);
  });

  attachCardEvents();
  updateMetrics();
}

// Handle Team Picks and Rank Updates
function attachCardEvents() {
  // Team selection
  document.querySelectorAll('.team-row').forEach(row => {
    row.addEventListener('click', (e) => {
      const gameId = row.dataset.gameId;
      const team = row.dataset.team;
      const picks = getCurrentPicks();

      if (!picks[gameId]) {
        picks[gameId] = { teamPicked: null, rank: null };
      }

      // If clicked again, toggle off
      if (picks[gameId].teamPicked === team) {
        picks[gameId].teamPicked = null;
      } else {
        picks[gameId].teamPicked = team;

        // Auto-assign highest available rank if not already assigned
        if (!picks[gameId].rank) {
          const usedRanks = Object.values(picks).map(p => p.rank).filter(Boolean);
          const maxRank = getCurrentGames().length;
          for (let r = maxRank; r >= 1; r--) {
            if (!usedRanks.includes(r)) {
              picks[gameId].rank = r;
              break;
            }
          }
        }
      }

      saveState();
      renderGames();
    });
  });

  // Rank selection
  document.querySelectorAll('.rank-badge-select').forEach(select => {
    select.addEventListener('change', (e) => {
      const gameId = select.dataset.gameId;
      const newRank = e.target.value ? parseInt(e.target.value, 10) : null;
      const picks = getCurrentPicks();

      if (!picks[gameId]) {
        picks[gameId] = { teamPicked: null, rank: null };
      }

      // If this rank was already used by another game, swap them
      if (newRank) {
        for (const [id, pick] of Object.entries(picks)) {
          if (id !== gameId && pick.rank === newRank) {
            pick.rank = picks[gameId].rank; // swap or vacate
            break;
          }
        }
      }

      picks[gameId].rank = newRank;
      saveState();
      renderGames();
    });
  });

  // Why button
  document.querySelectorAll('.why-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      openAnalysisModal(gameId);
    });
  });

  // Live line stepper buttons
  document.querySelectorAll('.line-step-down').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      const game = getCurrentGames().find(g => g.id === gameId);
      if (game) {
        if (game.currentMarketSpread === undefined) game.currentMarketSpread = game.homeSpread;
        game.currentMarketSpread = Math.round((parseFloat(game.currentMarketSpread) - 0.5) * 10) / 10;
        saveState();
        renderGames();
        showToast(`${game.awayAbbr} @ ${game.homeAbbr} live spread updated to ${game.currentMarketSpread}`);
      }
    });
  });

  document.querySelectorAll('.line-step-up').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const gameId = btn.dataset.gameId;
      const game = getCurrentGames().find(g => g.id === gameId);
      if (game) {
        if (game.currentMarketSpread === undefined) game.currentMarketSpread = game.homeSpread;
        game.currentMarketSpread = Math.round((parseFloat(game.currentMarketSpread) + 0.5) * 10) / 10;
        saveState();
        renderGames();
        showToast(`${game.awayAbbr} @ ${game.homeAbbr} live spread updated to ${game.currentMarketSpread}`);
      }
    });
  });
}

// Open Analysis Breakdown Modal
function openAnalysisModal(gameId) {
  const games = getCurrentGames();
  const game = games.find(g => g.id === gameId);
  if (!game) return;

  const analysis = calculateGameEdge(game);
  const awaySpread = -game.homeSpread;
  const awaySpreadStr = awaySpread > 0 ? `+${awaySpread}` : `${awaySpread}`;
  const homeSpreadStr = game.homeSpread > 0 ? `+${game.homeSpread}` : `${game.homeSpread}`;

  modalMatchupTitle.textContent = `${game.awayTeam} (${awaySpreadStr}) @ ${game.homeTeam} (${homeSpreadStr})`;
  modalMatchupMeta.textContent = `${game.time || 'Upcoming'} • Total O/U ${game.total}`;

  const keyFactors = game.keyFactors && game.keyFactors.length > 0 ? game.keyFactors : [
    `Model calculates a projected margin of ${game.modelProjLine} vs market line of ${game.homeSpread}.`,
    `Statistical edge generated from turnover margin, net yards per play, and injury differential.`,
    `Key number positioning favors ${analysis.recommendedAbbr} with critical margin protection.`
  ];

  let factorsHtml = keyFactors.map(factor => `
    <div class="reasoning-item">
      <span class="reasoning-icon">🏈</span>
      <div>${factor}</div>
    </div>
  `).join('');

  analysisModalBody.innerHTML = `
    <div class="analysis-stat-grid">
      <div class="analysis-stat-box">
        <div class="stat-box-title">Market Spread</div>
        <div class="stat-box-num text-accent">${game.homeAbbr} ${homeSpreadStr}</div>
      </div>
      <div class="analysis-stat-box">
        <div class="stat-box-title">Model Proj</div>
        <div class="stat-box-num" style="color: #10b981">${game.homeAbbr} ${game.modelProjLine > 0 ? '+' : ''}${game.modelProjLine}</div>
      </div>
      <div class="analysis-stat-box">
        <div class="stat-box-title">Calculated Edge</div>
        <div class="stat-box-num text-accent">+${analysis.spreadEdge} pts</div>
      </div>
    </div>

    <div>
      <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem; letter-spacing: 0.05em;">
        Algorithmic Angles & Key Factors
      </h4>
      <div class="reasoning-list">
        ${factorsHtml}
      </div>
    </div>

    <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 0.85rem; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-weight: 700; color: #10b981; font-size: 0.95rem;">Recommended Pick: ${analysis.recommendedTeamName} (${analysis.recommendedSpread})</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">Optimal value against current sportsbook line.</div>
      </div>
      <button class="btn btn-primary btn-sm" id="modalPickApplyBtn">Select Pick</button>
    </div>
  `;

  document.getElementById('modalPickApplyBtn').addEventListener('click', () => {
    const picks = getCurrentPicks();
    if (!picks[game.id]) picks[game.id] = {};
    picks[game.id].teamPicked = analysis.recommendedTeam;

    if (!picks[game.id].rank) {
      const usedRanks = Object.values(picks).map(p => p.rank).filter(Boolean);
      const maxRank = games.length;
      for (let r = maxRank; r >= 1; r--) {
        if (!usedRanks.includes(r)) {
          picks[game.id].rank = r;
          break;
        }
      }
    }

    saveState();
    renderGames();
    analysisModal.classList.add('hidden');
    showToast(`Picked ${analysis.recommendedAbbr} ${analysis.recommendedSpread}!`);
  });

  analysisModal.classList.remove('hidden');
}

// Auto-Rank all games according to model suggestions
function autoRankBySuggestions() {
  const games = getCurrentGames();
  if (games.length === 0) {
    showToast('No games available to rank in this week.');
    return;
  }

  // Calculate edge for every game
  const evaluated = games.map(g => ({
    game: g,
    analysis: calculateGameEdge(g)
  }));

  // Sort descending by calculated edge
  evaluated.sort((a, b) => b.analysis.spreadEdge - a.analysis.spreadEdge);

  const picks = getCurrentPicks();
  const totalSlots = games.length;

  evaluated.forEach((item, index) => {
    const rankPoints = totalSlots - index; // Highest edge gets max points (e.g. 16, 15, ...)
    picks[item.game.id] = {
      teamPicked: item.analysis.recommendedTeam,
      rank: rankPoints
    };
  });

  saveState();
  renderGames();
  showToast('⚡ Auto-ranked all games by model confidence edge!');
}

// Export picks formatted for pools / chat
function openExportModal() {
  const games = getCurrentGames();
  const picks = getCurrentPicks();

  let sortedPicks = [];
  games.forEach(g => {
    const p = picks[g.id];
    if (p && p.teamPicked) {
      const awaySpread = -g.homeSpread;
      const isAway = p.teamPicked === 'AWAY';
      const pickedTeam = isAway ? g.awayTeam : g.homeTeam;
      const pickedAbbr = isAway ? g.awayAbbr : g.homeAbbr;
      const spreadVal = isAway ? (awaySpread > 0 ? `+${awaySpread}` : `${awaySpread}`) : (g.homeSpread > 0 ? `+${g.homeSpread}` : `${g.homeSpread}`);
      const opponentAbbr = isAway ? g.homeAbbr : g.awayAbbr;
      const rank = p.rank || 0;

      sortedPicks.push({
        rank,
        text: `[${rank} pts] ${pickedAbbr} (${spreadVal}) vs ${opponentAbbr} - ${pickedTeam}`
      });
    }
  });

  // Sort highest confidence points first
  sortedPicks.sort((a, b) => b.rank - a.rank);

  let exportStr = `🏈 GRIDIRON SPREAD PICKS - ${state.currentWeek.toUpperCase()}\n`;
  exportStr += `Total Confidence Points: ${sortedPicks.reduce((acc, cur) => acc + cur.rank, 0)} pts\n`;
  exportStr += `Generated: ${new Date().toLocaleDateString()}\n`;
  exportStr += `==============================================\n\n`;

  if (sortedPicks.length === 0) {
    exportStr += `(No picks completed yet. Make selections on the board first!)`;
  } else {
    sortedPicks.forEach((p, idx) => {
      exportStr += `${idx + 1}. ${p.text}\n`;
    });
  }

  exportTextarea.value = exportStr;
  exportModal.classList.remove('hidden');
}

// Simulation & Score Grader
function openSimModal() {
  const games = getCurrentGames();
  const picks = getCurrentPicks();

  simScoreInputs.innerHTML = '';
  simResultsBanner.classList.add('hidden');

  games.forEach(g => {
    const pick = picks[g.id];
    const awaySpread = -g.homeSpread;
    const isAway = pick?.teamPicked === 'AWAY';
    const pickStr = pick?.teamPicked ? (isAway ? `${g.awayAbbr} (${awaySpread > 0 ? '+' : ''}${awaySpread})` : `${g.homeAbbr} (${g.homeSpread > 0 ? '+' : ''}${g.homeSpread})`) : 'No Pick';
    const pickRank = pick?.rank ? `${pick.rank} pts` : '';

    const row = document.createElement('div');
    row.className = 'sim-row';
    row.innerHTML = `
      <div>
        <strong>${g.awayAbbr} @ ${g.homeAbbr}</strong>
        <span style="font-size: 0.75rem; color: var(--color-accent); margin-left: 0.5rem;">Pick: ${pickStr} [${pickRank}]</span>
      </div>
      <div class="sim-score-input-wrap">
        <label style="font-size: 0.75rem; color: var(--text-muted);">${g.awayAbbr}</label>
        <input type="number" class="score-num-input sim-away-score" data-game-id="${g.id}" value="${state.simScores[g.id]?.away || ''}" placeholder="0">
        <span>-</span>
        <input type="number" class="score-num-input sim-home-score" data-game-id="${g.id}" value="${state.simScores[g.id]?.home || ''}" placeholder="0">
        <label style="font-size: 0.75rem; color: var(--text-muted);">${g.homeAbbr}</label>
      </div>
    `;
    simScoreInputs.appendChild(row);
  });

  simModal.classList.remove('hidden');
}

// Run Simulation Generator
function runSimulation() {
  const games = getCurrentGames();
  const picks = getCurrentPicks();

  let totalPointsWon = 0;
  let totalPossible = 0;
  let wins = 0;
  let losses = 0;
  let pushes = 0;

  games.forEach(g => {
    // Generate realistic NFL scores centered around total and model line
    const totalTarget = g.total || 44.0;
    const homeMargin = -(g.homeSpread) + (Math.random() * 8 - 4); // close to spread
    const homeScore = Math.max(10, Math.round((totalTarget + homeMargin) / 2));
    const awayScore = Math.max(10, Math.round((totalTarget - homeMargin) / 2));

    state.simScores[g.id] = { away: awayScore, home: homeScore };

    // Grade pick
    const pick = picks[g.id];
    if (pick && pick.teamPicked) {
      const rankPts = pick.rank || 0;
      totalPossible += rankPts;

      // Actual home margin
      const actualDiff = homeScore - awayScore; // home - away
      // ATS evaluation:
      // Home covers if (actualDiff + homeSpread) > 0. (e.g. KC -3, win by 4 -> 4 + (-3) = +1 > 0)
      const homeATS = actualDiff + g.homeSpread;

      let won = false;
      if (homeATS === 0) {
        pushes++;
      } else if (pick.teamPicked === 'HOME' && homeATS > 0) {
        won = true;
      } else if (pick.teamPicked === 'AWAY' && homeATS < 0) {
        won = true;
      }

      if (won) {
        wins++;
        totalPointsWon += rankPts;
      } else if (homeATS !== 0) {
        losses++;
      }
    }
  });

  // Re-populate inputs
  document.querySelectorAll('.sim-away-score').forEach(input => {
    const id = input.dataset.gameId;
    if (state.simScores[id]) input.value = state.simScores[id].away;
  });
  document.querySelectorAll('.sim-home-score').forEach(input => {
    const id = input.dataset.gameId;
    if (state.simScores[id]) input.value = state.simScores[id].home;
  });

  // Display results banner
  const winRate = (wins + losses) > 0 ? Math.round((wins / (wins + losses)) * 100) : 0;
  simResultsBanner.innerHTML = `
    <div>
      <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Confidence Points</div>
      <div class="sim-summary-val" style="color: #10b981;">${totalPointsWon} / ${totalPossible}</div>
    </div>
    <div>
      <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Record ATS</div>
      <div class="sim-summary-val text-accent">${wins}-${losses}${pushes > 0 ? `-${pushes}` : ''}</div>
    </div>
    <div>
      <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Win Rate</div>
      <div class="sim-summary-val" style="color: #38bdf8;">${winRate}%</div>
    </div>
  `;
  simResultsBanner.classList.remove('hidden');
}

// Event Listeners Initialization
function initEventListeners() {
  // Week switcher
  weekSelect.addEventListener('change', (e) => {
    state.currentWeek = e.target.value;
    renderGames();
  });

  // Auto Suggest
  autoSuggestBtn.addEventListener('click', autoRankBySuggestions);

  // Tab switcher
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.dataset.tab;
      renderGames();
    });
  });

  // Search filter
  searchFilter.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderGames();
  });

  // Reset picks
  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all picks and confidence rankings for this week?')) {
      state.userPicks[state.currentWeek] = {};
      saveState();
      renderGames();
      showToast('All picks reset.');
    }
  });

  clearPicksBtn.addEventListener('click', () => {
    state.userPicks[state.currentWeek] = {};
    saveState();
    renderGames();
    showToast('Picks cleared.');
  });

  // Modal Closures
  closeAnalysisModal.addEventListener('click', () => analysisModal.classList.add('hidden'));
  closeGameModal.addEventListener('click', () => gameModal.classList.add('hidden'));
  cancelGameBtn.addEventListener('click', () => gameModal.classList.add('hidden'));
  closeExportModal.addEventListener('click', () => exportModal.classList.add('hidden'));
  closeSimModal.addEventListener('click', () => simModal.classList.add('hidden'));
  closeCbsModal.addEventListener('click', () => cbsModal.classList.add('hidden'));
  closeLiveOddsModal.addEventListener('click', () => liveOddsModal.classList.add('hidden'));

  // Close when clicking backdrop
  [analysisModal, gameModal, exportModal, simModal, cbsModal, liveOddsModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  // Live Odds Modal
  liveOddsBtn.addEventListener('click', () => {
    oddsApiKeyInput.value = localStorage.getItem('gridiron_odds_api_key') || '';
    bookmakerSelect.value = localStorage.getItem('gridiron_bookmaker') || 'draftkings';
    liveOddsModal.classList.remove('hidden');
  });

  // Test live moves simulation
  testMockOddsBtn.addEventListener('click', () => {
    const games = getCurrentGames();
    games.forEach(g => {
      const shiftChoices = [-1.0, -0.5, 0, 0.5, 1.0, 1.5];
      const randomShift = shiftChoices[Math.floor(Math.random() * shiftChoices.length)];
      const base = g.cbsLockedSpread !== undefined ? g.cbsLockedSpread : g.homeSpread;
      g.currentMarketSpread = Math.round((base + randomShift) * 10) / 10;
    });
    saveState();
    renderGames();
    liveOddsModal.classList.add('hidden');
    showToast('🎲 Simulated live market shifts across matchups!');
  });

  // Fetch Live Odds from The Odds API
  fetchLiveOddsBtn.addEventListener('click', async () => {
    const apiKey = oddsApiKeyInput.value.trim();
    if (!apiKey) {
      showToast('Please enter your free The Odds API key first.');
      return;
    }
    localStorage.setItem('gridiron_odds_api_key', apiKey);
    const bookmaker = bookmakerSelect.value;
    localStorage.setItem('gridiron_bookmaker', bookmaker);

    fetchLiveOddsBtn.disabled = true;
    fetchLiveOddsBtn.textContent = '⏳ Fetching live lines...';

    try {
      const res = await fetch(`https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&regions=us&markets=spreads&oddsFormat=american&bookmakers=${bookmaker}`);
      if (!res.ok) {
        throw new Error(`API returned status ${res.status}`);
      }
      const data = await res.json();
      const games = getCurrentGames();
      let matchedCount = 0;

      data.forEach(event => {
        const homeName = event.home_team.toLowerCase();
        const awayName = event.away_team.toLowerCase();

        games.forEach(g => {
          const matchHome = homeName.includes(g.homeTeam.toLowerCase()) || homeName.includes(g.homeAbbr.toLowerCase());
          const matchAway = awayName.includes(g.awayTeam.toLowerCase()) || awayName.includes(g.awayAbbr.toLowerCase());

          if (matchHome && matchAway) {
            const bm = event.bookmakers.find(b => b.key === bookmaker) || event.bookmakers[0];
            if (bm) {
              const spreadMarket = bm.markets.find(m => m.key === 'spreads');
              if (spreadMarket) {
                const homeOutcome = spreadMarket.outcomes.find(o => o.name.toLowerCase() === homeName);
                if (homeOutcome && homeOutcome.point !== undefined) {
                  g.currentMarketSpread = homeOutcome.point;
                  matchedCount++;
                }
              }
            }
          }
        });
      });

      saveState();
      renderGames();
      liveOddsModal.classList.add('hidden');
      showToast(`✅ Synced ${matchedCount} matchups from ${bookmaker.toUpperCase()} live lines!`);
    } catch (err) {
      showToast(`Error fetching odds: ${err.message}`);
    } finally {
      fetchLiveOddsBtn.disabled = false;
      fetchLiveOddsBtn.textContent = '⚡ Fetch Live Sportsbook Lines';
    }
  });

  // CBS Modal & Bookmarklet Setup
  cbsModalBtn.addEventListener('click', () => cbsModal.classList.remove('hidden'));
  const bookmarkletCode = `javascript:(function(){
    var rows=document.querySelectorAll('.picks-row,.game-row,tr[data-game-id]');
    if(!rows.length){alert('GridironSpread: Navigate to your CBS Sports Football Pick\\'em page, then click this bookmarklet to extract locked lines!');return;}
    var res=[];rows.forEach(function(r){var t=r.innerText.replace(/\\s+/g,' ');if(t.length>5)res.push(t);});
    prompt('Copy these lines and paste into GridironSpread CBS Sync:',res.join('\\n'));
  })();`;
  if (cbsBookmarkletLink) cbsBookmarkletLink.setAttribute('href', bookmarkletCode);

  applyCbsPasteBtn.addEventListener('click', () => {
    const raw = cbsPasteArea.value;
    if (!raw.trim()) {
      showToast('Please paste CBS game lines first.');
      return;
    }
    const games = getCurrentGames();
    let updatedCount = 0;
    const lines = raw.split('\n');

    lines.forEach(line => {
      // Check for percentages like 65% or 35%
      const pctMatches = line.match(/(\d{1,3})%/g);

      games.forEach(g => {
        const homeMatch = line.toLowerCase().includes(g.homeTeam.toLowerCase()) || line.includes(g.homeAbbr);
        const awayMatch = line.toLowerCase().includes(g.awayTeam.toLowerCase()) || line.includes(g.awayAbbr);
        if (homeMatch && awayMatch) {
          const numMatch = line.match(/([+-]?\d+\.?\d*)/g);
          if (numMatch) {
            const spreadCand = numMatch.map(Number).find(n => Math.abs(n) <= 24 && Math.abs(n) >= 0.5);
            if (spreadCand !== undefined) {
              g.homeSpread = spreadCand;
              g.cbsLockedSpread = spreadCand;
              updatedCount++;
            }
          }
          if (pctMatches && pctMatches.length >= 2) {
            g.awayPickPct = pctMatches[0];
            g.homePickPct = pctMatches[1];
          }
        }
      });
    });
    saveState();
    renderGames();
    cbsModal.classList.add('hidden');
    showToast(`Synced ${updatedCount} locked spreads and pick percentages from CBS!`);
  });

  copyCbsFormattedPicks.addEventListener('click', () => {
    const games = getCurrentGames();
    const picks = getCurrentPicks();
    let out = `CBS SPORTS PICK'EM SHEET - ${state.currentWeek.toUpperCase()}\n`;
    games.forEach((g, i) => {
      const p = picks[g.id];
      const awaySpread = -g.homeSpread;
      const isAway = p?.teamPicked === 'AWAY';
      const isHome = p?.teamPicked === 'HOME';
      const pickTeam = isAway ? `${g.awayTeam} (${awaySpread > 0 ? '+' : ''}${awaySpread})` :
                       isHome ? `${g.homeTeam} (${g.homeSpread > 0 ? '+' : ''}${g.homeSpread})` : 'NO PICK';
      const rank = p?.rank ? `[${p.rank} pts]` : '[No Rank]';
      out += `${i + 1}. ${g.awayAbbr} @ ${g.homeAbbr} ➔ ${pickTeam} ${rank}\n`;
    });
    navigator.clipboard.writeText(out);
    showToast('Copied CBS sheet order to clipboard!');
  });

  // Export
  exportBtn.addEventListener('click', openExportModal);
  copyExportBtn.addEventListener('click', () => {
    exportTextarea.select();
    navigator.clipboard.writeText(exportTextarea.value);
    showToast('Copied to clipboard!');
  });

  downloadJsonBtn.addEventListener('click', () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({
      week: state.currentWeek,
      picks: getCurrentPicks(),
      games: getCurrentGames()
    }, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `gridiron-picks-${state.currentWeek}.json`);
    dlAnchor.click();
  });

  // Simulation
  simModalBtn.addEventListener('click', openSimModal);
  runSimBtn.addEventListener('click', runSimulation);
  clearSimBtn.addEventListener('click', () => {
    state.simScores = {};
    document.querySelectorAll('.score-num-input').forEach(i => i.value = '');
    simResultsBanner.classList.add('hidden');
  });

  // Add / Edit Custom Game
  addGameBtn.addEventListener('click', () => {
    gameModalTitle.textContent = 'Add Matchup';
    document.getElementById('editGameId').value = '';
    gameForm.reset();
    gameModal.classList.remove('hidden');
  });

  gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const awayTeam = document.getElementById('inputAwayTeam').value.trim();
    const awayAbbr = document.getElementById('inputAwayAbbr').value.toUpperCase().trim();
    const homeTeam = document.getElementById('inputHomeTeam').value.trim();
    const homeAbbr = document.getElementById('inputHomeAbbr').value.toUpperCase().trim();
    const homeSpread = parseFloat(document.getElementById('inputHomeSpread').value) || 0;
    const total = parseFloat(document.getElementById('inputTotal').value) || 45.0;
    const time = document.getElementById('inputTime').value.trim() || 'Upcoming';

    const newGame = {
      id: 'custom-' + Date.now(),
      awayTeam, awayAbbr, awayRecord: '0-0',
      homeTeam, homeAbbr, homeRecord: '0-0',
      homeSpread, total, time,
      awayML: '', homeML: '',
      modelProjLine: homeSpread + (homeSpread > 0 ? -1.5 : +1.5),
      keyFactors: [
        'User custom configured matchup.',
        `Current line placed at ${homeAbbr} ${homeSpread > 0 ? '+' : ''}${homeSpread}.`
      ]
    };

    if (!state.weeks[state.currentWeek]) state.weeks[state.currentWeek] = [];
    state.weeks[state.currentWeek].push(newGame);
    saveState();
    gameModal.classList.add('hidden');
    renderGames();
    showToast(`Added ${awayAbbr} @ ${homeAbbr}`);
  });
}

// Initial Launch
initEventListeners();
renderGames();
