const trichords = new Array();

trichords[0] = new Array("3-1", "0,1,2");

trichords[1] = new Array("3-2", "0,1,3");

trichords[2] = new Array("3-3", "0,1,4");

trichords[3] = new Array("3-4", "0,1,5");

trichords[4] = new Array("3-5", "0,1,6");

trichords[5] = new Array("3-6", "0,2,4");

trichords[6] = new Array("3-7", "0,2,5");

trichords[7] = new Array("3-8", "0,2,6");

trichords[8] = new Array("3-9", "0,2,7");

trichords[9] = new Array("3-10", "0,3,6");

trichords[10] = new Array("3-11", "0,3,7");

trichords[11] = new Array("3-12", "0,4,8");



const tetrachords = new Array();

tetrachords[0] = new Array("4-1", "0,1,2,3");

tetrachords[1] = new Array("4-2", "0,1,2,4");

tetrachords[2] = new Array("4-3", "0,1,3,4");

tetrachords[3] = new Array("4-4", "0,1,2,5");

tetrachords[4] = new Array("4-5", "0,1,2,6");

tetrachords[5] = new Array("4-6", "0,1,2,7");

tetrachords[6] = new Array("4-7", "0,1,4,5");

tetrachords[7] = new Array("4-8", "0,1,5,6");

tetrachords[8] = new Array("4-9", "0,1,6,7");

tetrachords[9] = new Array("4-10", "0,2,3,5");

tetrachords[10] = new Array("4-11", "0,1,3,5");

tetrachords[11] = new Array("4-12", "0,2,3,6");

tetrachords[12] = new Array("4-13", "0,1,3,6");

tetrachords[13] = new Array("4-14", "0,2,3,7");

tetrachords[14] = new Array("4-z15", "0,1,4,6");

tetrachords[15] = new Array("4-16", "0,1,5,7");

tetrachords[16] = new Array("4-17", "0,3,4,7");

tetrachords[17] = new Array("4-18", "0,1,4,7");

tetrachords[18] = new Array("4-19", "0,1,4,8");

tetrachords[19] = new Array("4-20", "0,1,5,8");

tetrachords[20] = new Array("4-21", "0,2,4,6");

tetrachords[21] = new Array("4-22", "0,2,4,7");

tetrachords[22] = new Array("4-23", "0,2,5,7");

tetrachords[23] = new Array("4-24", "0,2,4,8");

tetrachords[24] = new Array("4-25", "0,2,6,8");

tetrachords[25] = new Array("4-26", "0,3,5,8");

tetrachords[26] = new Array("4-27", "0,2,5,8");

tetrachords[27] = new Array("4-28", "0,3,6,9");

tetrachords[28] = new Array("4-z29", "0,1,3,7");



const pentachords = new Array();

pentachords[0] = new Array("5-1", "0,1,2,3,4");

pentachords[1] = new Array("5-2", "0,1,2,3,5");

pentachords[2] = new Array("5-3", "0,1,2,4,5");

pentachords[3] = new Array("5-4", "0,1,2,3,6");

pentachords[4] = new Array("5-5", "0,1,2,3,7");

pentachords[5] = new Array("5-6", "0,1,2,5,6");

pentachords[6] = new Array("5-7", "0,1,2,6,7");

pentachords[7] = new Array("5-8", "0,2,3,4,6");

pentachords[8] = new Array("5-9", "0,1,2,4,6");

pentachords[9] = new Array("5-10", "0,1,3,4,6");

pentachords[10] = new Array("5-11", "0,2,3,4,7");

pentachords[11] = new Array("5-z12", "0,1,3,5,6");

pentachords[12] = new Array("5-13", "0,1,2,4,8");

pentachords[13] = new Array("5-14", "0,1,2,5,7");

pentachords[14] = new Array("5-15", "0,1,2,6,8");

pentachords[15] = new Array("5-16", "0,1,3,4,7");

pentachords[16] = new Array("5-z17", "0,1,3,4,8");

