import tones from './bgAssets/tones.jpg'
import parking from './bgAssets/lodgeDetails.jpg'
import map from './bgAssets/map.png'
const FaqInfo = [
    {
        question:"Where and when is the wedding taking place?",
        answer:"The location is the Happy Days Lodge located in Peninsula, OH. The venue is within Cuyahoga Valley National Park and trails are accessible from the venue for those interested. The date is December 28th, 2024 and the time is 4PM",
        extra_info: {
            image:map,
            lists:false,
            scheme:false
        }
    },
    {
        question:"What is the parking situation?",
        answer: 'The venue has a few parking spots directly connected to the lodge, though those spots are reserved for catering and anyone with accessibility concerns. For other guests, the lodge has a parking lot across the street with an underground path connected to the lodge.',
        extra_info:{
            image:parking,
            lists:false,
            scheme:false
        }
    },
    {
        question:"Will there be accommodations provided for guests?",
        answer:"As of now we are not planning to rent out any hotels nearby for guests, though close friends and members of the wedding party are invited to stay with us at the Stanford House before and after the wedding. Attached is a link of hotels nearby, there are also AirBnbs in Peninsula. contact us if you have any questions",
        extra_info:{
            image:false,
            lists:[
                {
                    name:"The Inn at Brandywine Falls",
                    link:"https://www.brandywinefallsinn.com/",
                    cost:"$179-230"
                },
                {
                    name:"Shady Oaks Farm Bed and Breakfast",
                    link:"https://www.shadyoaksfarmbnb.com/",
                    cost:"$189-230"
                },
                {
                    name:"Country Inn & Suites by Radisson",
                    link:"https://country-inn-suites.com/usa-hotels/ohio/macedonia/",
                    cost:"$60-120"
                },
                {
                    name:"La Quinta Inn & Suited by Wyndham",
                    link:"https://www.wyndhamhotels.com/laquinta/macedonia-ohio/la-quinta-cleveland-macedonia/overview?CID=LC:6ysy27krtpcrqev:52986",
                    cost:"$90-120"
                },
                {
                    name:"Staybridge Suites",
                    link:"https://www.ihg.com/staybridge/hotels/us/en/stow/stwoh/hoteldetail",
                    cost:"$130-200"
                },

            ],
            scheme: false
        }
    },
    {
        question:"What are the wedding colors?",
        answer:"There are no set wedding colors, though we are trying to stick with jewel toned colors, with a bit of a focus on Emerald",
        extra_info:{
            image:false,
            lists:false,
            scheme: true
        }
    },
    {
        question:"What is the dress code?",
        answer:"We expect guests to dress in cocktail attire, though do not feel pressured to dress too fancy. We want our guests to feel comfortable and we encourage everyone to be creative, colorful, and whimsical with what they wear. Jewel tone outfits and colored blazers are encouraged.",
        extra_info: false
    },


]
export default FaqInfo