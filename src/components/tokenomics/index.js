import React, { Component,useState, useEffect } from 'react'
import './tokenomics.css';
import partner2 from '../../assets/partner2.png';
import Chart from 'react-apexcharts';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Tokenomics = () => { 
  

  return (
    <div id='containertokenomics' className='containertokenomics'>
      <h1 className='htoknnn' >Tokenomics</h1>
      <div className='wrappertokenomics'>
        <div className='containerleft'>
          <Chart
          className='chart'
          type="donut"
          width={600}
          height = {550} 
          series = {[ 10000000,5100000,50000000,30000000,2000000,5000000,2900000,895000000  ]}
         

          
          options ={{
            colors: ['#008FFB', '#58FFC5', '#FF4560', '#ff7f50', '#DE3163', '#adff2f', '#ff1493','#FFE15D'],
            labels:['FairLaunch','PancakeSwap LP','Team Tokens','FairLaunch Rewards','Whitelist investors','Promotions','Private sale','Referral'],
            plotOptions:{
              pie:{
                donut:{
                  labels:{
                    show:true,
                    fontSize:10,
                    color:'#111',
                  },
                }
              }
            },
            stroke: {
              colors: ['#000']
            },
            
            responsive: [{
              
              legend: {
                fontSize: '10px',
              },
              labels:{
                
                fontSize:8,
                
              },
              breakpoint: 480,
              options: {
                chart: {
                  width: 340
                },
                legend: {
                  position: 'bottom'
                }
              }
            }],
            
            legend: {
              show: true,
              showForSingleSeries: false,
              showForNullSeries: true,
              showForZeroSeries: true,
              position: 'bottom',
              horizontalAlign: 'center', 
              
              floating: false,
              fontSize: '15px',
              fontFamily: 'exFont',
              color: '1',
              fontWeight: 300,
              
              formatter: undefined,
              inverseOrder: false,
              width: undefined,
              height: undefined,
              tooltipHoverFormatter: undefined,
              customLegendItems: [],
              offsetX: 0,
              offsetY: 0,
            
              labels: {
                
                  useSeriesColors: true
              },
              
              markers: {
                
                  width: 10,
                  height: 12,
                  strokeWidth: 0,
                  strokeColor: '#000',
                  fillColors: undefined,
                  radius: 12,
                  customHTML: undefined,
                  onClick: undefined,
                  offsetX: 0,
                  offsetY: 0
              },
              itemMargin: {
                  horizontal: 5,
                  vertical: 0
              },
              onItemClick: {
                
                  toggleDataSeries: true
              },
              onItemHover: {
                  highlightDataSeries: true
              },
          },
            dataLabels: {
              
                
                name: {
                  offsetY: -10,
                  show: true,
                  color: "#111",
                  fontSize: "1px"
                },
                value: {
                  color: "#fff",
                  fontSize: "2px",
                  show: true
                },
              
              
              enabled:false, 
              
                style: {
                  fontSize: '14px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 'bold',
                  colors: ['red !important'],
              },
              
            }
           
          }}
          />
        </div>
        <div className='containerright'>
        <h3 className='htoknn'>1,000,000,000		Total supply</h3>
        <div className='containerrighttt'>
        <span className='htokn'>
        • 10,000,000 Fair launch – 51% liquidity, 365d lock, 49% dev
        </span>
        <br></br>
        <span className='htokn'>
        • 5,100,000 Pancakeswap LP        </span><br></br>
       
        <span className='htokn'>
        • 50,000,000 Team Tokens, locked 3 months, vesting 10% each month        </span>
        <br></br>
        <span className='htokn'>
        • 30,000,000 Fair launch % rewards, SC lock and distribution        </span>
        <br></br>
        <span className='htokn'>
        • 2,000,000 Whitelist investors, unlocked

        </span>
        <br></br>
        <span className='htokn'>
        • 5,000,000 Promotions, unlocked 

        </span>
        <br></br>
        <span className='htokn'>
        • 2,900,000 Private sale, locked 1 month, vesting 10% each month

        </span>
        <br></br>
        <span className='htokn'>
        • 895,000,000 Referral program, staking, SC lock and distribution        </span>
        </div>
        <h4 className='htoknnnn'>
        Tax<br></br>
          <span className='htoknnnnn'>5% buy/sell tax (2,5% dev, 2,5% lottery tax).</span>
        </h4>
        <a className='astyle' target='_blank' href={'https://bscscan.com/token/0xDD451Fb4b6359e2d669675E1DC974604B7bCe9dC#code'}>
        <button  className='btnfairlaunch'>Smart Contract<FaExternalLinkAlt className='iconcontract'/></button>
          </a>
          <a >
        <button  className='btnfairlauncha'>0xDD451Fb4b6359e2d669675E1DC974604B7bCe9dC </button>
          </a>
        </div>
      </div>    
    </div>
  )

}



export default Tokenomics;
