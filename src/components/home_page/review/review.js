const listReview = [
    {
        img: "../../src/assets/img/mumbai_india.png",
        loca: 'Mumbai, India',
        title: 'A Wonderful Journey to India',
        content1: 'India is a diverse and fascinating country with a rich history, vibrant culture, and stunning landscapes.',
        content2: 'From the bustling cities like Delhi, Mumbai, and Kolkata, to the serene backwaters of Kerala, India offers a unique and memorable travel experience for all kinds of travelers. The country is also home to many UNESCO World Heritage Sites, such as the Taj Mahal, the ancient city of Hampi, and the Ajanta and Ellora Caves.' 
    },
    {
        img: "../../src/assets/img/nepal.png",
        loca: 'Kathmandu, Nepal',
        title: '11 Best Places to visit in Nepal',
        content1: 'I recently spent two weeks in Nepal and it was one of the most memorable trips of my life. The people were incredibly friendly and welcoming, and I was amazed by the beauty of the natural landscape. The highlight of my trip was trekking in the Himalayas. The views were simply breathtaking and the experience of reaching the Everest Base Camp was truly unforgettable.',
        content2: 'I also spent a day in Chitwan National Park.'
    },
    {
        img: "../../src/assets/img/barca.png",
        loca: 'Barcelona, Spain',
        title: 'A Solo Trip Across Europe',
        content1: 'Europe is a home to stunning natural landscapes like the Swiss Alps, the Norwegian fjords, and the beaches of the Mediterranean coast. The European countries are well-connected through a vast network of trains, making it easy to travel across the continent.',
        content2: 'The art, architecture, and cuisine in each of these cities reflect their unique cultural heritage., are popular tourist attractions, offering visitors a glimpse of the rich history and artistry of these cities.'
    },
    {
        img: "../../src/assets/img/hanoi.jpg",
        loca: "Hanoi, Vietnam",
        title: "A Solo Trip Across Vietnam",
        content1: "Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences. The city is also famous for its vibrant street markets and delicious cuisine.",
        content2: "Popular attractions include the Ho Chi Minh Mausoleum, the Old Quarter, and the beautiful Hoan Kiem Lake, offering visitors a glimpse of the rich history and artistry of the city."
    },
    {
        img: "../../src/assets/img/halong.jpg",
        loca: "Quảng Ninh, Vietnam",
        title: "Exploring Northern Vietnam",
        content1: "Quảng Ninh province is famous for its stunning natural landscapes and cultural richness. It is home to Ha Long Bay, a UNESCO World Heritage site known for its emerald waters and thousands of towering limestone islands topped with rainforests.",
        content2: "Visitors can also explore the vibrant local culture and enjoy fresh seafood delicacies while experiencing the unique beauty of this coastal region."
    },
    {
        img: "../../src/assets/img/ninhbinh.jpg",
        loca: "Ninh Binh, Vietnam",
        title: "Discovering Ninh Binh's Natural Beauty",
        content1: "Ninh Binh is known for its picturesque landscapes, with limestone mountains, lush rice paddies, and winding rivers. It's often referred to as 'Ha Long Bay on land' due to its similar karst formations.",
        content2: "Highlights include the ancient capital Hoa Lu, Tam Coc's stunning river caves, and the Bai Dinh Pagoda complex, offering a blend of history, spirituality, and natural beauty."
    },
    {
        img: "../../src/assets/img/lamdong.jpg",
        loca: "Lam Dong, Vietnam",
        title: "Exploring the Central Highlands",
        content1: "Lam Dong province is known for its cool climate, lush green hills, and picturesque landscapes. It's home to Da Lat, a charming city often called the 'City of Eternal Spring' for its pleasant weather year-round.",
        content2: "Visitors can explore flower gardens, coffee plantations, and waterfalls, and enjoy the unique architecture influenced by French colonialism, making it a popular destination for both nature lovers and architecture enthusiasts."
    },
    {
        img: "../../src/assets/img/phuquoc2.jpg",
        loca: "Phu Quoc, Vietnam",
        title: "Relaxing on Phu Quoc Island",
        content1: "Phu Quoc is Vietnam's largest island, known for its pristine beaches, clear waters, and lush tropical landscapes. It's a popular destination for beach lovers and offers opportunities for snorkeling, diving, and exploring nature reserves.",
        content2: "Visitors can also experience the island's unique culture, enjoy fresh seafood, and explore attractions like Phu Quoc National Park and traditional fishing villages."
    },
    {
        img: "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_130557/20230131075826_DmCIZ/jpg",
        loca: "Can Tho, Vietnam",
        title: "Exploring the Mekong Delta",
        content1: "Can Tho is the largest city in the Mekong Delta region, known for its floating markets, lush rice paddies, and vibrant river life. It's a hub of agricultural activity and cultural richness.",
        content2: "Highlights include Cai Rang Floating Market, Binh Thuy Ancient House, and serene boat trips along the canals, offering insights into the traditional way of life in the delta."
    },
    {
        img: "https://bcp.cdnchinhphu.vn/344443456812359680/2023/5/12/da-nang-beaches-1-16838659816141879075557.jpg",
        loca: "Da Nang, Vietnam",
        title: "Discovering Central Vietnam",
        content1: "Da Nang is a coastal city known for its sandy beaches, Marble Mountains, and unique cultural attractions. It's a vibrant city with a mix of modernity and tradition, offering something for every traveler.",
        content2: "Visitors can explore attractions like Ba Na Hills, My Khe Beach, and the ancient town of Hoi An nearby, known for its well-preserved ancient architecture and rich cultural heritage."
    },
    {
        img: "../../src/assets/img/hoian.jpg",
        loca: "Quang Nam, Vietnam",
        title: "Exploring Ancient Culture",
        content1: "Quang Nam province is known for its rich history, ancient architecture, and cultural heritage. It's home to Hoi An Ancient Town, a UNESCO World Heritage site famous for its well-preserved buildings and lantern-lit streets.",
        content2: "Visitors can also explore My Son Sanctuary, Cham Islands, and traditional villages, experiencing the blend of Vietnamese, Cham, and Chinese influences in the region's culture and architecture."
    },
    {
        img: "../../src/assets/img/hue.png",
        loca: "Hue, Vietnam",
        title: "Exploring Imperial Vietnam",
        content1: "Hue was Vietnam's imperial capital, known for its Citadel, royal tombs, and pagodas. It's a city steeped in history and cultural significance, offering insights into Vietnam's feudal past.",
        content2: "Highlights include the Perfume River, Thien Mu Pagoda, and the Imperial City, where visitors can explore the complex of palaces, temples, and historic architecture."
    },
    {
        img: "../../src/assets/img/nhatrang.jpg",
        loca: "Khanh Hoa, Vietnam",
        title: "Relaxing in Nha Trang",
        content1: "Khanh Hoa province is home to Nha Trang, a coastal city famous for its beautiful beaches, clear waters, and vibrant marine life. It's a popular destination for beachgoers, water sports enthusiasts, and spa lovers.",
        content2: "Visitors can also explore cultural attractions like Po Nagar Cham Towers, visit nearby islands, and indulge in fresh seafood, making it a perfect blend of relaxation and cultural exploration."
    },
    {
        img: "https://cdn.tgdd.vn/Files/2021/06/23/1362550/11-dia-diem-du-lich-ba-vi-dep-cho-ky-nghi-duong-2-ngay-1-dem-202206020935095190.jpeg",
        loca: "Ba Vi National Park, Hanoi, Vietnam",
        title: "Nature Escape in Ba Vi",
        content1: "Ba Vi National Park is a nature lover's paradise near Hanoi, known for its lush greenery, diverse flora and fauna, and scenic landscapes. It's a popular destination for hiking, birdwatching, and enjoying cool mountain air.",
        content2: "Visitors can explore ancient temples, hot springs, and enjoy panoramic views from the park's highest peak, making it an ideal retreat from the bustling city life."
    },
    {
        img: "https://ik.imagekit.io/tvlk/blog/2023/05/chua-yen-tu-3.jpeg?tr=dpr-2,w-675",
        loca: "Yen Tu Mountain, Quảng Ninh, Vietnam",
        title: "Spiritual Journey to Yen Tu",
        content1: "Yen Tu Mountain is a spiritual and cultural site in Quảng Ninh, famous for its ancient pagodas, stunning landscapes, and historical significance as the birthplace of Vietnamese Buddhism. It's a pilgrimage site for Buddhists and a scenic destination for nature lovers.",
        content2: "Visitors can hike up the mountain, visit Truc Lam Zen Monastery, and enjoy panoramic views of the surrounding countryside and coastline."
    },
    {
        img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2022/4/24/1037447/Trang_An.jpeg",
        loca: "Trang An Landscape Complex, Ninh Binh, Vietnam",
        title: "Boat Tour in Trang An",
        content1: "Trang An Landscape Complex is a UNESCO World Heritage site known for its majestic karst landscape, caves, and tranquil rivers. Visitors can take scenic boat tours through limestone caves and explore ancient temples and pagodas scattered throughout the area.",
        content2: "Highlights include the Bai Dinh Pagoda, King Kong filming location, and hiking trails offering panoramic views of the surrounding countryside."
    },
    {
        img: "https://photo-cms-vovworld.zadn.vn/w500/uploaded/vovworld/ecfzyrrtlyr/2016_02_03/thac.jpg",
        loca: "Pongour Waterfall, Lam Dong, Vietnam",
        title: "Chasing Waterfalls in Lam Dong",
        content1: "Pongour Waterfall is one of the most beautiful waterfalls in Lam Dong province, known for its cascading tiers surrounded by lush greenery. It's a peaceful spot for picnics, swimming, and enjoying the natural beauty of the Central Highlands.",
        content2: "Visitors can hike to the top of the waterfall for panoramic views, visit nearby coffee plantations, and immerse themselves in the serene atmosphere of the surrounding countryside."
    },
    {
        img: "https://www.centralcons.vn/wp-content/uploads/2022/04/vinwonders-phu-quoc-vinpearl-theme-parks-46333000.gif",
        loca: "Vinpearl Safari, Phu Quoc, Vietnam",
        title: "Wildlife Adventure in Vinpearl Safari",
        content1: "Vinpearl Safari is a wildlife conservation park on Phu Quoc Island, offering visitors a chance to see a variety of exotic animals in their natural habitats. It's an educational and enjoyable experience for families and wildlife enthusiasts.",
        content2: "Highlights include safari tours, animal feeding sessions, and educational programs aimed at raising awareness about conservation and biodiversity."
    },
    {
        img: "https://evivatour.com/wp-content/uploads/2021/09/Cai-Be-Floating-Market-1000x565.jpg",
        loca: "Cai Rang Floating Market, Can Tho, Vietnam",
        title: "Morning at Cai Rang Market",
        content1: "Cai Rang Floating Market is one of the largest floating markets in the Mekong Delta, known for its bustling atmosphere, colorful boats, and variety of fresh produce and local goods. It's a vibrant cultural experience and a must-visit attraction in Can Tho.",
        content2: "Visitors can take boat tours to explore the market, sample local fruits and delicacies, and witness the traditional way of trading on the river."
    },
    {
        img: "https://ik.imagekit.io/tvlk/blog/2022/09/ban-dao-son-tra-3-1024x550.jpg?tr=dpr-2,w-675",
        loca: "Son Tra Peninsula, Da Nang, Vietnam",
        title: "Nature Retreat on Son Tra",
        content1: "Son Tra Peninsula is a scenic coastal retreat near Da Nang, known for its lush forests, pristine beaches, and diverse wildlife. It's a great destination for eco-tourism, hiking, and enjoying panoramic views of the coastline.",
        content2: "Highlights include Linh Ung Pagoda, Monkey Mountain, and coral reefs offshore, offering opportunities for snorkeling and diving."
    },
    {
        img: "https://www.christravelblog.com/wp-content/uploads/ngg_featured/IMG_5633-copy-vietnam-hoi-an-my-son-temple-day-tour-004-678x381.jpg",
        loca: "My Son Sanctuary, Quang Nam, Vietnam",
        title: "Exploring Champa History",
        content1: "My Son Sanctuary is a UNESCO World Heritage site near Hoi An, known for its ancient Hindu temples and Cham architecture. It's a significant archaeological site that reflects the rich cultural heritage of the Champa Kingdom.",
        content2: "Visitors can explore the temple complex, learn about Cham history and art, and admire the intricate carvings and sculptures that have survived for centuries."
    },
    {
        img: "https://ik.imagekit.io/tvlk/blog/2022/09/kinh-nghiem-du-lich-lang-co-1.jpg?tr=dpr-2,w-675",
        loca: "Lang Co Beach, Hue, Vietnam",
        title: "Relaxing at Lang Co Beach",
        content1: "Lang Co Beach is a pristine stretch of coastline near Hue, known for its turquoise waters, white sandy beaches, and peaceful atmosphere. It's an ideal destination for swimming, sunbathing, and enjoying seafood delicacies.",
        content2: "Visitors can explore nearby fishing villages, take boat trips to Lap An Lagoon, and enjoy stunning views of the Hai Van Pass and surrounding mountains."
    },
    {
        img: "https://statics.vinpearl.com/hon-mun-island-2_1701847633.jpg",
        loca: "Hon Mun Island, Khanh Hoa, Vietnam",
        title: "Marine Adventure at Hon Mun",
        content1: "Hon Mun Island is part of the Hon Mun Marine Protected Area near Nha Trang, known for its vibrant coral reefs, clear waters, and diverse marine life. It's a popular destination for snorkeling, diving, and exploring underwater ecosystems.",
        content2: "Visitors can take boat tours to snorkel or dive, visit floating fish farms, and learn about marine conservation efforts in the area."
    }    
]



export default listReview;


