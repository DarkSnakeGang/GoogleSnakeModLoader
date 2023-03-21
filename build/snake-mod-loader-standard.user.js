// ==UserScript==
// @name         Google Snake Mod Loader (Standard)
// @namespace    https://github.com/DarkSnakeGang
// @version      1.0.6
// @description  Allows you to run multiple different google snake mods
// @author       DarkSnakeGang (https://github.com/DarkSnakeGang)
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @run-at       document-start
// @grant        none
// @updateURL    https://github.com/DarkSnakeGang/GoogleSnakeModLoader/raw/main/build/snake-mod-loader-standard.meta.js
// @downloadURL  https://github.com/DarkSnakeGang/GoogleSnakeModLoader/raw/main/build/snake-mod-loader-standard.user.js
// @include      /^https:\/\/(www\.)?google\.(com|ad|ae|com\.af|com\.ag|com\.ai|al|am|co\.ao|com\.ar|as|at|com\.au|az|ba|com\.bd|be|bf|bg|com\.bh|bi|bj|com\.bn|com\.bo|com\.br|bs|bt|co\.bw|by|com\.bz|ca|cd|cf|cg|ch|ci|co\.ck|cl|cm|cn|com\.co|co\.cr|com\.cu|cv|com\.cy|cz|de|dj|dk|dm|com\.do|dz|com\.ec|ee|com\.eg|es|com\.et|fi|com\.fj|fm|fr|ga|ge|gg|com\.gh|com\.gi|gl|gm|gr|com\.gt|gy|com\.hk|hn|hr|ht|hu|co\.id|ie|co\.il|im|co\.in|iq|is|it|je|com\.jm|jo|co\.jp|co\.ke|com\.kh|ki|kg|co\.kr|com\.kw|kz|la|com\.lb|li|lk|co\.ls|lt|lu|lv|com\.ly|co\.ma|md|me|mg|mk|ml|com\.mm|mn|ms|com\.mt|mu|mv|mw|com\.mx|com\.my|co\.mz|com\.na|com\.ng|com\.ni|ne|nl|no|com\.np|nr|nu|co\.nz|com\.om|com\.pa|com\.pe|com\.pg|com\.ph|com\.pk|pl|pn|com\.pr|ps|pt|com\.py|com\.qa|ro|ru|rw|com\.sa|com\.sb|sc|se|com\.sg|sh|si|sk|com\.sl|sn|so|sm|sr|st|com\.sv|td|tg|co\.th|com\.tj|tl|tm|tn|to|com\.tr|tt|com\.tw|co\.tz|com\.ua|co\.ug|co\.uk|com\.uy|co\.uz|com\.vc|co\.ve|vg|co\.vi|com\.vn|vu|ws|rs|co\.za|co\.zm|co\.zw|cat)\/search.*(snake|serpiente|serpent|serpente|%E8%B4%AA%E5%90%83%E8%9B%87|%E0%A4%B8%E0%A4%BE%E0%A4%81%E0%A4%AA|%D8%AB%D8%B9%D8%A8%D8%A7%D9%86|%D0%B7%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0|%E3%83%98%E3%83%93%E3%82%B2%E3%83%BC%E3%83%A0|%E0%A4%B8%E0%A4%BE%E0%A4%AA|y%C4%B1lan|%E0%AE%AA%E0%AE%BE%E0%AE%AE%E0%AF%8D%E0%AE%AA%E0%AF%81|r%E1%BA%AFn\+s%C4%83n\+m%E1%BB%93i|%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC|%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%87%E0%B8%B9|%E1%8B%A8%E1%8A%A5%E1%89%A3%E1%89%A5\+%E1%8C%A8%E1%8B%8B%E1%89%B3|%E0%A4%B8%E0%A4%BE%E0%A4%81%E0%A4%AA|%E1%80%99%E1%80%BC%E1%80%BD%E1%80%B1|w%C4%85%C5%BC|hra\+had|had%C3%AD\+hra|slange|ular).*$/
// @match        https://*.google.com/fbx?fbx=snake_arcade
// @match        https://*.google.ad/fbx?fbx=snake_arcade
// @match        https://*.google.ae/fbx?fbx=snake_arcade
// @match        https://*.google.com.af/fbx?fbx=snake_arcade
// @match        https://*.google.com.ag/fbx?fbx=snake_arcade
// @match        https://*.google.com.ai/fbx?fbx=snake_arcade
// @match        https://*.google.al/fbx?fbx=snake_arcade
// @match        https://*.google.am/fbx?fbx=snake_arcade
// @match        https://*.google.co.ao/fbx?fbx=snake_arcade
// @match        https://*.google.com.ar/fbx?fbx=snake_arcade
// @match        https://*.google.as/fbx?fbx=snake_arcade
// @match        https://*.google.at/fbx?fbx=snake_arcade
// @match        https://*.google.com.au/fbx?fbx=snake_arcade
// @match        https://*.google.az/fbx?fbx=snake_arcade
// @match        https://*.google.ba/fbx?fbx=snake_arcade
// @match        https://*.google.com.bd/fbx?fbx=snake_arcade
// @match        https://*.google.be/fbx?fbx=snake_arcade
// @match        https://*.google.bf/fbx?fbx=snake_arcade
// @match        https://*.google.bg/fbx?fbx=snake_arcade
// @match        https://*.google.com.bh/fbx?fbx=snake_arcade
// @match        https://*.google.bi/fbx?fbx=snake_arcade
// @match        https://*.google.bj/fbx?fbx=snake_arcade
// @match        https://*.google.com.bn/fbx?fbx=snake_arcade
// @match        https://*.google.com.bo/fbx?fbx=snake_arcade
// @match        https://*.google.com.br/fbx?fbx=snake_arcade
// @match        https://*.google.bs/fbx?fbx=snake_arcade
// @match        https://*.google.bt/fbx?fbx=snake_arcade
// @match        https://*.google.co.bw/fbx?fbx=snake_arcade
// @match        https://*.google.by/fbx?fbx=snake_arcade
// @match        https://*.google.com.bz/fbx?fbx=snake_arcade
// @match        https://*.google.ca/fbx?fbx=snake_arcade
// @match        https://*.google.cd/fbx?fbx=snake_arcade
// @match        https://*.google.cf/fbx?fbx=snake_arcade
// @match        https://*.google.cg/fbx?fbx=snake_arcade
// @match        https://*.google.ch/fbx?fbx=snake_arcade
// @match        https://*.google.ci/fbx?fbx=snake_arcade
// @match        https://*.google.co.ck/fbx?fbx=snake_arcade
// @match        https://*.google.cl/fbx?fbx=snake_arcade
// @match        https://*.google.cm/fbx?fbx=snake_arcade
// @match        https://*.google.cn/fbx?fbx=snake_arcade
// @match        https://*.google.com.co/fbx?fbx=snake_arcade
// @match        https://*.google.co.cr/fbx?fbx=snake_arcade
// @match        https://*.google.com.cu/fbx?fbx=snake_arcade
// @match        https://*.google.cv/fbx?fbx=snake_arcade
// @match        https://*.google.com.cy/fbx?fbx=snake_arcade
// @match        https://*.google.cz/fbx?fbx=snake_arcade
// @match        https://*.google.de/fbx?fbx=snake_arcade
// @match        https://*.google.dj/fbx?fbx=snake_arcade
// @match        https://*.google.dk/fbx?fbx=snake_arcade
// @match        https://*.google.dm/fbx?fbx=snake_arcade
// @match        https://*.google.com.do/fbx?fbx=snake_arcade
// @match        https://*.google.dz/fbx?fbx=snake_arcade
// @match        https://*.google.com.ec/fbx?fbx=snake_arcade
// @match        https://*.google.ee/fbx?fbx=snake_arcade
// @match        https://*.google.com.eg/fbx?fbx=snake_arcade
// @match        https://*.google.es/fbx?fbx=snake_arcade
// @match        https://*.google.com.et/fbx?fbx=snake_arcade
// @match        https://*.google.fi/fbx?fbx=snake_arcade
// @match        https://*.google.com.fj/fbx?fbx=snake_arcade
// @match        https://*.google.fm/fbx?fbx=snake_arcade
// @match        https://*.google.fr/fbx?fbx=snake_arcade
// @match        https://*.google.ga/fbx?fbx=snake_arcade
// @match        https://*.google.ge/fbx?fbx=snake_arcade
// @match        https://*.google.gg/fbx?fbx=snake_arcade
// @match        https://*.google.com.gh/fbx?fbx=snake_arcade
// @match        https://*.google.com.gi/fbx?fbx=snake_arcade
// @match        https://*.google.gl/fbx?fbx=snake_arcade
// @match        https://*.google.gm/fbx?fbx=snake_arcade
// @match        https://*.google.gr/fbx?fbx=snake_arcade
// @match        https://*.google.com.gt/fbx?fbx=snake_arcade
// @match        https://*.google.gy/fbx?fbx=snake_arcade
// @match        https://*.google.com.hk/fbx?fbx=snake_arcade
// @match        https://*.google.hn/fbx?fbx=snake_arcade
// @match        https://*.google.hr/fbx?fbx=snake_arcade
// @match        https://*.google.ht/fbx?fbx=snake_arcade
// @match        https://*.google.hu/fbx?fbx=snake_arcade
// @match        https://*.google.co.id/fbx?fbx=snake_arcade
// @match        https://*.google.ie/fbx?fbx=snake_arcade
// @match        https://*.google.co.il/fbx?fbx=snake_arcade
// @match        https://*.google.im/fbx?fbx=snake_arcade
// @match        https://*.google.co.in/fbx?fbx=snake_arcade
// @match        https://*.google.iq/fbx?fbx=snake_arcade
// @match        https://*.google.is/fbx?fbx=snake_arcade
// @match        https://*.google.it/fbx?fbx=snake_arcade
// @match        https://*.google.je/fbx?fbx=snake_arcade
// @match        https://*.google.com.jm/fbx?fbx=snake_arcade
// @match        https://*.google.jo/fbx?fbx=snake_arcade
// @match        https://*.google.co.jp/fbx?fbx=snake_arcade
// @match        https://*.google.co.ke/fbx?fbx=snake_arcade
// @match        https://*.google.com.kh/fbx?fbx=snake_arcade
// @match        https://*.google.ki/fbx?fbx=snake_arcade
// @match        https://*.google.kg/fbx?fbx=snake_arcade
// @match        https://*.google.co.kr/fbx?fbx=snake_arcade
// @match        https://*.google.com.kw/fbx?fbx=snake_arcade
// @match        https://*.google.kz/fbx?fbx=snake_arcade
// @match        https://*.google.la/fbx?fbx=snake_arcade
// @match        https://*.google.com.lb/fbx?fbx=snake_arcade
// @match        https://*.google.li/fbx?fbx=snake_arcade
// @match        https://*.google.lk/fbx?fbx=snake_arcade
// @match        https://*.google.co.ls/fbx?fbx=snake_arcade
// @match        https://*.google.lt/fbx?fbx=snake_arcade
// @match        https://*.google.lu/fbx?fbx=snake_arcade
// @match        https://*.google.lv/fbx?fbx=snake_arcade
// @match        https://*.google.com.ly/fbx?fbx=snake_arcade
// @match        https://*.google.co.ma/fbx?fbx=snake_arcade
// @match        https://*.google.md/fbx?fbx=snake_arcade
// @match        https://*.google.me/fbx?fbx=snake_arcade
// @match        https://*.google.mg/fbx?fbx=snake_arcade
// @match        https://*.google.mk/fbx?fbx=snake_arcade
// @match        https://*.google.ml/fbx?fbx=snake_arcade
// @match        https://*.google.com.mm/fbx?fbx=snake_arcade
// @match        https://*.google.mn/fbx?fbx=snake_arcade
// @match        https://*.google.ms/fbx?fbx=snake_arcade
// @match        https://*.google.com.mt/fbx?fbx=snake_arcade
// @match        https://*.google.mu/fbx?fbx=snake_arcade
// @match        https://*.google.mv/fbx?fbx=snake_arcade
// @match        https://*.google.mw/fbx?fbx=snake_arcade
// @match        https://*.google.com.mx/fbx?fbx=snake_arcade
// @match        https://*.google.com.my/fbx?fbx=snake_arcade
// @match        https://*.google.co.mz/fbx?fbx=snake_arcade
// @match        https://*.google.com.na/fbx?fbx=snake_arcade
// @match        https://*.google.com.ng/fbx?fbx=snake_arcade
// @match        https://*.google.com.ni/fbx?fbx=snake_arcade
// @match        https://*.google.ne/fbx?fbx=snake_arcade
// @match        https://*.google.nl/fbx?fbx=snake_arcade
// @match        https://*.google.no/fbx?fbx=snake_arcade
// @match        https://*.google.com.np/fbx?fbx=snake_arcade
// @match        https://*.google.nr/fbx?fbx=snake_arcade
// @match        https://*.google.nu/fbx?fbx=snake_arcade
// @match        https://*.google.co.nz/fbx?fbx=snake_arcade
// @match        https://*.google.com.om/fbx?fbx=snake_arcade
// @match        https://*.google.com.pa/fbx?fbx=snake_arcade
// @match        https://*.google.com.pe/fbx?fbx=snake_arcade
// @match        https://*.google.com.pg/fbx?fbx=snake_arcade
// @match        https://*.google.com.ph/fbx?fbx=snake_arcade
// @match        https://*.google.com.pk/fbx?fbx=snake_arcade
// @match        https://*.google.pl/fbx?fbx=snake_arcade
// @match        https://*.google.pn/fbx?fbx=snake_arcade
// @match        https://*.google.com.pr/fbx?fbx=snake_arcade
// @match        https://*.google.ps/fbx?fbx=snake_arcade
// @match        https://*.google.pt/fbx?fbx=snake_arcade
// @match        https://*.google.com.py/fbx?fbx=snake_arcade
// @match        https://*.google.com.qa/fbx?fbx=snake_arcade
// @match        https://*.google.ro/fbx?fbx=snake_arcade
// @match        https://*.google.ru/fbx?fbx=snake_arcade
// @match        https://*.google.rw/fbx?fbx=snake_arcade
// @match        https://*.google.com.sa/fbx?fbx=snake_arcade
// @match        https://*.google.com.sb/fbx?fbx=snake_arcade
// @match        https://*.google.sc/fbx?fbx=snake_arcade
// @match        https://*.google.se/fbx?fbx=snake_arcade
// @match        https://*.google.com.sg/fbx?fbx=snake_arcade
// @match        https://*.google.sh/fbx?fbx=snake_arcade
// @match        https://*.google.si/fbx?fbx=snake_arcade
// @match        https://*.google.sk/fbx?fbx=snake_arcade
// @match        https://*.google.com.sl/fbx?fbx=snake_arcade
// @match        https://*.google.sn/fbx?fbx=snake_arcade
// @match        https://*.google.so/fbx?fbx=snake_arcade
// @match        https://*.google.sm/fbx?fbx=snake_arcade
// @match        https://*.google.sr/fbx?fbx=snake_arcade
// @match        https://*.google.st/fbx?fbx=snake_arcade
// @match        https://*.google.com.sv/fbx?fbx=snake_arcade
// @match        https://*.google.td/fbx?fbx=snake_arcade
// @match        https://*.google.tg/fbx?fbx=snake_arcade
// @match        https://*.google.co.th/fbx?fbx=snake_arcade
// @match        https://*.google.com.tj/fbx?fbx=snake_arcade
// @match        https://*.google.tl/fbx?fbx=snake_arcade
// @match        https://*.google.tm/fbx?fbx=snake_arcade
// @match        https://*.google.tn/fbx?fbx=snake_arcade
// @match        https://*.google.to/fbx?fbx=snake_arcade
// @match        https://*.google.com.tr/fbx?fbx=snake_arcade
// @match        https://*.google.tt/fbx?fbx=snake_arcade
// @match        https://*.google.com.tw/fbx?fbx=snake_arcade
// @match        https://*.google.co.tz/fbx?fbx=snake_arcade
// @match        https://*.google.com.ua/fbx?fbx=snake_arcade
// @match        https://*.google.co.ug/fbx?fbx=snake_arcade
// @match        https://*.google.co.uk/fbx?fbx=snake_arcade
// @match        https://*.google.com.uy/fbx?fbx=snake_arcade
// @match        https://*.google.co.uz/fbx?fbx=snake_arcade
// @match        https://*.google.com.vc/fbx?fbx=snake_arcade
// @match        https://*.google.co.ve/fbx?fbx=snake_arcade
// @match        https://*.google.vg/fbx?fbx=snake_arcade
// @match        https://*.google.co.vi/fbx?fbx=snake_arcade
// @match        https://*.google.com.vn/fbx?fbx=snake_arcade
// @match        https://*.google.vu/fbx?fbx=snake_arcade
// @match        https://*.google.ws/fbx?fbx=snake_arcade
// @match        https://*.google.rs/fbx?fbx=snake_arcade
// @match        https://*.google.co.za/fbx?fbx=snake_arcade
// @match        https://*.google.co.zm/fbx?fbx=snake_arcade
// @match        https://*.google.co.zw/fbx?fbx=snake_arcade
// @match        https://*.google.cat/fbx?fbx=snake_arcade
// @match        https://*.google.com/search*snake*
// @match        https://*.google.ad/search*snake*
// @match        https://*.google.ae/search*snake*
// @match        https://*.google.com.af/search*snake*
// @match        https://*.google.com.ag/search*snake*
// @match        https://*.google.com.ai/search*snake*
// @match        https://*.google.al/search*snake*
// @match        https://*.google.am/search*snake*
// @match        https://*.google.co.ao/search*snake*
// @match        https://*.google.com.ar/search*snake*
// @match        https://*.google.as/search*snake*
// @match        https://*.google.at/search*snake*
// @match        https://*.google.com.au/search*snake*
// @match        https://*.google.az/search*snake*
// @match        https://*.google.ba/search*snake*
// @match        https://*.google.com.bd/search*snake*
// @match        https://*.google.be/search*snake*
// @match        https://*.google.bf/search*snake*
// @match        https://*.google.bg/search*snake*
// @match        https://*.google.com.bh/search*snake*
// @match        https://*.google.bi/search*snake*
// @match        https://*.google.bj/search*snake*
// @match        https://*.google.com.bn/search*snake*
// @match        https://*.google.com.bo/search*snake*
// @match        https://*.google.com.br/search*snake*
// @match        https://*.google.bs/search*snake*
// @match        https://*.google.bt/search*snake*
// @match        https://*.google.co.bw/search*snake*
// @match        https://*.google.by/search*snake*
// @match        https://*.google.com.bz/search*snake*
// @match        https://*.google.ca/search*snake*
// @match        https://*.google.cd/search*snake*
// @match        https://*.google.cf/search*snake*
// @match        https://*.google.cg/search*snake*
// @match        https://*.google.ch/search*snake*
// @match        https://*.google.ci/search*snake*
// @match        https://*.google.co.ck/search*snake*
// @match        https://*.google.cl/search*snake*
// @match        https://*.google.cm/search*snake*
// @match        https://*.google.cn/search*snake*
// @match        https://*.google.com.co/search*snake*
// @match        https://*.google.co.cr/search*snake*
// @match        https://*.google.com.cu/search*snake*
// @match        https://*.google.cv/search*snake*
// @match        https://*.google.com.cy/search*snake*
// @match        https://*.google.cz/search*snake*
// @match        https://*.google.de/search*snake*
// @match        https://*.google.dj/search*snake*
// @match        https://*.google.dk/search*snake*
// @match        https://*.google.dm/search*snake*
// @match        https://*.google.com.do/search*snake*
// @match        https://*.google.dz/search*snake*
// @match        https://*.google.com.ec/search*snake*
// @match        https://*.google.ee/search*snake*
// @match        https://*.google.com.eg/search*snake*
// @match        https://*.google.es/search*snake*
// @match        https://*.google.com.et/search*snake*
// @match        https://*.google.fi/search*snake*
// @match        https://*.google.com.fj/search*snake*
// @match        https://*.google.fm/search*snake*
// @match        https://*.google.fr/search*snake*
// @match        https://*.google.ga/search*snake*
// @match        https://*.google.ge/search*snake*
// @match        https://*.google.gg/search*snake*
// @match        https://*.google.com.gh/search*snake*
// @match        https://*.google.com.gi/search*snake*
// @match        https://*.google.gl/search*snake*
// @match        https://*.google.gm/search*snake*
// @match        https://*.google.gr/search*snake*
// @match        https://*.google.com.gt/search*snake*
// @match        https://*.google.gy/search*snake*
// @match        https://*.google.com.hk/search*snake*
// @match        https://*.google.hn/search*snake*
// @match        https://*.google.hr/search*snake*
// @match        https://*.google.ht/search*snake*
// @match        https://*.google.hu/search*snake*
// @match        https://*.google.co.id/search*snake*
// @match        https://*.google.ie/search*snake*
// @match        https://*.google.co.il/search*snake*
// @match        https://*.google.im/search*snake*
// @match        https://*.google.co.in/search*snake*
// @match        https://*.google.iq/search*snake*
// @match        https://*.google.is/search*snake*
// @match        https://*.google.it/search*snake*
// @match        https://*.google.je/search*snake*
// @match        https://*.google.com.jm/search*snake*
// @match        https://*.google.jo/search*snake*
// @match        https://*.google.co.jp/search*snake*
// @match        https://*.google.co.ke/search*snake*
// @match        https://*.google.com.kh/search*snake*
// @match        https://*.google.ki/search*snake*
// @match        https://*.google.kg/search*snake*
// @match        https://*.google.co.kr/search*snake*
// @match        https://*.google.com.kw/search*snake*
// @match        https://*.google.kz/search*snake*
// @match        https://*.google.la/search*snake*
// @match        https://*.google.com.lb/search*snake*
// @match        https://*.google.li/search*snake*
// @match        https://*.google.lk/search*snake*
// @match        https://*.google.co.ls/search*snake*
// @match        https://*.google.lt/search*snake*
// @match        https://*.google.lu/search*snake*
// @match        https://*.google.lv/search*snake*
// @match        https://*.google.com.ly/search*snake*
// @match        https://*.google.co.ma/search*snake*
// @match        https://*.google.md/search*snake*
// @match        https://*.google.me/search*snake*
// @match        https://*.google.mg/search*snake*
// @match        https://*.google.mk/search*snake*
// @match        https://*.google.ml/search*snake*
// @match        https://*.google.com.mm/search*snake*
// @match        https://*.google.mn/search*snake*
// @match        https://*.google.ms/search*snake*
// @match        https://*.google.com.mt/search*snake*
// @match        https://*.google.mu/search*snake*
// @match        https://*.google.mv/search*snake*
// @match        https://*.google.mw/search*snake*
// @match        https://*.google.com.mx/search*snake*
// @match        https://*.google.com.my/search*snake*
// @match        https://*.google.co.mz/search*snake*
// @match        https://*.google.com.na/search*snake*
// @match        https://*.google.com.ng/search*snake*
// @match        https://*.google.com.ni/search*snake*
// @match        https://*.google.ne/search*snake*
// @match        https://*.google.nl/search*snake*
// @match        https://*.google.no/search*snake*
// @match        https://*.google.com.np/search*snake*
// @match        https://*.google.nr/search*snake*
// @match        https://*.google.nu/search*snake*
// @match        https://*.google.co.nz/search*snake*
// @match        https://*.google.com.om/search*snake*
// @match        https://*.google.com.pa/search*snake*
// @match        https://*.google.com.pe/search*snake*
// @match        https://*.google.com.pg/search*snake*
// @match        https://*.google.com.ph/search*snake*
// @match        https://*.google.com.pk/search*snake*
// @match        https://*.google.pl/search*snake*
// @match        https://*.google.pn/search*snake*
// @match        https://*.google.com.pr/search*snake*
// @match        https://*.google.ps/search*snake*
// @match        https://*.google.pt/search*snake*
// @match        https://*.google.com.py/search*snake*
// @match        https://*.google.com.qa/search*snake*
// @match        https://*.google.ro/search*snake*
// @match        https://*.google.ru/search*snake*
// @match        https://*.google.rw/search*snake*
// @match        https://*.google.com.sa/search*snake*
// @match        https://*.google.com.sb/search*snake*
// @match        https://*.google.sc/search*snake*
// @match        https://*.google.se/search*snake*
// @match        https://*.google.com.sg/search*snake*
// @match        https://*.google.sh/search*snake*
// @match        https://*.google.si/search*snake*
// @match        https://*.google.sk/search*snake*
// @match        https://*.google.com.sl/search*snake*
// @match        https://*.google.sn/search*snake*
// @match        https://*.google.so/search*snake*
// @match        https://*.google.sm/search*snake*
// @match        https://*.google.sr/search*snake*
// @match        https://*.google.st/search*snake*
// @match        https://*.google.com.sv/search*snake*
// @match        https://*.google.td/search*snake*
// @match        https://*.google.tg/search*snake*
// @match        https://*.google.co.th/search*snake*
// @match        https://*.google.com.tj/search*snake*
// @match        https://*.google.tl/search*snake*
// @match        https://*.google.tm/search*snake*
// @match        https://*.google.tn/search*snake*
// @match        https://*.google.to/search*snake*
// @match        https://*.google.com.tr/search*snake*
// @match        https://*.google.tt/search*snake*
// @match        https://*.google.com.tw/search*snake*
// @match        https://*.google.co.tz/search*snake*
// @match        https://*.google.com.ua/search*snake*
// @match        https://*.google.co.ug/search*snake*
// @match        https://*.google.co.uk/search*snake*
// @match        https://*.google.com.uy/search*snake*
// @match        https://*.google.co.uz/search*snake*
// @match        https://*.google.com.vc/search*snake*
// @match        https://*.google.co.ve/search*snake*
// @match        https://*.google.vg/search*snake*
// @match        https://*.google.co.vi/search*snake*
// @match        https://*.google.com.vn/search*snake*
// @match        https://*.google.vu/search*snake*
// @match        https://*.google.ws/search*snake*
// @match        https://*.google.rs/search*snake*
// @match        https://*.google.co.za/search*snake*
// @match        https://*.google.co.zm/search*snake*
// @match        https://*.google.co.zw/search*snake*
// @match        https://*.google.cat/search*snake*
// ==/UserScript==

