import image from'../assets/img/vector.png'
import poto from'../assets/img/take.png'
import foto1 from '../assets/img/titik.png'
import gambar from '../assets/img/gambar4.jpg'
import Product from './Product'
import geser from '../assets/img/geser.png'
import Product2 from './Product2'
import Footer from './Footer'
import foto2 from '../assets/img/Group.png'
import Pesanan from './Pesanan'

function Cards3(){
    return(
        <div>
            <div className="biru3">
                <div className='rumah'>
                    <h2 className='rumah2'>Home</h2>
                    <h2 className='rumah2'>Discount</h2>
                    <h2 className='rumah2'>Category</h2>
                </div>
                <div className="header2">
                    <div className='login2'>
                        <h2 className='user'>User</h2>
                        <img src={foto2} className='dua2'/>
                    </div>
                </div>
            </div>
            <div className='putih'>
                <h2 className='shop1'>Shop</h2>
                <h2 className='chart'>Chart</h2>
                <form className="form2">
                        <input type="text" placeholder="Search Produck ..."/>
                        <div className="img">
                            <img src={image} alt=""/>
                        </div>
                </form>
            </div>
            <div className='putih2'>
                <div className='garis'>
                    <button></button>
                    <h4>All Product</h4>
                </div>
                    <Pesanan/>
                    <Pesanan/>
                    <Pesanan/>
                <div className='pesan'>
                    <div className='pesan1'>CheackOut</div>
                    <div className='pesan2'>Hapus</div>
                </div>    
            </div>

            <h1 className='rekomen'>Rekomendasi...</h1>

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
export default Cards3