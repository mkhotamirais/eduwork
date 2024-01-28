import Button from "../../components/Button";
import { portfolioData } from "./portfolioData.js";

const PortfolioTask = () => {
  return (
    <>
      <section id="hero" className="text-center pt-16">
        <h4 className="text-3xl text-slate-500">My name is</h4>
        <h1 className="text-7xl font-semibold leading-relaxed">
          M Khotami Rais
        </h1>
        <p className="text-3xl leading-relaxed">
          Web Developer | Student | Freelancer
        </p>
        <a href="#myBio">
          <Button className={"mx-1 mt-8"}>My Bio</Button>
        </a>
        <a href="#myPortfolio">
          <Button className={"mx-1 bg-slate-700 hover:bg-slate-500 text-white"}>
            Portfolio
          </Button>
        </a>
      </section>
      <section id="myBio">
        <h1 className="text-center text-3xl font-semibold leading-relaxed">
          My Bio
        </h1>
        <p className="text-xl leading-relaxed mb-3">
          Halo, nama saya M Khotami Rais biasa dipanggil Khoami. Saya adalah
          seorang pelajar di Eduwork, cita cita saya adalah menjadi seorang
          Programmer Web di perusahaan besar di indonesia. Kesibukan saya
          belakangan ini adalah belajar koding otodidak yakni dengan mencari
          referensi dari website dan youtube yang berhubungan dengan kebutuhan
          belajar saya.
        </p>
        <p className="text-xl leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse tempora
          necessitatibus, dicta architecto impedit sapiente ipsa? Deserunt dicta
          quod consectetur aspernatur debitis nesciunt, at est consequatur nobis
          qui? Quibusdam accusamus excepturi non id quam facilis perferendis,
          nulla cupiditate quaerat saepe quia alias dolores veniam fugiat, esse
          sit debitis repellendus vel distinctio, vitae aspernatur molestiae
          ipsum? Error magnam est illum consectetur voluptates facere iure
          dolorem asperiores, eos minus, dicta nemo, expedita mollitia ut quia
          quas cum non ex? Quidem libero obcaecati tempore omnis hic. Aliquam,
          cupiditate. Labore consequuntur animi ullam quidem architecto. Neque
          nobis doloremque temporibus voluptas ipsa aliquam. Praesentium,
          dignissims!
        </p>
      </section>
      <section id="myPortfolio">
        <h1 className="text-center text-3xl font-semibold leading-relaxed">
          Portfolio
        </h1>
        <div className="portfolio">
          {portfolioData.map((item, i) => (
            <a href={item.url} target="blank" key={i}>
              <div className="card mt-3">
                <div className="image">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioTask;
