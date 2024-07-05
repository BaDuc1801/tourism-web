const listStory = [
    {
        img:"../src/assets/img/mumbai_india.png",
        location:"Mumbai, India",
        time:"Feb 27, 2023",
        read:"8 min read",
        title:"A Wonderful Journey to India",
        short:"I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. "
    },
    {
        img:"../src/assets/img/barca.png",
        location:"Barcelona, Spain",
        time:"Feb 27, 2023",
        read:"5 min read",
        title:"A Solo Trip Across Europe",
        short:"I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people."
    },
    {
        img:"../src/assets/img/nepal.png",
        location:"Kathmandu, Nepal",
        time:"Feb 27, 2023",
        read:"6 min read",
        title:"11 Best Places to visit in Nepal",
        short:"It was a beautiful spring morning when I arrived in Kathmandu, the capital city of Nepal. As soon as I stepped out of the airport, I was struck by the vibrant colors, the chaos of the streets."
    },
    {
        img:"../src/assets/img/ukraine.png",
        location:"Prague, Ukraine",
        time:"Feb 27, 2023",
        read:"4 min read",
        title:"The Petrin Hill",
        short:"I visited Prague, the beautiful capital city of the Czech Republic, and one of my favorite places in the city was the Petrin Hill. The Petrin Hill is a green oasis in the heart of Prague."
    },{
        img:"../src/assets/img/hawaii.png",
        location:"Hawaii, United States",
        time:"Feb 27, 2023",
        read:"8 min read",
        title:"The Best Time to visit Hawaii",
        short:"I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. "
    },
    {
        img:"../src/assets/img/rico-us.png",
        location:"Puerto Rico, United States",
        time:"Feb 27, 2023",
        read:"5 min read",
        title:"10 ways to see Puerto Rico on a budget",
        short:"I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people."
    },
    {
        img:"../src/assets/img/texas.png",
        location:"San Antonio, Texas",
        time:"Feb 27, 2023",
        read:"6 min read",
        title:"6 Best Day Trip to San Antonio, Texas",
        short:"It was a beautiful spring morning when I arrived in Kathmandu, the capital city of Nepal. As soon as I stepped out of the airport, I was struck by the vibrant colors, the chaos of the streets."
    },
    {
        img:"../src/assets/img/prague-ukraine.png",
        location:"Prague, Ukraine",
        time:"Feb 27, 2023",
        read:"4 min read",
        title:"5 of the best places to visit as a disabled",
        short:"I visited Prague, the beautiful capital city of the Czech Republic, and one of my favorite places in the city was the Petrin Hill. The Petrin Hill is a green oasis in the heart of Prague."
    },
    {
        img:"../src/assets/img/hungary.png",
        location:"Budapest, Hungary",
        time:"Feb 27, 2023",
        read:"6 min read",
        title:"Fun Visit to Budapest",
        short:"I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. "
    },
    {
        img:"../src/assets/img/greece.png",
        location:"Athens, Greece",
        time:"Feb 27, 2023",
        read:"6 min read",
        title:"How to move around Athens",
        short:"I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people."
    },
    {
        img:"../src/assets/img/ecuado.png",
        location:"Banos Santa, Ecuador",
        time:"Feb 27, 2023",
        read:"6 min read",
        title:"Best Time to visit Ecuador",
        short:"It was a beautiful spring morning when I arrived in Kathmandu, the capital city of Nepal. As soon as I stepped out of the airport, I was struck by the vibrant colors, the chaos of the streets."
    },
    {
        img:"../src/assets/img/barca2.png",
        location:"Barcelona, Spain",
        time:"Feb 27, 2023",
        read:"6 min read",
        title:"Top 15 things not to miss in Barcelona",
        short:"I visited Prague, the beautiful capital city of the Czech Republic, and one of my favorite places in the city was the Petrin Hill. The Petrin Hill is a green oasis in the heart of Prague."
    },
    {
        img: "../src/assets/img/hcm.jpg",
        location: "Ho Chi Minh City, Vietnam",
        time: "Mar 15, 2023",
        read: "7 min read",
        title: "Exploring Ho Chi Minh City",
        short: "I explored Ho Chi Minh City, formerly known as Saigon, and discovered its vibrant street food scene. From pho to banh mi, the flavors of the city captivated my taste buds."
    },
    {
        img: "../../src/assets/img/phoco.jpg",
        location: "Ha Noi, Vietnam",
        time: "May 02, 2023",
        read: "8 min read",
        title: "The Charming Streets of Hanoi",
        short: "Walking through the Old Quarter of Hanoi, I was enchanted by its narrow streets filled with traditional shops and ancient temples. Each corner offered a glimpse into the city's rich history and culture."
    },
    {
        img: "../src/assets/img/haiphong.jpg",
        location: "Hai Phong, Vietnam",
        time: "Apr 18, 2023",
        read: "5 min read",
        title: "Discovering Hai Phong's Hidden Gems",
        short: "In Hai Phong, I stumbled upon the tranquil Tam Bac Lake, where locals gather for morning exercises and tai chi. The peaceful atmosphere was a welcome escape from the bustling city."
    },
    {
        img: "../src/assets/img/danang2.jpg",
        location: "Da Nang, Vietnam",
        time: "Jun 09, 2023",
        read: "6 min read",
        title: "Must-See Attractions in Da Nang",
        short: "Visiting Da Nang, I marveled at the Dragon Bridge illuminated by colorful lights at night. It's a symbol of the city's modernity and vibrant nightlife."
    },
    {
        img: "../src/assets/img/cantho.jpg",
        location: "Can Tho, Vietnam",
        time: "Jul 25, 2023",
        read: "5 min read",
        title: "Exploring Can Tho's Floating Markets",
        short: "Experiencing the bustling Cai Rang Floating Market in Can Tho, I savored fresh fruits and local delicacies while cruising along the Mekong Delta's intricate waterways."
    },
    {
        img: "../src/assets/img/nhatrang2.jpg",
        location: "Nha Trang, Vietnam",
        time: "Aug 14, 2023",
        read: "7 min read",
        title: "Relaxing in Nha Trang's Coastal Beauty",
        short: "Relaxing on the pristine beaches of Nha Trang, I explored the underwater world through snorkeling and discovered colorful coral reefs teeming with marine life."
    },
    {
        img: "../src/assets/img/vungtau.jpg",
        location: "Vung Tau, Vietnam",
        time: "Sep 05, 2023",
        read: "6 min read",
        title: "A Weekend Getaway in Vung Tau",
        short: "Escaping to Vung Tau, I climbed up to the Jesus Christ Statue for panoramic views of the city and the vast South China Sea. It was a perfect spot to watch the sunset."
    },
    {
        img: "../src/assets/img/dalat.jpg",
        location: "Da Lat, Vietnam",
        time: "Oct 19, 2023",
        read: "8 min read",
        title: "Exploring Da Lat's Romantic Charm",
        short: "Exploring Da Lat, the city of eternal spring, I wandered through vibrant flower gardens and admired French colonial architecture that adds to its unique charm."
    },
    {
        img: "../src/assets/img/hue.png",
        location: "Hue, Vietnam",
        time: "Nov 08, 2023",
        read: "7 min read",
        title: "Immersing in Hue's Imperial History",
        short: "In Hue, I explored the majestic Imperial City, where ancient palaces and temples stand as reminders of Vietnam's imperial past. The Perfume River added to the city's serene atmosphere."
    },
    {
        img: "../src/assets/img/phuquoc.jpg",
        location: "Phu Quoc, Vietnam",
        time: "Dec 03, 2023",
        read: "6 min read",
        title: "Adventures in Phu Quoc's Island Paradise",
        short: "Discovering Phu Quoc's pristine beaches and lush jungles, I hiked through Phu Quoc National Park and enjoyed stunning views from its highest peaks."
    },
    {
        "img": "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1688490503/anvrftntreo22dsrerno.webp",
        "location": "Ha Noi, Vietnam",
        "time": "June 10, 2023",
        "read": "7 min read",
        "title": "A Day by Hoan Kiem Lake",
        "short": "Hoan Kiem Lake is not just a scenic spot but a cultural heart of Hanoi. Walking around the lake, I discovered the historical Turtle Tower and the charming Ngoc Son Temple."
    },
    {
        "img": "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1635409391/blog/tzzpgm3z5eou6pn1ueli.webp",
        "location": "Ha Noi, Vietnam",
        "time": "July 15, 2023",
        "read": "9 min read",
        "title": "Visiting Ho Chi Minh Mausoleum",
        "short": "The solemn atmosphere at Ho Chi Minh Mausoleum left a lasting impression. Learning about the life and legacy of Vietnam's beloved leader was an unforgettable experience."
    },
    {
        "img": "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1635409488/blog/t8ge6e8amk8cluhdswy2.webp",
        "location": "Ha Noi, Vietnam",
        "time": "August 05, 2023",
        "read": "6 min read",
        "title": "One Pillar Pagoda: A Unique Structure",
        "short": "The One Pillar Pagoda stands out with its distinctive architecture. Built on a single pillar, this iconic site symbolizes the rich spiritual heritage of Hanoi."
    },
    {
        "img": "https://statics.vinpearl.com/St-Joseph%E2%80%99s-Cathedral-1_1689384586.jpg",
        "location": "Ha Noi, Vietnam",
        "time": "September 20, 2023",
        "read": "7 min read",
        "title": "St. Joseph's Cathedral: A Gothic Masterpiece",
        "short": "With its grand Gothic architecture, St. Joseph's Cathedral is a testament to Hanoi's colonial past. Its striking facade and peaceful interior offer a serene escape in the bustling city."
    },
    {
        "img": "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1688490521/ybwdj450y4oco1ibfrzh.webp",
        "location": "Ha Noi, Vietnam",
        "time": "October 10, 2023",
        "read": "8 min read",
        "title": "Exploring the Tranquility of West Lake",
        "short": "West Lake, the largest lake in Hanoi, provides a tranquil retreat from the city's hustle and bustle. Cycling around the lake, I enjoyed the serene views and vibrant local life."
    },
    {
        "img": "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1635409274/blog/ltw9gs046emmvkfbsvm4.webp",
        "location": "Ha Noi, Vietnam",
        "time": "November 18, 2023",
        "read": "6 min read",
        "title": "Vietnam Museum of Ethnology: A Cultural Journey",
        "short": "At the Vietnam Museum of Ethnology, I delved into the diverse cultures of Vietnam's ethnic groups. The exhibits and artifacts provided a fascinating insight into the country's rich cultural tapestry."
    },
    {
        "img": "https://bieudienthuccanh.com/userfiles/image/ha-noi/2021/cho-dong-xuan/1-hinh-anh-cong-cho-dong-xuan.jpg",
        "location": "Ha Noi, Vietnam",
        "time": "December 25, 2023",
        "read": "5 min read",
        "title": "Dong Xuan Market: A Vibrant Shopping Experience",
        "short": "Dong Xuan Market, bustling with activity, offered a true taste of Hanoi's local life. From fresh produce to unique souvenirs, it was a sensory overload in the best way possible."
    },   
    {
        "img": "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1688490641/w9vabbau8oeabyx2cudk.webp",
        "location": "Ha Noi, Vietnam",
        "time": "January 14, 2024",
        "read": "7 min read",
        "title": "Long Bien Bridge: A Historic Landmark",
        "short": "Walking across Long Bien Bridge, I felt the weight of history beneath my feet. This iconic structure not only connects two parts of the city but also bridges past and present."
    }   
]

export default listStory