pentachords[17] = new Array("5-z18", "0,1,4,5,7");

pentachords[18] = new Array("5-19", "0,1,3,6,7");

pentachords[19] = new Array("5-20", "0,1,5,6,8");

pentachords[20] = new Array("5-21", "0,1,4,5,8");

pentachords[21] = new Array("5-22", "0,1,4,7,8");

pentachords[22] = new Array("5-23", "0,2,3,5,7");

pentachords[23] = new Array("5-24", "0,1,3,5,7");

pentachords[24] = new Array("5-25", "0,2,3,5,8");

pentachords[25] = new Array("5-26", "0,2,4,5,8");

pentachords[26] = new Array("5-27", "0,1,3,5,8");

pentachords[27] = new Array("5-28", "0,2,3,6,8");

pentachords[28] = new Array("5-29", "0,1,3,6,8");

pentachords[29] = new Array("5-30", "0,1,4,6,8");

pentachords[30] = new Array("5-31", "0,1,3,6,9");

pentachords[31] = new Array("5-32", "0,1,4,6,9");

pentachords[32] = new Array("5-33", "0,2,4,6,8");

pentachords[33] = new Array("5-34", "0,2,4,6,9");

pentachords[34] = new Array("5-35", "0,2,4,7,9");

pentachords[35] = new Array("5-z36", "0,1,2,4,7");

pentachords[36] = new Array("5-z37", "0,3,4,5,8");

pentachords[37] = new Array("5-z38", "0,1,2,5,8");



const hexachords = new Array();

hexachords[0] = new Array("6-1", "0,1,2,3,4,5");

hexachords[1] = new Array("6-2", "0,1,2,3,4,6");

hexachords[2] = new Array("6-z3", "0,1,2,3,5,6");

hexachords[3] = new Array("6-z4", "0,1,2,4,5,6");

hexachords[4] = new Array("6-5", "0,1,2,3,6,7");

hexachords[5] = new Array("6-z6", "0,1,2,5,6,7");

hexachords[6] = new Array("6-7", "0,1,2,6,7,8");

hexachords[7] = new Array("6-8", "0,2,3,4,5,7");

hexachords[8] = new Array("6-9", "0,1,2,3,5,7");

hexachords[9] = new Array("6-z10", "0,1,3,4,5,7");

hexachords[10] = new Array("6-z11", "0,1,2,4,5,7");

hexachords[11] = new Array("6-z12", "0,1,2,4,6,7");

hexachords[12] = new Array("6-z13", "0,1,3,4,6,7");

hexachords[13] = new Array("6-14", "0,1,3,4,5,8");

hexachords[14] = new Array("6-15", "0,1,2,4,5,8");

hexachords[15] = new Array("6-16", "0,1,4,5,6,8");

hexachords[16] = new Array("6-z17", "0,1,2,4,7,8");

hexachords[17] = new Array("6-18", "0,1,2,5,7,8");

hexachords[18] = new Array("6-z19", "0,1,3,4,7,8");

hexachords[19] = new Array("6-20", "0,1,4,5,8,9");

hexachords[20] = new Array("6-21", "0,2,3,4,6,8");

hexachords[21] = new Array("6-22", "0,1,2,4,6,8");

hexachords[22] = new Array("6-z23", "0,2,3,5,6,8");

hexachords[23] = new Array("6-z24", "0,1,3,4,6,8");

hexachords[24] = new Array("6-z25", "0,1,3,5,6,8");

hexachords[25] = new Array("6-z26", "0,1,3,5,7,8");

hexachords[26] = new Array("6-27", "0,1,3,4,6,9");

hexachords[27] = new Array("6-z28", "0,1,3,5,6,9");

hexachords[28] = new Array("6-z29", "0,2,3,6,7,9");

hexachords[29] = new Array("6-30", "0,1,3,6,7,9");

hexachords[30] = new Array("6-31", "0,1,4,5,7,9");

hexachords[31] = new Array("6-32", "0,2,4,5,7,9");

