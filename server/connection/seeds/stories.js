import db from "../database/database.js"

async function addStorySeeds () {

const stories = db.collection('stories')

await stories.drop()

const storyList = [{
  "title": "I Used To Shoot Dogs",
  "subtitle": "No really, not by accident, like, on purpose...",
  "image": "https://lightbox.tlm.cloud/uploads/small/973c7ec4fa6d76ea0643c5d4c9f4c719.jpeg",
  "author": {"$oid": "64ad757ab9387952675642ed"},
  "created": "2023-05-25T14:17:42.802Z",
  "category": "War Stories",
  "likes": [{"$oid": "64ad7784b9387952675642fb"}, {"$oid": "64ad781db938795267564305"}, {"$oid": "64ad7c2ac835715b3fde4a7b"}],
  "likesCount": 3,
  "allowComments": true,
  "comments": [
    {
      "commentUser": {"$oid": "64ad770db9387952675642f6"},
      "commentBody": "Oh man, I remember those dogs! They were viscious animals.",
      "commentDate": "2023-08-25T14:17:42.802Z",
    },
     {
    "commentUser": {"$oid": "64ad77d6b938795267564300"},
    "commentBody": "Try that on a dire wolf.",
    "commentDate": "2023-08-26T14:12:42.802Z",
    },
    {
    "commentUser": {"$oid": "64ad7cd6c835715b3fde4a84"},
    "commentBody": "They used to get caught up in the constantine wire too, couldn't get em out. Not that I tried.",
    "commentDate": "2023-07-26T14:12:42.802Z",
    },
    {
      "commentUser": {"$oid": "64ad757ab9387952675642ed"},
      "commentBody": "Thanks all!",
      "commentDate": "2023-07-26T14:12:42.802Z",
      }
  ],
  "article": "I used to shoot dogs. No really not by accident, like, on purpose. I was in Iraq and the ones over there are wild animals, just like the Taliban. They congregate in the streets lapping up pools of blood. Maybe American blood. I even saw one run by with - what I think was - a half of a foot in his mouth once. I think about that a lot. When I was in training I prepared myself to shoot at people, the enemy, terrorist scum. The targets in basic training were exclusivly shaped like people. Annonymous, army green silhouettes destined to meet there doom by way of my rifle. Sometimes the range control SGT would even walk out there and wrap turbans around their 'heads'. Preparing us mentally I suppose, or more likely, to desensatize us. He said it was so we knew how to aim at the actual head and not get confused by the large cloth knots and miss our taget. Aim center mass first and then, plug em' right where the two strips of cloth meet on the forehead, X marks the spot. There weren't any targets shaped liked dogs though. I wonder if that's what fucked me up. They should get some dog shaped targets I think, you know? Train like you fight right? When I came home I swore I'd always have a dog and take care of them and love them as best I could, compensation I guess. I got Lexi, a Treeing Walker Coonhound and I did just that. When she got cancer and it was time to put her down my wife said she would go with me to the vet. I was outraged. 'You're going to pay some asshole a hundered bucks to kill my dog?' I said. 'That's not how you do it.' She just looked at me with big wet eyes. I came up with a plan to put her down myself, at a spot near the river where the treeline breaks into a field. I used to walk her there sometimes and it's close enough for me to visit, yet far enough away where she could be in peace. I wanted to give her a treat of a cheeseburger (her favorite) before the end so I stopped at a local joint and got a few double bacons on the way to the spot. She was so sick she wouldn't eat it, that broke my heart. When we got there I let her out of the back seat, she stood there a moment and then her hound inticts kicked in. I guess those ones were stronger than the ones to eat, maybe she knew something was up. She went exploring slowly weaving her way in and out of the bushes, coughing and hacking all the time. It was time, I called Lexi over and offered her the burgers one last time, she feebly liked the cheesy patty. She lay down in the hole on her own, I like to think it was because she didn't want me to have to put her in it, but it was likely because the freshly turned soil was soft and cool. I chambered a round in my AR and looked down the sights. I hesitated, only the second time that I have ever done that. I looked at the uneaten cheeseburger and remembered how sick she was. My training took over and I foucused on the sights. Thats what you do see, focus on the sights of your rifle the target should be blurry. Then you shoot twice to the body and once to the head. It has to be fast you undestand? If they have time to recover between, well, that is when there is pain...suffereing...and not just for them. This article was inspired by and includes quotes from Phil Klay."
},
{
  "title": "I Really Hate Brian McKnight",
  "subtitle": "If ever I believe my work is done, I'll start back at one.",
  "image": "https://lightbox.tlm.cloud/uploads/medium/5f0d7bec95e7d1afa7d0df7fa0af4c41.jpeg",
  "author": {"$oid": "64ad757ab9387952675642ed"},
  "created": "2023-04-16T14:17:42.802Z",
  "category": "War Stories",
  "likes": [],
  "likesCount": 0,
  "allowComments": true,
  "comments": [
    {
      "commentUser": {"$oid": "64ad7cd6c835715b3fde4a84"},
      "commentBody": "Strange how time gets twisted in a fight. More strage how our memory gets twisted over time.",
      "commentDate": "2023-04-17T14:17:42.802Z",
    },
     {
    "commentUser": {"$oid": "64ad757ab9387952675642ed"},
    "commentBody": "Yeah it's like passing into a vortex! Minutes, hours, who knows!",
    "commentDate": "2023-04-17T14:12:42.802Z",
    },
    {
    "commentUser": {"$oid": "64ad7c2ac835715b3fde4a7b"},
    "commentBody": "1/17 FAR Diamond Brigade Hooah!",
    "commentDate": "2023-04-30T14:12:42.802Z",
    }
  ],
  "article": "I was on deployment with 1/17 FAR in 2008. The mission was support the 82nd by conducting convoy escorts based out of Camp Adder. My duties were mostly convoy and recovery related. For those of you who don't know combat is a lot of dull exhausting days, followed by brief and sudden moments of sheer terror. To avoid falling asleep we would often trade positions throughout the convoy, driver-gunner-TC it didn't really matter, anything to aviod monotany. We would also play the name game, you know where I name a person and you have to name a different one who's first name start with the first letter of the last name of my person...I know...But it's a thing. Most commonly we would just jam out to music. Back then I still had my old 128GB Ipod, the 'brick' not the nano or the mini. I don't think that the Iphone had even come out yet, if it did, I couldn't afford it on a privates salary. Anyway we were somewhere between Liberty and Anaconda, I was tired because we had departed from Cedar 2 and had only stopped to splash. I was in the gunners hatch trying to keep my mind occupied. My old brick was tucked away in my IBA and playing songs on random. I had spent a lot of time adding music pre deployment and had eveything from 80's metal to Brittney Spears. The song that was currently playing was called 'Back at one' by Brian McKnight. If you haven't heard it, it's a slow R&B love song, think Boys to Men or All 4 One. Anyways BOOM! An IED rocks the KBR truck 200 meters in front of me. Suddnely all hell is breaking loose, small arms fire coming in from my 3 O'clock. I pull the round from behind the butterfly triggers (you know M2 safety), and let my 50 fire off a few rounds into the darkness. I flip my nods but the sudden bright light from the explosion had effected my eyes. I scan the desert as we roll up to the firey scene, my radio is poppin off non-sense that I can barely hear becasue Brian McKnight is still pouring out his soul in my ear buds. My adrenaline mixed with the slow R&B is messing with my brain. Then I see them. Three pickups with hostiles in the rear. AK's are spitting rounds my direction. I let go with Ma Deuce while old Brian lets go of his heart in my ears. More gun trucks roll up and the 50's tear the trucks apart. The terror of the situation made it seem like an hour, but the whole thing was only a few minutes. I know that because Brian was still singing by the time I slid the safety round back in. One KBR driver, and six haji lost their lives while that song played. Now, I really hate Brian McKnight."
}]

await stories.insertMany(storyList)

}

export default addStorySeeds