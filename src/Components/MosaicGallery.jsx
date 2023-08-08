import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineAdsClick } from "react-icons/md";

const MosaicGallery = () => {
  const image1 =
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7095d4da41f947fd879caf5601052428_9366/Ultrabounce_Running_Shoes_White_HP5778_04_standard.jpg";
  const image2 =
    "https://i8.amplience.net/i/jpl/jd_FD0824-100_C_0010_a?qlt=92&w=750&h=531&v=1&fmt=auto";
  const image4 =
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/390777/01/bv/fnd/ZAF/w/1000/h/1000/fmt/png";
  const image5 =
    "https://images.pexels.com/photos/163369/stairs-shoes-sneakers-sole-163369.jpeg?auto=compress&cs=tinysrgb&w=600";

  const styles = {
    fontSize: "2rem",
    color: "red",
  };

  return (
    <Container>
      <article>
        <div className="one">
          <img src={image1} alt="" />
          <NavLink to="/adidasPage">
            {" "}
            <button>
              Adidas <MdOutlineAdsClick style={styles} />
            </button>{" "}
          </NavLink>
        </div>
        <div className="two">
          <img src={image2} alt="" />
          <NavLink to="/nikePage">
            {" "}
            <button>
              Nike <MdOutlineAdsClick style={styles} />
            </button>{" "}
          </NavLink>
        </div>
        <div className="three">
          <img src={image4} alt="" />
          <NavLink to="/pumaPage">
            <button>
              Puma <MdOutlineAdsClick style={styles} />
            </button>
          </NavLink>
        </div>
        <div className="four">
          <img src={image5} alt="" />
          <NavLink to="/varietyPage">
            <button>
              Variaty <MdOutlineAdsClick style={styles} />
            </button>
          </NavLink>
        </div>
      </article>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  line-height: 0;
  margin-top: 1rem;

  article {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin: 1rem;
    img {
      object-fit: fill;
      height: 40vh;
      width: 100%;
    }

    .one {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    .two {
      grid-column-start: 2;
      grid-column-end: 3;
    }
    .three {
      grid-column-start: 3;
      grid-column-end: 5;
    }

    .four {
      grid-column-start: 1;
      grid-column-end: 5;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 1.2rem;
      padding: 0.3rem;
      font-family: "Press Start 2P", cursive;
      color: red;
    }
    @media screen and (max-width: 900px) {
      .one {
        grid-column-start: 1;
        grid-column-end: 3;
      }
      .two {
        grid-column-start: 3;
        grid-column-end: 5;
      }
      .three {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      .four {
        grid-column-start: 3;
        grid-column-end: 5;
      }
    }

    @media screen and (max-width: 600px) {
      .one {
        grid-column-start: 1;
        grid-column-end: 5;
      }
      .two {
        grid-column-start: 1;
        grid-column-end: 5;
      }
      .three {
        grid-column-start: 1;
        grid-column-end: 5;
      }

      .four {
        grid-column-start: 1;
        grid-column-end: 5;
      }
    }
  }
`;

export default MosaicGallery;
