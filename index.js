require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

const WH_Data = {
'A009': ['Class 13 W-Space',        500000000, 5000000, 0, 13, 16],
'A239': ['Lowsec',                  2000000000, 300000000, 0, 8, 24],
'A641': ['Highsec',                 2000000000, 1000000000, 0, 7, 16],
'A982': ['Class 6 W-space',         3000000000, 300000000, 0, 6, 24],
'B041':	['Class 6 W-space',         5000000000, 300000000, 500000000, 6, 48],
'B274': ['Highsec',                 2000000000, 300000000, 0, 7, 24],
'B449': ['Highsec',                 2000000000, 1000000000,	0, 7,	16],
'B520': ['Highsec',                 5000000000, 300000000, 500000000, 7, 24],
'B735': ['Drifter - Barbican',      750000000, 300000000, 0, 16],
'C008': ['Class 5 W-space',         1000000000, 5000000, 500000000, 5, 16],
'C125': ['Class 2 W-Space',         1000000000, 20000000, 0, 2, 16],
'C140': ['Lowsec',                  3000000000, 1350000000, 0, 8, 24],
'C247': ['Class 3 W-space',         2000000000, 300000000, 0, 3, 16],
'C248': ['Nullsec (0.0)',           5000000000, 1350000000, 500000000, 9, 24],
'C391': ['Lowsec',                  5000000000, 1350000000, 500000000, 8, 24],
'C414':	['Drifter - Conflux',	    750000000,	300000000, 0, 16],
'D364':	['Class 2 W-space',	    1000000000,	300000000, 0, 2, 16],
'D382':	['Class 2 W-space',	    2000000000,	300000000, 0, 2, 16],
'D792':	['Highsec',	            3000000000,	1000000000, 0, 7, 24],
'D845':	['Highsec',	            5000000000,	300000000, 500000000, 7, 24],
'E004':	['Class 1 W-Space', 	    1000000000,	5000000, 500000000, 1, 16],
'E175':	['Class 4 W-Space',	    2000000000,	300000000, 0, 4, 16],
'E545':	['Nullsec (0.0)',	    2000000000,	300000000, 0, 9, 24],
'E587':	['Nullsec (0.0)',	    3000000000,	1000000000, 0, 9, 16],
'F135':	['Thera',	            750000000,	300000000, 0, 16],
'F353':	['Thera',	            100000000,	20000000, 0, 16],
'F355':	['Thera',	            100000000,	20000000, 0, 16],
'G008':	['Class 6 W-Space',	    1000000000,	5000000, 500000000, 6, 16],
'G024': ['Class 2 W-Space',	    2000000000,	300000000, 0, 2, 16],
'H121':	['Class 1 W-Space',         500000000,  20000000, 0, 1, 16],
'H296':	['Class 5 W-Space',	    3000000000,	1350000000,	0, 5, 24],
'H900':	['Class 5 W-Space',	    3000000000,	300000000, 0, 5, 24],
'I182':	['Class 2 W-Space',	    2000000000, 300000000, 0, 2, 16],
'J244':	['Lowsec',	            1000000000, 20000000, 0, 8, 24],
'K162':	['Generic Exit WH',	    0, 0, 0, 0, 0],
'K329':	['Nullsec (0.0)',	    5000000000,	1350000000,	500000000,9,24],
'K346':	['Nullsec (0.0)',	    3000000000, 300000000, 0, 9, 24],
'L005':	['Class 2 W-Space',	    1000000000,	5000000, 500000000,	2, 16],
'L031':	['Thera',	            3000000000,	1000000000, 0, 16],
'L477':	['Class 3 W-Space',	    2000000000,	300000000, 0, 3, 16],
'L614':	['Class 5 W-Space',	    1000000000,	20000000, 0, 5, 24],
'M001':	['Class 4 W-Space',	    1000000000, 5000000, 500000000, 4, 16],
'M164':	['Thera',	            2000000000, 300000000, 0,	16],
'M267':	['Class 3 W-Space',	    1000000000, 300000000, 0, 3, 16],
'M555':	['Class 5 W-Space',	    3000000000,	1000000000,	0, 5, 24],
'M609':	['Class 4 W-Space',	    1000000000,	20000000, 0, 4, 16],
'N062':	['Class 5 W-Space',	    3000000000,	300000000, 0, 5, 24],
'N110':	['Highsec',	            1000000000,	20000000, 0, 7,	24],
'N290':	['Lowsec',	            5000000000,	1350000000, 500000000, 8,	24],
'N432':	['Class 5 W-Space',	    3000000000,	1350000000, 0, 5, 24],
'N766':	['Class 2 W-Space',	    2000000000,	300000000, 0, 2, 16],
'N770':	['Class 5 W-Space',	    3000000000,	300000000, 0, 5, 24],
'N944':	['Lowsec',	            3000000000,	1350000000, 0, 8, 24],
'N968':	['Class 3 W-Space',	    2000000000,	300000000, 0, 3, 16],
'O128':	['Class 4 W-Space',	    1000000000,	300000000, 100000000, 4, 24],
'O477':	['Class 3 W-Space',	    2000000000,	300000000, 0, 3, 16],
'O883':	['Class 3 W-Space',	    1000000000,	20000000, 0, 3, 16],
'P060':	['Class 1 W-Space',	    500000000, 20000000, 0, 1, 16],
'Q003':	['Nullsec (0.0)',	    1000000000, 5000000, 500000000, 9, 16],
'Q063':	['Highsec',	            500000000, 20000000, 0, 7, 16],
'Q317':	['Class 1 W-Space',	    500000000, 20000000, 0, 1, 16],
'R051':	['Lowsec',	            3000000000,	1000000000,	0, 8,	16],
'R259':	['Drifter - Redoubt',	    750000000,	300000000, 0, 16],
'R474':	['Class 6 W-Space',	    3000000000,	300000000, 0, 6,	24],
'R943':	['Class 2 W-Space',	    750000000,	300000000, 0, 2,	16],
'S047':	['Highsec',	            3000000000,	300000000, 0, 7,	24],
'S199':	['Nullsec (0.0)',	    3000000000,	1350000000,	0, 9,	24],
'S804':	['Class 6 W-Space',	    1000000000,	20000000,	0, 6,	24],
'S877':	['Drifter - Sentinel',	    750000000,	300000000, 0,		16],
'T405':	['Class 4 W-Space',	    2000000000,	300000000, 0,	4,	16],
'T458':	['Thera',	            500000000,	20000000,	0, 16],
'U210':	['Lowsec',	            3000000000,	300000000, 0,	8, 24],
'U319':	['Class 6 W-Space',	    3000000000,	1350000000,	500000000, 6, 48],
'U574':	['Class 6 W-Space',	    3000000000,	300000000, 0,	6, 24],
'V283':	['Nullsec (0.0)',	    3000000000,	1000000000,	0, 9,	24],
'V301':	['Class 1 W-Space',	    500000000,	20000000,	0, 1, 16],
'V753':	['Class 6 W-Space',	    3000000000,	1350000000,	0, 6,	24],
'V898':	['Lowsec',	            2000000000,	300000000, 0,	16],
'V911':	['Class 5 W-Space',	    3000000000,	1350000000,	0, 5, 24],
'V928':	['Drifter - Vidette',	    750000000,	300000000, 0, 16],
'W237':	['Class 6 W-Space',	    3000000000,	1350000000,	0, 6, 24],
'X702':	['Class 3 W-Space',	    1000000000,	300000000, 0,	3, 24],
'X877':	['Class 4 W-Space',	    2000000000,	300000000, 0,	4, 16],
'Y683':	['Class 4 W-Space',	    2000000000,	300000000, 0,	4, 16],
'Y790':	['Class 1 W-Space',	    500000000,	20000000,	0, 1,	16],
'Z006':	['Class 3 W-Space',	    1000000000,	5000000, 5000000, 1, 16],
'Z060':	['Nullsec (0.0)',	    1000000000,	20000000,	0, 9, 24],
'Z142':	['Nullsec (0.0)',	    3000000000,	1350000000,	0, 9,	24],
'Z457':	['Class 4 W-Space',	    2000000000,	300000000, 0, 4, 16],
'Z647':	['Class 1 W-Space',	    500000000,	20000000,	0, 1, 16],
'Z971':	['Class 1 W-Space',	    100000000,	20000000,	0, 1, 16],
'C729': ['Pochven Space', 	    1000000000, 300000000, 0, 0, 0],
'X450': ['Pochven Space', 	    1000000000, 300000000, 0, 0, 0],
'F216': ['Pochven Space', 	    1000000000, 300000000, 0, 0, 0],
'U372': ['Pochven Space', 	    1000000000, 300000000, 0, 0, 0],
'R081': ['Pochven Space', 	    1000000000, 300000000, 0, 0, 0]
}

