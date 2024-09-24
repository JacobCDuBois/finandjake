import faqInfo from "./faqInfo";
import React, { useState } from 'react';
import ColorList from "./colorList";
import border from './bgAssets/bordercolored.png'
const Faq = () =>{
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);  // Close if the same question is clicked again
        } else {
            setOpenIndex(index);  // Open the clicked question
        }
    };
    function getFAQ() {
        const info = [];
        for (const i in faqInfo) {
            var item = faqInfo[i];
            const isOpen = openIndex === i;  // Check if the current item is open

            const temp_item = (
                <div className="mt-5 justify-content-center" key={i}>
                    <div className="col-md-12">
                        <div className='faq_question '>
                            <button
                                className="sub_button"
                                onClick={() => toggleAnswer(i)}  // Toggle the answer on button click
                            >
                                {item.question}
                            </button>
                        </div>
                    </div>

                    {isOpen && (  // Conditionally render the answer section
                        <div className="faq_answer row">
                            {/* Check if there's any extra content (image, lists, or scheme) */}
                            <div className={item.extra_info.image || item.extra_info.lists || item.extra_info.scheme ? "col-md-8 d-flex align-items-center justify-content-center" : "col-md-12 d-flex align-items-center justify-content-center"}>
                                {/*<h4 className="">{item.answer}</h4>*/}
                                <p className="">{item.answer}</p>
                            </div>

                            {/* Conditionally render the image, list, or scheme only if one exists */}
                            {(item.extra_info.image || item.extra_info.lists || item.extra_info.scheme) && (
                                <div className="col-md-4">
                                    {item.extra_info.image && (
                                        <img src={item.extra_info.image} className="faq_image" alt="FAQ related" />
                                    )}
                                    {item.extra_info.lists && (
                                        <ul>
                                            {item.extra_info.lists.map(listItem => (
                                                <li key={listItem.name}>
                                                    <a href={listItem.link} className="list_tag">{listItem.name}</a>
                                                    <span> Cost: {listItem.cost}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {item.extra_info.scheme && (
                                        <ColorList/>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
            info.push(temp_item);
        }
        return info;


    }
    return(

        <div className="col-md-12 justify-content-center no_space">

            <img src={border} className="faq_border no_space disappear"/>
            <div className="row justify-content-center">
                <div className="col-md-8 no_space faq_sheet justify-content-center">
                    {getFAQ()}
                    {/*<ColorList></ColorList>*/}
                </div>
            </div>

        </div>
    )

}
export default Faq