hexachords[32] = new Array("6-33", "0,2,3,5,7,9");

hexachords[33] = new Array("6-34", "0,1,3,5,7,9");

hexachords[34] = new Array("6-35", "0,2,4,6,8,10");

hexachords[35] = new Array("6-z36", "0,1,2,3,4,7");

hexachords[36] = new Array("6-z37", "0,1,2,3,4,8");

hexachords[37] = new Array("6-z38", "0,1,2,3,7,8");

hexachords[38] = new Array("6-z39", "0,2,3,4,5,8");

hexachords[39] = new Array("6-z40", "0,1,2,3,5,8");

hexachords[40] = new Array("6-z41", "0,1,2,3,6,8");

hexachords[41] = new Array("6-z42", "0,1,2,3,6,9");

hexachords[42] = new Array("6-z43", "0,1,2,5,6,8");

hexachords[43] = new Array("6-z44", "0,1,2,5,6,9");

hexachords[44] = new Array("6-z45", "0,2,3,4,6,9");

hexachords[45] = new Array("6-z46", "0,1,2,4,6,9");

hexachords[46] = new Array("6-z47", "0,1,2,4,7,9");

hexachords[47] = new Array("6-z48", "0,1,2,5,7,9");

hexachords[48] = new Array("6-z49", "0,1,3,4,7,9");

hexachords[49] = new Array("6-z50", "0,1,4,6,7,9");



const septachords = new Array();

septachords[0] = new Array("7-1", "0,1,2,3,4,5,6");

septachords[1] = new Array("7-2", "0,1,2,3,4,5,7");

septachords[2] = new Array("7-3", "0,1,2,3,4,5,8");

septachords[3] = new Array("7-4", "0,1,2,3,4,6,7");

septachords[4] = new Array("7-5", "0,1,2,3,5,6,7");

septachords[5] = new Array("7-6", "0,1,2,3,4,7,8");

septachords[6] = new Array("7-7", "0,1,2,3,6,7,8");

septachords[7] = new Array("7-8", "0,2,3,4,5,6,8");

septachords[8] = new Array("7-9", "0,1,2,3,4,6,8");

septachords[9] = new Array("7-10", "0,1,2,3,4,6,9");

septachords[10] = new Array("7-11", "0,1,3,4,5,6,8");

septachords[11] = new Array("7-z12", "0,1,2,3,4,7,9");

septachords[12] = new Array("7-13", "0,1,2,4,5,6,8");

septachords[13] = new Array("7-14", "0,1,2,3,5,7,8");

septachords[14] = new Array("7-15", "0,1,2,4,6,7,8");

septachords[15] = new Array("7-16", "0,1,2,3,5,6,9");

septachords[16] = new Array("7-z17", "0,1,2,4,5,6,9");

septachords[17] = new Array("7-z18", "0,1,4,5,6,7,9");

// septachords[17] was packed to the left whereas most

// sets listed were packed from the right, so I changed it.

septachords[18] = new Array("7-19", "0,1,2,3,6,7,9");

septachords[19] = new Array("7-20", "0,1,2,5,6,7,9");

// septachords[19] was packed to the left whereas most

// sets listed were packed from the right, so I changed it.

septachords[20] = new Array("7-21", "0,1,2,4,5,8,9");

septachords[21] = new Array("7-22", "0,1,2,5,6,8,9");

septachords[22] = new Array("7-23", "0,2,3,4,5,7,9");

septachords[23] = new Array("7-24", "0,1,2,3,5,7,9");

septachords[24] = new Array("7-25", "0,2,3,4,6,7,9");

septachords[25] = new Array("7-26", "0,1,3,4,5,7,9");

septachords[26] = new Array("7-27", "0,1,2,4,5,7,9");

septachords[27] = new Array("7-28", "0,1,3,5,6,7,9");

septachords[28] = new Array("7-29", "0,1,2,4,6,7,9");

septachords[29] = new Array("7-30", "0,1,2,4,6,8,9");

