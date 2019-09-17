/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['freddiet803', 'anatulea', 'cesarhj19', 'jalvarez2020'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function CreateCard({name, avatar_url, login, location, html_url, followers, following, bio}) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const givenName = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  givenName.textcontent = name;
  image.src = avatar_url;
  username.textContent = login;
  userLocation.textContent = `Location: ${location}`;
  profile.textContent = 'Profile:'
  link.href = html_url;
  link.textContent = html_url;
  userFollowers.textContent = `Followers ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  userBio.textContent = bio;

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  givenName.classList.add('name');
  username.classList.add('username');

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(givenName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  return card;
}

const cards = document.querySelector('.cards')

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

axios.get('https://api.github.com/users/JesseBentley')
  .then((results) => {
    const dataObj = results.data;
    const createCard = CreateCard(dataObj);
    cards.appendChild(createCard);
  })
  .then(() => {
    return axios.get('https://api.github.com/users/JesseBentley/followers');
  })
  .then((result) => {
      const dataObj = result.data;
      dataObj.forEach((item) => {
        const createCard = CreateCard(item);
        cards.appendChild(createCard);
      });
  });