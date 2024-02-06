import React, { useState } from 'react'
import QRCode from "qrcode"
import Loading from './Loading'

const App = () => {
  const [url,setUrl]=useState("")
  const [qr,setQR]=useState("")
  const [loading,setLoading]=useState(false)
  
  const GenerateQRCode = (e) =>{
    e.preventDefault()
    setLoading(true)
      QRCode.toDataURL(url,{
        width:500,
        margin:2,
        color:{
          dark:"#335383FF",
          light:"#EEEEEEFF"
        }
      },(err,url)=>{
          if(err) return console.error(err);
          console.log(url);
          setTimeout(() => {
            setQR(url)
          }, 1000);
      })
  
  }
  return (
    <div className="container">
      <header>
        <h1 className="heading">QR Generator</h1>
      </header>
      <main>
          <form className="search" onSubmit={GenerateQRCode}>
            <input placeholder="Eg:https://www.google.com" type="text" value={url} onChange={e=>setUrl(e.target.value)}/>
            <button type="submit">Go</button>
          </form>
          {qr ?(
            <div className='qr'>
              <img src={qr} alt="qr-code" />
               <button className="button">
                <a href={qr} download="qrcode.png">Download</a>
              </button>
            </div>
          ):loading?<Loading/>:""
          }
      </main>
      <footer>
        <p>&copy; 2023 SPRHackz</p>
      </footer>
    </div>
  )
}

export default App