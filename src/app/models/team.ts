export class Team {
    name: string;
    designation: string;
    about: string;
    imgUrl: string

    constructor(name = '',designation = '', about = '',imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04OfGdt0REm4xfuPrPeNduMs-jqhvC-U5CQ&usqp=CAU'){
        this.name = name
        this.designation = designation
        this.about = about
        this.imgUrl = imgUrl

    }

}