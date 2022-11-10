import React, { Component } from 'react'
import './mainhome.css';
import homeimg from '../../assets/homeimg.png';
import homeimgt from '../../assets/homeimg3.png';
import im1 from '../../assets/im1.png';
import im2 from '../../assets/im2.png';
import im3 from '../../assets/im3.png';

export default class index extends Component {
  render() {
    return (
       <div id='containermainhome' className='containermainhome'>
          <div id='containermainhome' className='firstdivmainhome'>
            <span className='logoSs'>It was 2105 year, in a future far away from now. People were mad that all of their money has disappeared and the financial system has collapsed. A young team of entrepreneurs decided to go back in time and try to save the financial freedom of people, by bringing Farmarok to them.</span>
          </div>
          <div className='imghomewrapper'>
            <img src={homeimg}  className='homeimg'/>
            <img src={homeimgt}  className='homeimgt'/>
          </div> 
          <div className='secondivmainhome'>
            <span className='logoS'> has been inspired by the cataclysmic event of Ragnarok, and aims to bring more people to the place where they feel they are financially free. The project’s strongest point will be the community, because the more people they bring in and show the project, the bigger payout they will have. </span>
          </div>
          <div className='tablewrappermainhome'>
          <div className='tablemainhomebg'>
          <div className='tablemainhome'>
              <div className='tablemainhomeone'>
               <h1 className='tablemainhometexttwoTitle'>Lottery</h1>
              <span className='tablemainhometextone'>Our project will start with a lottery, where each ticket costs FROK tokens. The more lottery tickets you buy, the higher random winning possibility! </span>
              <br></br>
              <br></br>
              <span className='tablemainhometextonea'>Farmarok lottery security is powered by <span className='tablemainhometextoneaa'> Chainlink </span></span>
              <button className='btnlottery'>Play Now!</button>
              </div>
              <div className='tablemainhomeimone'>
                <img src={im2}  className='imone'/>
              </div>
            </div> 
            </div>
            <div className='tablemainhomebg'>
            <div className='tablemainhome'>
              <div className='tablemainhometwo'>
               <h1 className='tablemainhometexttwoTitle'>Prediction <br></br> (Up & Down)</h1>
              <span className='tablemainhometextone'>Bet on if the price of famous assets like BTC and ETH to go "UP" or "DOWN", each 15 minutes. Prize is calculated based on others peoples positions. If you guess correctly you WIN!</span>
              <button className='btnlottery'>Play Now!</button>
              </div>
              <div className='tablemainhomeimtwo'>
                <img src={im1}  className='imtwo'/>
              </div>
            </div>
            </div>
            <div className='tablemainhomebg'>
            <div className='tablemainhome'>
              <div className='tablemainhometto'>
               <h1 className='tablemainhometexttwoTitle'>Referral Program </h1>
              <span className='tablemainhometextone'>Users who add new investors through our dApp referral program, will get 50% bonus from whatever amount the referral buyers invest using your referral code. When the referral investors add on their own referral code new investors, they will get same 50% from whatever amount their buyers invest, plus you will get again 25% bonus from their investors. NOTE, the % bonus is native token FROK!</span>
              
              </div>
              <div className='tablemainhomeimtto'>
                <img src={im3}  className='imtto'/>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
  }
}
 /* */
/*
<div className='containermainhome'>
<div className='containermainhomefirst'>
  <br/>
  <div className='txthomewrapper'>
  <span >It was 2105 year, in a future far away from now. People were mad that all of their money has disappeared and the financial system has collapsed. A young team of entrepreneurs decided to go back in time and try to save the financial freedom of people, by bringing Farmarok to them.</span>
  </div>
  <div className='imghomewrapper'></div>
  <img src={homeimg}  className='homeimg'/>
   </div> 
<div className=''>
<div className='txthomewrapperbottom'>
  <span >It was 2105 year, in a future far away from now. People were mad that all of their money has disappeared and the financial system has collapsed. A young team of entrepreneurs decided to go back in time and try to save the financial freedom of people, by bringing Farmarok to them.</span>
  </div>
  <div className='tablewrappermainhome'>
  
        <div className='tablemainhome'>
          <div className='tablemainhomex'>
          <span>Start</span>
          <span>xxx xx, 2022 (12:00PM UTC)</span>
          </div>
          
          
        </div>
        
        <div className='tablemainhome'>
          <div className='tablemainhomex'>
          <span>End</span>
          <span>xxx xx, 2022 (12:00PM UTC)</span>
          </div>
          
          
        </div>
      </div>
</div>    
</div>*/