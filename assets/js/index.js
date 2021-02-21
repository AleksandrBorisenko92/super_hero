
class superHero {
    constructor(nickName,realName,originDescription,superPowers,catchPhrase,images) {
        this.nickName = nickName,
            this.realName = realName,
            this.originDescription = originDescription,
            this.superPowers = superPowers,
            this.catchPhrase = catchPhrase,
            this.images = images
    }
}

var panelTittle = document.createElement("div");
panelTittle.classList.add('panel_tittle');
panelTittle.innerText = 'CREATE YOUR HERO';
var formsField = document.createElement('div');
formsField.classList.add('forms_field');
var forms = document.createElement('form');
forms.action = 'link.php';
forms.method = 'post';
forms.classList.add('forms');
var nickName = document.createElement('input');
nickName.type = 'text';
nickName.placeholder = 'Nick Name';
var realName = document.createElement('input');
realName.type = 'text';
realName.placeholder = 'Real Name';
var originDescription = document.createElement('input');
originDescription.type = 'text';
originDescription.placeholder = 'Origin Description';
var superPowers = document.createElement('input');
superPowers.type = 'text';
superPowers.placeholder = 'Super Powers';
var catchPhrase = document.createElement('input');
catchPhrase.type = 'text';
catchPhrase.placeholder = 'Catch Phrase';
var images = document.createElement('input');
images.type = 'file';

var createHeroBtn = document.createElement('button');
createHeroBtn.innerText = 'Create Hero';
createHeroBtn.classList.add('createBtn');
forms.append(nickName);
forms.append(realName);
forms.append(originDescription);
forms.append(superPowers);
forms.append(catchPhrase);
forms.append(images);
formsField.append(forms);
var panel = document.querySelector('.panel_area');
panel.append(panelTittle);
panel.append(formsField);
panel.append(createHeroBtn);
var herodata = [];
// var pagination = document.querySelector('#pagination');

// var notesOnPage = 5;
// var countOfHeroes = Math.ceil(herodata.length / notesOnPage);
// var listNumber = [];
// for (var i = 1; i <= countOfHeroes; i++ ) {
//     var li = document.createElement('li');
//     li.innerHTML = i;
//     pagination.appendChild(i);
//     listNumber.push(li);
// }
var arr = [];

createHeroBtn.onclick = function () {
    var heroNickName = document.createElement('p');
    heroNickName.innerText = nickName.value;
    var heroRealName = document.createElement('p');
    heroRealName.classList.add('hide');
    heroRealName.innerText = realName.value;
    var heroOriginDescription = document.createElement('p');
    heroOriginDescription.classList.add('hide');
    heroOriginDescription.innerText = originDescription.value;
    var heroSuperPowers = document.createElement('p');
    heroSuperPowers.classList.add('hide');
    heroSuperPowers.innerText = superPowers.value;
    var heroCatchPhrase = document.createElement('p');
    heroCatchPhrase.classList.add('hide');
    heroCatchPhrase.innerText = catchPhrase.value;
    var heroImage = document.createElement('img');
    heroImage.classList.add('hero_img');
    var loadImages = new FileReader();
    loadImages.readAsDataURL(images.files[0]);
    loadImages.onloadend = function (event) {
        heroImage.src = event.target.result;
    }

    var hero = new superHero(nickName.value, realName.value, originDescription.value, superPowers.value, catchPhrase.value, images.value);
    herodata.push(hero);

    var notesOnPage = 5;

    // var showPage = (function () {
    //     var active;
    //     return function (item) {
    //         if(active) {
    //             active.classList.remove('active');
    //         }
    //         active = item;
    //         item.classList.add('active');
    //         var pageNum = +item.innerHTML;
    //         var start = (pageNum - 1) * notesOnPage;
    //         let end = start + notesOnPage;
    //         let notes = herodata.slice(start, end);
    //         heroField.innerHTML = '';
    //
    //     }
    // })
    // showPage();
    // var pagination = document.querySelector('#pagination');
    // var notesOnPage = 5;
    // // var countOfHeroes = Math.ceil(herodata.length / notesOnPage);
    // var listNumber = [];
    // for (let i = 1; i < herodata.length; i++ ) {
    //     if (herodata.length % notesOnPage == 0) {
    //         i += i;
    //         var li = document.createElement('li');
    //         li.innerHTML = i;
    //         pagination.append(i);
    //         listNumber.push(li);
    //
    //     }
    // }
    var delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.innerText = 'delete';
    delBtn.onclick = function () {
        hero_item.remove();
    }


    var editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerText = 'edit';

    editBtn.onclick = function () {
        var allDescr = document.getElementsByTagName("p");
        for (var i = 0; i < allDescr.length; i++) {
            allDescr[i].contentEditable = "true";
        }

        var saveBtn = document.createElement('button');
        saveBtn.classList.add('delBtn');
        saveBtn.innerText = 'save';
        hero_item.append(saveBtn);
        saveBtn.onclick = function () {
            var allDescr = document.getElementsByTagName("p");
            for (var i = 0; i < allDescr.length; i++) {

                allDescr[i].contentEditable = "false";
            }
            saveBtn.remove();
        }

    }

    var heroField = document.querySelector('.hero_list-area');
    var hero_item = document.createElement('div');
    hero_item.classList.add("hero_item");
    hero_item.append(heroImage);
    hero_item.append(heroNickName);
    hero_item.append(heroRealName);
    hero_item.append(heroOriginDescription);
    hero_item.append(heroSuperPowers);
    hero_item.append(heroCatchPhrase);
    hero_item.append(delBtn);
    hero_item.append(editBtn);
    heroField.append(hero_item);
}


