const content = [
  {
    image: "dave-hoefler-okUIdo6NxGo-unsplash.jpg",
    caption: "Photo by Dave Hoefler on Unsplash",
  },
  {
    image: "sherman-yang-VBBGigIuaDY-unsplash.jpg",
    caption: "Photo by Sherman Yang n Unsplash",
  },
  {
    image: "jakob-owens-EwRM05V0VSI-unsplash.jpg",
    caption: "Photo by Jakob Owens on Unsplash",
  },
  {
    image: "finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",
    caption: "Photo by Dan Grinwis on Unsplash",
  },
  {
    image: "vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
    caption: "Photo by Vincentiu Solomon on Unsplash",
  },
  {
    image: "silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
    caption: "Photo by Silas Baisch on Unsplash",
  },
  {
    image: "eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
    caption: "Photo by Eugene Golovesov on Unsplash",
  },
  {
    image: "jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",
    caption: "Photo by Jennifer reynolds on Unsplash",
  },
  {
    image: "kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
    caption: "Photo by Kellen Riggin on Unsplash",
  },
  {
    image: "rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
    caption: "Photo by Rafael Hoyos on Unsplash",
  },
  {
    image: "sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
    caption: "Photo by Sonya Romanovska on Unsplash",
  },
];

class ImageCarousel {
  constructor(data) {
    this.data = data;
    this.selectedImgIndex = 0;
  }

  init() {
    this.setFeature(this.selectedImgIndex);
    this.setThumbnails();

    const thumbnails = document.querySelector(".thumbnails-ctn");
    const leftArrow = document.querySelector(".left");
    leftArrow.children[0].addEventListener("click", () => {
      if (this.selectedImgIndex > 0) {
        this.selectedImgIndex--;
      }

      console.log(leftArrow.offsetWidth);
      this.setFeature(this.selectedImgIndex);
      this.setActiveThumbnail(this.selectedImgIndex);
      if (
        this.selectedImgIndex <
        this.data.length -
          (window.innerWidth - leftArrow.offsetWidth - rightArrow.offsetWidth) /
            thumbnails.children[0].offsetWidth /
            2
      ) {
        this.setThumbnailsScroll("right");
      }
    });
    const rightArrow = document.querySelector(".right");
    rightArrow.children[0].addEventListener("click", () => {
      if (this.selectedImgIndex < this.data.length - 1) {
        this.selectedImgIndex++;
      }

      this.setFeature(this.selectedImgIndex);
      this.setActiveThumbnail(this.selectedImgIndex);
      if (this.selectedImgIndex > (window.innerWidth - leftArrow.offsetWidth - rightArrow.offsetWidth) /
            thumbnails.children[0].offsetWidth /
            2) {
        this.setThumbnailsScroll("left");
      }
    });
  }

  setFeature(index) {
    const feature = document.querySelector(".feature");
    const featureImg = feature.children[0];
    const caption = feature.children[1];
    featureImg.src = `images/${this.data[index].image}`;
    caption.innerText = this.data[index].caption;
  }

  setThumbnails() {
    const thumbnailsCtn = document.querySelector(".thumbnails-ctn");

    this.data.forEach((element, index) => {
      const li = document.createElement("li");
      if (index === this.selectedImgIndex) {
        li.classList.add("selected");
      }

      const img = document.createElement("img");
      img.setAttribute("src", `./images/${element.image}`);
      img.setAttribute("alt", "image");

      img.addEventListener("click", () => {
        const activeThumbnail = document.querySelector(".selected");

        activeThumbnail.classList.remove("selected");
        img.parentElement.classList.add("selected");
        this.selectedImgIndex = index;
        this.setFeature(this.selectedImgIndex);
      });

      li.appendChild(img);
      thumbnailsCtn.appendChild(li);
    });
  }

  setActiveThumbnail(index) {
    const thumbnails = document.querySelector(".thumbnails-ctn");
    const activeThumbnail = document.querySelector(".selected");
    activeThumbnail.classList.remove("selected");
    thumbnails.children[index].classList.add("selected");
    thumbnails.children[index].focus();
  }

  setThumbnailsScroll(direction) {
    const thumb = document.querySelector(".thumbnails");
    direction === "right"
      ? (thumb.scrollLeft -= 150)
      : (thumb.scrollLeft += 150);
  }
}

const imageCarousel = new ImageCarousel(content);
imageCarousel.init();

// window.addEventListener("click", () => {
//   console.log(window.innerWidth);
// });
