export class Likes{
    isSelect:boolean;
    likesCount:number;
    constructor(
    likesCount:number,
    isSelect:boolean
    ){
        this.isSelect = isSelect
        this.likesCount = likesCount
    }

    onClick():void{
        this.likesCount += (this.isSelect) ? -1:1;
        this.isSelect = !this.isSelect;
    }

    getLikesCount():number{
        return this.likesCount;
    }

    getIsSelect():boolean{
        return this.isSelect;
    }
}