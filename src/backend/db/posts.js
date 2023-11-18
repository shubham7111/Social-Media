import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  
  {
    _id: "c47f5d9e-1f67-4c9a-a2ab-132a7c92c554",
    content:
      "Just finished working on a new frontend project. Excited to launch🚀 it soon!",
    mediaURL:
    "https://th.bing.com/th/id/OIP.m4bRYb_oIIaqailfr3L6ygHaEK?pid=ImgDet&rs=1",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fa8d92a3-23bb-4cda-af50-8f15430806e9",
        username: "bobsmith",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
        text: "Great work!🚀 Can't wait to see the final product.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "alicejohnson",
    createdAt: new Date("07/04/2021"),
    updatedAt: formatDate(),
  },

  {
    _id: "4ff5dcfa-1a45-45bc-9d9a-3286c10dc8e3",
    content:
      "Life is a beautiful journey filled with ups and downs,  twists and turns, and countless moments that shape who we are. It's a canvas upon which we paint our dreams, hopes, and aspirations."
   , mediaURL: "https://th.bing.com/th/id/OIP.a-IUaPoVss9_LHTk5y4xEwHaEO?pid=ImgDet&rs=1",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "d4c40a4d-7800-4ad4-8d1e-8f1375e9ad43",
        username: "sophieclark",
        avatarUrl:
        "https://impulse.aarafacademy.com/uploads/samples/g1.jpg",
         text:
          "Such profound and inspiring words! Thank you for this beautiful thread!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      }
    ],
    username: "shwetaj",
    createdAt: new Date("12/05/2021"),
    updatedAt: formatDate(),
  },
  {
    _id: "97e6b4d7-2a94-4a7d-bff0-458d846c833e",
    content: "Spread kindness like confetti! 🎉✨",
    mediaURL:
      "https://www.summitkids.com/wp-content/uploads/2018/03/raising-kind-generous-respectful-kids-five-tips.jpg",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "a2517e3e-4b6e-4b4b-9d4d-1e0b159a465e",
        username: "bobsmith",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
        text:
          "Absolutely! Small acts of kindness can make a big difference✨ in someone's day. Let's make the world a better place!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "c37e0491-df4e-4cfd-9b50-8c0e69c012c5",
        username: "jameswilson",
        avatarUrl:
          "https://impulse.aarafacademy.com/uploads/samples/g1.jpg",
           text:
          "Kindness is contagious!✨ Let's create a ripple effect of positivity and compassion.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "shwetaj",
    createdAt: new Date("08/03/2022"),
    updatedAt: formatDate(),
  },
  {
    _id: "a7e9dd2d-48a4-4f6c-86de-6fc02a67c8a5",
    content:
      "Exploring new web design trends. Can't wait to implement them in my next project! 😃🚀",
    mediaURL: "https://th.bing.com/th/id/OIP.4ttSBLTYgKLLfcDvM5wbuAHaE8?pid=ImgDet&rs=1",
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: [],
    },
  
    comments: [
      {
        _id: "625f0ab2-ec68-4c68-8a75-82e67431d112",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        website: "https://emmadavis.com/",
        text:
          "I love experimenting with design too. Let's exchange ideas sometime! 💡💭",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "bobsmith",
    createdAt: new Date("06/05/2021"),
    updatedAt: formatDate(),
  },
  {
    _id: "e4580e2b-52a5-462f-971f-38001a1cbed4",
    content:
      "Captured some breathtaking landscapes today. Photography is my passion! 📸🌄",
    mediaURL:
      "https://th.bing.com/th/id/OIP.KyUwTl28keq1d-pbjsd_PQHaEo?pid=ImgDet&rs=1",
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "bc062695-9e82-4d7f-86b4-ee84de68322c",
        username: "jameswilson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595800/SocialBuzz/images_wxjv0c.jpg",
        website: "https://jameswilson.com/",
        text: "Amazing shot! The colors are so vibrant. 🌈👏",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "emmadavis",
    createdAt: new Date("07/06/2022"),
    updatedAt: formatDate(),
  },
  //following -> [{user1},{user2}]
    //const followedUserPost(array) = post.filter((item) => currentUser.following.some({username}) => username === item.username )
  {
    _id: "d7c8e1b5-8f91-4d10-a68e-1683c8755cc3",
    content: "Adventures await! 🌄✨",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685937473/SocialBuzz/istockphoto-1133850671-170667a_g9e3kl.webp",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
///post.likes.likedby.find(({id})=> userInfo._id ) --> "red" --> liek ka logic
    comments: [
      {
        _id: "e685c9e9-30e7-4d41-91c1-48f6e12d9f85",
        username: "jameswilson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595800/SocialBuzz/images_wxjv0c.jpg",
        text: "This photo makes me want to pack my bags and go exploring✨!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
            username: "chhakulizingare",
    createdAt: new Date("10/02/2021"),
    updatedAt: formatDate(),
      },
      {
        _id: "f34059b3-11d5-4a1d-936f-9e23dabf67f0",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        text: "Where is this place? It looks incredible🌈👏!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "shwetaj",
    createdAt: new Date("10/02/2021"),
    updatedAt: formatDate(),
  },
  {
    _id: "87c2c12d-61d5-438d-a10e-58f6a15af792",
    content:
      "Working on a new music composition. Can't wait to share it with you all!",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685682994/SocialBuzz/istockphoto-1452556411-170667a_azhaoa.webp",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
      avatarUrl:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685515809/SocialBuzz/photo_pd6e7o.jpg",
    },
    comments: [
      {
        _id: "3a9c01f2-c142-4a70-87f3-8bca0d7e48fe",
        username: "chhakulizingare",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685515809/SocialBuzz/photo_pd6e7o.jpg",
        text: "I'm a big fan of your music! Looking forward to it. 🎶👏",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "jameswilson",
    createdAt: new Date("03/15/2021"),
    updatedAt: formatDate(),
  },

  {
    _id: "e3b02e95-5180-4c83-b450-0f8f8c9e3884",
    content:
      "Designing a new logo for a client. Loving the creative process! 💡✍️",
    mediaURL: "",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "59da5de9-0e68-4cc1-b9de-70e94784e1d7",
        username: "sophieclark",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595920/SocialBuzz/images_qynsis.jpg",
        website: "https://sophieclark.com/",
        text:
          "Your designs are always top-notch! Can't wait to see the final result. 👌🎨",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "lilyanderson",
    createdAt: new Date("07/25/2022"),
    updatedAt: formatDate(),
  },
 

  {
    _id: "1df2124f-1187-4963-8044-aaab4d8c5d17",
    content:
      "Just completed a challenging fitness routine. Feeling accomplished! 💪🔥",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683210/SocialBuzz/photo-1522898467493-49726bf28798_z48fvm.avif",
    likes: {
      likeCount: 30,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "1e141d4e-02a1-44f6-9ab9-d2bb63b523f1",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        website: "https://emmadavis.com/",
        text: "You're such an inspiration! Keep up the great work. 👏💯",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sophieclark",
    createdAt: new Date("2/22/2022"),
    updatedAt: formatDate(),
  },

  {
    _id: "d4e5f6g7-5i6j-7k8l-9m0n-1o2p3q4r5s6",
    content: "Just completed a challenging workout. Feeling energized! 💪💥",
    mediaURL: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/07/BestTimeToWorkout.jpeg.jpg",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "e5f6g7h8-6j7k-8l9m-0n1o-2p3q4r5s6t7",
        username: "lilyanderson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595837/SocialBuzz/images_b9qohl.jpg",
        website: "https://lilyanderson.com/",
        text: "Great job! Working out is so important for our well-being. 👍",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "f6g7h8i9-8l9m-0n1o-2p3q-4r5s6t7u8v9",
        username: "emmadavis",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
        website: "https://emmadavis.com/",
        text:
          "I need some motivation to get back into a fitness routine. Any tips? 🏋️‍♀️💪",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "sophieclark",
    createdAt: new Date("09/02/2021"),
    updatedAt: formatDate(),
  },
  {
    _id: "g7h8i9j0-9k0l-1m2n-3o4p-5q6r7s8t9u0",
    content: "Just cooked a delicious homemade meal. Food is love! 🍳🥗",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683277/SocialBuzz/photo-1579619168313-d2e074a7ee02_tdz0ft.avif",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "lilyanderson",
    createdAt: new Date("07/28/2021"),
    updatedAt: formatDate(),
  },
  {
    _id: "h8i9j0k1-0l1m-2n3o-4p5q-6r7s8t9u0v1",
    content:
      "Exploring a new city today. So many hidden gems to discover! ✈️🗺️",
    mediaURL: "",
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "i9j0k1l2-1m2n-3o4p-5q6r-7s8t9u0v1w2",
        username: "alicejohnson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685596157/SocialBuzz/images_vrd6b5.jpg",
        website: "https://alicejohnson.com/",
        text:
          "I love exploring new places! Any recommendations for must-visit spots? 🌇",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      }
     
    ],
    username: "olivertaylor",
    createdAt: new Date("07/05/2021"),
    updatedAt: formatDate(),
  },
  {
    _id: "k1l2m3n4-3o4p-5q6r-7s8t-9u0v1w2x3y4",
    content:
      "Just attended an inspiring conference. Learned so much from the speakers! 🎓📚",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683340/SocialBuzz/istockphoto-823840662-170667a_zho9lt.webp",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "l2m3n4o5-4p5q-6r7s-8t9u-0v1w2x3y4z5",
        username: "bobsmith",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
        text:
          "Conferences are a great way to gain new insights. Which conference was it? 🎙️",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "m3n4o5p6-5q6r-7s8t-9u0v-1w2x3y4z5a6",
        username: "jameswilson",
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595800/SocialBuzz/images_wxjv0c.jpg",
        website: "https://jameswilson.com/",
        text:
          "I'm always on the lookout for professional development opportunities. Any recommendations? 📊👨‍💼",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "emmadavis",
    createdAt: new Date("07/02/2023"),
    updatedAt: formatDate(),
  },
  {
    _id: "n4o5p6q7-6r7s-8t9u-0v1w-2x3y4z5a6b7",
    content: "Just adopted a new pet. Meet my adorable furry friend! 🐾🐱",
    mediaURL:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685683392/SocialBuzz/istockphoto-1276788283-170667a_kyajsw.webp",
    likes: {
      likeCount: 34,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "lilyanderson",
    createdAt: new Date("06/15/2023"),
    updatedAt: formatDate(),
  },
];