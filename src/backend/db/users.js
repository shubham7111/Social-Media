import { v4 as uuid } from "uuid";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 2,
    firstname: "Adarsh",
    lastname: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Frontend Developer 💻✨Turning ideas into beautiful and interactive websites✨🚀",
    createdAt: formatDate(),
    website: "",
    updatedAt: formatDate(),
    following: [
      {
        _id: 3,
        firstname: "Shweta",
        lastname: "Jha",
        username: "shwetaj",
        password: "shweta@123",
        bio: "Learning React💻✨ by building projects",
        bookmarks: [],
        website: "https://github.com/Shwetaaaa2899",

        createdAt: "2022-01-01T10:55:06+05:30",
        updatedAt: formatDate(),
        avatarUrl:
          "https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-6-1024x1024.jpg",
      },
      {
        _id: 4,
        firstname: "Alice",
        lastname: "Jones",
        username: "alicejohnson",
        password: "alice123",
        bio: "Software Developer 👩‍💻💡.Passionate about technology and creating innovative software 🌟🚀",
        bookmarks: [],
        avatarUrl:
          "https://res.cloudinary.com/dptfwcnro/image/upload/v1685596157/SocialBuzz/images_vrd6b5.jpg",
        website: "https://alicejohnson.com/",
        createdAt: "2022-05-15T08:30:00+05:30",
        updatedAt: formatDate(),
      },
    ],

    avatarUrl:
      "https://i.pinimg.com/originals/22/04/a8/2204a80672494b512d779aa3fe119744.jpg",
  },
  {
    _id: 3,
    firstname: "Shweta",
    lastname: "Jha",
    username: "shwetaj",
    password: "shweta@123",
    bio: "Learning React💻✨ by building projects",
    bookmarks: [],
    website: "https://github.com/Shwetaaaa2899",

    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
    followers: [
      {
        _id: 2,
        firstname: "Adarsh",
        lastname: "Balika",
        username: "adarshbalika",
        password: "adarshBalika123",
        bio: "Frontend Developer 💻✨Turning ideas into beautiful and interactive websites✨🚀",
        createdAt: formatDate(),
        website: "",
        updatedAt: formatDate(),
        avatarUrl:
          "https://i.pinimg.com/originals/22/04/a8/2204a80672494b512d779aa3fe119744.jpg",
      },
    ],
    avatarUrl:
      "https://1fid.com/wp-content/uploads/2022/06/cartoon-profile-picture-6-1024x1024.jpg",
  },

  {
    _id: 4,
    firstname: "Alice",
    lastname: "Jones",
    username: "alicejohnson",
    password: "alice123",
    bio: "Software Developer 👩‍💻💡.Passionate about technology and creating innovative software 🌟🚀",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685596157/SocialBuzz/images_vrd6b5.jpg",
    website: "https://alicejohnson.com/",
    createdAt: "2022-05-15T08:30:00+05:30",
    updatedAt: formatDate(),
    followers: [
      {
        _id: 2,
        firstname: "Adarsh",
        lastname: "Balika",
        username: "adarshbalika",
        password: "adarshBalika123",
        bio: "Frontend Developer 💻✨Turning ideas into beautiful and interactive websites✨🚀",
        createdAt: formatDate(),
        website: "",
        updatedAt: formatDate(),
        avatarUrl:
          "https://i.pinimg.com/originals/22/04/a8/2204a80672494b512d779aa3fe119744.jpg",
      },
    ],
  },
  {
    _id: 5,
    firstname: "Bob",
    lastname: "Smith",
    username: "bobsmith",
    password: "bob123",
    bio: "Web Designer 🎨🌈.Creating digital masterpieces with colors and imagination🎨✨",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595771/SocialBuzz/247-2479526_round-profile-picture-png-transparent-png_ukpjxm.png",
    website: "https://bobsmith.com/",
    createdAt: "2022-06-20T14:45:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 6,
    firstname: "Emma",
    lastname: "Davis",
    username: "emmadavis",
    password: "emma123",
    bio: "Photographer 📷✨Capturing moments that tell stories.Exploring the world through a lens. Join me on this visual journey! 🌍✨",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595740/SocialBuzz/images_zrbwa3.jpg",
    website: "https://emmadavis.com/",
    createdAt: "2022-04-10T12:15:00+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: 8,
    firstname: "Lily",
    lastname: "Anderson",
    username: "lilyanderson",
    password: "lily123",
    bio: "Graphic Designer 🎨✏️\nFrom pixels to perfection! ✨🌟",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595837/SocialBuzz/images_b9qohl.jpg",
    website: "https://lilyanderson.com/",
    createdAt: "2022-03-01T09:00:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: 8,
    firstname: "Shubham",
    lastname: "Karmokar",
    username: "shubhamkarmokar",
    password: "sk123",
    bio: "Software Engineer 😵‍💫",
    bookmarks: [],
    avatarUrl:
      "https://robohash.org/d2d682bd05529b78def59bfa29f9562c?set=set4&bgset=&size=400x400",
    website: "https://www.linkedin.com/in/shubham-karmokar-42baa8122/",
    createdAt: "2022-03-01T09:00:00+05:30",
    updatedAt: formatDate(),
  },
  // {
  //   _id: 9,
  //   firstname: "Oliver",
  //   lastname: "Taylor",
  //   username: "olivertaylor",
  //   password: "oliver123",
  //   bio: "Travel Blogger ✈️🌍\nExploring the world, one adventure at a time 🗺️✨",
  //   bookmarks: [],
  //   avatarUrl:
  //     "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595881/SocialBuzz/images_tidrd1.jpg",
  //   website: "https://olivertaylor.com/",
  //   createdAt: "2022-08-10T13:55:00+05:30",
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: 10,
  //   firstname: "Sophie",
  //   lastname: "Clark",
  //   username: "sophieclark",
  //   password: "sophie123",
  //   bio: "Fitness Enthusiast 💪🏋️‍♀️🌱\nEmpowering and inspiring others to lead a healthy and balanced lifestyle💚✨",
  //   bookmarks: [],
  //   avatarUrl:
  //     "https://res.cloudinary.com/dptfwcnro/image/upload/v1685595920/SocialBuzz/images_qynsis.jpg",
  //   website: "https://sophieclark.com/",
  //   createdAt: "2022-09-25T10:10:00+05:30",
  //   updatedAt: formatDate(),
  // },
];