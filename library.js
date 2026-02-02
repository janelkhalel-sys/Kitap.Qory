// Егер кітаптар жоқ болса — стандартты кітаптар
if (!localStorage.getItem("books")) {
  const defaultBooks = [
    {
      title: "Абай жолы",
      author: "Мұхтар Әуезов",
      link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/%D0%90%D0%B1%D0%B0%D0%B9%20%D0%B6%D0%BE%D0%BB%D1%8B.1%20%D0%BA%D1%96%D1%82%D0%B0%D0%BF.pdf"
    },
    {
      title: "1984",
      author: "George Orwell",
      link: "https://www.planetebook.com/free-ebooks/1984.pdf"
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      link: "https://www.planetebook.com/free-ebooks/the-little-prince.pdf"
    },
      {
      title: "Атау-кере",
      author: "Оралхан Бөкей",
      link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/%D0%90%D1%82%D0%B0%D1%83-%D0%BA%D0%B5%D1%80%D0%B5.pdf"
    },
        {
      title: "Абайдың қара сөздері",
      author: "Мұхтар Әуезов",
      link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/%D0%90%D0%B1%D0%B0%D0%B9%D0%B4%D1%8B%D2%A3%20%D2%9B%D0%B0%D1%80%D0%B0%20%D1%81%D3%A9%D0%B7%D0%B4%D0%B5%D1%80%D1%96.pdf"
    },
          {
      title: "Қызыл жебе 1-бөлім",
      author: "Шерхан Мұртаза",
      link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/%D2%9A%D1%8B%D0%B7%D1%8B%D0%BB%20%D0%B6%D0%B5%D0%B1%D0%B5.%201%20%D0%BA%D1%96%D1%82%D0%B0%D0%BF%20%D0%A8%D0%B5%D1%80%D1%85%D0%B0%D0%BD%20%D0%9C%D2%B1%D1%80%D1%82%D0%B0%D0%B7%D0%B0.pdf"
    },
             {
      title: "Қызыл жебе 2-бөлім",
      author: "Шерхан Мұртаза",
      link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/%D2%9A%D1%8B%D0%B7%D1%8B%D0%BB%20%D0%B6%D0%B5%D0%B1%D0%B5.%202%20%D0%BA%D1%96%D1%82%D0%B0%D0%BF%20%D0%A8%D0%B5%D1%80%D1%85%D0%B0%D0%BD%20%D0%9C%D2%B1%D1%80%D1%82%D0%B0%D0%B7%D0%B0.pdf"
    },
            {
      title: "Қызыл жебе 3-бөлім",
      author: "Шерхан Мұртаза",
      link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/%D2%9A%D1%8B%D0%B7%D1%8B%D0%BB%20%D0%B6%D0%B5%D0%B1%D0%B5.%203%20%D0%BA%D1%96%D1%82%D0%B0%D0%BF%20-%20%D0%A8%D0%B5%D1%80%D1%85%D0%B0%D0%BD%20%D0%9C%D2%B1%D1%80%D1%82%D0%B0%D0%B7%D0%B0.pdf"
    },
        {
      title: "Қорғансыздың күні",
      author: "Мұхтар Әуезов",
      link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/%D2%9A%D0%BE%D1%80%D2%93%D0%B0%D0%BD%D1%81%D1%8B%D0%B7%D0%B4%D1%8B%D2%A3%20%D0%BA%D2%AF%D0%BD%D1%96.pdf"
    },
        {
      title: "Ай мен Айша",
      author: "Шерхан Мұртаза",
      link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/%D0%90%D0%B8%CC%86-%D0%BC%D0%B5%D0%BD-%D0%90%D0%B8%CC%86%D1%88%D0%B0.pdf"
    },
     {
      title: "Алтын сақа",
      author: "Халық мұрасы",
      link: "https://balatili.kz/reader/index.html?bookPath=https://dev-s.balatili.kz/uploads/books/d22ca36ae040a22e3d50af3a439a56f4/My-Book-Generic.epub#epubcfi(/6/2[title-page-xhtml]!/4/2[title-page]/2/2/1:0)"
    },
     {
      title: "Бақытсыз Жамал",
      author: "Міржақып Дулатұлы",
      link: "https://dev-s.balatili.kz/uploads/books/c440d23f5b0133c2199ed66e3fb01ffd/%D0%91%D0%90%D2%9A%D0%AB%D0%A2%D0%A1%D0%AB%D0%97%20%D0%96%D0%90%D0%9C%D0%90%D0%9B%20-%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD.pdf"
    },
       {
      title: "Атымай Жомарт",
      author: "Ыбырай Алтынсарин",
      link: "https://balatili.kz/reader/index.html?bookPath=https://dev-s.balatili.kz/uploads/books/d3a0b282a8b717026709be958f59066f/My-Book-Generic.epub#epubcfi(/6/6[chapter-001-xhtml]!/4/2[chapter-001]/4[chapter-001-text]/14/1:244)"
    },
    {
      title: "Ер Төстік",
      author: "Халық ертегісі",
      link: "https://balatili.kz/reader/index.html?bookPath=https://dev-s.balatili.kz/uploads/books/8144470d6e233251c0c0e666e877ad83/My-Book-Generic.epub#epubcfi(/6/2[title-page-xhtml]!/4/2[title-page]/2/2/1:0)"
    },
     {
      title: "Ай астындағы Айбарша сұлу ",
      author: "Рахымжан Отарбаев.",
      link: "https://balatili.kz/reader/index.html?bookPath=https://dev-s.balatili.kz/uploads/books/2f261305c9e9600a48d9e1b0cc800bdf/My-Book-Generic.epub#epubcfi(/6/2[title-page-xhtml]!/4/2[title-page]/2/2/1:0)"
    },
    { title: "Робинзон крузо",
      author: "Даниэль Дефо", 
      link: "https://dev-s.balatili.kz/uploads/books/05c4db666c550fbc0107ece161c23d53/%D0%A0%D0%BE%D0%B1%D0%B8%D0%BD%D0%B7%D0%BE%D0%BD%20%D0%9A%D1%80%D1%83%D0%B7%D0%BE.pdf"
    },
    {title:"Керқұла атты Кендебай",
     author:"Халық мұрасы",
     link:"https://balatili.kz/reader/index.html?bookPath=https://dev-s.balatili.kz/uploads/books/9393c1f86100ac53da09c346318560fd/My-Book-Generic.epub#epubcfi(/6/2[title-page-xhtml]!/4/2[title-page]/2/2/1:0)"
    },
    {title:"Граф Монте-Кристо",
     author:"Александр Дюма",
     link:"https://www.100bestbooks.ru/files/Duma_Graf_Monte_Cristo.pdf"
    },
    {title:"«Қайдасың,Гауһар?",
     author:"Дулат Исабеков",
     link:"https://cbs-saran.gov.kz/wp-content/uploads/2024/01/berdibek_so-pa-baev-ajdasy-_-gau-ar.pdf"
    },
    {title:"Еңілік-Кебек",
     author:"Шәкәрім Құдайбердіұлы",
     link:"https://auezov.kz/files/765.pdf"
    },
    {title:"Оян, қазақ! ",
     author:"Міржақып Дулатов",
     link:"https://pps.kaznu.kz/kz/Main/FileShow2/106166/118/4/2/0/"
    },
    {title:"Менің атым Қожа",
     author:"Бердібек Соқпақбаев",
     link:"https://cbs-saran.gov.kz/wp-content/uploads/2024/01/berdibek_so-pa-baev-meni-_atym_-ozha.pdf"
    },
    {title:"Ғашықтың тілі – тілсіз тіл",
     author:"Абай Құнанбайұлы",
     link:"https://nabrk.kz/FileStore/dataFiles/f8/ad/107578/content/full.pdf?time=1695236950978&key=5dcceca717d22dcde974af0f32a1e4aa&isPortal=true"
    },
    {title:"Қамар сұлу",
     author:"Сұлтанмахмұт Торайғыров",
     link:"https://lib.dulaty.kz/rus2/all.doc/top-100/Kazakhskaya_literatura/18_S.Toraigirov.pdf"
    },
    {title:"Сто лет одиночества",
     author:"Габриэль Гарсиа Маркес",
     link:"http://www.belousenko.com/books/Garcia_Marquez/garcia_marques_100_let.pdf"
    },
    {title:"Тошнота",
     author:"Жан-Поль Сартр",
     link:"https://www.100bestbooks.ru/files/Sartre_Toshnota.pdf"
    },
    {title:"Евгений Онегин",
     author:"Александр Пушкин",
     link:"https://imwerden.de/pdf/pushkin_evgenij_onegin.pdf"
    },
    {title:"Отцы и дети",
     author:"Иван Тургенев",
     link:"https://www.100bestbooks.ru/files/Turgenev_Otcy_i_deti.pdf"
    },
    {title:"Мёртвые души",
     author:"Николай Гоголь",
     link:"https://imwerden.de/pdf/gogol_mertvye_dushy.pdf"
    },
    {title:"Ақбілек",
     author:"Жүсіпбек Аймауытұлы",
     link:"https://pushkinlibrary.kz/docs/akbilek_kaz.pdf"
    },
    {title:"Мастер и Маргарита",
     author:"Михаил Булгаков",
     link:"https://www.100bestbooks.ru/files/Bulgakov_Master_i_Margarita.pdf"
      },
  ];
  localStorage.setItem("books", JSON.stringify(defaultBooks));
}

