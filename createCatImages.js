export default function createCatImg(description, src, url){
    const imgEl = document.createElement('img');
        imgEl.src = src;
        imgEl.alt = description;
        imgEl.htmlContent += `<li>${url}</li>`;
        imgEl.style.width = '90vw';
        imgEl.style.background = 'none';

        const iconCat = document.getElementById('catShield');
        iconCat.style.display = 'none';


       return imgEl
}