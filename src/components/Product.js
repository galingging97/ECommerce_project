import love from '../assets/img/love.png'

function Product() {
   return(
       <div className="product">
            <div className="angka">12.12</div>
            <div className="product2">
                <ul className='ul'>
                    <li className='satu'>Product</li>
                    <li className='dua'>IDR 300.000</li>
                </ul>
                <div className='sell'>
                    <div className='beli'>Beli</div>
                    <img src={love} className='love'/>
                </div>
            </div>
       </div> 
   )
}
export default Product