septachords[30] = new Array("7-31", "0,1,3,4,6,7,9");

septachords[31] = new Array("7-32", "0,1,3,4,6,8,9");

septachords[32] = new Array("7-33", "0,1,2,4,6,8,10");

septachords[33] = new Array("7-34", "0,1,3,4,6,8,10");

septachords[34] = new Array("7-35", "0,1,3,5,6,8,10");

septachords[35] = new Array("7-z36", "0,1,2,3,5,6,8");

septachords[36] = new Array("7-z37", "0,1,3,4,5,7,8");

septachords[37] = new Array("7-z38", "0,1,2,4,5,7,8");



const octachords = new Array();

octachords[0] = new Array("8-1", "0,1,2,3,4,5,6,7");

octachords[1] = new Array("8-2", "0,1,2,3,4,5,6,8");

octachords[2] = new Array("8-3", "0,1,2,3,4,5,6,9");

octachords[3] = new Array("8-4", "0,1,2,3,4,5,7,8");

octachords[4] = new Array("8-5", "0,1,2,3,4,6,7,8");

octachords[5] = new Array("8-6", "0,1,2,3,5,6,7,8");

octachords[6] = new Array("8-7", "0,1,2,3,4,5,8,9");

octachords[7] = new Array("8-8", "0,1,2,3,4,7,8,9");

octachords[8] = new Array("8-9", "0,1,2,3,6,7,8,9");

octachords[9] = new Array("8-10", "0,2,3,4,5,6,7,9");

octachords[10] = new Array("8-11", "0,1,2,3,4,5,7,9");

octachords[11] = new Array("8-12", "0,1,3,4,5,6,7,9");

octachords[12] = new Array("8-13", "0,1,2,3,4,6,7,9");

octachords[13] = new Array("8-14", "0,1,2,4,5,6,7,9");

octachords[14] = new Array("8-z15", "0,1,2,3,4,6,8,9");

octachords[15] = new Array("8-16", "0,1,2,3,5,7,8,9");

octachords[16] = new Array("8-17", "0,1,3,4,5,6,8,9");

octachords[17] = new Array("8-18", "0,1,2,3,5,6,8,9");

octachords[18] = new Array("8-19", "0,1,2,4,5,6,8,9");

octachords[19] = new Array("8-20", "0,1,2,4,5,7,8,9");

octachords[20] = new Array("8-21", "0,1,2,3,4,6,8,10");

octachords[21] = new Array("8-22", "0,1,2,3,5,6,8,10");

octachords[22] = new Array("8-23", "0,1,2,3,5,7,8,10");

octachords[23] = new Array("8-24", "0,1,2,4,5,6,8,10");

octachords[24] = new Array("8-25", "0,1,2,4,6,7,8,10");

octachords[25] = new Array("8-26", "0,1,3,4,5,7,8,10");

// octachords[25] was packed to the left whereas most

// sets listed were packed from the right, so I changed it.

octachords[26] = new Array("8-27", "0,1,2,4,5,7,8,10");

octachords[27] = new Array("8-28", "0,1,3,4,6,7,9,10");

octachords[28] = new Array("8-z29", "0,1,2,3,5,6,7,9");



const nonachords = new Array();

nonachords[0] = new Array("9-1", "0,1,2,3,4,5,6,7,8");

nonachords[1] = new Array("9-2", "0,1,2,3,4,5,6,7,9");

nonachords[2] = new Array("9-3", "0,1,2,3,4,5,6,8,9");

nonachords[3] = new Array("9-4", "0,1,2,3,4,5,7,8,9");

nonachords[4] = new Array("9-5", "0,1,2,3,4,6,7,8,9");

nonachords[5] = new Array("9-6", "0,1,2,3,4,5,6,8,10");

nonachords[6] = new Array("9-7", "0,1,2,3,4,5,7,8,10");

nonachords[7] = new Array("9-8", "0,1,2,3,4,6,7,8,10");