const IS_DEVELOPER_MODE = false;
const VERSION = '1.0.6';//Gets set to version in build script
const UPDATE_URL = 'https://github.com/DarkSnakeGang/GoogleSnakeModLoader/raw/main/build/snake-mod-loader-standard.user.js';//Gets set from build script

let modsConfig = {
  moreMenu: {
    displayName: 'More Menu Mod',
    hasUrl: true,
    url: 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeCustomMenuStuff/main/modloadercode.js',
    modDescription: {
      descriptionName: 'More Menu Mod',
      author: 'Fizhes',
      authorUrl: 'https://www.youtube.com/@Fizhes',
      description: 'The most popular mod. Adds options to the menu for more speeds, apple counts and map sizes. Other contributors: ScienceCrafter, BrightyLighty, CarL'
    }
  },
  levelEditorMod: {
    displayName: 'Level Editor Mod',
    hasUrl: true,
    url: 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeLevelEditor/main/modloadercode.js',
    modDescription: {
      descriptionName: 'Level Editor Mod',
      author: 'TF2Llama',
      authorUrl: 'https://www.youtube.com/@TF2Llama',
      description: 'Click on the board to place walls/fruit etc. Play pre-made levels. Make your own levels. Try the challenge levels.'
    }
  },
  mouseMode: {
    displayName: 'Mouse Mode',
    hasUrl: true,
    url: 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeMouseMode/main/modloadercode.js',
    modDescription: {
      descriptionName: 'Mouse Mode',
      author: 'TF2Llama',
      authorUrl: 'https://www.youtube.com/@TF2Llama',
      description: 'Control the snake with your mouse. Slightly buggy.'
    }
  },
  PuddingMod: {
    displayName: 'Pudding Mod',
    hasUrl: true,
    url: 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakePudding/main/PuddingMod.js',
    modDescription: {
      descriptionName: 'Pudding Mod',
      author: 'Yarmiplay',
      authorUrl: 'https://twitch.tv/yarmiplay',
      description: 'A fairly small mod. Adds a pudding fruit after the fruit bowl option. Shows the speed and count in the top bar.'
    }
  }
}

