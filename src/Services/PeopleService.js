import avatar from "../Images/avatar.png"
import NoPoster from "../Images/no_poster.png"


const PeopleService = {
    getPeople() {
        return people;
    },
    getPersonById(id) {
        return people.find((person) => person.id === id);
    },
    getPersonByOccupation(occupation) {
        return people.find((person) => person.occupation === occupation);
    }
}

export default PeopleService;

const people = [
    {
        id: 1,
        name: "Jean Angrand",
        personImage: avatar,
        bookTitle: "Morne Rouge",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 2,
        name: "Immacula Oligario",
        personImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGCZZyU3p6HcSiQmryfGXphZnEs2u_MscLw&s",
        bookTitle: "Too Powerful to be powerless",
        occupation: "author",
        bookPicture: "https://m.media-amazon.com/images/I/71a9he6moFL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 3,
        name: "Bell Angelot",
        personImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEE_6fhpgm7eNoVPFMySKM_XUxOrYd71KpA&s",
        bookTitle: "la Constitution de 1805...deux cents ans après",
        subTitle: "Les Chants de résistance",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 4,
        name: "Marc-Eddy Bellabe",
        personImage: avatar,
        bookTitle: "PAUVRETÈ ET ÉDUCATION RURALE",
        subTitle: "CHANTAL, MA BELLE",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 5,
        name: "Leon Denius Pamphile",
        personImage: avatar,
        bookTitle: "La Croix Et Le Glaive",
        subTitle: "L'eglise Catholique Et L'Occupation Americaine D'Haiti",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 6,
        name: "Georges Corvington",
        personImage: avatar,
        bookTitle: "Port-au-Prince Au Cours Des Ans",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 7,
        name: "Roger Gaillard",
        personImage: avatar,
        bookTitle: "Les Blancs débarquent",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 8,
        name: "Ernst Pedro Casseus",
        personImage: avatar,
        bookTitle: "Dictionnaire Géographique et Toponymique",
        subTitle: "DE LA RÉPUBLIQUE D'HAÏTI",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 9,
        name: "Jean Price-Mars",
        personImage: avatar,
        bookTitle: "La vocation de li'elite",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 10,
        name: "René Durocher",
        personImage: avatar,
        bookTitle: "Les Oiseaux d'Haiti",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 11,
        name: "Rose-Marie Toussaint, M.D.",
        Collaborator: "Anthony E. Santaniello",
        personImage: avatar,
        bookTitle: "NEVER QUESTION THE MIRACLE",
        subTitle: "A surgeon's Story",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 12,
        name: "François Séverin",
        personImage: avatar,
        bookTitle: "PLANT AK PYEBWA TE D AYITI",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 13,
        name: "Edwidge Danticat",
        personImage: avatar,
        bookTitle: "the farming of bones",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 14,
        name: "Fabrice A. Vil",
        personImage: avatar,
        bookTitle: "Bon Gason!",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 15,
        name: "Louis Berrouët",
        Collaborator: "Hervé Lebreton",
        personImage: avatar,
        bookTitle: "L'Intrusion de la Poésie",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 16,
        name: "Georges Anglade",
        personImage: avatar,
        bookTitle: "Cartes Sur Table",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 17,
        name: "Monsieur Henri (Henri Cayard)",
        personImage: avatar,
        bookTitle: "Haïti",
        subTitle: "Quand La Lentille Se Fait Palette",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 18,
        name: "Pierre Joseph Jean-Baptiste",
        personImage: avatar,
        bookTitle: "La Route D'un Empire",
        occupation: "author",
        bookPicture: NoPoster
    },
    {
        id: 19,
        name: "Toussaint Louverture",
        personImage: avatar,
        Category: "Revolutionary",
        description: `Born around 1743 on the Bréda plantation near Cap-Français in Saint-Domingue (now Haiti), Toussaint Louverture was the son of an educated enslaved man and rose from slavery to become the most prominent leader of the Haitian Revolution. He was legally freed in 1776 and became a steward on the plantation, gaining access to books and Enlightenment philosophy. Influenced by thinkers like Abbé Raynal and Epictetus, Louverture developed a strong sense of justice and leadership. He was a devout Catholic and rejected Vodou, maintaining a disciplined and modest lifestyle. \n
                    When the slave revolt erupted in August 1791, Louverture initially hesitated but soon joined the insurgents, helping his former master escape before organizing his own forces. He trained his troops in guerrilla warfare and quickly emerged as a skilled commander. In 1793, he allied with Spain, then switched to the French Republic after it abolished slavery. His military success and political savvy earned him the title of Governor-General of Saint-Domingue by 1801, and he promulgated a constitution that declared autonomy while maintaining nominal ties to France.
                    "Louverture's" consitution named him Governor for Life and abolished slavery permanently, which alarmed Napoleon Bonaparte. In 1802, French forces under General Leclerc arrived to reassert control. Louverture was tricked into a meeting, arrested, and deported to France. He was imprisoned at Fort de Joux, where he died of pneumonia and malnutrition in April 1803. His death came before "Haiti's" final victory, but his leadership laid the foundation for independence.
                    "Louverture's" legacy extends beyond Haiti. He inspired abolitionists and revolutionaries across the Americas and Europe. His ability to navigate complex alliances—between Spain, France, and Britain—while maintaining a vision for Black sovereignty was unprecedented. He also restored plantation production using paid labor, negotiated trade deals with Britain and the U.S., and maintained a disciplined army. His governance balanced economic pragmatism with revolutionary ideals.
                    Today, Louverture is celebrated as a founding father of Haiti and a global symbol of resistance against slavery. His name is etched into Haitian history, and his image has appeared in art, literature, and political discourse worldwide. Though he died before Haiti’s formal independence, his strategic brilliance and moral leadership remain central to the "nation's" identity. His life is studied in global history as a model of revolutionary leadership and anti-colonial resistance.`
    },
    {
        id: 20,
        name: "Jean-Jacques Dessalines",
        personImage: avatar,
        Category: "Revolutionary",
        description: `Jean-Jacques Dessalines was born enslaved around 1758 in West Africa and brought to Saint-Domingue, where he worked as a field hand and later a commandeur. He was purchased by a free man of color named Dessalines, whose surname he adopted. Known for his rebellious nature, Dessalines often escaped and endured brutal punishments. He joined the 1791 slave uprising and became a lieutenant under Georges Biassou before aligning with Toussaint Louverture.
Dessalines distinguished himself in battles against Spanish, British, and French forces. He played a key role in defeating André Rigaud’s mulatto faction in the War of the South and was promoted to division general. After Louverture’s capture in 1802, Dessalines assumed leadership of the revolutionary army. He led the final campaign against the French, culminating in the decisive Battle of Vertières on November 18, 1803. On January 1, 1804, he declared Haiti’s independence.
As Governor-General and later Emperor Jacques I, Dessalines implemented radical policies to secure Haiti’s sovereignty. He ordered the 1804 massacre of thousands of remaining French residents, fearing they might aid a future invasion or reintroduce slavery. He redistributed land to former slaves and banned white land ownership. Dessalines enforced plantation labor to sustain the economy, a policy that caused tension among the newly freed population.
Despite his achievements, Dessalines faced growing opposition from mulatto elites and former allies. His autocratic rule and harsh policies led to a conspiracy involving Henri Christophe and Alexandre Pétion. On October 17, 1806, Dessalines was ambushed and assassinated near Port-au-Prince. His death fractured Haiti into northern and southern states, ruled separately by Christophe and Pétion. The political instability that followed delayed national unity for decades.
Dessalines is revered as the liberator of Haiti and a symbol of uncompromising resistance. The Haitian national anthem, “La Dessalinienne,” honors his legacy. Though controversial for his violent methods, his role in securing Haiti’s independence and abolishing slavery permanently cements his place as one of the most important figures in Haitian and world history. His name is invoked in Haitian politics, culture, and education as a symbol of Black liberation.`
    },
    {
        id: 21,
        name: "Henri Christophe",
        personImage: avatar,
        Category: "Revolutionary",
        description: `Henri Christophe was born in 1767, likely in Grenada or Saint Kitts, and brought to Saint-Domingue as a slave. He worked various jobs including mason, sailor, and hotel waiter before gaining his freedom. Christophe may have served in the French forces during the American Revolutionary War at the Siege of Savannah in 1779. He married Marie-Louise Coidavid in 1793 and joined the Haitian Revolution shortly after. His early life was marked by discipline and ambition, traits that defined his leadership style.
Christophe rose through the ranks under Toussaint Louverture, becoming a brigadier-general by 1801. He defended Cap-Français against French forces in 1802 and later joined Dessalines in the final campaign for independence. After Dessalines’ assassination in 1806, Christophe established control over northern Haiti and was elected president in 1807. In 1811, he declared himself King Henry I and founded the Kingdom of Haiti, modeling it after European monarchies.
As monarch, Christophe built the Citadelle Laferrière and Sans-Souci Palace, symbols of Haitian pride and defense. He created a hereditary nobility and implemented forced labor policies to sustain the economy. His reign emphasized education, infrastructure, and centralized power. He maintained diplomatic relations with Britain to deter French aggression and sought to modernize Haiti’s institutions. Christophe’s monarchy was both a political experiment and a statement of Black sovereignty.
In 1820, Christophe suffered a stroke and faced revolts across his kingdom. Fearing a coup, he committed suicide at Sans-Souci Palace. His son and heir, Jacques-Victor Henry, was assassinated shortly after. The northern kingdom collapsed, and Haiti was reunified under Jean-Pierre Boyer. Christophe’s death marked the end of Haiti’s brief monarchical experiment and the beginning of a new republican era.
Christophe’s legacy is complex—he is remembered as a visionary builder and nationalist, but also as a harsh ruler. His architectural achievements remain UNESCO World Heritage sites, and his reign is studied for its attempt to create a Black monarchy rooted in postcolonial sovereignty. His emphasis on discipline and self-reliance continues to influence Haitian cultural narratives. Christophe remains a towering figure in Haiti’s revolutionary and post-independence history.
`
    },
    {
        id: 22,
        name: " Alexandre Pétion",
        personImage: avatar,
        Category: "Revolutionary"
    },
    {
        id: 23,
        name: "Dutty Boukman",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 24,
        name: "Marie-Jeanne Lamartinière",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 25,
        name: "Sanité Bélair",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 26,
        name: "Charles Bélair",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 27,
        name: "Dutty Boukman",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 28,
        name: "Capois-La-Mort",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 29,
        name: "Vincent Ogé",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 30,
        name: "Jean-Baptiste Belley",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 31,
        name: "André Rigaud",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 32,
        name: "Jean-Louis Vastey",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 33,
        name: "Dutty Boukman",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 34,
        name: "Jean-Baptiste Chavannes",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 35,
        name: "Dutty Boukman",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 36,
        name: "Nicolas Geffrard",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 37,
        name: "Henriette Saint-Marc",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 38,
        name: "Romaine-la-Prophétesse",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 39,
        name: "Lamour Dérangés",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 40,
        name: "Jean-François Papillon",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 41,
        name: "Georges Biassou",
        personImage: avatar,
        Category: "Revolutionary"
    },
     {
        id: 42,
        name: "Wyclef Jean",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 43,
        name: "J. Perry",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 44,
        name: "Bélo",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 45,
        name: "Coupé Cloué",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 46,
        name: "Emeline Michel",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 47,
        name: "Boukman Eksperyans",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 48,
        name: "Emeline Michel",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 49,
        name: "T-Vice",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 50,
        name: "Emeline Michel",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 51,
        name: "Paul Beaubrun",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 52,
        name: "Emeline Michel",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 53,
        name: "Riva Nyri Précil",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 54,
        name: "Emeline Michel",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 55,
        name: "Michel Martelly (Sweet Micky)",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 56,
        name: "Manno Charlemagne",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 57,
        name: "Ti Corn",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 58,
        name: "RAM",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 59,
        name: "Ti Djo Zenny",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 60,
        name: "Manno Beats",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 61,
        name: "Eddy François",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 62,
        name: "Beethova Obas",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 63,
        name: "Ti Kabzy",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 64,
        name: "Zenglen",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 65,
        name: " Zenglen",
        personImage: avatar,
        Category: "Musicians"
    },
     {
        id: 65,
        name: "Silvio Cator",
        personImage: avatar,
        Category: "Sports"
    }
]