nonachords[8] = new Array("9-9", "0,1,2,3,5,6,7,8,10");

nonachords[9] = new Array("9-10", "0,1,2,3,4,6,7,9,10");

nonachords[10] = new Array("9-11", "0,1,2,3,5,6,7,9,10");

nonachords[11] = new Array("9-12", "0,1,2,4,5,6,8,9,10");

const chords = [];
chords[3] = trichords;
chords[4] = tetrachords;
chords[5] = pentachords;
chords[6] = hexachords;
chords[7] = septachords;
chords[8] = octachords;
chords[9] = nonachords;


function forteName(primeForm) {
    let cardinality = primeForm.size();
    if (cardinality > 2) {
        let chord = chords[cardinality];
        for (let i = 0; i < chord.length; i++) {
            if (chord[i][1] === primeForm.toStringCommasSansSpaces()) {
                return chord[i][0];
            }
        }
    }
    else {
        return "No forte name";
    }
}

function findZMate(forte, primeForm) {
    let cardinality = primeForm.size();
    let icv = primeForm.intervalClassVector();
    let chord = chords[cardinality];
    console.log(chord);
    let zs = chord.filter(key => key[0] != forte && key[0].includes("z"));
    console.log(zs);
    for (z of zs) {
        let icv2 = new PitchCollection(z[1].split(",").map(key => PitchClass.class(key))).intervalClassVector();
        console.log(icv2);
        if (icv.toString() == icv2.toString()) {
            console.log(z);
            return z;
        }
    }
}

//We need this because javascript modulo is evil. 
function mod(n, m) {
    return ((n % m) + m) % m;
}

intervalClass = function (interval) {
    if (interval <= 6) {
        return interval;
    }
    else {
        return 12 - interval;
    }
}

class PitchClass {
    //pitch classes
    static zero = new PitchClass(0);
    static one = new PitchClass(1);
    static two = new PitchClass(2);
    static three = new PitchClass(3);
    static four = new PitchClass(4);
    static five = new PitchClass(5);
    static six = new PitchClass(6);
    static seven = new PitchClass(7);
    static eight = new PitchClass(8);
    static nine = new PitchClass(9);
    static ten = new PitchClass(10);
    static eleven = new PitchClass(11);
    static pitches = [PitchClass.zero, PitchClass.one, PitchClass.two, PitchClass.three, PitchClass.four, PitchClass.five,
    PitchClass.six, PitchClass.seven, PitchClass.eight, PitchClass.nine, PitchClass.ten, PitchClass.eleven];

    constructor(number) {
        this.pitchClass = mod(number, 12);
        this.names = PitchClass.mapClassToName(number);
    }

    static mapClassToName(number) {
        switch (number) {
            case 0:
                return ["C", "B#", "Dbb"];
            case 1:
                return ["C#", "Db", "Bx"];
            case 2:
                return ["D", "Cx", "Ebb"];
            case 3:
                return ["D#", "Eb", "Fbb"];
            case 4:
                return ["E", "Fb", "Dx"];
            case 5:
                return ["F", "E#", "Gbb"];
            case 6:
                return ["F#", "Gb", "Ex"];
            case 7:
                return ["G", "Fx", "Abb"];
            case 8:
                return ["G#", "Ab"];
            case 9:
                return ["A", "Gx", "Bbb"];
            case 10:
                return ["A#", "Bb", "Cbb"];
            case 11:
                return ["B", "Cb", "Ax"];
        }
    }

    static classFromPitchName(name) {
        for (let i = 0; i < PitchClass.pitches.length; i++) {
            if (PitchClass.pitches[i].names.includes(name))
                return PitchClass.pitches[i];
        }
    }

    static class(number) {
        return PitchClass.pitches[mod(number, 12)];
    }

    toStringLetters() {
        return this.names[0];
    }

    toString() {
        return this.pitchClass;
    }

    getPitchClass() {
        return this.pitchClass;
    }

