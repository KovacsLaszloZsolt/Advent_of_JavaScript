const URL = "sampleData.json";

const getData = fetch(URL)
  .then((res) => res.json())
  .then((data) => data);

getData.then((data) => {
  setFuture(data.items[0]);
  setGallery(data.items);
});

const setFuture = (data) => {
  const iframe = document.querySelector("iframe");
  iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;

  const h1 = document.querySelector("h1");

  h1.innerText = data.snippet.title;

  const description = document.querySelector(".description");
  description.innerText = data.snippet.description;
};

const setGallery = (data) => {
  const gallery = document.querySelector(".gallery");

  data.forEach((videoData) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("video");
    a.innerHTML = `
                <img src=${videoData.snippet.thumbnails.default.url} alt="${videoData.snippet.title}" />
                <h3>${videoData.snippet.title}</h3>`;
    li.appendChild(a);
    gallery.appendChild(li);
    li.addEventListener("click", () => {
      setFuture(videoData);
    });
  });
};

window.addEventListener("click", (e) => {
  console.log(e.target);
});
