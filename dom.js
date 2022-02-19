document.getElementById('add-border').addEventListener('click', function(){
   const container =document.getElementById('friend-container');
   container.style.border = '3px solid black';
})

function addBackgroundColor(){
    const friends =document.getElementsByClassName('friend');
for (const friend of friends){
    friend.style.backgroundColor ='lightblue'
}
}
document.getElementById('add-background').addEventListener('click', function(){
    addBackgroundColor();
})


document.getElementById('add-friend').addEventListener('click', function(){
   const container =document.getElementById('friend-container');
   const friendDiv =document.createElement('div');
   friendDiv.classList.add('friend');
   friendDiv.innerHTML =    `
   <h3 class="friend-name">friend-name</h3>
   <p>Aperiam, mollitia?</p>

   `;
   container.appendChild(friendDiv);
})
document.getElementById('name-color').addEventListener('click', function(){
   const container =document.getElementById('friend-container');
   container.style.color = 'aqua';
})