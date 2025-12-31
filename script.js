/* 🔴 عدّل الوصف والرابط فقط 🔴 */
const images = [
  {
    name:"rony1",
    desc:"وتحميل فيلم ولاد رزق 3",
    img:"rony1.jpg",
    link:"https://fredl.ru/d0t6lyxxwkez",
    downloads:0
  },
  {
    name:"rony2",
    desc:"ريستارت 2025ا",
    img:"rony2.jpg",
    link:"https://www.up-4ever.net/ojs1kfdasceq",
    downloads:0
  },
  {
    name:"rony3",
    desc:"فيلم الشاطر 2025ا",
    img:"rony3.jpg",
    link:"https://www.up-4ever.net/hg9en7t9oqyv",
    downloads:0
  },
  {
    name:"rony4",
    desc:"فيلم روكي الغلابة 2025ا",
    img:"rony4.jpg",
    link:"https://www.up-4ever.net/jctahgm5cchd",
    downloads:0
  },
  {
    name:"rony5",
    desc:"اللعب مع العيال 2024ا",
    img:"rony5.jpg",
    link:"https://fredl.ru/w3xtn6sxftkk",
    downloads:0
  },
  {
    name:"rony6",
    desc:"سيكو سيكو 2025",
    img:"rony6.jpg",
    link:"https://www.up-4ever.net/gsohg37cicer",
    downloads:0
  },
  {
    name:"rony7",
    desc:"فيلم رمسيس باريس",
    img:"rony7.jpg",
    link:"https://vipserver.liiivideo.com/d/wf3tjte4jw2r_h",
    downloads:0
  },
  {
    name:"rony8",
    desc:"فيلم السرب 2024",
    img:"rony8.jpg",
    link:"https://www.up-4ever.net/74v6vv278t7p",
    downloads:0
  },
  {
    name:"rony9",
    desc:"فيلم شقو 2024",
    img:"rony9.jpg",
    link:"https://www.up-4ever.net/znjw0mb2cdxg",
    downloads:0
  },
  {
    name:"rony10",
    desc:"اتنين للايجار 2023",
    img:"rony10.jpg",
    link:"https://www.up-4ever.net/vwx0p3uareva",
    downloads:0
  }
];

const gallery=document.getElementById("gallery");

function loadGallery(){
  gallery.innerHTML="";
  images.sort((a,b)=>b.downloads-a.downloads);

  images.forEach((item,i)=>{
    gallery.innerHTML+=`
    <div class="card">
      <img src="${item.img}">
      <h3>${item.name}</h3>
      <p class="desc">${item.desc}</p>
      <button class="download" onclick="go(${i})">تحميل</button>

      <div class="comment">
        <textarea placeholder="اكتب تعليقك"></textarea>
        <button onclick="thanks()">إرسال</button>
      </div>
    </div>`;
  });
}

function go(i){
  images[i].downloads++;
  window.location.href=images[i].link;
}

function thanks(){
  alert("شكراً على تعليقك ❤️");
}

function acceptTerms(){
  document.getElementById("termsBox").style.display="none";
  document.getElementById("content").style.display="block";
  loadGallery();
}

function declineTerms(){
  document.getElementById("termsBox").style.display="none";
  document.getElementById("declineScreen").style.display="block";
}

document.getElementById("search").addEventListener("input",function(){
  let v=this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display=c.innerText.toLowerCase().includes(v)?"block":"none";
  });
});