

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

// get the values from the form 

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const userName = tweetForm.elements.name;
    const userTweet = tweetForm.elements.tweet;

    postTweet(userName.value, userTweet.value);

    console.log(userName.value);
    console.log(userTweet.value);

    userName.value = ''
    userTweet.value = ''



})

const postTweet = (name, tweet) => {

    // create a new element 

    const newLi = document.createElement("li");
    newLi.textContent = name + " - " + tweet;
    tweetsContainer.append(newLi);

}

// Event Delegate 

// const allLis  = document.querySelectorAll('li')

// for(let lis of allLis){
//     lis.addEventListener ('click', function(){
//         lis.remove();
//     })
// }

tweetsContainer.addEventListener('click', function (e) {

    console.log(e.target.nodeName)
    e.target.nodeName === 'LI' && e.target.remove();

})

