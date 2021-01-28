let preloader = document.querySelector('.preloader');
 
const time = new Promise((resolve, reject) =>{
    setTimeout(()=>resolve(new Date), 3000)
  });
  
const fetchUser = user => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(user) , 1000)
    })
  };
  
const fetchUrl = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(url) , 1000)
    })
  };
  
time
  .then(() => preloader.classList.add('hidden'))

time
  .then(date => console.log(date))
  .then(() => Promise.all([fetchUser('defunkt'), fetchUrl('https://api.github.com/users/')])
  .then(([user, url]) => fetch(`${url}${user}`))
  .then((resp) => resp.json()) 
  .then((resp2) => console.log(resp2.bio)))
  .catch((error) => console.error("Error: " + error ));