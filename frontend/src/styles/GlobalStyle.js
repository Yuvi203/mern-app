import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
:root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}
body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

//form style
.form-container{
    margin: 0;
  top: 50px;
  left: 50%;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  background-color: rgb( 33, 41, 66 );
  border-radius: 9px;
  border-top: 10px solid #79a6fe;
  border-bottom: 10px solid #8BD17C;
  width: 400px;
  height: 500px;
  box-shadow: 1px 1px 108.8px 19.2px rgb(25,31,53);
  h4{
    font-family: 'Source Sans Pro', sans-serif;
  color: #5c6bc0; 
  font-size: 18px;
  margin-top:94px;;
  }
 span {
  color: #dfdeee;
  font-weight: lighter;
  }
  h5{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 13px;
  color: #a1a4ad;
  letter-spacing: 1.5px;
  margin-top: -1px;
  padding:10px;
  margin-bottom: 40px;
  }
  input{
  display: block;
  margin: 20px auto;
  background: #262e49;
  border: 0;
  border-radius: 5px;
  padding: 14px 10px;
  width: 320px;
  outline: none;
  color: #d6d6d6;
  transition:all .2s ease-out;
  } 



.forgetpass {
  position: relative;
  float: right;
  right: 28px;
  margin-top:-12px;
}

a{
  color: #5c7fda;
  text-decoration: none;
  font-size:14px;
}
a:hover {
  text-decoration: underline;
}
.btn1 {
  border:0;
  background: #7f5feb;
  color: #dfdeee;
  border-radius: 100px;
  width: 340px;
  height: 49px;
  font-size: 16px;
  position: absolute;
  
  left: 8%;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    background: #5d33e6;
  }
}
.dnthave{
    position: absolute;
    top: 92%;
    left: 24%;
}

  }
.toast{
  background-color: var(--sidebar-dark-color) !important;
  color:white;
  svg{
    color:white;
  }
}  
.btn3{
  margin-top:1rem;
  margin-right:1rem;
  border:0;
  background: #7f5feb;
  color: #dfdeee;
  border-radius: 100px;
  width: 140px;
  height: 49px;
  font-size: 16px;
  cursor:pointer;
}
.wrapper{
    padding: 20px;
    background: rgb( 33, 41, 66 );
    max-width: 850px;
    margin: auto;
    display: flex;
    .img-con{
      width: 50%;
     img{
      width:100%;
      object-fit:cover;
     }
    }
    form{
      width:50%;
      padding-top: 36px;
      padding-left: 45px;
      padding-right: 45px;

    }
    .form-group{
      display:flex;
      input{
        margin-right:25px;
      }
    }
   input{
    display: block;
    width: 100%;
    height: 30px;
    padding: 0;
    margin-bottom: 25px;
    border-bottom:1.5px solid black;
    background-color:transparent;
    color:white;
    outline:none;
    border-left:none;
    border-right:none;
    border-top:none;
   }
   textarea{
    width:100%;
    resize:none;
    height:59px;
    outline:none;
    padding:15px;
    font-size:16px;
    border-radius:5px;
    max-height:330px;
    caret-color:#4671EA;
    border:1.5px solid black;
    background:transparent;
    color:white;
    ::-webkit-scrollbar{
      width: 9px;
      background-color: #383838;
    }
  }
   h3{
    font-size: 25px;
    text-align: center;
    color:var(--white-color);
    margin-bottom: 28px;
   }
    }
    @media screen and (max-width:767px) {
       .wrapper{
        display:block;
        .img-con{
          width:100%;
        }
        form{
          width:100%;
          padding:40px 0 30px;
        }
       }
    }
    input::-webkit-input-placeholder {
      font-size: 14px;
      color: gray;
      font-family: arial; }
   .but-container{
    display:flex;
    align-items:center;
    justify-content:center;
   }
   .primary{
  background-color: transparent;
	border: 1px solid #03BFCB;
	border-radius: 3px;
  color: #02899C;
	font-family: Montserrat, sans-serif;
	font-weight: 500;
	padding: 10px 25px;
  margin:10px;
  cursor: pointer;
 &:hover{
  color: #231E39;
  background-color: #03BFCB;
   }
    }
`

export default GlobalStyle