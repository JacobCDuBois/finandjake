// import first from './imageAssets/firstdate.JPG'
// import shark from './imageAssets/shark.JPG'
const GalleryData = [
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/firstdate.JPG'),
        text:"June 6, 2021 - this image is from one of our first dates, where we hiked and talked for hours at Ledges in CVNP, a trail that connects to the wedding venue!"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/grandfatherMtn.jpg'),
        text:"July 2, 2021 - We arrived to the Grayson Highlands a little bit early and to kill time we drove further south to Grandfather Mountain on the Virginia North Carolina border which was cold and covered in fog"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/wildhorses.jpg'),
        text:"July 2, 2021 - Due to our shared love of the outdoors and adventure we went on a July Fourth trip to the Grayson Highlands in Virginia where Fiona was introduced to some wild ponies"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/sunflowers.jpg'),
        text:"September 25, 2021 - Another one of our early dates together where we spent the day hiking at Cuyahoga and I surprised Fiona with a visit to the Prayers from Maria field of Hope in Avon Ohio before she was to leave for Oxford, OH "
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/buttermilkfalls.jpg'),
        text:"September 25, 2021 - Another one of our early dates together where we spent the day hiking at Cuyahoga including a hike around Buttermilk Falls"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/ollie.jpg'),
        text:"August 15, 2021 - Here is Jake with Fiona's family cat, Ollie, who despite his cat allergy insists on getting the cat as close to his face as possible. Few things are more predictable than Jake's need for antihistamines upon arrival to the Macke house."
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/goingaway.jpg'),
        text:"August 15, 2021 - Even though we met while at John Carroll, Fiona transferred a semester later and before she left for Oxford, OH her family threw a going away party where Jake was first introduced to more of her extended family "
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/letchworth.jpg'),
        text:"October 15, 2021 - On a weekend impromptu trip to the Adirondacks we decided to stop and see the falls at Letchworth State Park in Upstate New York"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/adirondacks.JPG'),
        text:"October 16, 2021 - One weekend in October Jake, Fiona, and Jake's friend and Roommate, Matt, decided to drive to the Adirondacks and see their renowned autumn leaves "
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/wedding bus.JPG'),
        text:"December 4, 2021 - Tired from all the wedding party shenanigans Jake fell asleep on Fiona's shoulder on the bus ride from the wedding ceremony to the venue at his sister's wedding"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/rwedding2.JPG'),
        text:"December 4, 2021 - Jake and Fiona share a kiss during golden hour at his sister Ruthie's wedding, where fiona got to meet most of his family for the first time"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/ruthweddingpainting.jpg'),
        text:"Though not chronological, Fiona gifted Jake with a painting she made herself to commemorate the previous memory when he left for Texas in 2022"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/babygoose.jpg'),
        text:"January 4, 2022 - In order to deal with the stress of moving and her loneliness at a new school in a dorm by herself Fiona adopted Goose and as you can tell from the picture Jake has been obsessed ever since"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/goose.jpg'),
        text:"January 18, 2022 - Goose's first sweater"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/babygoose2.jpg'),
        text:"February 12, 2022 - Goose helping us move Ruthie into her new house"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/climbing.JPG'),
        text:"May 14, 2022 - Fiona and Jake went climbing outside for the first time together and at Ledges, where they had their first date and in the park where they will be married"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/gooseclimb.JPG'),
        text:"May 14, 2022 - It was also Goose's first time climbing, our very own crag dog"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/graduation1.jpg'),
        text:"May 22, 2022 - Jake and Fiona celebrate Jake's college graduation"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/parasailing.JPG'),
        text:"July 12, 2022 - Jake accompanied Fiona and her family on a trip to the Outerbanks, where he suffered one of his many sunburns before parasailing with Fiona and her sister"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/parasailing2.jpg'),
        text:"July 12, 2022 - Jake, Fiona, and Mya parasailing in the Outer Banks"
    },

    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/bluefish.JPG'),
        text:"July 16, 2022 - After much persuasion Jake was able to get Fiona to spend the day fishing with him where she caught this bluefish, the largest fish of the day"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/shark.JPG'),
        text:"July 16, 2022 - Though Fiona caught the bigger fish, Jake caught a shark, however in the background you can see someone caught a much larger black tip, using the fish Fiona caught... After Jake assured her people don't bring sharks on the pier, let alone kill them (he was very wrong)"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/outerbanks.jpg'),
        text:"July 16, 2022 - Jake holding Fiona as she becomes 'the king of the world' at the Outer Banks rental"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/outerbanks2.jpg'),
        text:"July 16, 2022 - To which Fiona recreates the same image in reverse"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/austingallery1.jpg'),
        text:"August 5, 2022 - After spending many weeks living on opposite sides of the country Fiona visited Jake in Houston where he promptly showed her half of Texas, starting with this art exhibit in Austin"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/austingallery2.jpg'),
        text:"August 5, 2022 - At the same art gallery Fiona does a headstand in an inflatable exhibit that is supposed to represent human lungs"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/bartonsprings.jpg'),
        text:"August 5, 2022 - Included in their stop in Austin, the two went swimming at the beloved Barton Springs, the Austin skyline behind them"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/longhorncaverns.jpg'),
        text:"August 6, 2022 - After a night in Austin the two visited the state cave of Texas, Longhorn Caverns"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/chickenrock.jpg'),
        text:"August 6, 2022 - After the caverns the two camped out at Inks Lake north of Austin, where Jake did a sick ass jump off of this 63' aptly named Chicken Rock"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/luckenbach.jpg'),
        text:"August 7, 2022 - After leaving the Austin area and heading to San Antonio the two visited the famous Luckenbach Texas where Jake bought his first real cowboy had"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/alamo.jpg'),
        text:"August 7, 2022 - The two visited the Alamo where jake 'had to do it to em'"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/denverhike.jpg'),
        text:"October 22, 2022 - The two flew to Denver to meet up with friends where they went on a fun hike in Staunton State Park"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/flatironshike.jpg'),
        text:"October 23, 2022 - When in Denver for the concert they also took a trip to the Flatirons in Boulder where the two hiked and had fun"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/flitironsclimb.jpg'),
        text:"October 23, 2022 - While in the Flatirons Jake had to scare Fiona with his free climbing skills"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/redrocks3.jpg'),
        text:"October 24, 2022 - The two attended an amazing concert by Polo and Pan at the Redrocks where Jake wore a gorilla suit to stay warm "
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/dogs.jpg'),
        text:"December 8, 2022 - Returning to Cleveland for Christmas, Jake is swarmed by the Macke dogs. And no Goose was not placed there"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/wisdomteeth.jpg'),
        text:"December 15, 2022 - Fiona accompanied Jake for his wisdom teeth removal and cared for him as he milked his ailment for way longer than necessary"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/christmasdog.jpg'),
        text:"December 24, 2022 - The three celebrate Christmas Eve in their matching pajamas"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/cvnp.jpg'),
        text:"December 26, 2022 - The three take a winter hike through Cuyahoga Valley National Park, unaware that they would be married here almost 2 years to the date"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/akronhike.jpg'),
        text:"December 27, 2022 - Jake, Fiona, and her parents as well as their dogs took a winter hike through Akron's Gorge Metro Park"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/duckfriends.jpg'),
        text:"February 11, 2023 - While in town Jake introduced Fiona to his best Texas friends, the ducks living in the pond near his house"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/randyland.JPG'),
        text:"February 12, 2023 - Fiona got to experience the magic that is Houston flea markets on her second visit to Houston"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/superbowl.jpg'),
        text:"February 12, 2023 - Jake basks in the beauty that is Mike's Super Bowl party lighting"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/botanical1.jpg'),
        text:"March 21, 2023 - On Jake's visit back to Cleveland Fiona brought him to the botanical gardens for the first time"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/artgallerydate.jpg'),
        text:"March 21, 2023 - After the botanical gardens Jake Posed for Fiona in the wonderful Cleveland Museum of Art"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/birthday1.jpg'),
        text:"April 24, 2023 - Fiona and Jake stroll through the bayou where they spent the day to celebrate Jake's birthday"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin1.jpg'),
        text:"June 11, 2023 - on their first day in Ireland, Jake surprised Fiona with a photo shoot around Dublin. This is just outside of Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin2.jpg'),
        text:"June 11, 2023 - Penny Bridge"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin3.jpg'),
        text:"June 11, 2023 - Penny Bridge"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin4.jpg'),
        text:"June 11, 2023 - Penny Bridge"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin5.jpg'),
        text:"June 11, 2023 - Penny Bridge"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin6.jpg'),
        text:"June 11, 2023 - Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin7.jpg'),
        text:"June 11, 2023 - Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin8.jpg'),
        text:"June 11, 2023 - Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin9.jpg'),
        text:"June 11, 2023 - Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin10.jpg'),
        text:"June 11, 2023 - Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin11.jpg'),
        text:"June 11, 2023 - Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin12.jpg'),
        text:"June 11, 2023 - Mural near Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin13.jpg'),
        text:"June 11, 2023 - Mural near Temple Bar"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin14.jpg'),
        text:"June 11, 2023 - Dublin Castle"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin15.jpg'),
        text:"June 11, 2023 - Dublin Castle"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin17.jpg'),
        text:"June 11, 2023 - Saint Patrick's Cathedral"
    },
    {
        className:"big gallery-image",
        imgURL:require('./imageAssets/dublin18.jpg'),
        text:"June 11, 2023 - Saint Patrick's Cathedral"
    },
    {
        className:"medium gallery-image",
        imgURL:require('./imageAssets/galwaygirl.jpg'),
        text:"June 12, 2023 - Fiona poses near O'Briens bridge in Galway Ireland"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/cliffsofmoher2.jpg'),
        text:"June 13, 2023 - The Two fight for a photo spot on the Cliffs of Moher ferry"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/cliffsofmoher1.jpg'),
        text:"June 13, 2023 - The Two fight pose for a photo at the top of the Cliffs of Moher"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/castle.jpg'),
        text:"June 13, 2023 - The two pose near Dunguaire Castle near Kinvara Ireland"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/irelandwalk.jpg'),
        text:"June 13, 2023 - Fiona walks along the shore at golden hour towards the castle"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/proposal.jpg'),
        text:"June 14, 2023 - Jake pops the question at golden hour on a pier in Westport, Ireland  (53.79305, -9.56690)"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/engagement1.jpg'),
        text:"June 14, 2023 - Fiona and Jake pose at their special spot to show off the ring"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/engagementring.jpg'),
        text:"June 14, 2023 - The ring in all its glory, the design is a vintage acrostic ring that Fiona found in Pittsburgh, Jake bought the ring and had the rings changed to fit his message. For acrostic rings the first letter of each of the stones spells out a word, in this case the stones Sapphire, Emerald, Alexandrite, Ruby, and Citrine spell 'Searc' the Irish word for True Love"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/engagement2.jpg'),
        text:"June 14, 2023 - Jake and Fiona pose at the very spot she said yes"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/westportdock.jpg'),
        text:"June 15, 2023 - Jake jumps off at the very place she said yes"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/westportdock2.jpg'),
        text:"June 15, 2023 - After much coaxing Jake was able to convince Fiona to swim in the cold Clew Bay waters"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/auportmor.jpg'),
        text:"June 15, 2023 - After mixing up the reservation time the two had to run out of the water and jog a mile and a half to get to the surprise michelin star dinner at Au Port Mor where Jake planned to celebrate their engagement, coincidentally their Air bnb host literally built the restaurant"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/irishbridge.jpg'),
        text:"June 15, 2023 - fiona walks across a beautiful bridge in Westport Ireland"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/irishstreets.jpg'),
        text:"June 15, 2023 - Fiona poses in a picturesque alley in westport Ireland"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/westportflowers.jpg'),
        text:"June 15, 2023 - Fiona takes in the flowers at the beautiful Westport house"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/edinburgh.jpg'),
        text:"June 17, 2023 - Fiona walks through a Scottish alley, or 'close', that frames the beautiful city of Edinburgh Scotland"
    },
    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/scotland.jpg'),
        text:"June 20, 2023 - Fiona and Jake strike a pose in the beautiful Scottish highlands"
    },

    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/pittsburgh.jpg'),
        text:"September 9, 2023 - Jake and Fiona pose in front of the beautiful Pittsburgh skyline at Tony and Nicole's wedding"
    },

    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/weddingphotobooth.JPG'),
        text:"September 24, 2023 - Jake and Fiona take full advantage of the photo booth at their third wedding of the year"
    },


    {
        className:"small gallery-image",
        imgURL:require('./imageAssets/halloween.jpg'),
        text:"October 28, 2023 - Jake and Fiona celebrate halloween together with their friends Massimo and Christina. This is the first time Jake has ever dressed up for Halloween, the two went as Princess Buttercup and the Dread Pirate Roberts"
    },

];
export default GalleryData




