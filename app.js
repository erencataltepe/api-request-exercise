import axios from "axios";

export default async function getUserInfo(userId) {
  const { data: userInfo } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  const { data: userPosts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  return { userInfo, posts: userPosts };
}

getUserInfo(1).then((data) => {
  console.log(data);
});
