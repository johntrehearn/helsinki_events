import '../styles/categorySection.css'
import sampleIcon from '../assets/nightlifeIcon.svg'

function CategorySection({updateURL}) {
     return (
    <div className="categorySection">
        <div className='iconCategoryWrapper'>
            {/* CONCERT */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p11185')} >
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Concerts
                </div>
            </div>

            {/* WELL-BEING */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p1947')} >
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Well-being
                </div>
            </div>

            {/* EXHIBITIONS */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p5121')}>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Exhibitions
                </div>
            </div>

            {/* OUTDOOR */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p2771')}>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Outdoor
                </div>
            </div>

            {/* FAMILY */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword_OR_=yso:p13050,yso:p4354')}>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Family
                </div>
            </div>

            {/* TOURISTS */}
            <div className='iconCategoryCard' onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?keyword=yso:p16596')}>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Tourists
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default CategorySection; 