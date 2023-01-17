const All = document.getElementById('All');
const Allen = document.getElementById('Allen');
const Sherry = document.getElementById('Sherry');
const John = document.getElementById('John');
const decoLine = document.querySelector('.js-deco-line');

const Imgs = document.getElementById('imgs');

decoLine.addEventListener('click', function (e) {
  // 先移除樣式
  document.querySelector(".deco-line.deco-line-active").classList.remove("deco-line-active");
  // 在新增樣式
  console.log(e.target);
  e.target.classList.add("deco-line-active");
});

All.addEventListener('click',()=>{
  Imgs.innerHTML=
`                <div class="col">
<div class="card text-white">
  <img src="./images/dog05.png" class="card-img" alt="黃狗">
  <div class="card-img-overlay bottom-auto bg-dark-gradient d-flex align-items-end">
    <div class="content">
      <small class="card-title f-kalam">designer</small>
      <p class="card-text f-kalam fw-bold">Allen</p>
    </div>
  </div>
</div>
</div>
<div class="col">
<div class="card text-white">
<img src="./images/dog06.png" class="card-img" alt="黑色狗">
<div class="card-img-overlay bottom-auto bg-dark-gradient d-flex align-items-end">
  <div class="content">
    <small class="card-title f-kalam">designer</small>
    <p class="card-text f-kalam fw-bold">Sherry</p>
  </div>
</div>
</div>
</div>
<div class="col">
<div class="card text-white">
<img src="./images/dog07.png" class="card-img" alt="白色橘點貓">
<div class="card-img-overlay bottom-auto bg-dark-gradient d-flex align-items-end">
  <div class="content">
    <small class="card-title f-kalam">designer</small>
    <p class="card-text f-kalam fw-bold">John</p>
  </div>
</div>
</div>
</div>
<div class="col pb-md-5">
<div class="card text-white">
<img src="./images/Michael.png" class="card-img" alt="白色狗">
<div class="card-img-overlay bottom-auto bg-dark-gradient d-flex align-items-end">
  <div class="content">
    <small class="card-title f-kalam">designer</small>
    <p class="card-text f-kalam fw-bold">Ada</p>
  </div>
</div>
</div>
</div>`
})

Allen.addEventListener('click',()=>{
  Imgs.innerHTML=
`<div class="col py-4">
  <div class="card text-white">
    <img src="./images/dog05.png" class="card-img" alt="黃狗">
    <div class="card-img-overlay bottom-auto bg-dark-gradient d-flex align-items-end">
      <div class="content">
        <small class="card-title f-kalam">designer</small>
        <p class="card-text f-kalam fw-bold">Allen</p>
      </div>
    </div>
  </div>
</div>`
});

Sherry.addEventListener('click',()=>{
  Imgs.innerHTML=
`<div class="col py-4">
<div class="card text-white">
<img src="./images/dog06.png" class="card-img" alt="黑色狗">
<div class="card-img-overlay bottom-auto bg-dark-gradient d-flex align-items-end">
  <div class="content">
    <small class="card-title f-kalam">designer</small>
    <p class="card-text f-kalam fw-bold">Sherry</p>
  </div>
</div>
</div>
</div>`
});

John.addEventListener('click',()=>{
  Imgs.innerHTML=
`<div class="col py-4">
<div class="card text-white">
<img src="./images/dog07.png" class="card-img" alt="白色橘點貓">
<div class="card-img-overlay bottom-auto bg-dark-gradient d-flex align-items-end">
  <div class="content">
    <small class="card-title f-kalam">designer</small>
    <p class="card-text f-kalam fw-bold">John</p>
  </div>
</div>
</div>
</div>`
});

Ada.addEventListener('click',()=>{
  Imgs.innerHTML=
`<div class="col py-4">
<div class="card text-white">
<img src="./images/Michael.png" class="card-img" alt="白色狗">
<div class="card-img-overlay bottom-auto bg-dark-gradient d-flex align-items-end">
  <div class="content">
    <small class="card-title f-kalam">designer</small>
    <p class="card-text f-kalam fw-bold">Ada</p>
  </div>
</div>
</div>
</div>`
});