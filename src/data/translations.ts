export interface TranslationPhrase{
    english:string;
    translation:string;
    pronunciation: string;
}

export type TranslationCategory ={
    [categoryName: string]: TranslationPhrase[];
};

export type TranslationData={
    [languageCode: string]: TranslationCategory;
};

export const translations: TranslationData = {
    Kannada:{
        Greetings:[
            {
                english: "Hello",
                translation: "ನಮಸ್ಕಾರ",
                pronunciation: "namaskāra"
            },
            {
                english: "Goodbye",
                translation: "ವಿದಾಯ",
                pronunciation: "vidāya"
            },
            {
                english: "Thank you",
                translation: "ಧನ್ಯವಾದಗಳು",
                pronunciation: "dhanyavādagaḷu"
            },
            {
                english: "Please",
                translation: "ದಯವಿಟ್ಟು",
                pronunciation: "dayaviṭṭu"
            },
            {
                english: "Yes",
                translation: "ಹೌದು",
                pronunciation: "haudu"
            },
            {
                english: "No",
                translation: "ಇಲ್ಲ",
                pronunciation: "illa"
            },
            {
                english: "How are you?",
                translation: "ನೀವು ಹೇಗಿದ್ದೀರಿ?",
                pronunciation: "nīvu hēgiddīri?"
            },
            {
                english: "Good morning",
                translation: "ಶುಭೋದಯ",
                pronunciation: "śubhōdaya"
            },
            {
                english: "Good night",
                translation: "ಶುಭ ರಾತ್ರಿ",
                pronunciation: "śubha rātri"
            }


        ],
        CommonPhrases:[
            {
                english: "What is your name?",
                translation: "ನಿಮ್ಮ ಹೆಸರು ಏನು?",
                pronunciation: "nimma hesaru ēnu?"
            },
            {
                english: "My name is...",
                translation: "ನನ್ನ ಹೆಸರು...",
                pronunciation: "nanna hesaru..."
            },
            {
                english: "I don't understand",
                translation: "ನಾನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತಿಲ್ಲ",
                pronunciation: "nānu arthamāḍikoḷḷuttilla"
            },
            {
                english: "Can you help me?",
                translation: "ನೀವು ನನಗೆ ಸಹಾಯ ಮಾಡಬಹುದೇ?",
                pronunciation: "nīvu nanage sahāya māḍabahudē?"
            },
            {
                english: "Where is the restroom?",
                translation: "ಶೌಚಾಲಯ ಎಲ್ಲಿದೆ?",
                pronunciation: "śaucālaya ellide?"
            },
            {
                english: "How much does this cost?",
                translation: "ಇದು ಎಷ್ಟು ಬೆಲೆ?",
                pronunciation: "idu eṣṭu bele?"
            },
         
        ],
        Directions:[
            {
                english: "Turn left",
                translation: "ಎಡಕ್ಕೆ ತಿರುಗಿ",
                pronunciation: "eḍakke tirugi"
            },
            {
                english: "Turn right",
                translation: "ಬಲಕ್ಕೆ ತಿರುಗಿ",
                pronunciation: "balakke tirugi"
            },
            {
                english: "Go straight",
                translation: "ಸಿಡಿಲಾಗಿ ಹೋಗಿ",
                pronunciation: "siḍilāgi hōgi"
            },
            {
                english: "Stop here",
                translation: "ಇಲ್ಲಿ ನಿಲ್ಲಿ",
                pronunciation: "illi nilli"
            },
           
        ],
    FoodAndDrink:[
            {
                english: "I would like to order",
                translation: "ನಾನು ಆರ್ಡರ್ ಮಾಡಬೇಕಾಗಿದೆ",
                pronunciation: "nānu āṛḍar māḍabēkāgide"
            },  
            {
                english: "What do you recommend?",
                translation: "ನೀವು ಏನು ಶಿಫಾರಸು ಮಾಡುತ್ತೀರಿ?",
                pronunciation: "nīvu ēnu śiphārasu māḍuttīri?"
            },
            {
                english: "Is this vegetarian?",
                translation: "ಇದು ಸಸ್ಯಾಹಾರಿ ಇದೆಯೇ?",
                pronunciation: "idu sasyāhāri ideyē?"
            },
            {
                english: "I am allergic to...",
                translation: "ನಾನು ... ಗೆ ಅಲರ್ಜಿಕ್",
                pronunciation: "nānu ... ge alarjik"
            },
            {
                english: "Can I have the bill, please?",
                translation: "ದಯವಿಟ್ಟು ಬಿಲ್ ಕೊಡಬಹುದು?",
                pronunciation: "dayaviṭṭu bill koḍabahudu?"
            },
        ],
        Emergency:[
            {                english: "Call the police",
                translation: "ಪೊಲೀಸರಿಗೆ ಕರೆ ಮಾಡಿ", 
                pronunciation: "polīsarige kare māḍi"
            },
            {
                english: "I need a doctor",
                translation: "ನನಗೆ ವೈದ್ಯರ ಅಗತ್ಯವಿದೆ",
                pronunciation: "nanage vaidya ara agatyavide"
            },
            {
                english: "Help!",
                translation: "ಸಹಾಯ!",
                pronunciation: "sahāya!"
            },
            {
                english: "Where is the nearest hospital?",
                translation: "ಎಲ್ಲಿದೆ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ?",
                pronunciation: "ellide hattirada āspatre?"
            },
            {
                english: "I lost my passport",
                translation: "ನಾನು ನನ್ನ ಪಾಸ್‌ಪೋರ್ಟ್ ಕಳೆದುಕೊಂಡಿದ್ದೇನೆ",
                pronunciation: "nānu nanna pāspōrṭ kaḷedoṇḍiddēne"
            },
        ]
 },
 Telugu:{
    Greetings:[
        {
            english: "Hello",
            translation: "నమస్కారం",
            pronunciation: "namaskāraṁ"
        },
        {
            english: "Goodbye",
            translation: "విదాయ్",
            pronunciation: "vidāya"
        },
        {
            english: "Thank you",
            translation: "ధన్యవాదాలు",
            pronunciation: "dhanyavādālu"
        },
        {
            english: "Please",
            translation: "దయచేసి",
            pronunciation: "dayacēsi"
        },
        {
            english: "Yes",
            translation: "అవును",
            pronunciation: "avunu"
        },
        {
            english: "No",
            translation: "కాదు",
            pronunciation: "kādu"
        },
        {
            english: "How are you?",
            translation: "మీరు ఎలా ఉన్నారు?",
            pronunciation: "mīru ēlā unnāru?"
        },
        {
            english: "Good morning",
            translation: "శుభోదయం",
            pronunciation: "śubhōdayaṁ"
        },
        {
            english: "Good night",
            translation: "శుభ రాత్రి",
            pronunciation: "śubha rātri"
        }
    ],
    CommonPhrases:[
        {
            english: "What is your name?",
            translation: "మీ పేరు ఏమిటి?",
            pronunciation: "mī pēru ēmiṭi?"
        },
        {
            english: "My name is...",
            translation: "నా పేరు...",
            pronunciation: "nā pēru..."
        },
        {
            english: "I don't understand",
            translation: "నాకు అర్థం కావడం లేదు",
            pronunciation: "nāku arthaṁ kāvaḍaṁ lēdu"
        },
        {
            english: "Can you help me?",
            translation: "మీరు నాకు సహాయం చేయగలరా?",
            pronunciation: "mīru nāku sahāyaṁ cēyagalārā?"
        },
        {
            english: "Where is the restroom?",
            translation: "శౌచాలయం ఎక్కడ ఉంది?",
            pronunciation: "śaucālayam ekkaḍa undi?"
        },
        {
            english: "How much does this cost?",
            translation: "ఇది ఎంత ధర?",
            pronunciation: "idi entha dhara?"
        }
    ],
    Directions:[
        {
            english: "Turn left",
            translation: "ఎడమకు తిప్పండి",
            pronunciation: "eḍamaku tippaṇḍi"
        },
        {
            english: "Turn right",
            translation: "కుడికి తిప్పండి",
            pronunciation: "kuḍiki tippaṇḍi"
        },
        {
            english: "Go straight",
            translation: "సూటిగా వెళ్లండి",
            pronunciation: "sūṭigā veḷḷaṇḍi"
        },
        {
            english: "Stop here",
            translation: "ఇక్కడ ఆపండి",
            pronunciation: "ikkada āpaṇḍi"
        }
    ],
    FoodAndDrink:[
        {
            english: "I would like to order",
            translation: "నేను ఆర్డర్ చేయాలనుకుంటున్నాను",       
            pronunciation: "nēnu āṛḍar cēyālanukuṇṭunnānu"
        },
        {   
            english: "What do you recommend?",
            translation: "మీరు ఏమి సిఫార్సు చేస్తారు?",
            pronunciation: "mīru ēmi siphārsu cēstāru?"
        },
        {
            english: "Is this vegetarian?",
            translation: "ఇది శాకాహారమా?",
            pronunciation: "idi śākāhārama?"
        },
        {
            english: "I am allergic to...",
            translation: "నాకు ... కు అలర్జీ ఉంది",
            pronunciation: "nāku ... ku alarjī undi"
        },
        {
            english: "Can I have the bill, please?",
            translation: "దయచేసి బిల్ ఇవ్వగలరా?",
            pronunciation: "dayacēsi bil ivvagalārā?"
        }
    ],
    Emergency:[ 
        {
            english: "Call the police",
            translation: "పోలీసులను పిలవండి",
            pronunciation: "pōlīsulanu pilavaṇḍi"
        },
        {
            english: "I need a doctor",
            translation: "నాకు డాక్టర్ అవసరం",
            pronunciation: "nāku ḍākṭar avasaraṁ"
        },
        {
            english: "Help!",
            translation: "సహాయం!",
            pronunciation: "sahāyaṁ!"
        },
        {
            english: "Where is the nearest hospital?",
            translation: "ఎక్కడ సమీప ఆసుపత్రి ఉంది?",
            pronunciation: "ekkaḍa samīpa āsupatri undi?"
        },
        {
            english: "I lost my passport",
            translation: "నేను నా పాస్‌పోర్ట్ కోల్పోయాను",
            pronunciation: "nēnu nā pāspōrṭ kōlpōyānu"
        }
    ],
},
Hindi:{
    Greetings:[
        {
            english: "Hello",
            translation: "नमस्ते",
            pronunciation: "namaste"
        },
        {
            english: "Goodbye",
            translation: "अलविदा",
            pronunciation: "alvida"
        },
        {
            english: "Thank you",
            translation: "धन्यवाद",
            pronunciation: "dhanyavad"
        },
        {
            english: "Please",
            translation: "कृपया",
            pronunciation: "kripya"
        },
        {
            english: "Yes",
            translation: "हाँ",
            pronunciation: "haan"
        },
        {
            english: "No",
            translation: "नहीं",
            pronunciation: "nahi"
        },
        {
            english: "How are you?",
            translation: "आप कैसे हैं?",
            pronunciation: "aap kaise hain?"
        },
        {
            english: "Good morning",
            translation: "सुप्रभात",
            pronunciation: "suprabhat"
        },
        {
            english: "Good night",
            translation: "शुभ रात्रि",
            pronunciation: "shubh raatri"
        }
    ],
    CommonPhrases:[
        {
            english: "What is your name?",
            translation: "आपका नाम क्या है?",
            pronunciation: "aapka naam kya hai?"
        },
        {
            english: "My name is...",
            translation: "मेरा नाम...",
            pronunciation: "mera naam..."
        },
        {
            english: "I don't understand",
            translation: "मुझे समझ नहीं आता",
            pronunciation: "mujhe samajh nahi aata"
        },
    
    
        {   
            english: "Can you help me?",
            translation: "क्या आप मेरी मदद कर सकते हैं?",
            pronunciation: "kya aap meri madad kar sakte hain?"
        },
        {
            english: "Where is the restroom?",
            translation: "शौचालय कहाँ है?",
            pronunciation: "shauchalay kahaan hai?"
        },
        {
            english: "How much does this cost?",
            translation: "इसकी कीमत कितनी है?",
            pronunciation: "iski keemat kitni hai?"
        },
    ],
    Directions:[    
        
        {
            english: "Turn left",
            translation: "बाएँ मुड़ें",
            pronunciation: "baayein muden"
        },
        {
            english: "Turn right",
            translation: "दाएँ मुड़ें",
            pronunciation: "daayein muden"
        },
        {
            english: "Go straight",
            translation: "सिधे चलें",
            pronunciation: "sidhe chalein"
        },
        {
            english: "Stop here",
            translation: "यहाँ रुकें",
            pronunciation: "yahaan ruken"
        },
        {
            english: "Go back",
            translation: "पीछे जाएँ",
            pronunciation: "peeche jaayein"
        }
    ],
    FoodAndDrink:[
        {
            english: "I would like to order",
            translation: "मैं ऑर्डर करना चाहूँगा",  
            pronunciation: "main order karna chahunga"
        },
        {
            english: "What do you recommend?",
            translation: "आप क्या सिफारिश करते हैं?",
            pronunciation: "aap kya sifarish karte hain?"
        },
        {
            english: "Is this vegetarian?",
            translation: "क्या यह शाकाहारी है?",
            pronunciation: "kya yeh shakahari hai?"
        },
        {
            english: "I am allergic to...",
            translation: "मुझे ... से एलर्जी है",
            pronunciation: "mujhe ... se allergy hai"
        },
        {
            english: "Can I have the bill, please?",
            translation: "क्या मुझे बिल मिल सकता है?",
            pronunciation: "kya mujhe bill mil sakta hai?"
        }
    ],
    Emergency:[
        {
            english: "Call the police",
            translation: "पुलिस को बुलाएँ",
            pronunciation: "police ko bulaayein"
        },
        {
            english: "I need a doctor",
            translation: "मुझे डॉक्टर की जरूरत है",
            pronunciation: "mujhe doctor ki zaroorat hai"
        },
        {
            english: "Help!",
            translation: "मदद!",
            pronunciation: "madad!"
        },
        {
            english: "Where is the nearest hospital?",
            translation: "नजदीकी अस्पताल कहाँ है?",
            pronunciation: "najdeeki aspataal kahaan hai?"
        },
        {
            english: "I lost my passport",
            translation: "मैंने अपना पासपोर्ट खो दिया है",
            pronunciation: "maine apna passport kho diya hai"
        }
    ],
},
Tamil:{
    Greetings:[
        {
            english: "Hello",
            translation: "வணக்கம்",
            pronunciation: "vaṇakkam"
        },
        {
            english: "Goodbye",
            translation: "பிரியாவிடை",
            pronunciation: "priyāviṭai"
        },
        {
            english: "Thank you",
            translation: "நன்றி",
            pronunciation: "naṉṟi"
        },
        {
            english: "Please",
            translation: "தயவு செய்து",
            pronunciation: "dayavu ceytu"
        },
        {
            english: "Yes",
            translation: "ஆம்",
            pronunciation: "ām"
        },
        {
            english: "No",
            translation: "இல்லை",
            pronunciation: "illai"
        },
        {
            english: "How are you?",
            translation: "நீங்கள் எப்படி இருக்கிறீர்கள்?",
            pronunciation: "nīṅkaḷ eppaṭi irukkiṟīrkaḷ?"
        },
        {
            english: "Good morning",
            translation: "காலை வணக்கம்",
            pronunciation: "kālai vaṇakkam"
        },
        {
            english: "Good night",
            translation: "இரவு வணக்கம்",
            pronunciation: "iravu vaṇakkam"
        }
    ],
    CommonPhrases:[
        {
            english: "What is your name?",
            translation: "உங்கள் பெயர் என்ன?",
            pronunciation: "uṅkaḷ peyar eṉṉa?"
        },
        {
            english: "My name is...",
            translation: "என் பெயர்...",
            pronunciation: "eṉ peyar..."
        },
        {
            english: "I don't understand",
            translation: "எனக்கு புரியவில்லை",
            pronunciation: "eṉakku puriyavillai"
        },
        {
            english: "Can you help me?",
            translation: "நீங்கள் எனக்கு உதவ முடியுமா?",
            pronunciation: "nīṅkaḷ eṉakku utava muṭiyumā?"
        },
        {
            english: "Where is the restroom?",
            translation: "சௌக்கிய அறை எங்கு உள்ளது?",
            pronunciation: "caukiya aṟai eṅku uḷḷatu?"
        },
        {
            english: "How much does this cost?",
            translation: "இதன் விலை எவ்வளவு?",
            pronunciation: "itaṉ vilai evvaḷavu?"
        }
    ],
    Directions:[
        {
            english: "Turn left",
            translation: "இடது திரும்பவும்",
            pronunciation: "iṭatu tirumpavum"
        },
        {
            english: "Turn right",
            translation: "வலது திரும்பவும்",
            pronunciation: "valatu tirumpavum"
        },
        {
            english: "Go straight",
            translation: "நேராக செல்லவும்",
            pronunciation: "nērāka cellavum"
        },
        {
            english: "Stop here",
            translation: "இங்கே நிறுத்தவும்",
            pronunciation: "iṅkē niṟuttavum"
        }
    ],
    FoodAndDrink:[
        {
            english: "I would like to order",
            translation: "நான் ஆர்டர் செய்ய விரும்புகிறேன்", 
            pronunciation: "nāṉ ārḍar ceyya virumpugiṟēṉ"
        },
        {
            english: "What do you recommend?",
            translation: "நீங்கள் என்ன பரிந்துரைக்கிறீர்கள்?",
            pronunciation: "nīṅkaḷ eṉṉa parinturaikkiṟīrkaḷ?"
        },
        {
            english: "Is this vegetarian?",
            translation: "இது சைவ உணவா?",
            pronunciation: "itu caiva uṇavā?"
        },
        {
            english: "I am allergic to...",
            translation: "எனக்கு ...க்கு அலர்ஜி உள்ளது",
            pronunciation: "eṉakku ...kku alarji uḷḷatu"
        },
        {
            english: "Can I have the bill, please?",
            translation: "தயவு செய்து பில் கொடுக்க முடியுமா?",
            pronunciation: "dayavu ceytu bil koṭukka muṭiyumā?"
        }
    ],
    Emergency:[ 
        {
            english: "Call the police",
            translation: "போலீசாரை அழைக்கவும்",
            pronunciation: "pōlīsārai aḻaikkavum"
        },
        {
            english: "I need a doctor",
            translation: "எனக்கு மருத்துவர் தேவை",
            pronunciation: "eṉakku maruttuvar tēvai"
        },
        {
            english: "Help!",
            translation: "உதவி!",
            pronunciation: "utavi!"
        },
        {
            english: "Where is the nearest hospital?",
            translation: "அடுத்த மருத்துவமனை எங்கு உள்ளது?",
            pronunciation: "aṭutta maruttuvamaṉai eṅku uḷḷatu?"
        },
        {
            english: "I lost my passport",
            translation: "நான் என் பாஸ்போர்ட் இழந்துவிட்டேன்",
            pronunciation: "nāṉ eṉ pāspōrṭ iḻantuvittēṉ"
        }
    ],
},
Malayalam:{
    Greetings:[
        {
            english: "Hello",
            translation: "നമസ്കാരം",
            pronunciation: "namaskāraṁ"
        },
        {
            english: "Goodbye",
            translation: "വിട",
            pronunciation: "vida"
        },
        {
            english: "Thank you",
            translation: "നന്ദി",
            pronunciation: "nandi"
        },
        {
            english: "Please",
            translation: "ദയവായി",
            pronunciation: "dayavāyi"
        },
        {
            english: "Yes",
            translation: "അതെ",
            pronunciation: "athe"
        },
        {
            english: "No",
            translation: "ഇല്ല",
            pronunciation: "illa"
        },
        {
            english: "How are you?",
            translation: "സുഖമാണോ?",
            pronunciation: "sukhamaano?"
        },
        {
            english: "Good morning",
            translation: "ശുഭോദയം",
            pronunciation: "śubhōdayaṁ"
        },
        {
            english: "Good night",
            translation: "ശുഭ രാത്രി",
            pronunciation: "śubha rātri"
        }
    ],
    CommonPhrases:[
        {
            english: "What is your name?",
            translation: "നിന്റെ പേര് എന്താണ്?",
            pronunciation: "ninte pēru entāṇu?"
        },
        {
            english: "My name is...",
            translation: "എന്റെ പേര്...",
            pronunciation: "ente pēru..."
        },
        {
            english: "I don't understand",
            translation: "എനിക്ക് മനസ്സിലായില്ല",
            pronunciation: "enikk manassilāyilla"
        },
        {
            english: "Can you help me?",
            translation: "നിങ്ങൾ എനിക്ക് സഹായിക്കാമോ?",
            pronunciation: "niṅṅaḷ enikk sahāyikkāmō?"
        },
        {
            english: "Where is the restroom?",
            translation: "ശൗചാലയം എവിടെ?",
            pronunciation: "śaucālayam eviṭe?"
        },
        {
            english: "How much does this cost?",
            translation: "ഇതിന്റെ വില എത്ര?",
            pronunciation: "itinte vila ethra?"
        }
    ],
    Directions:[
        {
            english: "Turn left",
            translation: "ഇടത്തേക്ക് തിരിയുക",
            pronunciation: "iḍatteyk tiriyuka"
        },
        {
            english: "Turn right",
            translation: "വലത്തേക്ക് തിരിയുക",
            pronunciation: "valatteyk tiriyuka"
        },
        {
            english: "Go straight",
            translation: "സിഡിലായി പോവുക",
            pronunciation: "siḍilāyi pōvuka"
        },
        {
            english: "Stop here",
            translation: "ഇവിടെ നിർത്തുക",
            pronunciation: "iviṭe nirthuka"
        }
    ],
    FoodAndDrink:[
        {
            english: "I would like to order",
            translation: "ഞാൻ ഓർഡർ ചെയ്യാൻ ആഗ്രഹിക്കുന്നു",   
            pronunciation: "ñān ōrḍar ceyyān āgrahikkunnu"
        },
        {
            english: "What do you recommend?",
            translation: "നിങ്ങൾ എന്ത് ശുപാർശ ചെയ്യുന്നു?",
            pronunciation: "niṅṅaḷ enthu śupārśa ceyyunnu?"
        },
        {
            english: "Is this vegetarian?",
            translation: "ഇത് സസ്യാഹാരമാണോ?",
            pronunciation: "ithu sasyāhāramāṇō?"
        },
        {
            english: "I am allergic to...",
            translation: "എനിക്ക് ... ന് അലർജി ഉണ്ട്",
            pronunciation: "enikk ... n alarji uṇṭu"
        },
        {
            english: "Can I have the bill, please?",
            translation: "ദയവായി ബിൽ തരാമോ?",
            pronunciation: "dayavāyi bil tharāmō?"
        }
    ],
    Emergency:[
        {
            english: "Call the police",
            translation: "പോലീസിനെ വിളിക്കുക",
            pronunciation: "pōlīsine viḷikkuka"
        },
        {
            english: "I need a doctor",
            translation: "എനിക്ക് ഡോക്ടർ വേണം",
            pronunciation: "enikk ḍōkṭar vēṇam"
        },
        {
            english: "Help!",
            translation: "സഹായം!",
            pronunciation: "sahāyaṁ!"
        },
        {
            english: "Where is the nearest hospital?",
            translation: "ഏറ്റവും അടുത്ത ആശുപത്രി എവിടെ?",
            pronunciation: "ēṭṭavum aṭutta āspatri eviṭe?"
        },
        {
            english: "I lost my passport",
            translation: "ഞാൻ എന്റെ പാസ്‌പോർട്ട് നഷ്ടപ്പെട്ടു",
            pronunciation: "ñān ente pāspōrṭ naṣṭappēṟṟu"
        }
    ],
},
};