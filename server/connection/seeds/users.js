import db from "../database/database.js"

async function addUserSeeds () {

const users = db.collection('users')

await users.drop()

const userList = [{
	"name" : "Ariana Casique",
	"email" : "aCasique@gmail.com",
	"created" : "2023-07-11T15:20:52.794Z",
	"password" : "$2b$08$xxOpZC7RhURR4WBMABfTIeNN7E2SZPdrTYJzE/aVunthF8ry114GO",
	"branch" : "Patriot Citizen",
	"status" : "Citizen",
	"city" : "Compton ",
	"state" : "California",
	"volunteer" : "Yes, Please contact me anytime.",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
},
{
	"name" : "George Martin",
	"email" : "gMartin@gmail.com",
	"created" : "2023-07-11T15:20:52.794Z",
	"password" : "$2b$08$q83HI.UmxnLRaI1jx6DXheZzGBOa5.cC4V/umcN6oQMm5fwuRKJZK",
	"branch" : "Navy / Marines",
	"status" : "Retired",
	"city" : "Tulsa",
	"state" : "Oklahoma",
	"volunteer" : "Yes, I will contact you when available.",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
},
{
	"name" : "Jason Hoomalu",
	"email" : "jason.hoomalu.3024523@tlm.cloud",
	"created" : "2023-07-11T15:20:52.794Z",
	"password" : "$2b$08$jI8ijD3NvAZ1GfsNVwttJuJ.couLoaB0U3jq5e9vWzBUnJ8GG.gvq",
	"branch" : "Army",
	"status" : "Veteran",
	"city" : "Deer Lodge",
	"state" : "Montana",
	"volunteer" : "Yes, Please contact me anytime.",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
},
{
	"name" : "Jason Mamoa",
	"email" : "aquaman@gmail.com",
	"created" : "2023-07-11T15:20:52.794Z",
	"password" : "$2b$08$FV/GY6OPiKz0iu0Y7dg1MuU4sxzStEhsWBwvAtGDJKSmyiw2maRta",
	"branch" : "Coast Guard",
	"status" : "Reserve / National Guard",
	"city" : "Honolulu",
	"state" : "Hawaii",
	"volunteer" : "Yes, I will contact you when available.",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
},
{
	"name" : "Robb Stark",
	"email" : "rStark@yahoo.com",
	"created" : "2023-07-11T15:20:52.794Z",
	"password" : "$2b$08$0VbzjQi6A/7nm8Ok/gwmp.XaJHhr7LblP81Hduu65wVtG2PjZLwtq",
	"branch" : "Army",
	"status" : "Active Duty",
	"city" : "Winterfell",
	"state" : "Virginia",
	"volunteer" : "Not Right Now",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
},
{
	"name" : "Will Owens",
	"email" : "wOwens@gmail.com",
	"created" : "2023-07-11T15:47:55.590Z",
	"password" : "$2b$08$XtTfOzdiow2Za8gfKoXKce54g6ydhDi6o7uIF9NU9tt4mWAbNb4Qm",
	"branch" : "Navy / Marines",
	"status" : "Retired",
	"city" : "Aberdeen",
	"state" : "Maryland",
	"volunteer" : "Yes, Please contact me anytime.",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
},
{
	"name" : "Paul Selva",
	"email" : "pSelva@yahoo.com",
	"created" : "2023-07-11T15:47:55.590Z",
	"password" : "$2b$08$UFMOy6U91U8Xal3Zi4VWv.y32HiClxxrRxB5nNBlDkbnOjEQ4Y04i",
	"branch" : "Air / Space Force",
	"status" : "Veteran",
	"city" : "Great Falls",
	"state" : "Montana",
	"volunteer" : "Not Right Now",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
},
{
	"name" : "James Cartwright",
	"email" : "jCart@gmail.com",
	"created" : "2023-07-11T15:47:55.590Z",
	"password" : "$2b$08$t1Ba1rlyKDksJ5qIzMn4Cu6Vvn87iuKGwIHWIOjAgJeiO1fJeMVUC",
	"branch" : "Navy / Marines",
	"status" : "Active Duty",
	"city" : "Oceanside ",
	"state" : "California",
	"volunteer" : "Yes, I will contact you when available.",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
},
{
	"name" : "Unknown Soldier",
	"email" : "unknownHero@GotYourSix.com",
	"created" : "2023-07-31T18:49:22.712Z",
	"password" : "$2b$08$0clC3DoIm2xJtkh1.hG0ceaSe3jsZkQ22DuHIvFNEgZuVpMi5Hvcq",
	"branch" : "Army",
	"status" : "Active Duty",
	"city" : "America",
	"state" : "Washington",
	"volunteer" : "Undecided",
	"avatar" : "/static/media/justen.9a3597d0cf7134ffa2ae.jpeg",
	"messages" : [ ],
	"__v" : 0
}]

await users.insertMany(userList)

}

export default addUserSeeds