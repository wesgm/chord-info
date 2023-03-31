class PitchClass{
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

    constructor(number){
        this.pitchClass = number % 12;
        this.names = PitchClass.mapClassToName(number);
    }

    static mapClassToName(number){
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

    static classFromPitchName(name){
        for(let i = 0; i < PitchClass.pitches.length; i++){
            if(PitchClass.pitches[i].names.includes(name))
                return PitchClass.pitches[i];
        }
    }

    toString(){
        return this.names[0];
    }

    getPitchClass(){
        return this.pitchClass;
    }

    static standardInterval(pitch1, pitch2){
        return pitch1.getPitchClass() - pitch2.getPitchClass();
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