if(IS_DEVELOPER_MODE) {
  modsConfig.testMod = {
    displayName: 'Test Mod',
    hasUrl: false,
    modDescription: {
      descriptionName: 'Test Mod',
      author: 'N/A',
      description: 'For mod developers only. Edit window.testMod in the userscript code.'
    }
  };
  modsConfig.customUrl = {
    displayName: 'Load from url',
    customModName: JSON.parse(localStorage.getItem('snakeAdvancedSettings'))?.customModName ?? 'PLEASE_CHOOSE_CUSTOM_NAME_FROM_ADVANCED_SETTINGS',
    url: JSON.parse(localStorage.getItem('snakeAdvancedSettings'))?.customUrl ?? 'PLEASE_CHOOSE_URL_FROM_ADVANCED_SETTINGS',
    hasUrl: true,
    modDescription: {
      descriptionName: 'Load from url',
      author: 'N/A',
      description: 'For mod developers only. Enter details of a mod in the advanced options.'
    }
  }
}

//Prevent someone from running more than one copy of mod loader at once.
if(window.isModLoaderRunning) {
  alert('It appears that you have more than one copy of the snake mod loader trying to run at the same time. Please disable/remove the extra copy from the tampermonkey settings.');
  throw Error('Multiple copies of the mod loader trying to run at once.');
}

