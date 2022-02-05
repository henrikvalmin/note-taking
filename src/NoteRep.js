export default class NoteRep {
    static STAT_ID = 1;
    constructor(header, content) {
        this.id = NoteRep.STAT_ID++;
        this.header = header;
        this.content = content;
    }
}
