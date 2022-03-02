const images = [ "0.jpeg", "1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg"]

const chosenImages = images[Math.floor(Math.random() * images.length)]; // 0~9.9까지 이지만 내림을 이용해 0~9 정수(array size만큼) 출력

const bgImage = document.createElement("img"); // HTML 요소 직접 추가

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage); // body에 추가