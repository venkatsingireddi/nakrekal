/*
	*	Original script by: Venkat Reddy Singi Reddy
	*	venkatreddy@tvarana.com
	*	Version 3.0
	*	Modified by: Venkat Reddy Singi Reddy

	*	Description:
	*	Inserts Countries and/or Visa's as Dropdown List
	*	How to Use:

		In Head section:
		<script type= "text/javascript" src = "countries.js"></script>
		In Body Section:
		Country:   <select onchange="print_state('visa',this.selectedIndex);" id="country" name ="country"></select>
		<br />
		Visa status: <select name ="visa" id ="visa"></select>
		<script language="javascript">print_country("country");</script>	

	*
	*	License: OpenSource, Permission for modificatin Granted, KEEP AUTHOR INFORMATION INTACT
	*	Aurthor's Website: http://www.tvarana.com
	*
*/

var country_arr = new Array("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Arctic Ocean", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Islands", "Atlantic Ocean", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Baltic Sea", "Baker Island", "Bangladesh", "Barbados", "Bassas da India", "Belarus", "Belgium", "Belize", "Benin","Bermuda","Bhutan", "Bolivia", "Borneo", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos Islands", "Colombia", "Comoros", "Cook Islands", "Coral Sea Islands", "Costa Rica", "Cote dIvoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indian Ocean", "Indonesia", "Iran", "Iraq","Ireland", "Isle of Man", "Israel", "Italy", "Jamaica","Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kerguelen Archipelago", "Kingman Reef", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mediterranean Sea", "Mexico", "Micronesia", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Navassa Island", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "North Sea", "Northern Mariana Islands", "Norway", "Oman", "Pacific Ocean", "Pakistan", "Palau", "Palmyra Atoll", "Panama", "Papua New Guinea", "Paracel Islands", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of the Congo", "Reunion", "Romania", "Ross Sea", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "Southern Ocean", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Tasman Sea", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tromelin Island", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Kingdom", "United Arab Emirates", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands", "Wake Island", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Zambia", "Zimbabwe");

var s_a = new Array();
s_a[0]="";
s_a[1]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[2]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[3]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[4]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[5]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[6]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[7]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[8]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[9]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[10]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[11]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[12]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[13]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[14]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[15]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[16]="Visitor visa/evisitor visa | Medical treatment | Work and Holiday | Working holiday visa | Investor retirement | Special program | Special category- NZ citizen | Special   category-NZ citizen family (temp.) | Crew Travel authority | Bridging visa -A/B/C/D | Student guardian | Temporary work(skilled)-457|Temporary work(short /long stay) | Temporary work (International relations) | Temporary work (Entertainment) | Employer Nominated scheme | Regional sponsored employer scheme | Business talent (PR) visa | Distinguished talent visa | Business innovation and invst. (PR) | Business innovation and invst.(prov) | Skilled Independent migrant -PR | Skilled nominated state or relative -PR | Skilled regional (prov.) state or relative | Skilled recognized graduate -476 | Temporary graduate-485 | Business owner or Investor | State sponsored Business owner or Investor | Super yacht crew/Maritime crew | Child visa/Adoption visa | Carer visa | Parent visa/Contributory Parent visa | Aged dependent relative | Remaining relative/Orphan relative | Former resident/Resident return visa | Partner visa/Prospective marriage visa | Protection visa | Refugee visa | Global Special Humanitarian | In-country special humanitarian | Emergency rescue/woman at risk | Citizen";
s_a[17]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[18]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[19]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[20]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[21]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[22]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[23]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[24]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[25]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[26]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[27]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[28]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[29]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[30]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[31]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[32]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[33]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[34]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[35]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[36]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[37]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[38]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[39]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[40]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[41]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[42]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[43]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[44]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[45]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[46]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[47]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[48]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
// <!-- -->
s_a[49]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[50]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[51]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[52]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[53]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[54]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[55]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[56]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[57]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[58]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[59]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[60]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[61]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[62]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
// <!-- -->
s_a[63]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[64]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[65]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[66]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[67]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[68]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[69]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[70]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[71]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[72]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[73]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[74]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[75]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[76]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[77]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[78]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[79]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[80]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[81]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[82]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[83]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[84]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[85]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[86]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[87]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[88]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[89]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[90]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[91]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[92]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[93]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[94]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[95]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[96]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[97]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[98]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[99]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[100]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[101]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[102]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[103]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[104]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[105]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[106]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[107]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[108]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[109]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[110]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[111]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[112]="Not Applicable | H1B Visa Holder | Australia PR Holder | Canada PR Holder | Germany Jobseeker Visa Holder | US Green Card Holder | Hong Kong Resident Permit Holder | Danish Green Card Holder | Quebec PR Holder | Citizen";
s_a[113]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[114]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[115]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[116]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[117]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[118]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[119]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[120]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[121]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[122]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[123]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[124]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[125]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[126]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[127]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[128]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[129]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[130]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[131]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[132]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[133]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[134]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[135]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[136]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[137]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[138]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[139]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[140]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[141]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[142]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[143]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[144]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[145]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[146]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[147]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[148]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[149]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[150]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[151]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[152]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[153]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[154]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[155]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[156]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[157]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[158]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[159]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[160]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[161]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[162]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[163]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[164]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[165]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[166]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[167]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[168]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[169]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[170]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[171]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[172]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[173]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[174]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[175]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[176]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[177]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[178]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[179]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[180]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[181]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[182]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[183]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[184]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[185]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[186]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[187]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[188]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[189]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[190]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[191]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[192]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[193]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[194]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[195]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[196]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[197]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[198]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[199]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[200]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[201]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[202]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[203]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[204]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[205]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[206]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[207]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[208]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[209]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[210]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[211]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[212]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[213]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[214]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[215]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[216]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[217]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[218]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[219]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[220]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[221]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[222]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[223]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[224]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[225]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[226]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[227]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[228]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[229]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[230]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[231]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[232]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[233]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[234]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[235]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[236]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[237]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[238]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[239]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[240]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[241]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[242]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[243]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[244]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[245]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[246]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[247]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[248]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[249]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[250]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[251]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[252]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[253]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[254]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[255]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[256]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[257]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[258]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[259]="Student visa | Tier 1 Extension (FLR) | Tier 1 Extension (ILR) | SettlementVisa | Domestic Worker Visa | Tier 1 Dependent | Visit Visa | Tourist Visa | Entrepreneur Visa | Sole Representative Visa | Student Visa Extension | Finance   Visa | Citizen";
s_a[260]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[261]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[262]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[263]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[264]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[265]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[266]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[267]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[268]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[269]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[270]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[271]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[272]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[273]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";
s_a[274]="Student visa | Tourist Visa | Family visit visa | General Visit | Business visit | Student Dependent | Work Visa | Work dependent Visa | Citizen/PR Dependent | TR Dependent | Citizen";

function print_country(country_id){
	// given the id of the <select> tag of Domicile country as function argument, it inserts <option> tags
	//if(i==112){ option_str.options[i].selected=true;	}
	var option_str = document.getElementById(country_id);
	option_str.length=0;
	option_str.options[0] = new Option('--Select Country--','');
	option_str.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		option_str.options[option_str.length] = new Option(country_arr[i],country_arr[i]);
		
	}
}

function print_visa(visa_id, visa_index){
	//given the id of the <select> tag of  Visa  as function argument, it inserts <option> tags
	var option_str = document.getElementById(visa_id);
	option_str.length=0;	
	//option_str.options[0] = new Option('--Select--','');
	option_str.selectedIndex = 0;
	var visa_arr = s_a[visa_index].split("|");
	for (var i=0; i<visa_arr.length; i++) {
		option_str.options[option_str.length] = new Option(visa_arr[i],visa_arr[i]);
	}
}
