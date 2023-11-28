import db from "../database/database.js";

async function addNewsSeeds() {
  const news = db.collection("news");

  await news.drop();

  const newsList = [
    {
      title: "Got your Six Launches",
      subtitle:
        "Got your Six, a new website aimed at connecting veterans and service members Launches",
      image:
        "https://lightbox.tlm.cloud/uploads/medium/9f1aa859fb260674871615ccd4e659cd.jpeg",
      article:
        "New community bulding site for veterans, service members and their families lauches today. GY6 is dedicated to connecting servicmembers, veterans, and their families to existing services and most importantly each other. Website will focus on building community and bringing awareness to the difficulities involved in transitioning to civilian life. News and Events will be updated daily and a unique stories section will allow users to post stories about war, recovery, and hope. Family members are encouraged to participate and take advantage of the services available. The new websites local section will help connect vetereans to the people and services in their immediate areas for help. 'Veterans have always relied on one another to get by' Ariana Casique one of Got Your Sixes founders said. 'This website will give us a chance to do that again. The website was develeloped by Jason Hoomalu a student in The Last Mile class at Montana State Prison. 'I just wanted to do something to prevent other veterans from ending up in prison like I did.' He said. ",
      comments: [
        {
          commentUser: { $oid: "64ad7784b9387952675642fb" },
          commentBody: "Wow this looks interesting!",
          commentDate: "2023-05-30T14:17:42.802Z",
        },
        {
          commentUser: { $oid: "64ad77d6b938795267564300" },
          commentBody:
            "I have always wondered why there wasn't some type of networking app for vets.",
          commentDate: "2023-05-30T14:12:42.802Z",
        },
      ],
      created: "2023-01-02T14:02:42.802Z",
      likes: [
        { $oid: "64ad770db9387952675642f6" },
        { $oid: "64ad7784b9387952675642fb" },
      ],
      likesCount: 2,
      category: "GY6 News",
    },
    {
      title: "Equestrian Therapy",
      subtitle:
        "85% of participants say this new type of therapy works, find out why.",
      image:
        "https://lightbox.tlm.cloud/uploads/medium/92a85606d00e354e425c6d22189d382e.jpeg",
      article:
        "New community bulding site for veterans, service members and their families lauches today. GY6 is dedicated to connecting servicmembers, veterans, and their families to existing services and most importantly each other.",
      comments: [
        {
          commentUser: { $oid: "64ad7784b9387952675642fb" },
          commentBody: "Wow this looks interesting!",
          commentDate: "2023-05-30T14:17:42.802Z",
        },
        {
          commentUser: { $oid: "64ad77d6b938795267564300" },
          commentBody:
            "I have always wondered why there wasn't some type of networking app for vets.",
          commentDate: "2023-05-30T14:12:42.802Z",
        },
      ],
      created: "2022-09-15T14:02:42.802Z",
      likes: [{ $oid: "64ad7c79c835715b3fde4a80" }],
      likesCount: 1,
      category: "Health News",
    },
    {
      title: "Patriot Parents Stepping Up",
      subtitle:
        "Patriots Parents make a stand for America's children, lining the streets across the country.",
      image:
        "https://lightbox.tlm.cloud/uploads/medium/87cc538395698a97356ffebfd4b9d63e.jpeg",
      article:
        "The streets in major cities looked slightly different this week as veterans and parents lined the streets as kids walked to school. Many wearing clothing that proudly showed they were veterans. Most stood by keeping a watchful eye while others acted as crossguards. The even was oraganized after the recent beating of a fifteen year old on his way to school. We are here for the kids on man stated A child should not have to be afraid to walk down the street in America.",
      comments: [
        {
          commentUser: { $oid: "64ad7784b9387952675642fb" },
          commentBody:
            "This is a great idea, How do I start something like this in my area?",
          commentDate: "2023-05-30T14:17:42.802Z",
        },
        {
          commentUser: { $oid: "64ad781db938795267564305" },
          commentBody:
            "aCasique@gmail.com I have been able to locate many vets area using this website. Try posting making a post, I think you would be surprised at the number of like minded folks near you.",
          commentDate: "2023-05-30T14:12:42.802Z",
        },
        {
          commentUser: { $oid: "64ad770db9387952675642f6" },
          commentBody: "thanks @aquaman.com I will give it a try",
          commentDate: "2023-05-30T14:12:42.802Z",
        },
      ],
      likes: [
        { $oid: "64ad7784b9387952675642fb" },
        { $oid: "64ad781db938795267564305" },
        { $oid: "64ad7c2ac835715b3fde4a7b" },
      ],
      likesCount: 3,
      created: "2022-04-30T14:02:42.802Z",
      category: "Veteran News",
    },
  ];

  await news.insertMany(newsList);
}

export default addNewsSeeds;
