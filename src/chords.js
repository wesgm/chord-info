class Pitch{
    constructor(name, octave){
        if(validateName(name))
            this.name = name;
        this.octave = octave;
        this.pitchClass = PitchClass.classFromPitch(name);
    }

    toString(){
        return this.name + this.octave;
    }

    toStringIntNotation(){
        return this.pitchClass.pitchClass;
    }

    static standardInterval(pitch1, pitch2){
        let pitch1Class = PitchClass.classFromPitch(pitch1);
        let pitch2Class = PitchClass.classFromPitch(pitch2);
        return pitch2Class.pitchClass - pitch1Class.pitchClass;
    }

    static #validateName(name){
        //check length
        if(name.length <=3 && name.length > 0){
            //check name
            if(name[0] == "A" || name[0] == "B" || name[0] == "C" || name[0] == "D" || name[0] == "E" || name[0] == "F" || name[0] == "G"){
                //check accidental
                if(name.length == 1 || (name[1] == "#" || name[1] == "b" || name[1] == "x") || (name.length == 3 && name[2] == "b")){
                    return true;
                }
            }
        }
        else
            return false;
    }
}

class PitchClass{
    //pich classes
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
    static pitches = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven];

    constructor(number){
        this.pitchClass = number % 12;
        this.names = mapClassToName(this.number);
    }

    static classFromPitchName(name){
        for(let i = 0; i < pitches.length; i++){
            if(pitches[i].names.includes(name))
                return pitches[i];
        }
    }

    toString(){
        return this.names[0];
    }

    toStringIntNotation(){
        return this.pitchClass;
    }

    static #mapClassToName(number){
        switch(number){
            case 0:
                return ["C", "B#", "Dbb"];
            case 1:
                return ["C#", "Db", "Bx"];
            case 2:
                return ["D", "Cx", "Ebb"];
            case 3:
                return ["D#", "Eb", "Fbb"];
            case 4:
                return["E", "Fb", "Dx"];
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
}

class PitchCollection{
    constructor(pitches){
        this.pitches = pitches;
    }

    toString(){
        return this.pitches.join(", ");
    }

    toStringIntNotation(){
        let string = "";
        for(let i = 0; i < this.pitches.length; i++){
            string += this.pitches[i].toStringIntNotation();
            if(i != this.pitches.length - 1)
                string += ", ";
        }
        return string;
    }
    
    addPitch(pitch){
        this.pitches.push(pitch);
    }

    removePitch(pitch){
        this.pitches = this.pitches.filter(p => p != pitch);
    }
}




