let img = document.querySelector('.image');
let Name = document.querySelector('.name');
let Loocation = document.querySelector('.location');
let Year = document.querySelector('.year');
let Description = document.querySelector('.description');
// Buttons
let Previous = document.querySelector('.previous');
let Surprise = document.querySelector('.surprise');
let Next = document.querySelector('.next');

let count = 0;
const content = [
  {
    id: 1,
    img: './image1.jfif',
    Name: 'NameTajmahal',
    Location: 'Location:Agra,India',
    Year: 'Year:1632',
    Description:
      'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife',
  },
  {
    id: 2,
    img: './image2.jfif',
    Name: 'Name:2',
    Location: 'Location:Agra,India',
    Year: 'Year:1632',
    Description:
      'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife',
  },
  {
    id: 3,
    img: './image3.jfif',
    Name: 'Name:3',
    Location: 'Location:Agra,India',
    Year: 'Year:1632',
    Description:
      'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife',
  },
  {
    id: 4,
    img: './image4.jfif',
    Name: 'Name:4',
    Location: 'Location:Agra,India',
    Year: 'Year:1632',
    Description:
      'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife',
  },
  {
    id: 5,
    img: './image5.jfif',
    Name: 'Name:5',
    Location: 'Location:Agra,India',
    Year: 'Year:1632',
    Description:
      'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife',
  },
  {
    id: 6,
    img: './image6.jfif',
    Name: 'Name:6',
    Location: 'Location:Agra,India',
    Year: 'Year:1632',
    Description:
      'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife',
  },
  {
    id: 7,
    img: './image7.jfif',
    Name: 'Name:7',
    Location: 'Location:Agra,India',
    Year: 'Year:1632',
    Description:
      'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife',
  },
];

window.addEventListener('DOMContentLoaded', function () {
  showData(count);
});

function showData(Data) {
  const item = content[Data];
  img.src = item.img;
  Name.textContent = item.Name;
  Loocation.textContent = item.Location;
  Year.textContent = item.Year;
  Description.textContent = item.Description;
}
Previous.addEventListener('click', function () {
  count--;
  if (count < 0) {
    count = content.length - 1;
  }
  showData(count);
});
Next.addEventListener('click', function () {
  count++;
  if (count > content.length - 1) {
    count++;
  }
  showData(count);
});
Surprise.addEventListener('click', function () {
  random = Math.floor(Math.random() * content.length);
  count = random;
  showData(count);
});
