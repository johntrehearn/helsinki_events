import '../styles/CategorySection.css'
import sampleIcon from '../assets/nightlifeIcon.svg'

function CategorySection() {
    return (
        <div className='iconCategoryWrapper'>
            <div className='iconCategoryCard'>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Nightlife
                </div>
            </div>
            <div className='iconCategoryCard'>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Nightlife
                </div>
            </div>
            <div className='iconCategoryCard'>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Nightlife
                </div>
            </div>
            <div className='iconCategoryCard'>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Nightlife
                </div>
            </div>
            <div className='iconCategoryCard'>
                <div className='iconCategoryCardImageWrapper'>
                    <img src={sampleIcon} alt='icon' />
                </div>
                <div className='iconCategoryCardTitle'>
                    Nightlife
                </div>
            </div>
        </div>
    )
}

export default CategorySection; 