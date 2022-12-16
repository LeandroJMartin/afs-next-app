import styled from "styled-components";
import PropTypes from "prop-types";
import bannerType from "../../types/bannerType";

const Dots = ({ banners, bannerAtualId, onClick }) => (
    <DotsWrapper>
        {banners.map((banner) => (
            <DotButton onClick={() => onClick(banner._id)} >
                <Dot className={banner._id == bannerAtualId ? " ativo" : ""}></Dot>
            </DotButton>
        ))}
    </DotsWrapper>
);

const DotsWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-top:-50px;
    position:relative;
    z-index:10;
`;

const DotButton = styled.button`
    background:none;
    margin:5px;
`;

const Dot = styled.div`
    background-color:white;
    border:1px solid #76B08E;
    border-radius:50px;
    display:inline-block;
    height:20px;
    width:20px;

    &.ativo {
        background-color:#76B08E;
    }
`;

Dots.propTypes = {
  banners: PropTypes.arrayOf(bannerType),
  bannerAtualId: PropTypes.string,
  onClick: PropTypes.func
};

Dots.defaultProps = {
    banners: [],
    bannerAtualId: "0",
    onClick: function() {}
};

export default Dots;
