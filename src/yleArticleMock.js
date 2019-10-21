import $ from 'jquery';


$.loadCSS = function(url) {
  if (!$('link[href="' + url + '"]').length)
    $('head').append(
      '<link rel="stylesheet" type="text/css" href="' + url + '">',
    );
};

$.loadCSS('css/yleArticleMock.css');

import {screen15} from './texts.js';

const {otsikko, ingressi} = screen15;
function yleArticle() {
  const template = `
<div class="yle__app" style="
    text-align: left;
">
    <nav class="yle__navigation">
        <div class="yle__navigation__wrap">
            <ul class="yle__navigation__list">
                <li class="yle__navigation__list__item yle__navigation__list__item--main">
                    <a class="yle__navigation__list__item__link--main yle__navigation__list__item__link yle__borderColorHover yle__borderColorHover--etusivu" href="#"><img src="https://yle.fi/uutiset/public/img/uutiset.svg" class="yle__navigation__list__item__link__image" alt="Uutiset"></a>
                </li>

            </ul>
        </div>
    </nav>
    <article id="yle__article--testCaseB" class="yle__article yle__article--testCaseB" itemtype="http://schema.org/Article" itemscope="">
        <div class="yle__article__header" style="
    height: 80vh;
">
            <div>
                <h1 class="yle__article__heading yle__article__heading--h1" itemprop="name">${otsikko}
</h1>
		<p class="yle__article__paragraph">${ingressi}</p>
            </div>
            <div class="yle__article__header__grouper">
                <div class="yle__article__header__grouper__content">
                </div>
	    </div>
	    <div class="artikkelikuva">
		    <img src="img/kansanedustaja.jpg">
	    </div>>
        </div>
    </article>
</div>
`;

  $('#mainWrapper').html(template);
}

export default yleArticle;