// Кітаптарды шығару
function displayBooks() {
  const library = document.getElementById("library");
  library.innerHTML = "";

  const books = JSON.parse(localStorage.getItem("books")) || [];

  books.forEach((book, index) => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <span>
        <strong>${book.title}</strong> — ${book.author}
      </span>
      <span>
        <a href="${book.link}" target="_blank">📖 Оқу</a>
        <button onclick="deleteBook(${index})">Жою</button>
      </span>
    `;
    library.appendChild(div);
  });
}

// Қосу
function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const link = document.getElementById("link").value.trim();

  if (!title || !author || !link) {
    alert("Барлық өрісті толтыр!");
    return;
  }

  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push({ title, author, link });
  localStorage.setItem("books", JSON.stringify(books));

  displayBooks();

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("link").value = "";
}

// Жою
function deleteBook(index) {
  const books = JSON.parse(localStorage.getItem("books"));
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  displayBooks();
}

window.onload = displayBooks;



function openPDF(link) {
  document.getElementById("pdfFrame").src = link;  // PDF сол iframe-ке ашылады
  document.getElementById("pdfViewer").style.display = "block"; // iframe көрсетіледі
  window.scrollTo(0, document.getElementById("pdfViewer").offsetTop); // экранды PDF бөлігіне жылжыту
}

function closePDF() {
  document.getElementById("pdfFrame").src = ""; // PDF-ті тазалау
  document.getElementById("pdfViewer").style.display = "none"; // iframe жасыру
}


function searchBooks() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const library = document.getElementById("library");
  library.innerHTML = "";

  const books = JSON.parse(localStorage.getItem("books")) || [];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchText) ||
    book.author.toLowerCase().includes(searchText)
  );

  if (filteredBooks.length === 0) {
    library.innerHTML = "<p>❌ Кітап табылмады</p>";
    return;
  }

  filteredBooks.forEach((book, index) => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <span><strong>${book.title}</strong> — ${book.author}</span>
      <span>
        <a href="${book.link}">📖 Оқу</a>
      </span>
    `;
    library.appendChild(div);
  });
}


