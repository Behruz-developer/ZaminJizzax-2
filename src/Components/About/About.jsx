import universal from "../../assets/images/about1.png";

import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about">
      <div className="container">
        <div className="about_box">

          <div className="about_card_left" data-aos="fade-right" data-aos-offset="-50">
            <img className="about_card_left_img" src={universal} alt="" />
            <div className="about_map_text">
              {/* <div className="about_map_text_box">
                <svg className="about_map_text_img" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="about_map_text_img_color" d="M16.6665 19.3506V25.3332C16.6665 25.7012 16.9518 25.9999 17.3052 25.9999H24.0292C24.3812 25.9999 24.6665 25.7012 24.6665 25.3332V19.3146" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="about_map_text_img_color" d="M15.334 20.2227L20.7767 16.6667L26.0007 20.2227" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="about_map_text_img_color" fill-rule="evenodd" clip-rule="evenodd" d="M11.941 15.1559C13.7695 15.1559 15.2517 13.6737 15.2517 11.8453C15.2517 10.0168 13.7695 8.53461 11.941 8.53461C10.1126 8.53461 8.63037 10.0168 8.63037 11.8453C8.63037 13.6737 10.1126 15.1559 11.941 15.1559Z" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="about_map_text_img_color" d="M21.852 12.5653C22.0253 9.8173 21.0707 7.01197 18.9707 4.91197C15.088 1.0293 8.79467 1.0293 4.912 4.91197C1.02933 8.79464 1.02933 15.088 4.912 18.9706L11.9413 26" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div> */}
              <p className="about_map_text_text">
                Zamin Jizzax — bu zamonaviy va farovon hayot uchun ideal joy. Bu yerda sizning orzularingiz roʻyobga chiqadi, hayot darajasi esa yangi bosqichga koʻtariladi.              </p>
              <p className="about_map_text_text2">Xaritada ko‘rish</p>
            </div>
          </div>
          <div className="about_card_text" data-aos="fade-left">
            <h2 className="about_title">Loyiha haqida</h2>
            <p className="about_text">
              Biz faqat eng sifatli materiallar va zamonaviy texnologiyalardan foydalanamiz. Har bir xonadon mustahkam va uzoq muddatli boʻlishi uchun puxta rejalashtirilgan.            </p>
            <p className="about_text">
              Zamin Jizzax loyihasida yuqori sifatli materiallar va zamonaviy texnologiyalar qoʻllanilgan. Har bir xonadon mustahkam, energiya samarador va zamonaviy talablarga javob beradi.            </p>
          </div>


          <div className="about_card_icons" data-aos="fade-left">
            <div className="about_card_icon">
              <div className="about_icon_text">
                <div className="about_icon_text_card" >
                  <svg className="about_icon_text_img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2062_4364" maskUnits="userSpaceOnUse" x="5" y="5" width="71" height="70">
                      <path d="M75.4916 5H5.3584V75H75.4916V5Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_2062_4364)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.3584 22.1312V37.7185C5.3584 38.4227 5.81517 38.8795 6.51936 38.8795C7.73741 38.8795 7.69934 37.9279 7.68031 36.6908V26.2041C7.68031 22.569 7.22354 18.0775 12.3622 16.8785V49.0616C12.3622 55.6277 12.838 51.2313 8.49869 54.5238C8.13708 54.7903 8.00386 54.9616 7.68031 55.1709V43.8278C7.68031 42.4765 7.88967 41.2014 6.51936 41.2014C5.81517 41.2014 5.3584 41.6772 5.3584 42.3814V61.4705C5.3584 65.4482 9.12675 69.1976 13.1045 69.1976H45.0974V73.8604C45.0974 74.5646 45.5542 75.0214 46.2583 75.0214H71.9707C72.6749 75.0214 73.1317 74.5646 73.1317 73.8604V68.0366C73.1317 66.476 70.7907 66.476 70.7907 68.0366V72.6995H59.105V64.5347C59.105 63.8305 58.6482 63.3737 57.944 63.3737H50.9402C50.2361 63.3737 49.7793 63.8305 49.7793 64.5347V72.6995H47.4193V56.9599L59.105 50.8506C59.6189 50.8506 69.9533 56.7696 70.7907 56.9599C70.7907 58.4254 70.7907 59.8718 70.7907 61.3373C70.7907 62.8409 70.4481 64.5347 71.9517 64.5347C73.2839 64.5347 73.1316 63.3738 73.1126 62.0605C73.1126 60.8044 73.1126 59.5293 73.1126 58.2732C74.3116 58.9012 75.4536 58.8822 75.4536 57.5499V51.7261C75.4536 50.7365 74.521 50.451 73.8549 50.1274C70.5052 48.4907 65.8424 45.6929 62.3595 43.961C59.2382 42.4004 59.7902 41.7343 56.8592 43.371L46.4487 49.0045C45.6684 49.4042 45.0784 49.7658 44.3551 50.1274C43.67 50.47 42.7564 50.7365 42.7564 51.7261V57.5499C42.7564 58.8822 43.8984 58.9202 45.0974 58.2732V66.8757H13.9799C11.9625 66.8757 10.6874 66.2286 9.56449 65.296C7.79451 63.8115 7.09032 60.5951 8.42256 58.2732C10.8777 53.9909 14.7032 56.2748 14.7032 54.048V15.5653C14.7032 12.5582 5.3584 15.394 5.3584 22.1312ZM45.0784 55.4754V52.4113C46.2203 51.8213 47.3622 51.2503 48.5041 50.5842L59.105 44.9888L73.1317 52.4113V55.4754L64.4721 50.8697C63.8059 50.5461 63.3872 50.2606 62.7782 49.9371C57.3731 47.2726 60.3992 47.6342 52.0631 51.7832L45.0784 55.4754ZM52.1012 65.6766H56.7831V72.6614H52.1012V65.6766Z"
                        fill="#0B2336"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M49.1708 9.1696C49.1518 10.0831 48.3144 12.8999 48.067 14.0418C47.0202 18.876 45.6309 24.0147 44.508 28.8298L29.4346 13.8705L36.5335 12.1386C39.4454 11.4344 38.4177 9.47411 36.7809 9.60734C36.1339 9.66443 34.9919 10.026 34.4019 10.1593L27.2078 11.8722C26.4085 12.0625 25.6852 12.3289 25.7994 13.3757C25.8946 14.137 27.9881 15.945 28.6162 16.5731C29.5297 17.4866 34.1545 21.9782 34.5732 22.5873C31.471 22.5873 20.3182 22.416 18.2056 22.5873C16.7021 22.7015 16.7211 24.4524 17.7108 24.833C18.3769 25.0805 33.2981 24.9092 36.1719 24.9092C37.1996 24.9092 37.0664 24.9853 37.5803 25.5372L43.7847 31.7227C45.7451 33.721 46.316 31.7607 46.6776 30.0288C46.7918 29.4959 46.9441 28.8869 47.0773 28.392C47.3057 27.4595 47.8195 25.8608 47.8386 24.9282H58.3633C57.7924 26.013 53.7195 32.6743 53.4721 33.7591C53.0153 35.7194 52.7108 37.4703 52.3111 39.4497C51.5879 43.0087 53.6434 42.1903 54.1001 41.8097L58.6488 37.6987C60.1904 36.4807 60.3236 35.7004 61.5036 33.702L66.5471 24.9092H70.7913V45.007C70.7913 45.559 70.6581 47.1767 72.0855 47.0244C72.4661 46.9864 72.9229 46.6628 73.0751 46.2632C73.2464 45.7874 73.1513 45.1022 73.1513 44.5883V24.3382C73.1703 22.0924 72.2567 22.5873 68.0316 22.5873C68.279 21.6737 75.1496 10.6731 75.4161 9.41702C76.2154 5.78189 71.1339 2.62257 68.4694 7.57091C68.0697 8.31316 67.632 9.03638 67.1752 9.77863L65.31 13.0141C63.6162 15.7547 65.9381 15.7928 66.5662 15.4312C66.9278 15.2218 68.85 11.7009 69.1926 11.0538C69.5732 11.3012 70.639 11.9673 71.0958 12.0815C71.0387 12.7476 68.3742 17.0299 67.9745 17.715L65.5765 21.8831C65.291 22.3969 65.0436 22.7395 64.7581 23.2534L59.962 31.5704C59.3911 32.522 58.8962 33.3975 58.3824 34.3681C58.0017 34.1207 56.9359 33.4546 56.4791 33.3404C56.5172 32.8075 57.6211 31.0756 57.9256 30.5617L62.6836 22.3589C63.2926 21.3502 64.9294 18.9331 64.682 18.1718C64.4726 17.5437 63.3307 16.4208 62.1888 18.3621L59.8288 22.5682H48.5808C48.5999 21.864 51.6069 9.60734 51.9114 8.40832C52.5966 5.6677 50.8456 6.2006 48.9615 6.63833C47.3437 6.99994 45.8973 7.36155 44.2606 7.78026C43.4041 7.98961 42.776 8.1609 41.9196 8.35122C41.1393 8.54154 40.359 8.80799 40.4351 9.72153C40.5874 11.5867 42.9854 10.5589 44.4128 10.2544C45.5167 9.98798 48.2763 9.18863 49.1708 9.1696ZM72.39 10.0451C71.9332 9.93088 70.8674 9.28379 70.4868 9.01734C71.0197 6.73349 73.1132 7.32349 73.1132 8.57961C73.1322 8.94122 72.5803 9.77863 72.39 10.0451ZM55.1659 37.5655C55.3182 36.8994 55.4514 36.1762 55.6037 35.5291C55.9653 35.7765 56.2698 35.9858 56.7646 36.1191C56.6504 36.2904 55.3753 37.4323 55.1659 37.5655Z"
                        fill="#0B2336"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.8867 35.3771V40.0399C22.8867 41.9622 25.1896 40.9154 25.2277 40.9154C25.2277 42.5141 25.2277 44.1128 25.2277 45.7305C25.2277 47.3292 24.809 49.3657 26.3886 49.3657H40.4153C41.9949 49.3657 41.5762 47.3292 41.5762 45.7305C41.5762 44.1318 41.5762 42.5331 41.5762 40.9154C41.8046 40.9725 43.9172 41.867 43.9172 40.0399C43.9172 33.4548 44.8688 35.0535 39.0069 32.1226C32.6882 28.9633 34.1537 29.0204 30.5757 30.8094L23.7432 34.1781C23.2293 34.4255 22.8867 34.711 22.8867 35.3771ZM25.2277 38.1558V36.1193C26.2744 35.8719 32.9737 32.1607 33.4305 32.1416C33.9253 32.1036 38.5692 34.749 39.5017 35.1487C40.0917 35.3961 41.1956 36.0242 41.5953 36.1193V38.0035C40.7959 37.8132 38.455 36.519 37.5605 36.0622C32.574 33.569 33.8873 33.8165 30.4044 35.5864L25.2277 38.1558ZM29.8905 43.5418V47.0438H27.5496V39.6212C28.4631 39.4119 33.0118 36.8235 33.4115 36.8045C33.9444 36.7664 38.2646 39.3738 39.2162 39.6212V47.0438H36.8753C36.8753 41.5244 37.7698 42.3809 31.0324 42.3809C30.3473 42.3809 29.8905 42.8377 29.8905 43.5418ZM32.2315 44.7028H34.5724V47.0247H32.2315V44.7028Z"
                        fill="#0B2336"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.0444 28.3918C17.0444 29.1531 17.5012 29.4957 18.2054 29.5528V49.3652C16.4925 49.4984 16.7399 51.6871 18.2054 51.6871C19.9564 51.6871 21.7073 52.0487 21.7073 50.5261C21.7073 49.7648 21.2505 49.4223 20.5463 49.3652V29.5528C22.2592 29.4196 22.0118 27.2309 20.5463 27.2309C18.7954 27.2309 17.0444 26.8693 17.0444 28.3918Z"
                        fill="#0B2336"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.0107 15.7169C35.0107 16.8398 37.4088 18.7621 38.4746 19.8279C39.5404 20.8936 41.4816 23.2917 42.6045 23.2917C43.9939 23.2917 44.032 21.084 44.5839 18.8572L45.8019 13.6805C45.8019 13.2237 45.1168 12.5195 44.7742 12.5195L36.971 14.3276C36.0004 14.556 35.0107 14.594 35.0107 15.7169ZM41.8623 19.6566L38.6078 16.4782L42.871 15.4314C42.852 15.9453 42.0526 19.295 41.8623 19.6566Z"
                        fill="#0B2336"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0492 52.8656C24.0492 54.6165 23.6876 56.3675 25.2102 56.3675C25.9715 56.3675 26.314 55.9107 26.3711 55.2065H38.0568C38.1901 56.9194 40.3978 56.6529 40.3978 55.2065C40.3978 53.4556 40.7594 51.7046 39.2368 51.7046C38.4755 51.7046 38.133 52.1614 38.0759 52.8656H26.3902C26.2569 51.1527 24.0492 51.4001 24.0492 52.8656Z"
                        fill="#0B2336"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.6035 55.1883V59.8512C55.6035 60.5553 56.0603 61.0121 56.7645 61.0121H61.4464C62.1506 61.0121 62.6073 60.5553 62.6073 59.8512V55.1883C62.6073 54.4841 62.1506 54.0273 61.4464 54.0273H56.7645C56.0603 54.0273 55.6035 54.4841 55.6035 55.1883ZM57.9445 56.3493H60.2854V58.6712H57.9445V56.3493Z"
                        fill="#0B2336"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M61.4453 64.5145V69.1773C61.4453 69.8815 61.9021 70.3383 62.6063 70.3383H67.2882C67.9924 70.3383 68.4491 69.8815 68.4491 69.1773V64.5145C68.4491 63.8103 67.9924 63.3535 67.2882 63.3535H62.6063C61.9021 63.3535 61.4453 63.8103 61.4453 64.5145ZM63.7863 65.6754H66.1272V67.9973H63.7863V65.6754Z"
                        fill="#0B2336"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.5497 58.6903C27.5497 61.1644 27.0739 63.3531 28.7106 63.3531C29.7764 63.3531 29.8716 62.6489 29.8716 61.6022C31.1277 62.4396 30.9374 62.4396 32.2125 61.6022C32.2125 64.3428 34.5535 63.4673 34.5535 62.1922C34.5535 59.718 35.0293 57.5293 33.3925 57.5293C32.4599 57.5293 31.7367 58.8235 31.0516 59.2802C30.3854 58.8235 29.6622 57.5293 28.7106 57.5293C28.0255 57.5293 27.5497 57.9861 27.5497 58.6903Z"
                        fill="#0B2336"
                      />
                    </g>
                  </svg>


                </div>
                Mualliflik
                <br />
                arxitekturasi
              </div>

              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="about_icon_text_img_color" fill-rule="evenodd" clip-rule="evenodd" d="M7.54 12.8706V13.6306C6.58 13.6306 4.51 13.7506 3.94 13.6606C1.37 13.2406 1.99 9.61062 4.5 9.61062C5.13 9.61062 5.68 9.91062 6 10.2406C6.77 11.0406 6.35 10.4506 7.84 10.4506C8.29 10.4506 8.56 10.6506 8.83 10.8306C8.61 11.1606 8.38 11.4506 8.11 11.7906C7.85 12.1006 7.54 12.3306 7.54 12.8706ZM9.36 12.1106C9.62 11.7206 9.93 11.3806 10.22 10.9906L12.46 8.14062C12.95 7.54062 13.11 7.35062 13.68 8.09062C13.83 8.28062 13.96 8.44062 14.12 8.64062L16.81 12.0406C14.24 12.0306 11.92 12.1106 9.36 12.1106ZM20.69 19.4006V17.0406H21.53V19.6306H20.92C20.75 19.6306 20.69 19.5806 20.69 19.4006ZM18.72 17.0506H19.56V19.6406H18.72V17.0506ZM8.76 22.2206V21.2306L17.58 21.1506V22.1406L8.76 22.2206ZM32.02 23.0506L32.1 25.0306C31.68 24.9206 31.52 24.3506 31.11 24.3506C30.68 24.3506 30.5 24.6106 30.5 24.9606C30.5 25.6206 32.1 26.4906 32.1 26.9406V28.4606C31.23 28.4606 29.79 27.8006 29.28 26.9406C28.41 25.4606 27.92 25.1106 27.92 23.5906C27.92 22.2506 28.55 21.0906 29.23 20.4106C32.51 17.1606 37.5 19.7406 37.5 23.4306C37.5 25.0506 37.18 25.8706 36.22 27.0206C35.67 27.6706 34.24 28.4506 33.24 28.4506C33.24 24.6806 32.9 25.6106 34.4 24.1406C35.2 23.3606 34.9 22.8306 34.15 22.8306C33.89 22.8306 33.46 23.4406 33.24 23.5906C33.24 22.9406 33.32 22.5006 32.85 22.3006C32.37 22.0906 32.02 22.5006 32.02 23.0506ZM18.72 20.7706C19.88 20.7706 23 20.6206 23.84 20.9706C24.75 21.3506 25.09 22.2006 25.62 23.0706L30.46 31.1606C30.84 31.6106 31.51 32.1206 32.11 32.1706V33.8406C31.13 33.8406 30.08 33.9506 29.39 32.9106C29.21 32.6306 29.07 32.4106 28.9 32.1106L27.4 29.5806C26.65 28.3306 24.06 23.6106 23.3 23.0406C22.07 22.1006 20.59 22.3606 18.74 22.3606V20.7706H18.72ZM11.57 23.3606H14.54V24.5806H11.57V23.3606ZM18.72 23.5906C20.04 23.5906 21.7 23.3906 22.49 23.9206C22.9 24.2006 24.67 27.3106 25.03 27.9206C25.35 28.4806 25.67 29.0706 26.02 29.5906C23.59 29.0206 21.14 30.2206 19.97 32.1306C19.69 32.5806 19.27 33.3406 19.25 34.0006H18.79V27.9206C18.79 26.3906 18.72 25.1206 18.72 23.5906ZM8.83 26.5506V23.3606H10.35V27.2406C10.35 28.7206 10.43 29.9406 10.43 31.4206C10.14 31.4006 10.19 31.3406 9.82 31.3406C9.68 29.7206 9.53 29.0506 9.15 27.6706C9.04 27.2906 8.83 26.9306 8.83 26.5506ZM11.57 25.7906H14.54V27.0106H11.57V25.7906ZM12.25 29.4406H11.57V28.2206L14.38 28.1406C14.72 28.1406 14.61 28.5306 14.61 29.3606C13.73 29.3706 13.14 29.4406 12.25 29.4406ZM12.25 29.4406H30.8ZM30.81 29.4406C31.27 29.4506 31.62 29.6606 32.1 29.6706V30.9606C31.74 30.7706 31.57 30.7006 31.33 30.3606C31.21 30.2106 30.85 29.6206 30.81 29.4406ZM6.78 25.9406C7.33 25.9406 7.87 27.5506 8.05 28.1006C8.31 28.9006 8.53 30.0306 8.61 30.9606C7.84 30.7806 7.67 30.6206 6.86 30.8106C6.55 30.2206 5.84 29.8206 5.19 29.6706C5.22 29.5906 5.92 25.9406 6.78 25.9406ZM33.24 29.6706C35.32 29.6706 37.88 27.5806 38.26 25.9406C38.44 25.9806 38.57 26.0206 38.72 26.0906C38.72 27.4106 38.72 28.7306 38.72 30.0406C38.72 31.4106 38.8 32.5306 38.8 33.9206H38.19C38.19 30.7006 38.43 31.1106 36.59 31.1106H33.32C33.31 30.5206 33.24 30.2506 33.24 29.6706ZM11.57 32.2506V30.5806H14.61V34.0006H12.79C12.33 34.0006 12.24 34.0806 11.8 34.0806C11.8 32.5006 11.57 32.8006 11.57 32.2506ZM2.44 32.7106C2.44 31.2506 4.12 30.0306 5.68 31.2206C5.94 31.4206 6.25 32.1006 6.54 32.1006C7.07 32.1006 7.6 31.5906 8.42 32.3506C8.76 32.6706 8.94 32.5606 9.38 32.5006C10.72 32.3006 10.92 34.0806 10.34 34.0806H3.13C2.78 34.0806 2.44 33.2606 2.44 32.7106ZM15.75 32.2506V23.3506H17.57V33.9906H15.82C15.83 33.3206 15.75 32.9506 15.75 32.2506ZM33.31 32.2506H36.96V33.1606C36.96 33.5406 37.03 33.5006 37.04 33.8406H33.31V32.2506ZM24.42 34.0006H20.47C20.49 33.1706 21.36 32.2206 21.89 31.7006C22.99 30.6306 24.95 30.4006 26.42 30.9406C26.66 31.0306 26.83 31.0306 26.98 31.2206L28.6 33.9306C27.12 33.9306 25.9 34.0006 24.42 34.0006ZM1 36.3606V35.1706C1.04 34.8006 1.19 34.5106 1.61 34.2306C1.55 33.9606 1.44 33.8206 1.36 33.4906C0.85 31.2906 2.58 29.6306 4.04 29.5906C4.04 28.6606 5.02 24.7206 6.78 24.7206C7.2 24.7206 7.29 24.8706 7.62 24.9506V18.2606C7.65 18.0306 7.84 17.8006 8.07 17.8006C8.98 17.8006 8.75 18.6306 8.75 20.0006H17.49V13.2306H8.76V16.2006C8.76 16.3806 8.49 16.6606 8.3 16.6606C7.39 16.6606 7.54 15.9406 7.54 14.8406H3.97C3.18 14.8406 2.28 14.3006 1.9 13.8706C-0.12 11.5906 1.91 7.91062 5.16 8.48062C5.75 8.58062 6.53 8.97062 6.79 9.36062C7.68 8.93062 8.87 9.40062 9.6 9.89062L11.9 6.94062C12.16 6.65062 12.5 6.39062 13.02 6.39062C14.16 6.39062 14.36 7.09062 14.98 7.78062L18.5 12.1606C18.85 12.6506 18.72 15.2306 18.72 15.8906C20.25 15.8906 21.52 15.8106 23.05 15.8106C23.55 15.8106 24.19 15.7406 24.19 16.4206C24.19 17.1706 23.44 17.0306 22.67 17.0306C22.68 17.3706 22.75 17.3306 22.75 17.7106V19.6106C23.46 19.6106 23.84 19.6306 24.53 19.9606C25.49 20.4306 26.57 22.0706 26.71 22.6506H26.86C26.86 21.9806 27.3 21.0806 27.58 20.6306C29.61 17.2706 34.14 16.6806 37 19.5206C37.75 20.2606 38.35 21.3606 38.57 22.4306C38.81 23.6106 38.75 23.6606 38.65 24.7806C39.24 25.0606 39.94 24.8806 39.94 25.8406V36.1806C39.94 36.5206 39.68 36.8406 39.46 36.9906C39.13 37.2206 38.87 37.1706 38.35 37.1706C37.82 37.1606 37.63 37.2506 37.14 37.2506H25.5C23.77 37.2506 22.25 37.3306 20.48 37.3306C17.03 37.3306 13.59 37.3306 10.14 37.3306C9.22 37.3306 8.57 37.4106 7.63 37.4106C6.77 37.4106 5.91 37.4106 5.04 37.4106C4.01 37.4106 1.99 37.5906 1.43 37.1406C1.21 36.9806 1 36.7006 1 36.3606ZM2.14 36.2106V35.3006C8.32 35.3006 14.27 35.2206 20.46 35.2206L34.22 35.1406C35.84 35.1406 37.2 35.0606 38.78 35.0606V36.0506C26.52 36.0606 14.42 36.2106 2.14 36.2106Z" fill="#0B2336" />
                    <path className="about_icon_text_img_color" fill-rule="evenodd" clip-rule="evenodd" d="M21.9102 7.47084C21.9102 8.56084 22.7802 9.37084 23.6602 9.37084H26.8502C27.3202 9.37084 27.6602 8.90084 27.4302 8.49084C27.1902 8.06084 26.6302 8.15084 26.0102 8.15084L23.5702 8.16084C22.7102 7.92084 23.1202 6.44084 24.1002 6.17084C25.2402 5.86084 24.7402 6.25084 25.2002 5.06084C25.3802 4.59084 25.7202 4.07084 26.0802 3.81084C27.0202 3.15084 28.1702 2.98084 29.2202 3.49084C29.8502 3.80084 30.2502 4.29084 30.5402 4.90084C30.7102 5.27084 30.6802 5.65085 30.9202 5.89085C31.4602 6.44085 31.8702 5.57084 32.8102 6.74084C33.0902 7.09084 33.2502 7.09084 33.8302 7.09084C34.2902 7.09084 34.7402 7.09084 35.2002 7.09084C35.4002 7.40084 35.4302 7.18084 35.4302 7.70084C35.4302 7.95084 35.1202 8.12084 34.8902 8.15084C34.6302 8.18084 34.1202 8.15084 33.8302 8.15084C33.2002 8.15084 29.0702 8.10084 28.7602 8.18084C28.0202 8.37084 28.1602 9.37084 28.9602 9.37084L34.7402 9.30084C37.3102 9.32084 37.1402 5.92084 34.8902 5.87084C33.8902 5.85084 33.7702 6.03084 33.3802 5.63084C32.5002 4.71084 31.9702 5.25084 31.7002 4.65084C31.2202 3.59084 30.7002 2.83085 29.4702 2.32085C27.2202 1.38085 24.7802 2.61084 24.0902 4.65084C23.9402 5.10084 24.1402 4.89084 23.5702 5.11084C22.6602 5.47084 21.9102 6.41084 21.9102 7.47084Z" fill="#0B2336" />
                    <path className="about_icon_text_img_color" fill-rule="evenodd" clip-rule="evenodd" d="M10.5801 16.4397C10.5801 17.9997 11.7601 19.0397 13.1001 19.0697C14.4901 19.0997 15.6801 18.0497 15.6801 16.3597C15.6801 15.0497 14.4701 13.9297 13.1701 13.9297C11.7801 13.9297 10.5801 15.0697 10.5801 16.4397ZM13.2401 17.8797C12.3701 17.8797 11.8001 17.2497 11.8001 16.7397V16.2797C11.8001 15.7497 12.4201 15.1397 12.9401 15.1397C13.3801 15.1397 13.8101 15.1397 14.1701 15.5797C15.0601 16.6697 14.1101 17.8797 13.2401 17.8797Z" fill="#0B2336" />
                  </svg>

                </div>
                Bolalar <br />o‘yingohi
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 17.793H2.93001C4.38001 17.793 5.56 18.983 5.56 20.423V32.123C5.56 33.573 4.37001 34.753 2.93001 34.753H2V17.793Z" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                    <path d="M8.72006 21.0723H5.56006V31.4823H8.72006V21.0723Z" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                    <path d="M29.5801 21.413L26.8201 26.183C21.1401 22.903 16.0001 19.933 10.3101 16.653C8.35007 15.523 8.21008 14.063 8.99008 12.713L10.3401 10.373L29.5801 21.413Z" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                    <path d="M38.0199 17.7429L34.2999 24.1929L10.3398 10.3729C11.2398 8.82287 11.7498 7.93287 12.6398 6.38287C13.1998 5.40287 14.6799 4.35287 16.6599 5.50287L38.0199 17.7429Z" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                    <path d="M10.8301 13.7539L14.7101 15.9939" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                    <path d="M27.71 24.6428C27.71 24.6428 29.1199 25.5228 30.7599 24.9928C32.3999 24.4728 32.8999 23.3828 32.8999 23.3828" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                    <path d="M8.73047 27.9728H12.6605C13.9605 27.9728 15.5505 27.9528 17.0705 26.8728C18.6005 25.7928 19.4805 23.5628 20.2405 22.3828" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                    <path d="M8.73047 24.5326H12.3105C13.2905 24.5326 14.1205 24.6126 15.0705 23.9826C16.0305 23.3526 16.8905 21.3226 17.2205 20.6426" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                    <path d="M32.9998 17.5938C33.8198 17.5938 34.4898 18.2638 34.4898 19.0838C34.4898 19.9038 33.8198 20.5738 32.9998 20.5738C32.1798 20.5738 31.5098 19.9038 31.5098 19.0838C31.5098 18.2638 32.1798 17.5938 32.9998 17.5938Z" stroke="#0B2336" stroke-width="1.1999" stroke-miterlimit="22.9256" stroke-linecap="round" />
                  </svg>
                </div>
                24/7 Qo'riqlash va videkuzatuv
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card" >
                  <svg className="about_icon_text_img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.75 6.1522C13.587 6.1522 6.1195 13.6195 6.1195 22.7826C6.1195 31.9456 13.5544 39.413 22.75 39.413C31.913 39.413 39.3478 31.9456 39.3478 22.7826C39.3478 13.5869 31.8805 6.1522 22.75 6.1522ZM22.75 41.5C12.413 41.5 4 33.087 4 22.75C4 12.413 12.413 4 22.75 4C33.087 4 41.5 12.413 41.5 22.75C41.4674 33.087 33.0544 41.5 22.75 41.5Z" fill="#0B2336" />
                    <path d="M34.4729 17.5C34.0901 17.5 33.7393 17.3065 33.5479 16.9516C31.4425 13.0484 27.4229 10.629 23.0527 10.629C22.4785 10.629 22 10.145 22 9.56455C22 8.9839 22.4465 8.5 23.0527 8.5C28.1885 8.5 32.9098 11.3387 35.3662 15.9193C35.6533 16.4354 35.4619 17.0806 34.9515 17.3387C34.8238 17.4677 34.6324 17.5 34.4729 17.5Z" fill="#0B2336" />
                    <path d="M54.3212 41.5C49.3751 41.5 44.6554 39.0944 41.7136 35.0635C41.3581 34.5758 41.455 33.9257 41.9399 33.5681C42.4249 33.2105 43.0714 33.3081 43.427 33.7957C45.9808 37.274 50.054 39.3545 54.3536 39.3545C61.8212 39.3545 67.8988 33.243 67.8988 25.7338C67.8988 18.2245 61.8212 12.1131 54.3536 12.1131C50.7005 12.1131 47.3062 13.5433 44.72 16.144C44.2999 16.5666 43.6532 16.5666 43.2331 16.144C42.8128 15.7213 42.8128 15.0712 43.2331 14.6487C46.2071 11.658 50.1511 10 54.3536 10C62.9849 10 70 17.0542 70 25.7338C70 34.4458 62.9527 41.5 54.3212 41.5Z" fill="#0B2336" />
                    <path d="M22.75 76C22.3409 76 22 75.5061 22 74.9134V20.0866C22 19.4939 22.3181 19 22.75 19C23.159 19 23.5 19.4939 23.5 20.0866V74.9134C23.4772 75.5061 23.159 76 22.75 76Z" fill="#0B2336" />
                    <path d="M22.495 28C22.2568 28 21.9889 27.9107 21.8101 27.7027L17.7902 23.6579C17.4032 23.2714 17.4032 22.6766 17.7902 22.2899C18.1774 21.9034 18.7729 21.9034 19.1601 22.2899L23.2097 26.3345C23.5967 26.7212 23.5967 27.316 23.2097 27.7027C22.9714 27.9107 22.7332 28 22.495 28Z" fill="#0B2336" />
                    <path d="M22.9867 35.5C22.7124 35.5 22.4686 35.4073 22.2858 35.191C21.8896 34.7893 21.9202 34.1714 22.2858 33.7699L27.8013 28.3012C28.1974 27.8996 28.8373 27.8996 29.2029 28.3012C29.599 28.7029 29.599 29.3516 29.2029 29.7224L23.6875 35.191C23.4742 35.4073 23.2305 35.5 22.9867 35.5Z" fill="#0B2336" />
                    <path d="M10.7498 45.0599C8.1514 45.0599 6.0598 47.1514 6.0598 49.75C6.0598 52.3486 8.1514 54.4401 10.7498 54.4401C13.3484 54.4401 15.4399 52.3486 15.4399 49.75C15.4399 47.1514 13.3484 45.0599 10.7498 45.0599ZM10.7498 56.5C7.0105 56.5 4 53.4577 4 49.75C4 46.0105 7.04215 43 10.7498 43C14.4892 43 17.4997 46.0423 17.4997 49.75C17.5315 53.4577 14.4892 56.5 10.7498 56.5Z" fill="#0B2336" />
                    <path d="M22.4698 62.5C22.2183 62.5 21.9351 62.4046 21.7464 62.2141L11.8068 52.271C11.3977 51.8581 11.3977 51.2227 11.8068 50.8097C12.2157 50.3968 12.8448 50.3968 13.2537 50.8097L23.1933 60.7528C23.6023 61.1657 23.6023 61.8011 23.1933 62.2141C22.9732 62.3729 22.7215 62.5 22.4698 62.5Z" fill="#0B2336" />
                    <path d="M31.9574 62.9591C30.9436 62.9591 30.1259 63.7245 30.1259 64.6735V64.7653C30.1259 65.7144 30.9436 66.4796 31.9574 66.4796H67.5097C68.5237 66.4796 69.3414 65.7144 69.3414 64.7653V64.6735C69.3414 63.7245 68.5237 62.9591 67.5097 62.9591M67.5097 68.5H31.9574C29.7661 68.5 28 66.847 28 64.7959V64.7041C28 62.653 29.7661 61 31.9574 61H67.5097C69.7011 61 71.5 62.653 71.5 64.7041V64.7959C71.5 66.847 69.7011 68.5 67.5097 68.5Z" fill="#0B2336" />
                    <path d="M34.75 62.5C34.3409 62.5 34 61.9768 34 61.3489V47.1511C34 46.5232 34.3409 46 34.75 46C35.159 46 35.5 46.4884 35.5 47.1511V61.3489C35.5 62.0116 35.159 62.5 34.75 62.5Z" fill="#0B2336" />
                    <path d="M64.75 62.5C64.3409 62.5 64 61.9768 64 61.3489V47.1511C64 46.5232 64.3409 46 64.75 46C65.159 46 65.5 46.4884 65.5 47.1511V61.3489C65.5 62.0116 65.1818 62.5 64.75 62.5Z" fill="#0B2336" />
                    <path d="M68.923 52H30.577C29.9895 52 29.5 51.6769 29.5 51.2616C29.5 50.8462 29.9895 50.5 30.577 50.5H68.923C69.5106 50.5 70 50.8231 70 51.2616C70 51.6769 69.5106 52 68.923 52Z" fill="#0B2336" />
                    <path d="M68.923 58H30.577C29.9895 58 29.5 57.659 29.5 57.25C29.5 56.8409 29.9895 56.5 30.577 56.5H68.923C69.5106 56.5 70 56.8181 70 57.25C70 57.659 69.5106 58 68.923 58Z" fill="#0B2336" />
                    <path d="M34 68.5H32.5V76H34V68.5Z" fill="#0B2336" />
                    <path d="M67 68.5H65.5V76H67V68.5Z" fill="#0B2336" />
                    <path d="M54.25 46C53.8409 46 53.5 45.5176 53.5 44.9387V26.0613C53.5 25.4824 53.8409 25 54.25 25C54.659 25 55 25.4503 55 26.0613V44.9387C55 45.5176 54.659 46 54.25 46Z" fill="#0B2336" />
                    <path d="M54.4752 32.5C54.237 32.5 53.9987 32.4112 53.7902 32.2336C53.4032 31.849 53.4032 31.2571 53.7902 30.8723L57.8399 26.7886C58.2271 26.4038 58.8226 26.4038 59.2097 26.7886C59.5967 27.1732 59.5967 27.7651 59.2097 28.1498L55.1897 32.2336C54.9814 32.4112 54.7432 32.5 54.4752 32.5Z" fill="#0B2336" />
                    <path d="M53.9996 37C53.7866 37 53.5738 36.9403 53.3912 36.8211L47.8856 32.7649C47.4598 32.4369 47.3684 31.8405 47.7031 31.3932C48.0377 30.9457 48.646 30.886 49.1023 31.1844L54.6079 35.2404C55.0337 35.5684 55.1251 36.165 54.8209 36.6123C54.6079 36.8509 54.3038 37 53.9996 37Z" fill="#0B2336" />
                    <path d="M62.958 20.5C62.6053 20.5 62.2846 20.3536 62.0923 20.0902C60.3931 17.8074 57.5717 16.4317 54.5579 16.4317C53.9809 16.4317 53.5 15.9926 53.5 15.4658C53.5 14.939 53.9809 14.5 54.5579 14.5C58.277 14.5 61.7397 16.1975 63.8236 19.0073C64.1442 19.4464 64.0159 20.0317 63.535 20.3244C63.3427 20.4708 63.1503 20.5 62.958 20.5Z" fill="#0B2336" />
                    <path d="M74.9035 76H5.0965C4.49845 76 4 75.659 4 75.25C4 74.8409 4.49845 74.5 5.0965 74.5H74.9035C75.5015 74.5 76 74.8409 76 75.25C76 75.659 75.5015 76 74.9035 76Z" fill="#0B2336" />
                  </svg>
                </div>
                Yopiq va xavfsiz
                hovli
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2045_3034" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="7" y="8" width="65" height="64">
                      <rect x="7" y="6.6" width="65" height="64" fill="url(#pattern0_2045_3034)" />
                    </mask>
                    <g mask="url(#mask0_2045_3034)">
                      <rect x="2" y="-4" width="76" height="88" fill="#0B2336" />
                    </g>
                    <defs>
                      <pattern id="pattern0_2045_3034" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_2045_3034" transform="scale(0.0153846 0.015200)" />
                      </pattern>
                      <image id="image0_2045_3034" width="65" height="64" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAMAAAByderSAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMAM7tl/AR2iAjoqpsL8V3Uow/tIjQdGNwt80MV2JGEcVD1TEjitX9sWVM4JZg8KhL3w7/Oy8dojkDPqe2tUEYAAAOYSURBVFjDpZbrWuIwFEVDL9haSqEg0IIiV0cRwVFQZ73/e80YaXojRZn1K/3OadKcnL0boadjertRaPnus2d2xI9pjz/I8jJu/Oz9mwjoe+Ppuraejr0RcCN+wL0L8+Uqu6Pl77X4Ns41uGNHnE3vFVptcT69EVFTGzVehydrGBA+aKO2y+7UmVwSdSvCXZ9LUYkJt9nnxmCQT7gFs7IIPm+Z18evFtTzKW/4PaHHo5+eYjMELHdaOOs+ntByZXGviuaBu+zaQrK5t1W7YV0JHRcEatyCayfz1FLjgAuhY55WaQz7bJ/DXVpt19ZM8M62rUpaWOiGMIm1t7xrZlhipC/MnWIBl6ox1bCIQT3d67gQ3Kc1qmNoyzBLNgFXxXOCpA9mzDWqhqfD8AG/FPZJ9LICJQ7dKlNGpfBI9XsbjnfEEySnFOOWwq7ao4DVcVHAMP3OTSG6Sfc4hOPSsC0G6YK/it5JmAwHWOI4I5qpxJ4LwWceleQYaZXZUjWxDrOlb1lPqUg8nckTqoa/Jurmvela7TbkVmfzmZDzgn+fOpPPR0M9EGp/BY8s1Hj4AYvY/lwzXkCQevSCR72PwiD1OA/wX4ydD3hpEw6gwot/08pOeBnxyfYy6/8tfgs9M6xOrjLvzbr5nhNBx2ImKnjlj6jmD6+V8VhtUl+qWFSy4Lky/sxCVDOwpCJ0/MIaiBNc47a1wbabtuZZSfrpixrS/f4flN6qMQjs4wYSYIjv0Ik097Ybom/eK++w1qLM2kr/fKf30S/beaOv9nCaXqgUllVU2BPf5haamvuRnmGz/sV4JQ9+8pT/mUxkm6zGh6xm6VY4jTgghWG/EDSyRQh4saWBJETT0hWsbxyQulj5POb8z19JXSRJc6JewehHTkFD2VI0KerNGeEVFHlbtt1J7TCsTcrmOs2r1DjiffaO+fCryHN29hFPNXL2WJMtA4Smug24GNLtDdwrdaghIBuuljFMO5ANtAmRGEn6eitvuG9pk18ZSMKNbDGlwD0T+VK7848LCz9WAsEUJkoOsY918ZnUltNN2CtPyWrxIWApnJY8sy0EsJXjliOWjB5yWnXbyaCRO6jYEQPKDIQdOzmtyaXlx5iixNQsMi0nmXL7h4I49YsD9YbQ00jTnOQIujCTLahoVploPm0GXbH4aoyNd3nAG1YpOE3bfLXiQkTE4nxiJqKP162dS9ejL+74H2S37fucT/9O/AWw+Z55pWtuZwAAAABJRU5ErkJggg==" />
                    </defs>
                  </svg>
                </div>
                Qulay <br /> joylashuv
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.7601 72.6696H19.5601V72.8696C19.5601 72.9284 19.5604 72.9898 19.5607 73.0531C19.5633 73.5661 19.5665 74.2113 19.4146 74.7542C19.3303 75.0557 19.2026 75.3066 19.0162 75.4813C18.8344 75.6516 18.5814 75.764 18.2129 75.764H5.4033C5.10618 75.764 4.804 75.6216 4.57321 75.3908C4.34241 75.16 4.2 74.8578 4.2 74.5607V5.4033C4.2 5.10618 4.34241 4.804 4.57321 4.57321C4.804 4.34241 5.10618 4.2 5.4033 4.2H74.5967C74.8938 4.2 75.196 4.34241 75.4268 4.57321C75.6576 4.804 75.8 5.10618 75.8 5.4033V74.5607C75.8 74.8578 75.6576 75.16 75.4268 75.3908C75.196 75.6216 74.8938 75.764 74.5967 75.764H61.7871C61.4084 75.764 61.1509 75.6508 60.9681 75.4808C60.7807 75.3066 60.6543 75.0564 60.5723 74.7555C60.4291 74.2305 60.4343 73.6115 60.4385 73.1059C60.4392 73.0238 60.4399 72.9448 60.4399 72.8696V72.6696H60.2399H19.7601ZM16.7217 21.1634V20.9634H16.6987C16.7445 20.6203 16.9093 20.3572 17.1489 20.1694C17.4384 19.9425 17.8503 19.8162 18.3208 19.8162H61.6072C62.094 19.8162 62.5052 19.9506 62.7903 20.181C63.0712 20.408 63.2423 20.7374 63.2423 21.1634V72.7256V72.9256H63.4423H72.7256H72.9256V72.7256V7.23838V7.03838H72.7256H7.23838H7.03838V7.23838V72.7256V72.9256H7.23838H16.5217H16.7217V72.7256V21.1634ZM19.7241 22.6186H19.5241V22.8186V69.5952V69.7952H19.7241H38.3988H38.5988V69.5952V22.8186V22.6186H38.3988H19.7241ZM41.4933 22.6186H41.2933V22.8186V69.5952V69.7952H41.4933H60.1679H60.3679V69.5952V22.8186V22.6186H60.1679H41.4933Z" fill="#0B2336" stroke="white" stroke-width="0.4" />
                    <path d="M31.3602 14.3281L31.2741 14.287L31.188 14.3282C30.9601 14.4372 30.7116 14.6155 30.4604 14.8098C30.342 14.9013 30.2273 14.993 30.1116 15.0854C29.9685 15.1998 29.8238 15.3153 29.6688 15.4335C29.3974 15.6404 29.127 15.829 28.8645 15.9656C28.6007 16.1028 28.3594 16.1797 28.1438 16.1797C27.5714 16.1797 27.1713 16.0661 26.9186 15.8776C26.7209 15.73 26.5973 15.5244 26.5582 15.2484H26.5807V15.0484C26.5807 14.9255 26.6455 14.7713 26.79 14.5871C26.9317 14.4063 27.1322 14.2193 27.3609 14.0345C27.6694 13.7854 28.0044 13.5586 28.295 13.362C28.442 13.2625 28.5776 13.1707 28.6927 13.0876L28.6927 13.0876L28.6943 13.0864C28.8169 12.9961 28.951 12.8889 29.0906 12.7773C29.1497 12.7301 29.2097 12.6821 29.2702 12.6343C29.4773 12.4708 29.6973 12.3034 29.9299 12.1535C30.3965 11.8526 30.8931 11.6351 31.4076 11.6499C31.8356 11.6831 32.3358 11.9426 32.8299 12.2808C33.1792 12.52 33.5037 12.7824 33.7824 13.0078C33.8972 13.1006 34.0042 13.1871 34.102 13.2632L34.1019 13.2634L34.1097 13.2689C34.2253 13.3503 34.3541 13.4364 34.487 13.5253L34.5154 13.5442C34.6591 13.6404 34.8081 13.7404 34.9556 13.8445C35.2522 14.0537 35.5345 14.2737 35.7474 14.5013C35.9628 14.7316 36.0862 14.9478 36.1053 15.1483C36.1231 15.3348 36.0541 15.5513 35.7812 15.8001L35.7812 15.8001L35.7796 15.8016C35.4287 16.1286 35.0449 16.2301 34.6457 16.1967C34.2375 16.1625 33.8073 15.9863 33.3845 15.7431C32.9632 15.5008 32.5643 15.2012 32.2177 14.9343C32.1816 14.9066 32.1461 14.8791 32.1111 14.8521C31.9793 14.7503 31.8553 14.6545 31.7439 14.573C31.605 14.4712 31.4732 14.3819 31.3602 14.3281Z" fill="#0B2336" stroke="white" stroke-width="0.4" />
                    <path d="M43.8889 12.664C43.892 12.6243 43.9103 12.5658 43.9563 12.4889C44.0056 12.4063 44.0784 12.3169 44.1672 12.228C44.3459 12.0494 44.5687 11.8937 44.7415 11.815C45.257 11.5898 45.6961 11.6202 46.1842 11.8803C46.3669 11.9802 46.8573 12.3294 47.3456 12.7001C47.5872 12.8835 47.8235 13.0686 48.0145 13.2251C48.2106 13.3859 48.3454 13.5059 48.3955 13.5631L48.4973 13.6794L48.6355 13.6103C48.8987 13.4787 49.2169 13.2306 49.5504 12.9706C49.5643 12.9598 49.5782 12.949 49.5921 12.9381C49.9498 12.6595 50.3382 12.3592 50.7438 12.1193C51.1504 11.8789 51.5582 11.709 51.9521 11.6776C52.3371 11.6469 52.7197 11.7473 53.0918 12.0705C53.3709 12.3179 53.4356 12.5334 53.4126 12.7205C53.3874 12.9251 53.2517 13.148 53.0212 13.3871C52.794 13.6228 52.4973 13.8513 52.1916 14.0699C52.0827 14.1476 51.9713 14.2252 51.862 14.3011C51.6727 14.4327 51.4902 14.5597 51.3402 14.675C51.1611 14.8074 50.9738 14.9563 50.7855 15.106C50.753 15.1318 50.7205 15.1577 50.688 15.1835C50.4649 15.3605 50.2407 15.5361 50.0187 15.6921C49.564 16.0117 49.1606 16.2179 48.8339 16.2179C48.1993 16.2179 47.6968 16.0107 47.2283 15.7099C46.9923 15.5583 46.7663 15.3838 46.535 15.1991C46.4828 15.1573 46.4302 15.115 46.3771 15.0722C46.1981 14.9282 46.0142 14.7801 45.8244 14.6394C45.7063 14.5476 45.564 14.4458 45.4144 14.3388C45.3546 14.296 45.2936 14.2524 45.2326 14.2082C45.0145 14.0506 44.7889 13.8817 44.5846 13.7035C44.3796 13.5246 44.2024 13.3418 44.0777 13.1582C43.959 12.9835 43.895 12.8191 43.8889 12.664Z" fill="#0B2336" stroke="white" stroke-width="0.4" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.0332 37.5403C66.0332 38.8357 67.9402 39.2675 68.408 37.9361C69.0917 36.101 66.0332 35.4893 66.0332 37.5403Z" fill="#0B2336" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.0332 42.3221C66.0332 43.5454 67.2566 44.1212 68.0842 43.4015C68.444 43.1137 68.5879 42.5739 68.444 42.1062C67.9762 40.6669 66.0332 41.2786 66.0332 42.358V42.3221Z" fill="#0B2336" />
                  </svg>
                </div>
                Shovqinsiz <br /> liftlar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;