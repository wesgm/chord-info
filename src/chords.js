class Pitch{
    constructor(name, octave){
        if(validateName(name))
            this.name = name;
        this.octave = octave;
    }
    toString(){
        return this.name + this.octave;
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
    static classFromPitch(pitch){
        for(let i = 0; i < pitches.length; i++){
            if(pitches[i].names.includes(pitch.name))
                return pitches[i];
        }
    }
    static #mapClassToName(number){
        if(pitchClass == 0)
            return ["C", "B#", "Dbb"];
        else if(pitchClass == 1)
            return ["C#", "Db", "Bx"];
        else if(pitchClass == 2)
            return ["D", "Cx", "Ebb"];
        else if(pitchClass == 3)
            return ["D#", "Eb", "Fbb"];
        else if(pitchClass == 4)
            return["E", "Fb", "Dx"];
        else if(pitchClass == 5)
            return ["F", "E#", "Gbb"];
        else if(pitchClass == 6)
            return ["F#", "Gb", "Ex"];
        else if(pitchClass == 7)
            return ["G", "Fx", "Abb"];
        else if(pitchClass == 8)
            return ["G#", "Ab"];
        else if(pitchClass == 9)
            return ["A", "Gx", "Bbb"];
        else if(pitchClass == 10)
            return ["A#", "Bb", "Cbb"];
        else if(pitchClass == 11)
            return ["B", "Cb", "Ax"];
    }
}

class PitchCollection{
    constructor(pitches){
        this.pitches = pitches;
    }
    toString(){
        return this.pitches.join(", ");
    }
}