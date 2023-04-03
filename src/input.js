class PianoInterface {
  constructor() {
    this.keys = document.querySelectorAll('.white-key, .black-key');
    this.keys.forEach(key => {
      key.isPressed = false;
      key.addEventListener('click', (event) => {
        event.preventDefault();
        key.isPressed = !key.isPressed;
        key.classList.toggle('pressed', key.isPressed);
        updateInput();
      });
    });
  }
  show() {
    document.getElementById('piano-container').style.display = 'block';
  }
  hide() {
    document.getElementById("piano-container").style.display = 'none';
  }
}



function inputIsValidIntNotation(input) {
  return input.match(/^\s*([0-9]?(10)?(11)?)(?:\s+([0-9]?(10)?(11)?))*\s*$/g);
}

function inputIsValidLetterNotation(input) {
  return input.match(/^\s*([A-G](b)?(bb)?(#)?(x)?)(?:\s+([A-G](b)?(bb)?(#)?(x)?))*\s*$/g);
}

function inputIsIntNotation(input) {
  return input.match(/^\s*[0-9]*(?:\s+([0-9]*))*\s*$/g);
}

function inputIsLetterNotation(input) {
  return input.match(/^\s*[a-zA-Z]*(?:\s+([a-zA-Z]*))*\s*$/g);
}

function updateInputInts(pressedKeys) {
  let pressedKeysInts = pressedKeys.map(key => key.getAttribute("note-int"));
  Input.value = pressedKeysInts.join(" ");
}

function updateInputLetters(pressedKeys) {
  let pressedKeysLetters = pressedKeys.map(key => key.getAttribute("note-name"));
  Input.value = pressedKeysLetters.join(" ");
}

function doPianoUpdate(arr) {
  Piano.keys.forEach(key => {
    let keyInt = parseInt(key.getAttribute("note-int"));
    if (arr.includes(keyInt)) {
      key.isPressed = true;
    } else {
      key.isPressed = false;
    }
    key.classList.toggle('pressed', key.isPressed);
  });
}

function removeInvalidPitches() {
  let input = Input.value.trim();
  input = removeInvalidChars(removeDuplicates(input));
  let parsed = [];
  if (input.length >= 1) {
    parsed = input.split(" ").filter(key => key.length > 0);
    if (inputIsLetterNotation(input)) {
      let mapped = parsed.map(key => PitchClass.classFromPitchName(key));
      mapped = mapped.filter(key => key != undefined);
      result = [];
      for (let i = 0; i < mapped.length; i++) {
        for (let j = 0; j < parsed.length; j++) {
          if (mapped[i].names.includes(parsed[j])) {
            result.push(parsed[i]);
          }
        }
      }
      input = result.join(" ");
    }
    else if (inputIsIntNotation(input)) {
      parsed = parsed.map(key => parseInt(key));
      parsed = parsed.filter(key => key >= 0 && key <= 11);
      input = parsed.join(" ");
    }
    else {
      //default to int notation
      console.log("Defaulting to int notation with " + input);
      parsed = mapAllToIntNotation(parsed);
      input = parsed.join(" ");
    }
  }
  console.log(input);
  Input.value = input.length>=1 ? sort(removeDuplicates(input)) : "";
  updatePiano();
}

function swap(arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr) {
  let i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < arr.length - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < arr.length; j++) {
      console.log(arr[j].pitchClass);
      if (arr[j].pitchClass < arr[min_idx].pitchClass)
        min_idx = j;

      // Swap the found minimum element with the first element
      swap(arr, min_idx, i);
    }
  }
  return arr;
}

function sort(input) {
  if (input.length >= 1) {
    if (inputIsValidLetterNotation(input)) {
      let parsed = input.split(" ").filter(key => key.length > 0);
      let mapped = parsed.map(key => PitchClass.classFromPitchName(key));
      mapped = parsed.filter(key => key != undefined).map(key => PitchClass.classFromPitchName(key));
      mapped = selectionSort(mapped);
      let result = [];
      for (let i = 0; i < mapped.length; i++) {
        for (let j = 0; j < parsed.length; j++) {
          if (mapped[i].names.includes(parsed[j])) {
            result.push(parsed[j]);
          }
        }
      }
      return result.join(" ");
    }
    else if (inputIsValidIntNotation(input)) {
      let parsed = input.split(" ").filter(key => key.length > 0);
      parsed = parsed.map(key => parseInt(key));
      parsed = parsed.sort((a, b) => a - b);
      return parsed.join(" ");
    }
    else {
      return input;
    }
  }
}

function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

function mapAllToIntNotation(parsed) {
  for (let i = 0; i < parsed.length; i++) {
    if (isNumeric(parsed[i])) {
      parsed[i] = parseInt(parsed[i]);
    } else {
      let pitchClass = PitchClass.classFromPitchName(parsed[i]);
      if (pitchClass != undefined) {
        parsed[i] = parseInt(pitchClass.getPitchClass());
      } else {
        parsed[i] = "";
      }
    }
  }
  parsed.filter(key => key.length > 0);
  parsed = parsed.map(key => parseInt(key));
  return parsed.filter(key => key >= 0 && key <= 11);
}

function removeInvalidChars(input) {
  let validChars = ["A", "B", "C", "D", "E", "F", "G", "b", "#", "x", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "];
  for (char of input) {
    if (!validChars.includes(char)) {
      input = input.replace(char, "");
    }
  }
  return input;
}

function removeDuplicates(input) {
  let parsed = input.split(" ").filter(key => key.length > 0);
  let unique = [...new Set(parsed)];
  return unique.join(" ");
}

/*function findComplement(input){
  let input = Input.value.trim();
  if (inputIsValidIntNotation(input)) {
    let parsed = input.split(" ").filter(key => key.length > 0);
    parsed = parsed.map(key => parseInt(key));
    let complement = [];
    for (let i = 0; i < 12; i++) {
      if (!parsed.includes(i)) {
        complement.push(i);
      }
    }
    Input.value = complement.join("");
    updatePiano();
    handleInput();
  }
}
  */
