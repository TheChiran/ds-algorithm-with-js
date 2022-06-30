import fs from 'fs';

export class CsvFileReader{
    private data: string[][] = [];

    constructor(public filename: string){}

    read():void{
        this.data = fs.readFileSync(`./public/csv/${this.filename}`, {
            encoding: 'utf-8'
        }).split('\n')
        .map((row: string): string[] => {
            return row.split(',');
        });
    }
    
    getData(): string[][]{
        return this.data;
    }
}