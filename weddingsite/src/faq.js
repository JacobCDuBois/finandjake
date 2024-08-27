import faqInfo from "./faqInfo";
const Faq = () =>{

    function getFAQ(){
        // const info = <div>test</div>
        const info = []
        for(const i in faqInfo){
            var item = faqInfo[i]
            const temp_item =(
                <div className="mt-5 justify-content-center">

                    <div className='row'>
                        <h1>
                            {item.question}
                        </h1>
                    </div>
                        {
                            item.extra_info !== false && (
                                <div className="row">
                                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                                        <h4>
                                            {item.answer}
                                        </h4>
                                    </div>
                                    <div className="col-md-4">
                                        {item.extra_info.image !==false && (
                                            <img src={item.extra_info.image} className="faq_image"/>
                                        )}
                                        {item.extra_info.lists !==false && (
                                            <ul>
                                                {item.extra_info.lists.map(listItem => (
                                                    <li key={listItem.name}>
                                                        <a href={listItem.link} className="list_tag">{listItem.name}</a>
                                                        <lil> Cost: {listItem.cost}</lil>
                                                    </li>
                                                ))}
                                            </ul>

                                        )}
                                    </div>
                                </div>
                            )
                        }
                        {
                            item.extra_info === false && (
                                <div className="row ">
                                    <h4>
                                        {item.answer}
                                    </h4>
                                </div>
                            )
                        }
                </div>
                )
            info.push(temp_item)
        }
        return info

    }
    return(
        <div className="col-md-8 d-flex flex-column align-content-center">
            {getFAQ()}
        </div>
    )

}
export default Faq