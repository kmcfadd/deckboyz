const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
process.env.MONGODB_URI || 
'mongodb://user1:password1@dbh23.mlab.com:27237/heroku_6t5lff23',
{ 
    useNewUrlParser: true,
    useCreateIndex: true,
}
);

const cardSeed = [
{
    "types":["Instant"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5aa","set":"Ravnica Allegiance","number":"151",
    "name":"Absorb","type":"Instant","manaCost":"{W}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Counter target spell. You gain 3 life.","artist":"Izzy"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc5ab","set":"Ravnica Allegiance","number":"91",
    "name":"Act of Treason","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn. (It can attack and {T} this turn.)","artist":"Scott Murphy"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc5ac","set":"Ravnica Allegiance","number":"152",
    "name":"Aeromunculus","type":"Creature — Homunculus Mutant","manaCost":"{1}{G}{U}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Flying {2}{G}{U}: Adapt 1. (If this creature has no +1/+1 counters on it, put a +1/+1 counter on it.)","artist":"Simon Dominic"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc5ad","set":"Ravnica Allegiance","number":"92",
    "name":"Amplifire","type":"Creature — Elemental","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":"1","toughness":"1",
    "text":"At the beginning of your upkeep, reveal cards from the top of your library until you reveal a creature card. Until your next turn, Amplifire's base power becomes twice that card's power and its base toughness becomes twice that card's toughness. Put the revealed cards on the bottom of your library in a random order.","artist":"Dan Scott"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5ae","set":"Ravnica Allegiance","number":"1",
    "name":"Angel of Grace","type":"Creature — Angel","manaCost":"{3}{W}{W}","convertedManaCost":5,"power":"5","toughness":"4",
    "text":"Flash Flying When Angel of Grace enters the battlefield, until end of turn, damage that would reduce your life total to less than 1 reduces it to 1 instead. {4}{W}{W}, Exile Angel of Grace from your graveyard: Your life total becomes 10.","artist":"Ryan Yee"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5af","set":"Ravnica Allegiance","number":"2",
    "name":"Angelic Exaltation","type":"Enchantment","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever a creature you control attacks alone, it gets +X/+X until end of turn, where X is the number of creatures you control.","artist":"John Severin Brassell"
},
{
    "types":["Instant"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc5b0","set":"Ravnica Allegiance","number":"153",
    "name":"Applied Biomancy","type":"Instant","manaCost":"{G}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose one or both — • Target creature gets +1/+1 until end of turn. • Return target creature to its owner's hand.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5b1","set":"Ravnica Allegiance","number":"3",
    "name":"Archway Angel","type":"Creature — Angel","manaCost":"{5}{W}","convertedManaCost":6,"power":"3","toughness":"4",
    "text":"Flying When Archway Angel enters the battlefield, you gain 2 life for each Gate you control.","artist":"Milivoj Ćeran"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5b2","set":"Ravnica Allegiance","number":"31",
    "name":"Arrester's Admonition","type":"Instant","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Return target creature to its owner's hand. Addendum — If you cast this spell during your main phase, draw a card.","artist":"Lucas Graciano"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5b3","set":"Ravnica Allegiance","number":"4",
    "name":"Arrester's Zeal","type":"Instant","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 until end of turn. Addendum — If you cast this spell during your main phase, that creature gains flying until end of turn.","artist":"Izzy"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5b4","set":"Ravnica Allegiance","number":"61",
    "name":"Awaken the Erstwhile","type":"Sorcery","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Each player discards all the cards in their hand, then creates that many 2/2 black Zombie creature tokens.","artist":"Jason A. Engle"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc5b5","set":"Ravnica Allegiance","number":"121",
    "name":"Axebane Beast","type":"Creature — Beast","manaCost":"{3}{G}","convertedManaCost":4,"power":"3","toughness":"4",
    "text":null,"artist":"Sam Rowan"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc5b6","set":"Ravnica Allegiance","number":"243",
    "name":"Azorius Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Azorius Guildgate enters the battlefield tapped. {T}: Add {W} or {U}.","artist":"Titus Lunter"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc5b7","set":"Ravnica Allegiance","number":"244",
    "name":"Azorius Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Azorius Guildgate enters the battlefield tapped. {T}: Add {W} or {U}.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5b8","set":"Ravnica Allegiance","number":"154",
    "name":"Azorius Knight-Arbiter","type":"Creature — Human Knight","manaCost":"{3}{W}{U}","convertedManaCost":5,"power":"2","toughness":"5",
    "text":"Vigilance Azorius Knight-Arbiter can't be blocked.","artist":"Even Amundsen"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc5b9","set":"Ravnica Allegiance","number":"231",
    "name":"Azorius Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {W} or {U}. {W/U}{W/U}{W/U}{W/U}, {T}, Sacrifice Azorius Locket: Draw two cards.","artist":"Craig J Spearing"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5ba","set":"Ravnica Allegiance","number":"155",
    "name":"Azorius Skyguard","type":"Creature — Human Knight","manaCost":"{4}{W}{U}","convertedManaCost":6,"power":"3","toughness":"3",
    "text":"Flying, first strike Creatures your opponents control get -1/-0.","artist":"Gabor Szikszai"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5bb","set":"Ravnica Allegiance","number":"62",
    "name":"Bankrupt in Blood","type":"Sorcery","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, sacrifice two creatures. Draw three cards.","artist":"Seb McKinnon"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc5bc","set":"Ravnica Allegiance","number":"156",
    "name":"Basilica Bell-Haunt","type":"Creature — Spirit","manaCost":"{W}{W}{B}{B}","convertedManaCost":4,"power":"3","toughness":"4",
    "text":"When Basilica Bell-Haunt enters the battlefield, each opponent discards a card and you gain 3 life.","artist":"Yeong-Hao Han"
},
{
    "types":["Instant"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc5bd","set":"Ravnica Allegiance","number":"221",
    "name":"Bedazzle","type":"Instant","manaCost":"{4}{B}{R}","convertedManaCost":8,"power":null,"toughness":null,
    "text":"Destroy target nonbasic land. Bedazzle deals 2 damage to target opponent or planeswalker.","artist":"Randy Vargas"
},
{
    "types":["Instant"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc5be","set":"Ravnica Allegiance","number":"221",
    "name":"Bedeck","type":"Instant","manaCost":"{B/R}{B/R}","convertedManaCost":8,"power":null,"toughness":null,
    "text":"Target creature gets +3/-3 until end of turn.","artist":"Randy Vargas"
},
{
    "types":["Instant"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc5bf","set":"Ravnica Allegiance","number":"157",
    "name":"Bedevil","type":"Instant","manaCost":"{B}{B}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target artifact, creature, or planeswalker.","artist":"Seb McKinnon"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5c0","set":"Ravnica Allegiance","number":"32",
    "name":"Benthic Biomancer","type":"Creature — Merfolk Wizard Mutant","manaCost":"{U}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"{1}{U}: Adapt 1. (If this creature has no +1/+1 counters on it, put a +1/+1 counter on it.) Whenever one or more +1/+1 counters are put on Benthic Biomancer, draw a card, then discard a card.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc5c1","set":"Ravnica Allegiance","number":"122",
    "name":"Biogenic Ooze","type":"Creature — Ooze","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":"2","toughness":"2",
    "text":"When Biogenic Ooze enters the battlefield, create a 2/2 green Ooze creature token. At the beginning of your end step, put a +1/+1 counter on each Ooze you control. {1}{G}{G}{G}: Create a 2/2 green Ooze creature token.","artist":"Lake Hurwitz"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc5c2","set":"Ravnica Allegiance","number":"123",
    "name":"Biogenic Upgrade","type":"Sorcery","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Distribute three +1/+1 counters among one, two, or three target creatures, then double the number of +1/+1 counters on each of those creatures.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc5c3","set":"Ravnica Allegiance","number":"158",
    "name":"Biomancer's Familiar","type":"Creature — Mutant","manaCost":"{G}{U}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Activated abilities of creatures you control cost {2} less to activate. This effect can't reduce the amount of mana an ability costs to activate to less than one mana. {T}: The next time target creature adapts this turn, it adapts as though it had no +1/+1 counters on it.","artist":"Izzy"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5c4","set":"Ravnica Allegiance","number":"63",
    "name":"Blade Juggler","type":"Creature — Human Rogue","manaCost":"{4}{B}","convertedManaCost":5,"power":"3","toughness":"2",
    "text":"Spectacle {2}{B} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) When Blade Juggler enters the battlefield, it deals 1 damage to you and you draw a card.","artist":"Dmitry Burmak"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5c5","set":"Ravnica Allegiance","number":"64",
    "name":"Bladebrand","type":"Instant","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gains deathtouch until end of turn. (Any amount of damage it deals to a creature is enough to destroy it.) Draw a card.","artist":"Winona Nelson"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc5c6","set":"Ravnica Allegiance","number":"245",
    "name":"Blood Crypt","type":"Land — Swamp Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B} or {R}.) As Blood Crypt enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Adam Paquette"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5c7","set":"Ravnica Allegiance","number":"65",
    "name":"Bloodmist Infiltrator","type":"Creature — Vampire","manaCost":"{2}{B}","convertedManaCost":3,"power":"3","toughness":"1",
    "text":"Whenever Bloodmist Infiltrator attacks, you may sacrifice another creature. If you do, Bloodmist Infiltrator can't be blocked this turn.","artist":"Mitchell Malloy"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc5c9","set":"Ravnica Allegiance","number":"246",
    "name":"Breeding Pool","type":"Land — Forest Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G} or {U}.) As Breeding Pool enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Jenn Ravenna"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc5c8","set":"Ravnica Allegiance","number":"159",
    "name":"Bolrac-Clan Crusher","type":"Creature — Ogre Warrior","manaCost":"{3}{R}{G}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"{T}, Remove a +1/+1 counter from a creature you control: Bolrac-Clan Crusher deals 2 damage to any target.","artist":"Craig J Spearing"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5ca","set":"Ravnica Allegiance","number":"5",
    "name":"Bring to Trial","type":"Sorcery","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Exile target creature with power 4 or greater.","artist":"Victor Adame Minguez"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc5cb","set":"Ravnica Allegiance","number":"93",
    "name":"Burn Bright","type":"Instant","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creatures you control get +2/+0 until end of turn.","artist":"Scott Murphy"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc5cc","set":"Ravnica Allegiance","number":"94",
    "name":"Burning-Tree Vandal","type":"Creature — Human Rogue","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"1",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) Whenever Burning-Tree Vandal attacks, you may discard a card. If you do, draw a card.","artist":"Aaron Miller"
},
{
    "types":["Enchantment"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc5cd","set":"Ravnica Allegiance","number":"160",
    "name":"Captive Audience","type":"Enchantment","manaCost":"{5}{B}{R}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Captive Audience enters the battlefield under the control of an opponent of your choice. At the beginning of your upkeep, choose one that hasn't been chosen — • Your life total becomes 4. • Discard your hand. • Each opponent creates five 2/2 black Zombie creature tokens.","artist":"Dmitry Burmak"
},
{
    "types":["Sorcery"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc5ce","set":"Ravnica Allegiance","number":"222",
    "name":"Carnage","type":"Sorcery","manaCost":"{2}{B}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Carnage deals 3 damage to target opponent. That player discards two cards.","artist":"Zoltan Boros"
},
{
    "types":["Instant"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc5cf","set":"Ravnica Allegiance","number":"222",
    "name":"Carnival","type":"Instant","manaCost":"{B/R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Carnival deals 1 damage to target creature or planeswalker and 1 damage to that permanent's controller.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5d0","set":"Ravnica Allegiance","number":"66",
    "name":"Carrion Imp","type":"Creature — Imp","manaCost":"{3}{B}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Flying When Carrion Imp enters the battlefield, you may exile target creature card from a graveyard. If you do, you gain 2 life.","artist":"Kev Walker"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5d1","set":"Ravnica Allegiance","number":"67",
    "name":"Catacomb Crocodile","type":"Creature — Crocodile","manaCost":"{4}{B}","convertedManaCost":5,"power":"3","toughness":"7",
    "text":null,"artist":"Nils Hamm"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc5d2","set":"Ravnica Allegiance","number":"95",
    "name":"Cavalcade of Calamity","type":"Enchantment","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever a creature you control with power 1 or less attacks, Cavalcade of Calamity deals 1 damage to the player or planeswalker that creature is attacking.","artist":"Jonas De Ro"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5d4","set":"Ravnica Allegiance","number":"33",
    "name":"Chillbringer","type":"Creature — Elemental","manaCost":"{4}{U}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Flying When Chillbringer enters the battlefield, tap target creature an opponent controls. It doesn't untap during its controller's next untap step.","artist":"Eytan Zana"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc5d3","set":"Ravnica Allegiance","number":"271",
    "name":"Charging War Boar","type":"Creature — Boar","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":"3","toughness":"1",
    "text":"Haste (This creature can attack and {T} as soon as it comes under your control.) As long as you control a Domri planeswalker, Charging War Boar gets +1/+1 and has trample. (It can deal excess damage to the player or planeswalker it's attacking.)","artist":"Izzy"
},
{
    "types":["Enchantment"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc5d5","set":"Ravnica Allegiance","number":"161",
    "name":"Cindervines","type":"Enchantment","manaCost":"{R}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever an opponent casts a noncreature spell, Cindervines deals 1 damage to that player. {1}, Sacrifice Cindervines: Destroy target artifact or enchantment. Cindervines deals 2 damage to that permanent's controller.","artist":"Mark Behm"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5d6","set":"Ravnica Allegiance","number":"6",
    "name":"Civic Stalwart","type":"Creature — Elephant Soldier","manaCost":"{3}{W}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Civic Stalwart enters the battlefield, creatures you control get +1/+1 until end of turn.","artist":"Gabor Szikszai"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc5d7","set":"Ravnica Allegiance","number":"96",
    "name":"Clamor Shaman","type":"Creature — Goblin Shaman","manaCost":"{2}{R}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) Whenever Clamor Shaman attacks, target creature an opponent controls can't block this turn.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc5d8","set":"Ravnica Allegiance","number":"162",
    "name":"Clan Guildmage","type":"Creature — Human Shaman","manaCost":"{R}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{1}{R}, {T}: Target creature can't block this turn. {2}{G}, {T}: Target land you control becomes a 4/4 Elemental creature with haste until end of turn. It's still a land.","artist":"Tomasz Jedruszek"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5d9","set":"Ravnica Allegiance","number":"34",
    "name":"Clear the Mind","type":"Sorcery","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target player shuffles their graveyard into their library. Draw a card.","artist":"David Palumbo"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5da","set":"Ravnica Allegiance","number":"68",
    "name":"Clear the Stage","type":"Instant","manaCost":"{4}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Target creature gets -3/-3 until end of turn. If you control a creature with power 4 or greater, you may return up to one target creature card from your graveyard to your hand.","artist":"Lucas Graciano"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5db","set":"Ravnica Allegiance","number":"35",
    "name":"Code of Constraint","type":"Instant","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target creature gets -4/-0 until end of turn. Draw a card. Addendum — If you cast this spell during your main phase, tap that creature and it doesn't untap during its controller's next untap step.","artist":"Ekaterina Burmak"
},
{
    "types":["Instant"],"colors":["R","G"],"_id":"5dc70d5a368c7d1ec45cc5dc","set":"Ravnica Allegiance","number":"223",
    "name":"Colossus","type":"Instant","manaCost":"{R}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Target creature gets +4/+2 and gains trample until end of turn.","artist":"Jason Rainville"
},
{
    "types":["Instant"],"colors":["R","G"],"_id":"5dc70d5a368c7d1ec45cc5dd","set":"Ravnica Allegiance","number":"223",
    "name":"Collision","type":"Instant","manaCost":"{1}{R/G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Collision deals 6 damage to target creature with flying.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc5de","set":"Ravnica Allegiance","number":"163",
    "name":"Combine Guildmage","type":"Creature — Merfolk Wizard","manaCost":"{G}{U}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{1}{G}, {T}: This turn, each creature you control enters the battlefield with an additional +1/+1 counter on it. {1}{U}, {T}: Move a +1/+1 counter from target creature you control onto another target creature you control.","artist":"Yeong-Hao Han"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5df","set":"Ravnica Allegiance","number":"7",
    "name":"Concordia Pegasus","type":"Creature — Pegasus","manaCost":"{1}{W}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.)","artist":"Chris Rahn"
},
{
    "types":["Sorcery"],"colors":["W","B"],"_id":"5dc70d5a368c7d1ec45cc5e0","set":"Ravnica Allegiance","number":"224",
    "name":"Consume","type":"Sorcery","manaCost":"{2}{W}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Target player sacrifices a creature with the greatest power among creatures they control. You gain life equal to its power.","artist":"Igor Kieryluk"
},
{
    "types":["Instant"],"colors":["W","B"],"_id":"5dc70d5a368c7d1ec45cc5e1","set":"Ravnica Allegiance","number":"224",
    "name":"Consecrate","type":"Instant","manaCost":"{1}{W/B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Exile target card from a graveyard. Draw a card.","artist":"Igor Kieryluk"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5e2","set":"Ravnica Allegiance","number":"69",
    "name":"Consign to the Pit","type":"Sorcery","manaCost":"{5}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Destroy target creature. Consign to the Pit deals 2 damage to that creature's controller.","artist":"Colin Boyer"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5e3","set":"Ravnica Allegiance","number":"36",
    "name":"Coral Commando","type":"Creature — Merfolk Warrior","manaCost":"{2}{U}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":null,"artist":"Alex Konstad"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5e4","set":"Ravnica Allegiance","number":"70",
    "name":"Cry of the Carnarium","type":"Sorcery","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"All creatures get -2/-2 until end of turn. Exile all creature cards in all graveyards that were put there from the battlefield this turn. If a creature would die this turn, exile it instead.","artist":"Johann Bodin"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc5e5","set":"Ravnica Allegiance","number":"164",
    "name":"Cult Guildmage","type":"Creature — Human Shaman","manaCost":"{B}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{3}{B}, {T}: Target player discards a card. Activate this ability only any time you could cast a sorcery. {R}, {T}: Cult Guildmage deals 1 damage to target opponent or planeswalker.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc5e6","set":"Ravnica Allegiance","number":"97",
    "name":"Dagger Caster","type":"Creature — Viashino Rogue","manaCost":"{3}{R}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"When Dagger Caster enters the battlefield, it deals 1 damage to each opponent and 1 damage to each creature your opponents control.","artist":"Viktor Titov"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5e7","set":"Ravnica Allegiance","number":"71",
    "name":"Dead Revels","type":"Sorcery","manaCost":"{3}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Spectacle {1}{B} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) Return up to two target creature cards from your graveyard to your hand.","artist":"David Palumbo"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5e8","set":"Ravnica Allegiance","number":"72",
    "name":"Debtors' Transport","type":"Creature — Thrull","manaCost":"{5}{B}","convertedManaCost":6,"power":"5","toughness":"3",
    "text":"Afterlife 2 (When this creature dies, create two 1/1 white and black Spirit creature tokens with flying.)","artist":"Jakub Kasper"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc5e9","set":"Ravnica Allegiance","number":"98",
    "name":"Deface","type":"Sorcery","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Choose one — • Destroy target artifact. • Destroy target creature with defender.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Instant"],"colors":["W","U"],"_id":"5dc70d5a368c7d1ec45cc5ea","set":"Ravnica Allegiance","number":"225",
    "name":"Deploy","type":"Instant","manaCost":"{2}{W}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Create two 1/1 colorless Thopter artifact creature tokens with flying, then you gain 1 life for each creature you control.","artist":"Sara Winters"
},
{
    "types":["Instant"],"colors":["W","U"],"_id":"5dc70d5a368c7d1ec45cc5eb","set":"Ravnica Allegiance","number":"225",
    "name":"Depose","type":"Instant","manaCost":"{1}{W/U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Tap target creature. Draw a card.","artist":"Sara Winters"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5ec","set":"Ravnica Allegiance","number":"165",
    "name":"Deputy of Detention","type":"Creature — Vedalken Wizard","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"When Deputy of Detention enters the battlefield, exile target nonland permanent an opponent controls and all other nonland permanents that player controls with the same name as that permanent until Deputy of Detention leaves the battlefield.","artist":"G-host Lee"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc5ed","set":"Ravnica Allegiance","number":"272",
    "name":"Domri's Nodorog","type":"Creature — Beast","manaCost":"{3}{R}{G}","convertedManaCost":5,"power":"5","toughness":"2",
    "text":"Trample When Domri's Nodorog enters the battlefield, you may search your library and/or graveyard for a card named Domri, City Smasher, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Svetlin Velinov"
},
{
    "types":["Planeswalker"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc5ef","set":"Ravnica Allegiance","number":"269",
    "name":"Domri, City Smasher","type":"Legendary Planeswalker — Domri","manaCost":"{4}{R}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+2]: Creatures you control get +1/+1 and gain haste until end of turn. [−3]: Domri, City Smasher deals 3 damage to any target. [−8]: Put three +1/+1 counters on each creature you control. Those creatures gain trample until end of turn.","artist":"Eric Deschamps"
},
{
    "types":["Enchantment"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5f0","set":"Ravnica Allegiance","number":"168",
    "name":"Dovin's Acuity","type":"Enchantment","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"When Dovin's Acuity enters the battlefield, you gain 2 life and draw a card. Whenever you cast an instant spell during your main phase, you may return Dovin's Acuity to its owner's hand.","artist":"Bastien L. Deharme"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc5f1","set":"Ravnica Allegiance","number":"268",
    "name":"Dovin's Automaton","type":"Artifact Creature — Homunculus","manaCost":"{4}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"As long as you control a Dovin planeswalker, Dovin's Automaton gets +2/+2 and has vigilance. (Attacking doesn't cause it to tap.)","artist":"Adam Paquette"
},
{
    "types":["Instant"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5f2","set":"Ravnica Allegiance","number":"267",
    "name":"Dovin's Dismissal","type":"Instant","manaCost":"{2}{W}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Put up to one target tapped creature on top of its owner's library. You may search your library and/or graveyard for a card named Dovin, Architect of Law, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5f4","set":"Ravnica Allegiance","number":"167",
    "name":"Dovin, Grand Arbiter","type":"Legendary Planeswalker — Dovin","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[+1]: Until end of turn, whenever a creature you control deals combat damage to a player, put a loyalty counter on Dovin, Grand Arbiter. [−1]: Create a 1/1 colorless Thopter artifact creature token with flying. You gain 1 life. [−7]: Look at the top ten cards of your library. Put three of them into your hand and the rest on the bottom of your library in a random order.","artist":"Kieran Yanner"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc5f5","set":"Ravnica Allegiance","number":"73",
    "name":"Drill Bit","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Spectacle {B} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) Target player reveals their hand. You choose a nonland card from it. That player discards that card.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Instant"],"colors":["R"],"id":"5dc70d5a368c7d1ec45cc5f6","set":"Ravnica Allegiance","number":"99",
    "name":"Electrodominance","type":"Instant","manaCost":"{X}{R}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Electrodominance deals X damage to any target. You may cast a card with converted mana cost X or less from your hand without paying its mana cost.","artist":"Dmitry Burmak"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5f7","set":"Ravnica Allegiance","number":"266",
    "name":"Elite Arrester","type":"Creature — Human Soldier","manaCost":"{W}","convertedManaCost":1,"power":"0","toughness":"3",
    "text":"{1}{U}, {T}: Tap target creature.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc5f9","set":"Ravnica Allegiance","number":"124",
    "name":"End-Raze Forerunners","type":"Creature — Boar","manaCost":"{5}{G}{G}{G}","convertedManaCost":8,"power":"7","toughness":"7",
    "text":"Vigilance, trample, haste When End-Raze Forerunners enters the battlefield, other creatures you control get +2/+2 and gain vigilance and trample until end of turn.","artist":"Mathias Kollros"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc5fa","set":"Ravnica Allegiance","number":"125",
    "name":"Enraged Ceratok","type":"Creature — Rhino","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Enraged Ceratok can't be blocked by creatures with power 2 or less.","artist":"Lars Grant-West"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5fb","set":"Ravnica Allegiance","number":"37",
    "name":"Essence Capture","type":"Instant","manaCost":"{U}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Counter target creature spell. Put a +1/+1 counter on up to one target creature you control.","artist":"Mathias Kollros"
},
{
    "types":["Enchantment"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc5fc","set":"Ravnica Allegiance","number":"170",
    "name":"Ethereal Absolution","type":"Enchantment","manaCost":"{4}{W}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Creatures you control get +1/+1. Creatures your opponents control get -1/-1. {2}{W}{B}: Exile target card from an opponent's graveyard. If it was a creature card, you create a 1/1 white and black Spirit creature token with flying.","artist":"Eric Deschamps"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5fe","set":"Ravnica Allegiance","number":"38",
    "name":"Eyes Everywhere","type":"Enchantment","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"At the beginning of your upkeep, scry 1. {5}{U}: Exchange control of Eyes Everywhere and target nonland permanent. Activate this ability only any time you could cast a sorcery.","artist":"Nils Hamm"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc5ff","set":"Ravnica Allegiance","number":"39",
    "name":"Faerie Duelist","type":"Creature — Faerie Rogue","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Flash Flying When Faerie Duelist enters the battlefield, target creature an opponent controls gets -2/-0 until end of turn.","artist":"Yongjae Choi"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc600","set":"Ravnica Allegiance","number":"100",
    "name":"Feral Maaka","type":"Creature — Cat","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":null,"artist":"Jonathan Kuo"
},
{
    "types":["Instant"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc601","set":"Ravnica Allegiance","number":"171",
    "name":"Final Payment","type":"Instant","manaCost":"{W}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, pay 5 life or sacrifice a creature or enchantment. Destroy target creature.","artist":"Victor Adame Minguez"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc603","set":"Ravnica Allegiance","number":"101",
    "name":"Flames of the Raze-Boar","type":"Instant","manaCost":"{5}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Flames of the Raze-Boar deals 4 damage to target creature an opponent controls. Then Flames of the Raze-Boar deals 2 damage to each other creature that player controls if you control a creature with power 4 or greater.","artist":"Jason A. Engle"
},
{
    "types":["Enchantment"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc604","set":"Ravnica Allegiance","number":"74",
    "name":"Font of Agonies","type":"Enchantment","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Whenever you pay life, put that many blood counters on Font of Agonies. {1}{B}, Remove four blood counters from Font of Agonies: Destroy target creature.","artist":"Jason A. Engle"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc605","set":"Ravnica Allegiance","number":"216",
    "name":"Footlight Fiend","type":"Creature — Devil","manaCost":"{B/R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"When Footlight Fiend dies, it deals 1 damage to any target.","artist":"Deruchenko Alexander"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc606","set":"Ravnica Allegiance","number":"9",
    "name":"Forbidding Spirit","type":"Creature — Spirit Cleric","manaCost":"{1}{W}{W}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"When Forbidding Spirit enters the battlefield, until your next turn, creatures can't attack you or a planeswalker you control unless their controller pays {2} for each of those creatures.","artist":"Ryan Yee"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc608","set":"Ravnica Allegiance","number":"173",
    "name":"Frenzied Arynx","type":"Creature — Cat Beast","manaCost":"{2}{R}{G}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) Trample {4}{R}{G}: Frenzied Arynx gets +3/+0 until end of turn.","artist":"Filip Burburan"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc609","set":"Ravnica Allegiance","number":"174",
    "name":"Frilled Mystic","type":"Creature — Elf Lizard Wizard","manaCost":"{G}{G}{U}{U}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Flash When Frilled Mystic enters the battlefield, you may counter target spell.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc60a","set":"Ravnica Allegiance","number":"175",
    "name":"Galloping Lizrog","type":"Creature — Frog Lizard","manaCost":"{3}{G}{U}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Trample When Galloping Lizrog enters the battlefield, you may remove any number of +1/+1 counters from among creatures you control. If you do, put twice that many +1/+1 counters on Galloping Lizrog.","artist":"Lius Lasahido"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc60b","set":"Ravnica Allegiance","number":"232",
    "name":"Gate Colossus","type":"Artifact Creature — Construct","manaCost":"{8}","convertedManaCost":8,"power":"8","toughness":"8",
    "text":"This spell costs {1} less to cast for each Gate you control. Gate Colossus can't be blocked by creatures with power 2 or less. Whenever a Gate enters the battlefield under your control, you may put Gate Colossus from your graveyard on top of your library.","artist":"Izzy"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc60d","set":"Ravnica Allegiance","number":"102",
    "name":"Gates Ablaze","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Gates Ablaze deals X damage to each creature, where X is the number of Gates you control.","artist":"Eytan Zana"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc60e","set":"Ravnica Allegiance","number":"247",
    "name":"Gateway Plaza","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Gateway Plaza enters the battlefield tapped. When Gateway Plaza enters the battlefield, sacrifice it unless you pay {1}. {T}: Add one mana of any color.","artist":"Jedd Chevrier"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc60f","set":"Ravnica Allegiance","number":"40",
    "name":"Gateway Sneak","type":"Creature — Vedalken Rogue","manaCost":"{2}{U}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"Whenever a Gate enters the battlefield under your control, Gateway Sneak can't be blocked this turn. Whenever Gateway Sneak deals combat damage to a player, draw a card.","artist":"Matt Stewart"
},
{
    "types":["Instant"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc610","set":"Ravnica Allegiance","number":"176",
    "name":"Get the Point","type":"Instant","manaCost":"{3}{B}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Destroy target creature. Scry 1.","artist":"Steve Argyle"
},
{
    "types":["Planeswalker"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc5ee","set":"Ravnica Allegiance","number":"166",
    "name":"Domri, Chaos Bringer","type":"Legendary Planeswalker — Domri","manaCost":"{2}{R}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"[+1]: Add {R} or {G}. If that mana is spent on a creature spell, it gains riot. (It enters the battlefield with your choice of a +1/+1 counter or haste.) [−3]: Look at the top four cards of your library. You may reveal up to two creature cards from among them and put them into your hand. Put the rest on the bottom of your library in a random order. [−8]: You get an emblem with \"At the beginning of each end step, create a 4/4 red and green Beast creature token with trample.\"","artist":"Zack Stella"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc612","set":"Ravnica Allegiance","number":"127",
    "name":"Gift of Strength","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +3/+3 and gains reach until end of turn.","artist":"Lius Lasahido"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc613","set":"Ravnica Allegiance","number":"233",
    "name":"Glass of the Guildpact","type":"Artifact","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Multicolored creatures you control get +1/+1.","artist":"Dimitar Marinski"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc614","set":"Ravnica Allegiance","number":"104",
    "name":"Goblin Gathering","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Create a number of 1/1 red Goblin creature tokens equal to two plus the number of cards named Goblin Gathering in your graveyard.","artist":"Svetlin Velinov"
},
{
    "types":["Planeswalker"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5f3","set":"Ravnica Allegiance","number":"265",
    "name":"Dovin, Architect of Law","type":"Legendary Planeswalker — Dovin","manaCost":"{4}{W}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+1]: You gain 2 life and draw a card. [−1]: Tap target creature. It doesn't untap during its controller's next untap step. [−9]: Tap all permanents target opponent controls. That player skips their next untap step.","artist":"Kieran Yanner"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc615","set":"Ravnica Allegiance","number":"248",
    "name":"Godless Shrine","type":"Land — Plains Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W} or {B}.) As Godless Shrine enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Jenn Ravenna"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc617","set":"Ravnica Allegiance","number":"105",
    "name":"Gravel-Hide Goblin","type":"Creature — Goblin Shaman","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"{3}{G}: Gravel-Hide Goblin gets +2/+2 until end of turn.","artist":"Jonathan Kuo"
},
{
    "types":["Instant"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc5f8","set":"Ravnica Allegiance","number":"169",
    "name":"Emergency Powers","type":"Instant","manaCost":"{5}{W}{U}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Each player shuffles their hand and graveyard into their library, then draws seven cards. Exile Emergency Powers. Addendum — If you cast this spell during your main phase, you may put a permanent card with converted mana cost 7 or less from your hand onto the battlefield.","artist":"Chris Rallis"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc618","set":"Ravnica Allegiance","number":"75",
    "name":"Grotesque Demise","type":"Instant","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Exile target creature with power 3 or less.","artist":"Ben Wootten"
},
{
    "types":["Instant"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc619","set":"Ravnica Allegiance","number":"178",
    "name":"Growth Spiral","type":"Instant","manaCost":"{G}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Draw a card. You may put a land card from your hand onto the battlefield.","artist":"Seb McKinnon"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc61a","set":"Ravnica Allegiance","number":"128",
    "name":"Growth-Chamber Guardian","type":"Creature — Elf Crab Warrior","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{2}{G}: Adapt 2. (If this creature has no +1/+1 counters on it, put two +1/+1 counters on it.) Whenever one or more +1/+1 counters are put on Growth-Chamber Guardian, you may search your library for a card named Growth-Chamber Guardian, reveal it, put it into your hand, then shuffle your library.","artist":"Bram Sels"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc61c","set":"Ravnica Allegiance","number":"249",
    "name":"Gruul Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Gruul Guildgate enters the battlefield tapped. {T}: Add {R} or {G}.","artist":"Alexander Forssberg"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc61d","set":"Ravnica Allegiance","number":"250",
    "name":"Gruul Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Gruul Guildgate enters the battlefield tapped. {T}: Add {R} or {G}.","artist":"Alexander Forssberg"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc5fd","set":"Ravnica Allegiance","number":"8",
    "name":"Expose to Daylight","type":"Instant","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target artifact or enchantment. Scry 1.","artist":"Daniel Ljunggren"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc61e","set":"Ravnica Allegiance","number":"234",
    "name":"Gruul Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {R} or {G}. {R/G}{R/G}{R/G}{R/G}, {T}, Sacrifice Gruul Locket: Draw two cards.","artist":"Kev Walker"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc61f","set":"Ravnica Allegiance","number":"179",
    "name":"Gruul Spellbreaker","type":"Creature — Ogre Warrior","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) Trample As long as it's your turn, you and Gruul Spellbreaker have hexproof.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc621","set":"Ravnica Allegiance","number":"76",
    "name":"Gutterbones","type":"Creature — Skeleton Warrior","manaCost":"{B}","convertedManaCost":1,"power":"2","toughness":"1",
    "text":"Gutterbones enters the battlefield tapped. {1}{B}: Return Gutterbones from your graveyard to your hand. Activate this ability only during your turn and only if an opponent lost life this turn.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc622","set":"Ravnica Allegiance","number":"180",
    "name":"Gyre Engineer","type":"Creature — Vedalken Wizard","manaCost":"{1}{G}{U}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"{T}: Add {G}{U}.","artist":"Anthony Palumbo"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc602","set":"Ravnica Allegiance","number":"172",
    "name":"Fireblade Artist","type":"Creature — Human Shaman","manaCost":"{B}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Haste At the beginning of your upkeep, you may sacrifice a creature. When you do, Fireblade Artist deals 2 damage to target opponent or planeswalker.","artist":"Steve Argyle"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc623","set":"Ravnica Allegiance","number":"10",
    "name":"Haazda Officer","type":"Creature — Human Soldier","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"When Haazda Officer enters the battlefield, target creature you control gets +1/+1 until end of turn.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc624","set":"Ravnica Allegiance","number":"181",
    "name":"Hackrobat","type":"Creature — Human Rogue","manaCost":"{1}{B}{R}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Spectacle {B}{R} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) {B}: Hackrobat gains deathtouch until end of turn. {R}: Hackrobat gets +2/-2 until end of turn.","artist":"Simon Dominic"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc607","set":"Ravnica Allegiance","number":"264",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Eytan Zana"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc626","set":"Ravnica Allegiance","number":"11",
    "name":"Hero of Precinct One","type":"Creature — Human Warrior","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever you cast a multicolored spell, create a 1/1 white Human creature token.","artist":"Bram Sels"
},
{
    "types":["Enchantment"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc627","set":"Ravnica Allegiance","number":"182",
    "name":"High Alert","type":"Enchantment","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each creature you control assigns combat damage equal to its toughness rather than its power. Creatures you control can attack as though they didn't have defender. {2}{W}{U}: Untap target creature.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc628","set":"Ravnica Allegiance","number":"41",
    "name":"Humongulus","type":"Creature — Homunculus","manaCost":"{4}{U}","convertedManaCost":5,"power":"2","toughness":"5",
    "text":"Hexproof (This creature can't be the target of spells or abilities your opponents control.)","artist":"Jesper Ejsing"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc629","set":"Ravnica Allegiance","number":"183",
    "name":"Hydroid Krasis","type":"Creature — Jellyfish Hydra Beast","manaCost":"{X}{G}{U}","convertedManaCost":2,"power":"0","toughness":"0",
    "text":"When you cast this spell, you gain half X life and draw half X cards. Round down each time. Flying, trample Hydroid Krasis enters the battlefield with X +1/+1 counters on it.","artist":"Jason Felix"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc60c","set":"Ravnica Allegiance","number":"126",
    "name":"Gatebreaker Ram","type":"Creature — Sheep","manaCost":"{2}{G}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Gatebreaker Ram gets +1/+1 for each Gate you control. As long as you control two or more Gates, Gatebreaker Ram has vigilance and trample.","artist":"Even Amundsen"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc62b","set":"Ravnica Allegiance","number":"106",
    "name":"Immolation Shaman","type":"Creature — Viashino Shaman","manaCost":"{1}{R}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Whenever an opponent activates an ability of an artifact, creature, or land that isn't a mana ability, Immolation Shaman deals 1 damage to that player. {3}{R}{R}: Immolation Shaman gets +3/+3 and gains menace until end of turn.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc62c","set":"Ravnica Allegiance","number":"12",
    "name":"Impassioned Orator","type":"Creature — Human Cleric","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever another creature enters the battlefield under your control, you gain 1 life.","artist":"Mark Zug"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc62d","set":"Ravnica Allegiance","number":"184",
    "name":"Imperious Oligarch","type":"Creature — Human Cleric","manaCost":"{W}{B}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Vigilance Afterlife 1 (When this creature dies, create a 1/1 white and black Spirit creature token with flying.)","artist":"Johannes Voss"
},
{
    "types":["Instant"],"colors":["U","G"],"_id":"5dc70d5a368c7d1ec45cc62e","set":"Ravnica Allegiance","number":"226",
    "name":"Incongruity","type":"Instant","manaCost":"{1}{G}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Exile target creature. That creature's controller creates a 3/3 green Frog Lizard creature token.","artist":"Mike Bierek"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc630","set":"Ravnica Allegiance","number":"131",
    "name":"Incubation Druid","type":"Creature — Elf Druid","manaCost":"{1}{G}","convertedManaCost":2,"power":"0","toughness":"2",
    "text":"{T}: Add one mana of any type that a land you control could produce. If Incubation Druid has a +1/+1 counter on it, add three mana of that type instead. {3}{G}{G}: Adapt 3. (If this creature has no +1/+1 counters on it, put three +1/+1 counters on it.)","artist":"Daniel Ljunggren"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc611","set":"Ravnica Allegiance","number":"103",
    "name":"Ghor-Clan Wrecker","type":"Creature — Human Warrior","manaCost":"{3}{R}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) Menace (This creature can't be blocked except by two or more creatures.)","artist":"David Palumbo"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc631","set":"Ravnica Allegiance","number":"261",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Eytan Zana"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc632","set":"Ravnica Allegiance","number":"185",
    "name":"Judith, the Scourge Diva","type":"Legendary Creature — Human Shaman","manaCost":"{1}{B}{R}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Other creatures you control get +1/+0. Whenever a nontoken creature you control dies, Judith, the Scourge Diva deals 1 damage to any target.","artist":"Wesley Burt"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc616","set":"Ravnica Allegiance","number":"177",
    "name":"Grasping Thrull","type":"Creature — Thrull","manaCost":"{3}{W}{B}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Flying When Grasping Thrull enters the battlefield, it deals 2 damage to each opponent and you gain 2 life.","artist":"Seb McKinnon"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc633","set":"Ravnica Allegiance","number":"235",
    "name":"Junktroller","type":"Artifact Creature — Golem","manaCost":"{4}","convertedManaCost":4,"power":"0","toughness":"6",
    "text":"Defender {T}: Put target card from a graveyard on the bottom of its owner's library.","artist":"Chris Seaman"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc61b","set":"Ravnica Allegiance","number":"129",
    "name":"Gruul Beastmaster","type":"Creature — Human Shaman","manaCost":"{3}{G}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) Whenever Gruul Beastmaster attacks, another target creature you control gets +X/+0 until end of turn, where X is Gruul Beastmaster's power.","artist":"Kimonas Theodossiou"
},
{
    "types":["Sorcery"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc635","set":"Ravnica Allegiance","number":"187",
    "name":"Kaya's Wrath","type":"Sorcery","manaCost":"{W}{W}{B}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy all creatures. You gain life equal to the number of creatures you controlled that were destroyed this way.","artist":"Victor Adame Minguez"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc620","set":"Ravnica Allegiance","number":"130",
    "name":"Guardian Project","type":"Enchantment","manaCost":"{3}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever a nontoken creature enters the battlefield under your control, if it doesn't have the same name as another creature you control or a creature card in your graveyard, draw a card.","artist":"Chris Rallis"
},
{
    "types":["Planeswalker"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc636","set":"Ravnica Allegiance","number":"186",
    "name":"Kaya, Orzhov Usurper","type":"Legendary Planeswalker — Kaya","manaCost":"{1}{W}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[+1]: Exile up to two target cards from a single graveyard. You gain 2 life if at least one creature card was exiled this way. [−1]: Exile target nonland permanent with converted mana cost 1 or less. [−5]: Kaya, Orzhov Usurper deals damage to target player equal to the number of cards that player owns in exile and you gain that much life.","artist":"Yongjae Choi"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc637","set":"Ravnica Allegiance","number":"14",
    "name":"Knight of Sorrows","type":"Creature — Human Knight","manaCost":"{4}{W}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Knight of Sorrows can block an additional creature each combat. Afterlife 1 (When this creature dies, create a 1/1 white and black Spirit creature token with flying.)","artist":"Zezhou Chen"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc638","set":"Ravnica Allegiance","number":"188",
    "name":"Knight of the Last Breath","type":"Creature — Giant Knight","manaCost":"{5}{W}{B}","convertedManaCost":7,"power":"4","toughness":"4",
    "text":"{3}, Sacrifice another nontoken creature: Create a 1/1 white and black Spirit creature token with flying. Afterlife 3 (When this creature dies, create three 1/1 white and black Spirit creature tokens with flying.)","artist":"Milivoj Ćeran"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc625","set":"Ravnica Allegiance","number":"251",
    "name":"Hallowed Fountain","type":"Land — Plains Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W} or {U}.) As Hallowed Fountain enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Jedd Chevrier"
},
{
    "types":["Enchantment"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc63a","set":"Ravnica Allegiance","number":"190",
    "name":"Lawmage's Binding","type":"Enchantment — Aura","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Flash Enchant creature Enchanted creature can't attack or block, and its activated abilities can't be activated.","artist":"Mark Behm"
},
{
    "types":["Enchantment"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc62a","set":"Ravnica Allegiance","number":"77",
    "name":"Ill-Gotten Inheritance","type":"Enchantment","manaCost":"{3}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"At the beginning of your upkeep, Ill-Gotten Inheritance deals 1 damage to each opponent and you gain 1 life. {5}{B}, Sacrifice Ill-Gotten Inheritance: It deals 4 damage to target opponent and you gain 4 life.","artist":"Winona Nelson"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc63b","set":"Ravnica Allegiance","number":"107",
    "name":"Light Up the Stage","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Spectacle {R} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) Exile the top two cards of your library. Until the end of your next turn, you may play those cards.","artist":"Dmitry Burmak"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc63c","set":"Ravnica Allegiance","number":"15",
    "name":"Lumbering Battlement","type":"Creature — Beast","manaCost":"{4}{W}","convertedManaCost":5,"power":"4","toughness":"5",
    "text":"Vigilance When Lumbering Battlement enters the battlefield, exile any number of other nontoken creatures you control until it leaves the battlefield. Lumbering Battlement gets +2/+2 for each card exiled with it.","artist":"Simon Dominic"
},
{
    "types":["Instant"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc63d","set":"Ravnica Allegiance","number":"191",
    "name":"Macabre Mockery","type":"Instant","manaCost":"{2}{B}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Put target creature card from an opponent's graveyard onto the battlefield under your control. It gets +2/+0 and gains haste until end of turn. Sacrifice it at the beginning of the next end step.","artist":"Deruchenko Alexander"
},
{
    "types":["Sorcery"],"colors":["U","G"],"_id":"5dc70d5a368c7d1ec45cc62f","set":"Ravnica Allegiance","number":"226",
    "name":"Incubation","type":"Sorcery","manaCost":"{G/U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Look at the top five cards of your library. You may reveal a creature card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Mike Bierek"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc640","set":"Ravnica Allegiance","number":"43",
    "name":"Mesmerizing Benthid","type":"Creature — Octopus","manaCost":"{3}{U}{U}","convertedManaCost":5,"power":"4","toughness":"5",
    "text":"When Mesmerizing Benthid enters the battlefield, create two 0/2 blue Illusion creature tokens with \"Whenever this creature blocks a creature, that creature doesn't untap during its controller's next untap step.\" Mesmerizing Benthid has hexproof as long as you control an Illusion.","artist":"Kev Walker"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc634","set":"Ravnica Allegiance","number":"13",
    "name":"Justiciar's Portal","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Exile target creature you control, then return that card to the battlefield under its owner's control. It gains first strike until end of turn.","artist":"Micah Epstein"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc63f","set":"Ravnica Allegiance","number":"42",
    "name":"Mass Manipulation","type":"Sorcery","manaCost":"{X}{X}{U}{U}{U}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Gain control of X target creatures and/or planeswalkers.","artist":"Anthony Palumbo"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc641","set":"Ravnica Allegiance","number":"16",
    "name":"Ministrant of Obligation","type":"Creature — Human Cleric","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"1",
    "text":"Afterlife 2 (When this creature dies, create two 1/1 white and black Spirit creature tokens with flying.)","artist":"Bastien L. Deharme"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc639","set":"Ravnica Allegiance","number":"189",
    "name":"Lavinia, Azorius Renegade","type":"Legendary Creature — Human Soldier","manaCost":"{W}{U}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Each opponent can't cast noncreature spells with converted mana cost greater than the number of lands that player controls. Whenever an opponent casts a spell, if no mana was spent to cast it, counter that spell.","artist":"Steven Belledin"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc642","set":"Ravnica Allegiance","number":"108",
    "name":"Mirror March","type":"Enchantment","manaCost":"{5}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Whenever a nontoken creature enters the battlefield under your control, flip a coin until you lose a flip. For each flip you won, create a token that's a copy of that creature. Those tokens gain haste. Exile them at the beginning of the next end step.","artist":"Johannes Voss"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc644","set":"Ravnica Allegiance","number":"263",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Jonas De Ro"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc63e","set":"Ravnica Allegiance","number":"132",
    "name":"Mammoth Spider","type":"Creature — Spider","manaCost":"{4}{G}","convertedManaCost":5,"power":"3","toughness":"5",
    "text":"Reach (This creature can block creatures with flying.)","artist":"Jehan Choo"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc645","set":"Ravnica Allegiance","number":"193",
    "name":"Nikya of the Old Ways","type":"Legendary Creature — Centaur Druid","manaCost":"{3}{R}{G}","convertedManaCost":5,"power":"5","toughness":"5",
    "text":"You can't cast noncreature spells. Whenever you tap a land for mana, add one mana of any type that land produced.","artist":"Ryan Pancoast"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc646","set":"Ravnica Allegiance","number":"78",
    "name":"Noxious Groodion","type":"Creature — Beast","manaCost":"{2}{B}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Deathtouch","artist":"Simon Dominic"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc647","set":"Ravnica Allegiance","number":"133",
    "name":"Open the Gates","type":"Sorcery","manaCost":"{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Search your library for a basic land card or Gate card, reveal it, put it into your hand, then shuffle your library.","artist":"John Thacker"
},
{
    "types":["Instant"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc643","set":"Ravnica Allegiance","number":"192",
    "name":"Mortify","type":"Instant","manaCost":"{1}{W}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target creature or enchantment.","artist":"Anthony Palumbo"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc649","set":"Ravnica Allegiance","number":"252",
    "name":"Orzhov Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Orzhov Guildgate enters the battlefield tapped. {T}: Add {W} or {B}.","artist":"Cliff Childs"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc648","set":"Ravnica Allegiance","number":"79",
    "name":"Orzhov Enforcer","type":"Creature — Human Rogue","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Deathtouch Afterlife 1 (When this creature dies, create a 1/1 white and black Spirit creature token with flying.)","artist":"Matt Stewart"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc64a","set":"Ravnica Allegiance","number":"253",
    "name":"Orzhov Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Orzhov Guildgate enters the battlefield tapped. {T}: Add {W} or {B}.","artist":"Cliff Childs"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc64b","set":"Ravnica Allegiance","number":"236",
    "name":"Orzhov Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {W} or {B}. {W/B}{W/B}{W/B}{W/B}, {T}, Sacrifice Orzhov Locket: Draw two cards.","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc64c","set":"Ravnica Allegiance","number":"80",
    "name":"Orzhov Racketeers","type":"Creature — Human Rogue","manaCost":"{4}{B}","convertedManaCost":5,"power":"3","toughness":"2",
    "text":"Whenever Orzhov Racketeers deals combat damage to a player, that player discards a card. Afterlife 2 (When this creature dies, create two 1/1 white and black Spirit creature tokens with flying.)","artist":"David Palumbo"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc64d","set":"Ravnica Allegiance","number":"44",
    "name":"Persistent Petitioners","type":"Creature — Human Advisor","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"{1}, {T}: Target player puts the top card of their library into their graveyard. Tap four untapped Advisors you control: Target player puts the top twelve cards of their library into their graveyard. A deck can have any number of cards named Persistent Petitioners.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc64e","set":"Ravnica Allegiance","number":"81",
    "name":"Pestilent Spirit","type":"Creature — Spirit","manaCost":"{2}{B}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Menace, deathtouch Instant and sorcery spells you control have deathtouch. (Any amount of damage they deal to a creature is enough to destroy it.)","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc64f","set":"Ravnica Allegiance","number":"194",
    "name":"Pitiless Pontiff","type":"Creature — Vampire Cleric","manaCost":"{W}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{1}, Sacrifice another creature: Pitiless Pontiff gains deathtouch and indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy it.)","artist":"Yongjae Choi"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc650","set":"Ravnica Allegiance","number":"82",
    "name":"Plague Wight","type":"Creature — Zombie","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Whenever Plague Wight becomes blocked, each creature blocking it gets -1/-1 until end of turn.","artist":"Tomasz Jedruszek"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc651","set":"Ravnica Allegiance","number":"260",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Titus Lunter"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc652","set":"Ravnica Allegiance","number":"254",
    "name":"Plaza of Harmony","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"When Plaza of Harmony enters the battlefield, if you control two or more Gates, you gain 3 life. {T}: Add {C}. {T}: Add one mana of any type that a Gate you control could produce.","artist":"Jedd Chevrier"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc653","set":"Ravnica Allegiance","number":"45",
    "name":"Precognitive Perception","type":"Instant","manaCost":"{3}{U}{U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Draw three cards. Addendum — If you cast this spell during your main phase, instead scry 3, then draw three cards.","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc654","set":"Ravnica Allegiance","number":"83",
    "name":"Priest of Forgotten Gods","type":"Creature — Human Cleric","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"{T}, Sacrifice two other creatures: Any number of target players each lose 2 life and sacrifice a creature. You add {B}{B} and draw a card.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc655","set":"Ravnica Allegiance","number":"195",
    "name":"Prime Speaker Vannifar","type":"Legendary Creature — Elf Ooze Wizard","manaCost":"{2}{G}{U}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"{T}, Sacrifice another creature: Search your library for a creature card with converted mana cost equal to 1 plus the sacrificed creature's converted mana cost, put that card onto the battlefield, then shuffle your library. Activate this ability only any time you could cast a sorcery.","artist":"Kieran Yanner"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc656","set":"Ravnica Allegiance","number":"17",
    "name":"Prowling Caracal","type":"Creature — Cat","manaCost":"{1}{W}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":null,"artist":"Jonathan Kuo"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc657","set":"Ravnica Allegiance","number":"46",
    "name":"Prying Eyes","type":"Instant","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Draw four cards, then discard two cards.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc658","set":"Ravnica Allegiance","number":"47",
    "name":"Pteramander","type":"Creature — Salamander Drake","manaCost":"{U}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Flying {7}{U}: Adapt 4. This ability costs {1} less to activate for each instant and sorcery card in your graveyard. (If this creature has no +1/+1 counters on it, put four +1/+1 counters on it.)","artist":"Simon Dominic"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc659","set":"Ravnica Allegiance","number":"48",
    "name":"Quench","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Counter target spell unless its controller pays {2}.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc65a","set":"Ravnica Allegiance","number":"196",
    "name":"Rafter Demon","type":"Creature — Demon","manaCost":"{2}{B}{R}","convertedManaCost":4,"power":"4","toughness":"2",
    "text":"Spectacle {3}{B}{R} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) When Rafter Demon enters the battlefield, if its spectacle cost was paid, each opponent discards a card.","artist":"Slawomir Maniak"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc65b","set":"Ravnica Allegiance","number":"270",
    "name":"Ragefire","type":"Sorcery","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Ragefire deals 3 damage to target creature.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc65c","set":"Ravnica Allegiance","number":"197",
    "name":"Rakdos Firewheeler","type":"Creature — Human Rogue","manaCost":"{B}{B}{R}{R}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"When Rakdos Firewheeler enters the battlefield, it deals 2 damage to target opponent and 2 damage to up to one target creature or planeswalker.","artist":"Slawomir Maniak"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc65d","set":"Ravnica Allegiance","number":"255",
    "name":"Rakdos Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Rakdos Guildgate enters the battlefield tapped. {T}: Add {B} or {R}.","artist":"Jonas De Ro"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc65e","set":"Ravnica Allegiance","number":"256",
    "name":"Rakdos Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Rakdos Guildgate enters the battlefield tapped. {T}: Add {B} or {R}.","artist":"Jonas De Ro"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc65f","set":"Ravnica Allegiance","number":"237",
    "name":"Rakdos Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {B} or {R}. {B/R}{B/R}{B/R}{B/R}, {T}, Sacrifice Rakdos Locket: Draw two cards.","artist":"Sung Choi"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc660","set":"Ravnica Allegiance","number":"198",
    "name":"Rakdos Roustabout","type":"Creature — Ogre Warrior","manaCost":"{1}{B}{R}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Whenever Rakdos Roustabout becomes blocked, it deals 1 damage to the player or planeswalker it's attacking.","artist":"Lucas Graciano"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc661","set":"Ravnica Allegiance","number":"84",
    "name":"Rakdos Trumpeter","type":"Creature — Human Shaman","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Menace (This creature can't be blocked except by two or more creatures.) {3}{R}: Rakdos Trumpeter gets +2/+0 until end of turn.","artist":"Eric Deschamps"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc662","set":"Ravnica Allegiance","number":"199",
    "name":"Rakdos, the Showstopper","type":"Legendary Creature — Demon","manaCost":"{4}{B}{R}","convertedManaCost":6,"power":"6","toughness":"6",
    "text":"Flying, trample When Rakdos, the Showstopper enters the battlefield, flip a coin for each creature that isn't a Demon, Devil, or Imp. Destroy each creature whose coin comes up tails.","artist":"Viktor Titov"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc663","set":"Ravnica Allegiance","number":"18",
    "name":"Rally to Battle","type":"Instant","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control get +1/+3 until end of turn. Untap them.","artist":"Ben Wootten"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc664","set":"Ravnica Allegiance","number":"134",
    "name":"Rampage of the Clans","type":"Instant","manaCost":"{3}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy all artifacts and enchantments. For each permanent destroyed this way, its controller creates a 3/3 green Centaur creature token.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc665","set":"Ravnica Allegiance","number":"135",
    "name":"Rampaging Rendhorn","type":"Creature — Beast","manaCost":"{4}{G}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.)","artist":"Ben Wootten"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc666","set":"Ravnica Allegiance","number":"200",
    "name":"Ravager Wurm","type":"Creature — Wurm","manaCost":"{3}{R}{G}{G}","convertedManaCost":6,"power":"4","toughness":"5",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) When Ravager Wurm enters the battlefield, choose up to one — • Ravager Wurm fights target creature you don't control. • Destroy target land with an activated ability that isn't a mana ability.","artist":"Svetlin Velinov"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc667","set":"Ravnica Allegiance","number":"136",
    "name":"Regenesis","type":"Instant","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Return up to two target permanent cards from your graveyard to your hand.","artist":"James Paick"
},
{
    "types":["Sorcery"],"colors":["U","G"],"_id":"5dc70d5a368c7d1ec45cc668","set":"Ravnica Allegiance","number":"227",
    "name":"Replicate","type":"Sorcery","manaCost":"{1}{G}{U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Create a token that's a copy of target creature you control.","artist":"Victor Adame Minguez"
},
{
    "types":["Instant"],"colors":["U","G"],"_id":"5dc70d5a368c7d1ec45cc669","set":"Ravnica Allegiance","number":"227",
    "name":"Repudiate","type":"Instant","manaCost":"{G/U}{G/U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Counter target activated or triggered ability. (Mana abilities can't be targeted.)","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc66a","set":"Ravnica Allegiance","number":"19",
    "name":"Resolute Watchdog","type":"Creature — Hound","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"3",
    "text":"Defender {1}, Sacrifice Resolute Watchdog: Target creature you control gains indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy it.)","artist":"Milivoj Ćeran"
},
{
    "types":["Sorcery"],"colors":["W","B"],"_id":"5dc70d5a368c7d1ec45cc66b","set":"Ravnica Allegiance","number":"228",
    "name":"Revenge","type":"Sorcery","manaCost":"{4}{W}{B}","convertedManaCost":8,"power":null,"toughness":null,
    "text":"Double your life total. Target opponent loses half their life, rounded up.","artist":"Paul Scott Canavan"
},
{
    "types":["Sorcery"],"colors":["W","B"],"_id":"5dc70d5a368c7d1ec45cc66c","set":"Ravnica Allegiance","number":"228",
    "name":"Revival","type":"Sorcery","manaCost":"{W/B}{W/B}","convertedManaCost":8,"power":null,"toughness":null,
    "text":"Return target creature card with converted mana cost 3 or less from your graveyard to the battlefield.","artist":"Paul Scott Canavan"
},
{
    "types":["Enchantment"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc66d","set":"Ravnica Allegiance","number":"201",
    "name":"Rhythm of the Wild","type":"Enchantment","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creature spells you control can't be countered. Nontoken creatures you control have riot. (They enter the battlefield with your choice of a +1/+1 counter or haste.)","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc66e","set":"Ravnica Allegiance","number":"109",
    "name":"Rix Maadi Reveler","type":"Creature — Human Shaman","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Spectacle {2}{B}{R} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) When Rix Maadi Reveler enters the battlefield, discard a card, then draw a card. If Rix Maadi Reveler's spectacle cost was paid, instead discard your hand, then draw three cards.","artist":"Sara Winters"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc66f","set":"Ravnica Allegiance","number":"137",
    "name":"Root Snare","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Prevent all combat damage that would be dealt this turn.","artist":"Craig J Spearing"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc670","set":"Ravnica Allegiance","number":"110",
    "name":"Rubble Reading","type":"Sorcery","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy target land. Scry 2.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc671","set":"Ravnica Allegiance","number":"217",
    "name":"Rubble Slinger","type":"Creature — Human Warrior","manaCost":"{2}{R/G}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Reach","artist":"Livia Prima"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc672","set":"Ravnica Allegiance","number":"111",
    "name":"Rubblebelt Recluse","type":"Creature — Ogre Berserker","manaCost":"{4}{R}","convertedManaCost":5,"power":"6","toughness":"5",
    "text":"Rubblebelt Recluse attacks each combat if able.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc673","set":"Ravnica Allegiance","number":"202",
    "name":"Rubblebelt Runner","type":"Creature — Viashino Warrior","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Rubblebelt Runner can't be blocked by creature tokens.","artist":"Deruchenko Alexander"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc674","set":"Ravnica Allegiance","number":"112",
    "name":"Rumbling Ruin","type":"Creature — Elemental","manaCost":"{5}{R}","convertedManaCost":6,"power":"6","toughness":"6",
    "text":"When Rumbling Ruin enters the battlefield, count the number of +1/+1 counters on creatures you control. Creatures your opponents control with power less than or equal to that number can't block this turn.","artist":"Jakub Kasper"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc675","set":"Ravnica Allegiance","number":"49",
    "name":"Sage's Row Savant","type":"Creature — Vedalken Wizard","manaCost":"{1}{U}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"When Sage's Row Savant enters the battlefield, scry 2.","artist":"Bastien L. Deharme"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc676","set":"Ravnica Allegiance","number":"138",
    "name":"Sagittars' Volley","type":"Instant","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target creature with flying. Sagittars' Volley deals 1 damage to each creature with flying your opponents control.","artist":"Dan Scott"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc677","set":"Ravnica Allegiance","number":"139",
    "name":"Saruli Caretaker","type":"Creature — Dryad","manaCost":"{G}","convertedManaCost":1,"power":"0","toughness":"3",
    "text":"Defender {T}, Tap an untapped creature you control: Add one mana of any color.","artist":"Howard Lyon"
},
{
    "types":["Sorcery"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc679","set":"Ravnica Allegiance","number":"203",
    "name":"Savage Smash","type":"Sorcery","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target creature you control gets +2/+2 until end of turn. It fights target creature you don't control. (Each deals damage equal to its power to the other.)","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc678","set":"Ravnica Allegiance","number":"140",
    "name":"Sauroform Hybrid","type":"Creature — Human Lizard Warrior","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{4}{G}{G}: Adapt 4. (If this creature has no +1/+1 counters on it, put four +1/+1 counters on it.)","artist":"Nils Hamm"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc67a","set":"Ravnica Allegiance","number":"113",
    "name":"Scorchmark","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Scorchmark deals 2 damage to target creature. If that creature would die this turn, exile it instead.","artist":"Jason Felix"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc67b","set":"Ravnica Allegiance","number":"238",
    "name":"Scrabbling Claws","type":"Artifact","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"{T}: Target player exiles a card from their graveyard. {1}, Sacrifice Scrabbling Claws: Exile target card from a graveyard. Draw a card.","artist":"James Paick"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc67c","set":"Ravnica Allegiance","number":"239",
    "name":"Screaming Shield","type":"Artifact — Equipment","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Equipped creature gets +0/+3 and has \"{2}, {T}: Target player puts the top three cards of their library into their graveyard.\" Equip {3} ({3}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc67d","set":"Ravnica Allegiance","number":"218",
    "name":"Scuttlegator","type":"Creature — Crab Turtle Crocodile","manaCost":"{4}{G/U}{G/U}","convertedManaCost":6,"power":"6","toughness":"6",
    "text":"Defender {6}{G/U}{G/U}: Adapt 3. (If this creature has no +1/+1 counters on it, put three +1/+1 counters on it.) As long as Scuttlegator has a +1/+1 counter on it, it can attack as though it didn't have defender.","artist":"Jehan Choo"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc67e","set":"Ravnica Allegiance","number":"50",
    "name":"Senate Courier","type":"Creature — Bird","manaCost":"{2}{U}","convertedManaCost":3,"power":"1","toughness":"4",
    "text":"Flying {1}{W}: Senate Courier gains vigilance until end of turn.","artist":"Johann Bodin"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc67f","set":"Ravnica Allegiance","number":"219",
    "name":"Senate Griffin","type":"Creature — Griffin","manaCost":"{2}{W/U}{W/U}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Flying When Senate Griffin enters the battlefield, scry 1.","artist":"Lucas Graciano"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc680","set":"Ravnica Allegiance","number":"204",
    "name":"Senate Guildmage","type":"Creature — Human Wizard","manaCost":"{W}{U}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{W}, {T}: You gain 2 life. {U}, {T}: Draw a card, then discard a card.","artist":"G-host Lee"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc681","set":"Ravnica Allegiance","number":"20",
    "name":"Sentinel's Mark","type":"Enchantment — Aura","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Flash Enchant creature Enchanted creature gets +1/+2 and has vigilance. Addendum — When Sentinel's Mark enters the battlefield, if you cast it during your main phase, enchanted creature gains lifelink until end of turn.","artist":"Zezhou Chen"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc682","set":"Ravnica Allegiance","number":"205",
    "name":"Seraph of the Scales","type":"Creature — Angel","manaCost":"{2}{W}{B}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Flying {W}: Seraph of the Scales gains vigilance until end of turn. {B}: Seraph of the Scales gains deathtouch until end of turn. Afterlife 2 (When this creature dies, create two 1/1 white and black Spirit creature tokens with flying.)","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc683","set":"Ravnica Allegiance","number":"206",
    "name":"Sharktocrab","type":"Creature — Fish Octopus Crab","manaCost":"{2}{G}{U}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"{2}{G}{U}: Adapt 1. (If this creature has no +1/+1 counters on it, put a +1/+1 counter on it.) Whenever one or more +1/+1 counters are put on Sharktocrab, tap target creature an opponent controls. That creature doesn't untap during its controller's next untap step.","artist":"Jehan Choo"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc684","set":"Ravnica Allegiance","number":"51",
    "name":"Shimmer of Possibility","type":"Sorcery","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Look at the top four cards of your library. Put one of them into your hand and the rest on the bottom of your library in a random order.","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc685","set":"Ravnica Allegiance","number":"141",
    "name":"Silhana Wayfinder","type":"Creature — Elf Scout","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"When Silhana Wayfinder enters the battlefield, look at the top four cards of your library. You may reveal a creature or land card from among them and put it on top of your library. Put the rest on the bottom of your library in a random order.","artist":"Suzanne Helmigh"
},
{
    "types":["Enchantment"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc686","set":"Ravnica Allegiance","number":"207",
    "name":"Simic Ascendancy","type":"Enchantment","manaCost":"{G}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"{1}{G}{U}: Put a +1/+1 counter on target creature you control. Whenever one or more +1/+1 counters are put on a creature you control, put that many growth counters on Simic Ascendancy. At the beginning of your upkeep, if Simic Ascendancy has twenty or more growth counters on it, you win the game.","artist":"Izzy"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc687","set":"Ravnica Allegiance","number":"257",
    "name":"Simic Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Simic Guildgate enters the battlefield tapped. {T}: Add {G} or {U}.","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc688","set":"Ravnica Allegiance","number":"258",
    "name":"Simic Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Simic Guildgate enters the battlefield tapped. {T}: Add {G} or {U}.","artist":"Adam Paquette"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc689","set":"Ravnica Allegiance","number":"240",
    "name":"Simic Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {G} or {U}. {G/U}{G/U}{G/U}{G/U}, {T}, Sacrifice Simic Locket: Draw two cards.","artist":"Yeong-Hao Han"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc68a","set":"Ravnica Allegiance","number":"114",
    "name":"Skarrgan Hellkite","type":"Creature — Dragon","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) Flying {3}{R}: Skarrgan Hellkite deals 2 damage divided as you choose among one or two targets. Activate this ability only if Skarrgan Hellkite has a +1/+1 counter on it.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc68b","set":"Ravnica Allegiance","number":"52",
    "name":"Skatewing Spy","type":"Creature — Vedalken Rogue Mutant","manaCost":"{3}{U}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"{5}{U}: Adapt 2. (If this creature has no +1/+1 counters on it, put two +1/+1 counters on it.) Each creature you control with a +1/+1 counter on it has flying.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc68c","set":"Ravnica Allegiance","number":"115",
    "name":"Skewer the Critics","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Spectacle {R} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) Skewer the Critics deals 3 damage to any target.","artist":"Heonhwa Choe"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc68d","set":"Ravnica Allegiance","number":"53",
    "name":"Skitter Eel","type":"Creature — Fish Crab","manaCost":"{3}{U}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"{2}{U}: Adapt 2. (If this creature has no +1/+1 counters on it, put two +1/+1 counters on it.)","artist":"Mathias Kollros"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc68e","set":"Ravnica Allegiance","number":"21",
    "name":"Sky Tether","type":"Enchantment — Aura","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature has defender and loses flying.","artist":"Zezhou Chen"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc68f","set":"Ravnica Allegiance","number":"54",
    "name":"Slimebind","type":"Enchantment — Aura","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Flash Enchant creature Enchanted creature gets -4/-0.","artist":"Mark Behm"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc690","set":"Ravnica Allegiance","number":"116",
    "name":"Smelt-Ward Ignus","type":"Creature — Elemental","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"{2}{R}, Sacrifice Smelt-Ward Ignus: Gain control of target creature with power 3 or less until end of turn. Untap that creature. It gains haste until end of turn. Activate this ability only any time you could cast a sorcery.","artist":"Jehan Choo"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc691","set":"Ravnica Allegiance","number":"22",
    "name":"Smothering Tithe","type":"Enchantment","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever an opponent draws a card, that player may pay {2}. If the player doesn't, you create a Treasure token. (It's an artifact with \"{T}, Sacrifice this artifact: Add one mana of any color.\")","artist":"Mark Behm"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc692","set":"Ravnica Allegiance","number":"85",
    "name":"Spawn of Mayhem","type":"Creature — Demon","manaCost":"{2}{B}{B}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Spectacle {1}{B}{B} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.) Flying, trample At the beginning of your upkeep, Spawn of Mayhem deals 1 damage to each player. Then if you have 10 or less life, put a +1/+1 counter on Spawn of Mayhem.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc693","set":"Ravnica Allegiance","number":"117",
    "name":"Spear Spewer","type":"Creature — Goblin Warrior","manaCost":"{R}","convertedManaCost":1,"power":"0","toughness":"2",
    "text":"Defender {T}: Spear Spewer deals 1 damage to each player.","artist":"Carl Critchlow"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc694","set":"Ravnica Allegiance","number":"55",
    "name":"Sphinx of Foresight","type":"Creature — Sphinx","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"You may reveal this card from your opening hand. If you do, scry 3 at the beginning of your first upkeep. Flying At the beginning of your upkeep, scry 1.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc695","set":"Ravnica Allegiance","number":"208",
    "name":"Sphinx of New Prahv","type":"Creature — Sphinx","manaCost":"{W}{W}{U}{U}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Flying, vigilance Spells your opponents cast that target Sphinx of New Prahv cost {2} more to cast.","artist":"Sara Winters"
},
{
    "types":["Artifact","Creature"],"colors":["B","G","R","U","W"],"_id":"5dc70d5a368c7d1ec45cc696","set":"Ravnica Allegiance","number":"241",
    "name":"Sphinx of the Guildpact","type":"Artifact Creature — Sphinx","manaCost":"{7}","convertedManaCost":7,"power":"5","toughness":"5",
    "text":"Sphinx of the Guildpact is all colors. Flying Hexproof from monocolored (This creature can't be the target of monocolored spells or abilities your opponents control.)","artist":"Milivoj Ćeran"
},
{
    "types":["Instant"],"colors":["U","W"],"_id":"5dc70d5a368c7d1ec45cc697","set":"Ravnica Allegiance","number":"209",
    "name":"Sphinx's Insight","type":"Instant","manaCost":"{2}{W}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Draw two cards. Addendum — If you cast this spell during your main phase, you gain 2 life.","artist":"Scott Murphy"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc698","set":"Ravnica Allegiance","number":"118",
    "name":"Spikewheel Acrobat","type":"Creature — Human Rogue","manaCost":"{3}{R}","convertedManaCost":4,"power":"5","toughness":"2",
    "text":"Spectacle {2}{R} (You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.)","artist":"Deruchenko Alexander"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc699","set":"Ravnica Allegiance","number":"86",
    "name":"Spire Mangler","type":"Creature — Insect","manaCost":"{2}{B}","convertedManaCost":3,"power":"2","toughness":"1",
    "text":"Flash Flying When Spire Mangler enters the battlefield, target creature with flying you control gets +2/+0 until end of turn.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc69a","set":"Ravnica Allegiance","number":"23",
    "name":"Spirit of the Spires","type":"Creature — Spirit","manaCost":"{3}{W}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"Flying Other creatures you control with flying get +0/+1.","artist":"Yeong-Hao Han"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc69b","set":"Ravnica Allegiance","number":"142",
    "name":"Steeple Creeper","type":"Creature — Frog Snake","manaCost":"{2}{G}","convertedManaCost":3,"power":"4","toughness":"2",
    "text":"{3}{U}: Steeple Creeper gains flying until end of turn.","artist":"Svetlin Velinov"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc69c","set":"Ravnica Allegiance","number":"259",
    "name":"Stomping Ground","type":"Land — Mountain Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R} or {G}.) As Stomping Ground enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"James Paick"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc69d","set":"Ravnica Allegiance","number":"143",
    "name":"Stony Strength","type":"Instant","manaCost":"{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on target creature you control. Untap that creature.","artist":"Chris Seaman"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc69e","set":"Ravnica Allegiance","number":"119",
    "name":"Storm Strike","type":"Instant","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +1/+0 and gains first strike until end of turn. Scry 1.","artist":"Dmitry Burmak"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc69f","set":"Ravnica Allegiance","number":"24",
    "name":"Summary Judgment","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Summary Judgment deals 3 damage to target tapped creature. Addendum — If you cast this spell during your main phase, it deals 5 damage instead.","artist":"Deruchenko Alexander"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc6a0","set":"Ravnica Allegiance","number":"210",
    "name":"Sunder Shaman","type":"Creature — Giant Shaman","manaCost":"{R}{R}{G}{G}","convertedManaCost":4,"power":"5","toughness":"5",
    "text":"Sunder Shaman can't be blocked by more than one creature. Whenever Sunder Shaman deals combat damage to a player, destroy target artifact or enchantment that player controls.","artist":"Jason Rainville"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc6a1","set":"Ravnica Allegiance","number":"262",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc6a2","set":"Ravnica Allegiance","number":"56",
    "name":"Swirling Torrent","type":"Sorcery","manaCost":"{5}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Choose one or both — • Put target creature on top of its owner's library. • Return target creature to its owner's hand.","artist":"Ben Wootten"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc6a3","set":"Ravnica Allegiance","number":"144",
    "name":"Sylvan Brushstrider","type":"Creature — Beast","manaCost":"{2}{G}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"When Sylvan Brushstrider enters the battlefield, you gain 2 life.","artist":"Dan Scott"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc6a4","set":"Ravnica Allegiance","number":"211",
    "name":"Syndicate Guildmage","type":"Creature — Human Cleric","manaCost":"{W}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{1}{W}, {T}: Tap target creature with power 4 or greater. {4}{B}, {T}: Syndicate Guildmage deals 2 damage to target opponent or planeswalker.","artist":"Josh Hass"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc6a5","set":"Ravnica Allegiance","number":"25",
    "name":"Syndicate Messenger","type":"Creature — Bird","manaCost":"{3}{W}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Flying Afterlife 1 (When this creature dies, create a 1/1 white and black Spirit creature token with flying.)","artist":"Viktor Titov"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc6a6","set":"Ravnica Allegiance","number":"26",
    "name":"Tenth District Veteran","type":"Creature — Human Soldier","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Vigilance Whenever Tenth District Veteran attacks, untap another target creature you control.","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc6a7","set":"Ravnica Allegiance","number":"145",
    "name":"Territorial Boar","type":"Creature — Boar","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever a creature with power 4 or greater enters the battlefield under your control, Territorial Boar gets +1/+1 and gains vigilance until end of turn.","artist":"Dan Scott"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc6a8","set":"Ravnica Allegiance","number":"212",
    "name":"Teysa Karlov","type":"Legendary Creature — Human Advisor","manaCost":"{2}{W}{B}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"If a creature dying causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time. Creature tokens you control have vigilance and lifelink.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc6a9","set":"Ravnica Allegiance","number":"273",
    "name":"The Haunt of Hightower","type":"Legendary Creature — Vampire","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":"3","toughness":"3",
    "text":"Flying, lifelink Whenever The Haunt of Hightower attacks, defending player discards a card. Whenever a card is put into an opponent's graveyard from anywhere, put a +1/+1 counter on The Haunt of Hightower.","artist":"Lius Lasahido"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc6ab","set":"Ravnica Allegiance","number":"87",
    "name":"Thirsting Shade","type":"Creature — Shade","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Lifelink {2}{B}: Thirsting Shade gets +1/+1 until end of turn.","artist":"Seb McKinnon"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc6ac","set":"Ravnica Allegiance","number":"57",
    "name":"Thought Collapse","type":"Instant","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Counter target spell. Its controller puts the top three cards of their library into their graveyard.","artist":"Sara Winters"
},
{
    "types":["Sorcery"],"colors":["R","G"],"_id":"5dc70d5a368c7d1ec45cc6ad","set":"Ravnica Allegiance","number":"229",
    "name":"Threat","type":"Sorcery","manaCost":"{2}{R}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Create a 4/4 red and green Beast creature token with trample.","artist":"Winona Nelson"
},
{
    "types":["Enchantment"],"colors":["B","R"],"_id":"5dc70d5a368c7d1ec45cc6aa","set":"Ravnica Allegiance","number":"213",
    "name":"Theater of Horrors","type":"Enchantment","manaCost":"{1}{B}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"At the beginning of your upkeep, exile the top card of your library. During your turn, if an opponent lost life this turn, you may play cards exiled with Theater of Horrors. {3}{R}: Theater of Horrors deals 1 damage to target opponent or planeswalker.","artist":"Daarken"
},
{
    "types":["Instant"],"colors":["R","G"],"_id":"5dc70d5a368c7d1ec45cc6ae","set":"Ravnica Allegiance","number":"229",
    "name":"Thrash","type":"Instant","manaCost":"{R/G}{R/G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Target creature you control deals damage equal to its power to target creature or planeswalker you don't control.","artist":"Winona Nelson"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70d5a368c7d1ec45cc6af","set":"Ravnica Allegiance","number":"120",
    "name":"Tin Street Dodger","type":"Creature — Goblin Rogue","manaCost":"{R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Haste {R}: Tin Street Dodger can't be blocked this turn except by creatures with defender.","artist":"Yeong-Hao Han"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc6b0","set":"Ravnica Allegiance","number":"146",
    "name":"Titanic Brawl","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"This spell costs {1} less to cast if it targets a creature you control with a +1/+1 counter on it. Target creature you control fights target creature you don't control. (Each deals damage equal to its power to the other.)","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc6b1","set":"Ravnica Allegiance","number":"27",
    "name":"Tithe Taker","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"During your turn, spells your opponents cast cost {1} more to cast and abilities your opponents activate cost {1} more to activate unless they're mana abilities. Afterlife 1 (When this creature dies, create a 1/1 white and black Spirit creature token with flying.)","artist":"Aaron Miller"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70d5a368c7d1ec45cc6b2","set":"Ravnica Allegiance","number":"242",
    "name":"Tome of the Guildpact","type":"Artifact","manaCost":"{5}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Whenever you cast a multicolored spell, draw a card. {T}: Add one mana of any color.","artist":"Randy Gallegos"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc6b3","set":"Ravnica Allegiance","number":"147",
    "name":"Tower Defense","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Creatures you control get +0/+5 and gain reach until end of turn.","artist":"Craig J Spearing"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc6b5","set":"Ravnica Allegiance","number":"28",
    "name":"Twilight Panther","type":"Creature — Cat Spirit","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"{B}: Twilight Panther gains deathtouch until end of turn.","artist":"Uriah Voth"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc6b4","set":"Ravnica Allegiance","number":"148",
    "name":"Trollbred Guardian","type":"Creature — Troll Frog Warrior","manaCost":"{4}{G}","convertedManaCost":5,"power":"5","toughness":"5",
    "text":"{2}{G}: Adapt 2. (If this creature has no +1/+1 counters on it, put two +1/+1 counters on it.) Each creature you control with a +1/+1 counter on it has trample.","artist":"Mathias Kollros"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc6b6","set":"Ravnica Allegiance","number":"29",
    "name":"Unbreakable Formation","type":"Instant","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creatures you control gain indestructible until end of turn. Addendum — If you cast this spell during your main phase, put a +1/+1 counter on each of those creatures and they gain vigilance until end of turn.","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc6b7","set":"Ravnica Allegiance","number":"88",
    "name":"Undercity Scavenger","type":"Creature — Ogre Warrior","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Undercity Scavenger enters the battlefield, you may sacrifice another creature. If you do, put two +1/+1 counters on Undercity Scavenger, then scry 2.","artist":"Tomasz Jedruszek"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc6b8","set":"Ravnica Allegiance","number":"89",
    "name":"Undercity's Embrace","type":"Instant","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target opponent sacrifices a creature. If you control a creature with power 4 or greater, you gain 4 life.","artist":"Tyler Walpole"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc6b9","set":"Ravnica Allegiance","number":"58",
    "name":"Verity Circle","type":"Enchantment","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Whenever a creature an opponent controls becomes tapped, if it isn't being declared as an attacker, you may draw a card. {4}{U}: Tap target creature without flying.","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70d5a368c7d1ec45cc6ba","set":"Ravnica Allegiance","number":"90",
    "name":"Vindictive Vampire","type":"Creature — Vampire","manaCost":"{3}{B}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Whenever another creature you control dies, Vindictive Vampire deals 1 damage to each opponent and you gain 1 life.","artist":"Randy Gallegos"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70d5a368c7d1ec45cc6bb","set":"Ravnica Allegiance","number":"220",
    "name":"Vizkopa Vampire","type":"Creature — Vampire","manaCost":"{2}{W/B}","convertedManaCost":3,"power":"3","toughness":"1",
    "text":"Lifelink","artist":"Winona Nelson"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc6bc","set":"Ravnica Allegiance","number":"59",
    "name":"Wall of Lost Thoughts","type":"Creature — Wall","manaCost":"{1}{U}","convertedManaCost":2,"power":"0","toughness":"4",
    "text":"Defender When Wall of Lost Thoughts enters the battlefield, target player puts the top four cards of their library into their graveyard.","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["W","U"],"_id":"5dc70d5a368c7d1ec45cc6bd","set":"Ravnica Allegiance","number":"230",
    "name":"Warden","type":"Sorcery","manaCost":"{3}{W}{U}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Create a 4/4 white and blue Sphinx creature token with flying and vigilance.","artist":"Matt Stewart"
},
{
    "types":["Instant"],"colors":["W","U"],"_id":"5dc70d5a368c7d1ec45cc6be","set":"Ravnica Allegiance","number":"230",
    "name":"Warrant","type":"Instant","manaCost":"{W/U}{W/U}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Put target attacking or blocking creature on top of its owner's library.","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70d5a368c7d1ec45cc6bf","set":"Ravnica Allegiance","number":"30",
    "name":"Watchful Giant","type":"Creature — Giant Soldier","manaCost":"{5}{W}","convertedManaCost":6,"power":"3","toughness":"6",
    "text":"When Watchful Giant enters the battlefield, create a 1/1 white Human creature token.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc6c0","set":"Ravnica Allegiance","number":"149",
    "name":"Wilderness Reclamation","type":"Enchantment","manaCost":"{3}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"At the beginning of your end step, untap all lands you control.","artist":"Tyler Walpole"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70d5a368c7d1ec45cc6c1","set":"Ravnica Allegiance","number":"60",
    "name":"Windstorm Drake","type":"Creature — Drake","manaCost":"{4}{U}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Flying Other creatures you control with flying get +1/+0.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70d5a368c7d1ec45cc6c2","set":"Ravnica Allegiance","number":"150",
    "name":"Wrecking Beast","type":"Creature — Beast","manaCost":"{5}{G}{G}","convertedManaCost":7,"power":"6","toughness":"6",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.) Trample","artist":"Izzy"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70d5a368c7d1ec45cc6c3","set":"Ravnica Allegiance","number":"214",
    "name":"Zegana, Utopian Speaker","type":"Legendary Creature — Merfolk Wizard","manaCost":"{2}{G}{U}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"When Zegana, Utopian Speaker enters the battlefield, if you control another creature with a +1/+1 counter on it, draw a card. {4}{G}{U}: Adapt 4. (If this creature has no +1/+1 counters on it, put four +1/+1 counters on it.) Each creature you control with a +1/+1 counter on it has trample.","artist":"Slawomir Maniak"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70d5a368c7d1ec45cc6c4","set":"Ravnica Allegiance","number":"215",
    "name":"Zhur-Taa Goblin","type":"Creature — Goblin Berserker","manaCost":"{R}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Riot (This creature enters the battlefield with your choice of a +1/+1 counter or haste.)","artist":"Wayne Reynolds"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9ea","set":"Throne of Eldraine","number":"1",
    "name":"Acclaimed Contender","type":"Creature — Human Knight","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"When Acclaimed Contender enters the battlefield, if you control another Knight, look at the top five cards of your library. You may reveal a Knight, Aura, Equipment, or legendary artifact card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"David Gaillet"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9eb","set":"Throne of Eldraine","number":"334",
    "name":"Acclaimed Contender","type":"Creature — Human Knight","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"When Acclaimed Contender enters the battlefield, if you control another Knight, look at the top five cards of your library. You may reveal a Knight, Aura, Equipment, or legendary artifact card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"David Gaillet"
},
{
    "types":["Creature"],"colors":["B","U","W"],"_id":"5dc70da9cf66965d08b5b9ec","set":"Throne of Eldraine","number":"324",
    "name":"Alela, Artful Provocateur","type":"Legendary Creature — Faerie Warlock","manaCost":"{1}{W}{U}{B}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Flying, deathtouch, lifelink Other creatures you control with flying get +1/+0. Whenever you cast an artifact or enchantment spell, create a 1/1 blue Faerie creature token with flying.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9ed","set":"Throne of Eldraine","number":"2",
    "name":"All That Glitters","type":"Enchantment — Aura","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets +1/+1 for each artifact and/or enchantment you control.","artist":"Iain McCaig"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5b9ee","set":"Throne of Eldraine","number":"280",
    "name":"Bring to Life","type":"Sorcery — Adventure","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target noncreature artifact you control becomes a 0/0 artifact creature. Put four +1/+1 counters on it.","artist":"Chris Seaman"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5b9ef","set":"Throne of Eldraine","number":"280",
    "name":"Animating Faerie","type":"Creature — Faerie","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying","artist":"Chris Seaman"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5b9f0","set":"Throne of Eldraine","number":"38",
    "name":"Bring to Life","type":"Sorcery — Adventure","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target noncreature artifact you control becomes a 0/0 artifact creature. Put four +1/+1 counters on it.","artist":"Joseph Meehan"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5b9f1","set":"Throne of Eldraine","number":"38",
    "name":"Animating Faerie","type":"Creature — Faerie","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying","artist":"Joseph Meehan"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5b9f2","set":"Throne of Eldraine","number":"331",
    "name":"Arcane Signet","type":"Artifact","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"{T}: Add one mana of any color in your commander's color identity.","artist":"Dan Scott"
},
{
    "types":["Artifact","Creature"],"colors":["U","W"],"_id":"5dc70da9cf66965d08b5b9f3","set":"Throne of Eldraine","number":"206",
    "name":"Arcanist's Owl","type":"Artifact Creature — Bird","manaCost":"{W/U}{W/U}{W/U}{W/U}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Flying When Arcanist's Owl enters the battlefield, look at the top four cards of your library. You may reveal an artifact or enchantment card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Véronique Meignaud"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9f4","set":"Throne of Eldraine","number":"3",
    "name":"Archon of Absolution","type":"Creature — Archon","manaCost":"{3}{W}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Flying Protection from white (This creature can't be blocked, targeted, dealt damage, enchanted, or equipped by anything white.) Creatures can't attack you or a planeswalker you control unless their controller pays {1} for each of those creatures.","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9f5","set":"Throne of Eldraine","number":"4",
    "name":"Ardenvale Paladin","type":"Creature — Human Knight","manaCost":"{3}{W}","convertedManaCost":4,"power":"2","toughness":"5",
    "text":"Adamant — If at least three white mana was spent to cast this spell, Ardenvale Paladin enters the battlefield with a +1/+1 counter on it.","artist":"Volkan Baǵa"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9f6","set":"Throne of Eldraine","number":"273",
    "name":"Dizzying Swoop","type":"Instant — Adventure","manaCost":"{1}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Tap up to two target creatures. (Then exile this card. You may cast the creature later from exile.)","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9f7","set":"Throne of Eldraine","number":"273",
    "name":"Ardenvale Tactician","type":"Creature — Human Knight","manaCost":"{1}{W}{W}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Flying","artist":"Aaron Miller"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9f8","set":"Throne of Eldraine","number":"5",
    "name":"Dizzying Swoop","type":"Instant — Adventure","manaCost":"{1}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Tap up to two target creatures. (Then exile this card. You may cast the creature later from exile.)","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5b9f9","set":"Throne of Eldraine","number":"5",
    "name":"Ardenvale Tactician","type":"Creature — Human Knight","manaCost":"{1}{W}{W}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Flying","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5b9fa","set":"Throne of Eldraine","number":"350",
    "name":"Ayara, First of Locthwain","type":"Legendary Creature — Elf Noble","manaCost":"{B}{B}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Whenever Ayara, First of Locthwain or another black creature enters the battlefield under your control, each opponent loses 1 life and you gain 1 life. {T}, Sacrifice another black creature: Draw a card.","artist":"Ryan Pancoast"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5b9fb","set":"Throne of Eldraine","number":"75",
    "name":"Ayara, First of Locthwain","type":"Legendary Creature — Elf Noble","manaCost":"{B}{B}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Whenever Ayara, First of Locthwain or another black creature enters the battlefield under your control, each opponent loses 1 life and you gain 1 life. {T}, Sacrifice another black creature: Draw a card.","artist":"Ryan Pancoast"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70da9cf66965d08b5b9fc","set":"Throne of Eldraine","number":"76",
    "name":"Bake into a Pie","type":"Instant","manaCost":"{2}{B}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy target creature. Create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Zoltan Boros"
},
{
    "types":["Instant"],"colors":["U","W"],"_id":"5dc70da9cf66965d08b5b9fd","set":"Throne of Eldraine","number":"325",
    "name":"Banish into Fable","type":"Instant","manaCost":"{4}{W}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"When you cast this spell from your hand, copy it if you control an artifact, then copy it if you control an enchantment. You may choose new targets for the copies. Return target nonland permanent to its owner's hand. You create a 2/2 white Knight creature token with vigilance.","artist":"Colin Boyer"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5b9fe","set":"Throne of Eldraine","number":"112",
    "name":"Barge In","type":"Instant","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target attacking creature gets +2/+2 until end of turn. Each attacking non-Human creature gains trample until end of turn.","artist":"Mark Behm"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5b9ff","set":"Throne of Eldraine","number":"77",
    "name":"Barrow Witches","type":"Creature — Human Warlock","manaCost":"{4}{B}","convertedManaCost":5,"power":"3","toughness":"4",
    "text":"When Barrow Witches enters the battlefield, return target Knight card from your graveyard to your hand.","artist":"Alex Brock"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba00","set":"Throne of Eldraine","number":"6",
    "name":"Bartered Cow","type":"Creature — Ox","manaCost":"{3}{W}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Bartered Cow dies or when you discard it, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Deruchenko Alexander"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba01","set":"Throne of Eldraine","number":"149",
    "name":"Fertile Footsteps","type":"Sorcery — Adventure","manaCost":"{2}{G}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Search your library for a basic land card, put it onto the battlefield, then shuffle your library. (Then exile this card. You may cast the creature later from exile.)","artist":"Jason A. Engle"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba02","set":"Throne of Eldraine","number":"149",
    "name":"Beanstalk Giant","type":"Creature — Giant","manaCost":"{6}{G}","convertedManaCost":7,"power":"*","toughness":"*",
    "text":"Beanstalk Giant's power and toughness are each equal to the number of lands you control.","artist":"Jason A. Engle"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba03","set":"Throne of Eldraine","number":"295",
    "name":"Fertile Footsteps","type":"Sorcery — Adventure","manaCost":"{2}{G}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Search your library for a basic land card, put it onto the battlefield, then shuffle your library. (Then exile this card. You may cast the creature later from exile.)","artist":"Nick Southam"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba04","set":"Throne of Eldraine","number":"295",
    "name":"Beanstalk Giant","type":"Creature — Giant","manaCost":"{6}{G}","convertedManaCost":7,"power":"*","toughness":"*",
    "text":"Beanstalk Giant's power and toughness are each equal to the number of lands you control.","artist":"Nick Southam"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba05","set":"Throne of Eldraine","number":"78",
    "name":"Belle of the Brawl","type":"Creature — Human Knight","manaCost":"{2}{B}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Menace (This creature can't be blocked except by two or more creatures.) Whenever Belle of the Brawl attacks, other Knights you control get +1/+0 until end of turn.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba06","set":"Throne of Eldraine","number":"7",
    "name":"Beloved Princess","type":"Creature — Human Noble","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Lifelink Beloved Princess can't be blocked by creatures with power 3 or greater.","artist":"Howard Lyon"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba07","set":"Throne of Eldraine","number":"351",
    "name":"Blacklance Paragon","type":"Creature — Human Knight","manaCost":"{1}{B}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":"Flash When Blacklance Paragon enters the battlefield, target Knight gains deathtouch and lifelink until end of turn.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba08","set":"Throne of Eldraine","number":"79",
    "name":"Blacklance Paragon","type":"Creature — Human Knight","manaCost":"{1}{B}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":"Flash When Blacklance Paragon enters the battlefield, target Knight gains deathtouch and lifelink until end of turn.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba09","set":"Throne of Eldraine","number":"113",
    "name":"Bloodhaze Wolverine","type":"Creature — Wolverine","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Whenever you draw your second card each turn, Bloodhaze Wolverine gets +1/+1 and gains first strike until end of turn.","artist":"Evan Shipard"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba0a","set":"Throne of Eldraine","number":"114",
    "name":"Blow Your House Down","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Up to three target creatures can't block this turn. Destroy any of them that are Walls.","artist":"Jenn Ravenna"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba0b","set":"Throne of Eldraine","number":"80",
    "name":"Bog Naughty","type":"Creature — Faerie","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Flying {2}{B}, Sacrifice a Food: Target creature gets -3/-3 until end of turn.","artist":"Mila Pesic"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba0c","set":"Throne of Eldraine","number":"115",
    "name":"Stomp","type":"Instant — Adventure","manaCost":"{1}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Damage can't be prevented this turn. Stomp deals 2 damage to any target.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba0d","set":"Throne of Eldraine","number":"115",
    "name":"Bonecrusher Giant","type":"Creature — Giant","manaCost":"{2}{R}","convertedManaCost":3,"power":"4","toughness":"3",
    "text":"Whenever Bonecrusher Giant becomes the target of a spell, Bonecrusher Giant deals 2 damage to that spell's controller.","artist":"Victor Adame Minguez"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba0e","set":"Throne of Eldraine","number":"291",
    "name":"Stomp","type":"Instant — Adventure","manaCost":"{1}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Damage can't be prevented this turn. Stomp deals 2 damage to any target.","artist":"John Severin Brassell"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba0f","set":"Throne of Eldraine","number":"291",
    "name":"Bonecrusher Giant","type":"Creature — Giant","manaCost":"{2}{R}","convertedManaCost":3,"power":"4","toughness":"3",
    "text":"Whenever Bonecrusher Giant becomes the target of a spell, Bonecrusher Giant deals 2 damage to that spell's controller.","artist":"John Severin Brassell"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba14","set":"Throne of Eldraine","number":"39",
    "name":"Brazen Borrower","type":"Creature — Faerie Rogue","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":"3","toughness":"1",
    "text":"Flash Flying Brazen Borrower can block only creatures with flying.","artist":"Eric Deschamps"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba19","set":"Throne of Eldraine","number":"239",
    "name":"Castle Embereth","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Embereth enters the battlefield tapped unless you control a Mountain. {T}: Add {R}. {1}{R}{R}, {T}: Creatures you control get +1/+0 until end of turn.","artist":"Jaime Jones"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba1e","set":"Throne of Eldraine","number":"389",
    "name":"Castle Locthwain","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Locthwain enters the battlefield tapped unless you control a Swamp. {T}: Add {B}. {1}{B}{B}, {T}: Draw a card, then you lose life equal to the number of cards in your hand.","artist":"Titus Lunter"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba23","set":"Throne of Eldraine","number":"40",
    "name":"Charmed Sleep","type":"Enchantment — Aura","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Enchant creature When Charmed Sleep enters the battlefield, tap enchanted creature. Enchanted creature doesn't untap during its controller's untap step.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba10","set":"Throne of Eldraine","number":"311",
    "name":"Bramblefort Fink","type":"Creature — Ouphe","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{8}: Bramblefort Fink has base power and toughness 10/10 until end of turn. Activate this ability only if you control an Oko planeswalker.","artist":"Uriah Voth"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba11","set":"Throne of Eldraine","number":"281",
    "name":"Petty Theft","type":"Instant — Adventure","manaCost":"{1}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Return target nonland permanent an opponent controls to its owner's hand.","artist":"Iris Compiet"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba12","set":"Throne of Eldraine","number":"281",
    "name":"Brazen Borrower","type":"Creature — Faerie Rogue","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":"3","toughness":"1",
    "text":"Flash Flying Brazen Borrower can block only creatures with flying.","artist":"Iris Compiet"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba13","set":"Throne of Eldraine","number":"39",
    "name":"Petty Theft","type":"Instant — Adventure","manaCost":"{1}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Return target nonland permanent an opponent controls to its owner's hand.","artist":"Eric Deschamps"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba28","set":"Throne of Eldraine","number":"353",
    "name":"Clackbridge Troll","type":"Creature — Troll","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"8","toughness":"8",
    "text":"Trample, haste When Clackbridge Troll enters the battlefield, target opponent creates three 0/1 white Goat creature tokens. At the beginning of combat on your turn, any opponent may sacrifice a creature. If a player does, tap Clackbridge Troll, you gain 3 life, and you draw a card.","artist":"Svetlin Velinov"
},
{
    "types":["Artifact","Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba15","set":"Throne of Eldraine","number":"116",
    "name":"Brimstone Trebuchet","type":"Artifact Creature — Wall","manaCost":"{2}{R}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"Defender, reach {T}: Brimstone Trebuchet deals 1 damage to each opponent. Whenever a Knight enters the battlefield under your control, untap Brimstone Trebuchet.","artist":"Yeong-Hao Han"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba16","set":"Throne of Eldraine","number":"117",
    "name":"Burning-Yard Trainer","type":"Creature — Human Knight","manaCost":"{4}{R}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Trample, haste When Burning-Yard Trainer enters the battlefield, another target Knight you control gets +2/+2 and gains trample and haste until end of turn.","artist":"Yongjae Choi"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba18","set":"Throne of Eldraine","number":"386",
    "name":"Castle Ardenvale","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Ardenvale enters the battlefield tapped unless you control a Plains. {T}: Add {W}. {2}{W}{W}, {T}: Create a 1/1 white Human creature token.","artist":"Volkan Baǵa"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba17","set":"Throne of Eldraine","number":"238",
    "name":"Castle Ardenvale","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Ardenvale enters the battlefield tapped unless you control a Plains. {T}: Add {W}. {2}{W}{W}, {T}: Create a 1/1 white Human creature token.","artist":"Volkan Baǵa"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba1b","set":"Throne of Eldraine","number":"240",
    "name":"Castle Garenbrig","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Garenbrig enters the battlefield tapped unless you control a Forest. {T}: Add {G}. {2}{G}{G}, {T}: Add six {G}. Spend this mana only to cast creature spells or activate abilities of creatures.","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba1a","set":"Throne of Eldraine","number":"387",
    "name":"Castle Embereth","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Embereth enters the battlefield tapped unless you control a Mountain. {T}: Add {R}. {1}{R}{R}, {T}: Creatures you control get +1/+0 until end of turn.","artist":"Jaime Jones"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba1d","set":"Throne of Eldraine","number":"241",
    "name":"Castle Locthwain","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Locthwain enters the battlefield tapped unless you control a Swamp. {T}: Add {B}. {1}{B}{B}, {T}: Draw a card, then you lose life equal to the number of cards in your hand.","artist":"Titus Lunter"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba1c","set":"Throne of Eldraine","number":"388",
    "name":"Castle Garenbrig","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Garenbrig enters the battlefield tapped unless you control a Forest. {T}: Add {G}. {2}{G}{G}, {T}: Add six {G}. Spend this mana only to cast creature spells or activate abilities of creatures.","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba20","set":"Throne of Eldraine","number":"390",
    "name":"Castle Vantress","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Vantress enters the battlefield tapped unless you control an Island. {T}: Add {U}. {2}{U}{U}, {T}: Scry 2.","artist":"John Avon"
},
{
    "types":["Artifact","Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba2d","set":"Throne of Eldraine","number":"41",
    "name":"Corridor Monitor","type":"Artifact Creature — Construct","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"4",
    "text":"When Corridor Monitor enters the battlefield, untap target artifact or creature you control.","artist":"Jason Felix"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba1f","set":"Throne of Eldraine","number":"242",
    "name":"Castle Vantress","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Castle Vantress enters the battlefield tapped unless you control an Island. {T}: Add {U}. {2}{U}{U}, {T}: Scry 2.","artist":"John Avon"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba21","set":"Throne of Eldraine","number":"81",
    "name":"Cauldron Familiar","type":"Creature — Cat","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"When Cauldron Familiar enters the battlefield, each opponent loses 1 life and you gain 1 life. Sacrifice a Food: Return Cauldron Familiar from your graveyard to the battlefield.","artist":"Milivoj Ćeran"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba25","set":"Throne of Eldraine","number":"8",
    "name":"Charming Prince","type":"Creature — Human Noble","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"When Charming Prince enters the battlefield, choose one — • Scry 2. • You gain 3 life. • Exile another target creature you own. Return it to the battlefield under your control at the beginning of the next end step.","artist":"Randy Vargas"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba22","set":"Throne of Eldraine","number":"83",
    "name":"Cauldron's Gift","type":"Sorcery","manaCost":"{4}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Adamant — If at least three black mana was spent to cast this spell, put the top four cards of your library into your graveyard. You may choose a creature card in your graveyard. If you do, return it to the battlefield with an additional +1/+1 counter on it.","artist":"Anna Steinbauer"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba24","set":"Throne of Eldraine","number":"335",
    "name":"Charming Prince","type":"Creature — Human Noble","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"When Charming Prince enters the battlefield, choose one — • Scry 2. • You gain 3 life. • Exile another target creature you own. Return it to the battlefield under your control at the beginning of the next end step.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba26","set":"Throne of Eldraine","number":"319",
    "name":"Chittering Witch","type":"Creature — Human Warlock","manaCost":"{3}{B}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"When Chittering Witch enters the battlefield, create a number of 1/1 black Rat creature tokens equal to the number of opponents you have. {1}{B}, Sacrifice a creature: Target creature gets -2/-2 until end of turn.","artist":"Winona Nelson"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba2a","set":"Throne of Eldraine","number":"118",
    "name":"Claim the Firstborn","type":"Sorcery","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Gain control of target creature with converted mana cost 3 or less until end of turn. Untap that creature. It gains haste until end of turn.","artist":"Iain McCaig"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba29","set":"Throne of Eldraine","number":"84",
    "name":"Clackbridge Troll","type":"Creature — Troll","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"8","toughness":"8",
    "text":"Trample, haste When Clackbridge Troll enters the battlefield, target opponent creates three 0/1 white Goat creature tokens. At the beginning of combat on your turn, any opponent may sacrifice a creature. If a player does, tap Clackbridge Troll, you gain 3 life, and you draw a card.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["G","U","W"],"_id":"5dc70da9cf66965d08b5ba27","set":"Throne of Eldraine","number":"326",
    "name":"Chulane, Teller of Tales","type":"Legendary Creature — Human Druid","manaCost":"{2}{G}{W}{U}","convertedManaCost":5,"power":"2","toughness":"4",
    "text":"Vigilance Whenever you cast a creature spell, draw a card, then you may put a land card from your hand onto the battlefield. {3}, {T}: Return target creature you control to its owner's hand.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba32","set":"Throne of Eldraine","number":"150",
    "name":"Curious Pair","type":"Creature — Human Peasant","manaCost":"{1}{G}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":null,"artist":"Daarken"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5ba2b","set":"Throne of Eldraine","number":"216",
    "name":"Clockwork Servant","type":"Artifact Creature — Gnome","manaCost":"{3}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Adamant — When Clockwork Servant enters the battlefield, if at least three mana of the same color was spent to cast it, draw a card.","artist":"David Palumbo"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5ba2f","set":"Throne of Eldraine","number":"217",
    "name":"Crashing Drawbridge","type":"Artifact Creature — Wall","manaCost":"{2}","convertedManaCost":2,"power":"0","toughness":"4",
    "text":"Defender {T}: Creatures you control gain haste until end of turn.","artist":"Mark Behm"
},
{
    "types":["Sorcery"],"colors":["B","U"],"_id":"5dc70da9cf66965d08b5ba2e","set":"Throne of Eldraine","number":"207",
    "name":"Covetous Urge","type":"Sorcery","manaCost":"{U/B}{U/B}{U/B}{U/B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Target opponent reveals their hand. You choose a nonland card from that player's graveyard or hand and exile it. You may cast that card for as long as it remains exiled, and you may spend mana as though it were mana of any color to cast that spell.","artist":"Carmen Sinek"
},
{
    "types":["Artifact"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba30","set":"Throne of Eldraine","number":"119",
    "name":"Crystal Slipper","type":"Artifact — Equipment","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Equipped creature gets +1/+0 and has haste. Equip {1} ({1}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Howard Lyon"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba2c","set":"Throne of Eldraine","number":"333",
    "name":"Command Tower","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}: Add one mana of any color in your commander's color identity.","artist":"Evan Shipard"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba33","set":"Throne of Eldraine","number":"296",
    "name":"Treats to Share","type":"Sorcery — Adventure","manaCost":"{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Create a Food token. (Then exile this card. You may cast the creature later from exile. A Food token is an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba34","set":"Throne of Eldraine","number":"296",
    "name":"Curious Pair","type":"Creature — Human Peasant","manaCost":"{1}{G}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":null,"artist":"Josu Hernaiz"
},
{
    "types":["Sorcery"],"colors":["U","W"],"_id":"5dc70da9cf66965d08b5ba35","set":"Throne of Eldraine","number":"186",
    "name":"Dance of the Manse","type":"Sorcery","manaCost":"{X}{W}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return up to X target artifact and/or non-Aura enchantment cards each with converted mana cost X or less from your graveyard to the battlefield. If X is 6 or more, those permanents are 4/4 creatures in addition to their other types.","artist":"Yeong-Hao Han"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba31","set":"Throne of Eldraine","number":"150",
    "name":"Treats to Share","type":"Sorcery — Adventure","manaCost":"{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Create a Food token. (Then exile this card. You may cast the creature later from exile. A Food token is an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Daarken"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba37","set":"Throne of Eldraine","number":"10",
    "name":"Deafening Silence","type":"Enchantment","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Each player can't cast more than one noncreature spell each turn.","artist":"Igor Kieryluk"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba39","set":"Throne of Eldraine","number":"42",
    "name":"Didn't Say Please","type":"Instant","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Counter target spell. Its controller puts the top three cards of their library into their graveyard.","artist":"Jason A. Engle"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70da9cf66965d08b5ba38","set":"Throne of Eldraine","number":"208",
    "name":"Deathless Knight","type":"Creature — Skeleton Knight","manaCost":"{B/G}{B/G}{B/G}{B/G}","convertedManaCost":4,"power":"4","toughness":"2",
    "text":"Haste When you gain life for the first time each turn, return Deathless Knight from your graveyard to your hand.","artist":"Igor Kieryluk"
},
{
    "types":["Sorcery"],"colors":["U","W"],"_id":"5dc70da9cf66965d08b5ba36","set":"Throne of Eldraine","number":"377",
    "name":"Dance of the Manse","type":"Sorcery","manaCost":"{X}{W}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return up to X target artifact and/or non-Aura enchantment cards each with converted mana cost X or less from your graveyard to the battlefield. If X is 6 or more, those permanents are 4/4 creatures in addition to their other types.","artist":"Yeong-Hao Han"
},
{
    "types":["Enchantment"],"colors":["B","W"],"_id":"5dc70da9cf66965d08b5ba3a","set":"Throne of Eldraine","number":"187",
    "name":"Doom Foretold","type":"Enchantment","manaCost":"{2}{W}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"At the beginning of each player's upkeep, that player sacrifices a nonland, nontoken permanent. If that player can't, they discard a card, they lose 2 life, you draw a card, you gain 2 life, you create a 2/2 white Knight creature token with vigilance, then you sacrifice Doom Foretold.","artist":"Daniel Ljunggren"
},
{
    "types":["Instant"],"colors":["B","U"],"_id":"5dc70da9cf66965d08b5ba3c","set":"Throne of Eldraine","number":"188",
    "name":"Drown in the Loch","type":"Instant","manaCost":"{U}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose one — • Counter target spell with converted mana cost less than or equal to the number of cards in its controller's graveyard. • Destroy target creature with converted mana cost less than or equal to the number of cards in its controller's graveyard.","artist":"John Stanko"
},
{
    "types":["Enchantment"],"colors":["B","W"],"_id":"5dc70da9cf66965d08b5ba3b","set":"Throne of Eldraine","number":"378",
    "name":"Doom Foretold","type":"Enchantment","manaCost":"{2}{W}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"At the beginning of each player's upkeep, that player sacrifices a nonland, nontoken permanent. If that player can't, they discard a card, they lose 2 life, you draw a card, you gain 2 life, you create a 2/2 white Knight creature token with vigilance, then you sacrifice Doom Foretold.","artist":"Daniel Ljunggren"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba3d","set":"Throne of Eldraine","number":"243",
    "name":"Dwarven Mine","type":"Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.) Dwarven Mine enters the battlefield tapped unless you control three or more other Mountains. When Dwarven Mine enters the battlefield untapped, create a 1/1 red Dwarf creature token.","artist":"Alexander Forssberg"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba3e","set":"Throne of Eldraine","number":"151",
    "name":"Edgewall Innkeeper","type":"Creature — Human Peasant","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Whenever you cast a creature spell that has an Adventure, draw a card. (It doesn't need to have gone on the adventure first.)","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70da9cf66965d08b5ba3f","set":"Throne of Eldraine","number":"209",
    "name":"Elite Headhunter","type":"Creature — Human Knight","manaCost":"{B/R}{B/R}{B/R}{B/R}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Menace (This creature can't be blocked except by two or more creatures.) {B/R}{B/R}{B/R}, Sacrifice another creature or an artifact: Elite Headhunter deals 2 damage to target creature or planeswalker.","artist":"Daarken"
},
{
    "types":["Artifact"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba40","set":"Throne of Eldraine","number":"120",
    "name":"Embercleave","type":"Legendary Artifact — Equipment","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Flash This spell costs {1} less to cast for each attacking creature you control. When Embercleave enters the battlefield, attach it to target creature you control. Equipped creature gets +1/+1 and has double strike and trample. Equip {3}","artist":"Joe Slucher"
},
{
    "types":["Artifact"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba41","set":"Throne of Eldraine","number":"359",
    "name":"Embercleave","type":"Legendary Artifact — Equipment","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Flash This spell costs {1} less to cast for each attacking creature you control. When Embercleave enters the battlefield, attach it to target creature you control. Equipped creature gets +1/+1 and has double strike and trample. Equip {3}","artist":"Joe Slucher"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba42","set":"Throne of Eldraine","number":"121",
    "name":"Embereth Paladin","type":"Creature — Human Knight","manaCost":"{3}{R}","convertedManaCost":4,"power":"4","toughness":"1",
    "text":"Haste Adamant — If at least three red mana was spent to cast this spell, Embereth Paladin enters the battlefield with a +1/+1 counter on it.","artist":"Randy Vargas"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba43","set":"Throne of Eldraine","number":"122",
    "name":"Battle Display","type":"Sorcery — Adventure","manaCost":"{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy target artifact. (Then exile this card. You may cast the creature later from exile.)","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba44","set":"Throne of Eldraine","number":"122",
    "name":"Embereth Shieldbreaker","type":"Creature — Human Knight","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":null,"artist":"Randy Vargas"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba45","set":"Throne of Eldraine","number":"292",
    "name":"Battle Display","type":"Sorcery — Adventure","manaCost":"{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy target artifact. (Then exile this card. You may cast the creature later from exile.)","artist":"Jeremy Wilson"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba46","set":"Throne of Eldraine","number":"292",
    "name":"Embereth Shieldbreaker","type":"Creature — Human Knight","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":null,"artist":"Jeremy Wilson"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba47","set":"Throne of Eldraine","number":"321",
    "name":"Embereth Skyblazer","type":"Creature — Human Knight","manaCost":"{3}{R}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"As long as it's your turn, Embereth Skyblazer has flying. Whenever Embereth Skyblazer attacks, you may pay {2}{R}. If you do, creatures you control get +X/+0 until end of turn, where X is the number of opponents you have.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba48","set":"Throne of Eldraine","number":"342",
    "name":"Emry, Lurker of the Loch","type":"Legendary Creature — Merfolk Wizard","manaCost":"{2}{U}","convertedManaCost":3,"power":"1","toughness":"2",
    "text":"This spell costs {1} less to cast for each artifact you control. When Emry, Lurker of the Loch enters the battlefield, put the top four cards of your library into your graveyard. {T}: Choose target artifact card in your graveyard. You may cast that card this turn. (You still pay its costs. Timing rules still apply.)","artist":"Livia Prima"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba49","set":"Throne of Eldraine","number":"43",
    "name":"Emry, Lurker of the Loch","type":"Legendary Creature — Merfolk Wizard","manaCost":"{2}{U}","convertedManaCost":3,"power":"1","toughness":"2",
    "text":"This spell costs {1} less to cast for each artifact you control. When Emry, Lurker of the Loch enters the battlefield, put the top four cards of your library into your graveyard. {T}: Choose target artifact card in your graveyard. You may cast that card this turn. (You still pay its costs. Timing rules still apply.)","artist":"Livia Prima"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5ba4a","set":"Throne of Eldraine","number":"218",
    "name":"Enchanted Carriage","type":"Artifact — Vehicle","manaCost":"{5}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"When Enchanted Carriage enters the battlefield, create two 1/1 white Mouse creature tokens. Crew 2 (Tap any number of creatures you control with total power 2 or more: This Vehicle becomes an artifact creature until end of turn.)","artist":"Zoltan Boros"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba4b","set":"Throne of Eldraine","number":"85",
    "name":"Epic Downfall","type":"Sorcery","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Exile target creature with converted mana cost 3 or greater.","artist":"Eric Deschamps"
},
{
    "types":["Sorcery"],"colors":["G","R"],"_id":"5dc70da9cf66965d08b5ba4c","set":"Throne of Eldraine","number":"189",
    "name":"Escape to the Wilds","type":"Sorcery","manaCost":"{3}{R}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Exile the top five cards of your library. You may play cards exiled this way until the end of your next turn. You may play an additional land this turn.","artist":"Chris Ostrowski"
},
{
    "types":["Sorcery"],"colors":["G","R"],"_id":"5dc70da9cf66965d08b5ba4d","set":"Throne of Eldraine","number":"379",
    "name":"Escape to the Wilds","type":"Sorcery","manaCost":"{3}{R}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Exile the top five cards of your library. You may play cards exiled this way until the end of your next turn. You may play an additional land this turn.","artist":"Chris Ostrowski"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba4e","set":"Throne of Eldraine","number":"86",
    "name":"Eye Collector","type":"Creature — Faerie","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Flying Whenever Eye Collector deals combat damage to a player, each player puts the top card of their library into their graveyard.","artist":"Uriah Voth"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba4f","set":"Throne of Eldraine","number":"244",
    "name":"Fabled Passage","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}, Sacrifice Fabled Passage: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle your library. Then if you control four or more lands, untap that land.","artist":"Howard Lyon"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba50","set":"Throne of Eldraine","number":"391",
    "name":"Fabled Passage","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}, Sacrifice Fabled Passage: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle your library. Then if you control four or more lands, untap that land.","artist":"Howard Lyon"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba51","set":"Throne of Eldraine","number":"282",
    "name":"Granted","type":"Sorcery — Adventure","manaCost":"{3}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"You may choose a noncreature card you own from outside the game, reveal it, and put it into your hand.","artist":"Wylie Beckert"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba52","set":"Throne of Eldraine","number":"282",
    "name":"Fae of Wishes","type":"Creature — Faerie Wizard","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"4",
    "text":"Flying {1}{U}, Discard two cards: Return Fae of Wishes to its owner's hand.","artist":"Wylie Beckert"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba53","set":"Throne of Eldraine","number":"44",
    "name":"Granted","type":"Sorcery — Adventure","manaCost":"{3}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"You may choose a noncreature card you own from outside the game, reveal it, and put it into your hand.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba54","set":"Throne of Eldraine","number":"44",
    "name":"Fae of Wishes","type":"Creature — Faerie Wizard","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"4",
    "text":"Flying {1}{U}, Discard two cards: Return Fae of Wishes to its owner's hand.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70da9cf66965d08b5ba55","set":"Throne of Eldraine","number":"190",
    "name":"Faeburrow Elder","type":"Creature — Treefolk Druid","manaCost":"{1}{G}{W}","convertedManaCost":3,"power":"0","toughness":"0",
    "text":"Vigilance Faeburrow Elder gets +1/+1 for each color among permanents you control. {T}: For each color among permanents you control, add one mana of that color.","artist":"Raoul Vitale"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70da9cf66965d08b5ba56","set":"Throne of Eldraine","number":"380",
    "name":"Faeburrow Elder","type":"Creature — Treefolk Druid","manaCost":"{1}{G}{W}","convertedManaCost":3,"power":"0","toughness":"0",
    "text":"Vigilance Faeburrow Elder gets +1/+1 for each color among permanents you control. {T}: For each color among permanents you control, add one mana of that color.","artist":"Raoul Vitale"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba57","set":"Throne of Eldraine","number":"316",
    "name":"Faerie Formation","type":"Creature — Faerie","manaCost":"{4}{U}","convertedManaCost":5,"power":"5","toughness":"4",
    "text":"Flying {3}{U}: Create a 1/1 blue Faerie creature token with flying. Draw a card.","artist":"Ryan Yee"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba58","set":"Throne of Eldraine","number":"11",
    "name":"Gift of the Fae","type":"Sorcery — Adventure","manaCost":"{1}{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +2/+1 and gains flying until end of turn. (Then exile this card. You may cast the creature later from exile.)","artist":"Mila Pesic"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba59","set":"Throne of Eldraine","number":"11",
    "name":"Faerie Guidemother","type":"Creature — Faerie","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Flying","artist":"Mila Pesic"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba5a","set":"Throne of Eldraine","number":"274",
    "name":"Gift of the Fae","type":"Sorcery — Adventure","manaCost":"{1}{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +2/+1 and gains flying until end of turn. (Then exile this card. You may cast the creature later from exile.)","artist":"Chuck Lukacs"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba5b","set":"Throne of Eldraine","number":"274",
    "name":"Faerie Guidemother","type":"Creature — Faerie","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Flying","artist":"Chuck Lukacs"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba5f","set":"Throne of Eldraine","number":"153",
    "name":"Fell the Pheasant","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Fell the Pheasant deals 5 damage to target creature with flying. Create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Randy Gallegos"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba5c","set":"Throne of Eldraine","number":"45",
    "name":"Faerie Vandal","type":"Creature — Faerie Rogue","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Flash Flying Whenever you draw your second card each turn, put a +1/+1 counter on Faerie Vandal.","artist":"Paul Scott Canavan"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba5d","set":"Throne of Eldraine","number":"152",
    "name":"Feasting Troll King","type":"Creature — Troll Noble","manaCost":"{2}{G}{G}{G}{G}","convertedManaCost":6,"power":"7","toughness":"6",
    "text":"Vigilance, trample When Feasting Troll King enters the battlefield, if you cast it from your hand, create three Food tokens. (They're artifacts with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") Sacrifice three Foods: Return Feasting Troll King from your graveyard to the battlefield. Activate this ability only during your turn.","artist":"Nicholas Gregory"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba60","set":"Throne of Eldraine","number":"123",
    "name":"Ferocity of the Wilds","type":"Enchantment","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Attacking non-Human creatures you control get +1/+0 and have trample.","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba5e","set":"Throne of Eldraine","number":"368",
    "name":"Feasting Troll King","type":"Creature — Troll Noble","manaCost":"{2}{G}{G}{G}{G}","convertedManaCost":6,"power":"7","toughness":"6",
    "text":"Vigilance, trample When Feasting Troll King enters the battlefield, if you cast it from your hand, create three Food tokens. (They're artifacts with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") Sacrifice three Foods: Return Feasting Troll King from your graveyard to the battlefield. Activate this ability only during your turn.","artist":"Nicholas Gregory"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba62","set":"Throne of Eldraine","number":"360",
    "name":"Fervent Champion","type":"Creature — Human Knight","manaCost":"{R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"First strike, haste Whenever Fervent Champion attacks, another target attacking Knight you control gets +1/+0 until end of turn. Equip abilities you activate that target Fervent Champion cost {3} less to activate.","artist":"Steve Argyle"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba61","set":"Throne of Eldraine","number":"124",
    "name":"Fervent Champion","type":"Creature — Human Knight","manaCost":"{R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"First strike, haste Whenever Fervent Champion attacks, another target attacking Knight you control gets +1/+0 until end of turn. Equip abilities you activate that target Fervent Champion cost {3} less to activate.","artist":"Steve Argyle"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba63","set":"Throne of Eldraine","number":"87",
    "name":"Festive Funeral","type":"Instant","manaCost":"{4}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Target creature gets -X/-X until end of turn, where X is the number of cards in your graveyard.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba64","set":"Throne of Eldraine","number":"154",
    "name":"Fierce Witchstalker","type":"Creature — Wolf","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Trample When Fierce Witchstalker enters the battlefield, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Nicholas Gregory"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70da9cf66965d08b5ba65","set":"Throne of Eldraine","number":"210",
    "name":"Fireborn Knight","type":"Creature — Human Knight","manaCost":"{R/W}{R/W}{R/W}{R/W}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Double strike {R/W}{R/W}{R/W}{R/W}: Fireborn Knight gets +1/+1 until end of turn.","artist":"Ben Maier"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba66","set":"Throne of Eldraine","number":"125",
    "name":"Fires of Invention","type":"Enchantment","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"You can cast spells only during your turn and you can cast no more than two spells each turn. You may cast spells with converted mana cost less than or equal to the number of lands you control without paying their mana costs.","artist":"Stanton Feng"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba67","set":"Throne of Eldraine","number":"361",
    "name":"Fires of Invention","type":"Enchantment","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"You can cast spells only during your turn and you can cast no more than two spells each turn. You may cast spells with converted mana cost less than or equal to the number of lands you control without paying their mana costs.","artist":"Stanton Feng"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba68","set":"Throne of Eldraine","number":"155",
    "name":"Welcome Home","type":"Sorcery — Adventure","manaCost":"{5}{G}{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Create three 2/2 green Bear creature tokens. (Then exile this card. You may cast the creature later from exile.)","artist":"Gabor Szikszai"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba69","set":"Throne of Eldraine","number":"155",
    "name":"Flaxen Intruder","type":"Creature — Human Berserker","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"Whenever Flaxen Intruder deals combat damage to a player, you may sacrifice it. When you do, destroy target artifact or enchantment.","artist":"Gabor Szikszai"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba6a","set":"Throne of Eldraine","number":"297",
    "name":"Welcome Home","type":"Sorcery — Adventure","manaCost":"{5}{G}{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Create three 2/2 green Bear creature tokens. (Then exile this card. You may cast the creature later from exile.)","artist":"Omar Rayyan"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba6b","set":"Throne of Eldraine","number":"297",
    "name":"Flaxen Intruder","type":"Creature — Human Berserker","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"Whenever Flaxen Intruder deals combat damage to a player, you may sacrifice it. When you do, destroy target artifact or enchantment.","artist":"Omar Rayyan"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5ba6c","set":"Throne of Eldraine","number":"126",
    "name":"Fling","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, sacrifice a creature. Fling deals damage equal to the sacrificed creature's power to any target.","artist":"Lie Setiawan"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba6d","set":"Throne of Eldraine","number":"12",
    "name":"Flutterfox","type":"Creature — Fox","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"As long as you control an artifact or enchantment, Flutterfox has flying.","artist":"Lucas Graciano"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba6e","set":"Throne of Eldraine","number":"343",
    "name":"Folio of Fancies","type":"Artifact","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Players have no maximum hand size. {X}{X}, {T}: Each player draws X cards. {2}{U}, {T}: Each opponent puts a number of cards equal to the number of cards in their hand from the top of their library into their graveyard.","artist":"Colin Boyer"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba6f","set":"Throne of Eldraine","number":"46",
    "name":"Folio of Fancies","type":"Artifact","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Players have no maximum hand size. {X}{X}, {T}: Each player draws X cards. {2}{U}, {T}: Each opponent puts a number of cards equal to the number of cards in their hand from the top of their library into their graveyard.","artist":"Colin Boyer"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba70","set":"Throne of Eldraine","number":"88",
    "name":"Foreboding Fruit","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target player draws two cards and loses 2 life. Adamant — If at least three black mana was spent to cast this spell, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Drew Baker"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba71","set":"Throne of Eldraine","number":"266",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Lars Grant-West"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba72","set":"Throne of Eldraine","number":"267",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Tomasz Jedruszek"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba73","set":"Throne of Eldraine","number":"268",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Scott Murphy"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba74","set":"Throne of Eldraine","number":"269",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba75","set":"Throne of Eldraine","number":"89",
    "name":"Forever Young","type":"Sorcery","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Put any number of target creature cards from your graveyard on top of your library. Draw a card.","artist":"Volkan Baǵa"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba76","set":"Throne of Eldraine","number":"13",
    "name":"Fortifying Provisions","type":"Enchantment","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creatures you control get +0/+1. When Fortifying Provisions enters the battlefield, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Scott Murphy"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba77","set":"Throne of Eldraine","number":"286",
    "name":"Profane Insight","type":"Instant — Adventure","manaCost":"{2}{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"You draw a card and you lose 1 life. (Then exile this card. You may cast the creature later from exile.)","artist":"Rebecca On"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba78","set":"Throne of Eldraine","number":"286",
    "name":"Foulmire Knight","type":"Creature — Zombie Knight","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Deathtouch","artist":"Rebecca On"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba79","set":"Throne of Eldraine","number":"90",
    "name":"Profane Insight","type":"Instant — Adventure","manaCost":"{2}{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"You draw a card and you lose 1 life. (Then exile this card. You may cast the creature later from exile.)","artist":"Alex Brock"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba7a","set":"Throne of Eldraine","number":"90",
    "name":"Foulmire Knight","type":"Creature — Zombie Knight","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Deathtouch","artist":"Alex Brock"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba7b","set":"Throne of Eldraine","number":"47",
    "name":"Frogify","type":"Enchantment — Aura","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature loses all abilities and is a blue Frog creature with base power and toughness 1/1. (It loses all other card types and creature types.)","artist":"Chris Seaman"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba7c","set":"Throne of Eldraine","number":"344",
    "name":"Gadwick, the Wizened","type":"Legendary Creature — Human Wizard","manaCost":"{X}{U}{U}{U}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"When Gadwick, the Wizened enters the battlefield, draw X cards. Whenever you cast a blue spell, tap target nonland permanent an opponent controls.","artist":"Colin Boyer"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba7d","set":"Throne of Eldraine","number":"48",
    "name":"Gadwick, the Wizened","type":"Legendary Creature — Human Wizard","manaCost":"{X}{U}{U}{U}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"When Gadwick, the Wizened enters the battlefield, draw X cards. Whenever you cast a blue spell, tap target nonland permanent an opponent controls.","artist":"Colin Boyer"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba7e","set":"Throne of Eldraine","number":"156",
    "name":"Shield's Might","type":"Instant — Adventure","manaCost":"{1}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 until end of turn. (Then exile this card. You may cast the creature later from exile.)","artist":"Lucas Graciano"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba7f","set":"Throne of Eldraine","number":"156",
    "name":"Garenbrig Carver","type":"Creature — Human Warrior","manaCost":"{3}{G}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":null,"artist":"Lucas Graciano"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba80","set":"Throne of Eldraine","number":"298",
    "name":"Shield's Might","type":"Instant — Adventure","manaCost":"{1}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 until end of turn. (Then exile this card. You may cast the creature later from exile.)","artist":"Craig J Spearing"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba81","set":"Throne of Eldraine","number":"298",
    "name":"Garenbrig Carver","type":"Creature — Human Warrior","manaCost":"{3}{G}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":null,"artist":"Craig J Spearing"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba82","set":"Throne of Eldraine","number":"157",
    "name":"Garenbrig Paladin","type":"Creature — Giant Knight","manaCost":"{4}{G}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Adamant — If at least three green mana was spent to cast this spell, Garenbrig Paladin enters the battlefield with a +1/+1 counter on it. Garenbrig Paladin can't be blocked by creatures with power 2 or less.","artist":"Nicholas Gregory"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba83","set":"Throne of Eldraine","number":"158",
    "name":"Garenbrig Squire","type":"Creature — Human Soldier","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever you cast a creature spell that has an Adventure, Garenbrig Squire gets +1/+1 until end of turn. (It doesn't need to have gone on the adventure first.)","artist":"Dallas Williams"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba84","set":"Throne of Eldraine","number":"305",
    "name":"Garrison Griffin","type":"Creature — Griffin","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying Whenever Garrison Griffin attacks, target Knight you control gains flying until end of turn.","artist":"Jason Kang"
},
{
    "types":["Planeswalker"],"colors":["B","G"],"_id":"5dc70da9cf66965d08b5ba85","set":"Throne of Eldraine","number":"191",
    "name":"Garruk, Cursed Huntsman","type":"Legendary Planeswalker — Garruk","manaCost":"{4}{B}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[0]: Create two 2/2 black and green Wolf creature tokens with \"When this creature dies, put a loyalty counter on each Garruk you control.\" [−3]: Destroy target creature. Draw a card. [−6]: You get an emblem with \"Creatures you control get +3/+3 and have trample.\"","artist":"Eric Deschamps"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba87","set":"Throne of Eldraine","number":"14",
    "name":"Chop Down","type":"Instant — Adventure","manaCost":"{2}{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Destroy target creature with power 4 or greater. (Then exile this card. You may cast the creature later from exile.)","artist":"Jesper Ejsing"
},
{
    "types":["Planeswalker"],"colors":["B","G"],"_id":"5dc70da9cf66965d08b5ba86","set":"Throne of Eldraine","number":"270",
    "name":"Garruk, Cursed Huntsman","type":"Legendary Planeswalker — Garruk","manaCost":"{4}{B}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[0]: Create two 2/2 black and green Wolf creature tokens with \"When this creature dies, put a loyalty counter on each Garruk you control.\" [−3]: Destroy target creature. Draw a card. [−6]: You get an emblem with \"Creatures you control get +3/+3 and have trample.\"","artist":"Dmitry Burmak"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba88","set":"Throne of Eldraine","number":"14",
    "name":"Giant Killer","type":"Creature — Human Peasant","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"{1}{W}, {T}: Tap target creature.","artist":"Jesper Ejsing"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba89","set":"Throne of Eldraine","number":"275",
    "name":"Chop Down","type":"Instant — Adventure","manaCost":"{2}{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Destroy target creature with power 4 or greater. (Then exile this card. You may cast the creature later from exile.)","artist":"Shawn Wood"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba8a","set":"Throne of Eldraine","number":"275",
    "name":"Giant Killer","type":"Creature — Human Peasant","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"{1}{W}, {T}: Tap target creature.","artist":"Shawn Wood"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba8b","set":"Throne of Eldraine","number":"159",
    "name":"Giant Opportunity","type":"Sorcery","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You may sacrifice two Foods. If you do, create a 7/7 green Giant creature token. Otherwise, create three Food tokens. (They're artifacts with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"James Paick"
},
{
    "types":["Artifact"],"colors":["B"],"_id":"5dc70da9cf66965d08b5ba8c","set":"Throne of Eldraine","number":"91",
    "name":"Giant's Skewer","type":"Artifact — Equipment","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Equipped creature gets +2/+1. Whenever equipped creature deals combat damage to a creature, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") Equip {3} ({3}: Attach to target creature you control. Equip only as a sorcery.)","artist":"James Paick"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba8d","set":"Throne of Eldraine","number":"160",
    "name":"Gilded Goose","type":"Creature — Bird","manaCost":"{G}","convertedManaCost":1,"power":"0","toughness":"2",
    "text":"Flying When Gilded Goose enters the battlefield, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") {1}{G}, {T}: Create a Food token. {T}, Sacrifice a Food: Add one mana of any color.","artist":"Lindsey Look"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5ba8e","set":"Throne of Eldraine","number":"369",
    "name":"Gilded Goose","type":"Creature — Bird","manaCost":"{G}","convertedManaCost":1,"power":"0","toughness":"2",
    "text":"Flying When Gilded Goose enters the battlefield, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") {1}{G}, {T}: Create a Food token. {T}, Sacrifice a Food: Add one mana of any color.","artist":"Lindsey Look"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5ba8f","set":"Throne of Eldraine","number":"245",
    "name":"Gingerbread Cabin","type":"Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.) Gingerbread Cabin enters the battlefield tapped unless you control three or more other Forests. When Gingerbread Cabin enters the battlefield untapped, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Chris Ostrowski"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5ba90","set":"Throne of Eldraine","number":"219",
    "name":"Gingerbrute","type":"Artifact Creature — Food Golem","manaCost":"{1}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Haste {1}: Gingerbrute can't be blocked this turn except by creatures with haste. {2}, {T}, Sacrifice Gingerbrute: You gain 3 life.","artist":"Vincent Proce"
},
{
    "types":["Artifact"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba91","set":"Throne of Eldraine","number":"15",
    "name":"Glass Casket","type":"Artifact","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"When Glass Casket enters the battlefield, exile target creature an opponent controls with converted mana cost 3 or less until Glass Casket leaves the battlefield.","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Artifact"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba92","set":"Throne of Eldraine","number":"393",
    "name":"Glass Casket","type":"Artifact","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"When Glass Casket enters the battlefield, exile target creature an opponent controls with converted mana cost 3 or less until Glass Casket leaves the battlefield.","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70da9cf66965d08b5ba93","set":"Throne of Eldraine","number":"327",
    "name":"Gluttonous Troll","type":"Creature — Troll","manaCost":"{2}{B}{G}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Trample When Gluttonous Troll enters the battlefield, create a number of Food tokens equal to the number of opponents you have. (Food tokens are artifacts with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") {1}{G}, Sacrifice another nonland permanent: Gluttonous Troll gets +2/+2 until end of turn.","artist":"Joe Slucher"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5ba94","set":"Throne of Eldraine","number":"220",
    "name":"Golden Egg","type":"Artifact — Food","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"When Golden Egg enters the battlefield, draw a card. {1}, {T}, Sacrifice Golden Egg: Add one mana of any color. {2}, {T}, Sacrifice Golden Egg: You gain 3 life.","artist":"Lindsey Look"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70da9cf66965d08b5ba95","set":"Throne of Eldraine","number":"192",
    "name":"Grumgully, the Generous","type":"Legendary Creature — Goblin Shaman","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Each other non-Human creature you control enters the battlefield with an additional +1/+1 counter on it.","artist":"Milivoj Ćeran"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba96","set":"Throne of Eldraine","number":"16",
    "name":"Happily Ever After","type":"Enchantment","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"When Happily Ever After enters the battlefield, each player gains 5 life and draws a card. At the beginning of your upkeep, if there are five colors among permanents you control, there are six or more card types among permanents you control and/or cards in your graveyard, and your life total is greater than or equal to your starting life total, you win the game.","artist":"Matt Stewart"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba97","set":"Throne of Eldraine","number":"337",
    "name":"Happily Ever After","type":"Enchantment","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"When Happily Ever After enters the battlefield, each player gains 5 life and draws a card. At the beginning of your upkeep, if there are five colors among permanents you control, there are six or more card types among permanents you control and/or cards in your graveyard, and your life total is greater than or equal to your starting life total, you win the game.","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba98","set":"Throne of Eldraine","number":"17",
    "name":"Harmonious Archon","type":"Creature — Archon","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":"4","toughness":"5",
    "text":"Flying Non-Archon creatures have base power and toughness 3/3. When Harmonious Archon enters the battlefield, create two 1/1 white Human creature tokens.","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba99","set":"Throne of Eldraine","number":"338",
    "name":"Harmonious Archon","type":"Creature — Archon","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":"4","toughness":"5",
    "text":"Flying Non-Archon creatures have base power and toughness 3/3. When Harmonious Archon enters the battlefield, create two 1/1 white Human creature tokens.","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5ba9a","set":"Throne of Eldraine","number":"221",
    "name":"Henge Walker","type":"Artifact Creature — Golem","manaCost":"{3}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Adamant — If at least three mana of the same color was spent to cast this spell, Henge Walker enters the battlefield with a +1/+1 counter on it.","artist":"Titus Lunter"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5ba9b","set":"Throne of Eldraine","number":"222",
    "name":"Heraldic Banner","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"As Heraldic Banner enters the battlefield, choose a color. Creatures you control of the chosen color get +1/+0. {T}: Add one mana of the chosen color.","artist":"Jenn Ravenna"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba9c","set":"Throne of Eldraine","number":"18",
    "name":"Hushbringer","type":"Creature — Faerie","manaCost":"{1}{W}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Flying, lifelink Creatures entering the battlefield or dying don't cause abilities to trigger.","artist":"Bastien L. Deharme"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5ba9d","set":"Throne of Eldraine","number":"339",
    "name":"Hushbringer","type":"Creature — Faerie","manaCost":"{1}{W}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Flying, lifelink Creatures entering the battlefield or dying don't cause abilities to trigger.","artist":"Bastien L. Deharme"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba9e","set":"Throne of Eldraine","number":"283",
    "name":"Mesmeric Glare","type":"Instant — Adventure","manaCost":"{2}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Counter target spell with converted mana cost 3 or less. (Then exile this card. You may cast the creature later from exile.)","artist":"Jenn Ravenna"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5ba9f","set":"Throne of Eldraine","number":"283",
    "name":"Hypnotic Sprite","type":"Creature — Faerie","manaCost":"{U}{U}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Flying","artist":"Jenn Ravenna"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5baa0","set":"Throne of Eldraine","number":"49",
    "name":"Mesmeric Glare","type":"Instant — Adventure","manaCost":"{2}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Counter target spell with converted mana cost 3 or less. (Then exile this card. You may cast the creature later from exile.)","artist":"Irina Nordsol"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5baa1","set":"Throne of Eldraine","number":"49",
    "name":"Hypnotic Sprite","type":"Creature — Faerie","manaCost":"{U}{U}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Flying","artist":"Irina Nordsol"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5baa2","set":"Throne of Eldraine","number":"246",
    "name":"Idyllic Grange","type":"Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.) Idyllic Grange enters the battlefield tapped unless you control three or more other Plains. When Idyllic Grange enters the battlefield untapped, put a +1/+1 counter on target creature you control.","artist":"Howard Lyon"
},
{
    "types":["Enchantment"],"colors":["R","U"],"_id":"5dc70da9cf66965d08b5baa3","set":"Throne of Eldraine","number":"193",
    "name":"Improbable Alliance","type":"Enchantment","manaCost":"{U}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever you draw your second card each turn, create a 1/1 blue Faerie creature token with flying. {4}{U}{R}: Draw a card, then discard a card.","artist":"Zoltan Boros"
},
{
    "types":["Enchantment"],"colors":["R","U"],"_id":"5dc70da9cf66965d08b5baa4","set":"Throne of Eldraine","number":"396",
    "name":"Improbable Alliance","type":"Enchantment","manaCost":"{U}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever you draw your second card each turn, create a 1/1 blue Faerie creature token with flying. {4}{U}{R}: Draw a card, then discard a card.","artist":"Zoltan Boros"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5baa5","set":"Throne of Eldraine","number":"223",
    "name":"Inquisitive Puppet","type":"Artifact Creature — Construct","manaCost":"{1}","convertedManaCost":1,"power":"0","toughness":"2",
    "text":"When Inquisitive Puppet enters the battlefield, scry 1. Exile Inquisitive Puppet: Create a 1/1 white Human creature token.","artist":"Joseph Meehan"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5baa6","set":"Throne of Eldraine","number":"162",
    "name":"Insatiable Appetite","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"You may sacrifice a Food. If you do, target creature gets +5/+5 until end of turn. Otherwise, that creature gets +3/+3 until end of turn.","artist":"Nils Hamm"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70da9cf66965d08b5baa7","set":"Throne of Eldraine","number":"194",
    "name":"Inspiring Veteran","type":"Creature — Human Knight","manaCost":"{R}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Other Knights you control get +1/+1.","artist":"Scott Murphy"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70da9cf66965d08b5baa8","set":"Throne of Eldraine","number":"397",
    "name":"Inspiring Veteran","type":"Creature — Human Knight","manaCost":"{R}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Other Knights you control get +1/+1.","artist":"Scott Murphy"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5baa9","set":"Throne of Eldraine","number":"50",
    "name":"Into the Story","type":"Instant","manaCost":"{5}{U}{U}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"This spell costs {3} less to cast if an opponent has seven or more cards in their graveyard. Draw four cards.","artist":"Jason Rainville"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5baaa","set":"Throne of Eldraine","number":"127",
    "name":"Irencrag Feat","type":"Sorcery","manaCost":"{1}{R}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Add seven {R}. You can cast only one more spell this turn.","artist":"Yongjae Choi"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5baab","set":"Throne of Eldraine","number":"362",
    "name":"Irencrag Feat","type":"Sorcery","manaCost":"{1}{R}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Add seven {R}. You can cast only one more spell this turn.","artist":"Yongjae Choi"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5baac","set":"Throne of Eldraine","number":"128",
    "name":"Irencrag Pyromancer","type":"Creature — Human Wizard","manaCost":"{2}{R}","convertedManaCost":3,"power":"0","toughness":"4",
    "text":"Whenever you draw your second card each turn, Irencrag Pyromancer deals 3 damage to any target.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5baad","set":"Throne of Eldraine","number":"363",
    "name":"Irencrag Pyromancer","type":"Creature — Human Wizard","manaCost":"{2}{R}","convertedManaCost":3,"power":"0","toughness":"4",
    "text":"Whenever you draw your second card each turn, Irencrag Pyromancer deals 3 damage to any target.","artist":"Jason Rainville"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5baae","set":"Throne of Eldraine","number":"254",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"John Avon"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5baaf","set":"Throne of Eldraine","number":"255",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Lucas Graciano"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bab0","set":"Throne of Eldraine","number":"256",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Nils Hamm"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bab1","set":"Throne of Eldraine","number":"257",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Mark Poole"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bab2","set":"Throne of Eldraine","number":"129",
    "name":"Joust","type":"Sorcery","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose target creature you control and target creature you don't control. The creature you control gets +2/+1 until end of turn if it's a Knight. Then those creatures fight each other. (Each deals damage equal to its power to the other.)","artist":"Bram Sels"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bab3","set":"Throne of Eldraine","number":"224",
    "name":"Jousting Dummy","type":"Artifact Creature — Scarecrow Knight","manaCost":"{2}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"{3}: Jousting Dummy gets +1/+0 until end of turn.","artist":"Milivoj Ćeran"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bab4","set":"Throne of Eldraine","number":"163",
    "name":"Keeper of Fables","type":"Creature — Cat","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":"4","toughness":"5",
    "text":"Whenever one or more non-Human creatures you control deal combat damage to a player, draw a card.","artist":"Alex Konstad"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bab5","set":"Throne of Eldraine","number":"164",
    "name":"Kenrith's Transformation","type":"Enchantment — Aura","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature When Kenrith's Transformation enters the battlefield, draw a card. Enchanted creature loses all abilities and is a green Elk creature with base power and toughness 3/3. (It loses all other card types and creature types.)","artist":"Kimonas Theodossiou"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bab6","set":"Throne of Eldraine","number":"395",
    "name":"Kenrith's Transformation","type":"Enchantment — Aura","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature When Kenrith's Transformation enters the battlefield, draw a card. Enchanted creature loses all abilities and is a green Elk creature with base power and toughness 3/3. (It loses all other card types and creature types.)","artist":"Kimonas Theodossiou"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bab7","set":"Throne of Eldraine","number":"303",
    "name":"Kenrith, the Returned King","type":"Legendary Creature — Human Noble","manaCost":"{4}{W}","convertedManaCost":5,"power":"5","toughness":"5",
    "text":"{R}: All creatures gain trample and haste until end of turn. {1}{G}: Put a +1/+1 counter on target creature. {2}{W}: Target player gains 5 life. {3}{U}: Target player draws a card. {4}{B}: Put target creature card from a graveyard onto the battlefield under its owner's control.","artist":"Kieran Yanner"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bab8","set":"Throne of Eldraine","number":"19",
    "name":"Knight of the Keep","type":"Creature — Human Knight","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":null,"artist":"Bram Sels"
},
{
    "types":["Enchantment"],"colors":["B","W"],"_id":"5dc70da9cf66965d08b5bab9","set":"Throne of Eldraine","number":"328",
    "name":"Knights' Charge","type":"Enchantment","manaCost":"{1}{W}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Whenever a Knight you control attacks, each opponent loses 1 life and you gain 1 life. {6}{W}{B}, Sacrifice Knights' Charge: Return all Knight creature cards from your graveyard to the battlefield.","artist":"PaulScott Canavan"
},
{
    "types":["Creature"],"colors":["B","G","R"],"_id":"5dc70da9cf66965d08b5baba","set":"Throne of Eldraine","number":"329",
    "name":"Korvold, Fae-Cursed King","type":"Legendary Creature — Dragon Noble","manaCost":"{2}{B}{R}{G}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Flying Whenever Korvold, Fae-Cursed King enters the battlefield or attacks, sacrifice another permanent. Whenever you sacrifice a permanent, put a +1/+1 counter on Korvold and draw a card.","artist":"Wisnu Tan"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70da9cf66965d08b5babb","set":"Throne of Eldraine","number":"92",
    "name":"Lash of Thorns","type":"Instant","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +2/+1 and gains deathtouch until end of turn.","artist":"Jeff Simpson"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5babc","set":"Throne of Eldraine","number":"20",
    "name":"Linden, the Steadfast Queen","type":"Legendary Creature — Human Noble","manaCost":"{W}{W}{W}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Vigilance Whenever a white creature you control attacks, you gain 1 life.","artist":"Ryan Pancoast"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5babd","set":"Throne of Eldraine","number":"340",
    "name":"Linden, the Steadfast Queen","type":"Legendary Creature — Human Noble","manaCost":"{W}{W}{W}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Vigilance Whenever a white creature you control attacks, you gain 1 life.","artist":"Ryan Pancoast"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70da9cf66965d08b5babe","set":"Throne of Eldraine","number":"211",
    "name":"Loch Dragon","type":"Creature — Dragon","manaCost":"{U/R}{U/R}{U/R}{U/R}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Flying Whenever Loch Dragon enters the battlefield or attacks, you may discard a card. If you do, draw a card.","artist":"Mike Bierek"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70da9cf66965d08b5babf","set":"Throne of Eldraine","number":"195",
    "name":"Lochmere Serpent","type":"Creature — Serpent","manaCost":"{4}{U}{B}","convertedManaCost":6,"power":"7","toughness":"7",
    "text":"Flash {U}, Sacrifice an Island: Lochmere Serpent can't be blocked this turn. {B}, Sacrifice a Swamp: You gain 1 life and draw a card. {U}{B}: Exile five target cards from an opponent's graveyard. Return Lochmere Serpent from your graveyard to your hand. Activate this ability only any time you could cast a sorcery.","artist":"Sam Burley"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70da9cf66965d08b5bac0","set":"Throne of Eldraine","number":"381",
    "name":"Lochmere Serpent","type":"Creature — Serpent","manaCost":"{4}{U}{B}","convertedManaCost":6,"power":"7","toughness":"7",
    "text":"Flash {U}, Sacrifice an Island: Lochmere Serpent can't be blocked this turn. {B}, Sacrifice a Swamp: You gain 1 life and draw a card. {U}{B}: Exile five target cards from an opponent's graveyard. Return Lochmere Serpent from your graveyard to your hand. Activate this ability only any time you could cast a sorcery.","artist":"Sam Burley"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bac1","set":"Throne of Eldraine","number":"225",
    "name":"Locthwain Gargoyle","type":"Artifact Creature — Gargoyle","manaCost":"{1}","convertedManaCost":1,"power":"0","toughness":"3",
    "text":"{4}: Locthwain Gargoyle gets +2/+0 and gains flying until end of turn.","artist":"Nils Hamm"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bac2","set":"Throne of Eldraine","number":"93",
    "name":"Locthwain Paladin","type":"Creature — Human Knight","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Menace (This creature can't be blocked except by two or more creatures.) Adamant — If at least three black mana was spent to cast this spell, Locthwain Paladin enters the battlefield with a +1/+1 counter on it.","artist":"Zack Stella"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bac3","set":"Throne of Eldraine","number":"21",
    "name":"Rider in Need","type":"Sorcery — Adventure","manaCost":"{2}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Create a 2/2 white Knight creature token with vigilance. (Then exile this card. You may cast the creature later from exile.)","artist":"Winona Nelson"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bac4","set":"Throne of Eldraine","number":"21",
    "name":"Lonesome Unicorn","type":"Creature — Unicorn","manaCost":"{4}{W}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Vigilance","artist":"Winona Nelson"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bac5","set":"Throne of Eldraine","number":"276",
    "name":"Rider in Need","type":"Sorcery — Adventure","manaCost":"{2}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Create a 2/2 white Knight creature token with vigilance. (Then exile this card. You may cast the creature later from exile.)","artist":"Alayna Danner"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bac6","set":"Throne of Eldraine","number":"276",
    "name":"Lonesome Unicorn","type":"Creature — Unicorn","manaCost":"{4}{W}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Vigilance","artist":"Alayna Danner"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bac7","set":"Throne of Eldraine","number":"94",
    "name":"Lost Legion","type":"Creature — Spirit Knight","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"When Lost Legion enters the battlefield, scry 2. (Look at the top two cards of your library, then put any number of them on the bottom of your library and the rest on top in any order.)","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bac8","set":"Throne of Eldraine","number":"165",
    "name":"Heart's Desire","type":"Sorcery — Adventure","manaCost":"{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Create a 1/1 white Human creature token. (Then exile this card. You may cast the creature later from exile.)","artist":"Kev Walker"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bac9","set":"Throne of Eldraine","number":"165",
    "name":"Lovestruck Beast","type":"Creature — Beast Noble","manaCost":"{2}{G}","convertedManaCost":3,"power":"5","toughness":"5",
    "text":"Lovestruck Beast can't attack unless you control a 1/1 creature.","artist":"Kev Walker"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5baca","set":"Throne of Eldraine","number":"299",
    "name":"Heart's Desire","type":"Sorcery — Adventure","manaCost":"{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Create a 1/1 white Human creature token. (Then exile this card. You may cast the creature later from exile.)","artist":"Tyler Walpole"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bacb","set":"Throne of Eldraine","number":"299",
    "name":"Lovestruck Beast","type":"Creature — Beast Noble","manaCost":"{2}{G}","convertedManaCost":3,"power":"5","toughness":"5",
    "text":"Lovestruck Beast can't attack unless you control a 1/1 creature.","artist":"Tyler Walpole"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5bacc","set":"Throne of Eldraine","number":"226",
    "name":"Lucky Clover","type":"Artifact","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever you cast an Adventure instant or sorcery spell, copy it. You may choose new targets for the copy.","artist":"John Stanko"
},
{
    "types":["Artifact"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bacd","set":"Throne of Eldraine","number":"314",
    "name":"Mace of the Valiant","type":"Artifact — Equipment","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Equipped creature gets +1/+1 for each charge counter on Mace of the Valiant and has vigilance. Whenever a creature enters the battlefield under your control, put a charge counter on Mace of the Valiant. Equip {3}","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bace","set":"Throne of Eldraine","number":"130",
    "name":"Mad Ratter","type":"Creature — Goblin","manaCost":"{3}{R}","convertedManaCost":4,"power":"1","toughness":"2",
    "text":"Whenever you draw your second card each turn, create two 1/1 black Rat creature tokens.","artist":"Johann Bodin"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bacf","set":"Throne of Eldraine","number":"95",
    "name":"Malevolent Noble","type":"Creature — Human Noble","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{2}, Sacrifice an artifact or another creature: Put a +1/+1 counter on Malevolent Noble.","artist":"Randy Vargas"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bad0","set":"Throne of Eldraine","number":"52",
    "name":"Mantle of Tides","type":"Artifact — Equipment","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Equipped creature gets +1/+2. Whenever you draw your second card each turn, attach Mantle of Tides to target creature you control. Equip {3} ({3}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Lie Setiawan"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70da9cf66965d08b5bad1","set":"Throne of Eldraine","number":"196",
    "name":"Maraleaf Pixie","type":"Creature — Faerie","manaCost":"{G}{U}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Flying {T}: Add {G} or {U}.","artist":"Matt Cavotta"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bad2","set":"Throne of Eldraine","number":"166",
    "name":"Maraleaf Rider","type":"Creature — Elf Knight","manaCost":"{1}{G}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":"Sacrifice a Food: Target creature blocks Maraleaf Rider this turn if able.","artist":"Kieran Yanner"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bad3","set":"Throne of Eldraine","number":"96",
    "name":"Memory Theft","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target opponent reveals their hand. You choose a nonland card from it. That player discards that card. You may put a card that has an Adventure that player owns from exile into that player's graveyard.","artist":"Micah Epstein"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bad4","set":"Throne of Eldraine","number":"131",
    "name":"Haggle","type":"Instant — Adventure","manaCost":"{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You may discard a card. If you do, draw a card. (Then exile this card. You may cast the creature later from exile.)","artist":"David Gaillet"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bad5","set":"Throne of Eldraine","number":"131",
    "name":"Merchant of the Vale","type":"Creature — Human Peasant","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"{2}{R}, Discard a card: Draw a card.","artist":"David Gaillet"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bad6","set":"Throne of Eldraine","number":"293",
    "name":"Haggle","type":"Instant — Adventure","manaCost":"{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You may discard a card. If you do, draw a card. (Then exile this card. You may cast the creature later from exile.)","artist":"John Severin Brassell"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bad7","set":"Throne of Eldraine","number":"293",
    "name":"Merchant of the Vale","type":"Creature — Human Peasant","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"{2}{R}, Discard a card: Draw a card.","artist":"John Severin Brassell"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bad8","set":"Throne of Eldraine","number":"284",
    "name":"Venture Deeper","type":"Sorcery — Adventure","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target player puts the top four cards of their library into their graveyard. (Then exile this card. You may cast the creature later from exile.)","artist":"Allen Williams"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bad9","set":"Throne of Eldraine","number":"284",
    "name":"Merfolk Secretkeeper","type":"Creature — Merfolk Wizard","manaCost":"{U}","convertedManaCost":1,"power":"0","toughness":"4",
    "text":null,"artist":"Allen Williams"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bada","set":"Throne of Eldraine","number":"53",
    "name":"Venture Deeper","type":"Sorcery — Adventure","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target player puts the top four cards of their library into their graveyard. (Then exile this card. You may cast the creature later from exile.)","artist":"Jana Schirmer"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5badb","set":"Throne of Eldraine","number":"53",
    "name":"Merfolk Secretkeeper","type":"Creature — Merfolk Wizard","manaCost":"{U}","convertedManaCost":1,"power":"0","toughness":"4",
    "text":null,"artist":"Jana Schirmer"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70da9cf66965d08b5badc","set":"Throne of Eldraine","number":"346",
    "name":"Midnight Clock","type":"Artifact","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {U}. {2}{U}: Put an hour counter on Midnight Clock. At the beginning of each upkeep, put an hour counter on Midnight Clock. When the twelfth hour counter is put on Midnight Clock, shuffle your hand and graveyard into your library, then draw seven cards. Exile Midnight Clock.","artist":"Alexander Forssberg"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70da9cf66965d08b5badd","set":"Throne of Eldraine","number":"54",
    "name":"Midnight Clock","type":"Artifact","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {U}. {2}{U}: Put an hour counter on Midnight Clock. At the beginning of each upkeep, put an hour counter on Midnight Clock. When the twelfth hour counter is put on Midnight Clock, shuffle your hand and graveyard into your library, then draw seven cards. Exile Midnight Clock.","artist":"Alexander Forssberg"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bade","set":"Throne of Eldraine","number":"347",
    "name":"Mirrormade","type":"Enchantment","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You may have Mirrormade enter the battlefield as a copy of any artifact or enchantment on the battlefield.","artist":"Volkan Baǵa"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70da9cf66965d08b5badf","set":"Throne of Eldraine","number":"55",
    "name":"Mirrormade","type":"Enchantment","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You may have Mirrormade enter the battlefield as a copy of any artifact or enchantment on the battlefield.","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bae0","set":"Throne of Eldraine","number":"56",
    "name":"Mistford River Turtle","type":"Creature — Turtle","manaCost":"{3}{U}","convertedManaCost":4,"power":"1","toughness":"5",
    "text":"Whenever Mistford River Turtle attacks, another target attacking non-Human creature can't be blocked this turn.","artist":"Milivoj Ćeran"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bae1","set":"Throne of Eldraine","number":"57",
    "name":"Moonlit Scavengers","type":"Creature — Merfolk Rogue","manaCost":"{5}{U}","convertedManaCost":6,"power":"4","toughness":"5",
    "text":"When Moonlit Scavengers enters the battlefield, if you control an artifact or enchantment, return target creature an opponent controls to its owner's hand.","artist":"Miranda Meeks"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bae2","set":"Throne of Eldraine","number":"262",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Filip Burburan"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bae3","set":"Throne of Eldraine","number":"263",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Jesper Ejsing"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bae4","set":"Throne of Eldraine","number":"264",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Josu Hernaiz"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bae5","set":"Throne of Eldraine","number":"265",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Mark Poole"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bae6","set":"Throne of Eldraine","number":"287",
    "name":"Swift End","type":"Instant — Adventure","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target creature or planeswalker. You lose 2 life. (Then exile this card. You may cast the creature later from exile.)","artist":"Jenn Ravenna"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bae7","set":"Throne of Eldraine","number":"287",
    "name":"Murderous Rider","type":"Creature — Zombie Knight","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Lifelink When Murderous Rider dies, put it on the bottom of its owner's library.","artist":"Jenn Ravenna"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bae8","set":"Throne of Eldraine","number":"97",
    "name":"Swift End","type":"Instant — Adventure","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target creature or planeswalker. You lose 2 life. (Then exile this card. You may cast the creature later from exile.)","artist":"Josh Hass"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bae9","set":"Throne of Eldraine","number":"97",
    "name":"Murderous Rider","type":"Creature — Zombie Knight","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Lifelink When Murderous Rider dies, put it on the bottom of its owner's library.","artist":"Josh Hass"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5baea","set":"Throne of Eldraine","number":"22",
    "name":"Mysterious Pathlighter","type":"Creature — Faerie","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying Each creature you control that has an Adventure enters the battlefield with an additional +1/+1 counter on it. (It doesn't need to have gone on the adventure first.)","artist":"Kimonas Theodossiou"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5baeb","set":"Throne of Eldraine","number":"247",
    "name":"Mystic Sanctuary","type":"Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.) Mystic Sanctuary enters the battlefield tapped unless you control three or more other Islands. When Mystic Sanctuary enters the battlefield untapped, you may put target instant or sorcery card from your graveyard on top of your library.","artist":"Randy Vargas"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5baec","set":"Throne of Eldraine","number":"58",
    "name":"Mystical Dispute","type":"Instant","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"This spell costs {2} less to cast if it targets a blue spell. Counter target spell unless its controller pays {3}.","artist":"Ekaterina Burmak"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5baed","set":"Throne of Eldraine","number":"167",
    "name":"Oakhame Adversary","type":"Creature — Elf Warrior","manaCost":"{3}{G}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"This spell costs {2} less to cast if an opponent controls a green permanent. Deathtouch Whenever Oakhame Adversary deals combat damage to a player, draw a card.","artist":"Nicholas Gregory"
},
{
    "types":["Sorcery"],"colors":["W","G"],"_id":"5dc70da9cf66965d08b5baee","set":"Throne of Eldraine","number":"212",
    "name":"Bring Back","type":"Sorcery — Adventure","manaCost":"{G/W}{G/W}{G/W}{G/W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Create two 1/1 white Human creature tokens. (Then exile this card. You may cast the creature later from exile.)","artist":"Maddie Julyk"
},
{
    "types":["Creature"],"colors":["W","G"],"_id":"5dc70da9cf66965d08b5baef","set":"Throne of Eldraine","number":"212",
    "name":"Oakhame Ranger","type":"Creature — Elf Knight","manaCost":"{G/W}{G/W}{G/W}{G/W}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"{T}: Creatures you control get +1/+1 until end of turn.","artist":"Mitchell Malloy"
},
{
    "types":["Sorcery"],"colors":["W","G"],"_id":"5dc70da9cf66965d08b5baf0","set":"Throne of Eldraine","number":"302",
    "name":"Bring Back","type":"Sorcery — Adventure","manaCost":"{G/W}{G/W}{G/W}{G/W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Create two 1/1 white Human creature tokens. (Then exile this card. You may cast the creature later from exile.)","artist":"Omar Rayyan"
},
{
    "types":["Creature"],"colors":["W","G"],"_id":"5dc70da9cf66965d08b5baf1","set":"Throne of Eldraine","number":"302",
    "name":"Oakhame Ranger","type":"Creature — Elf Knight","manaCost":"{G/W}{G/W}{G/W}{G/W}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"{T}: Creatures you control get +1/+1 until end of turn.","artist":"Omar Rayyan"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5baf2","set":"Throne of Eldraine","number":"354",
    "name":"Oathsworn Knight","type":"Creature — Human Knight","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"0","toughness":"0",
    "text":"Oathsworn Knight enters the battlefield with four +1/+1 counters on it. Oathsworn Knight attacks each combat if able. If damage would be dealt to Oathsworn Knight while it has a +1/+1 counter on it, prevent that damage and remove a +1/+1 counter from it.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5baf3","set":"Throne of Eldraine","number":"98",
    "name":"Oathsworn Knight","type":"Creature — Human Knight","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"0","toughness":"0",
    "text":"Oathsworn Knight enters the battlefield with four +1/+1 counters on it. Oathsworn Knight attacks each combat if able. If damage would be dealt to Oathsworn Knight while it has a +1/+1 counter on it, prevent that damage and remove a +1/+1 counter from it.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5baf4","set":"Throne of Eldraine","number":"132",
    "name":"Ogre Errant","type":"Creature — Ogre Knight","manaCost":"{3}{R}","convertedManaCost":4,"power":"3","toughness":"4",
    "text":"Whenever Ogre Errant attacks, another target attacking Knight gains menace until end of turn. (It can't be blocked except by two or more creatures.)","artist":"Mitchell Malloy"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5baf5","set":"Throne of Eldraine","number":"310",
    "name":"Oko's Accomplices","type":"Creature — Faerie","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Flying","artist":"Zezhou Chen"
},
{
    "types":["Instant"],"colors":["G","U"],"_id":"5dc70da9cf66965d08b5baf6","set":"Throne of Eldraine","number":"312",
    "name":"Oko's Hospitality","type":"Instant","manaCost":"{3}{G}{U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Creatures you control have base power and toughness 3/3 until end of turn. You may search your library and/or graveyard for a card named Oko, the Trickster, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Deruchenko Alexander"
},
{
    "types":["Planeswalker"],"colors":["G","U"],"_id":"5dc70da9cf66965d08b5baf7","set":"Throne of Eldraine","number":"197",
    "name":"Oko, Thief of Crowns","type":"Legendary Planeswalker — Oko","manaCost":"{1}{G}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[+2]: Create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") [+1]: Target artifact or creature loses all abilities and becomes a green Elk creature with base power and toughness 3/3. [−5]: Exchange control of target artifact or creature you control and target creature an opponent controls with power 3 or less.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["G","U"],"_id":"5dc70da9cf66965d08b5baf8","set":"Throne of Eldraine","number":"271",
    "name":"Oko, Thief of Crowns","type":"Legendary Planeswalker — Oko","manaCost":"{1}{G}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[+2]: Create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") [+1]: Target artifact or creature loses all abilities and becomes a green Elk creature with base power and toughness 3/3. [−5]: Exchange control of target artifact or creature you control and target creature an opponent controls with power 3 or less.","artist":"Wesley Burt"
},
{
    "types":["Planeswalker"],"colors":["G","U"],"_id":"5dc70da9cf66965d08b5baf9","set":"Throne of Eldraine","number":"309",
    "name":"Oko, the Trickster","type":"Legendary Planeswalker — Oko","manaCost":"{4}{G}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+1]: Put two +1/+1 counters on up to one target creature you control. [0]: Until end of turn, Oko, the Trickster becomes a copy of target creature you control. Prevent all damage that would be dealt to him this turn. [−7]: Until end of turn, each creature you control has base power and toughness 10/10 and gains trample.","artist":"Chris Rallis"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bafa","set":"Throne of Eldraine","number":"169",
    "name":"Once Upon a Time","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"If this spell is the first spell you've cast this game, you may cast it without paying its mana cost. Look at the top five cards of your library. You may reveal a creature or land card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Matt Stewart"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bafb","set":"Throne of Eldraine","number":"371",
    "name":"Once Upon a Time","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"If this spell is the first spell you've cast this game, you may cast it without paying its mana cost. Look at the top five cards of your library. You may reveal a creature or land card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Matt Stewart"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bafc","set":"Throne of Eldraine","number":"168",
    "name":"Once and Future","type":"Instant","manaCost":"{3}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Return target card from your graveyard to your hand. Put up to one other target card from your graveyard on top of your library. Exile Once and Future. Adamant — If at least three green mana was spent to cast this spell, instead return those cards to your hand and exile Once and Future.","artist":"Nils Hamm"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bafd","set":"Throne of Eldraine","number":"133",
    "name":"Opportunistic Dragon","type":"Creature — Dragon","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Flying When Opportunistic Dragon enters the battlefield, choose target Human or artifact an opponent controls. For as long as Opportunistic Dragon remains on the battlefield, gain control of that permanent, it loses all abilities, and it can't attack or block.","artist":"Chris Rahn"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bafe","set":"Throne of Eldraine","number":"364",
    "name":"Opportunistic Dragon","type":"Creature — Dragon","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Flying When Opportunistic Dragon enters the battlefield, choose target Human or artifact an opponent controls. For as long as Opportunistic Dragon remains on the battlefield, gain control of that permanent, it loses all abilities, and it can't attack or block.","artist":"Chris Rahn"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5baff","set":"Throne of Eldraine","number":"59",
    "name":"Opt","type":"Instant","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Scry 1. (Look at the top card of your library. You may put that card on the bottom of your library.) Draw a card.","artist":"Dan Scott"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb00","set":"Throne of Eldraine","number":"288",
    "name":"Alter Fate","type":"Sorcery — Adventure","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return target creature card from your graveyard to your hand. (Then exile this card. You may cast the creature later from exile.)","artist":"Seb McKinnon"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb01","set":"Throne of Eldraine","number":"288",
    "name":"Order of Midnight","type":"Creature — Human Knight","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Flying Order of Midnight can't block.","artist":"Seb McKinnon"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb02","set":"Throne of Eldraine","number":"99",
    "name":"Alter Fate","type":"Sorcery — Adventure","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return target creature card from your graveyard to your hand. (Then exile this card. You may cast the creature later from exile.)","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb03","set":"Throne of Eldraine","number":"99",
    "name":"Order of Midnight","type":"Creature — Human Knight","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Flying Order of Midnight can't block.","artist":"Victor Adame Minguez"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb04","set":"Throne of Eldraine","number":"23",
    "name":"Outflank","type":"Instant","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Outflank deals damage to target attacking or blocking creature equal to the number of creatures you control.","artist":"Victor Adame Minguez"
},
{
    "types":["Enchantment"],"colors":["R","W"],"_id":"5dc70da9cf66965d08b5bb05","set":"Throne of Eldraine","number":"198",
    "name":"Outlaws' Merriment","type":"Enchantment","manaCost":"{1}{R}{W}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"At the beginning of your upkeep, choose one at random. Create a red and white creature token with those characteristics. • 3/1 Human Warrior with trample and haste. • 2/1 Human Cleric with lifelink and haste. • 1/2 Human Rogue with haste and \"When this creature enters the battlefield, it deals 1 damage to any target.\"","artist":"Suzanne Helmigh"
},
{
    "types":["Enchantment"],"colors":["R","W"],"_id":"5dc70da9cf66965d08b5bb06","set":"Throne of Eldraine","number":"382",
    "name":"Outlaws' Merriment","type":"Enchantment","manaCost":"{1}{R}{W}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"At the beginning of your upkeep, choose one at random. Create a red and white creature token with those characteristics. • 3/1 Human Warrior with trample and haste. • 2/1 Human Cleric with lifelink and haste. • 1/2 Human Rogue with haste and \"When this creature enters the battlefield, it deals 1 damage to any target.\"","artist":"Suzanne Helmigh"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb07","set":"Throne of Eldraine","number":"170",
    "name":"Outmuscle","type":"Sorcery","manaCost":"{3}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on target creature you control, then it fights target creature you don't control. (Each deals damage equal to its power to the other.) Adamant — If at least three green mana was spent to cast this spell, the creature you control gains indestructible until end of turn.","artist":"Viktor Titov"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb08","set":"Throne of Eldraine","number":"60",
    "name":"Overwhelmed Apprentice","type":"Creature — Human Wizard","manaCost":"{U}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"When Overwhelmed Apprentice enters the battlefield, each opponent puts the top two cards of their library into their graveyard. Then you scry 2. (Look at the top two cards of your library, then put any number of them on the bottom of your library and the rest on top in any order.)","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb09","set":"Throne of Eldraine","number":"100",
    "name":"Piper of the Swarm","type":"Creature — Human Warlock","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Rats you control have menace. {1}{B}, {T}: Create a 1/1 black Rat creature token. {2}{B}{B}, {T}, Sacrifice three Rats: Gain control of target creature.","artist":"Irina Nordsol"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb0a","set":"Throne of Eldraine","number":"355",
    "name":"Piper of the Swarm","type":"Creature — Human Warlock","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Rats you control have menace. {1}{B}, {T}: Create a 1/1 black Rat creature token. {2}{B}{B}, {T}, Sacrifice three Rats: Gain control of target creature.","artist":"Irina Nordsol"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb0b","set":"Throne of Eldraine","number":"392",
    "name":"Piper of the Swarm","type":"Creature — Human Warlock","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Rats you control have menace. {1}{B}, {T}: Create a 1/1 black Rat creature token. {2}{B}{B}, {T}, Sacrifice three Rats: Gain control of target creature.","artist":"Jesper Ejsing"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb0c","set":"Throne of Eldraine","number":"250",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Volkan Baǵa"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb0d","set":"Throne of Eldraine","number":"251",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Sidharth Chaturvedi"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb0e","set":"Throne of Eldraine","number":"252",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Alayna Danner"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb0f","set":"Throne of Eldraine","number":"253",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Howard Lyon"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb10","set":"Throne of Eldraine","number":"24",
    "name":"Prized Griffin","type":"Creature — Griffin","manaCost":"{4}{W}","convertedManaCost":5,"power":"3","toughness":"4",
    "text":"Flying","artist":"Jesper Ejsing"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bb11","set":"Throne of Eldraine","number":"227",
    "name":"Prophet of the Peak","type":"Artifact Creature — Cat","manaCost":"{6}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"When Prophet of the Peak enters the battlefield, scry 2.","artist":"Titus Lunter"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb12","set":"Throne of Eldraine","number":"285",
    "name":"Rage of Winter","type":"Sorcery — Adventure","manaCost":"{1}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Tap target creature. It doesn't untap during its controller's next untap step. (Then exile this card. You may cast the creature later from exile.)","artist":"Allen Williams"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb13","set":"Throne of Eldraine","number":"285",
    "name":"Queen of Ice","type":"Creature — Human Noble Wizard","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Whenever Queen of Ice deals combat damage to a creature, tap that creature. It doesn't untap during its controller's next untap step.","artist":"Allen Williams"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb14","set":"Throne of Eldraine","number":"61",
    "name":"Rage of Winter","type":"Sorcery — Adventure","manaCost":"{1}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Tap target creature. It doesn't untap during its controller's next untap step. (Then exile this card. You may cast the creature later from exile.)","artist":"Eric Deschamps"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb15","set":"Throne of Eldraine","number":"61",
    "name":"Queen of Ice","type":"Creature — Human Noble Wizard","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Whenever Queen of Ice deals combat damage to a creature, tap that creature. It doesn't untap during its controller's next untap step.","artist":"Eric Deschamps"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb16","set":"Throne of Eldraine","number":"171",
    "name":"Questing Beast","type":"Legendary Creature — Beast","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Vigilance, deathtouch, haste Questing Beast can't be blocked by creatures with power 2 or less. Combat damage that would be dealt by creatures you control can't be prevented. Whenever Questing Beast deals combat damage to an opponent, it deals that much damage to target planeswalker that player controls.","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb17","set":"Throne of Eldraine","number":"372",
    "name":"Questing Beast","type":"Legendary Creature — Beast","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Vigilance, deathtouch, haste Questing Beast can't be blocked by creatures with power 2 or less. Combat damage that would be dealt by creatures you control can't be prevented. Whenever Questing Beast deals combat damage to an opponent, it deals that much damage to target planeswalker that player controls.","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb18","set":"Throne of Eldraine","number":"134",
    "name":"Raging Redcap","type":"Creature — Goblin Knight","manaCost":"{2}{R}","convertedManaCost":3,"power":"1","toughness":"2",
    "text":"Double strike","artist":"Dan Scott"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb19","set":"Throne of Eldraine","number":"25",
    "name":"Rally for the Throne","type":"Instant","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Create two 1/1 white Human creature tokens. Adamant — If at least three white mana was spent to cast this spell, you gain 1 life for each creature you control.","artist":"James Paick"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70da9cf66965d08b5bb1a","set":"Throne of Eldraine","number":"213",
    "name":"Rampart Smasher","type":"Creature — Giant","manaCost":"{R/G}{R/G}{R/G}{R/G}","convertedManaCost":4,"power":"5","toughness":"5",
    "text":"Rampart Smasher can't be blocked by Knights or Walls.","artist":"Emrah Elmasli"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb1b","set":"Throne of Eldraine","number":"101",
    "name":"Rankle, Master of Pranks","type":"Legendary Creature — Faerie Rogue","manaCost":"{2}{B}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Flying, haste Whenever Rankle, Master of Pranks deals combat damage to a player, choose any number — • Each player discards a card. • Each player loses 1 life and draws a card. • Each player sacrifices a creature.","artist":"Dmitry Burmak"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb1c","set":"Throne of Eldraine","number":"356",
    "name":"Rankle, Master of Pranks","type":"Legendary Creature — Faerie Rogue","manaCost":"{2}{B}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Flying, haste Whenever Rankle, Master of Pranks deals combat damage to a player, choose any number — • Each player discards a card. • Each player loses 1 life and draws a card. • Each player sacrifices a creature.","artist":"Dmitry Burmak"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb1d","set":"Throne of Eldraine","number":"26",
    "name":"Cast Off","type":"Sorcery — Adventure","manaCost":"{3}{W}{W}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Destroy all non-Giant creatures. (Then exile this card. You may cast the creature later from exile.)","artist":"Adam Paquette"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb1e","set":"Throne of Eldraine","number":"26",
    "name":"Realm-Cloaked Giant","type":"Creature — Giant","manaCost":"{5}{W}{W}","convertedManaCost":7,"power":"7","toughness":"7",
    "text":"Vigilance","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb1f","set":"Throne of Eldraine","number":"277",
    "name":"Cast Off","type":"Sorcery — Adventure","manaCost":"{3}{W}{W}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Destroy all non-Giant creatures. (Then exile this card. You may cast the creature later from exile.)","artist":"Alayna Danner"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb20","set":"Throne of Eldraine","number":"277",
    "name":"Realm-Cloaked Giant","type":"Creature — Giant","manaCost":"{5}{W}{W}","convertedManaCost":7,"power":"7","toughness":"7",
    "text":"Vigilance","artist":"Alayna Danner"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb21","set":"Throne of Eldraine","number":"102",
    "name":"Harvest Fear","type":"Sorcery — Adventure","manaCost":"{3}{B}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Target opponent discards two cards. (Then exile this card. You may cast the creature later from exile.)","artist":"Jeff Simpson"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb22","set":"Throne of Eldraine","number":"102",
    "name":"Reaper of Night","type":"Creature — Specter","manaCost":"{5}{B}{B}","convertedManaCost":7,"power":"4","toughness":"5",
    "text":"Whenever Reaper of Night attacks, if defending player has two or fewer cards in hand, it gains flying until end of turn.","artist":"Jeff Simpson"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb23","set":"Throne of Eldraine","number":"289",
    "name":"Harvest Fear","type":"Sorcery — Adventure","manaCost":"{3}{B}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Target opponent discards two cards. (Then exile this card. You may cast the creature later from exile.)","artist":"Olena Richards"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb24","set":"Throne of Eldraine","number":"289",
    "name":"Reaper of Night","type":"Creature — Specter","manaCost":"{5}{B}{B}","convertedManaCost":7,"power":"4","toughness":"5",
    "text":"Whenever Reaper of Night attacks, if defending player has two or fewer cards in hand, it gains flying until end of turn.","artist":"Olena Richards"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb25","set":"Throne of Eldraine","number":"103",
    "name":"Reave Soul","type":"Sorcery","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy target creature with power 3 or less.","artist":"Naomi Baker"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb26","set":"Throne of Eldraine","number":"135",
    "name":"Redcap Melee","type":"Instant","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Redcap Melee deals 4 damage to target creature or planeswalker. If a nonred permanent is dealt damage this way, you sacrifice a land.","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb27","set":"Throne of Eldraine","number":"136",
    "name":"Redcap Raiders","type":"Creature — Goblin Warrior","manaCost":"{2}{R}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Whenever Redcap Raiders attacks, you may tap an untapped non-Human creature you control. If you do, Redcap Raiders gets +1/+1 and gains trample until end of turn.","artist":"Lie Setiawan"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70da9cf66965d08b5bb28","set":"Throne of Eldraine","number":"214",
    "name":"Resolute Rider","type":"Creature — Human Knight","manaCost":"{W/B}{W/B}{W/B}{W/B}","convertedManaCost":4,"power":"4","toughness":"2",
    "text":"{W/B}{W/B}: Resolute Rider gains lifelink until end of turn. {W/B}{W/B}{W/B}: Resolute Rider gains indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy it.)","artist":"Carmen Sinek"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb29","set":"Throne of Eldraine","number":"172",
    "name":"Return of the Wildspeaker","type":"Instant","manaCost":"{4}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Choose one — • Draw cards equal to the greatest power among non-Human creatures you control. • Non-Human creatures you control get +3/+3 until end of turn.","artist":"Chris Rallis"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb2a","set":"Throne of Eldraine","number":"373",
    "name":"Return of the Wildspeaker","type":"Instant","manaCost":"{4}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Choose one — • Draw cards equal to the greatest power among non-Human creatures you control. • Non-Human creatures you control get +3/+3 until end of turn.","artist":"Chris Rallis"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb2b","set":"Throne of Eldraine","number":"173",
    "name":"Return to Nature","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose one — • Destroy target artifact. • Destroy target enchantment. • Exile target card from a graveyard.","artist":"Mark Poole"
},
{
    "types":["Enchantment"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb2c","set":"Throne of Eldraine","number":"104",
    "name":"Revenge of Ravens","type":"Enchantment","manaCost":"{3}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever a creature attacks you or a planeswalker you control, that creature's controller loses 1 life and you gain 1 life.","artist":"Dmitry Burmak"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb2d","set":"Throne of Eldraine","number":"27",
    "name":"Righteousness","type":"Instant","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target blocking creature gets +7/+7 until end of turn.","artist":"Howard Lyon"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb2e","set":"Throne of Eldraine","number":"137",
    "name":"Boulder Rush","type":"Instant — Adventure","manaCost":"{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +2/+0 until end of turn. (Then exile this card. You may cast the creature later from exile.)","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb2f","set":"Throne of Eldraine","number":"137",
    "name":"Rimrock Knight","type":"Creature — Dwarf Knight","manaCost":"{1}{R}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":"Rimrock Knight can't block.","artist":"Chris Rallis"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb30","set":"Throne of Eldraine","number":"294",
    "name":"Boulder Rush","type":"Instant — Adventure","manaCost":"{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +2/+0 until end of turn. (Then exile this card. You may cast the creature later from exile.)","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb31","set":"Throne of Eldraine","number":"294",
    "name":"Rimrock Knight","type":"Creature — Dwarf Knight","manaCost":"{1}{R}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":"Rimrock Knight can't block.","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb32","set":"Throne of Eldraine","number":"138",
    "name":"Robber of the Rich","type":"Creature — Human Archer Rogue","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Reach, haste Whenever Robber of the Rich attacks, if defending player has more cards in hand than you, exile the top card of their library. During any turn you attacked with a Rogue, you may cast that card and you may spend mana as though it were mana of any color to cast that spell.","artist":"Paul Scott Canavan"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb33","set":"Throne of Eldraine","number":"365",
    "name":"Robber of the Rich","type":"Creature — Human Archer Rogue","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Reach, haste Whenever Robber of the Rich attacks, if defending player has more cards in hand than you, exile the top card of their library. During any turn you attacked with a Rogue, you may cast that card and you may spend mana as though it were mana of any color to cast that spell.","artist":"Paul Scott Canavan"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb34","set":"Throne of Eldraine","number":"174",
    "name":"Seasonal Ritual","type":"Sorcery — Adventure","manaCost":"{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Add one mana of any color. (Then exile this card. You may cast the creature later from exile.)","artist":"Johannes Voss"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb35","set":"Throne of Eldraine","number":"174",
    "name":"Rosethorn Acolyte","type":"Creature — Elf Druid","manaCost":"{2}{G}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"{T}: Add one mana of any color.","artist":"Johannes Voss"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb36","set":"Throne of Eldraine","number":"300",
    "name":"Seasonal Ritual","type":"Sorcery — Adventure","manaCost":"{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Add one mana of any color. (Then exile this card. You may cast the creature later from exile.)","artist":"Wylie Beckert"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb37","set":"Throne of Eldraine","number":"300",
    "name":"Rosethorn Acolyte","type":"Creature — Elf Druid","manaCost":"{2}{G}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"{T}: Add one mana of any color.","artist":"Wylie Beckert"
},
{
    "types":["Artifact"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb38","set":"Throne of Eldraine","number":"175",
    "name":"Rosethorn Halberd","type":"Artifact — Equipment","manaCost":"{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"When Rosethorn Halberd enters the battlefield, attach it to target non-Human creature you control. Equipped creature gets +2/+1. Equip {5} ({5}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Kari Christensen"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bb39","set":"Throne of Eldraine","number":"228",
    "name":"Roving Keep","type":"Artifact Creature — Wall","manaCost":"{7}","convertedManaCost":7,"power":"5","toughness":"7",
    "text":"Defender {7}: Roving Keep gets +2/+0 and gains trample until end of turn. It can attack this turn as though it didn't have defender.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb3a","set":"Throne of Eldraine","number":"306",
    "name":"Rowan's Battleguard","type":"Creature — Human Knight","manaCost":"{3}{R}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"First strike As long as you control a Rowan planeswalker, Rowan's Battleguard gets +3/+0.","artist":"Sara Winters"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb3b","set":"Throne of Eldraine","number":"307",
    "name":"Rowan's Stalwarts","type":"Creature — Human Knight","manaCost":"{4}{R}","convertedManaCost":5,"power":"5","toughness":"2",
    "text":"When Rowan's Stalwarts enters the battlefield, you may search your library and/or graveyard for a card named Rowan, Fearless Sparkmage, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Deruchenko Alexander"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb3c","set":"Throne of Eldraine","number":"304",
    "name":"Rowan, Fearless Sparkmage","type":"Legendary Planeswalker — Rowan","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"[+1]: Up to one target creature gets +3/+0 and gains first strike until end of turn. [−2]: Rowan, Fearless Sparkmage deals 1 damage to each of up to two target creatures. Those creatures can't block this turn. [−9]: Gain control of all creatures until end of turn. Untap them. They gain haste until end of turn.","artist":"Zack Stella"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb3d","set":"Throne of Eldraine","number":"62",
    "name":"Run Away Together","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose two target creatures controlled by different players. Return those creatures to their owners' hands.","artist":"Filip Burburan"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb3e","set":"Throne of Eldraine","number":"63",
    "name":"Sage of the Falls","type":"Creature — Merfolk Wizard","manaCost":"{4}{U}","convertedManaCost":5,"power":"2","toughness":"5",
    "text":"Whenever Sage of the Falls or another non-Human creature enters the battlefield under your control, you may draw a card. If you do, discard a card.","artist":"Nicholas Gregory"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70da9cf66965d08b5bb3f","set":"Throne of Eldraine","number":"200",
    "name":"Savvy Hunter","type":"Creature — Human Warrior","manaCost":"{1}{B}{G}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Whenever Savvy Hunter attacks or blocks, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") Sacrifice two Foods: Draw a card.","artist":"Dan Dos Santos"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5bb40","set":"Throne of Eldraine","number":"229",
    "name":"Scalding Cauldron","type":"Artifact","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"{3}, {T}, Sacrifice Scalding Cauldron: It deals 3 damage to target creature.","artist":"Craig J Spearing"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb41","set":"Throne of Eldraine","number":"139",
    "name":"Scorching Dragonfire","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Scorching Dragonfire deals 3 damage to target creature or planeswalker. If that creature or planeswalker would die this turn, exile it instead.","artist":"Eric Velhagen"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb42","set":"Throne of Eldraine","number":"140",
    "name":"Searing Barrage","type":"Instant","manaCost":"{4}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Searing Barrage deals 5 damage to target creature. Adamant — If at least three red mana was spent to cast this spell, Searing Barrage deals 3 damage to that creature's controller.","artist":"Allen Williams"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb43","set":"Throne of Eldraine","number":"141",
    "name":"Seven Dwarves","type":"Creature — Dwarf","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Seven Dwarves gets +1/+1 for each other creature named Seven Dwarves you control. A deck can have up to seven cards named Seven Dwarves.","artist":"Jason Rainville"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bb44","set":"Throne of Eldraine","number":"230",
    "name":"Shambling Suit","type":"Artifact Creature — Construct","manaCost":"{3}","convertedManaCost":3,"power":"*","toughness":"3",
    "text":"Shambling Suit's power is equal to the number of artifacts and/or enchantments you control.","artist":"Nicholas Gregory"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb45","set":"Throne of Eldraine","number":"278",
    "name":"Usher to Safety","type":"Instant — Adventure","manaCost":"{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return target permanent you control to its owner's hand. (Then exile this card. You may cast the creature later from exile.)","artist":"Craig J Spearing"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb46","set":"Throne of Eldraine","number":"278",
    "name":"Shepherd of the Flock","type":"Creature — Human Peasant","manaCost":"{1}{W}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":null,"artist":"Craig J Spearing"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb47","set":"Throne of Eldraine","number":"28",
    "name":"Usher to Safety","type":"Instant — Adventure","manaCost":"{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return target permanent you control to its owner's hand. (Then exile this card. You may cast the creature later from exile.)","artist":"Drew Baker"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb49","set":"Throne of Eldraine","number":"317",
    "name":"Shimmer Dragon","type":"Creature — Dragon","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":"5","toughness":"6",
    "text":"Flying As long as you control four or more artifacts, Shimmer Dragon has hexproof. Tap two untapped artifacts you control: Draw a card.","artist":"Lie Setiawan"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70da9cf66965d08b5bb4a","set":"Throne of Eldraine","number":"201",
    "name":"Shinechaser","type":"Creature — Faerie","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Flying, vigilance Shinechaser gets +1/+1 as long as you control an artifact. Shinechaser gets +1/+1 as long as you control an enchantment.","artist":"Evan Shipard"
},
{
    "types":["Artifact"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb4b","set":"Throne of Eldraine","number":"29",
    "name":"Shining Armor","type":"Artifact — Equipment","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Flash When Shining Armor enters the battlefield, attach it to target Knight you control. Equipped creature gets +0/+2 and has vigilance. Equip {3} ({3}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Eric Deschamps"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bb4c","set":"Throne of Eldraine","number":"231",
    "name":"Signpost Scarecrow","type":"Artifact Creature — Scarecrow","manaCost":"{4}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"Vigilance {2}: Add one mana of any color.","artist":"Jung Park"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb4e","set":"Throne of Eldraine","number":"279",
    "name":"On Alert","type":"Instant — Adventure","manaCost":"{2}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 until end of turn. Untap it. (Then exile this spell. You may cast the creature later from exile.)","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb4f","set":"Throne of Eldraine","number":"279",
    "name":"Silverflame Squire","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":null,"artist":"Josu Hernaiz"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb50","set":"Throne of Eldraine","number":"31",
    "name":"On Alert","type":"Instant — Adventure","manaCost":"{2}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 until end of turn. Untap it. (Then exile this spell. You may cast the creature later from exile.)","artist":"Lie Setiawan"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb51","set":"Throne of Eldraine","number":"31",
    "name":"Silverflame Squire","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":null,"artist":"Lie Setiawan"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb53","set":"Throne of Eldraine","number":"142",
    "name":"Skullknocker Ogre","type":"Creature — Ogre","manaCost":"{3}{R}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Whenever Skullknocker Ogre deals damage to an opponent, that player discards a card at random. If the player does, they draw a card.","artist":"Svetlin Velinov"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb54","set":"Throne of Eldraine","number":"143",
    "name":"Slaying Fire","type":"Instant","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Slaying Fire deals 3 damage to any target. Adamant — If at least three red mana was spent to cast this spell, it deals 4 damage instead.","artist":"Heonhwa Choe"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb55","set":"Throne of Eldraine","number":"394",
    "name":"Slaying Fire","type":"Instant","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Slaying Fire deals 3 damage to any target. Adamant — If at least three red mana was spent to cast this spell, it deals 4 damage instead.","artist":"Heonhwa Choe"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb56","set":"Throne of Eldraine","number":"105",
    "name":"Curry Favor","type":"Sorcery — Adventure","manaCost":"{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"You gain X life and each opponent loses X life, where X is the number of Knights you control.","artist":"Taylor Ingvarsson"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb58","set":"Throne of Eldraine","number":"290",
    "name":"Curry Favor","type":"Sorcery — Adventure","manaCost":"{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"You gain X life and each opponent loses X life, where X is the number of Knights you control.","artist":"Shawn Wood"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb59","set":"Throne of Eldraine","number":"290",
    "name":"Smitten Swordmaster","type":"Creature — Human Knight","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Lifelink","artist":"Shawn Wood"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb5a","set":"Throne of Eldraine","number":"64",
    "name":"So Tiny","type":"Enchantment — Aura","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Flash Enchant creature Enchanted creature gets -2/-0. It gets -6/-0 instead as long as its controller has seven or more cards in their graveyard.","artist":"Randy Vargas"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bb5b","set":"Throne of Eldraine","number":"232",
    "name":"Sorcerer's Broom","type":"Artifact Creature — Spirit","manaCost":"{2}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Whenever you sacrifice another permanent, you may pay {3}. If you do, create a token that's a copy of Sorcerer's Broom.","artist":"Jung Park"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5bb5d","set":"Throne of Eldraine","number":"384",
    "name":"Sorcerous Spyglass","type":"Artifact","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As Sorcerous Spyglass enters the battlefield, look at an opponent's hand, then choose any card name. Activated abilities of sources with the chosen name can't be activated unless they're mana abilities.","artist":"Aaron Miller"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb5e","set":"Throne of Eldraine","number":"106",
    "name":"Specter's Shriek","type":"Sorcery","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target opponent reveals their hand. You may choose a nonland card from it. If you do, that player exiles that card. If a nonblack card is exiled this way, exile a card from your hand.","artist":"Svetlin Velinov"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5bb5f","set":"Throne of Eldraine","number":"234",
    "name":"Spinning Wheel","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add one mana of any color. {5}, {T}: Tap target creature.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb60","set":"Throne of Eldraine","number":"176",
    "name":"Sporecap Spider","type":"Creature — Spider","manaCost":"{2}{G}","convertedManaCost":3,"power":"1","toughness":"5",
    "text":"Reach (This creature can block creatures with flying.)","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb48","set":"Throne of Eldraine","number":"28",
    "name":"Shepherd of the Flock","type":"Creature — Human Peasant","manaCost":"{1}{W}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":null,"artist":"Drew Baker"
},
{
    "types":["Artifact"],"colors":["B","R"],"_id":"5dc70da9cf66965d08b5bb62","set":"Throne of Eldraine","number":"202",
    "name":"Steelclaw Lance","type":"Artifact — Equipment","manaCost":"{B}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Equipped creature gets +2/+2. Equip Knight {1} ({1}: Attach to target Knight creature you control. Equip only as a sorcery.) Equip {3} ({3}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb63","set":"Throne of Eldraine","number":"65",
    "name":"Steelgaze Griffin","type":"Creature — Griffin","manaCost":"{4}{U}","convertedManaCost":5,"power":"2","toughness":"4",
    "text":"Flying Whenever you draw your second card each turn, Steelgaze Griffin gets +2/+0 until end of turn.","artist":"J.P. Targete"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb64","set":"Throne of Eldraine","number":"348",
    "name":"Stolen by the Fae","type":"Sorcery","manaCost":"{X}{U}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return target creature with converted mana cost X to its owner's hand. You create X 1/1 blue Faerie creature tokens with flying.","artist":"Ryan Alexander Lee"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb65","set":"Throne of Eldraine","number":"66",
    "name":"Stolen by the Fae","type":"Sorcery","manaCost":"{X}{U}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return target creature with converted mana cost X to its owner's hand. You create X 1/1 blue Faerie creature tokens with flying.","artist":"Ryan Alexander Lee"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bb67","set":"Throne of Eldraine","number":"385",
    "name":"Stonecoil Serpent","type":"Artifact Creature — Snake","manaCost":"{X}","convertedManaCost":0,"power":"0","toughness":"0",
    "text":"Reach, trample, protection from multicolored Stonecoil Serpent enters the battlefield with X +1/+1 counters on it.","artist":"Mark Poole"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70da9cf66965d08b5bb68","set":"Throne of Eldraine","number":"203",
    "name":"Stormfist Crusader","type":"Creature — Human Knight","manaCost":"{B}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Menace At the beginning of your upkeep, each player draws a card and loses 1 life.","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70da9cf66965d08b5bb69","set":"Throne of Eldraine","number":"383",
    "name":"Stormfist Crusader","type":"Creature — Human Knight","manaCost":"{B}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Menace At the beginning of your upkeep, each player draws a card and loses 1 life.","artist":"Chris Rallis"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb6a","set":"Throne of Eldraine","number":"144",
    "name":"Sundering Stroke","type":"Sorcery","manaCost":"{6}{R}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Sundering Stroke deals 7 damage divided as you choose among one, two, or three targets. If at least seven red mana was spent to cast this spell, instead Sundering Stroke deals 7 damage to each of those permanents and/or players.","artist":"Stanton Feng"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb6c","set":"Throne of Eldraine","number":"258",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Paul Scott Canavan"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb6d","set":"Throne of Eldraine","number":"259",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Daarken"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb6e","set":"Throne of Eldraine","number":"260",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Victor Adame Minguez"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb6f","set":"Throne of Eldraine","number":"261",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb71","set":"Throne of Eldraine","number":"145",
    "name":"Syr Carah, the Bold","type":"Legendary Creature — Human Knight","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"When Syr Carah, the Bold or an instant or sorcery spell you control deals damage to a player, exile the top card of your library. You may play that card this turn. {T}: Syr Carah deals 1 damage to any target.","artist":"Wisnu Tan"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb72","set":"Throne of Eldraine","number":"67",
    "name":"Syr Elenora, the Discerning","type":"Legendary Creature — Human Knight","manaCost":"{3}{U}{U}","convertedManaCost":5,"power":"*","toughness":"4",
    "text":"Syr Elenora, the Discerning's power is equal to the number of cards in your hand. When Syr Elenora enters the battlefield, draw a card. Spells your opponents cast that target Syr Elenora cost {2} more to cast.","artist":"Mila Pesic"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb73","set":"Throne of Eldraine","number":"177",
    "name":"Syr Faren, the Hengehammer","type":"Legendary Creature — Human Knight","manaCost":"{G}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever Syr Faren, the Hengehammer attacks, another target attacking creature gets +X/+X until end of turn, where X is Syr Faren's power.","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["B","R","W"],"_id":"5dc70da9cf66965d08b5bb74","set":"Throne of Eldraine","number":"330",
    "name":"Syr Gwyn, Hero of Ashvale","type":"Legendary Creature — Human Knight","manaCost":"{3}{R}{W}{B}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Vigilance, menace Whenever an equipped creature you control attacks, you draw a card and you lose 1 life. Equipment you control have equip Knight {0}.","artist":"Lie Setiawan"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb4d","set":"Throne of Eldraine","number":"30",
    "name":"Silverflame Ritual","type":"Sorcery","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on each creature you control. Adamant — If at least three white mana was spent to cast this spell, creatures you control gain vigilance until end of turn.","artist":"Jason Felix"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb76","set":"Throne of Eldraine","number":"178",
    "name":"Tall as a Beanstalk","type":"Enchantment — Aura","manaCost":"{3}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets +3/+3, has reach, and is a Giant in addition to its other types.","artist":"Emrah Elmasli"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb77","set":"Throne of Eldraine","number":"320",
    "name":"Taste of Death","type":"Sorcery","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Each player sacrifices three creatures. You create three Food tokens. (They're artifacts with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb78","set":"Throne of Eldraine","number":"108",
    "name":"Tempting Witch","type":"Creature — Human Warlock","manaCost":"{2}{B}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"When Tempting Witch enters the battlefield, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") {2}, {T}, Sacrifice a Food: Target player loses 3 life.","artist":"Mila Pesic"
},
{
    "types":["Artifact"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb79","set":"Throne of Eldraine","number":"352",
    "name":"The Cauldron of Eternity","type":"Legendary Artifact","manaCost":"{10}{B}{B}","convertedManaCost":12,"power":null,"toughness":null,
    "text":"This spell costs {2} less to cast for each creature card in your graveyard. Whenever a creature you control dies, put it on the bottom of its owner's library. {2}{B}, {T}, Pay 2 life: Return target creature card from your graveyard to the battlefield. Activate this ability only any time you could cast a sorcery.","artist":"Tomasz Jedruszek"
},
{
    "types":["Artifact"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb7b","set":"Throne of Eldraine","number":"336",
    "name":"The Circle of Loyalty","type":"Legendary Artifact","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"This spell costs {1} less to cast for each Knight you control. Creatures you control get +1/+1. Whenever you cast a legendary spell, create a 2/2 white Knight creature token with vigilance. {3}{W}, {T}: Create a 2/2 white Knight creature token with vigilance.","artist":"Bastien L. Deharme"
},
{
    "types":["Artifact"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb7c","set":"Throne of Eldraine","number":"9",
    "name":"The Circle of Loyalty","type":"Legendary Artifact","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"This spell costs {1} less to cast for each Knight you control. Creatures you control get +1/+1. Whenever you cast a legendary spell, create a 2/2 white Knight creature token with vigilance. {3}{W}, {T}: Create a 2/2 white Knight creature token with vigilance.","artist":"Bastien L. Deharme"
},
{
    "types":["Artifact"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb7d","set":"Throne of Eldraine","number":"161",
    "name":"The Great Henge","type":"Legendary Artifact","manaCost":"{7}{G}{G}","convertedManaCost":9,"power":null,"toughness":null,
    "text":"This spell costs {X} less to cast, where X is the greatest power among creatures you control. {T}: Add {G}{G}. You gain 2 life. Whenever a nontoken creature enters the battlefield under your control, put a +1/+1 counter on it and draw a card.","artist":"Adam Paquette"
},
{
    "types":["Artifact"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb7e","set":"Throne of Eldraine","number":"370",
    "name":"The Great Henge","type":"Legendary Artifact","manaCost":"{7}{G}{G}","convertedManaCost":9,"power":null,"toughness":null,
    "text":"This spell costs {X} less to cast, where X is the greatest power among creatures you control. {T}: Add {G}{G}. You gain 2 life. Whenever a nontoken creature enters the battlefield under your control, put a +1/+1 counter on it and draw a card.","artist":"Adam Paquette"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb80","set":"Throne of Eldraine","number":"51",
    "name":"The Magic Mirror","type":"Legendary Artifact","manaCost":"{6}{U}{U}{U}","convertedManaCost":9,"power":null,"toughness":null,
    "text":"This spell costs {1} less to cast for each instant and sorcery card in your graveyard. You have no maximum hand size. At the beginning of your upkeep, put a knowledge counter on The Magic Mirror, then draw a card for each knowledge counter on The Magic Mirror.","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Planeswalker"],"colors":["R","U"],"_id":"5dc70da9cf66965d08b5bb81","set":"Throne of Eldraine","number":"199",
    "name":"The Royal Scions","type":"Legendary Planeswalker — Will Rowan","manaCost":"{1}{U}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[+1]: Draw a card, then discard a card. [+1]: Target creature gets +2/+0 and gains first strike and trample until end of turn. [−8]: Draw four cards. When you do, The Royal Scions deals damage to any target equal to the number of cards in your hand.","artist":"Paul Scott Canavan"
},
{
    "types":["Planeswalker"],"colors":["R","U"],"_id":"5dc70da9cf66965d08b5bb82","set":"Throne of Eldraine","number":"272",
    "name":"The Royal Scions","type":"Legendary Planeswalker — Will Rowan","manaCost":"{1}{U}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[+1]: Draw a card, then discard a card. [+1]: Target creature gets +2/+0 and gains first strike and trample until end of turn. [−8]: Draw four cards. When you do, The Royal Scions deals damage to any target equal to the number of cards in your hand.","artist":"Howard Lyon"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb83","set":"Throne of Eldraine","number":"323",
    "name":"Thorn Mammoth","type":"Creature — Elephant","manaCost":"{5}{G}{G}","convertedManaCost":7,"power":"6","toughness":"6",
    "text":"Trample Whenever Thorn Mammoth or another creature enters the battlefield under your control, Thorn Mammoth fights up to one target creature you don't control.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb52","set":"Throne of Eldraine","number":"315",
    "name":"Silverwing Squadron","type":"Creature — Human Knight","manaCost":"{5}{W}","convertedManaCost":6,"power":"*","toughness":"*",
    "text":"Flying, vigilance Silverwing Squadron's power and toughness are each equal to the number of creatures you control. Whenever Silverwing Squadron attacks, create a number of 2/2 white Knight creature tokens with vigilance equal to the number of opponents you have.","artist":"Johannes Voss"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb85","set":"Throne of Eldraine","number":"146",
    "name":"Thrill of Possibility","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, discard a card. Draw two cards.","artist":"Steve Argyle"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70da9cf66965d08b5bb86","set":"Throne of Eldraine","number":"215",
    "name":"Thunderous Snapper","type":"Creature — Turtle Hydra","manaCost":"{G/U}{G/U}{G/U}{G/U}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Whenever you cast a spell with converted mana cost 5 or greater, draw a card.","artist":"Johann Bodin"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb87","set":"Throne of Eldraine","number":"68",
    "name":"Tome Raider","type":"Creature — Faerie","manaCost":"{2}{U}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Flying When Tome Raider enters the battlefield, draw a card.","artist":"Randy Vargas"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5bb88","set":"Throne of Eldraine","number":"332",
    "name":"Tome of Legends","type":"Artifact","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Tome of Legends enters the battlefield with a page counter on it. Whenever your commander enters the battlefield or attacks, put a page counter on Tome of Legends. {1}, {T}, Remove a page counter from Tome of Legends: Draw a card.","artist":"Mila Pesic"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb8a","set":"Throne of Eldraine","number":"367",
    "name":"Torbran, Thane of Red Fell","type":"Legendary Creature — Dwarf Noble","manaCost":"{1}{R}{R}{R}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"If a red source you control would deal damage to an opponent or a permanent an opponent controls, it deals that much damage plus 2 instead.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb8b","set":"Throne of Eldraine","number":"248",
    "name":"Tournament Grounds","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}: Add {C}. {T}: Add {R}, {W}, or {B}. Spend this mana only to cast a Knight or Equipment spell.","artist":"Cristi Balanescu"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb8c","set":"Throne of Eldraine","number":"179",
    "name":"Trail of Crumbs","type":"Enchantment","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"When Trail of Crumbs enters the battlefield, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\") Whenever you sacrifice a Food, you may pay {1}. If you do, look at the top two cards of your library. You may reveal a permanent card from among them and put it into your hand. Put the rest on the bottom of your library in any order.","artist":"Daarken"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb8d","set":"Throne of Eldraine","number":"33",
    "name":"Trapped in the Tower","type":"Enchantment — Aura","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature without flying Enchanted creature can't attack or block, and its activated abilities can't be activated.","artist":"Howard Lyon"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb57","set":"Throne of Eldraine","number":"105",
    "name":"Smitten Swordmaster","type":"Creature — Human Knight","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Lifelink","artist":"Taylor Ingvarsson"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb8f","set":"Throne of Eldraine","number":"180",
    "name":"Oaken Boon","type":"Sorcery — Adventure","manaCost":"{3}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Put two +1/+1 counters on target creature. (Then exile this card. You may cast the creature later from exile.)","artist":"Jason A. Engle"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb90","set":"Throne of Eldraine","number":"180",
    "name":"Tuinvale Treefolk","type":"Creature — Treefolk Druid","manaCost":"{5}{G}","convertedManaCost":6,"power":"6","toughness":"5",
    "text":null,"artist":"Jason A. Engle"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb91","set":"Throne of Eldraine","number":"301",
    "name":"Oaken Boon","type":"Sorcery — Adventure","manaCost":"{3}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Put two +1/+1 counters on target creature. (Then exile this card. You may cast the creature later from exile.)","artist":"James Arnold"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb92","set":"Throne of Eldraine","number":"301",
    "name":"Tuinvale Treefolk","type":"Creature — Treefolk Druid","manaCost":"{5}{G}","convertedManaCost":6,"power":"6","toughness":"5",
    "text":null,"artist":"James Arnold"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5bb5c","set":"Throne of Eldraine","number":"233",
    "name":"Sorcerous Spyglass","type":"Artifact","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As Sorcerous Spyglass enters the battlefield, look at an opponent's hand, then choose any card name. Activated abilities of sources with the chosen name can't be activated unless they're mana abilities.","artist":"Aaron Miller"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb94","set":"Throne of Eldraine","number":"70",
    "name":"Unexplained Vision","type":"Sorcery","manaCost":"{4}{U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Draw three cards. Adamant — If at least three blue mana was spent to cast this spell, scry 3.","artist":"Bram Sels"
},
{
    "types":["Artifact","Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb95","set":"Throne of Eldraine","number":"349",
    "name":"Vantress Gargoyle","type":"Artifact Creature — Gargoyle","manaCost":"{1}{U}","convertedManaCost":2,"power":"5","toughness":"4",
    "text":"Flying Vantress Gargoyle can't attack unless defending player has seven or more cards in their graveyard. Vantress Gargoyle can't block unless you have four or more cards in hand. {T}: Each player puts the top card of their library into their graveyard.","artist":"Cristi Balanescu"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb61","set":"Throne of Eldraine","number":"322",
    "name":"Steelbane Hydra","type":"Creature — Turtle Hydra","manaCost":"{X}{G}{G}","convertedManaCost":2,"power":"0","toughness":"0",
    "text":"Steelbane Hydra enters the battlefield with X +1/+1 counters on it. {2}{G}, Remove a +1/+1 counter from Steelbane Hydra: Destroy target artifact or enchantment.","artist":"Nicholas Gregory"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb97","set":"Throne of Eldraine","number":"72",
    "name":"Vantress Paladin","type":"Creature — Human Knight","manaCost":"{3}{U}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"Flying Adamant — If at least three blue mana was spent to cast this spell, Vantress Paladin enters the battlefield with an additional +1/+1 counter on it.","artist":"Lucas Graciano"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70da9cf66965d08b5bb66","set":"Throne of Eldraine","number":"235",
    "name":"Stonecoil Serpent","type":"Artifact Creature — Snake","manaCost":"{X}","convertedManaCost":0,"power":"0","toughness":"0",
    "text":"Reach, trample, protection from multicolored Stonecoil Serpent enters the battlefield with X +1/+1 counters on it.","artist":"Mark Poole"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70da9cf66965d08b5bb99","set":"Throne of Eldraine","number":"204",
    "name":"Wandermare","type":"Creature — Horse","manaCost":"{1}{G}{W}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Whenever you cast a creature spell that has an Adventure, put a +1/+1 counter on Wandermare. (It doesn't need to have gone on the adventure first.)","artist":"Kari Christensen"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5bb9a","set":"Throne of Eldraine","number":"236",
    "name":"Weapon Rack","type":"Artifact","manaCost":"{4}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Weapon Rack enters the battlefield with three +1/+1 counters on it. {T}: Move a +1/+1 counter from Weapon Rack onto target creature. Activate this ability only any time you could cast a sorcery.","artist":"Joe Slucher"
},
{
    "types":["Artifact","Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb96","set":"Throne of Eldraine","number":"71",
    "name":"Vantress Gargoyle","type":"Artifact Creature — Gargoyle","manaCost":"{1}{U}","convertedManaCost":2,"power":"5","toughness":"4",
    "text":"Flying Vantress Gargoyle can't attack unless defending player has seven or more cards in their graveyard. Vantress Gargoyle can't block unless you have four or more cards in hand. {T}: Each player puts the top card of their library into their graveyard.","artist":"Cristi Balanescu"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb9b","set":"Throne of Eldraine","number":"148",
    "name":"Weaselback Redcap","type":"Creature — Goblin Knight","manaCost":"{R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"{1}{R}: Weaselback Redcap gets +2/+0 until end of turn.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb9c","set":"Throne of Eldraine","number":"109",
    "name":"Wicked Guardian","type":"Creature — Human Noble","manaCost":"{3}{B}","convertedManaCost":4,"power":"4","toughness":"2",
    "text":"When Wicked Guardian enters the battlefield, you may have it deal 2 damage to another creature you control. If you do, draw a card.","artist":"Matt Stewart"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb6b","set":"Throne of Eldraine","number":"366",
    "name":"Sundering Stroke","type":"Sorcery","manaCost":"{6}{R}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Sundering Stroke deals 7 damage divided as you choose among one, two, or three targets. If at least seven red mana was spent to cast this spell, instead Sundering Stroke deals 7 damage to each of those permanents and/or players.","artist":"Stanton Feng"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb9e","set":"Throne of Eldraine","number":"374",
    "name":"Wicked Wolf","type":"Creature — Wolf","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Wicked Wolf enters the battlefield, it fights up to one target creature you don't control. Sacrifice a Food: Put a +1/+1 counter on Wicked Wolf. It gains indestructible until end of turn. Tap it.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb9f","set":"Throne of Eldraine","number":"182",
    "name":"Wildborn Preserver","type":"Creature — Elf Archer","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Flash Reach Whenever another non-Human creature enters the battlefield under your control, you may pay {X}. When you do, put X +1/+1 counters on Wildborn Preserver.","artist":"Lius Lasahido"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bba1","set":"Throne of Eldraine","number":"183",
    "name":"Wildwood Tracker","type":"Creature — Elf Warrior","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Whenever Wildwood Tracker attacks or blocks, if you control another non-Human creature, Wildwood Tracker gets +1/+1 until end of turn.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bba0","set":"Throne of Eldraine","number":"375",
    "name":"Wildborn Preserver","type":"Creature — Elf Archer","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Flash Reach Whenever another non-Human creature enters the battlefield under your control, you may pay {X}. When you do, put X +1/+1 counters on Wildborn Preserver.","artist":"Lius Lasahido"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb70","set":"Throne of Eldraine","number":"32",
    "name":"Syr Alin, the Lion's Claw","type":"Legendary Creature — Human Knight","manaCost":"{3}{W}{W}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"First strike Whenever Syr Alin, the Lion's Claw attacks, other creatures you control get +1/+1 until end of turn.","artist":"Paul Scott Canavan"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70da9cf66965d08b5bba3","set":"Throne of Eldraine","number":"205",
    "name":"Wintermoor Commander","type":"Creature — Human Knight","manaCost":"{W}{B}","convertedManaCost":2,"power":"2","toughness":"*",
    "text":"Deathtouch Wintermoor Commander's toughness is equal to the number of Knights you control. Whenever Wintermoor Commander attacks, another target Knight you control gains indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy it.)","artist":"Tyler Jacobson"
},
{
    "types":["Artifact"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bba4","set":"Throne of Eldraine","number":"110",
    "name":"Wishclaw Talisman","type":"Artifact","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Wishclaw Talisman enters the battlefield with three wish counters on it. {1}, {T}, Remove a wish counter from Wishclaw Talisman: Search your library for a card, put it into your hand, then shuffle your library. An opponent gains control of Wishclaw Talisman. Activate this ability only during your turn.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bba6","set":"Throne of Eldraine","number":"73",
    "name":"Wishful Merfolk","type":"Creature — Merfolk","manaCost":"{1}{U}","convertedManaCost":2,"power":"3","toughness":"2",
    "text":"Defender {1}{U}: Wishful Merfolk loses defender and becomes a Human until end of turn.","artist":"Livia Prima"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70da9cf66965d08b5bba8","set":"Throne of Eldraine","number":"237",
    "name":"Witch's Oven","type":"Artifact","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"{T}, Sacrifice a creature: Create a Food token. If the sacrificed creature's toughness was 4 or greater, create two Food tokens instead. (They're artifacts with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Alexander Forssberg"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bba9","set":"Throne of Eldraine","number":"111",
    "name":"Witch's Vengeance","type":"Sorcery","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creatures of the creature type of your choice get -3/-3 until end of turn.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb75","set":"Throne of Eldraine","number":"107",
    "name":"Syr Konrad, the Grim","type":"Legendary Creature — Human Knight","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"5","toughness":"4",
    "text":"Whenever another creature dies, or a creature card is put into a graveyard from anywhere other than the battlefield, or a creature card leaves your graveyard, Syr Konrad, the Grim deals 1 damage to each opponent. {1}{B}: Each player puts the top card of their library into their graveyard.","artist":"Anna Steinbauer"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bbab","set":"Throne of Eldraine","number":"74",
    "name":"Witching Well","type":"Artifact","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"When Witching Well enters the battlefield, scry 2. (Look at the top two cards of your library, then put any number of them on the bottom of your library and the rest on top in any order.) {3}{U}, Sacrifice Witching Well: Draw two cards.","artist":"John Avon"
},
{
    "types":["Artifact"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bba5","set":"Throne of Eldraine","number":"357",
    "name":"Wishclaw Talisman","type":"Artifact","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Wishclaw Talisman enters the battlefield with three wish counters on it. {1}, {T}, Remove a wish counter from Wishclaw Talisman: Search your library for a card, put it into your hand, then shuffle your library. An opponent gains control of Wishclaw Talisman. Activate this ability only during your turn.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bbad","set":"Throne of Eldraine","number":"318",
    "name":"Workshop Elders","type":"Creature — Human Artificer","manaCost":"{6}{U}","convertedManaCost":7,"power":"4","toughness":"4",
    "text":"Artifact creatures you control have flying. At the beginning of combat on your turn, you may have target noncreature artifact you control become a 0/0 artifact creature. If you do, put four +1/+1 counters on it.","artist":"Iain McCaig"
},
{
    "types":["Artifact"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bb7a","set":"Throne of Eldraine","number":"82",
    "name":"The Cauldron of Eternity","type":"Legendary Artifact","manaCost":"{10}{B}{B}","convertedManaCost":12,"power":null,"toughness":null,
    "text":"This spell costs {2} less to cast for each creature card in your graveyard. Whenever a creature you control dies, put it on the bottom of its owner's library. {2}{B}, {T}, Pay 2 life: Return target creature card from your graveyard to the battlefield. Activate this ability only any time you could cast a sorcery.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bbae","set":"Throne of Eldraine","number":"341",
    "name":"Worthy Knight","type":"Creature — Human Knight","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever you cast a Knight spell, create a 1/1 white Human creature token.","artist":"Yongjae Choi"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bbb0","set":"Throne of Eldraine","number":"185",
    "name":"Yorvo, Lord of Garenbrig","type":"Legendary Creature — Giant Noble","manaCost":"{G}{G}{G}","convertedManaCost":3,"power":"0","toughness":"0",
    "text":"Yorvo, Lord of Garenbrig enters the battlefield with four +1/+1 counters on it. Whenever another green creature enters the battlefield under your control, put a +1/+1 counter on Yorvo. Then if that creature's power is greater than Yorvo's power, put another +1/+1 counter on Yorvo.","artist":"Zack Stella"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70da9cf66965d08b5bbaa","set":"Throne of Eldraine","number":"358",
    "name":"Witch's Vengeance","type":"Sorcery","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creatures of the creature type of your choice get -3/-3 until end of turn.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bbb2","set":"Throne of Eldraine","number":"37",
    "name":"Youthful Knight","type":"Creature — Human Knight","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"First strike","artist":"Heonhwa Choe"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb7f","set":"Throne of Eldraine","number":"345",
    "name":"The Magic Mirror","type":"Legendary Artifact","manaCost":"{6}{U}{U}{U}","convertedManaCost":9,"power":null,"toughness":null,
    "text":"This spell costs {1} less to cast for each instant and sorcery card in your graveyard. You have no maximum hand size. At the beginning of your upkeep, put a knowledge counter on The Magic Mirror, then draw a card for each knowledge counter on The Magic Mirror.","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bbaf","set":"Throne of Eldraine","number":"36",
    "name":"Worthy Knight","type":"Creature — Human Knight","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever you cast a Knight spell, create a 1/1 white Human creature token.","artist":"Yongjae Choi"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bb84","set":"Throne of Eldraine","number":"313",
    "name":"Thornwood Falls","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Thornwood Falls enters the battlefield tapped. When Thornwood Falls enters the battlefield, you gain 1 life. {T}: Add {G} or {U}.","artist":"Jenn Ravenna"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70da9cf66965d08b5bb89","set":"Throne of Eldraine","number":"147",
    "name":"Torbran, Thane of Red Fell","type":"Legendary Creature — Dwarf Noble","manaCost":"{1}{R}{R}{R}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"If a red source you control would deal damage to an opponent or a permanent an opponent controls, it deals that much damage plus 2 instead.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb8e","set":"Throne of Eldraine","number":"34",
    "name":"True Love's Kiss","type":"Instant","manaCost":"{2}{W}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Exile target artifact or enchantment. Draw a card.","artist":"Donato Giancola"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70da9cf66965d08b5bb93","set":"Throne of Eldraine","number":"69",
    "name":"Turn into a Pumpkin","type":"Instant","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Return target nonland permanent to its owner's hand. Draw a card. Adamant — If at least three blue mana was spent to cast this spell, create a Food token. (It's an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Vincent Proce"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70da9cf66965d08b5bb98","set":"Throne of Eldraine","number":"35",
    "name":"Venerable Knight","type":"Creature — Human Knight","manaCost":"{W}","convertedManaCost":1,"power":"2","toughness":"1",
    "text":"When Venerable Knight dies, put a +1/+1 counter on target Knight you control.","artist":"Colin Boyer"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bb9d","set":"Throne of Eldraine","number":"181",
    "name":"Wicked Wolf","type":"Creature — Wolf","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Wicked Wolf enters the battlefield, it fights up to one target creature you don't control. Sacrifice a Food: Put a +1/+1 counter on Wicked Wolf. It gains indestructible until end of turn. Tap it.","artist":"Tomasz Jedruszek"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bba2","set":"Throne of Eldraine","number":"308",
    "name":"Wind-Scarred Crag","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Wind-Scarred Crag enters the battlefield tapped. When Wind-Scarred Crag enters the battlefield, you gain 1 life. {T}: Add {R} or {W}.","artist":"Jonas De Ro"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70da9cf66965d08b5bba7","set":"Throne of Eldraine","number":"249",
    "name":"Witch's Cottage","type":"Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.) Witch's Cottage enters the battlefield tapped unless you control three or more other Swamps. When Witch's Cottage enters the battlefield untapped, you may put target creature card from your graveyard on top of your library.","artist":"Gabor Szikszai"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bbac","set":"Throne of Eldraine","number":"184",
    "name":"Wolf's Quarry","type":"Sorcery","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Create three 1/1 green Boar creature tokens with \"When this creature dies, create a Food token.\" (A Food token is an artifact with \"{2}, {T}, Sacrifice this artifact: You gain 3 life.\")","artist":"Lars Grant-West"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70da9cf66965d08b5bbb1","set":"Throne of Eldraine","number":"376",
    "name":"Yorvo, Lord of Garenbrig","type":"Legendary Creature — Giant Noble","manaCost":"{G}{G}{G}","convertedManaCost":3,"power":"0","toughness":"0",
    "text":"Yorvo, Lord of Garenbrig enters the battlefield with four +1/+1 counters on it. Whenever another green creature enters the battlefield under your control, put a +1/+1 counter on Yorvo. Then if that creature's power is greater than Yorvo's power, put another +1/+1 counter on Yorvo.","artist":"Zack Stella"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e311091493610deea87","set":"Core Set 2020","number":"124",
    "name":"Act of Treason","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn. (It can attack and {T} this turn.)","artist":"Eric Deschamps"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70e311091493610deea88","set":"Core Set 2020","number":"1",
    "name":"Aerial Assault","type":"Sorcery","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target tapped creature. You gain 1 life for each creature you control with flying.","artist":"Dan Scott"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deea89","set":"Core Set 2020","number":"42",
    "name":"Aether Gust","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose target spell or permanent that's red or green. Its owner puts it on the top or bottom of their library.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deea8a","set":"Core Set 2020","number":"43",
    "name":"Agent of Treachery","type":"Creature — Human Rogue","manaCost":"{5}{U}{U}","convertedManaCost":7,"power":"2","toughness":"3",
    "text":"When Agent of Treachery enters the battlefield, gain control of target permanent. At the beginning of your end step, if you control three or more permanents you don't own, draw three cards.","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deea8b","set":"Core Set 2020","number":"337",
    "name":"Aggressive Mammoth","type":"Creature — Elephant","manaCost":"{3}{G}{G}{G}","convertedManaCost":6,"power":"8","toughness":"8",
    "text":"Trample (This creature can deal excess combat damage to the player or planeswalker it's attacking.) Other creatures you control have trample.","artist":"Filip Burburan"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deea8c","set":"Core Set 2020","number":"83",
    "name":"Agonizing Syphon","type":"Sorcery","manaCost":"{3}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Agonizing Syphon deals 3 damage to any target and you gain 3 life.","artist":"Seb McKinnon"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deea8d","set":"Core Set 2020","number":"44",
    "name":"Air Elemental","type":"Creature — Elemental","manaCost":"{3}{U}{U}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Flying","artist":"Tomasz Jedruszek"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70e311091493610deea8e","set":"Core Set 2020","number":"282",
    "name":"Ajani, Inspiring Leader","type":"Legendary Planeswalker — Ajani","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+2]: You gain 2 life. Put two +1/+1 counters on up to one target creature. [−3]: Exile target creature. Its controller gains 2 life. [−10]: Creatures you control gain flying and double strike until end of turn.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70e311091493610deea8f","set":"Core Set 2020","number":"2",
    "name":"Ajani, Strength of the Pride","type":"Legendary Planeswalker — Ajani","manaCost":"{2}{W}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"[+1]: You gain life equal to the number of creatures you control plus the number of planeswalkers you control. [−2]: Create a 2/2 white Cat Soldier creature token named Ajani's Pridemate with \"Whenever you gain life, put a +1/+1 counter on Ajani's Pridemate.\" [0]: If you have at least 15 life more than your starting life total, exile Ajani, Strength of the Pride and each artifact and creature your opponents control.","artist":"Chris Rallis"
},
{
    "types":["Artifact"],"colors":["W"],"_id":"5dc70e311091493610deea90","set":"Core Set 2020","number":"3",
    "name":"Ancestral Blade","type":"Artifact — Equipment","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"When Ancestral Blade enters the battlefield, create a 1/1 white Soldier creature token, then attach Ancestral Blade to it. Equipped creature gets +1/+1. Equip {1} ({1}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Scott Murphy"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deea91","set":"Core Set 2020","number":"4",
    "name":"Angel of Vitality","type":"Creature — Angel","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying If you would gain life, you gain that much life plus 1 instead. Angel of Vitality gets +2/+2 as long as you have 25 or more life.","artist":"Johannes Voss"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e311091493610deea92","set":"Core Set 2020","number":"5",
    "name":"Angelic Gift","type":"Enchantment — Aura","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature When Angelic Gift enters the battlefield, draw a card. Enchanted creature has flying.","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deea93","set":"Core Set 2020","number":"302",
    "name":"Angelic Guardian","type":"Creature — Angel","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) Whenever one or more creatures you control attack, they gain indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy them.)","artist":"Sara Winters"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deea94","set":"Core Set 2020","number":"45",
    "name":"Anticipate","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Look at the top three cards of your library. Put one of them into your hand and the rest on the bottom of your library in any order.","artist":"Tyler Jacobson"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deea95","set":"Core Set 2020","number":"221",
    "name":"Anvilwrought Raptor","type":"Artifact Creature — Bird","manaCost":"{4}","convertedManaCost":4,"power":"2","toughness":"1",
    "text":"Flying First strike (This creature deals combat damage before creatures without first strike.)","artist":"James Zapata"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deea96","set":"Core Set 2020","number":"6",
    "name":"Apostle of Purifying Light","type":"Creature — Human Cleric","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Protection from black (This creature can't be blocked, targeted, dealt damage, enchanted, or equipped by anything black.) {2}: Exile target card from a graveyard.","artist":"Bastien L. Deharme"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deea97","set":"Core Set 2020","number":"46",
    "name":"Atemsis, All-Seeing","type":"Legendary Creature — Sphinx","manaCost":"{3}{U}{U}{U}","convertedManaCost":6,"power":"4","toughness":"5",
    "text":"Flying {2}{U}, {T}: Draw two cards, then discard a card. Whenever Atemsis, All-Seeing deals damage to an opponent, you may reveal your hand. If cards with at least six different converted mana costs are revealed this way, that player loses the game.","artist":"Ryan Pancoast"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deea98","set":"Core Set 2020","number":"84",
    "name":"Audacious Thief","type":"Creature — Human Rogue","manaCost":"{2}{B}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Whenever Audacious Thief attacks, you draw a card and you lose 1 life.","artist":"Dmitry Burmak"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deea99","set":"Core Set 2020","number":"222",
    "name":"Bag of Holding","type":"Artifact","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Whenever you discard a card, exile that card from your graveyard. {2}, {T}: Draw a card, then discard a card. {4}, {T}, Sacrifice Bag of Holding: Return all cards exiled with Bag of Holding to their owner's hand.","artist":"Dmitry Burmak"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deea9a","set":"Core Set 2020","number":"165",
    "name":"Barkhide Troll","type":"Creature — Troll","manaCost":"{G}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Barkhide Troll enters the battlefield with a +1/+1 counter on it. {1}, Remove a +1/+1 counter from Barkhide Troll: Barkhide Troll gains hexproof until end of turn. (It can't be the target of spells or abilities your opponents control.)","artist":"Grzegorz Rutkowski"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deea9b","set":"Core Set 2020","number":"85",
    "name":"Barony Vampire","type":"Creature — Vampire","manaCost":"{2}{B}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":null,"artist":"Daarken"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deea9c","set":"Core Set 2020","number":"319",
    "name":"Bartizan Bats","type":"Creature — Bat","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"1",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.)","artist":"Nils Hamm"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e311091493610deeaa1","set":"Core Set 2020","number":"86",
    "name":"Bladebrand","type":"Instant","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gains deathtouch until end of turn. (Any amount of damage it deals to a creature is enough to destroy it.) Draw a card.","artist":"Winona Nelson"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeaa0","set":"Core Set 2020","number":"8",
    "name":"Bishop of Wings","type":"Creature — Human Cleric","manaCost":"{W}{W}","convertedManaCost":2,"power":"1","toughness":"4",
    "text":"Whenever an Angel enters the battlefield under your control, you gain 4 life. Whenever an Angel you control dies, create a 1/1 white Spirit creature token with flying.","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deea9e","set":"Core Set 2020","number":"7",
    "name":"Battalion Foot Soldier","type":"Creature — Human Soldier","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"When Battalion Foot Soldier enters the battlefield, you may search your library for any number of cards named Battalion Foot Soldier, reveal them, put them into your hand, then shuffle your library.","artist":"Cristi Balanescu"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deea9f","set":"Core Set 2020","number":"47",
    "name":"Befuddle","type":"Instant","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target creature gets -4/-0 until end of turn. Draw a card.","artist":"Svetlin Velinov"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeaa5","set":"Core Set 2020","number":"242",
    "name":"Bloodfell Caves","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Bloodfell Caves enters the battlefield tapped. When Bloodfell Caves enters the battlefield, you gain 1 life. {T}: Add {B} or {R}.","artist":"Adam Paquette"
},
{
    "types":["Artifact"],"colors":["B"],"_id":"5dc70e311091493610deeaa6","set":"Core Set 2020","number":"90",
    "name":"Bloodsoaked Altar","type":"Artifact","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"{T}, Pay 2 life, Discard a card, Sacrifice a creature: Create a 5/5 black Demon creature token with flying. Activate this ability only any time you could cast a sorcery.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeaa3","set":"Core Set 2020","number":"88",
    "name":"Blood Burglar","type":"Creature — Vampire Rogue","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"As long as it's your turn, Blood Burglar has lifelink. (Damage dealt by this creature also causes you to gain that much life.)","artist":"Cristi Balanescu"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deeaa4","set":"Core Set 2020","number":"89",
    "name":"Blood for Bones","type":"Sorcery","manaCost":"{3}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, sacrifice a creature. Return a creature card from your graveyard to the battlefield, then return another creature card from your graveyard to your hand.","artist":"Seb McKinnon"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deea9d","set":"Core Set 2020","number":"303",
    "name":"Bastion Enforcer","type":"Creature — Dwarf Soldier","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":null,"artist":"Matt Stewart"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deeaab","set":"Core Set 2020","number":"48",
    "name":"Bone to Ash","type":"Instant","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Counter target creature spell. Draw a card.","artist":"Clint Cearley"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deeaaa","set":"Core Set 2020","number":"92",
    "name":"Bone Splinters","type":"Sorcery","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, sacrifice a creature. Destroy target creature.","artist":"Cole Eastburn"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeaa8","set":"Core Set 2020","number":"243",
    "name":"Blossoming Sands","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Blossoming Sands enters the battlefield tapped. When Blossoming Sands enters the battlefield, you gain 1 life. {T}: Add {G} or {W}.","artist":"Sam Burley"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeab0","set":"Core Set 2020","number":"338",
    "name":"Bristling Boar","type":"Creature — Boar","manaCost":"{3}{G}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Bristling Boar can't be blocked by more than one creature.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeaa9","set":"Core Set 2020","number":"320",
    "name":"Bogstomper","type":"Creature — Beast","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":"6","toughness":"5",
    "text":null,"artist":"Jason Felix"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeaaf","set":"Core Set 2020","number":"50",
    "name":"Brineborn Cutthroat","type":"Creature — Merfolk Pirate","manaCost":"{1}{U}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Flash (You may cast this spell any time you could cast an instant.) Whenever you cast a spell during an opponent's turn, put a +1/+1 counter on Brineborn Cutthroat.","artist":"Caio Monteiro"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeaa2","set":"Core Set 2020","number":"87",
    "name":"Blightbeetle","type":"Creature — Insect","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Protection from green (This creature can't be blocked, targeted, dealt damage, enchanted, or equipped by anything green.) Creatures your opponents control can't have +1/+1 counters put on them.","artist":"Jason Kang"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeaad","set":"Core Set 2020","number":"49",
    "name":"Boreal Elemental","type":"Creature — Elemental","manaCost":"{4}{U}","convertedManaCost":5,"power":"3","toughness":"4",
    "text":"Flying Spells your opponents cast that target Boreal Elemental cost {2} more to cast.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeab5","set":"Core Set 2020","number":"125",
    "name":"Cavalier of Flame","type":"Creature — Elemental Knight","manaCost":"{2}{R}{R}{R}","convertedManaCost":5,"power":"6","toughness":"5",
    "text":"{1}{R}: Creatures you control get +1/+0 and gain haste until end of turn. When Cavalier of Flame enters the battlefield, discard any number of cards, then draw that many cards. When Cavalier of Flame dies, it deals X damage to each opponent and each planeswalker they control, where X is the number of land cards in your graveyard.","artist":"Wesley Burt"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeaae","set":"Core Set 2020","number":"166",
    "name":"Brightwood Tracker","type":"Creature — Elf Scout","manaCost":"{3}{G}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"{5}{G}, {T}: Look at the top four cards of your library. You may reveal a creature card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Johannes Voss"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeab4","set":"Core Set 2020","number":"10",
    "name":"Cavalier of Dawn","type":"Creature — Elemental Knight","manaCost":"{2}{W}{W}{W}","convertedManaCost":5,"power":"4","toughness":"6",
    "text":"Vigilance When Cavalier of Dawn enters the battlefield, destroy up to one target nonland permanent. Its controller creates a 3/3 colorless Golem artifact creature token. When Cavalier of Dawn dies, return target artifact or enchantment card from your graveyard to your hand.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeaba","set":"Core Set 2020","number":"168",
    "name":"Centaur Courser","type":"Creature — Centaur Warrior","manaCost":"{2}{G}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":null,"artist":"Vance Kovacs"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeaa7","set":"Core Set 2020","number":"91",
    "name":"Bloodthirsty Aerialist","type":"Creature — Vampire Rogue","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Flying Whenever you gain life, put a +1/+1 counter on Bloodthirsty Aerialist.","artist":"Igor Kieryluk"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70e311091493610deeab3","set":"Core Set 2020","number":"51",
    "name":"Captivating Gyre","type":"Sorcery","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Return up to three target creatures to their owners' hands.","artist":"Anthony Palumbo"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeab2","set":"Core Set 2020","number":"339",
    "name":"Canopy Spider","type":"Creature — Spider","manaCost":"{1}{G}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Reach (This creature can block creatures with flying.)","artist":"Christopher Rush"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeab9","set":"Core Set 2020","number":"287",
    "name":"Celestial Messenger","type":"Creature — Bird Spirit","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Flash (You may cast this card any time you could cast an instant.) Flying Celestial Messenger gets +1/+1 as long as you control a Yanling planeswalker.","artist":"Daniel Ljunggren"
},
{
    "types":["Artifact"],"colors":["R"],"_id":"5dc70e311091493610deeabf","set":"Core Set 2020","number":"131",
    "name":"Chandra's Regulator","type":"Legendary Artifact","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever you activate a loyalty ability of a Chandra planeswalker, you may pay {1}. If you do, copy that ability. You may choose new targets for the copy. {1}, {T}, Discard a Mountain card or a red card: Draw a card.","artist":"Eric Deschamps"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeaac","set":"Core Set 2020","number":"93",
    "name":"Boneclad Necromancer","type":"Creature — Human Wizard","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"When Boneclad Necromancer enters the battlefield, you may exile target creature card from a graveyard. If you do, create a 2/2 black Zombie creature token.","artist":"Robbie Trevino"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeab8","set":"Core Set 2020","number":"167",
    "name":"Cavalier of Thorns","type":"Creature — Elemental Knight","manaCost":"{2}{G}{G}{G}","convertedManaCost":5,"power":"5","toughness":"6",
    "text":"Reach When Cavalier of Thorns enters the battlefield, reveal the top five cards of your library. Put a land card from among them onto the battlefield and the rest into your graveyard. When Cavalier of Thorns dies, you may exile it. If you do, put another target card from your graveyard on top of your library.","artist":"Jehan Choo"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e311091493610deeabe","set":"Core Set 2020","number":"130",
    "name":"Chandra's Outrage","type":"Instant","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Chandra's Outrage deals 4 damage to target creature and 2 damage to that creature's controller.","artist":"Christopher Moeller"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeab7","set":"Core Set 2020","number":"94",
    "name":"Cavalier of Night","type":"Creature — Elemental Knight","manaCost":"{2}{B}{B}{B}","convertedManaCost":5,"power":"4","toughness":"5",
    "text":"Lifelink When Cavalier of Night enters the battlefield, you may sacrifice another creature. When you do, destroy target creature an opponent controls. When Cavalier of Night dies, return target creature card with converted mana cost 3 or less from your graveyard to the battlefield.","artist":"Viktor Titov"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70e311091493610deeac4","set":"Core Set 2020","number":"128",
    "name":"Chandra, Novice Pyromancer","type":"Legendary Planeswalker — Chandra","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"[+1]: Elementals you control get +2/+0 until end of turn. [−1]: Add {R}{R}. [−2]: Chandra, Novice Pyromancer deals 2 damage to any target.","artist":"Anna Steinbauer"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e311091493610deeab1","set":"Core Set 2020","number":"9",
    "name":"Brought Back","type":"Instant","manaCost":"{W}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose up to two target permanent cards in your graveyard that were put there from the battlefield this turn. Return them to the battlefield tapped.","artist":"Mitchell Malloy"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e311091493610deeabd","set":"Core Set 2020","number":"295",
    "name":"Chandra's Flame Wave","type":"Sorcery","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Chandra's Flame Wave deals 2 damage to target player and each creature that player controls. Search your library and/or graveyard for a card named Chandra, Flame's Fury, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Paul Scott Canavan"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeab6","set":"Core Set 2020","number":"52",
    "name":"Cavalier of Gales","type":"Creature — Elemental Knight","manaCost":"{2}{U}{U}{U}","convertedManaCost":5,"power":"5","toughness":"5",
    "text":"Flying When Cavalier of Gales enters the battlefield, draw three cards, then put two cards from your hand on top of your library in any order. When Cavalier of Gales dies, shuffle it into its owner's library, then scry 2.","artist":"Viktor Titov"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70e311091493610deeac3","set":"Core Set 2020","number":"294",
    "name":"Chandra, Flame's Fury","type":"Legendary Planeswalker — Chandra","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+1]: Chandra, Flame's Fury deals 2 damage to any target. [−2]: Chandra, Flame's Fury deals 4 damage to target creature and 2 damage to that creature's controller. [−8]: Chandra, Flame's Fury deals 10 damage to target player and each creature that player controls.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeabc","set":"Core Set 2020","number":"129",
    "name":"Chandra's Embercat","type":"Creature — Elemental Cat","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{T}: Add {R}. Spend this mana only to cast an Elemental spell or a Chandra planeswalker spell.","artist":"Johan Grenier"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeac9","set":"Core Set 2020","number":"315",
    "name":"Coral Merfolk","type":"Creature — Merfolk","manaCost":"{1}{U}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":null,"artist":"Lie Setiawan"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70e311091493610deeac2","set":"Core Set 2020","number":"127",
    "name":"Chandra, Awakened Inferno","type":"Legendary Planeswalker — Chandra","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"This spell can't be countered. [+2]: Each opponent gets an emblem with \"At the beginning of your upkeep, this emblem deals 1 damage to you.\" [−3]: Chandra, Awakened Inferno deals 3 damage to each non-Elemental creature. −X: Chandra, Awakened Inferno deals X damage to target creature or planeswalker. If a permanent dealt damage this way would die this turn, exile it instead.","artist":"Chris Rahn"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deeac8","set":"Core Set 2020","number":"55",
    "name":"Convolute","type":"Instant","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Counter target spell unless its controller pays {4}.","artist":"Viktor Titov"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeabb","set":"Core Set 2020","number":"53",
    "name":"Cerulean Drake","type":"Creature — Drake","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Flying Protection from red (This creature can't be blocked, targeted, dealt damage, enchanted, or equipped by anything red.) Sacrifice Cerulean Drake: Counter target spell that targets you.","artist":"Daniel Ljunggren"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70e311091493610deeac1","set":"Core Set 2020","number":"126",
    "name":"Chandra, Acolyte of Flame","type":"Legendary Planeswalker — Chandra","manaCost":"{1}{R}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[0]: Put a loyalty counter on each red planeswalker you control. [0]: Create two 1/1 red Elemental creature tokens. They gain haste. Sacrifice them at the beginning of the next end step. [−2]: You may cast target instant or sorcery card with converted mana cost 3 or less from your graveyard. If that card would be put into your graveyard this turn, exile it instead.","artist":"Anna Steinbauer"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeace","set":"Core Set 2020","number":"133",
    "name":"Daggersail Aeronaut","type":"Creature — Goblin","manaCost":"{3}{R}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"As long as it's your turn, Daggersail Aeronaut has flying.","artist":"Zoltan Boros"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeacd","set":"Core Set 2020","number":"244",
    "name":"Cryptic Caves","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}: Add {C}. {1}, {T}, Sacrifice Cryptic Caves: Draw a card. Activate this ability only if you control five or more lands.","artist":"Sung Choi"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeac7","set":"Core Set 2020","number":"304",
    "name":"Concordia Pegasus","type":"Creature — Pegasus","manaCost":"{1}{W}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.)","artist":"Chris Rahn"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeac0","set":"Core Set 2020","number":"132",
    "name":"Chandra's Spitfire","type":"Creature — Elemental","manaCost":"{2}{R}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"Flying Whenever an opponent is dealt noncombat damage, Chandra's Spitfire gets +3/+0 until end of turn.","artist":"Chris Rallis"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deeac6","set":"Core Set 2020","number":"223",
    "name":"Colossus Hammer","type":"Artifact — Equipment","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Equipped creature gets +10/+10 and loses flying. Equip {8} ({8}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Dmitry Burmak"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70e311091493610deeacc","set":"Core Set 2020","number":"207",
    "name":"Creeping Trailblazer","type":"Creature — Elemental","manaCost":"{R}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Other Elementals you control get +1/+0. {2}{R}{G}: Creeping Trailblazer gets +1/+1 until end of turn for each Elemental you control.","artist":"Johan Grenier"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeac5","set":"Core Set 2020","number":"54",
    "name":"Cloudkin Seer","type":"Creature — Elemental Wizard","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"1",
    "text":"Flying When Cloudkin Seer enters the battlefield, draw a card.","artist":"Anastasia Ovchinnikova"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70e311091493610deead3","set":"Core Set 2020","number":"13",
    "name":"Devout Decree","type":"Sorcery","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Exile target creature or planeswalker that's black or red. Scry 1. (Look at the top card of your library. You may put that card on the bottom of your library.)","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deead2","set":"Core Set 2020","number":"134",
    "name":"Destructive Digger","type":"Creature — Goblin","manaCost":"{2}{R}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"{3}, {T}, Sacrifice an artifact or land: Draw a card.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70e311091493610deeacb","set":"Core Set 2020","number":"206†",
    "name":"Corpse Knight","type":"Creature — Zombie Knight","manaCost":"{W}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever another creature enters the battlefield under your control, each opponent loses 1 life.","artist":"Karl Kopinski"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deead1","set":"Core Set 2020","number":"12",
    "name":"Daybreak Chaplain","type":"Creature — Human Cleric","manaCost":"{1}{W}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Lifelink (Damage dealt by this creature also causes you to gain that much life.)","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70e311091493610deeaca","set":"Core Set 2020","number":"206",
    "name":"Corpse Knight","type":"Creature — Zombie Knight","manaCost":"{W}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever another creature enters the battlefield under your control, each opponent loses 1 life.","artist":"Karl Kopinski"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deead0","set":"Core Set 2020","number":"11",
    "name":"Dawning Angel","type":"Creature — Angel","manaCost":"{4}{W}","convertedManaCost":5,"power":"3","toughness":"2",
    "text":"Flying When Dawning Angel enters the battlefield, you gain 4 life.","artist":"Yongjae Choi"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deead6","set":"Core Set 2020","number":"322",
    "name":"Disentomb","type":"Sorcery","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Return target creature card from your graveyard to your hand.","artist":"Johann Bodin"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e311091493610deead7","set":"Core Set 2020","number":"95",
    "name":"Disfigure","type":"Instant","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets -2/-2 until end of turn.","artist":"Justin Sweet"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e311091493610deeacf","set":"Core Set 2020","number":"321",
    "name":"Dark Remedy","type":"Instant","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +1/+3 until end of turn.","artist":"Svetlin Velinov"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e311091493610deead5","set":"Core Set 2020","number":"14",
    "name":"Disenchant","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy target artifact or enchantment.","artist":"Victor Adame Minguez"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deead8","set":"Core Set 2020","number":"245",
    "name":"Dismal Backwater","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Dismal Backwater enters the battlefield tapped. When Dismal Backwater enters the battlefield, you gain 1 life. {T}: Add {U} or {B}.","artist":"Sam Burley"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deead4","set":"Core Set 2020","number":"224",
    "name":"Diamond Knight","type":"Artifact Creature — Knight","manaCost":"{3}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Vigilance (Attacking doesn't cause this creature to tap.) As Diamond Knight enters the battlefield, choose a color. Whenever you cast a spell of the chosen color, put a +1/+1 counter on Diamond Knight.","artist":"Alayna Danner"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeada","set":"Core Set 2020","number":"135",
    "name":"Dragon Mage","type":"Creature — Dragon Wizard","manaCost":"{5}{R}{R}","convertedManaCost":7,"power":"5","toughness":"5",
    "text":"Flying Whenever Dragon Mage deals combat damage to a player, each player discards their hand, then draws seven cards.","artist":"Matthew D. Wilson"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deead9","set":"Core Set 2020","number":"225",
    "name":"Diviner's Lockbox","type":"Artifact","manaCost":"{4}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"{1}, {T}: Choose a card name, then reveal the top card of your library. If that card has the chosen name, sacrifice Diviner's Lockbox and draw three cards. Activate this ability only any time you could cast a sorcery.","artist":"Lake Hurwitz"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeadb","set":"Core Set 2020","number":"136",
    "name":"Drakuseth, Maw of Flames","type":"Legendary Creature — Dragon","manaCost":"{4}{R}{R}{R}","convertedManaCost":7,"power":"7","toughness":"7",
    "text":"Flying Whenever Drakuseth, Maw of Flames attacks, it deals 4 damage to any target and 3 damage to each of up to two other targets.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70e311091493610deeadc","set":"Core Set 2020","number":"56",
    "name":"Drawn from Dreams","type":"Sorcery","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Look at the top seven cards of your library. Put two of them into your hand and the rest on the bottom of your library in a random order.","artist":"Chris Seaman"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeadd","set":"Core Set 2020","number":"96",
    "name":"Dread Presence","type":"Creature — Nightmare","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Whenever a Swamp enters the battlefield under your control, choose one — • You draw a card and you lose 1 life. • Dread Presence deals 2 damage to any target and you gain 2 life.","artist":"Anthony Palumbo"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deeadf","set":"Core Set 2020","number":"97",
    "name":"Duress","type":"Sorcery","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target opponent reveals their hand. You choose a noncreature, nonland card from it. That player discards that card.","artist":"Steven Belledin"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeae0","set":"Core Set 2020","number":"169",
    "name":"Elvish Reclaimer","type":"Creature — Elf Warrior","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"Elvish Reclaimer gets +2/+2 as long as there are three or more land cards in your graveyard. {2}, {T}, Sacrifice a land: Search your library for a land card, put it onto the battlefield tapped, then shuffle your library.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeade","set":"Core Set 2020","number":"57",
    "name":"Dungeon Geists","type":"Creature — Spirit","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Flying When Dungeon Geists enters the battlefield, tap target creature an opponent controls. That creature doesn't untap during its controller's untap step for as long as you control Dungeon Geists.","artist":"Nils Hamm"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeae2","set":"Core Set 2020","number":"98",
    "name":"Embodiment of Agonies","type":"Creature — Demon","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"0","toughness":"0",
    "text":"Flying, deathtouch Embodiment of Agonies enters the battlefield with a +1/+1 counter on it for each different mana cost among nonland cards in your graveyard. (For example, {2}{B} and {1}{B}{B} are different mana costs.)","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeae1","set":"Core Set 2020","number":"137",
    "name":"Ember Hauler","type":"Creature — Goblin","manaCost":"{R}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{1}, Sacrifice Ember Hauler: It deals 2 damage to any target.","artist":"Steve Prescott"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70e311091493610deeae3","set":"Core Set 2020","number":"208",
    "name":"Empyrean Eagle","type":"Creature — Bird Spirit","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Flying Other creatures you control with flying get +1/+1.","artist":"Jason A. Engle"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e311091493610deeae4","set":"Core Set 2020","number":"328",
    "name":"Engulfing Eruption","type":"Sorcery","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Engulfing Eruption deals 5 damage to target creature.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeae5","set":"Core Set 2020","number":"99",
    "name":"Epicure of Blood","type":"Creature — Vampire","manaCost":"{4}{B}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Whenever you gain life, each opponent loses 1 life.","artist":"Anna Steinbauer"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70e311091493610deeae6","set":"Core Set 2020","number":"15",
    "name":"Eternal Isolation","type":"Sorcery","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Put target creature with power 4 or greater on the bottom of its owner's library.","artist":"Johan Grenier"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeae7","set":"Core Set 2020","number":"299",
    "name":"Ethereal Elk","type":"Creature — Elk Spirit","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Trample When Ethereal Elk enters the battlefield, you may search your library and/or graveyard for a card named Vivien, Nature's Avenger, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Jason Felix"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeae8","set":"Core Set 2020","number":"246",
    "name":"Evolving Wilds","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}, Sacrifice Evolving Wilds: Search your library for a basic land card, put it onto the battlefield tapped, then shuffle your library.","artist":"Steven Belledin"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeae9","set":"Core Set 2020","number":"58",
    "name":"Faerie Miscreant","type":"Creature — Faerie Rogue","manaCost":"{U}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Flying When Faerie Miscreant enters the battlefield, if you control another creature named Faerie Miscreant, draw a card.","artist":"Steven Belledin"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeaea","set":"Core Set 2020","number":"100",
    "name":"Fathom Fleet Cutthroat","type":"Creature — Human Pirate","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Fathom Fleet Cutthroat enters the battlefield, destroy target creature an opponent controls that was dealt damage this turn.","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeaeb","set":"Core Set 2020","number":"329",
    "name":"Fearless Halberdier","type":"Creature — Human Warrior","manaCost":"{2}{R}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":null,"artist":"Suzanne Helmigh"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeaec","set":"Core Set 2020","number":"16",
    "name":"Fencing Ace","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Double strike (This creature deals both first-strike and regular combat damage.)","artist":"David Rapoza"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeaed","set":"Core Set 2020","number":"101",
    "name":"Feral Abomination","type":"Creature — Thrull","manaCost":"{5}{B}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Deathtouch (Any amount of damage this deals to a creature is enough to destroy it.)","artist":"Darek Zabrocki"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70e311091493610deeaee","set":"Core Set 2020","number":"170",
    "name":"Feral Invocation","type":"Enchantment — Aura","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Flash (You may cast this spell any time you could cast an instant.) Enchant creature Enchanted creature gets +2/+2.","artist":"Mathias Kollros"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeaef","set":"Core Set 2020","number":"171",
    "name":"Ferocious Pup","type":"Creature — Wolf","manaCost":"{2}{G}","convertedManaCost":3,"power":"0","toughness":"1",
    "text":"When Ferocious Pup enters the battlefield, create a 2/2 green Wolf creature token.","artist":"Rudy Siswanto"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeaf0","set":"Core Set 2020","number":"247",
    "name":"Field of the Dead","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Field of the Dead enters the battlefield tapped. {T}: Add {C}. Whenever Field of the Dead or another land enters the battlefield under your control, if you control seven or more lands with different names, create a 2/2 black Zombie creature token.","artist":"Kev Walker"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeaf1","set":"Core Set 2020","number":"138",
    "name":"Fire Elemental","type":"Creature — Elemental","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":"5","toughness":"4",
    "text":null,"artist":"Joe Slucher"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e311091493610deeaf2","set":"Core Set 2020","number":"139",
    "name":"Flame Sweep","type":"Instant","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Flame Sweep deals 2 damage to each creature except for creatures you control with flying.","artist":"Viktor Titov"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70e311091493610deeaf3","set":"Core Set 2020","number":"59",
    "name":"Flood of Tears","type":"Sorcery","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Return all nonland permanents to their owners' hands. If you return four or more nontoken permanents you control this way, you may put a permanent card from your hand onto the battlefield.","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeaf4","set":"Core Set 2020","number":"277",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Volkan Baǵa"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeaf5","set":"Core Set 2020","number":"278",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Steven Belledin"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeaf6","set":"Core Set 2020","number":"279",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Jim Nelson"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeaf7","set":"Core Set 2020","number":"280",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Adam Paquette"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeaf8","set":"Core Set 2020","number":"60",
    "name":"Fortress Crab","type":"Creature — Crab","manaCost":"{3}{U}","convertedManaCost":4,"power":"1","toughness":"6",
    "text":null,"artist":"Vincent Proce"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeaf9","set":"Core Set 2020","number":"340",
    "name":"Frilled Sandwalla","type":"Creature — Lizard","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"{1}{G}: Frilled Sandwalla gets +2/+2 until end of turn. Activate this ability only once each turn.","artist":"Zezhou Chen"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeafa","set":"Core Set 2020","number":"61",
    "name":"Frilled Sea Serpent","type":"Creature — Serpent","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":"4","toughness":"6",
    "text":"{5}{U}{U}: Frilled Sea Serpent can't be blocked this turn.","artist":"Steven Belledin"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeafb","set":"Core Set 2020","number":"62",
    "name":"Frost Lynx","type":"Creature — Elemental Cat","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"When Frost Lynx enters the battlefield, tap target creature an opponent controls. That creature doesn't untap during its controller's next untap step.","artist":"Izzy"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e311091493610deeafc","set":"Core Set 2020","number":"140",
    "name":"Fry","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"This spell can't be countered. Fry deals 5 damage to target creature or planeswalker that's white or blue.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeafd","set":"Core Set 2020","number":"172",
    "name":"Gargos, Vicious Watcher","type":"Legendary Creature — Hydra","manaCost":"{3}{G}{G}{G}","convertedManaCost":6,"power":"8","toughness":"7",
    "text":"Vigilance Hydra spells you cast cost {4} less to cast. Whenever a creature you control becomes the target of a spell, Gargos, Vicious Watcher fights up to one target creature you don't control.","artist":"Mathias Kollros"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e311091493610deeafe","set":"Core Set 2020","number":"17",
    "name":"Gauntlets of Light","type":"Enchantment — Aura","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets +0/+2 and assigns combat damage equal to its toughness rather than its power. Enchanted creature has \"{2}{W}: Untap this creature.\"","artist":"Ekaterina Burmak"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70e311091493610deeaff","set":"Core Set 2020","number":"173",
    "name":"Gift of Paradise","type":"Enchantment — Aura","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Enchant land When Gift of Paradise enters the battlefield, you gain 3 life. Enchanted land has \"{T}: Add two mana of any one color.\"","artist":"Ryan Pancoast"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e311091493610deeb00","set":"Core Set 2020","number":"18",
    "name":"Glaring Aegis","type":"Enchantment — Aura","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Enchant creature When Glaring Aegis enters the battlefield, tap target creature an opponent controls. Enchanted creature gets +1/+3.","artist":"Anthony Palumbo"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb01","set":"Core Set 2020","number":"141",
    "name":"Glint-Horn Buccaneer","type":"Creature — Minotaur Pirate","manaCost":"{1}{R}{R}","convertedManaCost":3,"power":"2","toughness":"4",
    "text":"Haste Whenever you discard a card, Glint-Horn Buccaneer deals 1 damage to each opponent. {1}{R}, Discard a card: Draw a card. Activate this ability only if Glint-Horn Buccaneer is attacking.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb02","set":"Core Set 2020","number":"300",
    "name":"Gnarlback Rhino","type":"Creature — Rhino","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Trample (This creature can deal excess combat damage to the player or planeswalker it's attacking.) Whenever you cast a spell that targets Gnarlback Rhino, draw a card.","artist":"YW Tang"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb03","set":"Core Set 2020","number":"330",
    "name":"Goblin Assailant","type":"Creature — Goblin Warrior","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":null,"artist":"Jesper Ejsing"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb04","set":"Core Set 2020","number":"142",
    "name":"Goblin Bird-Grabber","type":"Creature — Goblin","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"{R}: Goblin Bird-Grabber gains flying until end of turn. Activate this ability only if you control a creature with flying.","artist":"Anna Podedworna"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb05","set":"Core Set 2020","number":"143",
    "name":"Goblin Ringleader","type":"Creature — Goblin","manaCost":"{3}{R}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"Haste (This creature can attack and {T} as soon as it comes under your control.) When Goblin Ringleader enters the battlefield, reveal the top four cards of your library. Put all Goblin cards revealed this way into your hand and the rest on the bottom of your library in any order.","artist":"Gabor Szikszai"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb06","set":"Core Set 2020","number":"144",
    "name":"Goblin Smuggler","type":"Creature — Goblin Rogue","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Haste (This creature can attack and {T} as soon as it comes under your control.) {T}: Another target creature with power 2 or less can't be blocked this turn.","artist":"Dan Scott"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e311091493610deeb07","set":"Core Set 2020","number":"19",
    "name":"Gods Willing","type":"Instant","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature you control gains protection from the color of your choice until end of turn. (It can't be blocked, targeted, dealt damage, enchanted, or equipped by anything of that color.) Scry 1. (Look at the top card of your library. You may put that card on the bottom of your library.)","artist":"Mark Winters"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb08","set":"Core Set 2020","number":"283",
    "name":"Goldmane Griffin","type":"Creature — Griffin","manaCost":"{3}{W}{W}","convertedManaCost":5,"power":"3","toughness":"2",
    "text":"Flying, vigilance When Goldmane Griffin enters the battlefield, you may search your library and/or graveyard for a card named Ajani, Inspiring Leader, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Paul Scott Canavan"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deeb09","set":"Core Set 2020","number":"226",
    "name":"Golos, Tireless Pilgrim","type":"Legendary Artifact Creature — Scout","manaCost":"{5}","convertedManaCost":5,"power":"3","toughness":"5",
    "text":"When Golos, Tireless Pilgrim enters the battlefield, you may search your library for a land card, put that card onto the battlefield tapped, then shuffle your library. {2}{W}{U}{B}{R}{G}: Exile the top three cards of your library. You may play them this turn without paying their mana costs.","artist":"Joseph Meehan"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb0a","set":"Core Set 2020","number":"102",
    "name":"Gorging Vulture","type":"Creature — Bird","manaCost":"{2}{B}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying When Gorging Vulture enters the battlefield, put the top four cards of your library into your graveyard. You gain 1 life for each creature card put into your graveyard this way.","artist":"Caio Monteiro"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deeb0b","set":"Core Set 2020","number":"227",
    "name":"Grafdigger's Cage","type":"Artifact","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Creature cards in graveyards and libraries can't enter the battlefield. Players can't cast spells from graveyards or libraries.","artist":"Daniel Ljunggren"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb0c","set":"Core Set 2020","number":"103",
    "name":"Gravedigger","type":"Creature — Zombie","manaCost":"{3}{B}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"When Gravedigger enters the battlefield, you may return target creature card from your graveyard to your hand.","artist":"Tony Foti"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb0d","set":"Core Set 2020","number":"323",
    "name":"Gravewaker","type":"Creature — Bird Spirit","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) {5}{B}{B}: Return target creature card from your graveyard to the battlefield tapped.","artist":"Daniel Ljunggren"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb0e","set":"Core Set 2020","number":"174",
    "name":"Greenwood Sentinel","type":"Creature — Elf Scout","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Vigilance (Attacking doesn't cause this creature to tap.)","artist":"Johann Bodin"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb0f","set":"Core Set 2020","number":"20",
    "name":"Griffin Protector","type":"Creature — Griffin","manaCost":"{3}{W}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Flying Whenever another creature enters the battlefield under your control, Griffin Protector gets +1/+1 until end of turn.","artist":"Christopher Moeller"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb10","set":"Core Set 2020","number":"21",
    "name":"Griffin Sentinel","type":"Creature — Griffin","manaCost":"{2}{W}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"Flying Vigilance (Attacking doesn't cause this creature to tap.)","artist":"Warren Mahy"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e311091493610deeb11","set":"Core Set 2020","number":"175",
    "name":"Growth Cycle","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +3/+3 until end of turn. It gets an additional +2/+2 until end of turn for each card named Growth Cycle in your graveyard.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb12","set":"Core Set 2020","number":"104",
    "name":"Gruesome Scourger","type":"Creature — Orc Warrior","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"When Gruesome Scourger enters the battlefield, it deals damage to target opponent or planeswalker equal to the number of creatures you control.","artist":"Karl Kopinski"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb13","set":"Core Set 2020","number":"305",
    "name":"Haazda Officer","type":"Creature — Human Soldier","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"When Haazda Officer enters the battlefield, target creature you control gets +1/+1 until end of turn.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb14","set":"Core Set 2020","number":"22",
    "name":"Hanged Executioner","type":"Creature — Spirit","manaCost":"{2}{W}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Flying When Hanged Executioner enters the battlefield, create a 1/1 white Spirit creature token with flying. {3}{W}, Exile Hanged Executioner: Exile target creature.","artist":"Johann Bodin"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70e311091493610deeb15","set":"Core Set 2020","number":"63",
    "name":"Hard Cover","type":"Enchantment — Aura","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets +0/+2 and has \"{T}: Draw a card, then discard a card.\"","artist":"Pindurski"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb16","set":"Core Set 2020","number":"176",
    "name":"Healer of the Glade","type":"Creature — Elemental","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"When Healer of the Glade enters the battlefield, you gain 3 life.","artist":"Daarken"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deeb17","set":"Core Set 2020","number":"228",
    "name":"Heart-Piercer Bow","type":"Artifact — Equipment","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever equipped creature attacks, Heart-Piercer Bow deals 1 damage to target creature defending player controls. Equip {1} ({1}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Franz Vohwinkel"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb18","set":"Core Set 2020","number":"23",
    "name":"Herald of the Sun","type":"Creature — Angel","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":"4","toughness":"4",
    "text":"Flying {3}{W}: Put a +1/+1 counter on another target creature with flying.","artist":"Micah Epstein"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb19","set":"Core Set 2020","number":"331",
    "name":"Hostile Minotaur","type":"Creature — Minotaur","manaCost":"{3}{R}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Haste (This creature can attack and {T} as soon as it comes under your control.)","artist":"Joe Slucher"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb1a","set":"Core Set 2020","number":"177",
    "name":"Howling Giant","type":"Creature — Giant Druid","manaCost":"{5}{G}{G}","convertedManaCost":7,"power":"5","toughness":"5",
    "text":"Reach (This creature can block creatures with flying.) When Howling Giant enters the battlefield, create two 2/2 green Wolf creature tokens.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deeb1b","set":"Core Set 2020","number":"229",
    "name":"Icon of Ancestry","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"As Icon of Ancestry enters the battlefield, choose a creature type. Creatures you control of the chosen type get +1/+1. {3}, {T}: Look at the top three cards of your library. You may reveal a creature card of the chosen type from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Chris Seaman"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb1c","set":"Core Set 2020","number":"332",
    "name":"Immortal Phoenix","type":"Creature — Phoenix","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":"5","toughness":"3",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) When Immortal Phoenix dies, return it to its owner's hand.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb1d","set":"Core Set 2020","number":"306",
    "name":"Impassioned Orator","type":"Creature — Human Cleric","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever another creature enters the battlefield under your control, you gain 1 life.","artist":"Mark Zug"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb1e","set":"Core Set 2020","number":"307",
    "name":"Imperial Outrider","type":"Creature — Human Knight","manaCost":"{3}{W}","convertedManaCost":4,"power":"1","toughness":"5",
    "text":null,"artist":"Scott Murphy"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e311091493610deeb1f","set":"Core Set 2020","number":"145",
    "name":"Infuriate","type":"Instant","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +3/+2 until end of turn.","artist":"Caio Monteiro"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e311091493610deeb20","set":"Core Set 2020","number":"24",
    "name":"Inspired Charge","type":"Instant","manaCost":"{2}{W}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control get +2/+1 until end of turn.","artist":"Wayne Reynolds"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb21","set":"Core Set 2020","number":"25",
    "name":"Inspiring Captain","type":"Creature — Human Knight","manaCost":"{3}{W}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Inspiring Captain enters the battlefield, creatures you control get +1/+1 until end of turn.","artist":"Ben Maier"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb22","set":"Core Set 2020","number":"308",
    "name":"Ironclad Krovod","type":"Creature — Beast","manaCost":"{3}{W}","convertedManaCost":4,"power":"2","toughness":"5",
    "text":null,"artist":"Sam Rowan"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e311091493610deeb23","set":"Core Set 2020","number":"209",
    "name":"Ironroot Warlord","type":"Creature — Treefolk Soldier","manaCost":"{1}{G}{W}","convertedManaCost":3,"power":"*","toughness":"5",
    "text":"Ironroot Warlord's power is equal to the number of creatures you control. {3}{G}{W}: Create a 1/1 white Soldier creature token.","artist":"Filip Burburan"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb24","set":"Core Set 2020","number":"265",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"John Avon"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb25","set":"Core Set 2020","number":"266",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Babyson Chen & Uzhen Lin"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb26","set":"Core Set 2020","number":"267",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Cliff Childs"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb27","set":"Core Set 2020","number":"268",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Andreas Rocha"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb28","set":"Core Set 2020","number":"248",
    "name":"Jungle Hollow","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Jungle Hollow enters the battlefield tapped. When Jungle Hollow enters the battlefield, you gain 1 life. {T}: Add {B} or {G}.","artist":"Eytan Zana"
},
{
    "types":["Creature"],"colors":["B","R","W"],"_id":"5dc70e311091493610deeb29","set":"Core Set 2020","number":"210",
    "name":"Kaalia, Zenith Seeker","type":"Legendary Creature — Human Cleric","manaCost":"{R}{W}{B}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Flying, vigilance When Kaalia, Zenith Seeker enters the battlefield, look at the top six cards of your library. You may reveal an Angel card, a Demon card, and/or a Dragon card from among them and put them into your hand. Put the rest on the bottom of your library in a random order.","artist":"Yongjae Choi"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb2a","set":"Core Set 2020","number":"146",
    "name":"Keldon Raider","type":"Creature — Human Warrior","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"When Keldon Raider enters the battlefield, you may discard a card. If you do, draw a card.","artist":"Chris Seaman"
},
{
    "types":["Creature"],"colors":["B","G","W"],"_id":"5dc70e311091493610deeb2b","set":"Core Set 2020","number":"211",
    "name":"Kethis, the Hidden Hand","type":"Legendary Creature — Elf Advisor","manaCost":"{W}{B}{G}","convertedManaCost":3,"power":"3","toughness":"4",
    "text":"Legendary spells you cast cost {1} less to cast. Exile two legendary cards from your graveyard: Until end of turn, each legendary card in your graveyard gains \"You may play this card from your graveyard.\"","artist":"Yongjae Choi"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb2c","set":"Core Set 2020","number":"105",
    "name":"Knight of the Ebon Legion","type":"Creature — Vampire Knight","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"{2}{B}: Knight of the Ebon Legion gets +3/+3 and gains deathtouch until end of turn. At the beginning of your end step, if a player lost 4 or more life this turn, put a +1/+1 counter on Knight of the Ebon Legion. (Damage causes loss of life.)","artist":"Alex Konstad"
},
{
    "types":["Creature"],"colors":["R","U","W"],"_id":"5dc70e311091493610deeb2d","set":"Core Set 2020","number":"212",
    "name":"Kykar, Wind's Fury","type":"Legendary Creature — Bird Wizard","manaCost":"{1}{U}{R}{W}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Flying Whenever you cast a noncreature spell, create a 1/1 white Spirit creature token with flying. Sacrifice a Spirit: Add {R}.","artist":"G-host Lee"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb2e","set":"Core Set 2020","number":"147",
    "name":"Lavakin Brawler","type":"Creature — Elemental Warrior","manaCost":"{3}{R}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"Whenever Lavakin Brawler attacks, it gets +1/+0 until end of turn for each Elemental you control.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb2f","set":"Core Set 2020","number":"178",
    "name":"Leafkin Druid","type":"Creature — Elemental Druid","manaCost":"{1}{G}","convertedManaCost":2,"power":"0","toughness":"3",
    "text":"{T}: Add {G}. If you control four or more creatures, add {G}{G} instead.","artist":"Filip Burburan"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deeb30","set":"Core Set 2020","number":"106",
    "name":"Legion's End","type":"Sorcery","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Exile target creature an opponent controls with converted mana cost 2 or less and all other creatures that player controls with the same name as that creature. Then that player reveals their hand and exiles all cards with that name from their hand and graveyard.","artist":"David Palumbo"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70e311091493610deeb31","set":"Core Set 2020","number":"179",
    "name":"Leyline of Abundance","type":"Enchantment","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"If Leyline of Abundance is in your opening hand, you may begin the game with it on the battlefield. Whenever you tap a creature for mana, add an additional {G}. {6}{G}{G}: Put a +1/+1 counter on each creature you control.","artist":"Noah Bradley"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70e311091493610deeb32","set":"Core Set 2020","number":"64",
    "name":"Leyline of Anticipation","type":"Enchantment","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"If Leyline of Anticipation is in your opening hand, you may begin the game with it on the battlefield. You may cast spells as though they had flash.","artist":"Noah Bradley"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70e311091493610deeb33","set":"Core Set 2020","number":"148",
    "name":"Leyline of Combustion","type":"Enchantment","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"If Leyline of Combustion is in your opening hand, you may begin the game with it on the battlefield. Whenever you and/or at least one permanent you control becomes the target of a spell or ability an opponent controls, Leyline of Combustion deals 2 damage to that player.","artist":"Noah Bradley"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e311091493610deeb34","set":"Core Set 2020","number":"26",
    "name":"Leyline of Sanctity","type":"Enchantment","manaCost":"{2}{W}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"If Leyline of Sanctity is in your opening hand, you may begin the game with it on the battlefield. You have hexproof. (You can't be the target of spells or abilities your opponents control.)","artist":"Noah Bradley"
},
{
    "types":["Enchantment"],"colors":["B"],"_id":"5dc70e311091493610deeb35","set":"Core Set 2020","number":"107",
    "name":"Leyline of the Void","type":"Enchantment","manaCost":"{2}{B}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"If Leyline of the Void is in your opening hand, you may begin the game with it on the battlefield. If a card would be put into an opponent's graveyard from anywhere, exile it instead.","artist":"Noah Bradley"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e311091493610deeb36","set":"Core Set 2020","number":"213",
    "name":"Lightning Stormkin","type":"Creature — Elemental Wizard","manaCost":"{U}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Flying Haste (This creature can attack and {T} as soon as it comes under your control.)","artist":"Rudy Siswanto"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb37","set":"Core Set 2020","number":"180",
    "name":"Loaming Shaman","type":"Creature — Centaur Shaman","manaCost":"{2}{G}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"When Loaming Shaman enters the battlefield, target player shuffles any number of target cards from their graveyard into their library.","artist":"Carl Critchlow"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb38","set":"Core Set 2020","number":"249",
    "name":"Lotus Field","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Hexproof Lotus Field enters the battlefield tapped. When Lotus Field enters the battlefield, sacrifice two lands. {T}: Add three mana of any one color.","artist":"John Avon"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb39","set":"Core Set 2020","number":"27",
    "name":"Loxodon Lifechanter","type":"Creature — Elephant Cleric","manaCost":"{5}{W}","convertedManaCost":6,"power":"4","toughness":"6",
    "text":"When Loxodon Lifechanter enters the battlefield, you may have your life total become the total toughness of creatures you control. {5}{W}: Loxodon Lifechanter gets +X/+X until end of turn, where X is your life total.","artist":"Nicholas Gregory"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb3a","set":"Core Set 2020","number":"28",
    "name":"Loyal Pegasus","type":"Creature — Pegasus","manaCost":"{W}","convertedManaCost":1,"power":"2","toughness":"1",
    "text":"Flying Loyal Pegasus can't attack or block alone.","artist":"John Severin Brassell"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb3b","set":"Core Set 2020","number":"181",
    "name":"Mammoth Spider","type":"Creature — Spider","manaCost":"{4}{G}","convertedManaCost":5,"power":"3","toughness":"5",
    "text":"Reach (This creature can block creatures with flying.)","artist":"Lars Grant-West"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70e311091493610deeb3c","set":"Core Set 2020","number":"149",
    "name":"Maniacal Rage","type":"Enchantment — Aura","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets +2/+2 and can't block.","artist":"Heonhwa Choe"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deeb3d","set":"Core Set 2020","number":"230",
    "name":"Manifold Key","type":"Artifact","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"{1}, {T}: Untap another target artifact. {3}, {T}: Target creature can't be blocked this turn.","artist":"Lake Hurwitz"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deeb3e","set":"Core Set 2020","number":"231",
    "name":"Marauder's Axe","type":"Artifact — Equipment","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Equipped creature gets +2/+0. Equip {2} ({2}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Mitchell Malloy"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb3f","set":"Core Set 2020","number":"150",
    "name":"Marauding Raptor","type":"Creature — Dinosaur","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"3",
    "text":"Creature spells you cast cost {1} less to cast. Whenever another creature enters the battlefield under your control, Marauding Raptor deals 2 damage to it. If a Dinosaur is dealt damage this way, Marauding Raptor gets +2/+0 until end of turn.","artist":"Bayard Wu"
},
{
    "types":["Artifact"],"colors":["R"],"_id":"5dc70e311091493610deeb40","set":"Core Set 2020","number":"151",
    "name":"Mask of Immolation","type":"Artifact — Equipment","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"When Mask of Immolation enters the battlefield, create a 1/1 red Elemental creature token, then attach Mask of Immolation to it. Equipped creature has \"Sacrifice this creature: It deals 1 damage to any target.\" Equip {2} ({2}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb41","set":"Core Set 2020","number":"29",
    "name":"Master Splicer","type":"Creature — Human Artificer","manaCost":"{3}{W}","convertedManaCost":4,"power":"1","toughness":"1",
    "text":"When Master Splicer enters the battlefield, create a 3/3 colorless Golem artifact creature token. Golems you control get +1/+1.","artist":"Chippy"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deeb42","set":"Core Set 2020","number":"65",
    "name":"Masterful Replication","type":"Instant","manaCost":"{5}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Choose one — • Create two 3/3 colorless Golem artifact creature tokens. • Choose target artifact you control. Each other artifact you control becomes a copy of that artifact until end of turn.","artist":"Victor Adame Minguez"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deeb43","set":"Core Set 2020","number":"232",
    "name":"Meteor Golem","type":"Artifact Creature — Golem","manaCost":"{7}","convertedManaCost":7,"power":"3","toughness":"3",
    "text":"When Meteor Golem enters the battlefield, destroy target nonland permanent an opponent controls.","artist":"Lake Hurwitz"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb44","set":"Core Set 2020","number":"66",
    "name":"Metropolis Sprite","type":"Creature — Faerie Rogue","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Flying {U}: Metropolis Sprite gets +1/-1 until end of turn.","artist":"Scott Chou"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e311091493610deeb45","set":"Core Set 2020","number":"182",
    "name":"Might of the Masses","type":"Instant","manaCost":"{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +1/+1 until end of turn for each creature you control.","artist":"Johann Bodin"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deeb46","set":"Core Set 2020","number":"108",
    "name":"Mind Rot","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target player discards two cards.","artist":"Seb McKinnon"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb47","set":"Core Set 2020","number":"67",
    "name":"Moat Piranhas","type":"Creature — Fish","manaCost":"{1}{U}","convertedManaCost":2,"power":"3","toughness":"3",
    "text":"Defender (This creature can't attack.)","artist":"Rudy Siswanto"
},
{
    "types":["Enchantment"],"colors":["B","G"],"_id":"5dc70e311091493610deeb48","set":"Core Set 2020","number":"214",
    "name":"Moldervine Reclamation","type":"Enchantment","manaCost":"{3}{B}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Whenever a creature you control dies, you gain 1 life and draw a card.","artist":"Antonio José Manzanedo"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e311091493610deeb49","set":"Core Set 2020","number":"30",
    "name":"Moment of Heroism","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 and gains lifelink until end of turn. (Damage dealt by the creature also causes its controller to gain that much life.)","artist":"Christopher Moeller"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb4a","set":"Core Set 2020","number":"31",
    "name":"Moorland Inquisitor","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{2}{W}: Moorland Inquisitor gains first strike until end of turn. (It deals combat damage before creatures without first strike.)","artist":"David Palumbo"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb4b","set":"Core Set 2020","number":"273",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Sam Burley"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb4c","set":"Core Set 2020","number":"274",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Karl Kopinski"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb4d","set":"Core Set 2020","number":"275",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb4e","set":"Core Set 2020","number":"276",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Andreas Rocha"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70e311091493610deeb4f","set":"Core Set 2020","number":"286",
    "name":"Mu Yanling, Celestial Wind","type":"Legendary Planeswalker — Yanling","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+1]: Until your next turn, up to one target creature gets -5/-0. [−3]: Return up to two target creatures to their owners' hands. [−7]: Creatures you control with flying get +5/+5 until end of turn.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70e311091493610deeb50","set":"Core Set 2020","number":"68",
    "name":"Mu Yanling, Sky Dancer","type":"Legendary Planeswalker — Yanling","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[+2]: Until your next turn, up to one target creature gets -2/-0 and loses flying. [−3]: Create a 4/4 blue Elemental Bird creature token with flying. [−8]: You get an emblem with \"Islands you control have '{T}: Draw a card.'\"","artist":"G-host Lee"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e311091493610deeb51","set":"Core Set 2020","number":"109",
    "name":"Murder","type":"Instant","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target creature.","artist":"Allen Williams"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deeb52","set":"Core Set 2020","number":"233",
    "name":"Mystic Forge","type":"Artifact","manaCost":"{4}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"You may look at the top card of your library any time. You may cast the top card of your library if it's an artifact card or a colorless nonland card. {T}, Pay 1 life: Exile the top card of your library.","artist":"Titus Lunter"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e311091493610deeb53","set":"Core Set 2020","number":"183",
    "name":"Natural End","type":"Instant","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy target artifact or enchantment. You gain 3 life.","artist":"Scott Chou"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deeb54","set":"Core Set 2020","number":"69",
    "name":"Negate","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Counter target noncreature spell.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb55","set":"Core Set 2020","number":"184",
    "name":"Netcaster Spider","type":"Creature — Spider","manaCost":"{2}{G}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Reach (This creature can block creatures with flying.) Whenever Netcaster Spider blocks a creature with flying, Netcaster Spider gets +2/+0 until end of turn.","artist":"Yohann Schepacz"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb56","set":"Core Set 2020","number":"185",
    "name":"Nightpack Ambusher","type":"Creature — Wolf","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Flash Other Wolves and Werewolves you control get +1/+1. At the beginning of your end step, if you didn't cast a spell this turn, create a 2/2 green Wolf creature token.","artist":"Dan Scott"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb57","set":"Core Set 2020","number":"333",
    "name":"Nimble Birdsticker","type":"Creature — Goblin","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Reach (This creature can block creatures with flying.)","artist":"Anna Podedworna"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e311091493610deeb58","set":"Core Set 2020","number":"110",
    "name":"Noxious Grasp","type":"Instant","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy target creature or planeswalker that's green or white. You gain 1 life.","artist":"Tomasz Jedruszek"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70e311091493610deeb59","set":"Core Set 2020","number":"341",
    "name":"Oakenform","type":"Enchantment — Aura","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets +3/+3.","artist":"Wayne Reynolds"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb5a","set":"Core Set 2020","number":"70",
    "name":"Octoprophet","type":"Creature — Octopus","manaCost":"{3}{U}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Octoprophet enters the battlefield, scry 2. (Look at the top two cards of your library, then put any number of them on the bottom of your library and the rest on top in any order.)","artist":"Grzegorz Rutkowski"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70e311091493610deeb5b","set":"Core Set 2020","number":"215",
    "name":"Ogre Siegebreaker","type":"Creature — Ogre Berserker","manaCost":"{2}{B}{R}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"{2}{B}{R}: Destroy target creature that was dealt damage this turn.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["G","R","U"],"_id":"5dc70e311091493610deeb5c","set":"Core Set 2020","number":"216",
    "name":"Omnath, Locus of the Roil","type":"Legendary Creature — Elemental","manaCost":"{1}{G}{U}{R}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Omnath, Locus of the Roil enters the battlefield, it deals damage to any target equal to the number of Elementals you control. Whenever a land enters the battlefield under your control, put a +1/+1 counter on target Elemental you control. If you control eight or more lands, draw a card.","artist":"Lius Lasahido"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70e311091493610deeb5d","set":"Core Set 2020","number":"186",
    "name":"Overcome","type":"Sorcery","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Creatures you control get +2/+2 and gain trample until end of turn. (They can deal excess combat damage to the player or planeswalker they're attacking.)","artist":"Craig J Spearing"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb5e","set":"Core Set 2020","number":"187",
    "name":"Overgrowth Elemental","type":"Creature — Elemental","manaCost":"{2}{G}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"When Overgrowth Elemental enters the battlefield, put a +1/+1 counter on another target Elemental you control. Whenever another creature you control dies, you gain 1 life. If that creature was an Elemental, put a +1/+1 counter on Overgrowth Elemental.","artist":"Mathias Kollros"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e311091493610deeb5f","set":"Core Set 2020","number":"32",
    "name":"Pacifism","type":"Enchantment — Aura","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature can't attack or block.","artist":"Jesper Ejsing"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb60","set":"Core Set 2020","number":"152",
    "name":"Pack Mastiff","type":"Creature — Hound","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{1}{R}: Each creature you control named Pack Mastiff gets +1/+0 until end of turn.","artist":"Svetlin Velinov"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deeb61","set":"Core Set 2020","number":"234",
    "name":"Pattern Matcher","type":"Artifact Creature — Golem","manaCost":"{4}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Pattern Matcher enters the battlefield, you may search your library for a card with the same name as another creature you control, reveal it, put it into your hand, then shuffle your library.","artist":"Jesper Ejsing"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb62","set":"Core Set 2020","number":"316",
    "name":"Phantom Warrior","type":"Creature — Illusion Warrior","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Phantom Warrior can't be blocked.","artist":"Anna Podedworna"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb63","set":"Core Set 2020","number":"261",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"John Avon"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb64","set":"Core Set 2020","number":"262",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Zoltan Boros & Gabor Szikszai"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb65","set":"Core Set 2020","number":"263",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Nils Hamm"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb66","set":"Core Set 2020","number":"264",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Andreas Rocha"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70e311091493610deeb67","set":"Core Set 2020","number":"33",
    "name":"Planar Cleansing","type":"Sorcery","manaCost":"{3}{W}{W}{W}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Destroy all nonland permanents.","artist":"Michael Komarck"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e311091493610deeb68","set":"Core Set 2020","number":"188",
    "name":"Plummet","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy target creature with flying.","artist":"Filip Burburan"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70e311091493610deeb69","set":"Core Set 2020","number":"71",
    "name":"Portal of Sanctuary","type":"Artifact","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{1}, {T}: Return target creature you control and each Aura attached to it to their owners' hands. Activate this ability only during your turn.","artist":"Randy Vargas"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deeb6a","set":"Core Set 2020","number":"235",
    "name":"Prismite","type":"Artifact Creature — Golem","manaCost":"{2}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"{2}: Add one mana of any color.","artist":"Alayna Danner"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb6b","set":"Core Set 2020","number":"342",
    "name":"Prized Unicorn","type":"Creature — Unicorn","manaCost":"{3}{G}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"All creatures able to block Prized Unicorn do so.","artist":"Rudy Siswanto"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb6c","set":"Core Set 2020","number":"309",
    "name":"Prowling Caracal","type":"Creature — Cat","manaCost":"{1}{W}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":null,"artist":"Jonathan Kuo"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e311091493610deeb6d","set":"Core Set 2020","number":"189",
    "name":"Pulse of Murasa","type":"Instant","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Return target creature or land card from a graveyard to its owner's hand. You gain 6 life.","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb6e","set":"Core Set 2020","number":"296",
    "name":"Pyroclastic Elemental","type":"Creature — Elemental","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":"5","toughness":"4",
    "text":"{1}{R}{R}: Pyroclastic Elemental deals 1 damage to target player.","artist":"Svetlin Velinov"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70e311091493610deeb6f","set":"Core Set 2020","number":"190",
    "name":"Rabid Bite","type":"Sorcery","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature you control deals damage equal to its power to target creature you don't control.","artist":"Karl Kopinski"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e311091493610deeb70","set":"Core Set 2020","number":"34",
    "name":"Raise the Alarm","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Create two 1/1 white Soldier creature tokens.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb71","set":"Core Set 2020","number":"153",
    "name":"Rapacious Dragon","type":"Creature — Dragon","manaCost":"{4}{R}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Flying When Rapacious Dragon enters the battlefield, create two Treasure tokens. (They're artifacts with \"{T}, Sacrifice this artifact: Add one mana of any color.\")","artist":"Johan Grenier"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e311091493610deeb72","set":"Core Set 2020","number":"154",
    "name":"Reckless Air Strike","type":"Sorcery","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Choose one — • Reckless Air Strike deals 3 damage to target creature with flying. • Destroy target artifact.","artist":"Jakub Kasper"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e311091493610deeb73","set":"Core Set 2020","number":"155",
    "name":"Reduce to Ashes","type":"Sorcery","manaCost":"{4}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Reduce to Ashes deals 5 damage to target creature. If that creature would die this turn, exile it instead.","artist":"Jason A. Engle"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb74","set":"Core Set 2020","number":"72",
    "name":"Renowned Weaponsmith","type":"Creature — Human Artificer","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"{T}: Add {C}{C}. Spend this mana only to cast artifact spells or activate abilities of artifacts. {U}, {T}: Search your library for a card named Heart-Piercer Bow or Vial of Dragonfire, reveal it, put it into your hand, then shuffle your library.","artist":"Eric Deschamps"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e311091493610deeb75","set":"Core Set 2020","number":"156",
    "name":"Repeated Reverberation","type":"Instant","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"When you next cast an instant spell, cast a sorcery spell, or activate a loyalty ability this turn, copy that spell or ability twice. You may choose new targets for the copies.","artist":"Izzy"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deeb76","set":"Core Set 2020","number":"236",
    "name":"Retributive Wand","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{3}, {T}: Retributive Wand deals 1 damage to any target. When Retributive Wand is put into a graveyard from the battlefield, it deals 5 damage to any target.","artist":"Zezhou Chen"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb77","set":"Core Set 2020","number":"317",
    "name":"Riddlemaster Sphinx","type":"Creature — Sphinx","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) When Riddlemaster Sphinx enters the battlefield, you may return target creature an opponent controls to its owner's hand.","artist":"Ryan Yee"
},
{
    "types":["Creature"],"colors":["G","R","W"],"_id":"5dc70e311091493610deeb78","set":"Core Set 2020","number":"281",
    "name":"Rienne, Angel of Rebirth","type":"Legendary Creature — Angel","manaCost":"{2}{R}{G}{W}","convertedManaCost":5,"power":"5","toughness":"4",
    "text":"Flying Other multicolored creatures you control get +1/+0. Whenever another multicolored creature you control dies, return it to its owner's hand at the beginning of the next end step.","artist":"Kieran Yanner"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb79","set":"Core Set 2020","number":"157",
    "name":"Ripscale Predator","type":"Creature — Dinosaur","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":"6","toughness":"5",
    "text":"Menace (This creature can't be blocked except by two or more creatures.)","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70e311091493610deeb7a","set":"Core Set 2020","number":"217",
    "name":"Risen Reef","type":"Creature — Elemental","manaCost":"{1}{G}{U}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Whenever Risen Reef or another Elemental enters the battlefield under your control, look at the top card of your library. If it's a land card, you may put it onto the battlefield tapped. If you don't put the card onto the battlefield, put it into your hand.","artist":"Johan Grenier"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb7b","set":"Core Set 2020","number":"111",
    "name":"Rotting Regisaur","type":"Creature — Zombie Dinosaur","manaCost":"{2}{B}","convertedManaCost":3,"power":"7","toughness":"6",
    "text":"At the beginning of your upkeep, discard a card.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb7c","set":"Core Set 2020","number":"334",
    "name":"Rubblebelt Recluse","type":"Creature — Ogre Berserker","manaCost":"{4}{R}","convertedManaCost":5,"power":"6","toughness":"5",
    "text":"Rubblebelt Recluse attacks each combat if able.","artist":"Zoltan Boros"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb7d","set":"Core Set 2020","number":"250",
    "name":"Rugged Highlands","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Rugged Highlands enters the battlefield tapped. When Rugged Highlands enters the battlefield, you gain 1 life. {T}: Add {R} or {G}.","artist":"Eytan Zana"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e311091493610deeb7e","set":"Core Set 2020","number":"35",
    "name":"Rule of Law","type":"Enchantment","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each player can't cast more than one spell each turn.","artist":"Scott M. Fischer"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb7f","set":"Core Set 2020","number":"73",
    "name":"Sage's Row Denizen","type":"Creature — Vedalken Wizard","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Whenever another blue creature enters the battlefield under your control, target player puts the top two cards of their library into their graveyard.","artist":"Svetlin Velinov"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deeb80","set":"Core Set 2020","number":"237",
    "name":"Salvager of Ruin","type":"Artifact Creature — Construct","manaCost":"{3}","convertedManaCost":3,"power":"2","toughness":"1",
    "text":"Sacrifice Salvager of Ruin: Choose target permanent card in your graveyard that was put there from the battlefield this turn. Return it to your hand.","artist":"James Paick"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb81","set":"Core Set 2020","number":"112",
    "name":"Sanitarium Skeleton","type":"Creature — Skeleton","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"{2}{B}: Return Sanitarium Skeleton from your graveyard to your hand.","artist":"Kev Walker"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb82","set":"Core Set 2020","number":"291",
    "name":"Savage Gorger","type":"Creature — Vampire","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Flying At the beginning of your end step, if an opponent lost life this turn, put a +1/+1 counter on Savage Gorger. (Damage causes loss of life.)","artist":"Antonio José Manzanedo"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb83","set":"Core Set 2020","number":"284",
    "name":"Savannah Sage","type":"Creature — Cat Cleric","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"When Savannah Sage enters the battlefield, you gain 2 life.","artist":"Bayard Wu"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb84","set":"Core Set 2020","number":"158",
    "name":"Scampering Scorcher","type":"Creature — Elemental","manaCost":"{3}{R}","convertedManaCost":4,"power":"1","toughness":"1",
    "text":"When Scampering Scorcher enters the battlefield, create two 1/1 red Elemental creature tokens. Elementals you control gain haste until end of turn. (They can attack and {T} this turn.)","artist":"Zoltan Boros"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deeb85","set":"Core Set 2020","number":"113",
    "name":"Scheming Symmetry","type":"Sorcery","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Choose two target players. Each of them searches their library for a card, then shuffles their library and puts that card on top of it.","artist":"Seb McKinnon"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb86","set":"Core Set 2020","number":"74",
    "name":"Scholar of the Ages","type":"Creature — Human Wizard","manaCost":"{5}{U}{U}","convertedManaCost":7,"power":"3","toughness":"3",
    "text":"When Scholar of the Ages enters the battlefield, return up to two target instant and/or sorcery cards from your graveyard to your hand.","artist":"Micah Epstein"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb87","set":"Core Set 2020","number":"159",
    "name":"Scorch Spitter","type":"Creature — Elemental Lizard","manaCost":"{R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Whenever Scorch Spitter attacks, it deals 1 damage to the player or planeswalker it's attacking.","artist":"Johan Grenier"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeb88","set":"Core Set 2020","number":"251",
    "name":"Scoured Barrens","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Scoured Barrens enters the battlefield tapped. When Scoured Barrens enters the battlefield, you gain 1 life. {T}: Add {W} or {B}.","artist":"Eytan Zana"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deeb89","set":"Core Set 2020","number":"238",
    "name":"Scuttlemutt","type":"Artifact Creature — Scarecrow","manaCost":"{3}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"{T}: Add one mana of any color. {T}: Target creature becomes the color or colors of your choice until end of turn.","artist":"Jeremy Jarvis"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb8b","set":"Core Set 2020","number":"192",
    "name":"Sedge Scorpion","type":"Creature — Scorpion","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Deathtouch (Any amount of damage this deals to a creature is enough to destroy it.)","artist":"John Stanko"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb8c","set":"Core Set 2020","number":"36",
    "name":"Sephara, Sky's Blade","type":"Legendary Creature — Angel","manaCost":"{4}{W}{W}{W}","convertedManaCost":7,"power":"7","toughness":"7",
    "text":"You may pay {W} and tap four untapped creatures you control with flying rather than pay this spell's mana cost. Flying, lifelink Other creatures you control with flying have indestructible. (Damage and effects that say \"destroy\" don't destroy them.)","artist":"Livia Prima"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70e311091493610deeb8a","set":"Core Set 2020","number":"191",
    "name":"Season of Growth","type":"Enchantment","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever a creature enters the battlefield under your control, scry 1. (Look at the top card of your library. You may put that card on the bottom of your library.) Whenever you cast a spell that targets a creature you control, draw a card.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb8d","set":"Core Set 2020","number":"310",
    "name":"Serra's Guardian","type":"Creature — Angel","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) Vigilance (Attacking doesn't cause this creature to tap.) Other creatures you control have vigilance.","artist":"Magali Villeneuve"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e311091493610deeb8e","set":"Core Set 2020","number":"193",
    "name":"Shared Summons","type":"Instant","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Search your library for up to two creature cards with different names, reveal them, put them into your hand, then shuffle your library.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb8f","set":"Core Set 2020","number":"194",
    "name":"Shifting Ceratops","type":"Creature — Dinosaur","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"5","toughness":"4",
    "text":"This spell can't be countered. Protection from blue (This creature can't be blocked, targeted, dealt damage, enchanted, or equipped by anything blue.) {G}: Shifting Ceratops gains your choice of reach, trample, or haste until end of turn.","artist":"Izzy"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deeb90","set":"Core Set 2020","number":"335",
    "name":"Shivan Dragon","type":"Creature — Dragon","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) {R}: Shivan Dragon gets +1/+0 until end of turn.","artist":"Donato Giancola"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e311091493610deeb91","set":"Core Set 2020","number":"160",
    "name":"Shock","type":"Instant","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Shock deals 2 damage to any target.","artist":"Jason Rainville"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e311091493610deeb92","set":"Core Set 2020","number":"311",
    "name":"Show of Valor","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +2/+4 until end of turn.","artist":"Micah Epstein"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb93","set":"Core Set 2020","number":"312",
    "name":"Siege Mastodon","type":"Creature — Elephant","manaCost":"{4}{W}","convertedManaCost":5,"power":"3","toughness":"5",
    "text":null,"artist":"Matt Cavotta"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deeb94","set":"Core Set 2020","number":"195",
    "name":"Silverback Shaman","type":"Creature — Ape Shaman","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":"5","toughness":"4",
    "text":"Trample (This creature can deal excess combat damage to the player or planeswalker it's attacking.) When Silverback Shaman dies, draw a card.","artist":"Mathias Kollros"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb95","set":"Core Set 2020","number":"324",
    "name":"Skeleton Archer","type":"Creature — Skeleton Archer","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Skeleton Archer enters the battlefield, it deals 1 damage to any target.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e311091493610deeb96","set":"Core Set 2020","number":"218",
    "name":"Skyknight Vanguard","type":"Creature — Human Knight","manaCost":"{R}{W}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Flying Whenever Skyknight Vanguard attacks, create a 1/1 white Soldier creature token that's tapped and attacking.","artist":"Bayard Wu"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70e311091493610deeb97","set":"Core Set 2020","number":"75",
    "name":"Sleep Paralysis","type":"Enchantment — Aura","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Enchant creature When Sleep Paralysis enters the battlefield, tap enchanted creature. Enchanted creature doesn't untap during its controller's untap step.","artist":"Josu Hernaiz"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeb98","set":"Core Set 2020","number":"318",
    "name":"Snapping Drake","type":"Creature — Drake","manaCost":"{3}{U}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.)","artist":"Todd Lockwood"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb9a","set":"Core Set 2020","number":"292",
    "name":"Sorin's Guide","type":"Creature — Vampire","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"4","toughness":"2",
    "text":"When Sorin's Guide enters the battlefield, you may search your library and/or graveyard for a card named Sorin, Vampire Lord, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deeb99","set":"Core Set 2020","number":"114",
    "name":"Sorcerer of the Fang","type":"Creature — Human Wizard","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"{5}{B}, {T}: Sorcerer of the Fang deals 2 damage to target opponent or planeswalker.","artist":"Caio Monteiro"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e311091493610deeb9b","set":"Core Set 2020","number":"325",
    "name":"Sorin's Thirst","type":"Instant","manaCost":"{B}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Sorin's Thirst deals 2 damage to target creature and you gain 2 life.","artist":"Karl Kopinski"
},
{
    "types":["Planeswalker"],"colors":["B"],"_id":"5dc70e311091493610deeb9c","set":"Core Set 2020","number":"115",
    "name":"Sorin, Imperious Bloodlord","type":"Legendary Planeswalker — Sorin","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"[+1]: Target creature you control gains deathtouch and lifelink until end of turn. If it's a Vampire, put a +1/+1 counter on it. [+1]: You may sacrifice a Vampire. When you do, Sorin, Imperious Bloodlord deals 3 damage to any target and you gain 3 life. [−3]: You may put a Vampire creature card from your hand onto the battlefield.","artist":"Chase Stone"
},
{
    "types":["Planeswalker"],"colors":["B"],"_id":"5dc70e311091493610deeb9d","set":"Core Set 2020","number":"290",
    "name":"Sorin, Vampire Lord","type":"Legendary Planeswalker — Sorin","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+1]: Up to one target creature gets +2/+0 until end of turn. [−2]: Sorin, Vampire Lord deals 4 damage to any target. You gain 4 life. [−8]: Until end of turn, each Vampire you control gains \"{T}: Gain control of target creature.\"","artist":"Chris Rallis"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deeb9e","set":"Core Set 2020","number":"116",
    "name":"Soul Salvage","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Return up to two target creature cards from your graveyard to your hand.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeb9f","set":"Core Set 2020","number":"37",
    "name":"Soulmender","type":"Creature — Human Cleric","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"{T}: You gain 1 life.","artist":"James Ryman"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deeba0","set":"Core Set 2020","number":"76",
    "name":"Spectral Sailor","type":"Creature — Spirit Pirate","manaCost":"{U}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Flash (You may cast this spell any time you could cast an instant.) Flying {3}{U}: Draw a card.","artist":"Cristi Balanescu"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeba1","set":"Core Set 2020","number":"38",
    "name":"Squad Captain","type":"Creature — Human Soldier","manaCost":"{4}{W}","convertedManaCost":5,"power":"2","toughness":"2",
    "text":"Vigilance (Attacking doesn't cause this creature to tap.) Squad Captain enters the battlefield with a +1/+1 counter on it for each other creature you control.","artist":"Cristi Balanescu"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeba2","set":"Core Set 2020","number":"39",
    "name":"Starfield Mystic","type":"Creature — Human Cleric","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Enchantment spells you cast cost {1} less to cast. Whenever an enchantment you control is put into a graveyard from the battlefield, put a +1/+1 counter on Starfield Mystic.","artist":"Eric Deschamps"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deeba3","set":"Core Set 2020","number":"40",
    "name":"Steadfast Sentry","type":"Creature — Human Soldier","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Vigilance (Attacking doesn't cause this creature to tap.) When Steadfast Sentry dies, put a +1/+1 counter on target creature you control.","artist":"Bram Sels"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deeba4","set":"Core Set 2020","number":"239",
    "name":"Steel Overseer","type":"Artifact Creature — Construct","manaCost":"{2}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"{T}: Put a +1/+1 counter on each artifact creature you control.","artist":"Chris Rahn"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e311091493610deeba5","set":"Core Set 2020","number":"240",
    "name":"Stone Golem","type":"Artifact Creature — Golem","manaCost":"{5}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":null,"artist":"Martina Pilcerova"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeba6","set":"Core Set 2020","number":"269",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Mike Bierek"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeba7","set":"Core Set 2020","number":"270",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Cliff Childs"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeba8","set":"Core Set 2020","number":"271",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Jonas De Ro"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deeba9","set":"Core Set 2020","number":"272",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Jonas De Ro"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebaa","set":"Core Set 2020","number":"252",
    "name":"Swiftwater Cliffs","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Swiftwater Cliffs enters the battlefield tapped. When Swiftwater Cliffs enters the battlefield, you gain 1 life. {T}: Add {U} or {R}.","artist":"Eytan Zana"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70e311091493610deebab","set":"Core Set 2020","number":"313",
    "name":"Take Vengeance","type":"Sorcery","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy target tapped creature.","artist":"Randy Vargas"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deebac","set":"Core Set 2020","number":"77",
    "name":"Tale's End","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Counter target activated ability, triggered ability, or legendary spell.","artist":"Randy Vargas"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e311091493610deebad","set":"Core Set 2020","number":"161",
    "name":"Tectonic Rift","type":"Sorcery","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy target land. Creatures without flying can't block this turn.","artist":"John Avon"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebae","set":"Core Set 2020","number":"253",
    "name":"Temple of Epiphany","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Temple of Epiphany enters the battlefield tapped. When Temple of Epiphany enters the battlefield, scry 1. {T}: Add {U} or {R}.","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebaf","set":"Core Set 2020","number":"254",
    "name":"Temple of Malady","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Temple of Malady enters the battlefield tapped. When Temple of Malady enters the battlefield, scry 1. {T}: Add {B} or {G}.","artist":"Titus Lunter"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebb0","set":"Core Set 2020","number":"255",
    "name":"Temple of Mystery","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Temple of Mystery enters the battlefield tapped. When Temple of Mystery enters the battlefield, scry 1. {T}: Add {G} or {U}.","artist":"Piotr Dura"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebb1","set":"Core Set 2020","number":"256",
    "name":"Temple of Silence","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Temple of Silence enters the battlefield tapped. When Temple of Silence enters the battlefield, scry 1. {T}: Add {W} or {B}.","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebb2","set":"Core Set 2020","number":"257",
    "name":"Temple of Triumph","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Temple of Triumph enters the battlefield tapped. When Temple of Triumph enters the battlefield, scry 1. {T}: Add {R} or {W}.","artist":"Piotr Dura"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deebb3","set":"Core Set 2020","number":"196",
    "name":"Thicket Crasher","type":"Creature — Elemental Rhino","manaCost":"{3}{G}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Trample (This creature can deal excess combat damage to the player or planeswalker it's attacking.) Other Elementals you control have trample.","artist":"Mathias Kollros"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deebb4","set":"Core Set 2020","number":"293",
    "name":"Thirsting Bloodlord","type":"Creature — Vampire","manaCost":"{2}{B}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Other Vampires you control get +1/+1.","artist":"Joseph Meehan"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebb5","set":"Core Set 2020","number":"258",
    "name":"Thornwood Falls","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Thornwood Falls enters the battlefield tapped. When Thornwood Falls enters the battlefield, you gain 1 life. {T}: Add {G} or {U}.","artist":"Eytan Zana"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e311091493610deebb6","set":"Core Set 2020","number":"117",
    "name":"Thought Distortion","type":"Sorcery","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"This spell can't be countered. Target opponent reveals their hand. Exile all noncreature, nonland cards from that player's hand and graveyard.","artist":"David Palumbo"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deebb7","set":"Core Set 2020","number":"197",
    "name":"Thrashing Brontodon","type":"Creature — Dinosaur","manaCost":"{1}{G}{G}","convertedManaCost":3,"power":"3","toughness":"4",
    "text":"{1}, Sacrifice Thrashing Brontodon: Destroy target artifact or enchantment.","artist":"Jakub Kasper"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deebb8","set":"Core Set 2020","number":"162",
    "name":"Thunderkin Awakener","type":"Creature — Elemental Shaman","manaCost":"{1}{R}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Haste Whenever Thunderkin Awakener attacks, choose target Elemental creature card in your graveyard with toughness less than Thunderkin Awakener's toughness. Return that card to the battlefield tapped and attacking. Sacrifice it at the beginning of the next end step.","artist":"Yongjae Choi"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e311091493610deebb9","set":"Core Set 2020","number":"343",
    "name":"Titanic Growth","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +4/+4 until end of turn.","artist":"Ryan Pancoast"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e311091493610deebba","set":"Core Set 2020","number":"219",
    "name":"Tomebound Lich","type":"Creature — Zombie Wizard","manaCost":"{1}{U}{B}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"Deathtouch (Any amount of damage this deals to a creature is enough to destroy it.) Lifelink (Damage dealt by this creature also causes you to gain that much life.) Whenever Tomebound Lich enters the battlefield or deals combat damage to a player, draw a card, then discard a card.","artist":"Cristi Balanescu"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebbb","set":"Core Set 2020","number":"259",
    "name":"Tranquil Cove","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Tranquil Cove enters the battlefield tapped. When Tranquil Cove enters the battlefield, you gain 1 life. {T}: Add {W} or {U}.","artist":"John Avon"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deebbc","set":"Core Set 2020","number":"314",
    "name":"Trusted Pegasus","type":"Creature — Pegasus","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) Whenever Trusted Pegasus attacks, target attacking creature without flying gains flying until end of turn.","artist":"Chris Rahn"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deebbd","set":"Core Set 2020","number":"285",
    "name":"Twinblade Paladin","type":"Creature — Human Knight","manaCost":"{3}{W}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Whenever you gain life, put a +1/+1 counter on Twinblade Paladin. As long as you have 25 or more life, Twinblade Paladin has double strike. (It deals both first-strike and regular combat damage.)","artist":"Jana Schirmer"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e311091493610deebbe","set":"Core Set 2020","number":"163",
    "name":"Uncaged Fury","type":"Instant","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target creature gets +1/+1 and gains double strike until end of turn. (It deals both first-strike and regular combat damage.)","artist":"Jason Kang"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deebbf","set":"Core Set 2020","number":"164",
    "name":"Unchained Berserker","type":"Creature — Human Berserker","manaCost":"{1}{R}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Protection from white (This creature can't be blocked, targeted, dealt damage, enchanted, or equipped by anything white.) Unchained Berserker gets +2/+0 as long as it's attacking.","artist":"Bram Sels"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deebc0","set":"Core Set 2020","number":"118",
    "name":"Undead Servant","type":"Creature — Zombie","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"When Undead Servant enters the battlefield, create a 2/2 black Zombie creature token for each card named Undead Servant in your graveyard.","artist":"James Zapata"
},
{
    "types":["Enchantment"],"colors":["B"],"_id":"5dc70e311091493610deebc1","set":"Core Set 2020","number":"119",
    "name":"Unholy Indenture","type":"Enchantment — Aura","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Enchant creature When enchanted creature dies, return that card to the battlefield under your control with a +1/+1 counter on it.","artist":"Seb McKinnon"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e311091493610deebc2","set":"Core Set 2020","number":"78",
    "name":"Unsummon","type":"Instant","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Return target creature to its owner's hand.","artist":"Izzy"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deebc3","set":"Core Set 2020","number":"326",
    "name":"Vampire Opportunist","type":"Creature — Vampire","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"{6}{B}: Each opponent loses 2 life and you gain 2 life.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deebc4","set":"Core Set 2020","number":"120",
    "name":"Vampire of the Dire Moon","type":"Creature — Vampire","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Deathtouch (Any amount of damage this deals to a creature is enough to destroy it.) Lifelink (Damage dealt by this creature also causes you to gain that much life.)","artist":"Anna Podedworna"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e311091493610deebc5","set":"Core Set 2020","number":"198",
    "name":"Veil of Summer","type":"Instant","manaCost":"{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Draw a card if an opponent has cast a blue or black spell this turn. Spells you control can't be countered this turn. You and permanents you control gain hexproof from blue and from black until end of turn. (You and they can't be the targets of blue or black spells or abilities your opponents control.)","artist":"Lake Hurwitz"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deebc6","set":"Core Set 2020","number":"121",
    "name":"Vengeful Warchief","type":"Creature — Orc Warrior","manaCost":"{4}{B}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Whenever you lose life for the first time each turn, put a +1/+1 counter on Vengeful Warchief. (Damage causes loss of life.)","artist":"Karl Kopinski"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e311091493610deebc7","set":"Core Set 2020","number":"241",
    "name":"Vial of Dragonfire","type":"Artifact","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"{2}, {T}, Sacrifice Vial of Dragonfire: It deals 2 damage to target creature.","artist":"Franz Vohwinkel"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deebc8","set":"Core Set 2020","number":"122",
    "name":"Vilis, Broker of Blood","type":"Legendary Creature — Demon","manaCost":"{5}{B}{B}{B}","convertedManaCost":8,"power":"8","toughness":"8",
    "text":"Flying {B}, Pay 2 life: Target creature gets -1/-1 until end of turn. Whenever you lose life, draw that many cards. (Damage causes loss of life.)","artist":"Tyler Jacobson"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deebc9","set":"Core Set 2020","number":"301",
    "name":"Vivien's Crocodile","type":"Creature — Crocodile Spirit","manaCost":"{2}{G}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Vivien's Crocodile gets +1/+1 as long as you control a Vivien planeswalker.","artist":"Bayard Wu"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70e311091493610deebca","set":"Core Set 2020","number":"199",
    "name":"Vivien, Arkbow Ranger","type":"Legendary Planeswalker — Vivien","manaCost":"{1}{G}{G}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"[+1]: Distribute two +1/+1 counters among up to two target creatures. They gain trample until end of turn. [−3]: Target creature you control deals damage equal to its power to target creature or planeswalker. [−5]: You may choose a creature card you own from outside the game, reveal it, and put it into your hand.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70e311091493610deebcb","set":"Core Set 2020","number":"298",
    "name":"Vivien, Nature's Avenger","type":"Legendary Planeswalker — Vivien","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+1]: Put three +1/+1 counters on up to one target creature. [−1]: Reveal cards from the top of your library until you reveal a creature card. Put that card into your hand and the rest on the bottom of your library in a random order. [−6]: Target creature gets +10/+10 and gains trample until end of turn.","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deebcc","set":"Core Set 2020","number":"336",
    "name":"Volcanic Dragon","type":"Creature — Dragon","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":"4","toughness":"4",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) Haste (This creature can attack and {T} as soon as it comes under your control.)","artist":"Chris Rahn"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deebcd","set":"Core Set 2020","number":"200",
    "name":"Voracious Hydra","type":"Creature — Hydra","manaCost":"{X}{G}{G}","convertedManaCost":2,"power":"0","toughness":"1",
    "text":"Trample Voracious Hydra enters the battlefield with X +1/+1 counters on it. When Voracious Hydra enters the battlefield, choose one — • Double the number of +1/+1 counters on Voracious Hydra. • Voracious Hydra fights target creature you don't control.","artist":"Wayne Reynolds"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deebce","set":"Core Set 2020","number":"201",
    "name":"Vorstclaw","type":"Creature — Elemental Horror","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":"7","toughness":"7",
    "text":null,"artist":"Lucas Graciano"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deebcf","set":"Core Set 2020","number":"202",
    "name":"Wakeroot Elemental","type":"Creature — Elemental","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"{G}{G}{G}{G}{G}: Untap target land you control. It becomes a 5/5 Elemental creature with haste. It's still a land. (This effect lasts as long as that land remains on the battlefield.)","artist":"Filip Burburan"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deebd0","set":"Core Set 2020","number":"327",
    "name":"Walking Corpse","type":"Creature — Zombie","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":null,"artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deebd1","set":"Core Set 2020","number":"79",
    "name":"Warden of Evos Isle","type":"Creature — Bird Wizard","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying Creature spells with flying you cast cost {1} less to cast.","artist":"Nils Hamm"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deebd2","set":"Core Set 2020","number":"288",
    "name":"Waterkin Shaman","type":"Creature — Elemental Shaman","manaCost":"{1}{U}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Whenever a creature with flying enters the battlefield under your control, Waterkin Shaman gets +1/+1 until end of turn.","artist":"Yeong-Hao Han"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e311091493610deebd3","set":"Core Set 2020","number":"297",
    "name":"Wildfire Elemental","type":"Creature — Elemental","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Whenever an opponent is dealt noncombat damage, creatures you control get +1/+0 until end of turn.","artist":"Svetlin Velinov"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e311091493610deebd4","set":"Core Set 2020","number":"260",
    "name":"Wind-Scarred Crag","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Wind-Scarred Crag enters the battlefield tapped. When Wind-Scarred Crag enters the battlefield, you gain 1 life. {T}: Add {R} or {W}.","artist":"Eytan Zana"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70e311091493610deebd5","set":"Core Set 2020","number":"80",
    "name":"Winged Words","type":"Sorcery","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"This spell costs {1} less to cast if you control a creature with flying. Draw two cards.","artist":"Chris Seaman"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70e311091493610deebd6","set":"Core Set 2020","number":"203",
    "name":"Wolfkin Bond","type":"Enchantment — Aura","manaCost":"{4}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Enchant creature When Wolfkin Bond enters the battlefield, create a 2/2 green Wolf creature token. Enchanted creature gets +2/+2.","artist":"Lindsey Look"
},
{
    "types":["Artifact"],"colors":["G"],"_id":"5dc70e311091493610deebd7","set":"Core Set 2020","number":"204",
    "name":"Wolfrider's Saddle","type":"Artifact — Equipment","manaCost":"{3}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"When Wolfrider's Saddle enters the battlefield, create a 2/2 green Wolf creature token, then attach Wolfrider's Saddle to it. Equipped creature gets +1/+1 and can't be blocked by more than one creature. Equip {3} ({3}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Raoul Vitale"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deebd8","set":"Core Set 2020","number":"205",
    "name":"Woodland Champion","type":"Creature — Elf Scout","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever one or more tokens enter the battlefield under your control, put that many +1/+1 counters on Woodland Champion.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e311091493610deebd9","set":"Core Set 2020","number":"344",
    "name":"Woodland Mystic","type":"Creature — Elf Druid","manaCost":"{1}{G}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"{T}: Add {G}.","artist":"Uriah Voth"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deebda","set":"Core Set 2020","number":"289",
    "name":"Yanling's Harbinger","type":"Creature — Bird","manaCost":"{3}{U}{U}","convertedManaCost":5,"power":"2","toughness":"4",
    "text":"Flying When Yanling's Harbinger enters the battlefield, you may search your library and/or graveyard for a card named Mu Yanling, Celestial Wind, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Zezhou Chen"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e311091493610deebdb","set":"Core Set 2020","number":"123",
    "name":"Yarok's Fenlurker","type":"Creature — Horror","manaCost":"{B}{B}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"When Yarok's Fenlurker enters the battlefield, each opponent exiles a card from their hand. {2}{B}: Yarok's Fenlurker gets +1/+1 until end of turn.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e311091493610deebdc","set":"Core Set 2020","number":"81",
    "name":"Yarok's Wavecrasher","type":"Creature — Elemental","manaCost":"{3}{U}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"When Yarok's Wavecrasher enters the battlefield, return another creature you control to its owner's hand.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["B","G","U"],"_id":"5dc70e311091493610deebdd","set":"Core Set 2020","number":"220",
    "name":"Yarok, the Desecrated","type":"Legendary Creature — Elemental Horror","manaCost":"{2}{B}{G}{U}","convertedManaCost":5,"power":"3","toughness":"5",
    "text":"Deathtouch, lifelink If a permanent entering the battlefield causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e311091493610deebde","set":"Core Set 2020","number":"41",
    "name":"Yoked Ox","type":"Creature — Ox","manaCost":"{W}","convertedManaCost":1,"power":"0","toughness":"4",
    "text":null,"artist":"Ryan Yee"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70e311091493610deebdf","set":"Core Set 2020","number":"82",
    "name":"Zephyr Charge","type":"Enchantment","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"{1}{U}: Target creature gains flying until end of turn.","artist":"Steve Prescott"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2527d","set":"Guilds of Ravnica","number":"121",
    "name":"Affectionate Indrik","type":"Creature — Beast","manaCost":"{5}{G}","convertedManaCost":6,"power":"4","toughness":"4",
    "text":"When Affectionate Indrik enters the battlefield, you may have it fight target creature you don't control. (Each deals damage equal to its power to the other.)","artist":"Steve Prescott"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2527e","set":"Guilds of Ravnica","number":"122",
    "name":"Arboretum Elemental","type":"Creature — Elemental","manaCost":"{7}{G}{G}","convertedManaCost":9,"power":"7","toughness":"5",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of the creature's color.) Hexproof (This creature can't be the target of spells or abilities your opponents control.)","artist":"James Paick"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d2527f","set":"Guilds of Ravnica","number":"91",
    "name":"Arclight Phoenix","type":"Creature — Phoenix","manaCost":"{3}{R}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Flying, haste At the beginning of combat on your turn, if you've cast three or more instant and sorcery spells this turn, return Arclight Phoenix from your graveyard to the battlefield.","artist":"Slawomir Maniak"
},
{
    "types":["Instant"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d25280","set":"Guilds of Ravnica","number":"151",
    "name":"Artful Takedown","type":"Instant","manaCost":"{2}{U}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Choose one or both — • Tap target creature. • Target creature gets -2/-4 until end of turn.","artist":"Mike Bierek"
},
{
    "types":["Instant"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d25281","set":"Guilds of Ravnica","number":"152",
    "name":"Assassin's Trophy","type":"Instant","manaCost":"{B}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy target permanent an opponent controls. Its controller may search their library for a basic land card, put it onto the battlefield, then shuffle their library.","artist":"Seb McKinnon"
},
{
    "types":["Instant"],"colors":["W","G"],"_id":"5dc70e70b10b7d3670d25282","set":"Guilds of Ravnica","number":"221",
    "name":"Assemble","type":"Instant","manaCost":"{4}{G}{W}","convertedManaCost":8,"power":null,"toughness":null,
    "text":"Create three 2/2 green and white Elf Knight creature tokens with vigilance.","artist":"Jason A. Engle"
},
{
    "types":["Instant"],"colors":["W","G"],"_id":"5dc70e70b10b7d3670d25283","set":"Guilds of Ravnica","number":"221",
    "name":"Assure","type":"Instant","manaCost":"{G/W}{G/W}","convertedManaCost":8,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on target creature. That creature gains indestructible until end of turn.","artist":"Jason A. Engle"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d25284","set":"Guilds of Ravnica","number":"271",
    "name":"Attendant of Vraska","type":"Creature — Zombie Soldier","manaCost":"{1}{B}{G}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"When Attendant of Vraska dies, if you control a Vraska planeswalker, you gain life equal to Attendant of Vraska's power.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d25285","set":"Guilds of Ravnica","number":"153",
    "name":"Aurelia, Exemplar of Justice","type":"Legendary Creature — Angel","manaCost":"{2}{R}{W}","convertedManaCost":4,"power":"2","toughness":"5",
    "text":"Flying Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.) At the beginning of combat on your turn, choose up to one target creature you control. Until end of turn, that creature gets +2/+0, gains trample if it's red, and gains vigilance if it's white.","artist":"Chris Rahn"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25286","set":"Guilds of Ravnica","number":"92",
    "name":"Barging Sergeant","type":"Creature — Minotaur Soldier","manaCost":"{4}{R}","convertedManaCost":5,"power":"4","toughness":"2",
    "text":"Haste Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.)","artist":"Filip Burburan"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2528b","set":"Guilds of Ravnica","number":"123",
    "name":"Beast Whisperer","type":"Creature — Elf Druid","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Whenever you cast a creature spell, draw a card.","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25287","set":"Guilds of Ravnica","number":"61",
    "name":"Barrier of Bones","type":"Creature — Skeleton Wall","manaCost":"{B}","convertedManaCost":1,"power":"0","toughness":"3",
    "text":"Defender When Barrier of Bones enters the battlefield, surveil 1. (Look at the top card of your library. You may put that card into your graveyard.)","artist":"Vincent Proce"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25288","set":"Guilds of Ravnica","number":"62",
    "name":"Bartizan Bats","type":"Creature — Bat","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"1",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.)","artist":"Nils Hamm"
},
{
    "types":["Sorcery"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25289","set":"Guilds of Ravnica","number":"154",
    "name":"Beacon Bolt","type":"Sorcery","manaCost":"{1}{U}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Beacon Bolt deals damage to target creature equal to the total number of instant and sorcery cards you own in exile and in your graveyard. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d2528a","set":"Guilds of Ravnica","number":"155",
    "name":"Beamsplitter Mage","type":"Creature — Vedalken Wizard","manaCost":"{U}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever you cast an instant or sorcery spell that targets only Beamsplitter Mage, if you control one or more other creatures that spell could target, choose one of those creatures. Copy that spell. The copy targets the chosen creature.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d2528c","set":"Guilds of Ravnica","number":"1",
    "name":"Blade Instructor","type":"Creature — Human Soldier","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"1",
    "text":"Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.)","artist":"Zoltan Boros"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25290","set":"Guilds of Ravnica","number":"243",
    "name":"Boros Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Boros Guildgate enters the battlefield tapped. {T}: Add {R} or {W}.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d2528e","set":"Guilds of Ravnica","number":"93",
    "name":"Book Devourer","type":"Creature — Beast","manaCost":"{5}{R}","convertedManaCost":6,"power":"4","toughness":"5",
    "text":"Trample Whenever Book Devourer deals combat damage to a player, you may discard all the cards in your hand. If you do, draw that many cards.","artist":"Kev Walker"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2528d","set":"Guilds of Ravnica","number":"63",
    "name":"Blood Operative","type":"Creature — Vampire Assassin","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":"3","toughness":"1",
    "text":"Lifelink When Blood Operative enters the battlefield, you may exile target card from a graveyard. Whenever you surveil, if Blood Operative is in your graveyard, you may pay 3 life. If you do, return Blood Operative to your hand.","artist":"Livia Prima"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d2528f","set":"Guilds of Ravnica","number":"156",
    "name":"Boros Challenger","type":"Creature — Human Soldier","manaCost":"{R}{W}","convertedManaCost":2,"power":"2","toughness":"3",
    "text":"Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.) {2}{R}{W}: Boros Challenger gets +1/+1 until end of turn.","artist":"Gabor Szikszai"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25295","set":"Guilds of Ravnica","number":"64",
    "name":"Burglar Rat","type":"Creature — Rat","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"When Burglar Rat enters the battlefield, each opponent discards a card.","artist":"Tyler Walpole"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25291","set":"Guilds of Ravnica","number":"244",
    "name":"Boros Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Boros Guildgate enters the battlefield tapped. {T}: Add {R} or {W}.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25293","set":"Guilds of Ravnica","number":"2",
    "name":"Bounty Agent","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Vigilance {T}, Sacrifice Bounty Agent: Destroy target legendary permanent that's an artifact, creature, or enchantment.","artist":"Randy Vargas"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d25292","set":"Guilds of Ravnica","number":"231",
    "name":"Boros Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {R} or {W}. {R/W}{R/W}{R/W}{R/W}, {T}, Sacrifice Boros Locket: Draw two cards.","artist":"Aaron Miller"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25294","set":"Guilds of Ravnica","number":"124",
    "name":"Bounty of Might","type":"Instant","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Target creature gets +3/+3 until end of turn. Target creature gets +3/+3 until end of turn. Target creature gets +3/+3 until end of turn.","artist":"Even Amundsen"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e70b10b7d3670d2529a","set":"Guilds of Ravnica","number":"232",
    "name":"Chamber Sentry","type":"Artifact Creature — Construct","manaCost":"{X}","convertedManaCost":0,"power":"0","toughness":"0",
    "text":"Chamber Sentry enters the battlefield with a +1/+1 counter on it for each color of mana spent to cast it. {X}, {T}, Remove X +1/+1 counters from Chamber Sentry: It deals X damage to any target. {W}{U}{B}{R}{G}: Return Chamber Sentry from your graveyard to your hand.","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d25296","set":"Guilds of Ravnica","number":"157",
    "name":"Camaraderie","type":"Sorcery","manaCost":"{4}{G}{W}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"You gain X life and draw X cards, where X is the number of creatures you control. Creatures you control get +1/+1 until end of turn.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25298","set":"Guilds of Ravnica","number":"31",
    "name":"Capture Sphere","type":"Enchantment — Aura","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Flash Enchant creature When Capture Sphere enters the battlefield, tap enchanted creature. Enchanted creature doesn't untap during its controller's untap step.","artist":"Mark Behm"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25297","set":"Guilds of Ravnica","number":"3",
    "name":"Candlelight Vigil","type":"Enchantment — Aura","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets +3/+2 and has vigilance.","artist":"Alexander Forssberg"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d25299","set":"Guilds of Ravnica","number":"158",
    "name":"Centaur Peacemaker","type":"Creature — Centaur Cleric","manaCost":"{1}{G}{W}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"When Centaur Peacemaker enters the battlefield, each player gains 4 life.","artist":"Raoul Vitale"
},
{
    "types":["Instant"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d2529b","set":"Guilds of Ravnica","number":"159",
    "name":"Chance for Glory","type":"Instant","manaCost":"{1}{R}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creatures you control gain indestructible. Take an extra turn after this one. At the beginning of that turn's end step, you lose the game.","artist":"Bram Sels"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2529d","set":"Guilds of Ravnica","number":"32",
    "name":"Chemister's Insight","type":"Instant","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Draw two cards. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Josh Hass"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d2529f","set":"Guilds of Ravnica","number":"233",
    "name":"Chromatic Lantern","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Lands you control have \"{T}: Add one mana of any color.\" {T}: Add one mana of any color.","artist":"Jung Park"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d2529c","set":"Guilds of Ravnica","number":"160",
    "name":"Charnel Troll","type":"Creature — Troll","manaCost":"{1}{B}{G}","convertedManaCost":3,"power":"4","toughness":"4",
    "text":"Trample At the beginning of your upkeep, exile a creature card from your graveyard. If you do, put a +1/+1 counter on Charnel Troll. Otherwise, sacrifice it. {B}{G}, Discard a creature card: Put a +1/+1 counter on Charnel Troll.","artist":"Daniel Ljunggren"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2529e","set":"Guilds of Ravnica","number":"65",
    "name":"Child of Night","type":"Creature — Vampire","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Lifelink","artist":"Igor Kieryluk"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252a0","set":"Guilds of Ravnica","number":"125",
    "name":"Circuitous Route","type":"Sorcery","manaCost":"{3}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Search your library for up to two basic land cards and/or Gate cards, put them onto the battlefield tapped, then shuffle your library.","artist":"Milivoj Ćeran"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252a4","set":"Guilds of Ravnica","number":"94",
    "name":"Command the Storm","type":"Instant","manaCost":"{4}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Command the Storm deals 5 damage to target creature.","artist":"Jason Rainville"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252a2","set":"Guilds of Ravnica","number":"4",
    "name":"Citywide Bust","type":"Sorcery","manaCost":"{1}{W}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Destroy all creatures with toughness 4 or greater.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252a1","set":"Guilds of Ravnica","number":"33",
    "name":"Citywatch Sphinx","type":"Creature — Sphinx","manaCost":"{5}{U}","convertedManaCost":6,"power":"5","toughness":"4",
    "text":"Flying When Citywatch Sphinx dies, surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on the top of your library in any order.)","artist":"Magali Villeneuve"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252a3","set":"Guilds of Ravnica","number":"5",
    "name":"Collar the Culprit","type":"Instant","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy target creature with toughness 4 or greater.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d252a5","set":"Guilds of Ravnica","number":"161",
    "name":"Conclave Cavalier","type":"Creature — Centaur Knight","manaCost":"{G}{G}{W}{W}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"Vigilance When Conclave Cavalier dies, create two 2/2 green and white Elf Knight creature tokens with vigilance.","artist":"Tomasz Jedruszek"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252a7","set":"Guilds of Ravnica","number":"6",
    "name":"Conclave Tribunal","type":"Enchantment","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) When Conclave Tribunal enters the battlefield, exile target nonland permanent an opponent controls until Conclave Tribunal leaves the battlefield.","artist":"Seb McKinnon"
},
{
    "types":["Sorcery"],"colors":["U","B"],"_id":"5dc70e70b10b7d3670d252a9","set":"Guilds of Ravnica","number":"222",
    "name":"Connive","type":"Sorcery","manaCost":"{2}{U/B}{U/B}","convertedManaCost":9,"power":null,"toughness":null,
    "text":"Gain control of target creature with power 2 or less.","artist":"Dan Scott"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d252a6","set":"Guilds of Ravnica","number":"162",
    "name":"Conclave Guildmage","type":"Creature — Elf Cleric","manaCost":"{G}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{G}, {T}: Creatures you control gain trample until end of turn. {5}{W}, {T}: Create a 2/2 green and white Elf Knight creature token with vigilance.","artist":"Jason Rainville"
},
{
    "types":["Sorcery"],"colors":["U","B"],"_id":"5dc70e70b10b7d3670d252a8","set":"Guilds of Ravnica","number":"222",
    "name":"Concoct","type":"Sorcery","manaCost":"{3}{U}{B}","convertedManaCost":9,"power":null,"toughness":null,
    "text":"Surveil 3, then return a creature card from your graveyard to the battlefield.","artist":"Dan Scott"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e70b10b7d3670d252ac","set":"Guilds of Ravnica","number":"66",
    "name":"Creeping Chill","type":"Sorcery","manaCost":"{3}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creeping Chill deals 3 damage to each opponent and you gain 3 life. When Creeping Chill is put into your graveyard from your library, you may exile it. If you do, Creeping Chill deals 3 damage to each opponent and you gain 3 life.","artist":"Wisnu Tan"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d252ab","set":"Guilds of Ravnica","number":"163",
    "name":"Crackling Drake","type":"Creature — Drake","manaCost":"{U}{U}{R}{R}","convertedManaCost":4,"power":"*","toughness":"4",
    "text":"Flying Crackling Drake's power is equal to the total number of instant and sorcery cards you own in exile and in your graveyard. When Crackling Drake enters the battlefield, draw a card.","artist":"Victor Adame Minguez"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252aa","set":"Guilds of Ravnica","number":"95",
    "name":"Cosmotronic Wave","type":"Sorcery","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Cosmotronic Wave deals 1 damage to each creature your opponents control. Creatures your opponents control can't block this turn.","artist":"Titus Lunter"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252b1","set":"Guilds of Ravnica","number":"34",
    "name":"Dazzling Lights","type":"Instant","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets -3/-0 until end of turn. Surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on the top of your library in any order.)","artist":"Robbie Trevino"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252ad","set":"Guilds of Ravnica","number":"7",
    "name":"Crush Contraband","type":"Instant","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Choose one or both — • Exile target artifact. • Exile target enchantment.","artist":"Jason A. Engle"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252ae","set":"Guilds of Ravnica","number":"126",
    "name":"Crushing Canopy","type":"Instant","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Choose one — • Destroy target creature with flying. • Destroy target enchantment.","artist":"Simon Dominic"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252b0","set":"Guilds of Ravnica","number":"8",
    "name":"Dawn of Hope","type":"Enchantment","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever you gain life, you may pay {2}. If you do, draw a card. {3}{W}: Create a 1/1 white Soldier creature token with lifelink.","artist":"Sung Choi"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d252af","set":"Guilds of Ravnica","number":"164",
    "name":"Darkblade Agent","type":"Creature — Human Assassin","manaCost":"{1}{U}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"As long as you've surveilled this turn, Darkblade Agent has deathtouch and \"Whenever this creature deals combat damage to a player, you draw a card.\"","artist":"Joe Slucher"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252b6","set":"Guilds of Ravnica","number":"35",
    "name":"Devious Cover-Up","type":"Instant","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Counter target spell. If that spell is countered this way, exile it instead of putting it into its owner's graveyard. You may shuffle up to four target cards from your graveyard into your library.","artist":"Micah Epstein"
},
{
    "types":["Enchantment"],"colors":["B"],"_id":"5dc70e70b10b7d3670d252b2","set":"Guilds of Ravnica","number":"67",
    "name":"Dead Weight","type":"Enchantment — Aura","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets -2/-2.","artist":"Lake Hurwitz"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e70b10b7d3670d252b3","set":"Guilds of Ravnica","number":"68",
    "name":"Deadly Visit","type":"Sorcery","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Destroy target creature. Surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)","artist":"Scott Murphy"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252b5","set":"Guilds of Ravnica","number":"9",
    "name":"Demotion","type":"Enchantment — Aura","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature can't block, and its activated abilities can't be activated.","artist":"Joe Slucher"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d252bb","set":"Guilds of Ravnica","number":"234",
    "name":"Dimir Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {U} or {B}. {U/B}{U/B}{U/B}{U/B}, {T}, Sacrifice Dimir Locket: Draw two cards.","artist":"Zezhou Chen"
},
{
    "types":["Sorcery"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d252b4","set":"Guilds of Ravnica","number":"165",
    "name":"Deafening Clarion","type":"Sorcery","manaCost":"{1}{R}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Choose one or both — • Deafening Clarion deals 3 damage to each creature. • Creatures you control gain lifelink until end of turn.","artist":"Adam Paquette"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252b7","set":"Guilds of Ravnica","number":"127",
    "name":"Devkarin Dissident","type":"Creature — Elf Warrior","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{4}{G}: Devkarin Dissident gets +2/+2 until end of turn.","artist":"Mark Zug"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d252b8","set":"Guilds of Ravnica","number":"245",
    "name":"Dimir Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Dimir Guildgate enters the battlefield tapped. {T}: Add {U} or {B}.","artist":"Cliff Childs"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252ba","set":"Guilds of Ravnica","number":"36",
    "name":"Dimir Informant","type":"Creature — Human Rogue","manaCost":"{2}{U}","convertedManaCost":3,"power":"1","toughness":"4",
    "text":"When Dimir Informant enters the battlefield, surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on the top of your library in any order.)","artist":"Lucas Graciano"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252c0","set":"Guilds of Ravnica","number":"37",
    "name":"Disdainful Stroke","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Counter target spell with converted mana cost 4 or greater.","artist":"Deruchenko Alexander"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d252b9","set":"Guilds of Ravnica","number":"246",
    "name":"Dimir Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Dimir Guildgate enters the battlefield tapped. {T}: Add {U} or {B}.","artist":"Cliff Childs"
},
{
    "types":["Sorcery"],"colors":["U","B"],"_id":"5dc70e70b10b7d3670d252bf","set":"Guilds of Ravnica","number":"223",
    "name":"Discovery","type":"Sorcery","manaCost":"{1}{U/B}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Surveil 2, then draw a card. (To surveil 2, look at the top two cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)","artist":"Mark Behm"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252bd","set":"Guilds of Ravnica","number":"96",
    "name":"Direct Current","type":"Sorcery","manaCost":"{1}{R}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Direct Current deals 2 damage to any target. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Dan Scott"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d252bc","set":"Guilds of Ravnica","number":"166",
    "name":"Dimir Spybug","type":"Creature — Insect","manaCost":"{U}{B}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Flying Menace (This creature can't be blocked except by two or more creatures.) Whenever you surveil, put a +1/+1 counter on Dimir Spybug.","artist":"James Paick"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d252c5","set":"Guilds of Ravnica","number":"70",
    "name":"Douser of Lights","type":"Creature — Horror","manaCost":"{4}{B}","convertedManaCost":5,"power":"4","toughness":"5",
    "text":null,"artist":"Darek Zabrocki"
},
{
    "types":["Instant"],"colors":["U","B"],"_id":"5dc70e70b10b7d3670d252be","set":"Guilds of Ravnica","number":"223",
    "name":"Dispersal","type":"Instant","manaCost":"{3}{U}{B}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Each opponent returns a nonland permanent they control with the highest converted mana cost among permanents they control to its owner's hand, then discards a card.","artist":"Mark Behm"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d252c4","set":"Guilds of Ravnica","number":"69",
    "name":"Doom Whisperer","type":"Creature — Nightmare Demon","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"6","toughness":"6",
    "text":"Flying, trample Pay 2 life: Surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on the top of your library in any order.)","artist":"Vincent Proce"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252c2","set":"Guilds of Ravnica","number":"128",
    "name":"District Guide","type":"Creature — Elf Scout","manaCost":"{2}{G}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"When District Guide enters the battlefield, you may search your library for a basic land card or Gate card, reveal it, put it into your hand, then shuffle your library.","artist":"Tianhua X"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252ca","set":"Guilds of Ravnica","number":"40",
    "name":"Enhanced Surveillance","type":"Enchantment","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"You may look at an additional two cards each time you surveil. Exile Enhanced Surveillance: Shuffle your graveyard into your library.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Enchantment"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d252c1","set":"Guilds of Ravnica","number":"167",
    "name":"Disinformation Campaign","type":"Enchantment","manaCost":"{1}{U}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"When Disinformation Campaign enters the battlefield, you draw a card and each opponent discards a card. Whenever you surveil, return Disinformation Campaign to its owner's hand.","artist":"Anthony Palumbo"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252c3","set":"Guilds of Ravnica","number":"10",
    "name":"Divine Visitation","type":"Enchantment","manaCost":"{3}{W}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"If one or more creature tokens would be created under your control, that many 4/4 white Angel creature tokens with flying and vigilance are created instead.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d252c9","set":"Guilds of Ravnica","number":"168",
    "name":"Emmara, Soul of the Accord","type":"Legendary Creature — Elf Cleric","manaCost":"{G}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever Emmara, Soul of the Accord becomes tapped, create a 1/1 white Soldier creature token with lifelink.","artist":"Mark Winters"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252c7","set":"Guilds of Ravnica","number":"39",
    "name":"Drowned Secrets","type":"Enchantment","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever you cast a blue spell, target player puts the top two cards of their library into their graveyard.","artist":"Alexander Forssberg"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252c8","set":"Guilds of Ravnica","number":"97",
    "name":"Electrostatic Field","type":"Creature — Wall","manaCost":"{1}{R}","convertedManaCost":2,"power":"0","toughness":"4",
    "text":"Defender Whenever you cast an instant or sorcery spell, Electrostatic Field deals 1 damage to each opponent.","artist":"Dan Scott"
},
{
    "types":["Instant"],"colors":["U","R"],"_id":"5dc70e70b10b7d3670d252cf","set":"Guilds of Ravnica","number":"224",
    "name":"Expansion","type":"Instant","manaCost":"{U/R}{U/R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Copy target instant or sorcery spell with converted mana cost 4 or less. You may choose new targets for the copy.","artist":"Deruchenko Alexander"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252c6","set":"Guilds of Ravnica","number":"38",
    "name":"Dream Eater","type":"Creature — Nightmare Sphinx","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":"4","toughness":"3",
    "text":"Flash Flying When Dream Eater enters the battlefield, surveil 4. When you do, you may return target nonland permanent an opponent controls to its owner's hand. (To surveil 4, look at the top four cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)","artist":"Daarken"
},
{
    "types":["Instant"],"colors":["U","R"],"_id":"5dc70e70b10b7d3670d252ce","set":"Guilds of Ravnica","number":"224",
    "name":"Explosion","type":"Instant","manaCost":"{X}{U}{U}{R}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Explosion deals X damage to any target. Target player draws X cards.","artist":"Deruchenko Alexander"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d252cc","set":"Guilds of Ravnica","number":"169",
    "name":"Erstwhile Trooper","type":"Creature — Zombie Soldier","manaCost":"{1}{B}{G}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Discard a creature card: Erstwhile Trooper gets +2/+2 and gains trample until end of turn. Activate this ability only once each turn.","artist":"Jason A. Engle"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d252cd","set":"Guilds of Ravnica","number":"170",
    "name":"Etrata, the Silencer","type":"Legendary Creature — Vampire Assassin","manaCost":"{2}{U}{B}","convertedManaCost":4,"power":"3","toughness":"5",
    "text":"Etrata, the Silencer can't be blocked. Whenever Etrata deals combat damage to a player, exile target creature that player controls and put a hit counter on that card. That player loses the game if they own three or more exiled cards with hit counters on them. Etrata's owner shuffles Etrata into their library.","artist":"Bastien L. Deharme"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252cb","set":"Guilds of Ravnica","number":"98",
    "name":"Erratic Cyclops","type":"Creature — Cyclops Shaman","manaCost":"{3}{R}","convertedManaCost":4,"power":"0","toughness":"8",
    "text":"Trample Whenever you cast an instant or sorcery spell, Erratic Cyclops gets +X/+0 until end of turn, where X is that spell's converted mana cost.","artist":"Milivoj Ćeran"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252d1","set":"Guilds of Ravnica","number":"100",
    "name":"Fearless Halberdier","type":"Creature — Human Warrior","manaCost":"{2}{R}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":null,"artist":"Suzanne Helmigh"
},
{
    "types":["Sorcery"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d252d3","set":"Guilds of Ravnica","number":"225",
    "name":"Find","type":"Sorcery","manaCost":"{B/G}{B/G}","convertedManaCost":8,"power":null,"toughness":null,
    "text":"Return up to two target creature cards from your graveyard to your hand.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252d4","set":"Guilds of Ravnica","number":"101",
    "name":"Fire Urchin","type":"Creature — Elemental","manaCost":"{1}{R}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Trample Whenever you cast an instant or sorcery spell, Fire Urchin gets +1/+0 until end of turn.","artist":"Deruchenko Alexander"
},
{
    "types":["Sorcery"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d252d2","set":"Guilds of Ravnica","number":"225",
    "name":"Finality","type":"Sorcery","manaCost":"{4}{B}{G}","convertedManaCost":8,"power":null,"toughness":null,
    "text":"You may put two +1/+1 counters on a creature you control. Then all creatures get -4/-4 until end of turn.","artist":"Tomasz Jedruszek"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252d0","set":"Guilds of Ravnica","number":"99",
    "name":"Experimental Frenzy","type":"Enchantment","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"You may look at the top card of your library any time. You may play the top card of your library. You can't play cards from your hand. {3}{R}: Destroy Experimental Frenzy.","artist":"Simon Dominic"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252d6","set":"Guilds of Ravnica","number":"11",
    "name":"Flight of Equenauts","type":"Creature — Human Knight","manaCost":"{7}{W}","convertedManaCost":8,"power":"4","toughness":"5",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) Flying","artist":"Zezhou Chen"
},
{
    "types":["Enchantment"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d252d5","set":"Guilds of Ravnica","number":"171",
    "name":"Firemind's Research","type":"Enchantment","manaCost":"{U}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Whenever you cast an instant or sorcery spell, put a charge counter on Firemind's Research. {1}{U}, Remove two charge counters from Firemind's Research: Draw a card. {1}{R}, Remove five charge counters from Firemind's Research: It deals 5 damage to any target.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Sorcery"],"colors":["W","G"],"_id":"5dc70e70b10b7d3670d252d8","set":"Guilds of Ravnica","number":"226",
    "name":"Flower","type":"Sorcery","manaCost":"{G/W}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Search your library for a basic Forest or Plains card, reveal it, put it into your hand, then shuffle your library.","artist":"Dmitry Burmak"
},
{
    "types":["Sorcery"],"colors":["W","G"],"_id":"5dc70e70b10b7d3670d252d7","set":"Guilds of Ravnica","number":"226",
    "name":"Flourish","type":"Sorcery","manaCost":"{4}{G}{W}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Creatures you control get +2/+2 until end of turn.","artist":"Dmitry Burmak"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d252d9","set":"Guilds of Ravnica","number":"264",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Richard Wright"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d252da","set":"Guilds of Ravnica","number":"216",
    "name":"Fresh-Faced Recruit","type":"Creature — Human Soldier","manaCost":"{1}{R/W}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"As long as it's your turn, Fresh-Faced Recruit has first strike.","artist":"Anthony Palumbo"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d252db","set":"Guilds of Ravnica","number":"172",
    "name":"Garrison Sergeant","type":"Creature — Viashino Soldier","manaCost":"{3}{R}{W}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Garrison Sergeant has double strike as long as you control a Gate.","artist":"Gabor Szikszai"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e70b10b7d3670d252dc","set":"Guilds of Ravnica","number":"235",
    "name":"Gatekeeper Gargoyle","type":"Artifact Creature — Gargoyle","manaCost":"{6}","convertedManaCost":6,"power":"3","toughness":"3",
    "text":"Flying Gatekeeper Gargoyle enters the battlefield with a +1/+1 counter on it for each Gate you control.","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d252dd","set":"Guilds of Ravnica","number":"247",
    "name":"Gateway Plaza","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Gateway Plaza enters the battlefield tapped. When Gateway Plaza enters the battlefield, sacrifice it unless you pay {1}. {T}: Add one mana of any color.","artist":"Jedd Chevrier"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252de","set":"Guilds of Ravnica","number":"129",
    "name":"Generous Stray","type":"Creature — Cat","manaCost":"{2}{G}","convertedManaCost":3,"power":"1","toughness":"2",
    "text":"When Generous Stray enters the battlefield, draw a card.","artist":"Milivoj Ćeran"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d252e0","set":"Guilds of Ravnica","number":"236",
    "name":"Glaive of the Guildpact","type":"Artifact — Equipment","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Equipped creature gets +1/+0 for each Gate you control and has vigilance and menace. (A creature with menace can't be blocked except by two or more creatures.) Equip {3} ({3}: Attach to target creature you control. Equip only as a sorcery.)","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d252e1","set":"Guilds of Ravnica","number":"173",
    "name":"Glowspore Shaman","type":"Creature — Elf Shaman","manaCost":"{B}{G}","convertedManaCost":2,"power":"3","toughness":"1",
    "text":"When Glowspore Shaman enters the battlefield, put the top three cards of your library into your graveyard. You may put a land card from your graveyard on top of your library.","artist":"Lars Grant-West"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252e2","set":"Guilds of Ravnica","number":"102",
    "name":"Goblin Banneret","type":"Creature — Goblin Soldier","manaCost":"{R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.) {1}{R}: Goblin Banneret gets +2/+0 until end of turn.","artist":"Viktor Titov"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252e3","set":"Guilds of Ravnica","number":"103",
    "name":"Goblin Cratermaker","type":"Creature — Goblin Warrior","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{1}, Sacrifice Goblin Cratermaker: Choose one — • Goblin Cratermaker deals 2 damage to target creature. • Destroy target colorless nonland permanent.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252e5","set":"Guilds of Ravnica","number":"104",
    "name":"Goblin Locksmith","type":"Creature — Goblin Rogue","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Whenever Goblin Locksmith attacks, creatures with defender can't block this turn.","artist":"Mark Behm"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252df","set":"Guilds of Ravnica","number":"12",
    "name":"Gird for Battle","type":"Sorcery","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on each of up to two target creatures.","artist":"Jakub Kasper"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d252e6","set":"Guilds of Ravnica","number":"175",
    "name":"Golgari Findbroker","type":"Creature — Elf Shaman","manaCost":"{B}{B}{G}{G}","convertedManaCost":4,"power":"3","toughness":"4",
    "text":"When Golgari Findbroker enters the battlefield, return target permanent card from your graveyard to your hand.","artist":"Bram Sels"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d252e7","set":"Guilds of Ravnica","number":"248",
    "name":"Golgari Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Golgari Guildgate enters the battlefield tapped. {T}: Add {B} or {G}.","artist":"Eytan Zana"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d252e8","set":"Guilds of Ravnica","number":"249",
    "name":"Golgari Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Golgari Guildgate enters the battlefield tapped. {T}: Add {B} or {G}.","artist":"Eytan Zana"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252ea","set":"Guilds of Ravnica","number":"130",
    "name":"Golgari Raiders","type":"Creature — Elf Warrior","manaCost":"{3}{G}","convertedManaCost":4,"power":"0","toughness":"0",
    "text":"Haste Undergrowth — Golgari Raiders enters the battlefield with a +1/+1 counter on it for each creature card in your graveyard.","artist":"David Palumbo"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252eb","set":"Guilds of Ravnica","number":"131",
    "name":"Grappling Sundew","type":"Creature — Plant","manaCost":"{1}{G}","convertedManaCost":2,"power":"0","toughness":"4",
    "text":"Defender, reach {4}{G}: Grappling Sundew gains indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy this creature.)","artist":"Sung Choi"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252ec","set":"Guilds of Ravnica","number":"105",
    "name":"Gravitic Punch","type":"Sorcery","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Target creature you control deals damage equal to its power to target player. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d252e4","set":"Guilds of Ravnica","number":"174",
    "name":"Goblin Electromancer","type":"Creature — Goblin Wizard","manaCost":"{U}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Instant and sorcery spells you cast cost {1} less to cast.","artist":"Svetlin Velinov"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e70b10b7d3670d252ed","set":"Guilds of Ravnica","number":"71",
    "name":"Gruesome Menagerie","type":"Sorcery","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Choose a creature card with converted mana cost 1 in your graveyard, then do the same for creature cards with converted mana costs 2 and 3. Return those cards to the battlefield.","artist":"Yeong-Hao Han"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d252ef","set":"Guilds of Ravnica","number":"250",
    "name":"Guildmages' Forum","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}: Add {C}. {1}, {T}: Add one mana of any color. If that mana is spent on a multicolored creature spell, that creature enters the battlefield with an additional +1/+1 counter on it.","artist":"Adam Paquette"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252f0","set":"Guilds of Ravnica","number":"13",
    "name":"Haazda Marshal","type":"Creature — Human Soldier","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Whenever Haazda Marshal and at least two other creatures attack, create a 1/1 white Soldier creature token with lifelink.","artist":"Josh Hass"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d252f1","set":"Guilds of Ravnica","number":"176",
    "name":"Hammer Dropper","type":"Creature — Giant Soldier","manaCost":"{2}{R}{W}","convertedManaCost":4,"power":"5","toughness":"2",
    "text":"Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.)","artist":"Lake Hurwitz"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252f2","set":"Guilds of Ravnica","number":"132",
    "name":"Hatchery Spider","type":"Creature — Spider","manaCost":"{5}{G}{G}","convertedManaCost":7,"power":"5","toughness":"7",
    "text":"Reach Undergrowth — When you cast this spell, reveal the top X cards of your library, where X is the number of creature cards in your graveyard. You may put a green permanent card with converted mana cost X or less from among them onto the battlefield. Put the rest on the bottom of your library in a random order.","artist":"Livia Prima"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d252e9","set":"Guilds of Ravnica","number":"237",
    "name":"Golgari Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {B} or {G}. {B/G}{B/G}{B/G}{B/G}, {T}, Sacrifice Golgari Locket: Draw two cards.","artist":"Milivoj Ćeran"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252f4","set":"Guilds of Ravnica","number":"106",
    "name":"Hellkite Whelp","type":"Creature — Dragon","manaCost":"{4}{R}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Flying Whenever Hellkite Whelp attacks, it deals 1 damage to target creature defending player controls.","artist":"Johann Bodin"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d252f5","set":"Guilds of Ravnica","number":"72",
    "name":"Hired Poisoner","type":"Creature — Human Assassin","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Deathtouch","artist":"Joe Slucher"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252f6","set":"Guilds of Ravnica","number":"133",
    "name":"Hitchclaw Recluse","type":"Creature — Spider","manaCost":"{2}{G}","convertedManaCost":3,"power":"1","toughness":"4",
    "text":"Reach (This creature can block creatures with flying.)","artist":"Mike Bierek"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d252f7","set":"Guilds of Ravnica","number":"177",
    "name":"House Guildmage","type":"Creature — Human Wizard","manaCost":"{U}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{1}{U}, {T}: Target creature doesn't untap during its controller's next untap step. {2}{B}, {T}: Surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)","artist":"Winona Nelson"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70e70b10b7d3670d252ee","set":"Guilds of Ravnica","number":"41",
    "name":"Guild Summit","type":"Enchantment","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"When Guild Summit enters the battlefield, you may tap any number of untapped Gates you control. Draw a card for each Gate tapped this way. Whenever a Gate enters the battlefield under your control, draw a card.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Instant"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d252f9","set":"Guilds of Ravnica","number":"178",
    "name":"Hypothesizzle","type":"Instant","manaCost":"{3}{U}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Draw two cards. Then you may discard a nonland card. When you do, Hypothesizzle deals 4 damage to target creature.","artist":"Chris Seaman"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d252fa","set":"Guilds of Ravnica","number":"273",
    "name":"Impervious Greatwurm","type":"Creature — Wurm","manaCost":"{7}{G}{G}{G}","convertedManaCost":10,"power":"16","toughness":"16",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) Indestructible","artist":"Simon Dominic"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e70b10b7d3670d252fb","set":"Guilds of Ravnica","number":"107",
    "name":"Inescapable Blaze","type":"Instant","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"This spell can't be countered. Inescapable Blaze deals 6 damage to any target.","artist":"Steve Argyle"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252fc","set":"Guilds of Ravnica","number":"16",
    "name":"Inspiring Unicorn","type":"Creature — Unicorn","manaCost":"{2}{W}{W}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"Whenever Inspiring Unicorn attacks, creatures you control get +1/+1 until end of turn.","artist":"Even Amundsen"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252f3","set":"Guilds of Ravnica","number":"14",
    "name":"Healer's Hawk","type":"Creature — Bird","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Flying, lifelink","artist":"Milivoj Ćeran"
},
{
    "types":["Instant"],"colors":["W","R"],"_id":"5dc70e70b10b7d3670d252fe","set":"Guilds of Ravnica","number":"227",
    "name":"Integrity","type":"Instant","manaCost":"{R/W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 until end of turn.","artist":"Ben Maier"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252ff","set":"Guilds of Ravnica","number":"17",
    "name":"Intrusive Packbeast","type":"Creature — Beast","manaCost":"{4}{W}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"Vigilance When Intrusive Packbeast enters the battlefield, tap up to two target creatures your opponents control.","artist":"Jason Felix"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d252f8","set":"Guilds of Ravnica","number":"15",
    "name":"Hunted Witness","type":"Creature — Human","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"When Hunted Witness dies, create a 1/1 white Soldier creature token with lifelink.","artist":"David Palumbo"
},
{
    "types":["Instant"],"colors":["U","R"],"_id":"5dc70e70b10b7d3670d25300","set":"Guilds of Ravnica","number":"228",
    "name":"Invent","type":"Instant","manaCost":"{4}{U}{R}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Search your library for an instant card and/or a sorcery card, reveal them, put them into your hand, then shuffle your library.","artist":"Mathias Kollros"
},
{
    "types":["Instant"],"colors":["U","R"],"_id":"5dc70e70b10b7d3670d25301","set":"Guilds of Ravnica","number":"228",
    "name":"Invert","type":"Instant","manaCost":"{U/R}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Switch the power and toughness of each of up to two target creatures until end of turn.","artist":"Mathias Kollros"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25303","set":"Guilds of Ravnica","number":"134",
    "name":"Ironshell Beetle","type":"Creature — Insect","manaCost":"{1}{G}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"When Ironshell Beetle enters the battlefield, put a +1/+1 counter on target creature.","artist":"Kev Walker"
},
{
    "types":["Instant"],"colors":["W","R"],"_id":"5dc70e70b10b7d3670d252fd","set":"Guilds of Ravnica","number":"227",
    "name":"Intervention","type":"Instant","manaCost":"{2}{R}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Intervention deals 3 damage to any target and you gain 3 life.","artist":"Ben Maier"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25304","set":"Guilds of Ravnica","number":"261",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Richard Wright"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d25305","set":"Guilds of Ravnica","number":"180",
    "name":"Izoni, Thousand-Eyed","type":"Legendary Creature — Elf Shaman","manaCost":"{2}{B}{B}{G}{G}","convertedManaCost":6,"power":"2","toughness":"3",
    "text":"Undergrowth — When Izoni, Thousand-Eyed enters the battlefield, create a 1/1 black and green Insect creature token for each creature card in your graveyard. {B}{G}, Sacrifice another creature: You gain 1 life and draw a card.","artist":"Eric Deschamps"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25306","set":"Guilds of Ravnica","number":"251",
    "name":"Izzet Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Izzet Guildgate enters the battlefield tapped. {T}: Add {U} or {R}.","artist":"Kirsten Zirngibl"
},
{
    "types":["Instant"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25302","set":"Guilds of Ravnica","number":"179",
    "name":"Ionize","type":"Instant","manaCost":"{1}{U}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Counter target spell. Ionize deals 2 damage to that spell's controller.","artist":"Chase Stone"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25307","set":"Guilds of Ravnica","number":"252",
    "name":"Izzet Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Izzet Guildgate enters the battlefield tapped. {T}: Add {U} or {R}.","artist":"Kirsten Zirngibl"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d25308","set":"Guilds of Ravnica","number":"238",
    "name":"Izzet Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {U} or {R}. {U/R}{U/R}{U/R}{U/R}, {T}, Sacrifice Izzet Locket: Draw two cards.","artist":"Dmitry Burmak"
},
{
    "types":["Instant"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d25309","set":"Guilds of Ravnica","number":"181",
    "name":"Join Shields","type":"Instant","manaCost":"{3}{G}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Untap all creatures you control. They gain hexproof and indestructible until end of turn. (They can't be the targets of spells or abilities your opponents control. Damage and effects that say \"destroy\" don't destroy them.)","artist":"Winona Nelson"
},
{
    "types":["Instant"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d2530a","set":"Guilds of Ravnica","number":"182",
    "name":"Justice Strike","type":"Instant","manaCost":"{R}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature deals damage to itself equal to its power.","artist":"Clint Cearley"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2530c","set":"Guilds of Ravnica","number":"135",
    "name":"Kraul Foragers","type":"Creature — Insect Scout","manaCost":"{4}{G}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Undergrowth — When Kraul Foragers enters the battlefield, you gain 1 life for each creature card in your graveyard.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d2530b","set":"Guilds of Ravnica","number":"183",
    "name":"Knight of Autumn","type":"Creature — Dryad Knight","manaCost":"{1}{G}{W}","convertedManaCost":3,"power":"2","toughness":"1",
    "text":"When Knight of Autumn enters the battlefield, choose one — • Put two +1/+1 counters on Knight of Autumn. • Destroy target artifact or enchantment. • You gain 4 life.","artist":"Ryan Pancoast"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2530d","set":"Guilds of Ravnica","number":"136",
    "name":"Kraul Harpooner","type":"Creature — Insect Warrior","manaCost":"{1}{G}","convertedManaCost":2,"power":"3","toughness":"2",
    "text":"Reach Undergrowth — When Kraul Harpooner enters the battlefield, choose up to one target creature with flying you don't control. Kraul Harpooner gets +X/+0 until end of turn, where X is the number of creature cards in your graveyard, then you may have Kraul Harpooner fight that creature.","artist":"Kev Walker"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2530e","set":"Guilds of Ravnica","number":"270",
    "name":"Kraul Raider","type":"Creature — Insect Warrior","manaCost":"{2}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Menace (This creature can't be blocked except by two or more creatures.)","artist":"Ben Wootten"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2530f","set":"Guilds of Ravnica","number":"73",
    "name":"Kraul Swarm","type":"Creature — Insect Warrior","manaCost":"{4}{B}","convertedManaCost":5,"power":"4","toughness":"1",
    "text":"Flying {2}{B}, Discard a creature card: Return Kraul Swarm from your graveyard to your hand.","artist":"Jehan Choo"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25310","set":"Guilds of Ravnica","number":"108",
    "name":"Lava Coil","type":"Sorcery","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Lava Coil deals 4 damage to target creature. If that creature would die this turn, exile it instead.","artist":"Wesley Burt"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25312","set":"Guilds of Ravnica","number":"185",
    "name":"League Guildmage","type":"Creature — Human Wizard","manaCost":"{U}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{3}{U}, {T}: Draw a card. {X}{R}, {T}: Copy target instant or sorcery spell you control with converted mana cost X. You may choose new targets for the copy.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25313","set":"Guilds of Ravnica","number":"42",
    "name":"Leapfrog","type":"Creature — Frog","manaCost":"{2}{U}","convertedManaCost":3,"power":"3","toughness":"1",
    "text":"Leapfrog has flying as long as you've cast an instant or sorcery spell this turn.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d25311","set":"Guilds of Ravnica","number":"184",
    "name":"Lazav, the Multifarious","type":"Legendary Creature — Shapeshifter","manaCost":"{U}{B}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"When Lazav, the Multifarious enters the battlefield, surveil 1. (Look at the top card of your library. You may put that card into your graveyard.) {X}: Lazav, the Multifarious becomes a copy of target creature card in your graveyard with converted mana cost X, except its name is Lazav, the Multifarious, it's legendary in addition to its other types, and it has this ability.","artist":"Yongjae Choi"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d25314","set":"Guilds of Ravnica","number":"186",
    "name":"Ledev Champion","type":"Creature — Elf Knight","manaCost":"{1}{G}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Whenever Ledev Champion attacks, you may tap any number of untapped creatures you control. Ledev Champion gets +1/+1 until end of turn for each creature tapped this way. {3}{G}{W}: Create a 1/1 white Soldier creature token with lifelink.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25315","set":"Guilds of Ravnica","number":"18",
    "name":"Ledev Guardian","type":"Creature — Human Knight","manaCost":"{3}{W}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of the creature's color.)","artist":"Kimonas Theodossiou"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d25316","set":"Guilds of Ravnica","number":"187",
    "name":"Legion Guildmage","type":"Creature — Human Wizard","manaCost":"{R}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{5}{R}, {T}: Legion Guildmage deals 3 damage to each opponent. {2}{W}, {T}: Tap another target creature.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25317","set":"Guilds of Ravnica","number":"109",
    "name":"Legion Warboss","type":"Creature — Goblin Soldier","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.) At the beginning of combat on your turn, create a 1/1 red Goblin creature token. That token gains haste until end of turn and attacks this combat if able.","artist":"Alex Konstad"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25318","set":"Guildsof Ravnica","number":"19",
    "name":"Light of the Legion","type":"Creature — Angel","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Flying Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.) When Light of the Legion dies, put a +1/+1 counter on each white creature you control.","artist":"Alex Konstad"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25319","set":"Guilds of Ravnica","number":"74",
    "name":"Lotleth Giant","type":"Creature — Zombie Giant","manaCost":"{6}{B}","convertedManaCost":7,"power":"6","toughness":"5",
    "text":"Undergrowth — When Lotleth Giant enters the battlefield, it deals 1 damage to target opponent for each creature card in your graveyard.","artist":"Alex Konstad"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d2531a","set":"Guilds of Ravnica","number":"20",
    "name":"Loxodon Restorer","type":"Creature — Elephant Cleric","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":"3","toughness":"4",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) When Loxodon Restorer enters the battlefield, you gain 4 life.","artist":"Svetlin Velinov"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70e70b10b7d3670d2531b","set":"Guilds of Ravnica","number":"21",
    "name":"Luminous Bonds","type":"Enchantment — Aura","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature can't attack or block.","artist":"Mark Behm"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70e70b10b7d3670d2531c","set":"Guilds of Ravnica","number":"110",
    "name":"Maniacal Rage","type":"Enchantment — Aura","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature gets +2/+2 and can't block.","artist":"Heonhwa Choe"
},
{
    "types":["Instant"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d2531d","set":"Guilds of Ravnica","number":"188",
    "name":"March of the Multitudes","type":"Instant","manaCost":"{X}{G}{W}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of the creature's color.) Create X 1/1 white Soldier creature tokens with lifelink.","artist":"Zack Stella"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2531e","set":"Guilds of Ravnica","number":"75",
    "name":"Mausoleum Secrets","type":"Instant","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Undergrowth — Search your library for a black card with converted mana cost less than or equal to the number of creature cards in your graveyard, reveal it, put it into your hand, then shuffle your library.","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2531f","set":"Guilds of Ravnica","number":"43",
    "name":"Maximize Altitude","type":"Sorcery","manaCost":"{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +1/+1 and gains flying until end of turn. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Mike Bierek"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25320","set":"Guilds of Ravnica","number":"111",
    "name":"Maximize Velocity","type":"Sorcery","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +1/+1 and gains haste until end of turn. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Svetlin Velinov"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25321","set":"Guilds of Ravnica","number":"76",
    "name":"Mephitic Vapors","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"All creatures get -1/-1 until end of turn. Surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on the top of your library in any order.)","artist":"Darek Zabrocki"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25322","set":"Guilds of Ravnica","number":"77",
    "name":"Midnight Reaper","type":"Creature — Zombie Knight","manaCost":"{2}{B}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Whenever a nontoken creature you control dies, Midnight Reaper deals 1 damage to you and you draw a card.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25323","set":"Guilds of Ravnica","number":"137",
    "name":"Might of the Masses","type":"Instant","manaCost":"{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +1/+1 until end of turn for each creature you control.","artist":"Alex Konstad"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25324","set":"Guilds of Ravnica","number":"44",
    "name":"Mission Briefing","type":"Instant","manaCost":"{U}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Surveil 2, then choose an instant or sorcery card in your graveyard. You may cast that card this turn. If that card would be put into your graveyard this turn, exile it instead. (To surveil 2, look at the top two cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)","artist":"Matt Stewart"
},
{
    "types":["Sorcery"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d25325","set":"Guilds of Ravnica","number":"189",
    "name":"Mnemonic Betrayal","type":"Sorcery","manaCost":"{1}{U}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Exile all cards from all opponents' graveyards. You may cast those cards this turn, and you may spend mana as though it were mana of any type to cast those spells. At the beginning of the next end step, if any of those cards remain exiled, return them to their owners' graveyards. Exile Mnemonic Betrayal.","artist":"Clint Cearley"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d25326","set":"Guilds of Ravnica","number":"190",
    "name":"Molderhulk","type":"Creature — Fungus Zombie","manaCost":"{7}{B}{G}","convertedManaCost":9,"power":"6","toughness":"6",
    "text":"Undergrowth — This spell costs {1} less to cast for each creature card in your graveyard. When Molderhulk enters the battlefield, return target land card from your graveyard to the battlefield.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25327","set":"Guilds of Ravnica","number":"78",
    "name":"Moodmark Painter","type":"Creature — Human Shaman","manaCost":"{2}{B}{B}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Undergrowth — When Moodmark Painter enters the battlefield, target creature gains menace and gets +X/+0 until end of turn, where X is the number of creature cards in your graveyard. (It can't blocked except by two or more creatures.)","artist":"Scott Murphy"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25328","set":"Guilds of Ravnica","number":"263",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Richard Wright"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25329","set":"Guilds of Ravnica","number":"45",
    "name":"Murmuring Mystic","type":"Creature — Human Wizard","manaCost":"{3}{U}","convertedManaCost":4,"power":"1","toughness":"5",
    "text":"Whenever you cast an instant or sorcery spell, create a 1/1 blue Bird Illusion creature token with flying.","artist":"Mark Winters"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2532a","set":"Guilds of Ravnica","number":"46",
    "name":"Muse Drake","type":"Creature — Drake","manaCost":"{3}{U}","convertedManaCost":4,"power":"1","toughness":"3",
    "text":"Flying When Muse Drake enters the battlefield, draw a card.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2532b","set":"Guilds of Ravnica","number":"47",
    "name":"Narcomoeba","type":"Creature — Illusion","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Flying When Narcomoeba is put into your graveyard from your library, you may put it onto the battlefield.","artist":"Howard Lyon"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2532c","set":"Guilds of Ravnica","number":"79",
    "name":"Necrotic Wound","type":"Instant","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Undergrowth — Target creature gets -X/-X until end of turn, where X is the number of creature cards in your graveyard. If that creature would die this turn, exile it instead.","artist":"Randy Vargas"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2532d","set":"Guilds of Ravnica","number":"80",
    "name":"Never Happened","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target opponent reveals their hand. You choose a nonland card from that player's graveyard or hand and exile it.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d2532e","set":"Guilds of Ravnica","number":"191",
    "name":"Nightveil Predator","type":"Creature — Vampire","manaCost":"{U}{U}{B}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Flying, deathtouch Hexproof (This creature can't be the target of spells or abilities your opponents control.)","artist":"Darek Zabrocki"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2532f","set":"Guilds of Ravnica","number":"48",
    "name":"Nightveil Sprite","type":"Creature — Faerie Rogue","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Flying Whenever Nightveil Sprite attacks, surveil 1. (Look at the top card of your library. You may put that card into your graveyard.)","artist":"Uriah Voth"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25330","set":"Guilds of Ravnica","number":"192",
    "name":"Niv-Mizzet, Parun","type":"Legendary Creature — Dragon Wizard","manaCost":"{U}{U}{U}{R}{R}{R}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"This spell can't be countered. Flying Whenever you draw a card, Niv-Mizzet, Parun deals 1 damage to any target. Whenever a player casts an instant or sorcery spell, you draw a card.","artist":"Svetlin Velinov"
},
{
    "types":["Sorcery"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d25331","set":"Guilds of Ravnica","number":"193",
    "name":"Notion Rain","type":"Sorcery","manaCost":"{1}{U}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Surveil 2, then draw two cards. Notion Rain deals 2 damage to you. (To surveil 2, look at the top two cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)","artist":"Lius Lasahido"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25332","set":"Guilds of Ravnica","number":"138",
    "name":"Nullhide Ferox","type":"Creature — Beast","manaCost":"{2}{G}{G}","convertedManaCost":4,"power":"6","toughness":"6",
    "text":"Hexproof You can't cast noncreature spells. {2}: Nullhide Ferox loses all abilities until end of turn. Any player may activate this ability. If a spell or ability an opponent controls causes you to discard Nullhide Ferox, put it onto the battlefield instead of putting it into your graveyard.","artist":"Filip Burburan"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d25333","set":"Guilds of Ravnica","number":"194",
    "name":"Ochran Assassin","type":"Creature — Elf Assassin","manaCost":"{1}{B}{G}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Deathtouch All creatures able to block Ochran Assassin do so.","artist":"Anna Steinbauer"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25334","set":"Guilds of Ravnica","number":"49",
    "name":"Omnispell Adept","type":"Creature — Human Wizard","manaCost":"{4}{U}","convertedManaCost":5,"power":"3","toughness":"4",
    "text":"{2}{U}, {T}: You may cast an instant or sorcery card from your hand without paying its mana cost.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25335","set":"Guilds of Ravnica","number":"112",
    "name":"Ornery Goblin","type":"Creature — Goblin Warrior","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Whenever Ornery Goblin blocks or becomes blocked by a creature, Ornery Goblin deals 1 damage to that creature.","artist":"Johann Bodin"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25336","set":"Guilds of Ravnica","number":"253",
    "name":"Overgrown Tomb","type":"Land — Swamp Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B} or {G}.) As Overgrown Tomb enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Yeong-Hao Han"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25337","set":"Guilds of Ravnica","number":"139",
    "name":"Pack's Favor","type":"Instant","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) Target creature gets +3/+3 until end of turn.","artist":"Lius Lasahido"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25338","set":"Guilds of Ravnica","number":"22",
    "name":"Parhelion Patrol","type":"Creature — Human Knight","manaCost":"{3}{W}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Flying, vigilance Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.)","artist":"Even Amundsen"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25339","set":"Guilds of Ravnica","number":"50",
    "name":"Passwall Adept","type":"Creature — Human Wizard","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"{2}{U}: Target creature can't be blocked this turn.","artist":"John Thacker"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2533a","set":"Guilds of Ravnica","number":"140",
    "name":"Pause for Reflection","type":"Instant","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) Prevent all combat damage that would be dealt this turn.","artist":"Alayna Danner"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2533b","set":"Guilds of Ravnica","number":"141",
    "name":"Pelt Collector","type":"Creature — Elf Warrior","manaCost":"{G}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Whenever another creature you control enters the battlefield or dies, if that creature's power is greater than Pelt Collector's, put a +1/+1 counter on Pelt Collector. As long as Pelt Collector has three or more +1/+1 counters on it, it has trample.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2533c","set":"Guilds of Ravnica","number":"81",
    "name":"Pilfering Imp","type":"Creature — Imp","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Flying {1}{B}, {T}, Sacrifice Pilfering Imp: Target opponent reveals their hand. You choose a nonland card from it. That player discards that card. Activate this ability only any time you could cast a sorcery.","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d2533d","set":"Guilds of Ravnica","number":"217",
    "name":"Piston-Fist Cyclops","type":"Creature — Cyclops","manaCost":"{1}{U/R}{U/R}","convertedManaCost":3,"power":"4","toughness":"3",
    "text":"Defender As long as you've cast an instant or sorcery spell this turn, Piston-Fist Cyclops can attack as though it didn't have defender.","artist":"Wayne Reynolds"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d2533e","set":"Guilds of Ravnica","number":"218",
    "name":"Pitiless Gorgon","type":"Creature — Gorgon","manaCost":"{1}{B/G}{B/G}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Deathtouch","artist":"Alex Konstad"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2533f","set":"Guilds of Ravnica","number":"82",
    "name":"Plaguecrafter","type":"Creature — Human Shaman","manaCost":"{2}{B}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"When Plaguecrafter enters the battlefield, each player sacrifices a creature or planeswalker. Each player who can't discards a card.","artist":"Anna Steinbauer"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25340","set":"Guilds of Ravnica","number":"260",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Richard Wright"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25341","set":"Guilds of Ravnica","number":"142",
    "name":"Portcullis Vine","type":"Creature — Plant Wall","manaCost":"{G}","convertedManaCost":1,"power":"0","toughness":"3",
    "text":"Defender {2}, {T}, Sacrifice a creature with defender: Draw a card.","artist":"James Paick"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25342","set":"Guilds of Ravnica","number":"267",
    "name":"Precision Bolt","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Precision Bolt deals 3 damage to any target.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25343","set":"Guilds of Ravnica","number":"143",
    "name":"Prey Upon","type":"Sorcery","manaCost":"{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature you control fights target creature you don't control. (Each deals damage equal to its power to the other.)","artist":"G-host Lee"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25344","set":"Guilds of Ravnica","number":"83",
    "name":"Price of Fame","type":"Instant","manaCost":"{3}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"This spell costs {2} less to cast if it targets a legendary creature. Destroy target creature. Surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order.)","artist":"Winona Nelson"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25345","set":"Guilds of Ravnica","number":"51",
    "name":"Quasiduplicate","type":"Sorcery","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Create a token that's a copy of target creature you control. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Dmitry Burmak"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25346","set":"Guilds of Ravnica","number":"52",
    "name":"Radical Idea","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Draw a card. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Izzy"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25347","set":"Guilds of Ravnica","number":"266",
    "name":"Ral's Dispersal","type":"Instant","manaCost":"{3}{U}{U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Return target creature to its owner's hand. You may search your library and/or graveyard for a card named Ral, Caller of Storms, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Lake Hurwitz"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25348","set":"Guilds of Ravnica","number":"268",
    "name":"Ral's Staticaster","type":"Creature — Viashino Wizard","manaCost":"{2}{U}{R}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Trample (This creature can deal excess combat damage to the player or planeswalker it's attacking.) Whenever Ral's Staticaster attacks, if you control a Ral planeswalker, Ral's Staticaster gets +1/+0 for each card in your hand until end of turn.","artist":"Even Amundsen"
},
{
    "types":["Planeswalker"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25349","set":"Guilds of Ravnica","number":"265",
    "name":"Ral, Caller of Storms","type":"Legendary Planeswalker — Ral","manaCost":"{4}{U}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"[+1]: Draw a card. [−2]: Ral, Caller of Storms deals 3 damage divided as you choose among one, two, or three targets. [−7]: Draw seven cards. Ral, Caller of Storms deals 7 damage to each creature your opponents control.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d2534a","set":"Guilds of Ravnica","number":"195",
    "name":"Ral, Izzet Viceroy","type":"Legendary Planeswalker — Ral","manaCost":"{3}{U}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"[+1]: Look at the top two cards of your library. Put one of them into your hand and the other into your graveyard. [−3]: Ral, Izzet Viceroy deals damage to target creature equal to the total number of instant and sorcery cards you own in exile and in your graveyard. [−8]: You get an emblem with \"Whenever you cast an instant or sorcery spell, this emblem deals 4 damage to any target and you draw two cards.\"","artist":"Kieran Yanner"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70e70b10b7d3670d2534b","set":"Guilds of Ravnica","number":"239",
    "name":"Rampaging Monument","type":"Artifact Creature — Cleric","manaCost":"{4}","convertedManaCost":4,"power":"0","toughness":"0",
    "text":"Trample Rampaging Monument enters the battlefield with three +1/+1 counters on it. Whenever you cast a multicolored spell, put a +1/+1 counter on Rampaging Monument.","artist":"Tyler Walpole"
},
{
    "types":["Instant"],"colors":["W","R"],"_id":"5dc70e70b10b7d3670d2534d","set":"Guilds of Ravnica","number":"229",
    "name":"Response","type":"Instant","manaCost":"{R/W}{R/W}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Response deals 5 damage to target attacking or blocking creature.","artist":"Daarken"
},
{
    "types":["Sorcery"],"colors":["W","R"],"_id":"5dc70e70b10b7d3670d2534c","set":"Guilds of Ravnica","number":"229",
    "name":"Resurgence","type":"Sorcery","manaCost":"{3}{R}{W}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Creatures you control gain first strike and vigilance until end of turn. After this main phase, there is an additional combat phase followed by an additional main phase.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d2534e","set":"Guilds of Ravnica","number":"196",
    "name":"Rhizome Lurcher","type":"Creature — Fungus Zombie","manaCost":"{2}{B}{G}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"Undergrowth — Rhizome Lurcher enters the battlefield with a number of +1/+1 counters on it equal to the number of creature cards in your graveyard.","artist":"Mathias Kollros"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e70b10b7d3670d2534f","set":"Guilds of Ravnica","number":"23",
    "name":"Righteous Blow","type":"Instant","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Righteous Blow deals 2 damage to target attacking or blocking creature.","artist":"Izzy"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25350","set":"Guilds of Ravnica","number":"113",
    "name":"Risk Factor","type":"Instant","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target opponent may have Risk Factor deal 4 damage to them. If that player doesn't, you draw three cards. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Chris Seaman"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25351","set":"Guilds of Ravnica","number":"84",
    "name":"Ritual of Soot","type":"Sorcery","manaCost":"{2}{B}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy all creatures with converted mana cost 3 or less.","artist":"Dimitar Marinski"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25352","set":"Guilds of Ravnica","number":"24",
    "name":"Roc Charger","type":"Creature — Bird","manaCost":"{2}{W}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"Flying Whenever Roc Charger attacks, target attacking creature without flying gains flying until end of turn.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d25353","set":"Guilds of Ravnica","number":"197",
    "name":"Rosemane Centaur","type":"Creature — Centaur Soldier","manaCost":"{3}{G}{W}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) Vigilance","artist":"Nils Hamm"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25354","set":"Guilds of Ravnica","number":"114",
    "name":"Rubblebelt Boar","type":"Creature — Boar","manaCost":"{3}{R}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"When Rubblebelt Boar enters the battlefield, target creature gets +2/+0 until end of turn.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25355","set":"Guilds of Ravnica","number":"115",
    "name":"Runaway Steam-Kin","type":"Creature — Elemental","manaCost":"{1}{R}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Whenever you cast a red spell, if Runaway Steam-Kin has fewer than three +1/+1 counters on it, put a +1/+1 counter on Runaway Steam-Kin. Remove three +1/+1 counters from Runaway Steam-Kin: Add {R}{R}{R}.","artist":"Jason Felix"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25356","set":"Guilds of Ravnica","number":"254",
    "name":"Sacred Foundry","type":"Land — Mountain Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R} or {W}.) As Sacred Foundry enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25357","set":"Guilds of Ravnica","number":"53",
    "name":"Selective Snare","type":"Sorcery","manaCost":"{X}{U}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Return X target creatures of the creature type of your choice to their owner's hand.","artist":"Alex Konstad"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25358","set":"Guilds of Ravnica","number":"255",
    "name":"Selesnya Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Selesnya Guildgate enters the battlefield tapped. {T}: Add {G} or {W}.","artist":"Dimitar Marinski"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25359","set":"Guilds of Ravnica","number":"256",
    "name":"Selesnya Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Selesnya Guildgate enters the battlefield tapped. {T}: Add {G} or {W}.","artist":"Dimitar Marinski"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d2535a","set":"Guilds of Ravnica","number":"240",
    "name":"Selesnya Locket","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"{T}: Add {G} or {W}. {G/W}{G/W}{G/W}{G/W}, {T}, Sacrifice Selesnya Locket: Draw two cards.","artist":"Winona Nelson"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2535b","set":"Guilds of Ravnica","number":"85",
    "name":"Severed Strands","type":"Sorcery","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, sacrifice a creature. You gain life equal to the sacrificed creature's toughness. Destroy target creature an opponent controls.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2535c","set":"Guilds of Ravnica","number":"144",
    "name":"Siege Wurm","type":"Creature — Wurm","manaCost":"{5}{G}{G}","convertedManaCost":7,"power":"5","toughness":"5",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) Trample (This creature can deal excess combat damage to the player or planeswalker it's attacking.)","artist":"Filip Burburan"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d2535d","set":"Guilds of Ravnica","number":"241",
    "name":"Silent Dart","type":"Artifact","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"{4}, {T}, Sacrifice Silent Dart: It deals 3 damage to target creature.","artist":"Yeong-Hao Han"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2535e","set":"Guilds of Ravnica","number":"54",
    "name":"Sinister Sabotage","type":"Instant","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Counter target spell. Surveil 1. (Look at the top card of your library. You may put that card into your graveyard.)","artist":"Mathias Kollros"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d2535f","set":"Guilds of Ravnica","number":"198",
    "name":"Skyknight Legionnaire","type":"Creature — Human Knight","manaCost":"{1}{R}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying, haste","artist":"Chase Stone"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25360","set":"Guilds of Ravnica","number":"25",
    "name":"Skyline Scout","type":"Creature — Human Scout","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Whenever Skyline Scout attacks, you may pay {1}{W}. If you do, it gains flying until end of turn.","artist":"Paul Scott Canavan"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25361","set":"Guilds of Ravnica","number":"116",
    "name":"Smelt-Ward Minotaur","type":"Creature — Minotaur Warrior","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Whenever you cast an instant or sorcery spell, target creature an opponent controls can't block this turn.","artist":"Wisnu Tan"
},
{
    "types":["Instant"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25362","set":"Guilds of Ravnica","number":"199",
    "name":"Sonic Assault","type":"Instant","manaCost":"{1}{U}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Tap target creature. Sonic Assault deals 2 damage to that creature's controller. Jump-start (You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.)","artist":"Tyler Walpole"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25363","set":"Guilds of Ravnica","number":"86",
    "name":"Spinal Centipede","type":"Creature — Insect","manaCost":"{2}{B}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"When Spinal Centipede dies, put a +1/+1 counter on target creature you control.","artist":"Zezhou Chen"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25364","set":"Guilds of Ravnica","number":"145",
    "name":"Sprouting Renewal","type":"Sorcery","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) Choose one — • Create a 2/2 green and white Elf Knight creature token with vigilance. • Destroy target artifact or enchantment.","artist":"James Paick"
},
{
    "types":["Instant"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d25365","set":"Guilds of Ravnica","number":"230",
    "name":"Statue","type":"Instant","manaCost":"{2}{B}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Destroy target artifact, creature, or enchantment.","artist":"Ben Wootten"
},
{
    "types":["Instant"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d25366","set":"Guilds of Ravnica","number":"230",
    "name":"Status","type":"Instant","manaCost":"{B/G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Target creature gets +1/+1 and gains deathtouch until end of turn.","artist":"Ben Wootten"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25367","set":"Guilds of Ravnica","number":"257",
    "name":"Steam Vents","type":"Land — Island Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U} or {R}.) As Steam Vents enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Jonas De Ro"
},
{
    "types":["Enchantment"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25368","set":"Guilds of Ravnica","number":"117",
    "name":"Street Riot","type":"Enchantment","manaCost":"{4}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"As long as it's your turn, creatures you control get +1/+0 and have trample.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d25369","set":"Guilds of Ravnica","number":"200",
    "name":"Sumala Woodshaper","type":"Creature — Elf Druid","manaCost":"{2}{G}{W}","convertedManaCost":4,"power":"2","toughness":"1",
    "text":"When Sumala Woodshaper enters the battlefield, look at the top four cards of your library. You may reveal a creature or enchantment card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Sara Winters"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d2536a","set":"Guilds of Ravnica","number":"26",
    "name":"Sunhome Stalwart","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"First strike Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.)","artist":"Matt Stewart"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70e70b10b7d3670d2536b","set":"Guilds of Ravnica","number":"118",
    "name":"Sure Strike","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +3/+0 and gains first strike until end of turn.","artist":"Steve Argyle"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d2536c","set":"Guilds of Ravnica","number":"262",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Richard Wright"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d2536d","set":"Guilds of Ravnica","number":"201",
    "name":"Swarm Guildmage","type":"Creature — Elf Shaman","manaCost":"{B}{G}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"{4}{B}, {T}: Creatures you control get +1/+0 and gain menace until end of turn. (They can't be blocked except by two or more creatures.) {1}{G}, {T}: You gain 2 life.","artist":"Simon Dominic"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d2536e","set":"Guilds of Ravnica","number":"202",
    "name":"Swathcutter Giant","type":"Creature — Giant Soldier","manaCost":"{4}{R}{W}","convertedManaCost":6,"power":"5","toughness":"5",
    "text":"Vigilance Whenever Swathcutter Giant attacks, it deals 1 damage to each creature defending player controls.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d2536f","set":"Guilds of Ravnica","number":"203",
    "name":"Swiftblade Vindicator","type":"Creature — Human Soldier","manaCost":"{R}{W}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Double strike, vigilance, trample","artist":"Viktor Titov"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25370","set":"Guilds of Ravnica","number":"27",
    "name":"Sworn Companions","type":"Sorcery","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Create two 1/1 white Soldier creature tokens with lifelink.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d25371","set":"Guilds of Ravnica","number":"204",
    "name":"Tajic, Legion's Edge","type":"Legendary Creature — Human Soldier","manaCost":"{1}{R}{W}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Haste Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.) Prevent all noncombat damage that would be dealt to other creatures you control. {R}{W}: Tajic, Legion's Edge gains first strike until end of turn.","artist":"Anthony Palumbo"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25372","set":"Guilds of Ravnica","number":"28",
    "name":"Take Heart","type":"Instant","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 until end of turn. You gain 1 life for each attacking creature you control.","artist":"Lucas Graciano"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25373","set":"Guilds of Ravnica","number":"258",
    "name":"Temple Garden","type":"Land — Forest Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G} or {W}.) As Temple Garden enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Titus Lunter"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25374","set":"Guilds of Ravnica","number":"29",
    "name":"Tenth District Guard","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"When Tenth District Guard enters the battlefield, target creature gets +0/+1 until end of turn.","artist":"Craig J Spearing"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d25375","set":"Guilds of Ravnica","number":"205",
    "name":"Thief of Sanity","type":"Creature — Specter","manaCost":"{1}{U}{B}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying Whenever Thief of Sanity deals combat damage to a player, look at the top three cards of that player's library, exile one of them face down, then put the rest into their graveyard. You may look at and cast that card for as long as it remains exiled, and you may spend mana as though it were mana of any type to cast that spell.","artist":"Igor Kieryluk"
},
{
    "types":["Sorcery"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d25376","set":"Guilds of Ravnica","number":"206",
    "name":"Thought Erasure","type":"Sorcery","manaCost":"{U}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target opponent reveals their hand. You choose a nonland card from it. That player discards that card. Surveil 1. (Look at the top card of your library. You may put it into your graveyard.)","artist":"Anna Steinbauer"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25377","set":"Guilds of Ravnica","number":"55",
    "name":"Thoughtbound Phantasm","type":"Creature — Spirit","manaCost":"{U}","convertedManaCost":1,"power":"2","toughness":"2",
    "text":"Defender Whenever you surveil, put a +1/+1 counter on Thoughtbound Phantasm. As long as Thoughtbound Phantasm has three or more +1/+1 counters on it, it can attack as though it didn't have defender.","artist":"Johann Bodin"
},
{
    "types":["Enchantment"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25378","set":"Guilds of Ravnica","number":"207",
    "name":"Thousand-Year Storm","type":"Enchantment","manaCost":"{4}{U}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Whenever you cast an instant or sorcery spell, copy it for each other instant and sorcery spell you've cast before it this turn. You may choose new targets for the copies.","artist":"Dimitar Marinski"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25379","set":"Guilds of Ravnica","number":"119",
    "name":"Torch Courier","type":"Creature — Goblin","manaCost":"{R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Haste Sacrifice Torch Courier: Another target creature gains haste until end of turn.","artist":"Mark Zug"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d2537a","set":"Guilds of Ravnica","number":"208",
    "name":"Trostani Discordant","type":"Legendary Creature — Dryad","manaCost":"{3}{G}{W}","convertedManaCost":5,"power":"1","toughness":"4",
    "text":"Other creatures you control get +1/+1. When Trostani Discordant enters the battlefield, create two 1/1 white Soldier creature tokens with lifelink. At the beginning of your end step, each player gains control of all creatures they own.","artist":"Chase Stone"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70e70b10b7d3670d2537b","set":"Guilds of Ravnica","number":"209",
    "name":"Truefire Captain","type":"Creature — Human Knight","manaCost":"{R}{R}{W}{W}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.) Whenever Truefire Captain is dealt damage, it deals that much damage to target player.","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d2537c","set":"Guilds of Ravnica","number":"87",
    "name":"Undercity Necrolisk","type":"Creature — Zombie Lizard","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"{1}, Sacrifice another creature: Put a +1/+1 counter on Undercity Necrolisk. It gains menace until end of turn. Activate this ability only any time you could cast a sorcery. (It can't be blocked except by two or more creatures.)","artist":"Tomasz Jedruszek"
},
{
    "types":["Sorcery"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d2537d","set":"Guilds of Ravnica","number":"210",
    "name":"Undercity Uprising","type":"Sorcery","manaCost":"{2}{B}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control gain deathtouch until end of turn. Then target creature you control fights target creature you don't control. (Each deals damage equal to its power to the other.)","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d2537e","set":"Guilds of Ravnica","number":"211",
    "name":"Underrealm Lich","type":"Creature — Zombie Elf Shaman","manaCost":"{3}{B}{G}","convertedManaCost":5,"power":"4","toughness":"3",
    "text":"If you would draw a card, instead look at the top three cards of your library, then put one into your hand and the rest into your graveyard. Pay 4 life: Underrealm Lich gains indestructible until end of turn. Tap it.","artist":"Anna Steinbauer"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2537f","set":"Guilds of Ravnica","number":"56",
    "name":"Unexplained Disappearance","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return target creature to its owner's hand. Surveil 1. (Look at the top card of your library. You may put that card into your graveyard.)","artist":"Izzy"
},
{
    "types":["Sorcery"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d25380","set":"Guilds of Ravnica","number":"212",
    "name":"Unmoored Ego","type":"Sorcery","manaCost":"{1}{U}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Choose a card name. Search target opponent's graveyard, hand, and library for up to four cards with that name and exile them. That player shuffles their library, then draws a card for each card exiled from their hand this way.","artist":"Volkan Baǵa"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25381","set":"Guilds of Ravnica","number":"146",
    "name":"Urban Utopia","type":"Enchantment — Aura","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant land When Urban Utopia enters the battlefield, draw a card. Enchanted land has \"{T}: Add one mana of any color.\"","artist":"Jedd Chevrier"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25382","set":"Guilds of Ravnica","number":"57",
    "name":"Vedalken Mesmerist","type":"Creature — Vedalken Wizard","manaCost":"{1}{U}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Whenever Vedalken Mesmerist attacks, target creature an opponent controls gets -2/-0 until end of turn.","artist":"Zezhou Chen"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25383","set":"Guilds of Ravnica","number":"88",
    "name":"Veiled Shade","type":"Creature — Shade","manaCost":"{2}{B}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"{1}{B}: Veiled Shade gets +1/+1 until end of turn.","artist":"Anna Steinbauer"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70e70b10b7d3670d25384","set":"Guilds of Ravnica","number":"30",
    "name":"Venerated Loxodon","type":"Creature — Elephant Cleric","manaCost":"{4}{W}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of the creature's color.) When Venerated Loxodon enters the battlefield, put a +1/+1 counter on each creature that convoked it.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d25385","set":"Guilds of Ravnica","number":"219",
    "name":"Vernadi Shieldmate","type":"Creature — Human Soldier","manaCost":"{1}{G/W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Vigilance","artist":"Matt Stewart"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25386","set":"Guilds of Ravnica","number":"89",
    "name":"Vicious Rumors","type":"Sorcery","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Vicious Rumors deals 1 damage to each opponent. Each opponent discards a card, then puts the top card of their library into their graveyard. You gain 1 life.","artist":"David Palumbo"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25387","set":"Guilds of Ravnica","number":"147",
    "name":"Vigorspore Wurm","type":"Creature — Wurm","manaCost":"{5}{G}","convertedManaCost":6,"power":"6","toughness":"4",
    "text":"Undergrowth — When Vigorspore Wurm enters the battlefield, target creature gains vigilance and gets +X/+X until end of turn, where X is the number of creature cards in your graveyard. Vigorspore Wurm can't be blocked by more than one creature.","artist":"Jason Felix"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25388","set":"Guilds of Ravnica","number":"148",
    "name":"Vivid Revival","type":"Sorcery","manaCost":"{4}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Return up to three target multicolored cards from your graveyard to your hand. Exile Vivid Revival.","artist":"Yeong-Hao Han"
},
{
    "types":["Sorcery"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d25389","set":"Guilds of Ravnica","number":"272",
    "name":"Vraska's Stoneglare","type":"Sorcery","manaCost":"{4}{B}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Destroy target creature. You gain life equal to its toughness. You may search your library and/or graveyard for a card named Vraska, Regal Gorgon, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d2538a","set":"Guilds of Ravnica","number":"213",
    "name":"Vraska, Golgari Queen","type":"Legendary Planeswalker — Vraska","manaCost":"{2}{B}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"[+2]: You may sacrifice another permanent. If you do, you gain 1 life and draw a card. [−3]: Destroy target nonland permanent with converted mana cost 3 or less. [−9]: You get an emblem with \"Whenever a creature you control deals combat damage to a player, that player loses the game.\"","artist":"Magali Villeneuve"
},
{
    "types":["Planeswalker"],"colors":["B","G"],"_id":"5dc70e70b10b7d3670d2538b","set":"Guilds of Ravnica","number":"269",
    "name":"Vraska, Regal Gorgon","type":"Legendary Planeswalker — Vraska","manaCost":"{5}{B}{G}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"[+2]: Put a +1/+1 counter on up to one target creature. That creature gains menace until end of turn. [−3]: Destroy target creature. [−10]: For each creature card in your graveyard, put a +1/+1 counter on each creature you control.","artist":"Magali Villeneuve"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2538c","set":"Guilds of Ravnica","number":"58",
    "name":"Wall of Mist","type":"Creature — Wall","manaCost":"{1}{U}","convertedManaCost":2,"power":"0","toughness":"5",
    "text":"Defender","artist":"Tianhua X"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70e70b10b7d3670d2538d","set":"Guilds of Ravnica","number":"242",
    "name":"Wand of Vertebrae","type":"Artifact","manaCost":"{1}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"{T}: Put the top card of your library into your graveyard. {2}, {T}, Exile Wand of Vertebrae: Shuffle up to five target cards from your graveyard into your library.","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d2538e","set":"Guilds of Ravnica","number":"149",
    "name":"Wary Okapi","type":"Creature — Antelope","manaCost":"{2}{G}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Vigilance","artist":"Jason Felix"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d2538f","set":"Guilds of Ravnica","number":"59",
    "name":"Watcher in the Mist","type":"Creature — Spirit","manaCost":"{3}{U}{U}","convertedManaCost":5,"power":"3","toughness":"4",
    "text":"Flying When Watcher in the Mist enters the battlefield, surveil 2. (Look at the top two cards of your library, then put any number of them into your graveyard and the rest on the top of your library in any order.)","artist":"Ryan Yee"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70e70b10b7d3670d25390","set":"Guilds of Ravnica","number":"259",
    "name":"Watery Grave","type":"Land — Island Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U} or {B}.) As Watery Grave enters the battlefield, you may pay 2 life. If you don't, it enters the battlefield tapped.","artist":"Cliff Childs"
},
{
    "types":["Creature"],"colors":["R","U"],"_id":"5dc70e70b10b7d3670d25391","set":"Guilds of Ravnica","number":"214",
    "name":"Wee Dragonauts","type":"Creature — Faerie Wizard","manaCost":"{1}{U}{R}","convertedManaCost":3,"power":"1","toughness":"3",
    "text":"Flying Whenever you cast an instant or sorcery spell, Wee Dragonauts gets +2/+0 until end of turn.","artist":"Greg Staples"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70e70b10b7d3670d25392","set":"Guilds of Ravnica","number":"220",
    "name":"Whisper Agent","type":"Creature — Human Rogue","manaCost":"{1}{U/B}{U/B}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Flash When Whisper Agent enters the battlefield, surveil 1. (Look at the top card of your library. You may put it into your graveyard.)","artist":"Deruchenko Alexander"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70e70b10b7d3670d25393","set":"Guilds of Ravnica","number":"90",
    "name":"Whispering Snitch","type":"Creature — Vampire Rogue","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Whenever you surveil for the first time each turn, Whispering Snitch deals 1 damage to each opponent and you gain 1 life.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70e70b10b7d3670d25394","set":"Guilds of Ravnica","number":"150",
    "name":"Wild Ceratok","type":"Creature — Rhino","manaCost":"{3}{G}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":null,"artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70e70b10b7d3670d25395","set":"Guilds of Ravnica","number":"60",
    "name":"Wishcoin Crab","type":"Creature — Crab","manaCost":"{3}{U}","convertedManaCost":4,"power":"2","toughness":"5",
    "text":null,"artist":"James Paick"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70e70b10b7d3670d25396","set":"Guilds of Ravnica","number":"120",
    "name":"Wojek Bodyguard","type":"Creature — Human Soldier","manaCost":"{2}{R}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Mentor (Whenever this creature attacks, put a +1/+1 counter on target attacking creature with lesser power.) Wojek Bodyguard can't attack or block alone.","artist":"Tyler Walpole"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70e70b10b7d3670d25397","set":"Guilds of Ravnica","number":"215",
    "name":"Worldsoul Colossus","type":"Creature — Elemental","manaCost":"{X}{G}{W}","convertedManaCost":2,"power":"0","toughness":"0",
    "text":"Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.) Worldsoul Colossus enters the battlefield with X +1/+1 counters on it.","artist":"James Paick"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce870ed","set":"War of the Spark","number":"113",
    "name":"Ahn-Crop Invader","type":"Creature — Zombie Minotaur Warrior","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"As long as it's your turn, Ahn-Crop Invader has first strike. {1}, Sacrifice another creature: Ahn-Crop Invader gets +2/+0 until end of turn.","artist":"Tomasz Jedruszek"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce870ee","set":"War of the Spark","number":"76",
    "name":"Aid the Fallen","type":"Sorcery","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose one or both — • Return target creature card from your graveyard to your hand. • Return target planeswalker card from your graveyard to your hand.","artist":"Sara Winters"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce870ef","set":"War of the Spark","number":"4",
    "name":"Ajani's Pridemate","type":"Creature — Cat Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Whenever you gain life, put a +1/+1 counter on Ajani's Pridemate.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Planeswalker"],"colors":["G","W"],"_id":"5dc70ea772a60f542ce870f0","set":"War of the Spark","number":"184",
    "name":"Ajani, the Greathearted","type":"Legendary Planeswalker — Ajani","manaCost":"{2}{G}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control have vigilance. [+1]: You gain 3 life. [−2]: Put a +1/+1 counter on each creature you control and a loyalty counter on each other planeswalker you control.","artist":"Victor Adame Minguez"
},
{
    "types":["Planeswalker"],"colors":["G","W"],"_id":"5dc70ea772a60f542ce870f1","set":"War of the Spark","number":"184★",
    "name":"Ajani, the Greathearted","type":"Legendary Planeswalker — Ajani","manaCost":"{2}{G}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control have vigilance. [+1]: You gain 3 life. [−2]: Put a +1/+1 counter on each creature you control and a loyalty counter on each other planeswalker you control.","artist":"Miho Midorikawa"
},
{
    "types":["Sorcery"],"colors":["B","R"],"_id":"5dc70ea772a60f542ce870f2","set":"War of the Spark","number":"185",
    "name":"Angrath's Rampage","type":"Sorcery","manaCost":"{B}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose one — • Target player sacrifices an artifact. • Target player sacrifices a creature. • Target player sacrifices a planeswalker.","artist":"Victor Adame Minguez"
},
{
    "types":["Planeswalker"],"colors":["B","R"],"_id":"5dc70ea772a60f542ce870f3","set":"War of the Spark","number":"227",
    "name":"Angrath, Captain of Chaos","type":"Legendary Planeswalker — Angrath","manaCost":"{2}{B/R}{B/R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control have menace. [−2]: Amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Slawomir Maniak"
},
{
    "types":["Planeswalker"],"colors":["B","R"],"_id":"5dc70ea772a60f542ce870f4","set":"War of the Spark","number":"227★",
    "name":"Angrath, Captain of Chaos","type":"Legendary Planeswalker — Angrath","manaCost":"{2}{B/R}{B/R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control have menace. [−2]: Amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Sansyu"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce870f5","set":"War of the Spark","number":"149",
    "name":"Arboreal Grazer","type":"Creature — Beast","manaCost":"{G}","convertedManaCost":1,"power":"0","toughness":"3",
    "text":"Reach When Arboreal Grazer enters the battlefield, you may put a land card from your hand onto the battlefield tapped.","artist":"Jason Rainville"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce870f6","set":"War of the Spark","number":"151",
    "name":"Arlinn's Wolf","type":"Creature — Wolf","manaCost":"{2}{G}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Arlinn's Wolf can't be blocked by creatures with power 2 or less.","artist":"Kimonas Theodossiou"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70ea772a60f542ce870f7","set":"War of the Spark","number":"150",
    "name":"Arlinn, Voice of the Pack","type":"Legendary Planeswalker — Arlinn","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Each creature you control that's a Wolf or a Werewolf enters the battlefield with an additional +1/+1 counter on it. [−2]: Create a 2/2 green Wolf creature token.","artist":"Ryan Pancoast"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70ea772a60f542ce870f8","set":"War of the Spark","number":"150★",
    "name":"Arlinn, Voice of the Pack","type":"Legendary Planeswalker — Arlinn","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Each creature you control that's a Wolf or a Werewolf enters the battlefield with an additional +1/+1 counter on it. [−2]: Create a 2/2 green Wolf creature token.","artist":"D-suzuki"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce870f9","set":"War of the Spark","number":"40",
    "name":"Ashiok's Skulker","type":"Creature — Nightmare","manaCost":"{4}{U}","convertedManaCost":5,"power":"3","toughness":"5",
    "text":"{3}{U}: Ashiok's Skulker can't be blocked this turn.","artist":"Livia Prima"
},
{
    "types":["Planeswalker"],"colors":["B","U"],"_id":"5dc70ea772a60f542ce870fa","set":"War of the Spark","number":"228",
    "name":"Ashiok, Dream Render","type":"Legendary Planeswalker — Ashiok","manaCost":"{1}{U/B}{U/B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Spells and abilities your opponents control can't cause their controller to search their library. [−1]: Target player puts the top four cards of their library into their graveyard. Then exile each opponent's graveyard.","artist":"Cynthia Sheppard"
},
{
    "types":["Planeswalker"],"colors":["B","U"],"_id":"5dc70ea772a60f542ce870fb","set":"War of the Spark","number":"228★",
    "name":"Ashiok, Dream Render","type":"Legendary Planeswalker — Ashiok","manaCost":"{1}{U/B}{U/B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Spells and abilities your opponents control can't cause their controller to search their library. [−1]: Target player puts the top four cards of their library into their graveyard. Then exile each opponent's graveyard.","artist":"Hozan Shinomaru"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce870fc","set":"War of the Spark","number":"41",
    "name":"Augur of Bolas","type":"Creature — Merfolk Wizard","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"When Augur of Bolas enters the battlefield, look at the top three cards of your library. You may reveal an instant or sorcery card from among them and put it into your hand. Put the rest on the bottom of your library in any order.","artist":"Alex Konstad"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce870fd","set":"War of the Spark","number":"42",
    "name":"Aven Eternal","type":"Creature — Zombie Bird Warrior","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying When Aven Eternal enters the battlefield, amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Johan Grenier"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70ea772a60f542ce870fe","set":"War of the Spark","number":"152",
    "name":"Awakening of Vitu-Ghazi","type":"Instant","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Put nine +1/+1 counters on target land you control. It becomes a legendary 0/0 Elemental creature with haste named Vitu-Ghazi. It's still a land.","artist":"Jaime Jones"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70ea772a60f542ce870ff","set":"War of the Spark","number":"153",
    "name":"Band Together","type":"Instant","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Up to two target creatures you control each deal damage equal to their power to another target creature.","artist":"Josh Hass"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce87100","set":"War of the Spark","number":"77",
    "name":"Banehound","type":"Creature — Nightmare Hound","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Lifelink, haste","artist":"YW Tang"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce87101","set":"War of the Spark","number":"5",
    "name":"Battlefield Promotion","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on target creature. That creature gains first strike until end of turn. You gain 2 life.","artist":"Scott Murphy"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70ea772a60f542ce87102","set":"War of the Spark","number":"186",
    "name":"Bioessence Hydra","type":"Creature — Hydra Mutant","manaCost":"{3}{G}{U}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Trample Bioessence Hydra enters the battlefield with a +1/+1 counter on it for each loyalty counter on planeswalkers you control. Whenever one or more loyalty counters are put on planeswalkers you control, put that many +1/+1 counters on Bioessence Hydra.","artist":"Mathias Kollros"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce87103","set":"War of the Spark","number":"244",
    "name":"Blast Zone","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Blast Zone enters the battlefield with a charge counter on it. {T}: Add {C}. {X}{X}, {T}: Put X charge counters on Blast Zone. {3}, {T}, Sacrifice Blast Zone: Destroy each nonland permanent with converted mana cost equal to the number of charge counters on Blast Zone.","artist":"Chris Ostrowski"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce87104","set":"War of the Spark","number":"78",
    "name":"Bleeding Edge","type":"Sorcery","manaCost":"{1}{B}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Up to one target creature gets -2/-2 until end of turn. Amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Mike Bierek"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce87105","set":"War of the Spark","number":"114",
    "name":"Blindblast","type":"Instant","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Blindblast deals 1 damage to target creature. That creature can't block this turn. Draw a card.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce87106","set":"War of the Spark","number":"154",
    "name":"Bloom Hulk","type":"Creature — Plant Elemental","manaCost":"{3}{G}","convertedManaCost":4,"power":"4","toughness":"4",
    "text":"When Bloom Hulk enters the battlefield, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Even Amundsen"
},
{
    "types":["Artifact"],"colors":["B"],"_id":"5dc70ea772a60f542ce87107","set":"War of the Spark","number":"79",
    "name":"Bolas's Citadel","type":"Legendary Artifact","manaCost":"{3}{B}{B}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"You may look at the top card of your library any time. You may play the top card of your library. If you cast a spell this way, pay life equal to its converted mana cost rather than pay its mana cost. {T}, Sacrifice ten nonland permanents: Each opponent loses 10 life.","artist":"Jonas De Ro"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce87108","set":"War of the Spark","number":"115",
    "name":"Bolt Bend","type":"Instant","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"This spell costs {3} less to cast if you control a creature with power 4 or greater. Change the target of target spell or ability with a single target.","artist":"Svetlin Velinov"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70ea772a60f542ce87109","set":"War of the Spark","number":"6",
    "name":"Bond of Discipline","type":"Sorcery","manaCost":"{4}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Tap all creatures your opponents control. Creatures you control gain lifelink until end of turn.","artist":"Zezhou Chen"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70ea772a60f542ce8710a","set":"War of the Spark","number":"155",
    "name":"Bond of Flourishing","type":"Sorcery","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Look at the top three cards of your library. You may reveal a permanent card from among them and put it into your hand. Put the rest on the bottom of your library in any order. You gain 3 life.","artist":"Tyler Walpole"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce8710b","set":"War of the Spark","number":"43",
    "name":"Bond of Insight","type":"Sorcery","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Each player puts the top four cards of their library into their graveyard. Return up to two instant and/or sorcery cards from your graveyard to your hand. Exile Bond of Insight.","artist":"Joe Slucher"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70ea772a60f542ce8710c","set":"War of the Spark","number":"116",
    "name":"Bond of Passion","type":"Sorcery","manaCost":"{4}{R}{R}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn. Bond of Passion deals 2 damage to any other target.","artist":"Izzy"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce8710d","set":"War of the Spark","number":"80",
    "name":"Bond of Revival","type":"Sorcery","manaCost":"{4}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Return target creature card from your graveyard to the battlefield. It gains haste until your next turn.","artist":"Lake Hurwitz"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8710e","set":"War of the Spark","number":"7",
    "name":"Bulwark Giant","type":"Creature — Giant Soldier","manaCost":"{5}{W}","convertedManaCost":6,"power":"3","toughness":"6",
    "text":"When Bulwark Giant enters the battlefield, you gain 5 life.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce8710f","set":"War of the Spark","number":"117",
    "name":"Burning Prophet","type":"Creature — Human Wizard","manaCost":"{1}{R}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Whenever you cast a noncreature spell, Burning Prophet gets +1/+0 until end of turn, then scry 1.","artist":"Mathias Kollros"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce87110","set":"War of the Spark","number":"44",
    "name":"Callous Dismissal","type":"Sorcery","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Return target nonland permanent to its owner's hand. Amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Mathias Kollros"
},
{
    "types":["Sorcery"],"colors":["B","G"],"_id":"5dc70ea772a60f542ce87111","set":"War of the Spark","number":"187",
    "name":"Casualties of War","type":"Sorcery","manaCost":"{2}{B}{B}{G}{G}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Choose one or more — • Destroy target artifact. • Destroy target creature. • Destroy target enchantment. • Destroy target land. • Destroy target planeswalker.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce87112","set":"War of the Spark","number":"156",
    "name":"Centaur Nurturer","type":"Creature — Centaur Druid","manaCost":"{3}{G}","convertedManaCost":4,"power":"2","toughness":"4",
    "text":"When Centaur Nurturer enters the battlefield, you gain 3 life. {T}: Add one mana of any color.","artist":"Even Amundsen"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87113","set":"War of the Spark","number":"118",
    "name":"Chainwhip Cyclops","type":"Creature — Cyclops Warrior","manaCost":"{4}{R}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"{3}{R}: Target creature can't block this turn.","artist":"Johann Bodin"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce87114","set":"War of the Spark","number":"157",
    "name":"Challenger Troll","type":"Creature — Troll","manaCost":"{4}{G}","convertedManaCost":5,"power":"6","toughness":"5",
    "text":"Each creature you control with power 4 or greater can't be blockedby more than one creature.","artist":"Svetlin Velinov"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce87115","set":"War of the Spark","number":"120",
    "name":"Chandra's Pyrohelix","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Chandra's Pyrohelix deals 2 damage divided as you choose among one or two targets.","artist":"Aleksi Briclot"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce87116","set":"War of the Spark","number":"121",
    "name":"Chandra's Triumph","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Chandra's Triumph deals 3 damage to target creature or planeswalker an opponent controls. Chandra's Triumph deals 5 damage to that permanent instead if you control a Chandra planeswalker.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70ea772a60f542ce87117","set":"War of the Spark","number":"119",
    "name":"Chandra, Fire Artisan","type":"Legendary Planeswalker — Chandra","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever one or more loyalty counters are removed from Chandra, Fire Artisan, she deals that much damage to target opponent or planeswalker. [+1]: Exile the top card of your library. You may play it this turn. [−7]: Exile the top seven cards of your library. You may play them this turn.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70ea772a60f542ce87118","set":"War of the Spark","number":"119★",
    "name":"Chandra, Fire Artisan","type":"Legendary Planeswalker — Chandra","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever one or more loyalty counters are removed from Chandra, Fire Artisan, she deals that much damage to target opponent or planeswalker. [+1]: Exile the top card of your library. You may play it this turn. [−7]: Exile the top seven cards of your library. You may play them this turn.","artist":"Ryota-H"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce87119","set":"War of the Spark","number":"81",
    "name":"Charity Extractor","type":"Creature — Human Knight","manaCost":"{3}{B}","convertedManaCost":4,"power":"1","toughness":"5",
    "text":"Lifelink","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8711a","set":"War of the Spark","number":"8",
    "name":"Charmed Stray","type":"Creature — Cat","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Lifelink When Charmed Stray enters the battlefield, put a +1/+1 counter on each other creature you control named Charmed Stray.","artist":"Chris Rahn"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce8711b","set":"War of the Spark","number":"82",
    "name":"Command the Dreadhorde","type":"Sorcery","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Choose any number of target creature and/or planeswalker cards in graveyards. Command the Dreadhorde deals damage to you equal to the total converted mana cost of those cards. Put them onto the battlefield under your control.","artist":"Daarken"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce8711d","set":"War of the Spark","number":"46",
    "name":"Contentious Plan","type":"Sorcery","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.) Draw a card.","artist":"Eric Deschamps"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70ea772a60f542ce8711c","set":"War of the Spark","number":"45",
    "name":"Commence the Endgame","type":"Instant","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"This spell can't be countered. Draw two cards, then amass X, where X is the number of cards in your hand. (Put X +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Noah Bradley"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70ea772a60f542ce8711e","set":"War of the Spark","number":"158",
    "name":"Courage in Crisis","type":"Sorcery","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on target creature, then proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Micah Epstein"
},
{
    "types":["Creature"],"colors":["B","W"],"_id":"5dc70ea772a60f542ce8711f","set":"War of the Spark","number":"188",
    "name":"Cruel Celebrant","type":"Creature — Vampire","manaCost":"{W}{B}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Whenever Cruel Celebrant or another creature or planeswalker you control dies, each opponent loses 1 life and you gain 1 life.","artist":"Bastien L. Deharme"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70ea772a60f542ce87120","set":"War of the Spark","number":"47",
    "name":"Crush Dissent","type":"Instant","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Counter target spell unless its controller pays {2}. Amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Mike Bierek"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87121","set":"War of the Spark","number":"122",
    "name":"Cyclops Electromancer","type":"Creature — Cyclops Wizard","manaCost":"{4}{R}","convertedManaCost":5,"power":"4","toughness":"2",
    "text":"When Cyclops Electromancer enters the battlefield, it deals X damage to target creature an opponent controls, where X is the number of instant and sorcery cards in your graveyard.","artist":"Jason Felix"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce87122","set":"War of the Spark","number":"84",
    "name":"Davriel's Shadowfugue","type":"Sorcery","manaCost":"{3}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Target player discards two cards and loses 2 life.","artist":"Daarken"
},
{
    "types":["Planeswalker"],"colors":["B"],"_id":"5dc70ea772a60f542ce87123","set":"War of the Spark","number":"83",
    "name":"Davriel, Rogue Shadowmage","type":"Legendary Planeswalker — Davriel","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"At the beginning of each opponent's upkeep, if that player has one or fewer cards in hand, Davriel, Rogue Shadowmage deals 2 damage to them. [−1]: Target player discards a card.","artist":"Daarken"
},
{
    "types":["Planeswalker"],"colors":["B"],"_id":"5dc70ea772a60f542ce87124","set":"War of the Spark","number":"83★",
    "name":"Davriel, Rogue Shadowmage","type":"Legendary Planeswalker — Davriel","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"At the beginning of each opponent's upkeep, if that player has one or fewer cards in hand, Davriel, Rogue Shadowmage deals 2 damage to them. [−1]: Target player discards a card.","artist":"Hagiya Kaoru"
},
{
    "types":["Instant"],"colors":["B","G"],"_id":"5dc70ea772a60f542ce87125","set":"War of the Spark","number":"189",
    "name":"Deathsprout","type":"Instant","manaCost":"{1}{B}{B}{G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy target creature. Search your library for a basic land card, put it onto the battlefield tapped, then shuffle your library.","artist":"Seb McKinnon"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce87127","set":"War of the Spark","number":"85",
    "name":"Deliver Unto Evil","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Choose up to four target cards in your graveyard. If you control a Bolas planeswalker, return those cards to your hand. Otherwise, an opponent chooses two of them. Leave the chosen cards in your graveyard and put the rest into your hand. Exile Deliver Unto Evil.","artist":"Seb McKinnon"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce87126","set":"War of the Spark","number":"9",
    "name":"Defiant Strike","type":"Instant","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +1/+0 until end of turn. Draw a card.","artist":"Gabor Szikszai"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70ea772a60f542ce87128","set":"War of the Spark","number":"123",
    "name":"Demolish","type":"Sorcery","manaCost":"{3}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Destroy target artifact or land.","artist":"Adam Paquette"
},
{
    "types":["Instant"],"colors":["B","W"],"_id":"5dc70ea772a60f542ce87129","set":"War of the Spark","number":"190",
    "name":"Despark","type":"Instant","manaCost":"{W}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Exile target permanent with converted mana cost 4 or greater.","artist":"Slawomir Maniak"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce8712a","set":"War of the Spark","number":"266",
    "name":"Desperate Lunge","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +2/+2 and gains flying until end of turn. You gain 2 life.","artist":"Deruchenko Alexander"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce8712b","set":"War of the Spark","number":"124",
    "name":"Devouring Hellion","type":"Creature — Hellion","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"As Devouring Hellion enters the battlefield, you may sacrifice any number of creatures and/or planeswalkers. If you do, it enters with twice that many +1/+1 counters on it.","artist":"Bayard Wu"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce8712c","set":"War of the Spark","number":"10",
    "name":"Divine Arrow","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Divine Arrow deals 4 damage to target attacking or blocking creature.","artist":"Kieran Yanner"
},
{
    "types":["Sorcery"],"colors":["G","R"],"_id":"5dc70ea772a60f542ce8712d","set":"War of the Spark","number":"192",
    "name":"Domri's Ambush","type":"Sorcery","manaCost":"{R}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on target creature you control. Then that creature deals damage equal to its power to target creature or planeswalker you don't control.","artist":"Victor Adame Minguez"
},
{
    "types":["Planeswalker"],"colors":["G","R"],"_id":"5dc70ea772a60f542ce8712e","set":"War of the Spark","number":"191",
    "name":"Domri, Anarch of Bolas","type":"Legendary Planeswalker — Domri","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creatures you control get +1/+0. [+1]: Add {R} or {G}. Creature spells you cast this turn can't be countered. [−2]: Target creature you control fights target creature you don't control.","artist":"Raymond Swanland"
},
{
    "types":["Planeswalker"],"colors":["G","R"],"_id":"5dc70ea772a60f542ce8712f","set":"War of the Spark","number":"191★",
    "name":"Domri, Anarch of Bolas","type":"Legendary Planeswalker — Domri","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Creatures you control get +1/+0. [+1]: Add {R} or {G}. Creature spells you cast this turn can't be countered. [−2]: Target creature you control fights target creature you don't control.","artist":"Raita Kazama"
},
{
    "types":["Instant"],"colors":["U","W"],"_id":"5dc70ea772a60f542ce87130","set":"War of the Spark","number":"193",
    "name":"Dovin's Veto","type":"Instant","manaCost":"{W}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"This spell can't be countered. Counter target noncreature spell.","artist":"Izzy"
},
{
    "types":["Planeswalker"],"colors":["U","W"],"_id":"5dc70ea772a60f542ce87131","set":"War of the Spark","number":"229",
    "name":"Dovin, Hand of Control","type":"Legendary Planeswalker — Dovin","manaCost":"{2}{W/U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Artifact, instant, and sorcery spells your opponents cast cost {1} more to cast. [−1]: Until your next turn, prevent all damage that would be dealt to and dealt by target permanent an opponent controls.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["U","W"],"_id":"5dc70ea772a60f542ce87132","set":"War of the Spark","number":"229★",
    "name":"Dovin, Hand of Control","type":"Legendary Planeswalker — Dovin","manaCost":"{2}{W/U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Artifact, instant, and sorcery spells your opponents cast cost {1} more to cast. [−1]: Until your next turn, prevent all damage that would be dealt to and dealt by target permanent an opponent controls.","artist":"Nablange"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87133","set":"War of the Spark","number":"125",
    "name":"Dreadhorde Arcanist","type":"Creature — Zombie Wizard","manaCost":"{1}{R}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Trample Whenever Dreadhorde Arcanist attacks, you may cast target instant or sorcery card with converted mana cost less than or equal to Dreadhorde Arcanist's power from your graveyard without paying its mana cost. If that card would be put into your graveyard this turn, exile it instead.","artist":"G-host Lee"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70ea772a60f542ce87134","set":"War of the Spark","number":"194",
    "name":"Dreadhorde Butcher","type":"Creature — Zombie Warrior","manaCost":"{B}{R}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Haste Whenever Dreadhorde Butcher deals combat damage to a player or planeswalker, put a +1/+1 counter on Dreadhorde Butcher. When Dreadhorde Butcher dies, it deals damage equal to its power to any target.","artist":"Piotr Dura"
},
{
    "types":["Enchantment"],"colors":["B"],"_id":"5dc70ea772a60f542ce87135","set":"War of the Spark","number":"86",
    "name":"Dreadhorde Invasion","type":"Enchantment","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"At the beginning of your upkeep, you lose 1 life and amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.) Whenever a Zombie token you control with power 6 or greater attacks, it gains lifelink until end of turn.","artist":"Stanton Feng"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87136","set":"War of the Spark","number":"126",
    "name":"Dreadhorde Twins","type":"Creature — Zombie Jackal Warrior","manaCost":"{3}{R}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"When Dreadhorde Twins enters the battlefield, amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.) Zombie tokens you control have trample.","artist":"Johannes Voss"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce87137","set":"War of the Spark","number":"87",
    "name":"Dreadmalkin","type":"Creature — Zombie Cat","manaCost":"{B}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"Menace (This creature can't be blocked except by two or more creatures.) {2}{B}, Sacrifice another creature or planeswalker: Put two +1/+1 counters on Dreadmalkin.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce87138","set":"War of the Spark","number":"88",
    "name":"Duskmantle Operative","type":"Creature — Human Rogue","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Duskmantle Operative can't be blocked by creatures with power 4 or greater.","artist":"Anna Steinbauer"
},
{
    "types":["Creature"],"colors":["U","W"],"_id":"5dc70ea772a60f542ce87139","set":"War of the Spark","number":"195",
    "name":"Elite Guardmage","type":"Creature — Human Wizard","manaCost":"{2}{W}{U}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Flying When Elite Guardmage enters the battlefield, you gain 3 life and draw a card.","artist":"Pindurski"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce8713a","set":"War of the Spark","number":"245",
    "name":"Emergence Zone","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}: Add {C}. {1}, {T}, Sacrifice Emergence Zone: You may cast spells this turn as though they had flash.","artist":"Jonas De Ro"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8713b","set":"War of the Spark","number":"11",
    "name":"Enforcer Griffin","type":"Creature — Griffin","manaCost":"{4}{W}","convertedManaCost":5,"power":"3","toughness":"4",
    "text":"Flying","artist":"Johan Grenier"
},
{
    "types":["Sorcery"],"colors":["B","U"],"_id":"5dc70ea772a60f542ce8713c","set":"War of the Spark","number":"196",
    "name":"Enter the God-Eternals","type":"Sorcery","manaCost":"{2}{U}{U}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Enter the God-Eternals deals 4 damage to target creature and you gain life equal to the damage dealt this way. Target player puts the top four cards of their library into their graveyard. Amass 4. (Put four +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Daniel Ljunggren"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce8713d","set":"War of the Spark","number":"48",
    "name":"Erratic Visionary","type":"Creature — Human Wizard","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"{1}{U}, {T}: Draw a card, then discard a card.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce8713e","set":"War of the Spark","number":"49",
    "name":"Eternal Skylord","type":"Creature — Zombie Wizard","manaCost":"{4}{U}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"When Eternal Skylord enters the battlefield, amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.) Zombie tokens you control have flying.","artist":"Johan Grenier"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce8713f","set":"War of the Spark","number":"90",
    "name":"Eternal Taskmaster","type":"Creature — Zombie","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"3",
    "text":"Eternal Taskmaster enters the battlefield tapped. Whenever Eternal Taskmaster attacks, you may pay {2}{B}. If you do, return target creature card from your graveyard to your hand.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce87140","set":"War of the Spark","number":"159",
    "name":"Evolution Sage","type":"Creature — Elf Druid","manaCost":"{2}{G}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Whenever a land enters the battlefield under your control, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Simon Dominic"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce87141","set":"War of the Spark","number":"50",
    "name":"Fblthp, the Lost","type":"Legendary Creature — Homunculus","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"When Fblthp, the Lost enters the battlefield, draw a card. If it entered from your library or was cast from your library, draw two cards instead. When Fblthp becomes the target of a spell, shuffle Fblthp into its owner's library.","artist":"Jesper Ejsing"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70ea772a60f542ce87142","set":"War of the Spark","number":"197",
    "name":"Feather, the Redeemed","type":"Legendary Creature — Angel","manaCost":"{R}{W}{W}","convertedManaCost":3,"power":"3","toughness":"4",
    "text":"Flying Whenever you cast an instant or sorcery spell that targets a creature you control, exile that card instead of putting it into your graveyard as it resolves. If you do, return it to your hand at the beginning of the next end step.","artist":"Wayne Reynolds"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70ea772a60f542ce87143","set":"War of the Spark","number":"160",
    "name":"Finale of Devastation","type":"Sorcery","manaCost":"{X}{G}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Search your library and/or graveyard for a creature card with converted mana cost X or less and put it onto the battlefield. If you search your library this way, shuffle it. If X is 10 or more, creatures you control get +X/+X and gain haste until end of turn.","artist":"Bayard Wu"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce87144","set":"War of the Spark","number":"91",
    "name":"Finale of Eternity","type":"Sorcery","manaCost":"{X}{B}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy up to three target creatures with toughness X or less. If X is 10 or more, return all creature cards from your graveyard to the battlefield.","artist":"Daarken"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70ea772a60f542ce87145","set":"War of the Spark","number":"12",
    "name":"Finale of Glory","type":"Sorcery","manaCost":"{X}{W}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Create X 2/2 white Soldier creature tokens with vigilance. If X is 10 or more, also create X 4/4 white Angel creature tokens with flying and vigilance.","artist":"Stanton Feng"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70ea772a60f542ce87146","set":"War of the Spark","number":"127",
    "name":"Finale of Promise","type":"Sorcery","manaCost":"{X}{R}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"You may cast up to one target instant card and/or up to one target sorcery card from your graveyard each with converted mana cost X or less without paying their mana costs. If a card cast this way would be put into your graveyard this turn, exile it instead. If X is 10 or more, copy each of those spells twice. You may choose new targets for the copies.","artist":"Jaime Jones"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce87147","set":"War of the Spark","number":"51",
    "name":"Finale of Revelation","type":"Sorcery","manaCost":"{X}{U}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Draw X cards. If X is 10 or more, instead shuffle your graveyard into your library, draw X cards, untap up to five lands, and you have no maximum hand size for the rest of the game. Exile Finale of Revelation.","artist":"Johann Bodin"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70ea772a60f542ce87148","set":"War of the Spark","number":"237",
    "name":"Firemind Vessel","type":"Artifact","manaCost":"{4}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Firemind Vessel enters the battlefield tapped. {T}: Add two mana of different colors.","artist":"Jenn Ravenna"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce87149","set":"War of the Spark","number":"52",
    "name":"Flux Channeler","type":"Creature — Human Wizard","manaCost":"{2}{U}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Whenever you cast a noncreature spell, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Heonhwa Choe"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70ea772a60f542ce8714a","set":"War of the Spark","number":"161",
    "name":"Forced Landing","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Put target creature with flying on the bottom of its owner's library.","artist":"Svetlin Velinov"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce8714b","set":"War of the Spark","number":"262",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Jonas De Ro"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce8714c","set":"War of the Spark","number":"263",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Titus Lunter"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce8714d","set":"War of the Spark","number":"264",
    "name":"Forest","type":"Basic Land — Forest","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {G}.)","artist":"Richard Wright"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce8714e","set":"War of the Spark","number":"246",
    "name":"Gateway Plaza","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Gateway Plaza enters the battlefield tapped. When Gateway Plaza enters the battlefield, sacrifice it unless you pay {1}. {T}: Add one mana of any color.","artist":"Sung Choi"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70ea772a60f542ce8714f","set":"War of the Spark","number":"162",
    "name":"Giant Growth","type":"Instant","manaCost":"{G}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +3/+3 until end of turn.","artist":"Dmitry Burmak"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70ea772a60f542ce87150","set":"War of the Spark","number":"13",
    "name":"Gideon Blackblade","type":"Legendary Planeswalker — Gideon","manaCost":"{1}{W}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"As long as it's your turn, Gideon Blackblade is a 4/4 Human Soldier creature with indestructible that's still a planeswalker. Prevent all damage that would be dealt to Gideon Blackblade during your turn. [+1]: Up to one other target creature you control gains your choice of vigilance, lifelink, or indestructible until end of turn. [−6]: Exile target nonland permanent.","artist":"Viktor Titov"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70ea772a60f542ce87151","set":"War of the Spark","number":"13★",
    "name":"Gideon Blackblade","type":"Legendary Planeswalker — Gideon","manaCost":"{1}{W}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"As long as it's your turn, Gideon Blackblade is a 4/4 Human Soldier creature with indestructible that's still a planeswalker. Prevent all damage that would be dealt to Gideon Blackblade during your turn. [+1]: Up to one other target creature you control gains your choice of vigilance, lifelink, or indestructible until end of turn. [−6]: Exile target nonland permanent.","artist":"Tada"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70ea772a60f542ce87152","set":"War of the Spark","number":"267",
    "name":"Gideon's Battle Cry","type":"Sorcery","manaCost":"{2}{W}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on each creature you control. You may search your library and/or graveyard for a card named Gideon, the Oathsworn, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce87153","set":"War of the Spark","number":"268",
    "name":"Gideon's Company","type":"Creature — Human Soldier","manaCost":"{3}{W}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Whenever you gain life, put two +1/+1 counters on Gideon's Company. {3}{W}: Put a loyalty counter on target Gideon planeswalker.","artist":"Milivoj Ćeran"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce87154","set":"War of the Spark","number":"14",
    "name":"Gideon's Sacrifice","type":"Instant","manaCost":"{W}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Choose a creature or planeswalker you control. All damage that would be dealt this turn to you and permanents you control is dealt to the chosen permanent instead (if it's still on the battlefield).","artist":"Chris Rallis"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce87155","set":"War of the Spark","number":"15",
    "name":"Gideon's Triumph","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target opponent sacrifices a creature that attacked or blocked this turn. If you control a Gideon planeswalker, that player sacrifices two of those creatures instead.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70ea772a60f542ce87156","set":"War of the Spark","number":"265",
    "name":"Gideon, the Oathsworn","type":"Legendary Planeswalker — Gideon","manaCost":"{4}{W}{W}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Whenever you attack with two or more non-Gideon creatures, put a +1/+1 counter on each of those creatures. [+2]: Until end of turn, Gideon, the Oathsworn becomes a 5/5 white Soldier creature that's still a planeswalker. Prevent all damage that would be dealt to him this turn. (He can't attack if he was cast this turn.) [−9]: Exile Gideon, the Oathsworn and each creature your opponents control.","artist":"Kieran Yanner"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70ea772a60f542ce87157","set":"War of the Spark","number":"198",
    "name":"Gleaming Overseer","type":"Creature — Zombie Wizard","manaCost":"{1}{U}{B}","convertedManaCost":3,"power":"1","toughness":"4",
    "text":"When Gleaming Overseer enters the battlefield, amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.) Zombie tokens you control have hexproof and menace.","artist":"Volkan Baǵa"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87158","set":"War of the Spark","number":"128",
    "name":"Goblin Assailant","type":"Creature — Goblin Warrior","manaCost":"{1}{R}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":null,"artist":"Jesper Ejsing"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87159","set":"War of the Spark","number":"129",
    "name":"Goblin Assault Team","type":"Creature — Goblin Warrior","manaCost":"{3}{R}","convertedManaCost":4,"power":"4","toughness":"1",
    "text":"Haste When Goblin Assault Team dies, put a +1/+1 counter on target creature you control.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce8715a","set":"War of the Spark","number":"92",
    "name":"God-Eternal Bontu","type":"Legendary Creature — Zombie God","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"5","toughness":"6",
    "text":"Menace When God-Eternal Bontu enters the battlefield, sacrifice any number of other permanents, then draw that many cards. When God-Eternal Bontu dies or is put into exile from the battlefield, you may put it into its owner's library third from the top.","artist":"Lius Lasahido"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce8715b","set":"War of the Spark","number":"53",
    "name":"God-Eternal Kefnet","type":"Legendary Creature — Zombie God","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":"4","toughness":"5",
    "text":"Flying You may reveal the first card you draw each turn as you draw it. Whenever you reveal an instant or sorcery card this way, copy that card and you may cast the copy. That copy costs {2} less to cast. When God-Eternal Kefnet dies or is put into exile from the battlefield, you may put it into its owner's library third from the top.","artist":"Lius Lasahido"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8715c","set":"War of the Spark","number":"16",
    "name":"God-Eternal Oketra","type":"Legendary Creature — Zombie God","manaCost":"{3}{W}{W}","convertedManaCost":5,"power":"3","toughness":"6",
    "text":"Double strike Whenever you cast a creature spell, create a 4/4 black Zombie Warrior creature token with vigilance. When God-Eternal Oketra dies or is put into exile from the battlefield, you may put it into its owner's library third from the top.","artist":"Grzegorz Rutkowski"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce8715d","set":"War of the Spark","number":"163",
    "name":"God-Eternal Rhonas","type":"Legendary Creature — Zombie God","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":"5","toughness":"5",
    "text":"Deathtouch When God-Eternal Rhonas enters the battlefield, double the power of each other creature you control until end of turn. Those creatures gain vigilance until end of turn. When God-Eternal Rhonas dies or is put into exile from the battlefield, you may put it into its owner's library third from the top.","artist":"Lius Lasahido"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70ea772a60f542ce8715e","set":"War of the Spark","number":"238",
    "name":"God-Pharaoh's Statue","type":"Legendary Artifact","manaCost":"{6}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Spells your opponents cast cost {2} more to cast. At the beginning of your end step, each opponent loses 1 life.","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8715f","set":"War of the Spark","number":"17",
    "name":"Grateful Apparition","type":"Creature — Spirit","manaCost":"{1}{W}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Flying Whenever Grateful Apparition deals combat damage to a player or planeswalker, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Izzy"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87160","set":"War of the Spark","number":"130",
    "name":"Grim Initiate","type":"Creature — Zombie Warrior","manaCost":"{R}","convertedManaCost":1,"power":"1","toughness":"1",
    "text":"First strike When Grim Initiate dies, amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Jason Felix"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70ea772a60f542ce87161","set":"War of the Spark","number":"239",
    "name":"Guild Globe","type":"Artifact","manaCost":"{2}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"When Guild Globe enters the battlefield, draw a card. {2}, {T}, Sacrifice Guild Globe: Add two mana of different colors.","artist":"Daniel Ljunggren"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce87162","set":"War of the Spark","number":"271",
    "name":"Guildpact Informant","type":"Creature — Faerie Rogue","manaCost":"{2}{U}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Flying Whenever Guildpact Informant deals combat damage to a player or planeswalker, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Randy Gallegos"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce87163","set":"War of the Spark","number":"131",
    "name":"Heartfire","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, sacrifice a creature or planeswalker. Heartfire deals 4 damage to any target.","artist":"Craig J Spearing"
},
{
    "types":["Instant"],"colors":["R","W"],"_id":"5dc70ea772a60f542ce87164","set":"War of the Spark","number":"199",
    "name":"Heartwarming Redemption","type":"Instant","manaCost":"{2}{R}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Discard all the cards in your hand, then draw that many cards plus one. You gain life equal to the number of cards in your hand.","artist":"Howard Lyon"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce87165","set":"War of the Spark","number":"93",
    "name":"Herald of the Dreadhorde","type":"Creature — Zombie Warrior","manaCost":"{3}{B}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"When Herald of the Dreadhorde dies, amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Heonhwa Choe"
},
{
    "types":["Sorcery"],"colors":["R"],"_id":"5dc70ea772a60f542ce87166","set":"War of the Spark","number":"132",
    "name":"Honor the God-Pharaoh","type":"Sorcery","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, discard a card. Draw two cards. Amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"David Palumbo"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70ea772a60f542ce87167","set":"War of the Spark","number":"200",
    "name":"Huatli's Raptor","type":"Creature — Dinosaur","manaCost":"{G}{W}","convertedManaCost":2,"power":"2","toughness":"3",
    "text":"Vigilance When Huatli's Raptor enters the battlefield, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Randy Vargas"
},
{
    "types":["Planeswalker"],"colors":["G","W"],"_id":"5dc70ea772a60f542ce87168","set":"War of the Spark","number":"230",
    "name":"Huatli, the Sun's Heart","type":"Legendary Planeswalker — Huatli","manaCost":"{2}{G/W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each creature you control assigns combat damage equal to its toughness rather than its power. [−3]: You gain life equal to the greatest toughness among creatures you control.","artist":"Lius Lasahido"
},
{
    "types":["Planeswalker"],"colors":["G","W"],"_id":"5dc70ea772a60f542ce87169","set":"War of the Spark","number":"230★",
    "name":"Huatli, the Sun's Heart","type":"Legendary Planeswalker — Huatli","manaCost":"{2}{G/W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each creature you control assigns combat damage equal to its toughness rather than its power. [−3]: You gain life equal to the greatest toughness among creatures you control.","artist":"Masuda Mikio"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce8716a","set":"War of the Spark","number":"18",
    "name":"Ignite the Beacon","type":"Instant","manaCost":"{4}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Search your library for up to two planeswalker cards, reveal them, put them into your hand, then shuffle your library.","artist":"Slawomir Maniak"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce8716b","set":"War of the Spark","number":"133",
    "name":"Ilharg, the Raze-Boar","type":"Legendary Creature — Boar God","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":"6","toughness":"6",
    "text":"Trample Whenever Ilharg, the Raze-Boar attacks, you may put a creature card from your hand onto the battlefield tapped and attacking. Return that creature to your hand at the beginning of the next end step. When Ilharg, the Raze-Boar dies or is put into exile from the battlefield, you may put it into its owner's library third from the top.","artist":"Filip Burburan"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce8716c","set":"War of the Spark","number":"247",
    "name":"Interplanar Beacon","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Whenever you cast a planeswalker spell, you gain 1 life. {T}: Add {C}. {1}, {T}: Add two mana of different colors. Spend this mana only to cast planeswalker spells.","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["R","U"],"_id":"5dc70ea772a60f542ce8716d","set":"War of the Spark","number":"201",
    "name":"Invade the City","type":"Sorcery","manaCost":"{1}{U}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Amass X, where X is the number of instant and sorcery cards in your graveyard. (Put X +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Sung Choi"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce8716e","set":"War of the Spark","number":"134",
    "name":"Invading Manticore","type":"Creature — Zombie Manticore","manaCost":"{5}{R}","convertedManaCost":6,"power":"4","toughness":"5",
    "text":"When Invading Manticore enters the battlefield, amass 2. (Put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Jehan Choo"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70ea772a60f542ce8716f","set":"War of the Spark","number":"240",
    "name":"Iron Bully","type":"Artifact Creature — Golem","manaCost":"{3}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"Menace (This creature can't be blocked except by two or more creatures.) When Iron Bully enters the battlefield, put a +1/+1 counter on target creature.","artist":"Aaron Miller"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce87170","set":"War of the Spark","number":"19",
    "name":"Ironclad Krovod","type":"Creature — Beast","manaCost":"{3}{W}","convertedManaCost":4,"power":"2","toughness":"5",
    "text":null,"artist":"Sam Rowan"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce87171","set":"War of the Spark","number":"253",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce87172","set":"War of the Spark","number":"254",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Richard Wright"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce87173","set":"War of the Spark","number":"255",
    "name":"Island","type":"Basic Land — Island","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {U}.)","artist":"Kirsten Zirngibl"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce87174","set":"War of the Spark","number":"272",
    "name":"Jace's Projection","type":"Creature — Wizard Illusion","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":"2","toughness":"2",
    "text":"Whenever you draw a card, put a +1/+1 counter on Jace's Projection. {3}{U}: Put a loyalty counter on target Jace planeswalker.","artist":"Darek Zabrocki"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce87175","set":"War of the Spark","number":"273",
    "name":"Jace's Ruse","type":"Sorcery","manaCost":"{3}{U}{U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Return up to two target creatures to their owner's hand. You may search your library and/or graveyard for a card named Jace, Arcane Strategist, reveal it, and put it into your hand. If you search your library this way, shuffle it.","artist":"Clint Cearley"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce87176","set":"War of the Spark","number":"55",
    "name":"Jace's Triumph","type":"Sorcery","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Draw two cards. If you control a Jace planeswalker, draw three cards instead.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70ea772a60f542ce87177","set":"War of the Spark","number":"270",
    "name":"Jace, Arcane Strategist","type":"Legendary Planeswalker — Jace","manaCost":"{4}{U}{U}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Whenever you draw your second card each turn, put a +1/+1 counter on target creature you control. [+1]: Draw a card. [−7]: Creatures you control can't be blocked this turn.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70ea772a60f542ce87178","set":"War of the Spark","number":"54",
    "name":"Jace, Wielder of Mysteries","type":"Legendary Planeswalker — Jace","manaCost":"{1}{U}{U}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"If you would draw a card while your library has no cards in it, you win the game instead. [+1]: Target player puts the top two cards of their library into their graveyard. Draw a card. [−8]: Draw seven cards. Then if your library has no cards in it, you win the game.","artist":"Anna Steinbauer"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70ea772a60f542ce87179","set":"War of the Spark","number":"54★",
    "name":"Jace, Wielder of Mysteries","type":"Legendary Planeswalker — Jace","manaCost":"{1}{U}{U}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"If you would draw a card while your library has no cards in it, you win the game instead. [+1]: Target player puts the top two cards of their library into their graveyard. Draw a card. [−8]: Draw seven cards. Then if your library has no cards in it, you win the game.","artist":"Toshiaki Takayama"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce8717a","set":"War of the Spark","number":"136",
    "name":"Jaya's Greeting","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Jaya's Greeting deals 3 damage to target creature. Scry 1.","artist":"Victor Adame Minguez"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70ea772a60f542ce8717b","set":"War of the Spark","number":"135",
    "name":"Jaya, Venerated Firemage","type":"Legendary Planeswalker — Jaya","manaCost":"{4}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"If another red source you control would deal damage to a permanent or player, it deals that much damage plus 1 to that permanent or player instead. [−2]: Jaya, Venerated Firemage deals 2 damage to any target.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70ea772a60f542ce8717c","set":"War of the Spark","number":"135★",
    "name":"Jaya, Venerated Firemage","type":"Legendary Planeswalker — Jaya","manaCost":"{4}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"If another red source you control would deal damage to a permanent or player, it deals that much damage plus 1 to that permanent or player instead. [−2]: Jaya, Venerated Firemage deals 2 damage to any target.","artist":"Maekawa Yuichi"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70ea772a60f542ce8717d","set":"War of the Spark","number":"164",
    "name":"Jiang Yanggu, Wildcrafter","type":"Legendary Planeswalker — Yanggu","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each creature you control with a +1/+1 counter on it has \"{T}: Add one mana of any color.\" [−1]: Put a +1/+1 counter on target creature.","artist":"Anna Steinbauer"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70ea772a60f542ce8717e","set":"War of the Spark","number":"164★",
    "name":"Jiang Yanggu, Wildcrafter","type":"Legendary Planeswalker — Yanggu","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each creature you control with a +1/+1 counter on it has \"{T}: Add one mana of any color.\" [−1]: Put a +1/+1 counter on target creature.","artist":"Daisuke Izuka"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce8717f","set":"War of the Spark","number":"248",
    "name":"Karn's Bastion","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}: Add {C}. {4}, {T}: Proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Adam Paquette"
},
{
    "types":["Planeswalker"],"colors":[],"_id":"5dc70ea772a60f542ce87180","set":"War of the Spark","number":"1",
    "name":"Karn, the Great Creator","type":"Legendary Planeswalker — Karn","manaCost":"{4}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Activated abilities of artifacts your opponents control can't be activated. [+1]: Until your next turn, up to one target noncreature artifact becomes an artifact creature with power and toughness each equal to its converted mana cost. [−2]: You may choose an artifact card you own from outside the game or in exile, reveal that card, and put it into your hand.","artist":"Wisnu Tan"
},
{
    "types":["Planeswalker"],"colors":[],"_id":"5dc70ea772a60f542ce87181","set":"War of the Spark","number":"1★",
    "name":"Karn, the Great Creator","type":"Legendary Planeswalker — Karn","manaCost":"{4}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Activated abilities of artifacts your opponents control can't be activated. [+1]: Until your next turn, up to one target noncreature artifact becomes an artifact creature with power and toughness each equal to its converted mana cost. [−2]: You may choose an artifact card you own from outside the game or in exile, reveal that card, and put it into your hand.","artist":"Naochika Morishita"
},
{
    "types":["Enchantment"],"colors":["U"],"_id":"5dc70ea772a60f542ce87182","set":"War of the Spark","number":"57",
    "name":"Kasmina's Transmutation","type":"Enchantment — Aura","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Enchant creature Enchanted creature loses all abilities and has base power and toughness 1/1.","artist":"Uriah Voth"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70ea772a60f542ce87183","set":"War of the Spark","number":"56",
    "name":"Kasmina, Enigmatic Mentor","type":"Legendary Planeswalker — Kasmina","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Spells your opponents cast that target a creature or planeswalker you control cost {2} more to cast. [−2]: Create a 2/2 blue Wizard creature token. Draw a card, then discard a card.","artist":"Magali Villeneuve"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70ea772a60f542ce87184","set":"War of the Spark","number":"56★",
    "name":"Kasmina, Enigmatic Mentor","type":"Legendary Planeswalker — Kasmina","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Spells your opponents cast that target a creature or planeswalker you control cost {2} more to cast. [−2]: Create a 2/2 blue Wizard creature token. Draw a card, then discard a card.","artist":"Mid"
},
{
    "types":["Enchantment"],"colors":["B"],"_id":"5dc70ea772a60f542ce87185","set":"War of the Spark","number":"94",
    "name":"Kaya's Ghostform","type":"Enchantment — Aura","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Enchant creature or planeswalker you control When enchanted permanent dies or is put into exile, return that card to the battlefield under your control.","artist":"Johan Grenier"
},
{
    "types":["Planeswalker"],"colors":["B","W"],"_id":"5dc70ea772a60f542ce87186","set":"War of the Spark","number":"231",
    "name":"Kaya, Bane of the Dead","type":"Legendary Planeswalker — Kaya","manaCost":"{3}{W/B}{W/B}{W/B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Your opponents and permanents your opponents control with hexproof can be the targets of spells and abilities you control as though they didn't have hexproof. [−3]: Exile target creature.","artist":"Magali Villeneuve"
},
{
    "types":["Planeswalker"],"colors":["B","W"],"_id":"5dc70ea772a60f542ce87187","set":"War of the Spark","number":"231★",
    "name":"Kaya, Bane of the Dead","type":"Legendary Planeswalker — Kaya","manaCost":"{3}{W/B}{W/B}{W/B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Your opponents and permanents your opponents control with hexproof can be the targets of spells and abilities you control as though they didn't have hexproof. [−3]: Exile target creature.","artist":"Mid"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce87188","set":"War of the Spark","number":"58",
    "name":"Kiora's Dambreaker","type":"Creature — Leviathan","manaCost":"{5}{U}","convertedManaCost":6,"power":"5","toughness":"6",
    "text":"When Kiora's Dambreaker enters the battlefield, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Mathias Kollros"
},
{
    "types":["Planeswalker"],"colors":["G","U"],"_id":"5dc70ea772a60f542ce87189","set":"War of the Spark","number":"232",
    "name":"Kiora, Behemoth Beckoner","type":"Legendary Planeswalker — Kiora","manaCost":"{2}{G/U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Whenever a creature with power 4 or greater enters the battlefield under your control, draw a card. [−1]: Untap target permanent.","artist":"Jaime Jones"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce8718b","set":"War of the Spark","number":"165",
    "name":"Kraul Stinger","type":"Creature — Insect Assassin","manaCost":"{2}{G}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Deathtouch","artist":"Randy Vargas"
},
{
    "types":["Planeswalker"],"colors":["G","U"],"_id":"5dc70ea772a60f542ce8718a","set":"War of the Spark","number":"232★",
    "name":"Kiora, Behemoth Beckoner","type":"Legendary Planeswalker — Kiora","manaCost":"{2}{G/U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Whenever a creature with power 4 or greater enters the battlefield under your control, draw a card. [−1]: Untap target permanent.","artist":"Yamamoto Akifumi"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce8718c","set":"War of the Spark","number":"137",
    "name":"Krenko, Tin Street Kingpin","type":"Legendary Creature — Goblin","manaCost":"{2}{R}","convertedManaCost":3,"power":"1","toughness":"2",
    "text":"Whenever Krenko, Tin Street Kingpin attacks, put a +1/+1 counter on it, then create a number of 1/1 red Goblin creature tokens equal to Krenko's power.","artist":"Mark Behm"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce8718d","set":"War of the Spark","number":"166",
    "name":"Kronch Wrangler","type":"Creature — Human Warrior","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Trample Whenever a creature with power 4 or greater enters the battlefield under your control, put a +1/+1 counter on Kronch Wrangler.","artist":"Steve Prescott"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8718e","set":"War of the Spark","number":"20",
    "name":"Law-Rune Enforcer","type":"Creature — Human Soldier","manaCost":"{W}","convertedManaCost":1,"power":"1","toughness":"2",
    "text":"{1}, {T}: Tap target creature with converted mana cost 2 or greater.","artist":"Eric Deschamps"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce8718f","set":"War of the Spark","number":"95",
    "name":"Lazotep Behemoth","type":"Creature — Zombie Hippo","manaCost":"{4}{B}","convertedManaCost":5,"power":"5","toughness":"4",
    "text":null,"artist":"Zezhou Chen"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70ea772a60f542ce87190","set":"War of the Spark","number":"59",
    "name":"Lazotep Plating","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.) You and permanents you control gain hexproof until end of turn. (You and they can't be the targets of spells or abilities your opponents control.)","artist":"Yeong-Hao Han"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce87191","set":"War of the Spark","number":"96",
    "name":"Lazotep Reaver","type":"Creature — Zombie Beast","manaCost":"{1}{B}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"When Lazotep Reaver enters the battlefield, amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Craig J Spearing"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70ea772a60f542ce87192","set":"War of the Spark","number":"202",
    "name":"Leyline Prowler","type":"Creature — Nightmare Beast","manaCost":"{1}{B}{G}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"Deathtouch, lifelink {T}: Add one mana of any color.","artist":"YW Tang"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70ea772a60f542ce87193","set":"War of the Spark","number":"98",
    "name":"Liliana's Triumph","type":"Instant","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Each opponent sacrifices a creature. If you control a Liliana planeswalker, each opponent also discards a card.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["B"],"_id":"5dc70ea772a60f542ce87194","set":"War of the Spark","number":"97",
    "name":"Liliana, Dreadhorde General","type":"Legendary Planeswalker — Liliana","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Whenever a creature you control dies, draw a card. [+1]: Create a 2/2 black Zombie creature token. [−4]: Each player sacrifices two creatures. [−9]: Each opponent chooses a permanent they control of each permanent type and sacrifices the rest.","artist":"Chris Rallis"
},
{
    "types":["Planeswalker"],"colors":["B"],"_id":"5dc70ea772a60f542ce87195","set":"War of the Spark","number":"97★",
    "name":"Liliana, Dreadhorde General","type":"Legendary Planeswalker — Liliana","manaCost":"{4}{B}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Whenever a creature you control dies, draw a card. [+1]: Create a 2/2 black Zombie creature token. [−4]: Each player sacrifices two creatures. [−9]: Each opponent chooses a permanent they control of each permanent type and sacrifices the rest.","artist":"Yoshitaka Amano"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70ea772a60f542ce87196","set":"War of the Spark","number":"203",
    "name":"Living Twister","type":"Creature — Elemental","manaCost":"{R}{R}{G}","convertedManaCost":3,"power":"2","toughness":"5",
    "text":"{1}{R}, Discard a land card: Living Twister deals 2 damage to any target. {G}: Return a tapped land you control to its owner's hand.","artist":"James Paick"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce87197","set":"War of the Spark","number":"21",
    "name":"Loxodon Sergeant","type":"Creature — Elephant Soldier","manaCost":"{3}{W}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Vigilance When Loxodon Sergeant enters the battlefield, other creatures you control gain vigilance until end of turn.","artist":"Jesper Ejsing"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce87198","set":"War of the Spark","number":"22",
    "name":"Makeshift Battalion","type":"Creature — Human Soldier","manaCost":"{2}{W}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Whenever Makeshift Battalion and at least two other creatures attack, put a +1/+1 counter on Makeshift Battalion.","artist":"Zoltan Boros"
},
{
    "types":["Artifact"],"colors":[],"_id":"5dc70ea772a60f542ce87199","set":"War of the Spark","number":"241",
    "name":"Mana Geode","type":"Artifact","manaCost":"{3}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"When Mana Geode enters the battlefield, scry 1. {T}: Add one mana of any color.","artist":"Raoul Vitale"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8719a","set":"War of the Spark","number":"23",
    "name":"Martyr for the Cause","type":"Creature — Human Soldier","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"When Martyr for the Cause dies, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce8719b","set":"War of the Spark","number":"99",
    "name":"Massacre Girl","type":"Legendary Creature — Human Assassin","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":"4","toughness":"4",
    "text":"Menace When Massacre Girl enters the battlefield, each other creature gets -1/-1 until end of turn. Whenever a creature dies this turn, each creature other than Massacre Girl gets -1/-1 until end of turn.","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["B","R"],"_id":"5dc70ea772a60f542ce8719c","set":"War of the Spark","number":"204",
    "name":"Mayhem Devil","type":"Creature — Devil","manaCost":"{1}{B}{R}","convertedManaCost":3,"power":"3","toughness":"3",
    "text":"Whenever a player sacrifices a permanent, Mayhem Devil deals 1 damage to any target.","artist":"Dmitry Burmak"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70ea772a60f542ce8719d","set":"War of the Spark","number":"205",
    "name":"Merfolk Skydiver","type":"Creature — Merfolk Mutant","manaCost":"{G}{U}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"Flying When Merfolk Skydiver enters the battlefield, put a +1/+1 counter on target creature you control. {3}{G}{U}: Proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Sara Winters"
},
{
    "types":["Artifact"],"colors":["R"],"_id":"5dc70ea772a60f542ce8719e","set":"War of the Spark","number":"138",
    "name":"Mizzium Tank","type":"Artifact — Vehicle","manaCost":"{1}{R}{R}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"Trample Whenever you cast a noncreature spell, Mizzium Tank becomes an artifact creature and gets +1/+1 until end of turn. Crew 1 (Tap any number of creatures you control with total power 1 or more: This Vehicle becomes an artifact creature until end of turn.)","artist":"Wayne Reynolds"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce8719f","set":"War of the Spark","number":"249",
    "name":"Mobilized District","type":"Land","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"{T}: Add {C}. {4}: Mobilized District becomes a 3/3 Citizen creature with vigilance until end of turn. It's still a land. This ability costs {1} less to activate for each legendary creature and planeswalker you control.","artist":"Jedd Chevrier"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871a0","set":"War of the Spark","number":"259",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Titus Lunter"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871a1","set":"War of the Spark","number":"260",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871a2","set":"War of the Spark","number":"261",
    "name":"Mountain","type":"Basic Land — Mountain","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {R}.)","artist":"Richard Wright"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce871a3","set":"War of the Spark","number":"167",
    "name":"Mowu, Loyal Companion","type":"Legendary Creature — Hound","manaCost":"{3}{G}","convertedManaCost":4,"power":"3","toughness":"3",
    "text":"Trample, vigilance If one or more +1/+1 counters would be put on Mowu, Loyal Companion, that many plus one +1/+1 counters are put on it instead.","artist":"Kimonas Theodossiou"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce871a4","set":"War of the Spark","number":"60",
    "name":"Naga Eternal","type":"Creature — Zombie Naga","manaCost":"{2}{U}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":null,"artist":"Johann Bodin"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce871a5","set":"War of the Spark","number":"139",
    "name":"Nahiri's Stoneblades","type":"Instant","manaCost":"{1}{R}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Up to two target creatures each get +2/+0 until end of turn.","artist":"Micah Epstein"
},
{
    "types":["Planeswalker"],"colors":["R","W"],"_id":"5dc70ea772a60f542ce871a6","set":"War of the Spark","number":"233",
    "name":"Nahiri, Storm of Stone","type":"Legendary Planeswalker — Nahiri","manaCost":"{2}{R/W}{R/W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"As long as it's your turn, creatures you control have first strike and equip abilities you activate cost {1} less to activate. −X: Nahiri, Storm of Stone deals X damage to target tapped creature.","artist":"Aleksi Briclot"
},
{
    "types":["Planeswalker"],"colors":["R","W"],"_id":"5dc70ea772a60f542ce871a7","set":"War of the Spark","number":"233★",
    "name":"Nahiri, Storm of Stone","type":"Legendary Planeswalker — Nahiri","manaCost":"{2}{R/W}{R/W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"As long as it's your turn, creatures you control have first strike and equip abilities you activate cost {1} less to activate. −X: Nahiri, Storm of Stone deals X damage to target tapped creature.","artist":"Yukie Tajima"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70ea772a60f542ce871a8","set":"War of the Spark","number":"62",
    "name":"Narset's Reversal","type":"Instant","manaCost":"{U}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Copy target instant or sorcery spell, then return it to its owner's hand. You may choose new targets for the copy.","artist":"Viktor Titov"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70ea772a60f542ce871a9","set":"War of the Spark","number":"61",
    "name":"Narset, Parter of Veils","type":"Legendary Planeswalker — Narset","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each opponent can't draw more than one card each turn. [−2]: Look at the top four cards of your library. You may reveal a noncreature, nonland card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Magali Villeneuve"
},
{
    "types":["Planeswalker"],"colors":["U"],"_id":"5dc70ea772a60f542ce871aa","set":"War of the Spark","number":"61★",
    "name":"Narset, Parter of Veils","type":"Legendary Planeswalker — Narset","manaCost":"{1}{U}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each opponent can't draw more than one card each turn. [−2]: Look at the top four cards of your library. You may reveal a noncreature, nonland card from among them and put it into your hand. Put the rest on the bottom of your library in a random order.","artist":"Foo Midori"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce871ab","set":"War of the Spark","number":"140",
    "name":"Neheb, Dreadhorde Champion","type":"Legendary Creature — Zombie Minotaur Warrior","manaCost":"{2}{R}{R}","convertedManaCost":4,"power":"5","toughness":"4",
    "text":"Trample Whenever Neheb, Dreadhorde Champion deals combat damage to a player or planeswalker, you may discard any number of cards. If you do, draw that many cards and add that much {R}. Until end of turn, you don't lose this mana as steps and phases end.","artist":"Igor Kieryluk"
},
{
    "types":["Sorcery"],"colors":["G","U"],"_id":"5dc70ea772a60f542ce871ac","set":"War of the Spark","number":"206",
    "name":"Neoform","type":"Sorcery","manaCost":"{G}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, sacrifice a creature. Search your library for a creature card with converted mana cost equal to 1 plus the sacrificed creature's converted mana cost, put that card onto the battlefield with an additional +1/+1 counter on it, then shuffle your library.","artist":"Bram Sels"
},
{
    "types":["Enchantment"],"colors":["G"],"_id":"5dc70ea772a60f542ce871ad","set":"War of the Spark","number":"168",
    "name":"New Horizons","type":"Enchantment — Aura","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Enchant land When New Horizons enters the battlefield, put a +1/+1 counter on target creature you control. Enchanted land has \"{T}: Add two mana of any one color.\"","artist":"Eytan Zana"
},
{
    "types":["Planeswalker"],"colors":["B","R","U"],"_id":"5dc70ea772a60f542ce871ae","set":"War of the Spark","number":"207",
    "name":"Nicol Bolas, Dragon-God","type":"Legendary Planeswalker — Bolas","manaCost":"{U}{B}{B}{B}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Nicol Bolas, Dragon-God has all loyalty abilities of all other planeswalkers on the battlefield. [+1]: You draw a card. Each opponent exiles a card from their hand or a permanent they control. [−3]: Destroy target creature or planeswalker. [−8]: Each opponent who doesn't control a legendary creature or planeswalker loses the game.","artist":"Raymond Swanland"
},
{
    "types":["Planeswalker"],"colors":["B","R","U"],"_id":"5dc70ea772a60f542ce871af","set":"War of the Spark","number":"207★",
    "name":"Nicol Bolas, Dragon-God","type":"Legendary Planeswalker — Bolas","manaCost":"{U}{B}{B}{B}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Nicol Bolas, Dragon-God has all loyalty abilities of all other planeswalkers on the battlefield. [+1]: You draw a card. Each opponent exiles a card from their hand or a permanent they control. [−3]: Destroy target creature or planeswalker. [−8]: Each opponent who doesn't control a legendary creature or planeswalker loses the game.","artist":"Kaida Yuji"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70ea772a60f542ce871b0","set":"War of the Spark","number":"170",
    "name":"Nissa's Triumph","type":"Sorcery","manaCost":"{G}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Search your library for up to two basic Forest cards. If you control a Nissa planeswalker, instead search your library for up to three land cards. Reveal those cards, put them into your hand, then shuffle your library.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70ea772a60f542ce871b1","set":"War of the Spark","number":"169",
    "name":"Nissa, Who Shakes the World","type":"Legendary Planeswalker — Nissa","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Whenever you tap a Forest for mana, add an additional {G}. [+1]: Put three +1/+1 counters on up to one target noncreature land you control. Untap it. It becomes a 0/0 Elemental creature with vigilance and haste that's still a land. [−8]: You get an emblem with \"Lands you control have indestructible.\" Search your library for any number of Forest cards, put them onto the battlefield tapped, then shuffle your library.","artist":"Chris Rallis"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70ea772a60f542ce871b2","set":"War of the Spark","number":"169★",
    "name":"Nissa, Who Shakes the World","type":"Legendary Planeswalker — Nissa","manaCost":"{3}{G}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Whenever you tap a Forest for mana, add an additional {G}. [+1]: Put three +1/+1 counters on up to one target noncreature land you control. Untap it. It becomes a 0/0 Elemental creature with vigilance and haste that's still a land. [−8]: You get an emblem with \"Lands you control have indestructible.\" Search your library for any number of Forest cards, put them onto the battlefield tapped, then shuffle your library.","artist":"Hitowa"
},
{
    "types":["Creature"],"colors":["B","G","R","U","W"],"_id":"5dc70ea772a60f542ce871b3","set":"War of the Spark","number":"208",
    "name":"Niv-Mizzet Reborn","type":"Legendary Creature — Dragon Avatar","manaCost":"{W}{U}{B}{R}{G}","convertedManaCost":5,"power":"6","toughness":"6",
    "text":"Flying When Niv-Mizzet Reborn enters the battlefield, reveal the top ten cards of your library. For each color pair, choose a card that's exactly those colors from among them. Put the chosen cards into your hand and the rest on the bottom of your library in a random order.","artist":"Raymond Swanland"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70ea772a60f542ce871b4","set":"War of the Spark","number":"63",
    "name":"No Escape","type":"Instant","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Counter target creature or planeswalker spell. If that spell is countered this way, exile it instead of putting it into its owner's graveyard. Scry 1.","artist":"G-host Lee"
},
{
    "types":["Enchantment"],"colors":["B","W"],"_id":"5dc70ea772a60f542ce871b5","set":"War of the Spark","number":"209",
    "name":"Oath of Kaya","type":"Legendary Enchantment","manaCost":"{1}{W}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"When Oath of Kaya enters the battlefield, it deals 3 damage to any target and you gain 3 life. Whenever an opponent attacks a planeswalker you control with one or more creatures, Oath of Kaya deals 2 damage to that player and you gain 2 life.","artist":"Wesley Burt"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70ea772a60f542ce871b6","set":"War of the Spark","number":"101",
    "name":"Ob Nixilis's Cruelty","type":"Instant","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target creature gets -5/-5 until end of turn. If that creature would die this turn, exile it instead.","artist":"Igor Kieryluk"
},
{
    "types":["Planeswalker"],"colors":["B"],"_id":"5dc70ea772a60f542ce871b7","set":"War of the Spark","number":"100",
    "name":"Ob Nixilis, the Hate-Twisted","type":"Legendary Planeswalker — Nixilis","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Whenever an opponent draws a card, Ob Nixilis, the Hate-Twisted deals 1 damage to that player. [−2]: Destroy target creature. Its controller draws two cards.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["B"],"_id":"5dc70ea772a60f542ce871b8","set":"War of the Spark","number":"100★",
    "name":"Ob Nixilis, the Hate-Twisted","type":"Legendary Planeswalker — Nixilis","manaCost":"{3}{B}{B}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Whenever an opponent draws a card, Ob Nixilis, the Hate-Twisted deals 1 damage to that player. [−2]: Destroy target creature. Its controller draws two cards.","artist":"Sansyu"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871b9","set":"War of the Spark","number":"269",
    "name":"Orzhov Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Orzhov Guildgate enters the battlefield tapped. {T}: Add {W} or {B}.","artist":"Cliff Childs"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce871ba","set":"War of the Spark","number":"171",
    "name":"Paradise Druid","type":"Creature — Elf Druid","manaCost":"{1}{G}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"Paradise Druid has hexproof as long as it's untapped.(It can't be the target of spells or abilities your opponents control.) {T}: Add one mana of any color.","artist":"Nils Hamm"
},
{
    "types":["Artifact"],"colors":["W"],"_id":"5dc70ea772a60f542ce871bb","set":"War of the Spark","number":"24",
    "name":"Parhelion II","type":"Legendary Artifact — Vehicle","manaCost":"{6}{W}{W}","convertedManaCost":8,"power":"5","toughness":"5",
    "text":"Flying, first strike, vigilance Whenever Parhelion II attacks, create two 4/4 white Angel creature tokens with flying and vigilance that are attacking. Crew 4 (Tap any number of creatures you control with total power 4 or more: This Vehicle becomes an artifact creature until end of turn.)","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871bc","set":"War of the Spark","number":"250",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Jonas De Ro"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871bd","set":"War of the Spark","number":"251",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871be","set":"War of the Spark","number":"252",
    "name":"Plains","type":"Basic Land — Plains","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {W}.)","artist":"Richard Wright"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70ea772a60f542ce871bf","set":"War of the Spark","number":"172",
    "name":"Planewide Celebration","type":"Sorcery","manaCost":"{5}{G}{G}","convertedManaCost":7,"power":null,"toughness":null,
    "text":"Choose four. You may choose the same mode more than once. • Create a 2/2 Citizen creature token that's all colors. • Return target permanent card from your graveyard to your hand. • Proliferate. • You gain 4 life.","artist":"Wisnu Tan"
},
{
    "types":["Instant"],"colors":["G","W"],"_id":"5dc70ea772a60f542ce871c0","set":"War of the Spark","number":"210",
    "name":"Pledge of Unity","type":"Instant","manaCost":"{1}{G}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Put a +1/+1 counter on each creature you control. You gain 1 life for each creature you control.","artist":"Chris Rallis"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce871c1","set":"War of the Spark","number":"173",
    "name":"Pollenbright Druid","type":"Creature — Elf Druid","manaCost":"{1}{G}","convertedManaCost":2,"power":"1","toughness":"1",
    "text":"When Pollenbright Druid enters the battlefield, choose one — • Put a +1/+1 counter on target creature. • Proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Matt Stewart"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce871c2","set":"War of the Spark","number":"25",
    "name":"Pouncing Lynx","type":"Creature — Cat","manaCost":"{1}{W}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"As long as it's your turn, Pouncing Lynx has first strike.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce871c3","set":"War of the Spark","number":"102",
    "name":"Price of Betrayal","type":"Sorcery","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Remove up to five counters from target artifact, creature, planeswalker, or opponent.","artist":"Ryan Yee"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce871c4","set":"War of the Spark","number":"174",
    "name":"Primordial Wurm","type":"Creature — Wurm","manaCost":"{4}{G}{G}","convertedManaCost":6,"power":"7","toughness":"6",
    "text":null,"artist":"Svetlin Velinov"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70ea772a60f542ce871c5","set":"War of the Spark","number":"242",
    "name":"Prismite","type":"Artifact Creature — Golem","manaCost":"{2}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"{2}: Add one mana of any color.","artist":"Alayna Danner"
},
{
    "types":["Enchantment"],"colors":["W"],"_id":"5dc70ea772a60f542ce871c6","set":"War of the Spark","number":"26",
    "name":"Prison Realm","type":"Enchantment","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"When Prison Realm enters the battlefield, exile target creature or planeswalker an opponent controls until Prison Realm leaves the battlefield. When Prison Realm enters the battlefield, scry 1.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce871c7","set":"War of the Spark","number":"141",
    "name":"Raging Kronch","type":"Creature — Beast","manaCost":"{2}{R}","convertedManaCost":3,"power":"4","toughness":"3",
    "text":"Raging Kronch can't attack alone.","artist":"Steve Prescott"
},
{
    "types":["Instant"],"colors":["R","U"],"_id":"5dc70ea772a60f542ce871c8","set":"War of the Spark","number":"212",
    "name":"Ral's Outburst","type":"Instant","manaCost":"{2}{U}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Ral's Outburst deals 3 damage to any target. Look at the top two cards of your library. Put one of them into your hand and the other into your graveyard.","artist":"Joseph Meehan"
},
{
    "types":["Planeswalker"],"colors":["R","U"],"_id":"5dc70ea772a60f542ce871c9","set":"War of the Spark","number":"211",
    "name":"Ral, Storm Conduit","type":"Legendary Planeswalker — Ral","manaCost":"{2}{U}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever you cast or copy an instant or sorcery spell, Ral, Storm Conduit deals 1 damage to target opponent or planeswalker. [+2]: Scry 1. [−2]: When you cast your next instant or sorcery spell this turn, copy that spell. You may choose new targets for the copy.","artist":"Wesley Burt"
},
{
    "types":["Planeswalker"],"colors":["R","U"],"_id":"5dc70ea772a60f542ce871ca","set":"War of the Spark","number":"211★",
    "name":"Ral, Storm Conduit","type":"Legendary Planeswalker — Ral","manaCost":"{2}{U}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever you cast or copy an instant or sorcery spell, Ral, Storm Conduit deals 1 damage to target opponent or planeswalker. [+2]: Scry 1. [−2]: When you cast your next instant or sorcery spell this turn, copy that spell. You may choose new targets for the copy.","artist":"Naochika Morishita"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce871cb","set":"War of the Spark","number":"27",
    "name":"Rally of Wings","type":"Instant","manaCost":"{1}{W}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Untap all creatures you control. Creatures you control with flying get +2/+2 until end of turn.","artist":"Magali Villeneuve"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70ea772a60f542ce871cc","set":"War of the Spark","number":"28",
    "name":"Ravnica at War","type":"Sorcery","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Exile all multicolored permanents.","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce871cd","set":"War of the Spark","number":"64",
    "name":"Relentless Advance","type":"Sorcery","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Amass 3. (Put three +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Stanton Feng"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce871ce","set":"War of the Spark","number":"65",
    "name":"Rescuer Sphinx","type":"Creature — Sphinx","manaCost":"{2}{U}{U}","convertedManaCost":4,"power":"3","toughness":"2",
    "text":"Flying As Rescuer Sphinx enters the battlefield, you may return a nonland permanent you control to its owner's hand. If you do, Rescuer Sphinx enters the battlefield with a +1/+1 counter on it.","artist":"Jesper Ejsing"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70ea772a60f542ce871cf","set":"War of the Spark","number":"175",
    "name":"Return to Nature","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose one — • Destroy target artifact. • Destroy target enchantment. • Exile target card from a graveyard.","artist":"Alayna Danner"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce871d0","set":"War of the Spark","number":"29",
    "name":"Rising Populace","type":"Creature — Human","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Whenever another creature or planeswalker you control dies, put a +1/+1 counter on Rising Populace.","artist":"Tomasz Jedruszek"
},
{
    "types":["Creature"],"colors":["G","U"],"_id":"5dc70ea772a60f542ce871d1","set":"War of the Spark","number":"213",
    "name":"Roalesk, Apex Hybrid","type":"Legendary Creature — Human Mutant","manaCost":"{2}{G}{G}{U}","convertedManaCost":5,"power":"4","toughness":"5",
    "text":"Flying, trample When Roalesk, Apex Hybrid enters the battlefield, put two +1/+1 counters on another target creature you control. When Roalesk dies, proliferate, then proliferate again. (Choose any number of permanents and/or players, then give each another counter of each kind already there. Then do it again.)","artist":"Svetlin Velinov"
},
{
    "types":["Sorcery"],"colors":["R","U"],"_id":"5dc70ea772a60f542ce871d2","set":"War of the Spark","number":"214",
    "name":"Role Reversal","type":"Sorcery","manaCost":"{U}{U}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Exchange control of two target permanents that share a permanent type.","artist":"Mathias Kollros"
},
{
    "types":["Creature"],"colors":["G","R"],"_id":"5dc70ea772a60f542ce871d3","set":"War of the Spark","number":"215",
    "name":"Rubblebelt Rioters","type":"Creature — Human Berserker","manaCost":"{1}{R}{G}","convertedManaCost":3,"power":"0","toughness":"4",
    "text":"Haste Whenever Rubblebelt Rioters attacks, it gets +X/+0 until end of turn, where X is the greatest power among creatures you control.","artist":"Tomasz Jedruszek"
},
{
    "types":["Artifact","Creature"],"colors":[],"_id":"5dc70ea772a60f542ce871d4","set":"War of the Spark","number":"243",
    "name":"Saheeli's Silverwing","type":"Artifact Creature — Drake","manaCost":"{4}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Flying When Saheeli's Silverwing enters the battlefield, look at the top card of target opponent's library.","artist":"Daniel Ljunggren"
},
{
    "types":["Planeswalker"],"colors":["R","U"],"_id":"5dc70ea772a60f542ce871d5","set":"War of the Spark","number":"234",
    "name":"Saheeli, Sublime Artificer","type":"Legendary Planeswalker — Saheeli","manaCost":"{1}{U/R}{U/R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Whenever you cast a noncreature spell, create a 1/1 colorless Servo artifact creature token. [−2]: Target artifact you control becomes a copy of another target artifact or creature you control until end of turn, except it's an artifact in addition to its other types.","artist":"Wesley Burt"
},
{
    "types":["Planeswalker"],"colors":["R","U"],"_id":"5dc70ea772a60f542ce871d6","set":"War of the Spark","number":"234★",
    "name":"Saheeli, Sublime Artificer","type":"Legendary Planeswalker — Saheeli","manaCost":"{1}{U/R}{U/R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Whenever you cast a noncreature spell, create a 1/1 colorless Servo artifact creature token. [−2]: Target artifact you control becomes a copy of another target artifact or creature you control until end of turn, except it's an artifact in addition to its other types.","artist":"Hisashi Momose"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce871d7","set":"War of the Spark","number":"142",
    "name":"Samut's Sprint","type":"Instant","manaCost":"{R}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"Target creature gets +2/+1 and gains haste until end of turn. Scry 1.","artist":"Aleksi Briclot"
},
{
    "types":["Planeswalker"],"colors":["G","R"],"_id":"5dc70ea772a60f542ce871d8","set":"War of the Spark","number":"235",
    "name":"Samut, Tyrant Smasher","type":"Legendary Planeswalker — Samut","manaCost":"{2}{R/G}{R/G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control have haste. [−1]: Target creature gets +2/+1 and gains haste until end of turn. Scry 1.","artist":"Aleksi Briclot"
},
{
    "types":["Planeswalker"],"colors":["G","R"],"_id":"5dc70ea772a60f542ce871d9","set":"War of the Spark","number":"235★",
    "name":"Samut, Tyrant Smasher","type":"Legendary Planeswalker — Samut","manaCost":"{2}{R/G}{R/G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Creatures you control have haste. [−1]: Target creature gets +2/+1 and gains haste until end of turn. Scry 1.","artist":"Norikatsu Miyoshi"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70ea772a60f542ce871da","set":"War of the Spark","number":"143",
    "name":"Sarkhan the Masterless","type":"Legendary Planeswalker — Sarkhan","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Whenever a creature attacks you or a planeswalker you control, each Dragon you control deals 1 damage to that creature. [+1]: Until end of turn, each planeswalker you control becomes a 4/4 red Dragon creature and gains flying. [−3]: Create a 4/4 red Dragon creature token with flying.","artist":"Kieran Yanner"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70ea772a60f542ce871db","set":"War of the Spark","number":"143★",
    "name":"Sarkhan the Masterless","type":"Legendary Planeswalker — Sarkhan","manaCost":"{3}{R}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Whenever a creature attacks you or a planeswalker you control, each Dragon you control deals 1 damage to that creature. [+1]: Until end of turn, each planeswalker you control becomes a 4/4 red Dragon creature and gains flying. [−3]: Create a 4/4 red Dragon creature token with flying.","artist":"Lack"
},
{
    "types":["Instant"],"colors":["R"],"_id":"5dc70ea772a60f542ce871dc","set":"War of the Spark","number":"144",
    "name":"Sarkhan's Catharsis","type":"Instant","manaCost":"{4}{R}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Sarkhan's Catharsis deals 5 damage to target player or planeswalker.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce871dd","set":"War of the Spark","number":"103",
    "name":"Shriekdiver","type":"Creature — Zombie Bird Warrior","manaCost":"{2}{B}","convertedManaCost":3,"power":"2","toughness":"1",
    "text":"Flying {1}: Shriekdiver gains haste until end of turn.","artist":"Piotr Dura"
},
{
    "types":["Artifact"],"colors":["U"],"_id":"5dc70ea772a60f542ce871de","set":"War of the Spark","number":"66",
    "name":"Silent Submersible","type":"Artifact — Vehicle","manaCost":"{U}{U}","convertedManaCost":2,"power":"2","toughness":"3",
    "text":"Whenever Silent Submersible deals combat damage to a player or planeswalker, draw a card. Crew 2 (Tap any number of creatures you control with total power 2 or more: This Vehicle becomes an artifact creature until end of turn.)","artist":"Daniel Ljunggren"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871df","set":"War of the Spark","number":"274",
    "name":"Simic Guildgate","type":"Land — Gate","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"Simic Guildgate enters the battlefield tapped. {T}: Add {G} or {U}.","artist":"Adam Paquette"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70ea772a60f542ce871e0","set":"War of the Spark","number":"30",
    "name":"Single Combat","type":"Sorcery","manaCost":"{3}{W}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Each player chooses a creature or planeswalker they control, then sacrifices the rest. Players can't cast creature or planeswalker spells until the end of your next turn.","artist":"Livia Prima"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce871e1","set":"War of the Spark","number":"67",
    "name":"Sky Theater Strix","type":"Creature — Bird","manaCost":"{1}{U}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"Flying Whenever you cast a noncreature spell, Sky Theater Strix gets +1/+0 until end of turn.","artist":"Chris Seaman"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce871e2","set":"War of the Spark","number":"176",
    "name":"Snarespinner","type":"Creature — Spider","manaCost":"{1}{G}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Reach Whenever Snarespinner blocks a creature with flying, Snarespinner gets +2/+0 until end of turn.","artist":"Yeong-Hao Han"
},
{
    "types":["Sorcery"],"colors":["R","W"],"_id":"5dc70ea772a60f542ce871e3","set":"War of the Spark","number":"216",
    "name":"Solar Blaze","type":"Sorcery","manaCost":"{2}{R}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Each creature deals damage to itself equal to its power.","artist":"Adam Paquette"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70ea772a60f542ce871e4","set":"War of the Spark","number":"104",
    "name":"Sorin's Thirst","type":"Instant","manaCost":"{B}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Sorin's Thirst deals 2 damage to target creature and you gain 2 life.","artist":"Daarken"
},
{
    "types":["Planeswalker"],"colors":["B","W"],"_id":"5dc70ea772a60f542ce871e5","set":"War of the Spark","number":"217",
    "name":"Sorin, Vengeful Bloodlord","type":"Legendary Planeswalker — Sorin","manaCost":"{2}{W}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"As long as it's your turn, creatures and planeswalkers you control have lifelink. [+2]: Sorin, Vengeful Bloodlord deals 1 damage to target player or planeswalker. −X: Return target creature card with converted mana cost X from your graveyard to the battlefield. That creature is a Vampire in addition to its other types.","artist":"Tommy Arnold"
},
{
    "types":["Planeswalker"],"colors":["B","W"],"_id":"5dc70ea772a60f542ce871e6","set":"War of the Spark","number":"217★",
    "name":"Sorin, Vengeful Bloodlord","type":"Legendary Planeswalker — Sorin","manaCost":"{2}{W}{B}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"As long as it's your turn, creatures and planeswalkers you control have lifelink. [+2]: Sorin, Vengeful Bloodlord deals 1 damage to target player or planeswalker. −X: Return target creature card with converted mana cost X from your graveyard to the battlefield. That creature is a Vampire in addition to its other types.","artist":"Yukie Tajima"
},
{
    "types":["Creature"],"colors":["B","U"],"_id":"5dc70ea772a60f542ce871e7","set":"War of the Spark","number":"218",
    "name":"Soul Diviner","type":"Creature — Zombie Wizard","manaCost":"{U}{B}","convertedManaCost":2,"power":"2","toughness":"3",
    "text":"{T}, Remove a counter from an artifact, creature, land, or planeswalker you control: Draw a card.","artist":"Randy Vargas"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce871e8","set":"War of the Spark","number":"68",
    "name":"Spark Double","type":"Creature — Illusion","manaCost":"{3}{U}","convertedManaCost":4,"power":"0","toughness":"0",
    "text":"You may have Spark Double enter the battlefield as a copy of a creature or planeswalker you control, except it enters with an additional +1/+1 counter on it if it's a creature, it enters with an additional loyalty counter on it if it's a planeswalker, and it isn't legendary if that permanent is legendary.","artist":"Eric Deschamps"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce871e9","set":"War of the Spark","number":"105",
    "name":"Spark Harvest","type":"Sorcery","manaCost":"{B}","convertedManaCost":1,"power":null,"toughness":null,
    "text":"As an additional cost to cast this spell, sacrifice a creature or pay {3}{B}. Destroy target creature or planeswalker.","artist":"Kieran Yanner"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce871ea","set":"War of the Spark","number":"106",
    "name":"Spark Reaper","type":"Creature — Zombie","manaCost":"{2}{B}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"{3}, Sacrifice a creature or planeswalker: You gain 1 life and draw a card.","artist":"Zoltan Boros"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce871eb","set":"War of the Spark","number":"145",
    "name":"Spellgorger Weird","type":"Creature — Weird","manaCost":"{2}{R}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Whenever you cast a noncreature spell, put a +1/+1 counter on Spellgorger Weird.","artist":"James Paick"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce871ec","set":"War of the Spark","number":"69",
    "name":"Spellkeeper Weird","type":"Creature — Weird","manaCost":"{2}{U}","convertedManaCost":3,"power":"1","toughness":"4",
    "text":"{2}, {T}, Sacrifice Spellkeeper Weird: Return target instant or sorcery card from your graveyard to your hand.","artist":"James Paick"
},
{
    "types":["Instant"],"colors":["G"],"_id":"5dc70ea772a60f542ce871ed","set":"War of the Spark","number":"177",
    "name":"Steady Aim","type":"Instant","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Untap target creature. It gets +1/+4 and gains reach until end of turn.","artist":"Ralph Horsley"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce871ee","set":"War of the Spark","number":"70",
    "name":"Stealth Mission","type":"Sorcery","manaCost":"{2}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Put two +1/+1 counters on target creature you control. That creature can't be blocked this turn.","artist":"Heonhwa Choe"
},
{
    "types":["Sorcery"],"colors":["G"],"_id":"5dc70ea772a60f542ce871ef","set":"War of the Spark","number":"178",
    "name":"Storm the Citadel","type":"Sorcery","manaCost":"{4}{G}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Until end of turn, creatures you control get +2/+2 and gain \"Whenever this creature deals combat damage to a player or planeswalker, destroy target artifact or enchantment defending player controls.\"","artist":"Grzegorz Rutkowski"
},
{
    "types":["Creature"],"colors":["B","G"],"_id":"5dc70ea772a60f542ce871f0","set":"War of the Spark","number":"219",
    "name":"Storrev, Devkarin Lich","type":"Legendary Creature — Zombie Elf Wizard","manaCost":"{1}{B}{B}{G}","convertedManaCost":4,"power":"5","toughness":"4",
    "text":"Trample Whenever Storrev, Devkarin Lich deals combat damage to a player or planeswalker, return to your hand target creature or planeswalker card in your graveyard that wasn't put there this combat.","artist":"Igor Kieryluk"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce871f1","set":"War of the Spark","number":"31",
    "name":"Sunblade Angel","type":"Creature — Angel","manaCost":"{5}{W}","convertedManaCost":6,"power":"3","toughness":"3",
    "text":"Flying, first strike, vigilance, lifelink","artist":"Johannes Voss"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871f2","set":"War of the Spark","number":"256",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Titus Lunter"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871f3","set":"War of the Spark","number":"257",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Adam Paquette"
},
{
    "types":["Land"],"colors":[],"_id":"5dc70ea772a60f542ce871f4","set":"War of the Spark","number":"258",
    "name":"Swamp","type":"Basic Land — Swamp","manaCost":null,"convertedManaCost":0,"power":null,"toughness":null,
    "text":"({T}: Add {B}.)","artist":"Richard Wright"
},
{
    "types":["Sorcery"],"colors":["U"],"_id":"5dc70ea772a60f542ce871f5","set":"War of the Spark","number":"71",
    "name":"Tamiyo's Epiphany","type":"Sorcery","manaCost":"{3}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Scry 4, then draw two cards.","artist":"Lake Hurwitz"
},
{
    "types":["Planeswalker"],"colors":["G","U"],"_id":"5dc70ea772a60f542ce871f6","set":"War of the Spark","number":"220",
    "name":"Tamiyo, Collector of Tales","type":"Legendary Planeswalker — Tamiyo","manaCost":"{2}{G}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Spells and abilities your opponents control can't cause you to discard cards or sacrifice permanents. [+1]: Choose a nonland card name, then reveal the top four cards of your library. Put all cards with the chosen name from among them into your hand and the rest into your graveyard. [−3]: Return target card from your graveyard to your hand.","artist":"Chase Stone"
},
{
    "types":["Planeswalker"],"colors":["G","U"],"_id":"5dc70ea772a60f542ce871f7","set":"War of the Spark","number":"220★",
    "name":"Tamiyo, Collector of Tales","type":"Legendary Planeswalker — Tamiyo","manaCost":"{2}{G}{U}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Spells and abilities your opponents control can't cause you to discard cards or sacrifice permanents. [+1]: Choose a nonland card name, then reveal the top four cards of your library. Put all cards with the chosen name from among them into your hand and the rest into your graveyard. [−3]: Return target card from your graveyard to your hand.","artist":"Fuzichoco"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70ea772a60f542ce871f8","set":"War of the Spark","number":"72",
    "name":"Teferi's Time Twist","type":"Instant","manaCost":"{1}{U}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Exile target permanent you control. Return that card to the battlefield under its owner's control at the beginning of the next end step. If it enters the battlefield as a creature, it enters with an additional +1/+1 counter on it.","artist":"Ralph Horsley"
},
{
    "types":["Planeswalker"],"colors":["U","W"],"_id":"5dc70ea772a60f542ce871f9","set":"War of the Spark","number":"221",
    "name":"Teferi, Time Raveler","type":"Legendary Planeswalker — Teferi","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each opponent can cast spells only any time they could cast a sorcery. [+1]: Until your next turn, you may cast sorcery spells as though they had flash. [−3]: Return up to one target artifact, creature, or enchantment to its owner's hand. Draw a card.","artist":"Chris Rallis"
},
{
    "types":["Planeswalker"],"colors":["U","W"],"_id":"5dc70ea772a60f542ce871fa","set":"War of the Spark","number":"221★",
    "name":"Teferi, Time Raveler","type":"Legendary Planeswalker — Teferi","manaCost":"{1}{W}{U}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Each opponent can cast spells only any time they could cast a sorcery. [+1]: Until your next turn, you may cast sorcery spells as though they had flash. [−3]: Return up to one target artifact, creature, or enchantment to its owner's hand. Draw a card.","artist":"Shishizaru"
},
{
    "types":["Creature"],"colors":["R","W"],"_id":"5dc70ea772a60f542ce871fb","set":"War of the Spark","number":"222",
    "name":"Tenth District Legionnaire","type":"Creature — Human Soldier","manaCost":"{R}{W}","convertedManaCost":2,"power":"2","toughness":"2",
    "text":"Haste Whenever you cast a spell that targets Tenth District Legionnaire, put a +1/+1 counter on Tenth District Legionnaire, then scry 1.","artist":"Victor Adame Minguez"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce871fc","set":"War of the Spark","number":"33",
    "name":"Teyo's Lightshield","type":"Creature — Illusion","manaCost":"{2}{W}","convertedManaCost":3,"power":"0","toughness":"3",
    "text":"When Teyo's Lightshield enters the battlefield, put a +1/+1 counter on target creature you control.","artist":"Igor Kieryluk"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70ea772a60f542ce871fd","set":"War of the Spark","number":"32",
    "name":"Teyo, the Shieldmage","type":"Legendary Planeswalker — Teyo","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You have hexproof. (You can't be the target of spells or abilities your opponents control.) [−2]: Create a 0/3 white Wall creature token with defender.","artist":"Magali Villeneuve"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70ea772a60f542ce871fe","set":"War of the Spark","number":"32★",
    "name":"Teyo, the Shieldmage","type":"Legendary Planeswalker — Teyo","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You have hexproof. (You can't be the target of spells or abilities your opponents control.) [−2]: Create a 0/3 white Wall creature token with defender.","artist":"Foo Midori"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce87200","set":"War of the Spark","number":"89",
    "name":"The Elderspell","type":"Sorcery","manaCost":"{B}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Destroy any number of target planeswalkers. Choose a planeswalker you control. Put two loyalty counters on it for each planeswalker destroyed this way.","artist":"Daarken"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70ea772a60f542ce87201","set":"War of the Spark","number":"37",
    "name":"The Wanderer","type":"Legendary Planeswalker","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Prevent all noncombat damage that would be dealt to you and other permanents you control. [−2]: Exile target creature with power 4 or greater.","artist":"Wesley Burt"
},
{
    "types":["Planeswalker"],"colors":["W"],"_id":"5dc70ea772a60f542ce87202","set":"War of the Spark","number":"37★",
    "name":"The Wanderer","type":"Legendary Planeswalker","manaCost":"{3}{W}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Prevent all noncombat damage that would be dealt to you and other permanents you control. [−2]: Exile target creature with power 4 or greater.","artist":"Norikatsu Miyoshi"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce87203","set":"War of the Spark","number":"73",
    "name":"Thunder Drake","type":"Creature — Elemental Drake","manaCost":"{3}{U}","convertedManaCost":4,"power":"2","toughness":"3",
    "text":"Flying Whenever you cast your second spell each turn, put a +1/+1 counter on Thunder Drake.","artist":"Yeong-Hao Han"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87205","set":"War of the Spark","number":"147",
    "name":"Tibalt's Rager","type":"Creature — Devil","manaCost":"{1}{R}","convertedManaCost":2,"power":"1","toughness":"2",
    "text":"When Tibalt's Rager dies, it deals 1 damage to any target. {1}{R}: Tibalt's Rager gets +2/+0 until end of turn.","artist":"Yongjae Choi"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70ea772a60f542ce87206","set":"War of the Spark","number":"146",
    "name":"Tibalt, Rakish Instigator","type":"Legendary Planeswalker — Tibalt","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Your opponents can't gain life. [−2]: Create a 1/1 red Devil creature token with \"When this creature dies, it deals 1 damage to any target.\"","artist":"Chase Stone"
},
{
    "types":["Planeswalker"],"colors":["R"],"_id":"5dc70ea772a60f542ce87207","set":"War of the Spark","number":"146★",
    "name":"Tibalt, Rakish Instigator","type":"Legendary Planeswalker — Tibalt","manaCost":"{2}{R}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Your opponents can't gain life. [−2]: Create a 1/1 red Devil creature token with \"When this creature dies, it deals 1 damage to any target.\"","artist":"Clover.K"
},
{
    "types":["Sorcery"],"colors":["U","W"],"_id":"5dc70ea772a60f542ce87208","set":"War of the Spark","number":"223",
    "name":"Time Wipe","type":"Sorcery","manaCost":"{2}{W}{W}{U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Return a creature you control to its owner's hand, then destroy all creatures.","artist":"Svetlin Velinov"
},
{
    "types":["Sorcery"],"colors":["B"],"_id":"5dc70ea772a60f542ce8720a","set":"War of the Spark","number":"108",
    "name":"Toll of the Invasion","type":"Sorcery","manaCost":"{2}{B}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Target opponent reveals their hand. You choose a nonland card from it. That player discards that card. Amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Joe Slucher"
},
{
    "types":["Creature"],"colors":["G","W"],"_id":"5dc70ea772a60f542ce8720b","set":"War of the Spark","number":"224",
    "name":"Tolsimir, Friend to Wolves","type":"Legendary Creature — Elf Scout","manaCost":"{2}{G}{G}{W}","convertedManaCost":5,"power":"3","toughness":"3",
    "text":"When Tolsimir, Friend to Wolves enters the battlefield, create Voja, Friend to Elves, a legendary 3/3 green and white Wolf creature token. Whenever a Wolf enters the battlefield under your control, you gain 3 life and that creature fights up to one target creature you don't control.","artist":"Ryan Pancoast"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8720c","set":"War of the Spark","number":"34",
    "name":"Tomik, Distinguished Advokist","type":"Legendary Creature — Human Advisor","manaCost":"{W}{W}","convertedManaCost":2,"power":"2","toughness":"3",
    "text":"Flying Lands on the battlefield and land cards in graveyards can't be the targets of spells or abilities your opponents control. Your opponents can't play land cards from graveyards.","artist":"Johannes Voss"
},
{
    "types":["Instant"],"colors":["W"],"_id":"5dc70ea772a60f542ce8720d","set":"War of the Spark","number":"35",
    "name":"Topple the Statue","type":"Instant","manaCost":"{2}{W}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"Tap target permanent. If it's an artifact, destroy it. Draw a card.","artist":"Sidharth Chaturvedi"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce8720f","set":"War of the Spark","number":"36",
    "name":"Trusted Pegasus","type":"Creature — Pegasus","manaCost":"{2}{W}","convertedManaCost":3,"power":"2","toughness":"2",
    "text":"Flying (This creature can't be blocked except by creatures with flying or reach.) Whenever Trusted Pegasus attacks, target attacking creature without flying gains flying until end of turn.","artist":"Chris Rahn"
},
{
    "types":["Creature"],"colors":["R"],"_id":"5dc70ea772a60f542ce87210","set":"War of the Spark","number":"148",
    "name":"Turret Ogre","type":"Creature — Ogre Warrior","manaCost":"{3}{R}","convertedManaCost":4,"power":"4","toughness":"3",
    "text":"Reach When Turret Ogre enters the battlefield, if you control another creature with power 4 or greater, Turret Ogre deals 2 damage to each opponent.","artist":"Johann Bodin"
},
{
    "types":["Instant"],"colors":["B","U"],"_id":"5dc70ea772a60f542ce87211","set":"War of the Spark","number":"225",
    "name":"Tyrant's Scorn","type":"Instant","manaCost":"{U}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Choose one — • Destroy target creature with converted mana cost 3 or less. • Return target creature to its owner's hand.","artist":"Svetlin Velinov"
},
{
    "types":["Creature"],"colors":[],"_id":"5dc70ea772a60f542ce87212","set":"War of the Spark","number":"3",
    "name":"Ugin's Conjurant","type":"Creature — Spirit Monk","manaCost":"{X}","convertedManaCost":0,"power":"0","toughness":"0",
    "text":"Ugin's Conjurant enters the battlefield with X +1/+1 counters on it. If damage would be dealt to Ugin's Conjurant while it has a +1/+1 counter on it, prevent that damage and remove that many +1/+1 counters from Ugin's Conjurant.","artist":"Ryan Yee"
},
{
    "types":["Planeswalker"],"colors":[],"_id":"5dc70ea772a60f542ce87214","set":"War of the Spark","number":"2★",
    "name":"Ugin, the Ineffable","type":"Legendary Planeswalker — Ugin","manaCost":"{6}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Colorless spells you cast cost {2} less to cast. [+1]: Exile the top card of your library face down and look at it. Create a 2/2 colorless Spirit creature token. When that token leaves the battlefield, put the exiled card into your hand. [−3]: Destroy target permanent that's one or more colors.","artist":"Maekawa Yuichi"
},
{
    "types":["Instant"],"colors":["B"],"_id":"5dc70ea772a60f542ce87215","set":"War of the Spark","number":"109",
    "name":"Unlikely Aid","type":"Instant","manaCost":"{1}{B}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"Target creature gets +2/+0 and gains indestructible until end of turn. (Damage and effects that say \"destroy\" don't destroy it.)","artist":"Viktor Titov"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce87216","set":"War of the Spark","number":"110",
    "name":"Vampire Opportunist","type":"Creature — Vampire","manaCost":"{1}{B}","convertedManaCost":2,"power":"2","toughness":"1",
    "text":"{6}{B}: Each opponent loses 2 life and you gain 2 life.","artist":"Jason Rainville"
},
{
    "types":["Planeswalker"],"colors":["B","U"],"_id":"5dc70ea772a60f542ce871ff","set":"War of the Spark","number":"275",
    "name":"Tezzeret, Master of the Bridge","type":"Legendary Planeswalker — Tezzeret","manaCost":"{4}{U}{B}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Creature and planeswalker spells you cast have affinity for artifacts. (They cost {1} less to cast for each artifact you control.) [+2]: Tezzeret, Master of the Bridge deals X damage to each opponent, where X is the number of artifacts you control. You gain X life. [−3]: Return target artifact card from your graveyard to your hand. [−8]: Exile the top ten cards of your library. Put all artifact cards from among them onto the battlefield.","artist":"Chase Stone"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce87204","set":"War of the Spark","number":"179",
    "name":"Thundering Ceratok","type":"Creature — Rhino","manaCost":"{4}{G}","convertedManaCost":5,"power":"4","toughness":"5",
    "text":"Trample When Thundering Ceratok enters the battlefield, other creatures you control gain trample until end of turn.","artist":"Izzy"
},
{
    "types":["Artifact"],"colors":["G"],"_id":"5dc70ea772a60f542ce87217","set":"War of the Spark","number":"181",
    "name":"Vivien's Arkbow","type":"Legendary Artifact","manaCost":"{1}{G}","convertedManaCost":2,"power":null,"toughness":null,
    "text":"{X}, {T}, Discard a card: Look at the top X cards of your library. You may put a creature card with converted mana cost X or less from among them onto the battlefield. Put the rest on the bottom of your library in a random order.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce87209","set":"War of the Spark","number":"107",
    "name":"Tithebearer Giant","type":"Creature — Giant Warrior","manaCost":"{5}{B}","convertedManaCost":6,"power":"4","toughness":"5",
    "text":"When Tithebearer Giant enters the battlefield, you draw a card and you lose 1 life.","artist":"Wisnu Tan"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70ea772a60f542ce87219","set":"War of the Spark","number":"180",
    "name":"Vivien, Champion of the Wilds","type":"Legendary Planeswalker — Vivien","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You may cast creature spells as though they had flash. [+1]: Until your next turn, up to one target creature gains vigilance and reach. [−2]: Look at the top three cards of your library. Exile one face down and put the rest on the bottom of your library in any order. For as long as it remains exiled, you may look at that card and you may cast it if it's a creature card.","artist":"Magali Villeneuve"
},
{
    "types":["Instant"],"colors":["U"],"_id":"5dc70ea772a60f542ce8720e","set":"War of the Spark","number":"74",
    "name":"Totally Lost","type":"Instant","manaCost":"{4}{U}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Put target nonland permanent on top of its owner's library.","artist":"Aaron Miller"
},
{
    "types":["Planeswalker"],"colors":["G"],"_id":"5dc70ea772a60f542ce8721a","set":"War of the Spark","number":"180★",
    "name":"Vivien, Champion of the Wilds","type":"Legendary Planeswalker — Vivien","manaCost":"{2}{G}","convertedManaCost":3,"power":null,"toughness":null,
    "text":"You may cast creature spells as though they had flash. [+1]: Until your next turn, up to one target creature gains vigilance and reach. [−2]: Look at the top three cards of your library. Exile one face down and put the rest on the bottom of your library in any order. For as long as it remains exiled, you may look at that card and you may cast it if it's a creature card.","artist":"Hisashi Momose"
},
{
    "types":["Planeswalker"],"colors":[],"_id":"5dc70ea772a60f542ce87213","set":"War of the Spark","number":"2",
    "name":"Ugin, the Ineffable","type":"Legendary Planeswalker — Ugin","manaCost":"{6}","convertedManaCost":6,"power":null,"toughness":null,
    "text":"Colorless spells you cast cost {2} less to cast. [+1]: Exile the top card of your library face down and look at it. Create a 2/2 colorless Spirit creature token. When that token leaves the battlefield, put the exiled card into your hand. [−3]: Destroy target permanent that's one or more colors.","artist":"Daarken"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce8721b","set":"War of the Spark","number":"111",
    "name":"Vizier of the Scorpion","type":"Creature — Zombie Wizard","manaCost":"{2}{B}","convertedManaCost":3,"power":"1","toughness":"1",
    "text":"When Vizier of the Scorpion enters the battlefield, amass 1. (Put a +1/+1 counter on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.) Zombie tokens you control have deathtouch.","artist":"Zack Stella"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce87218","set":"War of the Spark","number":"182",
    "name":"Vivien's Grizzly","type":"Creature — Bear Spirit","manaCost":"{2}{G}","convertedManaCost":3,"power":"2","toughness":"3",
    "text":"{3}{G}: Look at the top card of your library. If it's a creature or planeswalker card, you may reveal it and put it into your hand. If you don't put the card into your hand, put it on the bottom of your library.","artist":"Lius Lasahido"
},
{
    "types":["Creature"],"colors":["B"],"_id":"5dc70ea772a60f542ce8721c","set":"War of the Spark","number":"112",
    "name":"Vraska's Finisher","type":"Creature — Gorgon Assassin","manaCost":"{2}{B}","convertedManaCost":3,"power":"3","toughness":"2",
    "text":"When Vraska's Finisher enters the battlefield, destroy target creature or planeswalker an opponent controls that was dealt damage this turn.","artist":"Igor Kieryluk"
},
{
    "types":["Planeswalker"],"colors":["B","G"],"_id":"5dc70ea772a60f542ce8721d","set":"War of the Spark","number":"236",
    "name":"Vraska, Swarm's Eminence","type":"Legendary Planeswalker — Vraska","manaCost":"{2}{B/G}{B/G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever a creature you control with deathtouch deals damage to a player or planeswalker, put a +1/+1 counter on that creature. [−2]: Create a 1/1 black Assassin creature token with deathtouch and \"Whenever this creature deals damage to a planeswalker, destroy that planeswalker.\"","artist":"Anna Steinbauer"
},
{
    "types":["Planeswalker"],"colors":["B","G"],"_id":"5dc70ea772a60f542ce8721e","set":"War of the Spark","number":"236★",
    "name":"Vraska, Swarm's Eminence","type":"Legendary Planeswalker — Vraska","manaCost":"{2}{B/G}{B/G}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Whenever a creature you control with deathtouch deals damage to a player or planeswalker, put a +1/+1 counter on that creature. [−2]: Create a 1/1 black Assassin creature token with deathtouch and \"Whenever this creature deals damage to a planeswalker, destroy that planeswalker.\"","artist":"Ryota Murayama"
},
{
    "types":["Creature"],"colors":["U"],"_id":"5dc70ea772a60f542ce8721f","set":"War of the Spark","number":"75",
    "name":"Wall of Runes","type":"Creature — Wall","manaCost":"{U}","convertedManaCost":1,"power":"0","toughness":"4",
    "text":"Defender When Wall of Runes enters the battlefield, scry 1.","artist":"Zezhou Chen"
},
{
    "types":["Sorcery"],"colors":["W"],"_id":"5dc70ea772a60f542ce87220","set":"War of the Spark","number":"38",
    "name":"Wanderer's Strike","type":"Sorcery","manaCost":"{4}{W}","convertedManaCost":5,"power":null,"toughness":null,
    "text":"Exile target creature, then proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)","artist":"Sara Winters"
},
{
    "types":["Creature"],"colors":["W"],"_id":"5dc70ea772a60f542ce87221","set":"War of the Spark","number":"39",
    "name":"War Screecher","type":"Creature — Bird","manaCost":"{1}{W}","convertedManaCost":2,"power":"1","toughness":"3",
    "text":"Flying {5}{W}, {T}: Other creatures you control get +1/+1 until end of turn.","artist":"Dan Scott"
},
{
    "types":["Creature"],"colors":["G"],"_id":"5dc70ea772a60f542ce87222","set":"War of the Spark","number":"183",
    "name":"Wardscale Crocodile","type":"Creature — Crocodile","manaCost":"{4}{G}","convertedManaCost":5,"power":"5","toughness":"3",
    "text":"Hexproof (This creature can't be the target of spells or abilities your opponents control.)","artist":"Zezhou Chen"
},
{
    "types":["Sorcery"],"colors":["B","R"],"_id":"5dc70ea772a60f542ce87223","set":"War of the Spark","number":"226",
    "name":"Widespread Brutality","type":"Sorcery","manaCost":"{1}{B}{R}{R}","convertedManaCost":4,"power":null,"toughness":null,
    "text":"Amass 2, then the Army you amassed deals damage equal to its power to each non-Army creature. (To amass 2, put two +1/+1 counters on an Army you control. If you don't control one, create a 0/0 black Zombie Army creature token first.)","artist":"Victor Adame Minguez"
}
];

db.Card
    .remove({})
    .then(() => db.Card.collection.insertMany(cardSeed))
    .then(data => {
        console.log(data.result.n + " records inserted")
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });