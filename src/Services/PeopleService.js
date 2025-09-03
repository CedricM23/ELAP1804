import avatar from "../Images/avatar.png"
import NoPoster from "../Images/no_poster.png"


const PeopleService = {
    getPeople() {
        return people;
    },
    getPersonById(id){
         return people.find((person) => person.id === id);
    },
}

export default PeopleService;

const people = [
    {
        id: 1,
        name: "Jean Angrand",
        personImage: avatar,
        bookTitle: "Morne Rouge",
        bookPicture: NoPoster
    },
    {
        id: 2,
        name: "Immacula Oligario",
        personImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGCZZyU3p6HcSiQmryfGXphZnEs2u_MscLw&s",
        bookTitle: "Too Powerful to be powerless",
        bookPicture: "https://m.media-amazon.com/images/I/71a9he6moFL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 3,
        name: "Bell Angelot",
        personImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEE_6fhpgm7eNoVPFMySKM_XUxOrYd71KpA&s",
        bookTitle: "la Constitution de 1805...deux cents ans après",
        subTitle: "Les Chants de résistance",
        bookPicture: NoPoster
    },
    {
        id: 4,
        name: "Marc-Eddy Bellabe",
        personImage: avatar,
        bookTitle: "PAUVRETÈ ET ÉDUCATION RURALE",
        subTitle: "CHANTAL, MA BELLE",
        bookPicture: NoPoster
    },
    {
        id: 5,
        name: "Leon Denius Pamphile",
        personImage: avatar,
        bookTitle: "La Croix Et Le Glaive",
        subTitle: "L'eglise Catholique Et L'Occupation Americaine D'Haiti",
        bookPicture: NoPoster
    },
    {
        id: 6,
        name: "Georges Corvington",
        personImage: avatar,
        bookTitle: "Port-au-Prince Au Cours Des Ans",
        bookPicture: NoPoster
    },
    {
        id: 7,
        name: "Roger Gaillard",
        personImage: avatar,
        bookTitle: "Les Blancs débarquent",
        bookPicture: NoPoster
    },
    {
        id: 8,
        name: "Ernst Pedro Casseus",
        personImage: avatar,
        bookTitle: "Dictionnaire Géographique et Toponymique",
        subTitle: "DE LA RÉPUBLIQUE D'HAÏTI",
        bookPicture: NoPoster
    },
    {
        id: 9,
        name: "Jean Price-Mars",
        personImage: avatar,
        bookTitle: "La vocation de li'elite",
        bookPicture: NoPoster
    },
    {
        id: 10,
        name: "René Durocher",
        personImage: avatar,
        bookTitle: "Les Oiseaux d'Haiti",
        bookPicture: NoPoster
    },
    {
        id: 11,
        name: "Rose-Marie Toussaint, M.D.",
        Collaborator: "Anthony E. Santaniello",
        personImage: avatar,
        bookTitle: "NEVER QUESTION THE MIRACLE",
        subTitle: "A surgeon's Story",
        bookPicture: NoPoster
    },
    {
        id: 12,
        name: "François Séverin",
        personImage: avatar,
        bookTitle: "PLANT AK PYEBWA TE D AYITI",
        bookPicture: NoPoster
    },
    {
        id: 13,
        name: "Edwidge Danticat",
        personImage: avatar,
        bookTitle: "the farming of bones",
        bookPicture: NoPoster
    },
    {
        id: 14,
        name: "Fabrice A. Vil",
        personImage: avatar,
        bookTitle: "Bon Gason!",
        bookPicture: NoPoster
    },
    {
        id: 15,
        name: "Louis Berrouët",
        Collaborator: "Hervé Lebreton",
        personImage: avatar,
        bookTitle: "L'Intrusion de la Poésie",
        bookPicture: NoPoster
    },
    {
        id: 16,
        name: "Georges Anglade",
        personImage: avatar,
        bookTitle: "Cartes Sur Table",
        bookPicture: NoPoster
    },
    {
        id: 17,
        name: "Monsieur Henri (Henri Cayard)",
        personImage: avatar,
        bookTitle: "Haïti",
        subTitle: "Quand La Lentille Se Fait Palette"
    },
    {
        id: 18
    },
    {
        id: 19
    },
    {
        id: 20
    },
    {
        id: 21
    },
    {
        id: 22
    },
    {
        id: 23
    },
    {
        id: 24
    },
    {
        id: 25
    }

]