/* ===============================
   Қазақ әдебиеті (9–10–11 сынып)
================================ */

// Кітаптар массиві
const kazakhLitBooks = [
  {
    grade: "9-сынып",
    title: "Қазақ әдебиеті 9-сынып",
    author: "Тұрсынғалиева С., Рыскелдиева Г.Д",
    link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/9%20%D1%81%D1%8B%D0%BD%D1%8B%D0%BF.pdf"
  },
  {
    grade: "10-сынып",
    title: "Қазақ әдебиеті 10-сынып",
    author: "Орда Г., Сатылова А., Дерибаев С",
    link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/10%20%D1%81%D1%8B%D0%BD%D1%8B%D0%BF.pdf"
  },
  {
    grade: "11-сынып",
    title: "Қазақ әдебиеті 11-сынып",
    author: "Орда Г., Дәрібаев С., Сатылова А",
    link: "https://predmet.kz/adebiet/%D0%BA%D1%96%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80/11%D1%81%D1%8B%D0%BD%D1%8B%D0%BF.pdf"
  }
];

/* Кітаптарды шығару */
function displayKazakhLitBooks() {
  const library = document.getElementById("schoolLibrary");
  if (!library) return;

  library.innerHTML = "";

  kazakhLitBooks.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";

    div.innerHTML = `
      <strong>${book.title}</strong><br>
      ✍ ${book.author}<br>
      🎓 ${book.grade}<br><br>
      <button onclick="openPDF('${book.link}')">📖 Оқу</button>
    `;

    library.appendChild(div);
  });
}

