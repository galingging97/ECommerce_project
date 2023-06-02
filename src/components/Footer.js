import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/ig.png'
import whatsApp from '../assets/img/wa.png'
function Footer() {
    return(
        <div className='footer'>
            <h1 className='shop'>Shop</h1>
            <div className='sosmed'>
                <img src={facebook} className='sosmed1'/>
                <img src={instagram} className='sosmed1'/>
                <img src={whatsApp} className='sosmed1'/>
            </div>
            <h3 className="copy">@Copyright 2021</h3>
        </div>
        
    )
}
export default Footer