window.isModLoaderRunning = true;

//Replace appendChild so we can intercept it
document.body.appendChildOld = document.body.appendChild;

document.body.appendChild = function(el) {
  if(el.tagName !== 'SCRIPT') return document.body.appendChildOld(el);
  if(el.src === '' || el.src.includes('apis.google.com')) return document.body.appendChildOld(el);

  const currentlySelectedMod = localStorage.getItem('snakeChosenMod');

  //Just do default behaviour if it isn't the snake script or we don't have a mod to run
  const regexForScriptSrc = window.location.href.includes('fbx?fbx=snake_arcade') ? /xjs=s1$/ : /xjs=s2$/;
  let isSrcCorrectFormat = regexForScriptSrc.test(el.src) || el.src.includes('funbox');
  if(!isSrcCorrectFormat || currentlySelectedMod === null || currentlySelectedMod === 'none') return document.body.appendChildOld(el);

  //default behaviour if we can't find any snake images on the webpage
  if(document.body.querySelector('img[src^="//www.google.com/logos/fnbx/snake_arcade"]') === null) return document.body.appendChildOld(el);

  //Make sure to return the correct thing that appendChild would normally return
  let returnVal = el instanceof DocumentFragment ? new DocumentFragment : el;

  /*
    Run some code depending on what google snake mod was chosen
    Request the text contents of the google snake code.
    Alter the contents of the google snake code (depending on the selected mod) and then eval
    Run some code afterwards depending on what google snake mod was chosen
  */
  const req = new XMLHttpRequest();
  req.open('GET', el.src, false);

  req.onload = function() {
    //Do default behaviour if the source code doesn't look like the google snake code.
    //Set returnVal so it returns the correct thing for document.body.appendChild.
    if(this.responseText.indexOf('trophy') === -1 || this.responseText.indexOf('apple') === -1 || this.responseText.indexOf('snake_arcade') === -1) {
      returnVal = document.body.appendChildOld(el);
      return;
    }

    console.log(`Selected mod: ${currentlySelectedMod}`);
    //Make sure currentlySelectedMod is an allowed value
    if(!(modsConfig.hasOwnProperty(currentlySelectedMod) || currentlySelectedMod === 'none' || currentlySelectedMod === null)) {
      const errMessage = `Bad value of snakeChosenMod: ${currentlySelectedMod}. The current allowed values are ${Object.keys(modsConfig)}. Changing this to the "None" setting for next time.`;
      localStorage.setItem('snakeChosenMod', 'none');
      if(confirm('Disallowed choice of mod. Changing this to none. Refresh the page?')) {location.reload();}
      throw new Error(errMessage);
    } 

    if(modsConfig[currentlySelectedMod].hasUrl) {
      const modUrl = modsConfig[currentlySelectedMod].url;

      //Load and run the code for this mod.
      console.log(`Retrieving code for this mod from ${modUrl}`);

      loadAndRunCodeSynchronous(modUrl);
    }

    //Name of the object that contains runCodeBefore/alterSnakeCode/runCodeAfter methods
    let modObjectName = currentlySelectedMod;
    if(IS_DEVELOPER_MODE && modsConfig[currentlySelectedMod].customModName) {
      modObjectName = modsConfig[currentlySelectedMod].customModName;
    }

    //Skip below if either the code didn't load, or it has the wrong variable
    if(!window[modObjectName]) {
      (0,eval)(this.responseText);
      throw new Error(`We were expecting to find a global variable called window.${modObjectName} but this is missing. Running snake without the mod.`);
    }

    //Mod specific code to run before running google snake script
    if(window[modObjectName].runCodeBefore) {
      try {
        window[modObjectName].runCodeBefore();
      } catch(err) {
        console.error(err);
        alert(`Error occurred before running snake code. Attempting to continue, but the mod may be broken. Error message logged to console.`);
      }
    }

    let newSnakeCode;
    //Alter google snake code and then run it
    if(window[modObjectName].alterSnakeCode) {
      try {
        newSnakeCode = window[modObjectName].alterSnakeCode(this.responseText);
      } catch (err) {
        let snakeErrEl = document.getElementById('snake-error-message')
        if(snakeErrEl) {snakeErrEl.style.display = 'block';}
        window.showSnakeErrMessage = true;
        console.log('Displaying message to user and then running the google snake script and then throwing the original error that occurred in "alterSnakeCode"');
        (0,eval)(this.responseText);
        throw err;
      }
    }

    (0,eval)(newSnakeCode);

    //Mod specific code to run after running google snake script
    if(window[modObjectName].runCodeAfter) {
      try {
        window[modObjectName].runCodeAfter();
      } catch {
        console.error(err);
        alert(`Error occurred after running snake code. The mod may be partly broken. Error message logged to console.`);
      }
    }
  
  };

  req.send();

  return returnVal;
}

