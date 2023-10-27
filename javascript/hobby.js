//to make the save function for the images.

//get all the save for later buttons
const saveBtns = document.querySelectorAll(".saveImg");

//retrieve the savedImages array from the local storage and parse it from a string to an array. 
//if there are no saved images, initialize an empty array.
let savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];

function saveimages(event){
    //checks if the number of saved images is already 5 or more.
    if(savedImages.length >= 5){
        //displays an alert message stating that only up to 5 items can be saved and returns from the function.
        alert("You can only save up to 5 items");
        return;
    }

    const imageLink = event.target.previousElementSibling.src;
    //checks if the image link is already present in the savedImages array.
    if(!savedImages.includes(imageLink)){
        //if not, it adds the image link to the array, updates the local storage with the updated array, 
        //and displays an alert message indicating the current number of saved images.
        savedImages.push(imageLink);
        localStorage.setItem('savedImages', JSON.stringify(savedImages));
        alert(`You have ${savedImages.length} in your "save for later" folder`);
        //if the image link is already present in the array, it displays an alert message stating that the item is already saved.
    }else{
        alert(`This item is already in your 'Save for Later' folder.`);
    }
}

//when a save button is clicked, it calls the saveimages function.
saveBtns.forEach(button => {
    button.addEventListener('click', saveimages);
});


//to display comments in the website:
let commentsHolder = [];

const displayComments = document.getElementById("displayComments");
//get the textarea element for the comment
const commentInput = document.getElementById("commentInput");
const commentForm = document.getElementById("comment-form");

commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
  //trim all the white spaces
    const comment = commentInput.value.trim();

    //if the input is empty alert the user
    //otherwise add the input to the array
    if (comment === "") {
      alert("Please leave your comment below");
    } else {
      commentsHolder.push(comment);
      localStorage.setItem("comments", JSON.stringify(commentsHolder));
      //alert the user the comment was added.
      alert("Comment stored successfully!");
    }
  //reset the text area element
    commentInput.value = "";
    showComments();
  });

//to display the comments
function showComments(){
    //the comments do not duplicate
    displayComments.innerHTML = "";

    //loop through the commentsHolder array
    commentsHolder.forEach(function (comment) {
        //create a list element
        const listItem = document.createElement("li");
        //give the list element a className
        listItem.className = "comments";
        //display the the displaycomment
        listItem.textContent = comment;
        //add the list the element to the UL comment
        displayComments.appendChild(listItem);
      });
};

//get the likes html elements
const likeButton1 = document.getElementById("likeButton1");
const likeButton2 = document.getElementById("likeButton2");
const likeButton3 = document.getElementById("likeButton3");
const likeButton4 = document.getElementById("likeButton4");
const likeButton5 = document.getElementById("likeButton5");
const likeButton6 = document.getElementById("likeButton6");

const likeCount1 = document.getElementById("likeCount1");
const likeCount2 = document.getElementById("likeCount2");
const likeCount3 = document.getElementById("likeCount3");
const likeCount4 = document.getElementById("likeCount4");
const likeCount5 = document.getElementById("likeCount5");
const likeCount6 = document.getElementById("likeCount6");

//1
//initialize the count variable to 0
let count1 = 0;
//add a click event listener to the like button
likeButton1.addEventListener("click", () => {
    //increment the count variable by 1
    count1++;
    //update the like count element with the new value
    likeCount1.textContent = count1;
    //store the updated count in the local storage
    localStorage.setItem("likes1", count1.toString());
});

//check if there are any previously stored likes in the local storage
if(localStorage.getItem("likes1")){
    //if there are, parse the value and assign it to the count variable
    count1 = parseInt(localStorage.getItem("likes1"));
    //update the like count element with the stored value
    likeCount1.textContent = count1;
}

//2
let count2 = 0;
//add a click event listener to the like button
likeButton2.addEventListener("click", () => {
    //increment the count variable by 1
    count2++;
    //update the like count element with the new value
    likeCount2.textContent = count2;
    //store the updated count in the local storage
    localStorage.setItem("likes2", count2.toString());
});

if(localStorage.getItem("likes2")){
    //if there are, parse the value and assign it to the count variable
    count2 = parseInt(localStorage.getItem("likes2"));
    //update the like count element with the stored value
    likeCount2.textContent = count2;
}
let count3 = 0;
//add a click event listener to the like button
likeButton3.addEventListener("click", () => {
    //increment the count variable by 1
    count3++;
    //update the like count element with the new value
    likeCount3.textContent = count3;
    //store the updated count in the local storage
    localStorage.setItem("likes3", count3.toString());
});

if(localStorage.getItem("likes3")){
    //if there are, parse the value and assign it to the count variable
    count3 = parseInt(localStorage.getItem("likes3"));
    //update the like count element with the stored value
    likeCount3.textContent = count3;
}

//4
let count4 = 0;
//add a click event listener to the like button
likeButton4.addEventListener("click", () => {
    //increment the count variable by 1
    count4++;
    //update the like count element with the new value
    likeCount4.textContent = count4;
    //store the updated count in the local storage
    localStorage.setItem("likes4", count4.toString());
});

if(localStorage.getItem("likes4")){
    //if there are, parse the value and assign it to the count variable
    count4 = parseInt(localStorage.getItem("likes4"));
    //update the like count element with the stored value
    likeCount4.textContent = count4;
}

//5
let count5 = 0;
//add a click event listener to the like button
likeButton5.addEventListener("click", () => {
    //increment the count variable by 1
    count5++;
    //update the like count element with the new value
    likeCount5.textContent = count5;
    //store the updated count in the local storage
    localStorage.setItem("likes5", count5.toString());
});

if(localStorage.getItem("likes5")){
    //if there are, parse the value and assign it to the count variable
    count5 = parseInt(localStorage.getItem("likes5"));
    //update the like count element with the stored value
    likeCount5.textContent = count5;
}

//6
let count6 = 0;
//add a click event listener to the like button
likeButton6.addEventListener("click", () => {
    //increment the count variable by 1
    count6++;
    //update the like count element with the new value
    likeCount6.textContent = count6;
    //store the updated count in the local storage
    localStorage.setItem("likes6", count6.toString());
});

if(localStorage.getItem("likes6")){
    //if there are, parse the value and assign it to the count variable
    count6 = parseInt(localStorage.getItem("likes6"));
    //update the like count element with the stored value
    likeCount6.textContent = count6;
}

//contact form:

//get the contact form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //get the html input elements of the contact form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

     //alert the user the inputs are empty
    if(name === "" && email === "" && message === ""){
        alert(`Please leave your comment below`);
    } else {
        //store the contact details
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("message", message);
        //alert the user their contacts have been stored
        alert(`Contact details stored successfully!`);
    }
    //reset the contact form
    contactForm.reset();
});


