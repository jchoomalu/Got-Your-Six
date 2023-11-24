import db from "../database/database.js"

async function addEventSeeds () {

const events = db.collection('events')

await events.drop()


const eventsList = [{
  "title": "Veterans Writing Contest", 
  "subtitle": "This is a National event",
  "date":  "2023-10-15T14:02:42.802Z", 
  "article": "Veterans writing association to begin will be holding a short story competition this September. Veterans, active duty personel and their families are all welcome to participate. To enter please submit a story, fiction or non-fiction to vetCreate@gmail.com by September 26th 2023. Winners will receive a small prize and a chance to have their work published.",
  "image": "https://lightbox.tlm.cloud/uploads/small/65216882e0778954bc66c18ec3defe30.jpeg",
  "created": "2022-07-15T14:02:42.802Z",
  "category": "National / Public",
  "attending": [{"$oid": "64ad770db9387952675642f6"}, {"$oid": "64ad7784b9387952675642fb"}],
  "attendingCount": 2,
  "cost": "Free"
},
{
  "title": "Mid Western Job Fair", 
  "subtitle": "This is a National event",
  "date":  "2022-09-15T14:02:42.802Z", 
  "article": "Job fair, open to the public. Looking to find a job? The Mid Western Job Fair is back again this year and looking to hire. Both full time and part time postions available. Although this event is open to the public Veterans and service members have had success here in the past. Show your miliatry ID at the door and receive a 'Served with honor' pin. Whether you are looking to keep busy or start a new career the Mid Western Job fair has got what you're looking for.",
  "image": "https://lightbox.tlm.cloud/uploads/medium/b0b825c0d0c14c7a7208082812b8b792.jpeg",
  "created": "2023-07-15T14:02:42.802Z",
  "category": "National / Public",
  "attending": [],
  "attendingCount": 0,
  "cost": "Free"
},
{
  "title": "5k Walking With Warriors",
  "subtitle": "This is a National event",
  "date": "2024-01-15T14:02:42.802Z",
  "article": "This October marks the 13th annual Walk With Warriors 5k. This event takes place coast to coast so check your local area to find out which walk is nearest you. 'The purpose of this event is really to connect with one another', said Erin Glicow, founder of Walking With Warriors. This is an event for the who family, strollers and children are welcome. Get to know your local heroes, hear their stories and see what they are doing now.",
  "image": "https://lightbox.tlm.cloud/uploads/small/c6b0ed0938f5a8cb32ad25bea64935a1.jpeg",
  "created": "2023-07-13T14:02:42.802Z",
  "category": "National / Public",
  "attending": [],
  "attendingCount": 0,
  "cost": "5$"
},
{
  "title": "National Silent Standup",
  "subtitle": "This is a National event",
  "date": "2023-10-08T14:02:42.802Z",
  "article": "Show you're support for America's real life heroes this year by participating in the National Silent Standup hosted by 101 FM. We encourage all Americans to come outside wearing red, white, and blue and participate in a moment of silence together as a country. The time will be at 8PM EST, that is 5PM on the west coast. Tune in to 101 FM radio sharp for syncing up the country for America's brave.",
  "created": "2023-06-05T14:02:42.802Z",
  "image": "https://lightbox.tlm.cloud/uploads/small/4a5e6a4450d9952958559b042e808af3.jpeg",
  "category": "National / Public",
  "attending": [],
  "attendingCount": 0,
  "cost": "Free"
},
{
  "title": "Warcry - Honoring Native American Veterans",
  "subtitle": "This is a National event",
  "date": "2023-10-25T14:02:42.802Z",
  "article": "Native Americans can be said to be the only true Americans. And while history between natives and the military is really quite outrageous (we're looking at you Andrew Jackson modern Native Americans play a vital role in todays military. Members of every major tribe are currently serving on active duty. The Hopi reservation is hosting an event to honor those heroes. This event is for veterans, active military, and their families only.",
  "created": "2023-05-11T14:02:42.802Z",
  "image": "https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/I/m/General_douglas_macarthur_meets_american_indian_troops_wwii_military_pacific_navajo_pima_island_hopping.JPG",
  "category": "National / Private",
  "attending": [],
  "attendingCount": 0,
  "cost": "Free"
},
{
  "title": "NRA / Springfield Armory 2nd Amendment Salute",
  "subtitle": "This is a National event",
  "date": "2024-01-05T14:02:42.802Z",
  "article": "The NRA and Springfield Armory invite you to Massachusetts. This three day gun show will showcase the history of America through it's weapons. Military, veterans and law enforcement will save big bucks with a 10% discount with military ID. Thats not all flash your ID at a Springfield booth and save 25% on any purchase over $300.",
  "created": "2023-07-15T14:02:42.802Z",
  "image": "https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/I/m/Supreme_Court_of_the_United_States.jpg",
  "category": "National / Public",
  "attending": [],
  "attendingCount": 0,
  "cost": "$12"
}]

await events.insertMany(eventsList)

}

export default addEventSeeds