//Setup Modal box that lets the user choose which mod to run
let addModSelectorPopup = function() {
  //Set up CSS
  const css = `
  .mod-sel-btn:hover {
    background-color: #fefcfb !important;
  }

  .mod-sel-btn:active {
      background-color: #f0e9e5 !important;
  }

  /*light theme*/
  #mod-indicator, #mod-selector-dialogue-container {
    --mod-loader-font-col: #000000;
    --mod-loader-main-bg: #fffce0;
    --mod-loader-title-bg: #ece9d4;
    --mod-loader-title-border: #e4e0be;
    --mod-loader-thin-border: #cccccc;
    --mod-loader-indicator-display-bg: #eeeaca;
    --mod-loader-link-font-col: #069;
    --mod-loader-button-bg: #fcf6f2;
    --mod-loader-button-close-col: #606060;
    --mod-loader-button-apply-col: #4caf50;
  }

  /*dark theme*/
  #mod-indicator.dark-mod-theme, #mod-selector-dialogue-container.dark-mod-theme {
    --mod-loader-font-col: #ffffff;
    --mod-loader-main-bg: #343542;
    --mod-loader-title-bg: #66636f;
    --mod-loader-title-border: #7d7a89;
    --mod-loader-thin-border: #ccc;
    --mod-loader-indicator-display-bg: #000000;
    --mod-loader-link-font-col: #18f6ff;
    --mod-loader-button-bg: #010104;
    --mod-loader-button-close-col: #b5b5b5;
    --mod-loader-button-apply-col: #5cf062;
  }

  .start-hidden {
    display: none;
  }

  .start-hidden.show-hidden {
    display: block;
  }
  `;

  document.getElementsByTagName('style')[0].innerHTML = document.getElementsByTagName('style')[0].innerHTML + css;

  if(document.body.querySelector('img[src^="//www.google.com/logos/fnbx/snake_arcade"]') === null) {
    //We aren't on a page with google snake. Don't show the mod selector dialogue. Exit early.
    return;
  }

  const modCornerIndicatorHTML = `
      <span style="color:var(--mod-loader-font-col) !important">Current mod: </span><span id="mod-name-span" style="background-color: var(--mod-loader-indicator-display-bg);padding: 2px;border-radius: 3px;font-family: consolas, monospace; color:var(--mod-loader-font-col) !important"></span>
      <div id="change-mod-button" style="text-align: center;font-size: 0.84em;font-family: arial, sans-serif;color: var(--mod-loader-link-font-col);text-decoration: underline;cursor: pointer;margin-top: 3px;">Change mod</div>
      <div id="snake-error-message" style="font-family: helvetica, sans-serif;color: #f44336;margin-top: 2px;display: ${window.showSnakeErrMessage ? 'block' : 'none'};">
        Error changing snake code.
        <br>
        <a href="https://github.com/DarkSnakeGang/GoogleSnakeModLoader/blob/main/docs/mod_errors.md" target="_blank" style="color: var(--mod-loader-link-font-col);">Why does this happen?</a>
      </div>
  `;

  let modIndicatorEl = document.createElement('div');
  modIndicatorEl.id = 'mod-indicator';
  modIndicatorEl.style = 'z-index: 9999999;background-color: var(--mod-loader-main-bg) !important;position: fixed;bottom: 0;right: 0;border-top: 1px solid var(--mod-loader-thin-border);border-left: 1px solid var(--mod-loader-thin-border);font-size: 1.2em;border-top-left-radius: 5px;padding: 5px;-webkit-box-shadow: 0px 0px 7px 1px hwb(0deg 0% 100% / 12%);box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 12%);font-family: helvetica, sans-serif;height: initial;user-select:none;display:block';
  modIndicatorEl.innerHTML = modCornerIndicatorHTML;
  document.body.appendChild(modIndicatorEl);

  document.getElementById('change-mod-button').addEventListener('click', ()=>{
    document.getElementById('mod-selector-dialogue-container').style.display = document.getElementById('mod-selector-dialogue-container').style.display === 'none' ? 'block' : 'none';
  });

  let modSelectorRadioOptions = '';
  let modDescriptions = '';
  for(const [key, value] of Object.entries(modsConfig)) {
    let optionalHiddenClass = value.startHidden ? 'class="start-hidden"' : '';
    modSelectorRadioOptions += `<label ${optionalHiddenClass} style="color:var(--mod-loader-font-col) !important"><input type="radio" name="mod-selector" value="${key}">${value.displayName}<br></label>`;

    if(value.modDescription) {
      let authorString = value.modDescription.authorUrl ? `<a href="${value.modDescription.authorUrl}" target="_blank" style="color: var(--mod-loader-link-font-col);">${value.modDescription.author}</a>` : value.modDescription.author;

      modDescriptions += `
        <div data-linked-option="${key}" class="mod-description" style="display:none">
          <span style="font-weight: bold;color:var(--mod-loader-font-col) !important">${value.modDescription.descriptionName}</span><br>
          <span style="font-weight: bold;color:var(--mod-loader-font-col) !important">Author: ${authorString}</span><br>
          <span style="color:var(--mod-loader-font-col) !important">${value.modDescription.description}</span>
        </div>
      `;
    }
  }
  modSelectorRadioOptions += `<label style="color:var(--mod-loader-font-col) !important"><input type="radio" name="mod-selector" value="none">None</label>`;

  let customUrlOptions = '';
  if(IS_DEVELOPER_MODE) {
    customUrlOptions = `<label style="color:var(--mod-loader-font-col) !important"><input id="custom-mod-name" type="text"> Custom Mod Name</label><br>
                        <label style="color:var(--mod-loader-font-col) !important"><input id="custom-url" type="text"> Custom Mod Url</label><br>`;
  }

  const modSelectorModal = `
  <div id="mod-selector-dialogue" style="display: block;margin:40px auto;padding:10px;border: 1px solid var(--mod-loader-thin-border);width:550px;background-color: var(--mod-loader-main-bg) !important;border-radius:5px;-webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.24);box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 20%);font-family: helvetica, sans-serif;">
  <!-- <h1 style="font-size: 2em;font-weight: bold;font-family: &quot;Century Gothic&quot;, sans-serif;margin: 7px 0px 15px 0px;text-align: center;text-shadow: 2px 2px 3px #a2a2a2;">Snake Mod Loader</h1> -->
  <!-- <h1 style="font-size: 2em;font-weight: bold;font-family: &quot;Century Gothic&quot;, sans-serif;margin: 7px 0px 15px 0px;text-align: center;text-shadow: 1px 1px 1px #000000, 1px 1px 1px #000000, 1px 1px 5px #000000;color: #4674e9;">Snake Mod Loader</h1> -->
  <!-- <div style="background-color: #aad751;height: 17px;position: relative;top: -31px;transform: skewX(-21deg);z-index: 5;"></div> -->
  <h1 style="font-size: 2em;font-weight: bold;font-family: &quot;Century Gothic&quot;, sans-serif;margin: 7px 0px 15px 0px;text-align: center;text-shadow: 1px 1px 1px #000000, 1px 1px 1px #000000, 1px 1px 5px #000000;color: #4674e9;border: 5px inset var(--mod-loader-title-border);background-color: var(--mod-loader-title-bg);">Snake Mod Loader</h1>
    <div id="main-panel" style="display: flex;justify-content: start;">
      <div id="mod-options" style="flex: 45%;min-height: 115px;">
        ${modSelectorRadioOptions}
      </div>
      <div id="mod-descriptions" style="flex: 55%;">
        ${modDescriptions}
      </div>
    </div>

    <div id="advanced-options" style="display:none">
      <hr style="margin-block-start: 0.5em; margin-block-end: 0.5em;">
      <div id="advanced-settings" style="display: flex;justify-content: space-between;">
        <div id="settings-wrapper-1">
          <label style="color:var(--mod-loader-font-col) !important"><input id="fbx-centered-checkbox" type="checkbox">Make fbx centered</label><br>
          <label style="color:var(--mod-loader-font-col) !important"><input id="timer-starts-on" type="checkbox">Timer starts on</label><br>
          <label style="color:var(--mod-loader-font-col) !important"><input id="muted-starts-on" type="checkbox">Mute at start</label><br>
          <label style="color:var(--mod-loader-font-col) !important"><input id="hide-indicator" type="checkbox">Auto-hide mod indicator (h to toggle)</label><br>
          <!--<label style="color:var(--mod-loader-font-col) !important"><input id="hidden-mod-toggle" type="checkbox">Show early access mods</label><br>-->
          <label style="color:var(--mod-loader-font-col) !important"><input id="dark-mod-theme" type="checkbox">Dark mod loader theme</label><br>
          ${customUrlOptions}
        </div>
        <div id="settings-wrapper-2">
          <label style="color:var(--mod-loader-font-col) !important"><input id="background-color-picker" type="color" value="#FFFFFF"> Background color on fbx</label><br>
          <label style="color:var(--mod-loader-font-col) !important"><input id="use-custom-theme" type="checkbox">Use custom theme</label><br>
          <div id="custom-theme-pickers" style="display: none;">
            <label style="color:var(--mod-loader-font-col) !important"><input id="custom-theme-col1" type="color" value="#1D1D1D"> Light Tiles</label><br>
            <label style="color:var(--mod-loader-font-col) !important"><input id="custom-theme-col2" type="color" value="#161616"> Dark Tiles</label><br>
            <label style="color:var(--mod-loader-font-col) !important"><input id="custom-theme-col3" type="color" value="#111111"> Shadow</label><br>
            <label style="color:var(--mod-loader-font-col) !important"><input id="custom-theme-col4" type="color" value="#000000"> Border</label><br>
            <label style="color:var(--mod-loader-font-col) !important"><input id="custom-theme-col5" type="color" value="#1D1D1D"> Lock Sign</label><br>
            <label style="color:var(--mod-loader-font-col) !important"><input id="custom-theme-col6" type="color" value="#111111"> Top Bar</label><br>
            <label style="color:var(--mod-loader-font-col) !important"><input id="custom-theme-col7" type="color" value="#000000"> Endscreen background</label><br>
          </div>
        </div>
      </div>
    </div>

    <div id="bottom-buttons-wrapper" style="display: flex;justify-content: space-between;">
      <div style="display:inline-block;padding-top: 15px;margin-bottom: 4px;text-align: center;font-family: arial, sans-serif;color: var(--mod-loader-link-font-col);text-decoration: underline;cursor: pointer;user-select:none" id="advanced-options-toggle">
        Advanced options
      </div>
      <div id="version-info" style="color:var(--mod-loader-font-col) !important;padding-top: 15px;">
        Version ${VERSION} 
        <span id="update-link" style="display:none">
          <a id="update-link-text" href="${UPDATE_URL}" style="color: var(--mod-loader-link-font-col);">(update to vNext)</a>
        </span>
      </div>

      <div id="right-buttons">
        <div id="close-mod-selector" class="mod-sel-btn" style="display:inline-block;background-color: var(--mod-loader-button-bg);padding: 4px;margin-top: 7px;margin-right:10px;border-radius: 3px;border: 2px solid var(--mod-loader-button-close-col);color: var(--mod-loader-button-close-col);font-weight: bold;user-select: none;cursor: pointer;">
          Close
        </div>
        <div id="apply-mod" class="mod-sel-btn" style="display:inline-block;background-color: var(--mod-loader-button-bg);padding: 4px;margin-top: 7px;border-radius: 3px;border: 2px solid var(--mod-loader-button-apply-col);color: var(--mod-loader-button-apply-col);font-weight: bold;user-select: none;cursor: pointer;">
          Apply
        </div>
      </div>
    </div>
  </div>
  `;

  //Insert html for custom preset export dialogue box.
  let modSelectorModalContainer = document.createElement('div');
  modSelectorModalContainer.innerHTML = modSelectorModal;
  modSelectorModalContainer.id = 'mod-selector-dialogue-container';
  modSelectorModalContainer.style = 'display:none; position:fixed; width:100%; height:100%; z-index: 999999; left:0; top:0';
  document.body.appendChild(modSelectorModalContainer);

  let hideEndScreenImg = document.createElement('img');
  hideEndScreenImg.style = "position: absolute;left: 10px;top: 10px;cursor: pointer; height:20px; width:auto;";
  hideEndScreenImg.src = "https://github.com/DarkSnakeGang/GoogleSnakeIcons/blob/main/ToggleDeathscreen/EyeIcon.png?raw=true";
  hideEndScreenImg.title = "Click to hide. Click anywhere to bring back";
  hideEndScreenImg.id = "death-screen-toggle";
  let firstMenuScreen = document.getElementsByClassName('T7SB3d')[0];
  if(firstMenuScreen) {
    firstMenuScreen.appendChild(hideEndScreenImg);
  }

  let showEndScreenCover = document.createElement('div');
  showEndScreenCover.style = "display:none; background-color:transparent; position: fixed; top:0;left:0; width:100vw; height:100vh;box-shadow: cyan 0px 0px 10px inset; box-sizing: border-box;z-index: 1000000;"
  document.body.appendChild(showEndScreenCover);

  hideEndScreenImg.addEventListener('click', function() {
    let endScreenContainer = document.getElementsByClassName('wjOYOd')[0];
    if(endScreenContainer) {
      endScreenContainer.style.visibility = 'hidden';
    }

    showEndScreenCover.style.display = 'block';
  });

  showEndScreenCover.addEventListener('click', function() {
    let endScreenContainer = document.getElementsByClassName('wjOYOd')[0];
    if(endScreenContainer) {
      endScreenContainer.style.visibility = 'visible';
    }

    showEndScreenCover.style.display = 'none';
  });

  //Tick the currently selected mod choice according to localStorage. Also, set the mod name in the indicator
  const currentlySelectedMod = localStorage.getItem('snakeChosenMod');
  let newlySelectedMod = currentlySelectedMod;

  if(modsConfig.hasOwnProperty(currentlySelectedMod) && currentlySelectedMod !== null && currentlySelectedMod !== 'none') {
    document.querySelector(`input[name="mod-selector"][value="${currentlySelectedMod}"]`).checked = true;
    document.getElementById('mod-name-span').textContent = modsConfig[currentlySelectedMod].displayName;
    let descriptionEl = document.querySelector(`div.mod-description[data-linked-option="${currentlySelectedMod}"]`);
    if(descriptionEl) {descriptionEl.style.display = 'block';}
  } else {
    document.querySelector('input[name="mod-selector"][value="none"]').checked = true;
    document.getElementById('mod-name-span').textContent = 'None';
  }

  //Update the checked/ticked mod when clicking on any of the radio buttons. Also show the description for it.
  [...document.querySelectorAll('input[type="radio"][name="mod-selector"]')].forEach(radioEl=>{
    radioEl.addEventListener('click', function(){
      //Mark mod as selected for when we hit apply
      newlySelectedMod = this.value;
      [...document.getElementsByClassName('mod-description')].forEach(el=>{
        el.style.display = 'none';
        let descriptionEl = document.querySelector(`div.mod-description[data-linked-option="${this.value}"]`);
        if(descriptionEl) {descriptionEl.style.display = 'block';}
      });
    });
  });

  //Load advanced settings
  let advancedSettings = JSON.parse(localStorage.getItem('snakeAdvancedSettings')) ?? {};
  let advancedSettingsOriginal = {...advancedSettings};//Shallow copy, but it's ok as nothing is nested.

  //Make sure the inputs are set the right values when starting up the mod
  updateAdvancedSettingInputs();

  //Event listeners for advanced settings
  document.getElementById('advanced-options-toggle').addEventListener('click', (event)=>{
    document.getElementById('advanced-options').style.display = (document.getElementById('advanced-options').style.display === 'none' ? 'block':'none');
    event.preventDefault();
  });
  document.getElementById('use-custom-theme').addEventListener('change', function() {
    document.getElementById('custom-theme-pickers').style.display = (this.checked ? 'block' : 'none');
    updateAdvancedSetting('useCustomTheme', this.checked);
  });
  document.getElementById('fbx-centered-checkbox').addEventListener('change', function() {
    updateAdvancedSetting('fbxCentered', this.checked);
  });
  document.getElementById('timer-starts-on').addEventListener('change', function() {
    updateAdvancedSetting('timerStartsOn', this.checked);
  });
  /*document.getElementById('hidden-mod-toggle').addEventListener('change', function() {
    updateAdvancedSetting('showHiddenMods', this.checked);
  });*/
  document.getElementById('muted-starts-on').addEventListener('change', function() {
    updateAdvancedSetting('mutedStartsOn', this.checked);
  });
  document.getElementById('background-color-picker').addEventListener('input', function() {
    updateAdvancedSetting('backgroundColor', this.value);
  });
  document.getElementById('custom-theme-col1').addEventListener('input', function() {
    updateAdvancedSetting('themeCol1', this.value);
  });
  document.getElementById('custom-theme-col2').addEventListener('input', function() {
    updateAdvancedSetting('themeCol2', this.value);
  });
  document.getElementById('custom-theme-col3').addEventListener('input', function() {
    updateAdvancedSetting('themeCol3', this.value);
  });
  document.getElementById('custom-theme-col4').addEventListener('input', function() {
    updateAdvancedSetting('themeCol4', this.value);
  });
  document.getElementById('custom-theme-col5').addEventListener('input', function() {
    updateAdvancedSetting('themeCol5', this.value);
  });
  document.getElementById('custom-theme-col6').addEventListener('input', function() {
    updateAdvancedSetting('themeCol6', this.value);
  });
  document.getElementById('custom-theme-col7').addEventListener('input', function() {
    updateAdvancedSetting('themeCol7', this.value);
  });
  document.getElementById('hide-indicator').addEventListener('change', function() {
    updateAdvancedSetting('hideIndicator', this.checked);
  });
  document.getElementById('dark-mod-theme').addEventListener('change', function() {
    updateAdvancedSetting('darkModTheme', this.checked);
  });

  if(IS_DEVELOPER_MODE) {
    document.getElementById('custom-mod-name').addEventListener('input', function() {
      updateAdvancedSetting('customModName', this.value);
    });
    document.getElementById('custom-url').addEventListener('input', function() {
      updateAdvancedSetting('customUrl', this.value);
    });
  }

  //Event listener for toggling the early access/hidden mods
  /*document.getElementById('hidden-mod-toggle').addEventListener('change', function() {
    if(this.checked) {
      [...document.getElementsByClassName('start-hidden')].forEach(el=>el.classList.add('show-hidden'));
    } else {
      [...document.getElementsByClassName('start-hidden')].forEach(el=>el.classList.remove('show-hidden'));
    }
  });*/

  //Hide mod selector dialogue when clicking close button
  document.getElementById('close-mod-selector').addEventListener('click', function() {
    document.getElementById('mod-selector-dialogue-container').style.display = 'none';
  });

  //Apply button should save settings and refresh page
  document.getElementById('apply-mod').addEventListener('click', function(event) {
    //Figure out if advanced settings have been changed.
    let shallowEquality = true;
    for(let setting in advancedSettings) {
      if(advancedSettings[setting] !== advancedSettingsOriginal?.[setting]) {
        shallowEquality = false;
        break;
      }
    }

    //Skip if settings/mod chosen are the same as before.
    if(shallowEquality && newlySelectedMod === currentlySelectedMod) {
      alert('Settings are the same as before!')
      return;
    }

    //Save new settings and refresh to run with the new settings
    localStorage.setItem('snakeChosenMod', newlySelectedMod);
    localStorage.setItem('snakeAdvancedSettings',JSON.stringify(advancedSettings));
    location.reload();
  });

  let attemptsApplyingAdvancedSettings = 0;
  setTimeout(applyAdvancedSnakeSettingsToGame, 300);//Small delay to give the game more time to load.
  setTimeout(applyAdvancedNonSnakeSettingsToGame,300);

  document.body.addEventListener('keydown',function(event) {
    if(event.key === 'h') {
      let modIndicatorEl = document.getElementById('mod-indicator');
      modIndicatorEl.style.display = (modIndicatorEl.style.display === 'block' ? 'none' : 'block');
    }
  });

  showUpdateLinkIfNeeded();

  function updateAdvancedSettingInputs() {
    if(advancedSettings.hasOwnProperty('fbxCentered')) {
      document.getElementById('fbx-centered-checkbox').checked = advancedSettings.fbxCentered;
    }
    if(advancedSettings.hasOwnProperty('timerStartsOn')) {
      document.getElementById('timer-starts-on').checked = advancedSettings.timerStartsOn;
    }
    /*if(advancedSettings.hasOwnProperty('showHiddenMods')) {
      document.getElementById('hidden-mod-toggle').checked = advancedSettings.showHiddenMods;
    }*/
    if(advancedSettings.hasOwnProperty('mutedStartsOn')) {
      document.getElementById('muted-starts-on').checked = advancedSettings.mutedStartsOn;
    }
    if(advancedSettings.hasOwnProperty('darkModTheme')) {
      document.getElementById('dark-mod-theme').checked = advancedSettings.darkModTheme;
    }
    if(advancedSettings.hasOwnProperty('hideIndicator')) {
      document.getElementById('hide-indicator').checked = advancedSettings.hideIndicator;
    }
    if(advancedSettings.hasOwnProperty('useCustomTheme')) {
      document.getElementById('use-custom-theme').checked = advancedSettings.useCustomTheme;
      document.getElementById('custom-theme-pickers').style.display = (advancedSettings.useCustomTheme ? 'block' : 'none');
    } else {
      document.getElementById('custom-theme-pickers').style.display = 'none';
    }
    if(advancedSettings.hasOwnProperty('backgroundColor')) {
      document.getElementById('background-color-picker').value = advancedSettings.backgroundColor;
    }
    if(advancedSettings.hasOwnProperty('themeCol1')) {
      document.getElementById('custom-theme-col1').value = advancedSettings.themeCol1;
    }
    if(advancedSettings.hasOwnProperty('themeCol2')) {
      document.getElementById('custom-theme-col2').value = advancedSettings.themeCol2;
    }
    if(advancedSettings.hasOwnProperty('themeCol3')) {
      document.getElementById('custom-theme-col3').value = advancedSettings.themeCol3;
    }
    if(advancedSettings.hasOwnProperty('themeCol4')) {
      document.getElementById('custom-theme-col4').value = advancedSettings.themeCol4;
    }
    if(advancedSettings.hasOwnProperty('themeCol5')) {
      document.getElementById('custom-theme-col5').value = advancedSettings.themeCol5;
    }
    if(advancedSettings.hasOwnProperty('themeCol6')) {
      document.getElementById('custom-theme-col6').value = advancedSettings.themeCol6;
    }
    if(advancedSettings.hasOwnProperty('themeCol7')) {
      document.getElementById('custom-theme-col7').value = advancedSettings.themeCol7;
    }

    if(IS_DEVELOPER_MODE) {
      if(advancedSettings.hasOwnProperty('customModName')) {
        document.getElementById('custom-mod-name').value = advancedSettings.customModName;
      }
      if(advancedSettings.hasOwnProperty('customUrl')) {
        document.getElementById('custom-url').value = advancedSettings.customUrl;
      }
    }
  }

  function updateAdvancedSetting(settingName, settingValue) {
    advancedSettings[settingName] = settingValue;
  }

  //Advanced settings that need to wait for window.snake
  function applyAdvancedSnakeSettingsToGame() {
    if(attemptsApplyingAdvancedSettings > 10) {
      //Stop trying to apply advanced setting if we've tried this much and the game still isn't ready
      console.log('window.snake is still not available after retrying many times. Skipping applying advanced snake settings');
    } else if(!window.snake) {
      //Game not ready. Wait a bit and then try again.
      console.log('window.snake not ready for when we apply advanced settings. Will retry again after waiting.');
      attemptsApplyingAdvancedSettings++;
      setTimeout(applyAdvancedSnakeSettingsToGame, 300);
    } else {
      if(advancedSettings.timerStartsOn) {
        window.snake.speedrun();
      }
      if(advancedSettings.useCustomTheme) {
        window.snake.setCustomTheme(
          advancedSettings.themeCol1 ?? '#1D1D1D',
          advancedSettings.themeCol2 ?? '#161616',
          advancedSettings.themeCol3 ?? '#111111',
          advancedSettings.themeCol4 ?? '#000000',
          advancedSettings.themeCol5 ?? '#1D1D1D',
          advancedSettings.themeCol6 ?? '#111111',
          advancedSettings.themeCol7 ?? '#000000'
        );
      }
    }
  }

  function applyAdvancedNonSnakeSettingsToGame() {
    if(advancedSettings.fbxCentered && window.location.href.includes('fbx?fbx=snake_arcade')) {
      //Copied from GoogleSnakeCenteredFBX mod
      let snakeCanvasAncestor = document.querySelector('div[data-is-standalone]');
      if(snakeCanvasAncestor) {
        snakeCanvasAncestor.style = 'position:relative;top:50%;transform:translate(0%,-50%);margin:auto;';
      }
    }
    if(advancedSettings.mutedStartsOn) {
      applyMuteToGame();
    }
    if(advancedSettings.showHiddenMods) {
      [...document.getElementsByClassName('start-hidden')].forEach(el=>el.classList.add('show-hidden'));
    }
    if(advancedSettings.darkModTheme) {
      document.getElementById('mod-indicator').classList.add('dark-mod-theme');
      document.getElementById('mod-selector-dialogue-container').classList.add('dark-mod-theme');
    }
    if(advancedSettings.hideIndicator) {
      setTimeout(function() {
        if(window.showSnakeErrMessage) {return;}

        let modIndicatorEl = document.getElementById('mod-indicator');
        if(modIndicatorEl.style.display === 'block') {
          modIndicatorEl.style.display = 'none';
        }
      }, 5000);
    }
    if(window.location.href.includes('fbx?fbx=snake_arcade')) {
      document.body.style.backgroundColor = advancedSettings.backgroundColor;
    }
  }

  function applyMuteToGame() {
    //On fbx we can mute right way. On search, we need to wait until the game is visible.
    if(window.location.href.includes('fbx?fbx=snake_arcade')) {
      //Match mute button, but only if it's on (i.e. the image url includes the word up instead of the word off)
      let muteButton = document.querySelector('img.oGdex.JWsmhb:not([src*="off"])');
      if(muteButton) {muteButton.click();}
      return;
    }

    //Only true if we can find the invis el and it has style "None"
    let someRandomGameContainer = document.getElementsByClassName('ynlwjd')[0];
    let isGameInvis = someRandomGameContainer && someRandomGameContainer.style.display === 'none';

    //Handle search snake here.
    if(isGameInvis) {
      console.log('Game not visible yet. Waiting to apply mute.');
      setTimeout(applyMuteToGame, 400);
    } else {
      //Game is visible so safe to mute.
      let muteButton = document.querySelector('img[alt="Mute"][src*="up"]');
      if(muteButton) {muteButton.click();}
    }    
  }

  //Fetches json file with latest version and shows the update link if it is different to our version
  function showUpdateLinkIfNeeded() {
    fetch('https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeModLoader/main/build/mod-info.json').then(
      function(response) {
        return response.text();
      }
    ).then(function(responseText) {
      try {
        let latestVersion = JSON.parse(responseText).version;
        if(latestVersion !== VERSION && !IS_DEVELOPER_MODE) {
          document.getElementById('update-link').style.display = 'inline';
          document.getElementById('update-link-text').textContent = `(update to ${latestVersion})`;
        }
      } catch(err) {
        console.error(err);
      }
    });
  }
}

