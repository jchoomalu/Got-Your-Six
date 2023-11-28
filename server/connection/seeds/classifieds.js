import db from "../database/database.js";

async function addClassifieds() {
  const classifieds = db.collection("classifieds");

  await classifieds.drop();

  const classifiedsList = [
    {
      state: "Alabama",
      posts: [],
    },
    {
      state: "Alaska",
      posts: [
        {
          date: "2023-08-14T14:02:42.802Z",
          title: "Calling all plant people...",
          description:
            "Do you like growing plants? Alaska leads the nation in preservation of plant species through seed storage. Grow the plants at home, havest the seeds and send em in!",
          image: {},
          cost: "Volunteer",
          city: "Anchorage / Anywhere",
          postedBy: {
            $oid: "64ad7c2ac835715b3fde4a7b",
          },
        },
      ],
    },
    {
      state: "Arizona",
      posts: [],
    },
    {
      state: "Arkansas",
      posts: [],
    },
    {
      state: "California",
      posts: [
        {
          date: "2023-08-11T09:03:42.802Z",
          title: "Logging Survey Manager",
          description:
            "Seeking logging survey manager, outdoor skills required, including map reading, and land nav. Contact me ASAP. Multiple positions available. Must be willing to spend up to two weeks in the field at a time.",
          image: {},
          cost: "$35/hour",
          city: "Eureka",
          postedBy: {
            $oid: "64ad7c79c835715b3fde4a80",
          },
        },
        {
          _id: { $oid: "64e38bbde9dd6a61c06c65b0" },
          title: "Vets Who Code",
          description:
            "Vets Who Code now screening for potential apprentice positions. Must have interest in computers and a drive to learn new things. Program focus will be on web development. Send me a message ASAP if interested.",
          image: {},
          cost: "apprentice",
          city: "San Jose",
          postedBy: { $oid: "64ad757ab9387952675642ed" },
          date: "2023-08-21T16:10:36.773Z",
        },
        {
          _id: { $oid: "64e38cbde92a01c436d5ff0a" },
          title: "Smart TV",
          description:
            "free tv if enlisted member of the 416th or 412th (or even op command I suppose, stop by Officers Quarters #687. First come first serve. ",
          image: {},
          cost: "FREE on Edwards AFB or 50$",
          city: "Edwards AFB",
          postedBy: { $oid: "64ad757ab9387952675642ed" },
          date: "2023-08-21T16:16:04.701Z",
        },
        {
          title: "Workout Partner - FEMALE",
          description:
            "Looking for a female workout buddy. Must be willing to get up early 5 days a week. Must love coffee. Fitness level is unimportant. I have membership at Planet Fitness and can get qualified person a free two month pass, after that you will have to sign up on your own. I think it is 21 bucks a month. Send me a message.",
          image: {},
          cost: "gym membership",
          city: "Escondido",
          postedBy: { $oid: "64ad770db9387952675642f6" },
          _id: { $oid: "64e3927cb53ce8d3898b7416" },
          date: "2023-08-21T16:36:12.104Z",
        },
      ],
    },
    {
      state: "Colorado",
      posts: [],
    },
    {
      state: "Connecticut",
      posts: [],
    },
    {
      state: "Delaware",
      posts: [],
    },
    {
      state: "Florida",
      posts: [],
    },
    {
      state: "Georgia",
      posts: [],
    },
    {
      state: "Hawaii",
      posts: [],
    },
    {
      state: "Idaho",
      posts: [],
    },
    {
      state: "Illinois",
      posts: [],
    },
    {
      state: "Indiana",
      posts: [],
    },
    {
      state: "Iowa",
      posts: [],
    },
    {
      state: "Kansas",
      posts: [],
    },
    {
      state: "Kentucky",
      posts: [],
    },
    {
      state: "Louisiana",
      posts: [],
    },
    {
      state: "Maine",
      posts: [],
    },
    {
      state: "Maryland",
      posts: [],
    },
    {
      state: "Massachusetts",
      posts: [],
    },
    {
      state: "Michigan",
      posts: [],
    },
    {
      state: "Minnesota",
      posts: [],
    },
    {
      state: "Mississippi",
      posts: [],
    },
    {
      state: "Missouri",
      posts: [],
    },
    {
      state: "Montana",
      posts: [
        {
          _id: { $oid: "64dd26b9e5f3217e4c1c5de2" },
          title: "Dishwasher - come and get it!",
          description:
            "free dishwasher, you haul it out. Works okay just older and doesn't fit my taste. ",
          image: {},
          cost: "Free",
          city: "Billings",
          postedBy: { $oid: "64ad770db9387952675642f6" },
          date: "2023-08-16T19:49:59.985Z",
        },
        {
          _id: { $oid: "64e38e3c94ad5758e62354da" },
          title: "Moral Injury Group",
          description:
            "Wednesday from 8PM - 9PM at the Vet Center on 9th and Main. All veterans and spouses welcome. Free onsite child care every other week. Just show up or message me for details",
          image: {},
          cost: "Free",
          city: "Great Falls",
          postedBy: { $oid: "64ad7c79c835715b3fde4a80" },
          date: "2023-08-21T16:30:21.864Z",
        },
      ],
    },
    {
      state: "Nebraska",
      posts: [],
    },
    {
      state: "Nevada",
      posts: [],
    },
    {
      state: "New Hampshire",
      posts: [],
    },
    {
      state: "New Jersey",
      posts: [],
    },
    {
      state: "New Mexico",
      posts: [],
    },
    {
      state: "New York",
      posts: [],
    },
    {
      state: "North Carolina",
      posts: [],
    },
    {
      state: "North Dakota",
      posts: [],
    },
    {
      state: "Ohio",
      posts: [],
    },
    {
      state: "Oklahoma",
      posts: [],
    },
    {
      state: "Oregon",
      posts: [],
    },
    {
      state: "Pennsylvania",
      posts: [],
    },
    {
      state: "Rhode Island",
      posts: [],
    },
    {
      state: "South Carolina",
      posts: [],
    },
    {
      state: "South Dakota",
      posts: [],
    },
    {
      state: "Tennessee",
      posts: [],
    },
    {
      state: "Texas",
      posts: [],
    },
    {
      state: "Utah",
      posts: [],
    },
    {
      state: "Vermont",
      posts: [],
    },
    {
      state: "Virginia",
      posts: [],
    },
    {
      state: "Washington",
      posts: [],
    },
    {
      state: "West Virginia",
      posts: [],
    },
    {
      state: "Wisconsin",
      posts: [],
    },
    {
      state: "Wyoming",
      posts: [],
    },
  ];

  await classifieds.insertMany(classifiedsList);
}

export default addClassifieds;
