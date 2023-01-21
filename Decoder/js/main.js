// Abbreviation all capital letters must be entered here
// AcFD will not work 
const lists = {
'//': 'Weather not detected due sensor temporarily inoperative',
'///': 'Cloud is detected (unable to determine TCU/CB)',
'////': 'Visibility not reported due faulty sensor',
'/////////': 'Cloud not reported due faulty sensor',
'-': 'Light',
'+': 'Heavy',
'9999': 'Visibility 10KM or more',
'AAW': 'Aviation Area Winds',
'ABT': 'About',
'ABV': 'Above',
'AC': 'Altocumulus',
'AD QNH': 'Aerodrome QNH forecast',
'AFT': 'After',
'AGL': 'Above ground level',
'AIP': 'Aeronautical Information Publication',
'AIREP': 'Routine air report from aircraft in flight',
'AIREP SPECIAL': 'Special (non-routine) air report from aircraft in flight',
'AMD': 'Amended',
'AMSL': 'Above mean sea level',
'APRX': 'Approximate',
'AS': 'Altostratus',
'AT': 'At',
'ATIS': 'Automatic terminal information service',
'ATS': 'Air traffic services',
'AWIB': 'Aerodrome and weather information broadcast',
'AWS': 'Automatic weather station (produces METAR AUTO)',
'BASE': 'Cloud base',
'BC': 'Patches',
'BDRY': 'Boundary',
'BECMG': 'Becoming',
'BFR': 'Before',
'BKN': 'Broken (5–7 oktas)',
'BL': 'Blowing',
'BLDG': 'Building',
'BLW': 'Below',
'BR': 'Mist (1000–5000 M vis)',
'BTN': 'Between',
'BWR': 'Basic weather report',
'CAT': 'Clear air turbulence',
'CAVOK': 'Cloud and visibility OK',
'CB': 'Cumulonimbus',
'CLD': 'Cloud',
'CLR': 'Clear',
'CNL': 'Cancel',
'CONS': 'Continuous',
'COR': 'Corrected',
'COT': 'At the coast',
'CU': 'Cumulus',
'DP': 'Dew point temperature',
'DR': 'Low drifting',
'DS': 'DTG',
'DTRT': 'Deteriorating/deteriorate',
'DU': 'Dust',
'DZ': 'Drizzle',
'EMBD': 'Embedded',
'EST': 'Estimated',
'EXC': 'Except',
'EXTD': 'Extended or extending',
'FC': 'Funnel cloud',
'FCST': 'Forecast',
'FEW': 'Few (1–2 oktas)',
'FG': 'Fog (visibility less than 1000 m)',
'FIR': 'Flight information region',
'FISB': 'Flight information service broadcast',
'FL': 'Flight level',
'FM': 'From',
'FRQ': 'Frequent',
'FU': 'Smoke',
'FZ': 'Freezing',
'FZL': 'Freezing level',
'G': 'Gusts',
'GNZSIGWX': 'Graphical NZ significant weather',
'GR': 'Hail (5 mm or more)',
'GRAFOR': 'Graphical aviation forecast',
'GS': 'Small hail (smaller than 5 mm)',
'GSM': 'Graphical SIGMET Monitor',
'HVY': 'Heavy',
'HZ': 'Haze (visibility less than 5000 m)',
'ICAO': 'International Civil Aviation Organization',
'ICE': 'Icing',
'IFR': 'Instrument flight rules',
'IMC': 'Instrument meteorological conditions',
'IMPR': 'Improving',
'INTSF': 'Intensifying',
'ISOL': 'Isolated',
'KM': 'Kilometres',
'KT': 'Knots',
'LAN': 'Inland',
'LCA': 'Local/locally/location/located',
'LYR': 'Layer',
'M': 'Metres',
  'WRITE THE ABBREVIATION HERE IN ALL CAPS': 'Here is an explanation of what it means',
};

let textareaRead = document.querySelector('.js-textarea-read');
let textareaWrite = document.querySelector('.js-textarea-write');
let buttonDecode = document.querySelector('.button-decode');
let buttonClear = document.querySelector('.button-clear');
buttonDecode.onclick = function () {
  const abbreviation = textareaRead.value.toUpperCase();
  const list = lists[abbreviation] || testFunction();
  let list_data = '';
  for (let key in list) {
    list_data += `${list[key]}`;
    textareaWrite.innerHTML = list_data;
    textareaWrite.classList.remove('red');

  }
}
function testFunction() {
  textareaWrite.innerHTML = 'No result available for this code';
  textareaWrite.classList.add('red');
}
buttonClear.onclick = function () {
  textareaWrite.innerHTML = '';
  textareaRead.value = '';
}
function checkForEnter(e) {
  if (e.keyCode == 13) {
    event.preventDefault();
    buttonDecode.click();
  } else if ((e.keyCode == 8) || (e.keyCode == 46)) {
    textareaWrite.innerHTML = '';
  }

}