/* PDF-ті осы бетте ашу */
function openPDF(link) {
  document.getElementById("pdfFrame").src = link;
  document.getElementById("pdfViewer").style.display = "block";
}

/* PDF жабу */
function closePDF() {
  document.getElementById("pdfFrame").src = "";
  document.getElementById("pdfViewer").style.display = "none";
}

/* Навигация */
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  if (id === "school") {
    displayKazakhLitBooks();
  }
}

/* Бет жүктелгенде бірден көрсету */
window.onload = displayKazakhLitBooks;


// ===============================
// КІТАПТАРДЫ ШЫҒАРУ
// ===============================
function displayBooks() {
  const library = document.getElementById("library");
  library.innerHTML = "";

  const books = JSON.parse(localStorage.getItem("books")) || [];

  if (books.length === 0) {
    library.innerHTML = "<p>📭 Кітаптар әлі қосылмаған</p>";
    return;
  }

  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <span><strong>${book.title}</strong> — ${book.author}</span>
      <span>
        <button onclick="openPDF('${book.link}')">📖 Оқу</button>
        <button onclick="toggleFavorite(${JSON.stringify(book)})">⭐</button>
      </span>
    `;
    library.appendChild(div);
  });
}

// ===============================
// ОҚУ
// ===============================
function openPDF(link) {
  document.getElementById("pdfFrame").src = link;
  document.getElementById("pdfViewer").style.display = "block";
}

// ===============================
// ИЗБРАННЫЕ
// ===============================
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(book) {
  const index = favorites.findIndex(b => b.title === book.title);

  if (index === -1) {
    favorites.push(book);
    alert("⭐ Таңдаулыға қосылды");
  } else {
    favorites.splice(index, 1);
    alert("❌ Таңдаулыдан алынды");
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

window.onload = displayBooks;


function filterGenre(g){
  const box = document.getElementById("genreList");
  const books = JSON.parse(localStorage.getItem("books")) || [];
  box.innerHTML = "";

  const result = books.filter(b => b.genre === g);

  if(!result.length){
    box.innerHTML = "<p>Бұл жанрда кітап жоқ</p>";
    return;
  }

  result.forEach(b=>{
    box.innerHTML += `
      <div class="book">
        <span><b>${b.title}</b> — ${b.author}</span>
        <i>${b.genre}</i><br>
        <button onclick="openPDF('${b.link}')">Оқу</button>
      </div>
    `;
  });

  show("genre");
}
