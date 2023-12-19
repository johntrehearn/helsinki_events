import '../styles/categorySection.css'

//import icons 
import concertIcon from '../assets/icons_categorySection/concert.svg'
import exhibitionIcon from '../assets/icons_categorySection/exhibition.svg'
import familyIcon from '../assets/icons_categorySection/family.svg'
import foodIcon from '../assets/icons_categorySection/food.svg'
import outdoorIcon from '../assets/icons_categorySection/outdoor.svg'
import wellBeingIcon from '../assets/icons_categorySection/well-being.svg'


function CategorySection({updateURL}) {
     return (
    <div className="categorySection">
        <div className='iconCategoryWrapper'>
            {/* CONCERT */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p11185')} >
                <div className='iconCategoryCardImageWrapper'>
                    <img src={concertIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Concerts
                </div>
            </div>

            {/* WELL-BEING */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p1947')} >
                <div className='iconCategoryCardImageWrapper'>
                    <img src={wellBeingIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Well-being
                </div>
            </div>

            {/* EXHIBITIONS */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p5121')}>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={exhibitionIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Exhibitions
                </div>
            </div>

            {/* OUTDOOR */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p2771')}>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={outdoorIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Outdoor
                </div>
            </div>

            {/* FAMILY */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword_OR_=yso:p13050,yso:p4354')}>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={familyIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Family
                </div>
            </div>

            {/* TOURISTS */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p3670')}>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={foodIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Food
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default CategorySection; 