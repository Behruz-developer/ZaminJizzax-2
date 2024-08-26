/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/joylashgan.png";

const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">

          <div className="location_card1" data-aos="fade-right" data-aos-offset="-200">
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Zamin Jizzax turar-joy majmuasi Jizzax shahrining eng qulay va strategik joylaridan birida joylashgan. Bu majmua nafaqat qulay yashash sharoitlarini, balki barcha zarur infratuzilmalarga oson kirish imkoniyatini ham taqdim etadi.            </p>
            <p className="location_text">
              Majmua Jizzax shahrining asosiy transport yoʻllariga va jamoat transporti bekatlariga yaqin joylashgan. Bu esa sizga shaharning istalgan nuqtasiga tez va oson yetib borish imkonini beradi.            </p>
          </div>
          <div className="location_card_left" data-aos="fade-left" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card2" data-aos="fade-right" data-aos-offset="-200">
            <p className="location_text2">
              Zamin Jizzax — bu Jizzax shahrining markazida, barcha qulayliklar bilan
              oʻralgan mukammal manzil. Bu yerda siz oʻzingizni uyda va hayotning
              markazida his qilasiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
