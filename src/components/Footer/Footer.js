import React, { useState } from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = () => {
      navigator.clipboard.writeText('jorgelinaparkinson@gmail.com')
      setShowCopied(true);
      setTimeout(() => {
          setShowCopied(false);
      }, 1000);
  };

  return (
    <div className='footer'>
      
      <div className='socialBox'>
        
        <div className='social'>
          <a href='https://www.instagram.com/jorgelinaparkinson/' target="_blank"  style={{textDecoration:'none', color: 'white'}}>
            < InstagramIcon fontSize='large'/> @jorgelinaparkinson
          </a>
        </div>

        <div className='social'>
          < EmailIcon 
            fontSize='large' 
            onClick={handleClick}
          />
        jorgelinaparkinson@hotmail.com
        </div>
        
        <div className='social'>
          <a href='https://www.instagram.com/jorgelinaparkinson/' target="_blank"  style={{textDecoration:'none', color: 'white'}}>
            < FacebookIcon fontSize='large'/> @jorgelinaparkinsonpinturas
          </a>
        </div>

      </div>

      {/* Jorgelina Parkinson - Artista Plástica */}
      <div>
        Paraná, Entre Ríos, Argentina.
        <p style={{color:'white'}}>© Jorgelina Parkinson 2023 - Desarrollada por <a href='https://justinaiturraspe.vercel.app/' target="_blank" style={{textDecoration:'none', color: 'white'}}>Justina Iturraspe</a></p>
      </div>
      
      </div>
  )
}

export default Footer