window.testMod = {};
window.testMod.runCodeBefore = function() {
  
}
window.testMod.alterSnakeCode = function(code) {
  code = code.replaceAll('.66','.36')

  return code;
}
window.testMod.runCodeAfter = function() {

}

function loadAndRunCodeSynchronous(url) {
  let req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.onload = function() {
    if(this.status === 200) {
      (1,eval)(this.responseText);
    } else {
      console.log(`Loading selected mod returned non-200 status. Received: ${this.status}`);
    }
  };
  req.onerror = function(event) {
    console.error(`Error when attempting to retrieve mod code from ${url}`);
    console.log(event);
  };
  req.send();
}

window.addEventListener('load', addModSelectorPopup);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Utility functions below
////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.swapInMainClassPrototype = function(mainClass, functionText) {
  if(/^[$a-zA-Z0-9_]{0,6}=function/.test(functionText)) {
    throw new Error("Error, function is of form abc=function(), but this only works for stuff like s_.abc=function()");
  }
  functionText = assertReplace(functionText, /^[$a-zA-Z0-9_]{0,6}/,`${mainClass}.prototype`);
  return functionText;
}

/*
This function will search for a function/method in some code and return this function as a string

code will usually be the snake source code

functionSignature will be regex matching the beginning of the function/method (must end in $),
for example if we are trying to find a function like s_xD = function(a, b, c, d, e) {......}
then put functionSignature = /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/

somethingInsideFunction will be regex matching something in the function
for example if we are trying to find a function like s_xD = function(a, b, c, d, e) {...a.Xa&&10!==a.Qb...}
then put somethingInsideFunction = /a\.[$a-zA-Z0-9_]{0,6}&&10!==a\.[$a-zA-Z0-9_]{0,6}/
*/
window.findFunctionInCode = function(code, functionSignature, somethingInsideFunction, logging = false) {
  let functionSignatureSource = functionSignature.source;
  let functionSignatureFlags = functionSignature.flags;//Probably empty string

  /*Check functionSignature ends in $*/
  if (functionSignatureSource[functionSignatureSource.length - 1] !== "$") {
    throw new Error("functionSignature regex should end in $");
  }

  /*Allow line breaks after commas or =. This is bit sketchy, but should be ok as findFunctionInCode is used in a quite limited way*/
  functionSignatureSource.replaceAll(/,|=/g,'$&\\n?');
  functionSignature = new RegExp(functionSignatureSource, functionSignatureFlags);

  /*get the position of somethingInsideFunction*/
  let indexWithinFunction = code.search(somethingInsideFunction);
  if (indexWithinFunction == -1) {
    console.log("%cCouldn't find a match for somethingInsideFunction", "color:red;");
    diagnoseRegexError(code, somethingInsideFunction);
  }

  /*expand outwards from somethingInsideFunction until we get to the function signature, then count brackets
  to find the end of the function*/
  let startIndex = 0;
  for (let i = indexWithinFunction; i >= 0; i--) {
    let startOfCode = code.substring(0, i);
    startIndex = startOfCode.search(functionSignature);
    if (startIndex !== -1) {
      break;
    }
    if (i == 0) {
      throw new Error("Couldn't find function signature");
    }
  }

  let bracketCount = 0;
  let foundFirstBracket = false;
  let endIndex = 0;
  /*Use bracket counting to find the whole function*/
  let codeLength = code.length;
  for (let i = startIndex; i <= codeLength; i++) {
    if (!foundFirstBracket && code[i] == "{") {
      foundFirstBracket = true;
    }

    if (code[i] == "{") {
      bracketCount++;
    }
    if (code[i] == "}") {
      bracketCount--;
    }
    if (foundFirstBracket && bracketCount == 0) {
      endIndex = i;
      break;
    }

    if (i == codeLength) {
      throw new Error("Couldn't pair up brackets");
    }
  }

  let fullFunction = code.substring(startIndex, endIndex + 1);

  /*throw error if fullFunction doesn't contain something inside function - i.e. function signature was wrong*/
  if (fullFunction.search(somethingInsideFunction) === -1) {
    throw new Error("Function signature does not belong to the same function as somethingInsideFunction");
  }

  if (logging) {
    console.log(fullFunction);
  }

  return fullFunction;
}

