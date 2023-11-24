import db from "../database/database.js"

async function addResources () {

const resources = db.collection('resources')

await resources.drop()

const resourcesList = [
{
  "title": "Bereavement Counseling",
  "phone": "1-202-461-6530",
  "online": "www.mentalhealth.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Civilian Health and Medical Program (CHAMPVA)",
  "phone": "1-800-733-8387",
  "online": "www.va.gov/COMMUNITYCARE/programs/dependents/champva",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Caregiver Stipend",
  "phone": "1-877-733-7927",
  "online": "www.caregiver.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Debt Management Center",
  "phone": "1-800-827-0648",
  "online": "www.va.gov/vre",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Education (General)",
  "phone": "1-888-442-4551",
  "online": "www.va.gov/education",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Foreign Medical Program",
  "phone": "1-202-461-6530",
  "online": "www.va.gov/statedva.htm",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Spina Bifida Program",
  "phone": "1-888-820-1756",
  "online": "www.va.gov/health-care",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Camp Lejune Family Member Progrm",
  "phone": "1-866-372-1144",
  "online": "www.clfamilymembers.fsc.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Headstones and Markers",
  "phone": "1-800-697-6947",
  "online": "www.cem.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Health Care (General)",
  "phone": "1-877-222-8387",
  "online": "www.va.gov/health-care",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Homeless Veterans",
  "phone": "1-877-424-3838",
  "online": "www.va.gov/homeless",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Home Loans",
  "phone": "1-877-827-3702",
  "online": "www.benefits.va.gov/homeloans",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Life Insurance",
  "phone": "1-800-669-8477",
  "online": "www.benefits.va.gov/insurance",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "National Cemetary Scheduling Office",
  "phone": "1-800-535-1117",
  "online": "www.cem.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Pension Management Center",
  "phone": "1-800-827-1000",
  "online": "www.va.gov/pension",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Presidential Memorial Certificate Program",
  "phone": "1-202-565-4964",
  "online": "www.cem.va.gov/pmc.asp",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Telecommunication Device for the Deaf",
  "phone": "1-800-829-4833",
  "online": "www.connectedcare.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "VA Benefits (General)",
  "phone": "1-800-827-1000",
  "online": "www.ebenefits.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Vet Center Call Center",
  "phone": "1-877-927-8387",
  "online": "www.vetcenter.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "Women Veteran Services",
  "phone": "1-877-222-8387",
  "online": "www.womenshealth.va.gov",
  "type": "Federal / VA Services",
  "federal": true
},
{
  "title": "American Veteran's Center",
  "phone": "1-999-999-9999",
  "online": "www.vetcenter.com",
  "type": "Local VA Services ",
  "federal": false
},
{
  "title": "Disabled American Veterans",
  "phone": "1-999-999-9999",
  "online": "www.dav.org",
  "type": "Veteran Services",
  "federal": false
},
{
  "title": "Volunteers Of America",
  "phone": "1-999-999-9999",
  "online": "www.voanr.org",
  "type": "Veteran Services",
  "federal": false
},
{
  "title": "Iraq and Afghanistan Veterans Of America",
  "phone": "1-999-999-9999",
  "online": "www.iava.org",
  "type": "Post 9/11 Veterans",
  "federal": false
},
{
  "title": "Wounded Warrior Project",
  "phone": "1-999-999-9999",
  "online": "www.wwp.org",
  "type": "Veterans Services",
  "federal": false
},
{
  "title": "Vietnam Veterans Of America",
  "phone": "1-999-999-9999",
  "online": "www.vva.org",
  "type": "Vietnam Veterans",
  "federal": false
},
{
  "title": "Tunnel 2 Towers",
  "phone": "1-999-999-9999",
  "online": "www.tunnel2towers.org",
  "type": "Diabled Veteran Services",
  "federal": false
},
{
  "title": "America Legion",
  "phone": "1-999-999-9999",
  "online": "www.legion.org",
  "type": "Local Veteran Services",
  "federal": false
},
{
  "title": "Sons Of The America Legion",
  "phone": "1-999-999-9999",
  "online": "www.legion.org/sons",
  "type": "Local Veteran Services",
  "federal": false
},
{
  "title": "Veterans Of Foreign Wars",
  "phone": "1-999-999-9999",
  "online": "www.vfw.org",
  "type": "War Veteran Services",
  "federal": false
},
{
  "title": "Healing Heroes Network",
  "phone": "1-999-999-9999",
  "online": "www.healingheroes.org",
  "type": "Disable Veteran Services",
  "federal": false
},
{
  "title": "22KILL Pushup Challenge",
  "phone": "1-999-999-9999",
  "online": "www.22KILLpushup.org",
  "type": "Veteran Awareness",
  "federal": false
},
{
  "title": "Rally Point",
  "phone": "1-999-999-9999",
  "online": "www.RallyPoint.com",
  "type": "Veteran Services",
  "federal": false
},
{
  "title": "Got Your Six",
  "phone": "1-999-999-9999",
  "online": "www.gy6.org",
  "type": "Veteran Services",
  "federal": false
},
]
}

export default addResources

