import image from'../assets/img/vector.png'
import Product2 from './Product2'
import user from '../assets/img/user.png'
import Footer from './Footer'
import foto2 from '../assets/img/Group.png'
import ganti from '../assets/img/ganti.png'

function Profil(){
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
        
        <div className='profil'>
            <div className='user1'>
                <img src={user} className='user2'/>
                <div className='ganti1'>
                    <h4 className='ui'>Ubah Propil</h4>
                </div>
                <div className='poltak'>
                    <h3>Poltak Galingging</h3>
                    <h4 className='gali'>Gali@gmail.com</h4>
                </div>
            </div>
            <div className='propil2'>
                <h3 className='ps'>Propil Saya</h3>
                <h4 className='ipsum'>Kelola informasi propil Anda untuk mengontrol, melindungi dan mengamankan akun</h4>

                    <div className='username'>
                    <h3 className='username1'>Username</h3>
                    <form className="form1">
                        <input type="text" className='input'/>
                    </form>
                    </div>

                    <div className='username'>
                    <h3 className='username1'>Nama</h3>
                    <form className="form1">
                        <input type="text" className='input'/>
                    </form>
                    </div>
                    <div className='username'>
                    <h3 className='username1'>Nomor Telepon</h3>
                    <form className="form1">
                        <input type="text" className='input'/>
                    </form>
                    </div>
                    <div className='username'>
                    <h3 className='username1'>Email</h3>
                    <form className="form1">
                        <input type="text" className='input'/>
                    </form>
                    </div>
                    <div className='username'>
                    <h3 className='username1'>Nama Toko</h3>
                    <form className="form1">
                        <input type="text" className='input'/>
                    </form>
                    </div>
                    <div className='username'>
                    <h3 className='username1'>jenis kelamin</h3>
                    <form className="form1">
                        <input type="text" className='input'/>
                    </form>
                    </div>
                    <div className='username'>
                    <h3 className='username1'>Taggal Lahir</h3>
                    <form className="form1">
                        <input type="text" className='input'/>
                    </form>
                    </div>
            <div className='submit'>
                <div className='simpan'>Simpan</div>
            </div>

            </div>
        </div>
        <div>
            <Footer/>
        </div>
        
    </div>
    )
}
export default Profil