/*
Same as replace, but throws an error if nothing is changed
*/
window.assertReplace = function(baseText, regex, replacement) {
  if (typeof baseText !== 'string') {
    throw new Error('String argument expected for assertReplace');
  }
  let outputText = baseText.replace(regex, replacement);

  //Throw warning if nothing is replaced
  if (baseText === outputText) {
    diagnoseRegexError(baseText, regex);
  }

  return outputText;
}

/*
Same as replaceAll, but throws an error if nothing is changed
*/
window.assertReplaceAll = function(baseText, regex, replacement) {
  if (typeof baseText !== 'string') {
    throw new Error('String argument expected for assertReplace');
  }
  let outputText = baseText.replaceAll(regex, replacement);

  //Throw warning if nothing is replaced
  if (baseText === outputText) {
    diagnoseRegexError(baseText, regex);
  }

  return outputText;
}

//Alternate way to use assertReplace. Example: code = code.assertReplace('Thing to change', 'New thing');
String.prototype.assertReplace = function(regex, replacement) {
  return assertReplace(this.toString(), regex, replacement);
};

//Same as above for assertReplaceAll.
String.prototype.assertReplaceAll = function(regex, replacement) {
  return assertReplaceAll(this.toString(), regex, replacement);
};

//Also do this for assertMatch (We just have the prototype version for this).
//Same as match, but throws an error if it's null.
String.prototype.assertMatch = function(regex) {
  let output = this.match(regex);

  //Throw error if nothing was found
  if(output === null) {
    diagnoseRegexError(this, regex)
  }
  return output;
}

