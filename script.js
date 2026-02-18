const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world ☕ | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 🖤 | late night thinker",
  },
  {
    name: "arjun malhotra",
    pic: "https://i.pinimg.com/736x/9a/0e/6f/9a0e6f889b3f6bdd87024a4e1f79cd76.jpg",
    bio: "gym. grind. goals 💪 | discipline over motivation",
  },
  {
    name: "tara singh",
    pic: "data:image/jpeg;base64,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",
    bio: "aesthetic soul ✨ | sunsets & soft playlists 🎶",
  },



];

function showUser(arr) {

  arr.forEach((user) => {
    // Create main card div
    const card = document.createElement("div");
    card.className = "card";

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "bg-img";

    // Create blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`
    blurredLayer.className = "blurred-layer";

    // Create content container
    const content = document.createElement("div");
    content.className = "content";

    // Create heading
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = user.bio;

    // Append elements together
    content.appendChild(heading);
    content.appendChild(paragraph);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally append card to body (or any container you want)
    document.querySelector(".cards").appendChild(card);

  });
}

let inp = document.querySelector(".inp");
inp.addEventListener("input", (dets) => {
  let newarr = users.filter((user) => {
    return user.name.startsWith(inp.value)
  });


  let h1 = document.querySelector("h1")
  document.querySelector(".cards").innerHTML = ""
  if (newarr.length === 0) {
    h1.innerText = `${inp.value} not found`
  }
  else {
    h1.innerText = ""
    showUser(newarr)
  }
});