    interval(pitch2) {
        return pitch2.pitchClass - this.pitchClass;
    }

    intervalMod12(pitch2) {
        return mod(pitch2.pitchClass - this.pitchClass, 12);
    }
}



class PitchCollection {
    constructor(collection) {
        this.collection = Array.from(collection);
    }

    toStringSpaces() {
        return this.collection.join(" ");
    }

    toString() {
        return this.collection.join("");
    }

    toStringCommas() {
        return this.collection.join(", ");
    }

    toStringCommasSansSpaces() {
        return this.collection.join(",");
    }

    get(i) {
        return this.collection[i];
    }

    transpose(interval) {
        let newCollection = [];
        for (let i = 0; i < this.collection.length; i++) {
            let here = this.collection[i].pitchClass;
            newCollection[i] = PitchClass.class(this.collection[i].pitchClass + interval);
        }
        return new PitchCollection(newCollection);
    }

    invertProperly(n) {
        let inverted = this.invertAroundZero();
        return new PitchCollection(inverted.transpose(n).collection.sort((a, b) => b.interval(a))).normalForm();
    }

    invertAroundZero() {
        let newCollection = [];
        for (let i = 0; i < this.collection.length; i++) {
            newCollection[i] = PitchClass.class(this.collection[i].pitchClass * -1);
        }
        return new PitchCollection(newCollection);
    }

    addPitch(pitch) {
        this.collection.push(pitch);
    }

    removePitch(pitch) {
        this.collection = this.pitches.filter(p => p != pitch);
    }

    size() {
        return this.collection.length;
    }

    range() {
        return this.collection[0].intervalMod12(this.collection[this.collection.length - 1]);
    }

    //inversion in the common practice sense... 0 is root position, 1 is first inversion, etc.
    invert(inversion) {
        if (inversion >= this.collection.length) {
            throw "Too much invertin'!";
        }
        let top = this.collection.slice(0, inversion);
        let bottom = this.collection.slice(inversion, this.collection.length);
        return bottom.concat(top);
    }

    normalForm() {
        let inversions = [];
        for (let i = 0; i < this.collection.length; i++) {
            inversions.push(new PitchCollection(this.invert(i)));
        }
        //select smallest range from inversions
        let smallestRange = [inversions[0]];
        for (let i = 1; i < inversions.length; i++) {
            if (inversions[i].range() < smallestRange[0].range()) {
                smallestRange = [];
                smallestRange.push(inversions[i]);
            }
            else if (inversions[i].range() == smallestRange[0].range()) {
                smallestRange.push(inversions[i]);
            }
        }

        //now choose the tightest packing to bottom 
        let tightest = smallestRange[0];
        for (let i = 1; i < smallestRange.length; i++) {
            let packing = tightest.get(0).intervalMod12(tightest.get(1));
            let newPacking = smallestRange[i].get(0).intervalMod12(smallestRange[i].get(1));
            if (packing > newPacking) {
                tightest = smallestRange[i];
            }
        }

        //should automatically put the lowest root first
        return tightest;
    }

    primeForm() {
        let normalForm = this.normalForm();
        let root = normalForm.get(0).pitchClass;
        let transposed = normalForm.transpose(-root);
        let inverted = transposed.invertProperly(0);
        let rootPrime = inverted.get(0).pitchClass;
        inverted = inverted.transpose(-rootPrime);
        for (let i = transposed.size() - 1; i >= 0; i--) {
            let gapT = PitchClass.zero.interval(transposed.get(i));
            let gapI = PitchClass.zero.interval(inverted.get(i));
            if (gapT < gapI) {
                return transposed;
            }
            else if (gapI < gapT) {
                return inverted;
            }
            //else continue
        }
        return transposed; //identical under inversion
    }

    intervalClassVector() {
        let normal = this.normalForm();
        let intervalClassVector = [0, 0, 0, 0, 0, 0,];
        for (let i = 0; i < normal.collection.length; i++) {
            for (let j = 0; j < normal.collection.length; j++) {
                if (i != j) {
                    let interval = intervalClass(normal.get(i).interval(normal.get(j)));
                    intervalClassVector[interval - 1] += 1;
                }
            }
        }
        return intervalClassVector;
    }
}