window.diagnoseRegexError = function(baseText, regex) {  
  if(!(regex instanceof RegExp)) {
    throw new Error('Failed to find match using string argument. No more details available');
  }

  //see if removing line breaks works - in that case we can give a more useful error message
  let oneLineText = baseText.replaceAll(/\n/g,'');
  let res = regex.test(oneLineText);

  //If line breaks don't solve the issue then throw a general error
  if (!res) {
    throw new Error('Failed to find match for regex.');
  }

  //Try to suggest correct regex to use for searching
  let regexSource = regex.source;
  let regexFlags = regex.flags;

  //Look at all the spots where line breaks might occur and try adding \n? there to see if it makes a difference
  //It might be easier to just crudely brute force putting \n? at each possible index?
  for(let breakableChar of ["%","&","\\*","\\+",",","-","\\/",":",";","<","=",">","\\?","{","\\|","}"]) {
    for(let pos = regexSource.indexOf(breakableChar); pos !== -1; pos = regexSource.indexOf(breakableChar, pos + 1)) {
      //Remake the regex with a new line at the candidate position
      let candidateRegexSource = `${regexSource.slice(0,pos + breakableChar.length)}\\n?${regexSource.slice(pos + breakableChar.length)}`;
      let candidateRegex;
      
      try{
        candidateRegex = new RegExp(candidateRegexSource, regexFlags);
      } catch(err) {
        continue;
      }

      //See if the new regex works
      let testReplaceResult = candidateRegex.test(baseText);
      if(testReplaceResult) {
        //Success we found the working regex! Give descriptive error message to user and log suggested regex with new line in correct place
        console.log(`Suggested regex improvement:
${candidateRegex}`);
        throw new Error('Suggested improvement found! Error with line break, failed to find match for regex. See logged output for regex to use instead that should hopefully fix this.');
      }
    }
  }

  throw new Error('Line break error! Failed to failed to find match for regex - most likely caused by a new line break. No suggestions provided');
}

window.appendCodeWithinSnakeModule = function(snakeCode, codeToAdd, addSemicolonAfter) {
  if(addSemicolonAfter) {
    codeToAdd += ';';
  }

  //We could remove the first bit before the pipe symbol in the future. This is just to handle before + after a snake update.
  var newSnakeCode = snakeCode.replace(/}\)\(this\._s\);\n\/\/ Google Inc\.|}\);\n\/\/ Google Inc\./, codeToAdd + '$&');
  return newSnakeCode;
}

//Turns _.abc into _s.abc
window.swapInSnakeGlobal = function(text) {
  return assertReplace(text, /^_\./, '_s.');
}
