import image from'../assets/img/vector.png'
import poto from'../assets/img/take.png'
import foto1 from '../assets/img/titik.png'
import gambar from '../assets/img/gambar4.jpg'
import Product from './Product'
import geser from '../assets/img/geser.png'
import Product2 from './Product2'
import Footer from './Footer'
import foto2 from '../assets/img/Group.png'

function Cards2(){
    return(
        <div className="card">
            <div className="biru">
                <ul>
                    <li>Home</li> 
                    <li>Discount</li> 
                    <li>Category</li>
                </ul>
                <div className="header">
                    <h1>Shop</h1>
                    <form className="form">
                        <input type="text" placeholder="Search Produck ..."/>
                        <div className="img">
                            <img src={image} alt=""/>
                        </div>
                    </form>
                    <div className="keranjang">
                        <img src={poto} alt=""/>
                        <div className='bulat'>1</div>
                    </div>
                    <div className='login2'>
                        <img src={foto1} className='satu1'/>
                        <img src={foto2} className='dua2'/>
                    </div>
                </div>
            </div>

            <div className="body2">
                <div className="background">
                    <img src={gambar} alt="" className='poto1'/>
                </div>
            </div>
            <div className='diskon'>
                <h2>Diskon</h2>
                <div className='angka'>12.12</div>
            </div>
            <div className='kotak'>
                <Product/>
                <Product/>
                <Product/>
                <img src={geser} className='geser'/>
            </div>
            <h2 className='p'>Product</h2>
            <div className='kotak1'>
                <Product2/>
                <Product2/>
                <Product2/>
                <Product2/>
            </div>
            <div className='kotak1'>
                <Product2/>
                <Product2/>
                <Product2/>
                <Product2/>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    )
}
export default Cards2