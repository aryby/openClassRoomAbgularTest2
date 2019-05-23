
export class Post{
    id : number;
    titre : string;
    contenu : string;
    loveIts: number=0;
    created_at: number;

    constructor(titre : string,
                contenu : string,
                id?:number
                ){
                    this.contenu = contenu;
                    this.titre=titre;
                    this.id = id;
                    this.created_at = Date.now();
                }
    

}