bot.login(TOKEN);

function formatCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberOfTrips(max, inv, shiph, shipc) {

  if( inv < 122000000 ) return "Unable to use the Sigil.  Use something else and do math.";
  
  let quotient = Math.floor(max/shiph);
  let remainder = max % shiph;

  if(remainder <= shipc) {
    quotient - 1;
  }

  return (quotient/2) + " HOT round trips; then one additional COLD-in/HOT-out trip." 
}

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  
  const args = message.content.slice(PREFIX.length).trim().split(' ');

  if(args[0].length == 0) {
    message.reply('Please provide the Wormhole ID when calling me!  e.g. !wormy N345');
    return;
  }

  const wormhole = args.shift().toUpperCase();
  const system = args.shift();
  
  if( WH_Data[wormhole] == null) {
    message.reply('"' + wormhole + '"' + ' was not found.  Double check the ID and try again.');
    return;
  } else {
    
  const exampleEmbed = new Discord.RichEmbed()
	.setColor('#f27c8a')
	
	.addField('Wormhole Type', WH_Data[wormhole][0], true)
  .addField('Mass Total Allowed (Kg)', formatCommas( WH_Data[wormhole][1] ), true)
  .addField('Max Individual Mass (Kg)', formatCommas( WH_Data[wormhole][2] ), true)
  .addField('Sigil Instructions', numberOfTrips(WH_Data[wormhole][1], WH_Data[wormhole][2], 122000000, 22000000))
 
  if(system) {
    exampleEmbed.setTitle('Attention: A Nasty Wormhole ' + wormhole + ' has been spotted in ' + system + '!')
  } else {
    exampleEmbed.setTitle('Nasty Wormhole ' + wormhole) 
  }
  message.channel.send(exampleEmbed);
  }
});
