//the, a, an를 제외하고 알파벳 순서대로 정렬하기.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const container = document.querySelector('.container');

function bandName(name) {
  return name.replace(/^(the|a|an)/i, "");
}

const sorted = bands
  .sort((first, last) => bandName(first) > bandName(last) ? 1 : -1)
  .map(item => {
    return `<li>${item}</li>`
  }).join('');

  container.innerHTML = sorted;
