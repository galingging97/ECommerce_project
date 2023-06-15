import Tas from '../assets/img/tas.jpg'

function Daftar(){
    return(
    <div>
        <div className="daftar">
            <div className="daftar1">
                    <img src={Tas} className='tas'/>
                <div className='daftar2'>
                    <h3 className='regis'>Daftar</h3>
                    <h3 className='regis1'>Username</h3>
                    <input type='text' placeholder='Masukan Username' className='form4'/>
                    <h3 className='regis1'>Email</h3>
                    <input type='text' placeholder='Masukan Email' className='form4'/>   
                    <h3 className='regis1'>Password</h3>
                    <input type='text' placeholder='Masukan Password' className='form4'/>   
                    <h3 className='regis1'>Konfirmasi</h3>
                    <input type='text' placeholder='Konfirmasi Password' className='form4'/>  
                    <div className='daftar3'>
                        <button/>
                        <h4>I Agree</h4>
                    </div>
                    <div className='daftar4'>Daftar</div>       
                </div>
            </div>
        </div>
        <div className='daftar5'>Sudah punya akun? Login</div>
    </div>

    )
}
export default Daftar