

const stories = document.querySelector('#stories');

const userStory = [
    {
        username: 'andrew_5',
        profile: 'https://images.unsplash.com/photo-1693649583052-3f4278925776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        story: 'https://images.unsplash.com/photo-1693649977898-19984f0d231f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
        username: 'lisa_8',
        profile: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        story: 'https://images.unsplash.com/photo-1524504542391-127872011665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: '_james1',
        profile: 'https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        story: 'https://images.unsplash.com/photo-1687275165335-42f2d1700e32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: 'priya.7889',
        profile: 'https://images.unsplash.com/photo-1670510481169-14d509c0791d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        story: 'https://images.unsplash.com/photo-1670431406184-2078a2a5c179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
    },
    {
        username: '_devil_5',
        profile: 'https://images.unsplash.com/photo-1671385608343-f7a972da4dd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        story: 'https://images.unsplash.com/photo-1671990088385-136768d0772e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
    },
    {
        username: 'sasiya_21',
        profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        story: 'https://images.unsplash.com/photo-1693668695346-28aa0fe84b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: '_brave_00',
        profile: 'https://images.unsplash.com/photo-1583391733981-8b530b760347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
        story: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: 'john_mark',
        profile: 'https://images.unsplash.com/photo-1584940120743-8981ca35b012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        story: 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: 'stephen_23',
        profile: 'https://images.unsplash.com/photo-1482849737880-498de71dda8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80',
        story: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: 'herry_89',
        profile: 'WhatsApp Image 2023-09-07 at 10.05.18 PM.jpeg',
        story: ''
    }

];


storyCluster = '';
userStory.forEach((user, id) => {
    storyCluster += `<div class="story" >
                         <img id='${id}' src="${user.profile}"
                        alt="">
                    </div>`
});

stories.innerHTML = storyCluster;


// story seen feature

const viewStory = document.querySelector('.view-story');
const story = document.querySelector('.story');


stories.addEventListener('click', (e) => {
    viewStory.style.display = 'block';
    viewStory.innerHTML = `<img class="storyseen" src="${userStory[e.target.id].story}" alt="">`;
    e.target.parentNode.style.border = '2px solid grey';


    setInterval(() => {
        viewStory.style.display = 'none';
    }, 5000);
});






// posts

const posts = document.querySelector('.posts');


const userPosts = [
    {
        username: 'andrew_5',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1693649977898-19984f0d231f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
        username: 'lisa_8',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1524504542391-127872011665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: '_james1',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1687275165335-42f2d1700e32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: 'priya.7889',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1670431406184-2078a2a5c179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
    },
    {
        username: '_devil_5',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1671990088385-136768d0772e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
    },
    {
        username: 'sasiya_21',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
        username: '_brave_00',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: 'john_mark',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        username: 'stephen_23',
        profile: 'https://images.unsplash.com/photo-1693735652425-e775076113c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        postUrl: 'https://images.unsplash.com/photo-1482849737880-498de71dda8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80'
    },
    {
        username: 'herry_89',
        profile: '',
        postUrl: 'WhatsApp Image 2023-09-07 at 10.05.18 PM.jpeg'
    },
];
let postCluster = '';
userPosts.forEach((user, id) => {
    postCluster += `
    <div class="post" id="${id}">
    
        <div class="user-details">
            <div class="dp-and-username">
                <img src="${user.profile}" alt="">
                <p>${user.username}</p>
            </div>
            <div class="threedot">
                <i class="ri-more-2-fill"></i>
            </div>
        </div>


         <div class="user-post">
            <img id="posted-" src="${user.postUrl}" alt="">
            <i class="ri-heart-3-fill fade"></i>
        </div>


        <div class="features">
            <div class="LKC">
                <i class="ri-heart-3-line like" id="like"></i>
                <i class="ri-chat-1-line comment" id="comment"></i>
                <i class="ri-send-plane-line share" id="share"></i>
            </div>
            <div class="save">
                <i class="ri-bookmark-line bookmark" id="bkmark"></i>
            </div>
         </div>

    </div>`
});
posts.innerHTML = postCluster;




// Liking Feature

const LKC = document.querySelectorAll('.LKC');

const like = document.querySelectorAll('.like');
let likeFlag = 0;
LKC.forEach((e)=>{
    e.childNodes[1].addEventListener('click', () => {
        if(likeFlag == 0){
            e.childNodes[1].style.color = 'red';
            likeFlag = 1;
        }
        else if(likeFlag == 1){
            e.childNodes[1].style.color = '';
            likeFlag = 0;
        }
    })
})




// BookMark Feature

const bkMarks = document.querySelectorAll('.bookmark');
let bkmarkFlag = 0;

bkMarks.forEach((bkMark)=>{
    bkMark.addEventListener('click', () => {

        if(bkmarkFlag == 0){
            bkMark.classList.add('ri-bookmark-fill');
            bkMark.classList.remove('ri-bookmark-line');
            bkmarkFlag = 1;
        }
        else if(bkmarkFlag == 1){
            bkMark.classList.add('ri-bookmark-line');
            bkMark.classList.remove('ri-bookmark-fill');
            bkmarkFlag = 0;
        }

    })
})



// pop-heart feature

const userPost = document.querySelectorAll('.user-post');
userPost.forEach((post)=>{

    post.childNodes[1].addEventListener('dblclick', ()=>{

        post.childNodes[3].style.transform = 'translate(-50%, -50%) scale(1)';
        post.parentElement.childNodes[5].childNodes[1].childNodes[1].style.color = 'red';

        setTimeout(()=>{
            post.childNodes[3].style.transform = 'translate(-50%, -50%) scale(0)';
        }, 800)
    })
})



















// const like = document.querySelectorAll('.like');
// const bkmark = document.querySelectorAll('#bkmark');
// // console.log(bkmark.classList)

// likeFlag = 0;
// bkmarkFlag = 0;
// posts.addEventListener('click', (e)=>{
//     // console.log(e);
//     if(e.target == like){
//         if(likeFlag == 0){
//             e.target.style.color = 'red';
//             likeFlag = 1;
//         }
//         else if(likeFlag == 1){
//             e.target.style.color = '';
//             likeFlag = 0;
//         }
//     }
//     else if(e.target == bkmark){
//         if(bkmarkFlag == 0){
//             e.target.classList.add('ri-bookmark-fill');
//             e.target.classList.remove('ri-bookmark-line');
//             bkmarkFlag = 1;
//         }
//         else if(bkmarkFlag == 1){
//             e.target.classlist.remove('ri-bookmark-fill');
//             e.target.classlist.add('ri-bookmark-line' );
//             bkmarkFlag = 0;
//         }

//     }

// })




// features 
// let love = document.querySelectorAll('.fade');
// let like = document.querySelectorAll('like');
// let bkMark = document.querySelectorAll('#bkmark');


// let likeFlag = 0;
// like.addEventListener('click', () => {

//     if (likeFlag == 0) {
//         like.style.color = 'red';
//         likeFlag = 1;
//     }
//     else if (likeFlag == 1) {
//         like.style.color = '';
//         likeFlag = 0;
//     }
// });


// let bkFlag = 0;
// bkMark.addEventListener('click', () => {
//     if (bkFlag == 0) {
//         bkMark.classList.add('ri-bookmark-fill');
//         bkMark.classList.remove('ri-bookmark-line');
//         bkFlag = 1;
//     }
//     else if (bkFlag == 1) {
//         bkMark.classList.add('ri-bookmark-line');
//         bkMark.classList.remove('ri-bookmark-fill');
//         bkFlag = 0;
//     }
// });











