import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import postType from '../../types/postType';
import PostCard from './PostCard';

const Lista = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  li {
    flex: 1;
    margin: 0 1rem;
  }
  ${(props) => props.overFlowScroll
    && css`
      @media (max-width: 675px) {
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        margin-right: -1rem;
        margin-left: 1rem;
        scroll-snap-type: x mandatory;
        justify-content: flex-start;
        padding: 2rem;
        li {
          min-width: 30rem;
          img {
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.09);
          }
        }
      }
    `}
`;

const ListaPosts = ({ posts, className, overFlowScroll }) => (
  <Lista className={className} overFlowScroll={overFlowScroll}>
    {posts.map((post) => (
      <li key={post._id}>
        <PostCard post={post} />
      </li>
    ))}
  </Lista>
);

ListaPosts.propTypes = {
  posts: PropTypes.arrayOf(postType),
  className: PropTypes.string,
  overFlowScroll: PropTypes.bool,
};

ListaPosts.defaultProps = {
  posts: [],
  className: '',
  overFlowScroll: false,
};

export default ListaPosts;