function constructPitchClassSet(userInput) {
    console.log(userInput)
    let parsed = userInput.split(" ").filter(key => key.length > 0);
    parsed = parsed.map(key => parseInt(key));
    let pitchClasses = [];
    for (let i = 0; i < parsed.length; i++) {
        pitchClasses.push(PitchClass.class(parsed[i]));
    }
    return new PitchCollection(pitchClasses);
}

function initializeTables() {
    // Get the table body elements
    const tableBody1 = document.getElementById("transpositions");
    const tableBody2 = document.getElementById("inversions");
    tableBody1.innerHTML = "";
    tableBody2.innerHTML = "";
    // Loop through numbers 1 to 12 and generate table rows for each table
    for (let i = 0; i < 12; i++) {
        // Create a new table row element
        const row1 = document.createElement("tr");
        const row2 = document.createElement("tr");

        // Create a table data cell for the number column and set its content
        const numberCell1 = document.createElement("td");
        numberCell1.textContent = i;
        const numberCell2 = document.createElement("td");
        numberCell2.textContent = i;

        // Create a table data cell for the empty column
        const emptyCell1 = document.createElement("td");
        const emptyCell2 = document.createElement("td");

        // Append the cells to the rows
        row1.appendChild(numberCell1);
        row1.appendChild(emptyCell1);
        row2.appendChild(numberCell2);
        row2.appendChild(emptyCell2);

        // Append the rows to the table bodies
        tableBody1.appendChild(row1);
        tableBody2.appendChild(row2);
    }
}

function handleInput() {
    let set = constructPitchClassSet(input.value);
    let elements = ["norm", "prime", "icv", "forte", "zmate", "zmateprime"];
    for (elem of elements) {
        document.getElementById(elem).value = "";
    }
    initializeTables();
    //initializeMatrix(set.size());
    let normalForm = set.normalForm();
    document.getElementById("norm").value = "[" + normalForm.toStringCommas() + "]";
    let primeForm = set.primeForm();
    document.getElementById("prime").value = "(" + primeForm.toString() + ")";
    let intervalClassVector = set.intervalClassVector();
    document.getElementById("icv").value = "[" + intervalClassVector.toString() + "]";
    let forte = forteName(primeForm);
    document.getElementById("forte").value = forte;
    if (forte.includes("z")) {
        let zmate = findZMate(forte, primeForm);
        console.log(zmate);
        let zp = "(" + zmate[1].split(",").join("") + ")";
        document.getElementById("zmate").value = zmate[0];
        document.getElementById("zmateprime").value = zp;
    }
    else{
        document.getElementById("zmate").value = "N/A";
        document.getElementById("zmateprime").value = "N/A";
    }
    let transpositions = document.getElementById("transpositions");
    let inversions = document.getElementById("inversions");
    for (let i = 0; i < 12; i++) {
        const row1 = transpositions.getElementsByTagName("tr")[i];
        const row2 = inversions.getElementsByTagName("tr")[i];
        row1.getElementsByTagName("td")[1].textContent = "[" + normalForm.transpose(i).toStringCommas() + "]"; 
        row2.getElementsByTagName("td")[1].textContent = "[" + normalForm.invertProperly(i).toStringCommas() + "]";
    }
    //updateMatrix(set);
}
/* 
function initializeMatrix(n) {
    var matrix = document.getElementById("matrix");
    matrix.innerHTML = "";
    for (var i = 0; i < n; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < n; j++) {
        var cell = document.createElement("td");
        cell.classList.add("matrix-cell");
        row.appendChild(cell);
      }
      matrix.appendChild(row);
    }
  }
  
  function updateMatrix(set) {
    var matrix = document.getElementById("matrix");
    var cells = matrix.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = 0;
    }
  }
  */
