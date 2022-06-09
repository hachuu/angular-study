import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'element';

  countries = [{"cntryCd":"AF","cntryNm":"Afghanistan","cntryNmKr":"아프가니스탄","cntryPart":"Afghanistan","continent":"Middle East"},{"cntryCd":"AX","cntryNm":"Aland Islands","cntryNmKr":"올란드 제도","cntryPart":"Others","continent":"Europe"},{"cntryCd":"AL","cntryNm":"Albania","cntryNmKr":"알바니아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"DZ","cntryNm":"Algeria","cntryNmKr":"알제리","cntryPart":"Algeria","continent":"Africa"},{"cntryCd":"AS","cntryNm":"American Samoa","cntryNmKr":"아메리칸 사모아","cntryPart":"Others","continent":"Oceania"},{"cntryCd":"AD","cntryNm":"Andorra","cntryNmKr":"안도라","cntryPart":"Others","continent":"Europe"},{"cntryCd":"AO","cntryNm":"Angola","cntryNmKr":"앙골라","cntryPart":"Angola","continent":"Africa"},{"cntryCd":"AI","cntryNm":"Anguilla","cntryNmKr":"앵귈라","cntryPart":"Others","continent":"Europe"},{"cntryCd":"AQ","cntryNm":"Antarctica","cntryNmKr":"남극 대륙","cntryPart":"Others","continent":"Others"},{"cntryCd":"AG","cntryNm":"Antigua and Barbuda","cntryNmKr":"앤티가바부다","cntryPart":"Others","continent":"South America"},{"cntryCd":"AR","cntryNm":"Argentina","cntryNmKr":"아르헨티나","cntryPart":"Argentina","continent":"South America"},{"cntryCd":"AM","cntryNm":"Armenia","cntryNmKr":"아르메니아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"AW","cntryNm":"Aruba","cntryNmKr":"아루바","cntryPart":"Others","continent":"South America"},{"cntryCd":"AU","cntryNm":"Australia","cntryNmKr":"호주","cntryPart":"Australia","continent":"Oceania"},{"cntryCd":"AT","cntryNm":"Austria","cntryNmKr":"오스트리아","cntryPart":"Austria","continent":"Europe"},{"cntryCd":"AZ","cntryNm":"Azerbaijan","cntryNmKr":"아제르바이잔","cntryPart":"Others","continent":"Asia"},{"cntryCd":"BS","cntryNm":"Bahamas","cntryNmKr":"바하마","cntryPart":"Others","continent":"South America"},{"cntryCd":"BH","cntryNm":"Bahrain","cntryNmKr":"바레인","cntryPart":"Others","continent":"Middle East"},{"cntryCd":"BD","cntryNm":"Bangladesh","cntryNmKr":"방글라데시","cntryPart":"Bangladesh","continent":"Asia"},{"cntryCd":"BB","cntryNm":"Barbados","cntryNmKr":"바베이도스","cntryPart":"Others","continent":"South America"},{"cntryCd":"BY","cntryNm":"Belarus","cntryNmKr":"벨라루스","cntryPart":"Others","continent":"Europe"},{"cntryCd":"BE","cntryNm":"Belgium","cntryNmKr":"벨기에","cntryPart":"Belgium","continent":"Europe"},{"cntryCd":"BZ","cntryNm":"Belize","cntryNmKr":"벨리즈","cntryPart":"Others","continent":"South America"},{"cntryCd":"BJ","cntryNm":"Benin","cntryNmKr":"베냉","cntryPart":"Others","continent":"Africa"},{"cntryCd":"BM","cntryNm":"Bermuda","cntryNmKr":"버뮤다","cntryPart":"Others","continent":"South America"},{"cntryCd":"BT","cntryNm":"Bhutan","cntryNmKr":"부탄","cntryPart":"Others","continent":"Asia"},{"cntryCd":"BO","cntryNm":"Bolivia","cntryNmKr":"볼리비아","cntryPart":"Others","continent":"South America"},{"cntryCd":"BQ","cntryNm":"Bonaire, Sint Eustatius and Saba","cntryNmKr":"영령 안탁","cntryPart":"Others","continent":"South America"},{"cntryCd":"BA","cntryNm":"Bosnia and Herzegovina","cntryNmKr":"보스니아-헤르체고비나","cntryPart":"Others","continent":"Europe"},{"cntryCd":"BW","cntryNm":"Botswana","cntryNmKr":"보츠와나","cntryPart":"Others","continent":"Africa"},{"cntryCd":"BR","cntryNm":"Brazil","cntryNmKr":"브라질","cntryPart":"Brazil","continent":"South America"},{"cntryCd":"IO","cntryNm":"British Indian Ocean Territory","cntryNmKr":"영령 인도양","cntryPart":"Others","continent":"Others"},{"cntryCd":"BN","cntryNm":"Brunei","cntryNmKr":"브루나이","cntryPart":"Others","continent":"South America"},{"cntryCd":"BG","cntryNm":"Bulgaria","cntryNmKr":"불가리아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"BF","cntryNm":"Burkina Faso","cntryNmKr":"부르키나파소","cntryPart":"Others","continent":"Africa"},{"cntryCd":"BI","cntryNm":"Burundi","cntryNmKr":"부룬디","cntryPart":"Others","continent":"Africa"},{"cntryCd":"KH","cntryNm":"Cambodia","cntryNmKr":"캄보디아","cntryPart":"Cambodia","continent":"Asia"},{"cntryCd":"CM","cntryNm":"Cameroon","cntryNmKr":"카메룬","cntryPart":"Cameroon","continent":"Africa"},{"cntryCd":"CA","cntryNm":"Canada","cntryNmKr":"캐나다","cntryPart":"Canada","continent":"North America"},{"cntryCd":"CV","cntryNm":"Cape Verde","cntryNmKr":"카보 베르데","cntryPart":"Others","continent":"Africa"},{"cntryCd":"KY","cntryNm":"Cayman Islands","cntryNmKr":"영령 캐이맨 군도","cntryPart":"Others","continent":"South America"},{"cntryCd":"CF","cntryNm":"Central African Republic","cntryNmKr":"중앙아프리카","cntryPart":"Others","continent":"Africa"},{"cntryCd":"TD","cntryNm":"Chad","cntryNmKr":"차드","cntryPart":"Others","continent":"Africa"},{"cntryCd":"CL","cntryNm":"Chile","cntryNmKr":"칠레","cntryPart":"Chile","continent":"South America"},{"cntryCd":"CN","cntryNm":"China","cntryNmKr":"중국","cntryPart":"China","continent":"Asia"},{"cntryCd":"CX","cntryNm":"Christmas Island","cntryNmKr":"크리스마스 아일랜드","cntryPart":"Others","continent":"Asia"},{"cntryCd":"CC","cntryNm":"Cocos (Keeling) Islands","cntryNmKr":"코코스 군도","cntryPart":"Others","continent":"Asia"},{"cntryCd":"CO","cntryNm":"Colombia","cntryNmKr":"콜롬비아","cntryPart":"Colombia","continent":"South America"},{"cntryCd":"KM","cntryNm":"Comoros","cntryNmKr":"코모로","cntryPart":"Others","continent":"Africa"},{"cntryCd":"CG","cntryNm":"Congo","cntryNmKr":"콩고","cntryPart":"Congo","continent":"Africa"},{"cntryCd":"CD","cntryNm":"Congo, DR","cntryNmKr":"콩고 민주공화국","cntryPart":"Others","continent":"Africa"},{"cntryCd":"CK","cntryNm":"Cook Islands","cntryNmKr":"쿡 아일랜드","cntryPart":"Others","continent":"Oceania"},{"cntryCd":"CR","cntryNm":"Costa Rica","cntryNmKr":"코스타리카","cntryPart":"Costa Rica","continent":"South America"},{"cntryCd":"CI","cntryNm":"Cote d'Ivoire","cntryNmKr":"코트디부아르","cntryPart":"Others","continent":"Africa"},{"cntryCd":"HR","cntryNm":"Croatia","cntryNmKr":"크로아티아","cntryPart":"Croatia","continent":"Europe"},{"cntryCd":"CU","cntryNm":"Cuba","cntryNmKr":"쿠바","cntryPart":"Cuba","continent":"South America"},{"cntryCd":"CW","cntryNm":"Curacao","cntryNmKr":"큐라소","cntryPart":"Others","continent":"South America"},{"cntryCd":"CY","cntryNm":"Cyprus","cntryNmKr":"키프로스","cntryPart":"Others","continent":"Europe"},{"cntryCd":"CZ","cntryNm":"Czech","cntryNmKr":"체코","cntryPart":"Others","continent":"Europe"},{"cntryCd":"DK","cntryNm":"Denmark","cntryNmKr":"덴마크","cntryPart":"Denmark","continent":"Europe"},{"cntryCd":"DJ","cntryNm":"Djibouti","cntryNmKr":"지부티","cntryPart":"Others","continent":"Africa"},{"cntryCd":"DM","cntryNm":"Dominica","cntryNmKr":"도미니카","cntryPart":"Others","continent":"South America"},{"cntryCd":"DO","cntryNm":"Dominican Republic","cntryNmKr":"도미니카 공화국","cntryPart":"Dominican Republic","continent":"South America"},{"cntryCd":"EC","cntryNm":"Ecuador","cntryNmKr":"에콰도르","cntryPart":"Ecuador","continent":"South America"},{"cntryCd":"EG","cntryNm":"Egypt","cntryNmKr":"이집트","cntryPart":"Egypt","continent":"Africa"},{"cntryCd":"SV","cntryNm":"El Salvador","cntryNmKr":"엘살바도르","cntryPart":"El Salvador","continent":"South America"},{"cntryCd":"GQ","cntryNm":"Equatorial Guinea","cntryNmKr":"적도 기니","cntryPart":"Others","continent":"Africa"},{"cntryCd":"ER","cntryNm":"Eritrea","cntryNmKr":"에리트레아","cntryPart":"Others","continent":"Africa"},{"cntryCd":"EE","cntryNm":"Estonia","cntryNmKr":"에스토니아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"ET","cntryNm":"Ethiopia","cntryNmKr":"에티오피아","cntryPart":"Ethiopia","continent":"Africa"},{"cntryCd":"FK","cntryNm":"Falkland Islands (Malvinas)","cntryNmKr":"포클랜드 군도","cntryPart":"Others","continent":"South America"},{"cntryCd":"FO","cntryNm":"Faroe Islands","cntryNmKr":"파로에 군도","cntryPart":"Others","continent":"Europe"},{"cntryCd":"FJ","cntryNm":"Fiji","cntryNmKr":"피지","cntryPart":"Fiji","continent":"Oceania"},{"cntryCd":"FI","cntryNm":"Finland","cntryNmKr":"핀란드","cntryPart":"Finland","continent":"Europe"},{"cntryCd":"FR","cntryNm":"France","cntryNmKr":"프랑스","cntryPart":"France","continent":"Europe"},{"cntryCd":"GF","cntryNm":"French Guiana","cntryNmKr":"불령 가이아나","cntryPart":"Others","continent":"South America"},{"cntryCd":"PF","cntryNm":"French Polynesia","cntryNmKr":"불령 폴리네시아","cntryPart":"Others","continent":"Others"},{"cntryCd":"TF","cntryNm":"French Southern Territories","cntryNmKr":"불령 남부지역","cntryPart":"Others","continent":"Others"},{"cntryCd":"GA","cntryNm":"Gabon","cntryNmKr":"가봉","cntryPart":"Gabon","continent":"Africa"},{"cntryCd":"GM","cntryNm":"Gambia","cntryNmKr":"감비아","cntryPart":"Gambia","continent":"Africa"},{"cntryCd":"GE","cntryNm":"Georgia","cntryNmKr":"조지아","cntryPart":"Others","continent":"Asia"},{"cntryCd":"DE","cntryNm":"Germany","cntryNmKr":"독일","cntryPart":"Germany","continent":"Europe"},{"cntryCd":"GH","cntryNm":"Ghana","cntryNmKr":"가나","cntryPart":"Ghana","continent":"Africa"},{"cntryCd":"GI","cntryNm":"Gibraltar","cntryNmKr":"지브롤터","cntryPart":"Others","continent":"Europe"},{"cntryCd":"GR","cntryNm":"Greece","cntryNmKr":"그리스","cntryPart":"Greece","continent":"Europe"},{"cntryCd":"GL","cntryNm":"Greenland","cntryNmKr":"그린랜드","cntryPart":"Greenland","continent":"others"},{"cntryCd":"GD","cntryNm":"Grenada","cntryNmKr":"그레나다","cntryPart":"Others","continent":"South America"},{"cntryCd":"GP","cntryNm":"Guadeloupe","cntryNmKr":"과들루프","cntryPart":"Others","continent":"South America"},{"cntryCd":"GU","cntryNm":"Guam","cntryNmKr":"괌","cntryPart":"Guam","continent":"Others"},{"cntryCd":"GT","cntryNm":"Guatemala","cntryNmKr":"과테말라","cntryPart":"Guatemala","continent":"South America"},{"cntryCd":"GG","cntryNm":"Guernsey","cntryNmKr":"건지","cntryPart":"Others","continent":"Europe"},{"cntryCd":"GN","cntryNm":"Guinea","cntryNmKr":"기니","cntryPart":"Guinea","continent":"Africa"},{"cntryCd":"GW","cntryNm":"Guinea-Bissau","cntryNmKr":"기네비소","cntryPart":"Others","continent":"Africa"},{"cntryCd":"GY","cntryNm":"Guyana","cntryNmKr":"가이아나","cntryPart":"Others","continent":"South America"},{"cntryCd":"HT","cntryNm":"Haiti","cntryNmKr":"아이티","cntryPart":"Haiti","continent":"South America"},{"cntryCd":"HM","cntryNm":"Heard Island and McDonald Islands","cntryNmKr":"허드 앤 맥도날드 군도","cntryPart":"Others","continent":"Others"},{"cntryCd":"VA","cntryNm":"Holy See","cntryNmKr":"교황청","cntryPart":"Others","continent":"Europe"},{"cntryCd":"HN","cntryNm":"Honduras","cntryNmKr":"온두라스","cntryPart":"Honduras","continent":"South America"},{"cntryCd":"HK","cntryNm":"Hong Kong","cntryNmKr":"홍콩","cntryPart":"Hong Kong ","continent":"Asia"},{"cntryCd":"HU","cntryNm":"Hungary","cntryNmKr":"헝가리","cntryPart":"Hungary","continent":"Europe"},{"cntryCd":"IS","cntryNm":"Iceland","cntryNmKr":"아이슬란드","cntryPart":"Iceland","continent":"others"},{"cntryCd":"IN","cntryNm":"India","cntryNmKr":"인도(인디아)","cntryPart":"India","continent":"India"},{"cntryCd":"ID","cntryNm":"Indonesia","cntryNmKr":"인도네시아","cntryPart":"Indonesia","continent":"Asia"},{"cntryCd":"XZ","cntryNm":"Installations in International Waters","cntryNmKr":null,"cntryPart":"Others","continent":"Europe"},{"cntryCd":"IR","cntryNm":"Iran","cntryNmKr":"이란","cntryPart":"Iran, Islamic Republic of","continent":"Middle East"},{"cntryCd":"IQ","cntryNm":"Iraq","cntryNmKr":"이라크","cntryPart":"Iraq","continent":"Middle East"},{"cntryCd":"IE","cntryNm":"Ireland","cntryNmKr":"아일랜드","cntryPart":"Ireland","continent":"Europe"},{"cntryCd":"IM","cntryNm":"Isle of Man","cntryNmKr":"맨섬","cntryPart":"Others","continent":"Europe"},{"cntryCd":"IL","cntryNm":"Israel","cntryNmKr":"이스라엘","cntryPart":"Israel","continent":"Middle East"},{"cntryCd":"IT","cntryNm":"Italy","cntryNmKr":"이탈리아","cntryPart":"Italy","continent":"Europe"},{"cntryCd":"JM","cntryNm":"Jamaica","cntryNmKr":"자메이카","cntryPart":"Jamaica","continent":"South America"},{"cntryCd":"JP","cntryNm":"Japan","cntryNmKr":"일본","cntryPart":"Japan","continent":"Asia"},{"cntryCd":"JE","cntryNm":"Jersey","cntryNmKr":"저지","cntryPart":"Others","continent":"Europe"},{"cntryCd":"JO","cntryNm":"Jordan","cntryNmKr":"요르단","cntryPart":"Jordan","continent":"Middle East"},{"cntryCd":"KZ","cntryNm":"Kazakhstan","cntryNmKr":"카자흐스탄","cntryPart":"Others","continent":"Asia"},{"cntryCd":"KE","cntryNm":"Kenya","cntryNmKr":"케냐","cntryPart":"Kenya","continent":"Africa"},{"cntryCd":"KI","cntryNm":"Kiribati","cntryNmKr":"키리바시","cntryPart":"Others","continent":"Oceania"},{"cntryCd":"KR","cntryNm":"Korea, Republic of","cntryNmKr":"대한민국","cntryPart":"Korea","continent":"Asia"},{"cntryCd":"KW","cntryNm":"Kuwait","cntryNmKr":"쿠웨이트","cntryPart":"Kuwait","continent":"Middle East"},{"cntryCd":"KG","cntryNm":"Kyrgyzstan","cntryNmKr":"키르기스스탄","cntryPart":"Others","continent":"Asia"},{"cntryCd":"LA","cntryNm":"Laos","cntryNmKr":"라오스","cntryPart":"Others","continent":"Asia"},{"cntryCd":"LV","cntryNm":"Latvia","cntryNmKr":"라트비아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"LB","cntryNm":"Lebanon","cntryNmKr":"레바논","cntryPart":"Lebanon","continent":"Middle East"},{"cntryCd":"LS","cntryNm":"Lesotho","cntryNmKr":"레소토","cntryPart":"Others","continent":"Africa"},{"cntryCd":"LR","cntryNm":"Liberia","cntryNmKr":"라이베리아","cntryPart":"Liberia","continent":"Africa"},{"cntryCd":"LY","cntryNm":"Libya","cntryNmKr":"리비아","cntryPart":"Libya","continent":"Africa"},{"cntryCd":"LI","cntryNm":"Liechtenstein","cntryNmKr":"리히텐슈타인","cntryPart":"Others","continent":"Europe"},{"cntryCd":"LT","cntryNm":"Lithuania","cntryNmKr":"리투아니아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"LU","cntryNm":"Luxembourg","cntryNmKr":"룩셈부르크","cntryPart":"Others","continent":"Europe"},{"cntryCd":"MO","cntryNm":"Macao","cntryNmKr":"마카오","cntryPart":"Macao","continent":"Asia"},{"cntryCd":"MK","cntryNm":"Macedonia","cntryNmKr":"마케도니아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"MG","cntryNm":"Madagascar","cntryNmKr":"마다가스카르","cntryPart":"Others","continent":"Africa"},{"cntryCd":"MW","cntryNm":"Malawi","cntryNmKr":"말라위","cntryPart":"Others","continent":"Africa"},{"cntryCd":"MY","cntryNm":"Malaysia","cntryNmKr":"말레이시아","cntryPart":"Malaysia","continent":"Asia"},{"cntryCd":"MV","cntryNm":"Maldives","cntryNmKr":"몰디브","cntryPart":"Others","continent":"Others"},{"cntryCd":"ML","cntryNm":"Mali","cntryNmKr":"말리","cntryPart":"Others","continent":"Africa"},{"cntryCd":"MT","cntryNm":"Malta","cntryNmKr":"몰타","cntryPart":"Others","continent":"Africa"},{"cntryCd":"MH","cntryNm":"Marshall Islands","cntryNmKr":"마셜제도","cntryPart":"Others","continent":"Asia"},{"cntryCd":"MQ","cntryNm":"Martinique","cntryNmKr":"마르티니크","cntryPart":"Others","continent":"South America"},{"cntryCd":"MR","cntryNm":"Mauritania","cntryNmKr":"모리타니","cntryPart":"Others","continent":"Africa"},{"cntryCd":"MU","cntryNm":"Mauritius","cntryNmKr":"모리셔스","cntryPart":"Others","continent":"Africa"},{"cntryCd":"YT","cntryNm":"Mayotte","cntryNmKr":"마요트","cntryPart":"Others","continent":"Africa"},{"cntryCd":"MX","cntryNm":"Mexico","cntryNmKr":"멕시코","cntryPart":"Mexico","continent":"South America"},{"cntryCd":"FM","cntryNm":"Micronesia","cntryNmKr":"미크로네시아","cntryPart":"Others","continent":"Asia"},{"cntryCd":"MD","cntryNm":"Moldova","cntryNmKr":"몰도바","cntryPart":"Others","continent":"Asia"},{"cntryCd":"MC","cntryNm":"Monaco","cntryNmKr":"모나코","cntryPart":"Monaco","continent":"Europe"},{"cntryCd":"MN","cntryNm":"Mongolia","cntryNmKr":"몽골","cntryPart":"Others","continent":"Asia"},{"cntryCd":"ME","cntryNm":"Montenegro","cntryNmKr":"몬테네그로","cntryPart":"Others","continent":"Europe"},{"cntryCd":"MS","cntryNm":"Montserrat","cntryNmKr":"몬트세랫","cntryPart":"Others","continent":"South America"},{"cntryCd":"MA","cntryNm":"Morocco","cntryNmKr":"모로코","cntryPart":"Others","continent":"Africa"},{"cntryCd":"MZ","cntryNm":"Mozambique","cntryNmKr":"모잠비크","cntryPart":"Mozambique","continent":"Africa"},{"cntryCd":"MM","cntryNm":"Myanmar","cntryNmKr":"미얀마","cntryPart":"Myanmar","continent":"Asia"},{"cntryCd":"NA","cntryNm":"Namibia","cntryNmKr":"나미비아","cntryPart":"Namibia","continent":"Africa"},{"cntryCd":"NR","cntryNm":"Nauru","cntryNmKr":"나우루","cntryPart":"Others","continent":"Oceania"},{"cntryCd":"NP","cntryNm":"Nepal","cntryNmKr":"네팔","cntryPart":"Others","continent":"Asia"},{"cntryCd":"NL","cntryNm":"Netherlands","cntryNmKr":"네덜란드","cntryPart":"Netherlands","continent":"Europe"},{"cntryCd":"NC","cntryNm":"New Caledonia","cntryNmKr":"뉴 칼레도니아","cntryPart":"New Caledonia","continent":"Oceania"},{"cntryCd":"NZ","cntryNm":"New Zealand","cntryNmKr":"뉴질랜드","cntryPart":"New Zealand","continent":"Oceania"},{"cntryCd":"NI","cntryNm":"Nicaragua","cntryNmKr":"니카라과","cntryPart":"Others","continent":"South America"},{"cntryCd":"NE","cntryNm":"Niger","cntryNmKr":"니제르","cntryPart":"Others","continent":"Africa"},{"cntryCd":"NG","cntryNm":"Nigeria","cntryNmKr":"나이지리아","cntryPart":"Nigeria","continent":"Africa"},{"cntryCd":"NU","cntryNm":"Niue","cntryNmKr":"니우에","cntryPart":"Others","continent":"Oceania"},{"cntryCd":"NF","cntryNm":"Norfolk Island","cntryNmKr":"노폴크 아일랜드","cntryPart":"Others","continent":"Oceania"},{"cntryCd":"MP","cntryNm":"Northern Mariana Islands","cntryNmKr":"북마리아나 군도","cntryPart":"Others","continent":"Asia"},{"cntryCd":"NO","cntryNm":"Norway","cntryNmKr":"노르웨이","cntryPart":"Norway","continent":"Europe"},{"cntryCd":"OM","cntryNm":"Oman","cntryNmKr":"오만","cntryPart":"Oman","continent":"Middle East"},{"cntryCd":"PK","cntryNm":"Pakistan","cntryNmKr":"파키스탄","cntryPart":"Pakistan","continent":"Middle East"},{"cntryCd":"PW","cntryNm":"Palau","cntryNmKr":"팔라우","cntryPart":"Others","continent":"Asia"},{"cntryCd":"PS","cntryNm":"Palestine","cntryNmKr":"팔레스타인 해방기구","cntryPart":"Others","continent":"Middle East"},{"cntryCd":"PA","cntryNm":"Panama","cntryNmKr":"파나마","cntryPart":"Panama","continent":"South America"},{"cntryCd":"PG","cntryNm":"Papua New Guinea","cntryNmKr":"파푸아 뉴기니","cntryPart":"Others","continent":"Asia"},{"cntryCd":"PY","cntryNm":"Paraguay","cntryNmKr":"파라과이","cntryPart":"Others","continent":"South America"},{"cntryCd":"PE","cntryNm":"Peru","cntryNmKr":"페루","cntryPart":"Peru","continent":"South America"},{"cntryCd":"PH","cntryNm":"Philippines","cntryNmKr":"필리핀","cntryPart":"Philippines","continent":"Asia"},{"cntryCd":"PN","cntryNm":"Pitcairn","cntryNmKr":"핏케언섬","cntryPart":"Others","continent":"Others"},{"cntryCd":"PL","cntryNm":"Poland","cntryNmKr":"폴란드","cntryPart":"Poland","continent":"Europe"},{"cntryCd":"PT","cntryNm":"Portugal","cntryNmKr":"포르투갈","cntryPart":"Portugal","continent":"Europe"},{"cntryCd":"PR","cntryNm":"Puerto Rico","cntryNmKr":"푸에르토리코","cntryPart":"Others","continent":"South America"},{"cntryCd":"QA","cntryNm":"Qatar","cntryNmKr":"카타르","cntryPart":"Qatar","continent":"Middle East"},{"cntryCd":"RE","cntryNm":"Reunion","cntryNmKr":"불령 리유니온,코모도 제도","cntryPart":"Others","continent":"Africa"},{"cntryCd":"RO","cntryNm":"Romania","cntryNmKr":"루마니아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"RU","cntryNm":"Russia","cntryNmKr":"러시아","cntryPart":"Russian Federation","continent":"Russian Federation"},{"cntryCd":"RW","cntryNm":"Rwanda","cntryNmKr":"르완다","cntryPart":"Others","continent":"Africa"},{"cntryCd":"BL","cntryNm":"Saint Barthelemy","cntryNmKr":"세인트 바르탤르미","cntryPart":"Others","continent":"South America"},{"cntryCd":"SH","cntryNm":"Saint Helena","cntryNmKr":"세인트 헬레나","cntryPart":"Others","continent":"Others"},{"cntryCd":"KN","cntryNm":"Saint Kitts and Nevis","cntryNmKr":"세인트 키츠 네비스","cntryPart":"Others","continent":"South America"},{"cntryCd":"LC","cntryNm":"Saint Lucia","cntryNmKr":"세인트 루시아","cntryPart":"Others","continent":"South America"},{"cntryCd":"MF","cntryNm":"Saint Martin","cntryNmKr":"세인트 마틴","cntryPart":"Others","continent":"South America"},{"cntryCd":"PM","cntryNm":"Saint Pierre and Miquelon","cntryNmKr":"세인트 피레 미켈론","cntryPart":"Others","continent":"Others"},{"cntryCd":"VC","cntryNm":"Saint Vincent and the Grenadines","cntryNmKr":"세인트 빈센트 그레나딘","cntryPart":"Others","continent":"South America"},{"cntryCd":"WS","cntryNm":"Samoa","cntryNmKr":"사모아","cntryPart":"Others","continent":"Others"},{"cntryCd":"SM","cntryNm":"San Marino","cntryNmKr":"산마리노","cntryPart":"Others","continent":"Europe"},{"cntryCd":"ST","cntryNm":"Sao Tome and Principe","cntryNmKr":"상투메 프린스페","cntryPart":"Others","continent":"Africa"},{"cntryCd":"SA","cntryNm":"Saudi Arabia","cntryNmKr":"사우디아라비아","cntryPart":"Saudi Arabia","continent":"Middle East"},{"cntryCd":"SN","cntryNm":"Senegal","cntryNmKr":"세네갈","cntryPart":"Senegal","continent":"Africa"},{"cntryCd":"RS","cntryNm":"Serbia","cntryNmKr":"세르비아공화국","cntryPart":"Others","continent":"Europe"},{"cntryCd":"SC","cntryNm":"Seychelles","cntryNmKr":"세이셸","cntryPart":"Others","continent":"Others"},{"cntryCd":"SL","cntryNm":"Sierra Leone","cntryNmKr":"시에라리온","cntryPart":"Others","continent":"Africa"},{"cntryCd":"SG","cntryNm":"Singapore","cntryNmKr":"싱가포르","cntryPart":"Singapore","continent":"Asia"},{"cntryCd":"SX","cntryNm":"Sint Maarten","cntryNmKr":"신트마르턴","cntryPart":"Others","continent":"South America"},{"cntryCd":"SK","cntryNm":"Slovakia","cntryNmKr":"슬로바키아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"SI","cntryNm":"Slovenia","cntryNmKr":"슬로베니아","cntryPart":"Others","continent":"Europe"},{"cntryCd":"SB","cntryNm":"Solomon Islands","cntryNmKr":"솔로몬 군도","cntryPart":"Others","continent":"Others"},{"cntryCd":"SO","cntryNm":"Somalia","cntryNmKr":"소말리아","cntryPart":"Somalia","continent":"Africa"},{"cntryCd":"ZA","cntryNm":"South Africa","cntryNmKr":"남아프리카 공화국","cntryPart":"South Africa","continent":"Africa"},{"cntryCd":"GS","cntryNm":"South Georgia and the South Sandwich Islands","cntryNmKr":"남조지아 & 남샌드위치 군도","cntryPart":"Others","continent":"Others"},{"cntryCd":"SS","cntryNm":"South Sudan","cntryNmKr":"사우스수단","cntryPart":"Others","continent":"Africa"},{"cntryCd":"ES","cntryNm":"Spain","cntryNmKr":"스페인","cntryPart":"Spain","continent":"Europe"},{"cntryCd":"LK","cntryNm":"Sri Lanka","cntryNmKr":"스리랑카","cntryPart":"Sri Lanka","continent":"Asia"},{"cntryCd":"SD","cntryNm":"Sudan","cntryNmKr":"수단","cntryPart":"Sudan","continent":"Africa"},{"cntryCd":"SR","cntryNm":"Suriname","cntryNmKr":"수리남","cntryPart":"Others","continent":"South America"},{"cntryCd":"SJ","cntryNm":"Svalbard and Jan Mayen","cntryNmKr":"스발바르 제도","cntryPart":"Others","continent":"Others"},{"cntryCd":"SZ","cntryNm":"Swaziland","cntryNmKr":"스와질란드","cntryPart":"Others","continent":"Africa"},{"cntryCd":"SE","cntryNm":"Sweden","cntryNmKr":"스웨덴","cntryPart":"Sweden","continent":"Europe"},{"cntryCd":"CH","cntryNm":"Switzerland","cntryNmKr":"스위스","cntryPart":"Switzerland","continent":"Europe"},{"cntryCd":"SY","cntryNm":"Syria","cntryNmKr":"시리아","cntryPart":"Syrian Arab Republic","continent":"Middle East"},{"cntryCd":"TW","cntryNm":"Taiwan","cntryNmKr":"대만","cntryPart":"Taiwan","continent":"Asia"},{"cntryCd":"TJ","cntryNm":"Tajikistan","cntryNmKr":"타지키스탄","cntryPart":"Others","continent":"Asia"},{"cntryCd":"TZ","cntryNm":"Tanzania","cntryNmKr":"탄자니아","cntryPart":"Tanzania, United Republic of","continent":"Africa"},{"cntryCd":"TH","cntryNm":"Thailand","cntryNmKr":"태국","cntryPart":"Thailand","continent":"Asia"},{"cntryCd":"TL","cntryNm":"Timor-Leste","cntryNmKr":"동티모르","cntryPart":"Others","continent":"Asia"},{"cntryCd":"TG","cntryNm":"Togo","cntryNmKr":"토고","cntryPart":"Togo","continent":"Africa"},{"cntryCd":"TK","cntryNm":"Tokelau","cntryNmKr":"토켈라우","cntryPart":"Others","continent":"Others"},{"cntryCd":"TO","cntryNm":"Tonga","cntryNmKr":"통가","cntryPart":"Others","continent":"Others"},{"cntryCd":"TT","cntryNm":"Trinidad and Tobago","cntryNmKr":"트리니다드 토바고","cntryPart":"Others","continent":"South America"},{"cntryCd":"TN","cntryNm":"Tunisia","cntryNmKr":"튀니지","cntryPart":"Tunisia","continent":"Africa"},{"cntryCd":"TR","cntryNm":"Turkey","cntryNmKr":"터키","cntryPart":"Turkey","continent":"Europe"},{"cntryCd":"TM","cntryNm":"Turkmenistan","cntryNmKr":"투르크메니스탄","cntryPart":"Others","continent":"Asia"},{"cntryCd":"TC","cntryNm":"Turks and Caicos Islands","cntryNmKr":"투르크 & 카이코스 군도","cntryPart":"Others","continent":"South America"},{"cntryCd":"TV","cntryNm":"Tuvalu","cntryNmKr":"투발루","cntryPart":"Others","continent":"Others"},{"cntryCd":"UG","cntryNm":"Uganda","cntryNmKr":"우간다","cntryPart":"Others","continent":"Africa"},{"cntryCd":"UA","cntryNm":"Ukraine","cntryNmKr":"우크라이나","cntryPart":"Others","continent":"Europe"},{"cntryCd":"AE","cntryNm":"United Arab Emirates","cntryNmKr":"아랍에미리트 연합","cntryPart":"United Arab Emirates","continent":"Middle East"},{"cntryCd":"GB","cntryNm":"United Kingdom","cntryNmKr":"영국","cntryPart":"England","continent":"Europe"},{"cntryCd":"US","cntryNm":"United States","cntryNmKr":"미국","cntryPart":"United States","continent":"North America"},{"cntryCd":"UM","cntryNm":"United States Minor Outlying Islands","cntryNmKr":"마이너 아우틀링 합중국 군도","cntryPart":"Others","continent":"Others"},{"cntryCd":"UY","cntryNm":"Uruguay","cntryNmKr":"우루과이","cntryPart":"Uruguay","continent":"South America"},{"cntryCd":"UZ","cntryNm":"Uzbekistan","cntryNmKr":"우즈베키스탄","cntryPart":"Others","continent":"Asia"},{"cntryCd":"VU","cntryNm":"Vanuatu","cntryNmKr":"바누아투","cntryPart":"Others","continent":"Others"},{"cntryCd":"VE","cntryNm":"Venezuela","cntryNmKr":"베네수엘라","cntryPart":"Venezuela","continent":"South America"},{"cntryCd":"VN","cntryNm":"Vietnam","cntryNmKr":"베트남","cntryPart":"Viet Nam","continent":"Asia"},{"cntryCd":"VG","cntryNm":"Virgin Islands, British","cntryNmKr":"영령 버진아일랜드","cntryPart":"Others","continent":"South America"},{"cntryCd":"VI","cntryNm":"Virgin Islands, U.S.","cntryNmKr":"미령 버진군도","cntryPart":"Others","continent":"South America"},{"cntryCd":"WF","cntryNm":"Wallis and Futuna","cntryNmKr":"왈라스 & 퓨투나","cntryPart":"Others","continent":"Others"},{"cntryCd":"EH","cntryNm":"Western Sahara","cntryNmKr":"서사하라","cntryPart":"Others","continent":"Africa"},{"cntryCd":"YE","cntryNm":"Yemen","cntryNmKr":"예멘","cntryPart":"Yemen","continent":"Middle East"},{"cntryCd":"ZM","cntryNm":"Zambia","cntryNmKr":"잠비아","cntryPart":"Others","continent":"Africa"},{"cntryCd":"ZW","cntryNm":"Zimbabwe","cntryNmKr":"짐바브웨","cntryPart":"Others","continent":"Africa"}];
}
